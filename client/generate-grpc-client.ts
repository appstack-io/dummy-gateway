import * as https from 'https';
import * as fs from 'fs';
import { services } from './client.config.json';
import { combineProtos } from '@appstack-io/proto';
import { exec } from 'child_process';

(async () => {
  await Promise.all(
    Object.keys(services).map((key) => {
      const service = services[key];
      const { repository, branch } = service;
      const url = `https://raw.githubusercontent.com/${repository}/${branch}/src/combined.proto`;
      fs.mkdirSync(`${__dirname}/temp/${key}`, { recursive: true });
      return downloadFile(url, `${__dirname}/temp/${key}/combined.proto`);
    }),
  );

  combineProtos([`${__dirname}/temp`], `${__dirname}/src/combined.proto`);
  exec(
    `node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false --proto_path=. src/combined.proto && mv ./src/src/combined.ts ./src/combined.ts && rm -rf ./src/src`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
      }
      const combined = fs.readFileSync(`${__dirname}/src/combined.ts`, 'utf8');
      const cleaned = combined.replace(
        '../google/protobuf/empty',
        './google/protobuf/empty',
      );
      fs.writeFileSync(`${__dirname}/src/combined.ts`, cleaned);
    },
  );

  exec(`rm -rf ${__dirname}/temp`);

  function downloadFile(url: string, dest: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(dest);

      https
        .get(url, (response) => {
          if (response.statusCode !== 200) {
            reject(
              `Failed to download file: Status Code ${response.statusCode}`,
            );
            return;
          }

          response.pipe(file);

          file.on('finish', () => {
            file.close();
            resolve();
          });
        })
        .on('error', (err) => {
          fs.unlink(dest, () => {
            return;
          });
          reject(`Failed to download file: ${err.message}`);
        });
    });
  }
})();
