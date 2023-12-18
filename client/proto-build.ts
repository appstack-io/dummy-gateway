import {
  fetchProtos,
  generateHostMappings,
  protoBuild,
} from '@appstack-io/proto';
import { services } from './client.config.json';

(async () => {
  await fetchProtos(services, `${__dirname}/src`);
  const hostMappings = generateHostMappings(`${__dirname}/src/fetched-protos`);
  await protoBuild({
    projectDir: `${__dirname}`,
    protoDir: `src`,
    exclude: ['/tests/', 'combined'],
    combinedName: 'combined',
    clientDir: 'client',
    hostMappings,
  });
})();
