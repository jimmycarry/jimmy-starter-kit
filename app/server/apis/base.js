import v1 from './v1/base';
import news from './v1/news';

export default function (router) {
  v1(router);
}

export const newsRoute = function newsRoute(router) {
  news(router);
};
