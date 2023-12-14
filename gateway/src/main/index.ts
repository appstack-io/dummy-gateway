import '@appstack-io/config';
import { main } from '@appstack-io/main';
import { MainHttpModule } from './components/main.http.module';

(async () => {
  await main({
    publicHttpModule: MainHttpModule,
    otel: true,
  });
})();
