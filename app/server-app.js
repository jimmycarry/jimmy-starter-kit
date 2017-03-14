import Koa from 'koa';
import {
  loggingLayer,
  initialLayer,
  apiLayer,
  newsContentLayer,
  securityLayer,
  assetsLayer,
  renderLayer,
  errorLayer,
} from './server/middlewares';
import apis, { newsRoute } from './server/apis/base';
import controllers from './server/controllers/base';

const app = new Koa();

// setup middlewares
loggingLayer(app);
initialLayer(app);
apiLayer(app, apis);
newsContentLayer(app, newsRoute);
assetsLayer(app);
securityLayer(app);
renderLayer(app, controllers);
errorLayer(app);


export default app;
