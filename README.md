# React and Koa boilerplate
想法：来自于React.js的服务端渲染，结合了koa的同构脚手架

目前, 该脚手架用了以下的技术。

* [Koa.js](https://github.com/koajs/koa)
* [Webpack](https://github.com/webpack/webpack)
* [Babel](https://babeljs.io/)
* [Flowtype](http://flowtype.org/)
* [Marko](http://markojs.com/)
* [Bootstrap](http://getbootstrap.com/css/) and [FontAwesome](https://fortawesome.github.io/Font-Awesome/)
* [Redux](https://github.com/rackt/redux)
* [Relay](https://facebook.github.io/relay/)
* [Immutablejs](https://facebook.github.io/immutable-js/)
* [ServiceWorker and AppCache](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
* [PostCSS](https://github.com/postcss/postcss), [CSSNext](http://cssnext.io/), [CSSNano](http://cssnano.co/)
* [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Testdouble](https://github.com/testdouble/testdouble.js/), [Nock](https://github.com/pgte/nock) and [Istanbul](https://github.com/gotwarlost/istanbul)

## 安装需求
- Install [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) 可以有更好的开发体验.
- Install [yarn](https://github.com/yarnpkg/yarn) 是facebook的包管理器

### app/routes.js
管理页面的路由

### app/app.js

Binds root component to `<div id='app'></div>`, and prepopulate redux store with server-rendering data from `window.prerenderData`

### app/server.js

处理服务端的路由, 通过marko和react-router生成页面. 命名一个方法叫 `getUrl` 用户客户端和服务端的数据交互

### Marko template
[自定义标签](http://markojs.com/docs/marko/custom-taglibs/) 定义在以下目录 `app/server/templates/helpers`. 用法参考 `app/server/templates/layout/application.marko`. 例如:

```html
    <prerender-data data=data.layoutData.prerenderData />
```

## 开发

```bash
$ git clone http://192.168.31.49:3000/yezhiming/koa-react-server.git
$ cd koa-react-server
$ yarn install
```

### 热更新

```bash
$ yarn run watch
$ yarn run dev
```

### 服务端渲染模式

```bash
$ SERVER_RENDERING=true yarn run watch
$ yarn run dev
```

### 全局开启类型检测
```bash
$ yarn run flow:watch
$ yarn run flow:stop # to terminate the server
```

你可以局部使用类型检查 在文件头部添加 (`// @flow`)


## 测试

```bash
$ yarn test
$ yarn run test:watch
$ yarn run test:lint
$ yarn run test:coverage
```

## 调试
```bash
$ yarn run watch
$ yarn run debug
```

webstorm的调试模式

```
{
  "web-port": 9999,
  "web-host": null,
  "debug-port": 5858,
  "save-live-edit": true,
  "no-preload": true,
  "cli": true,
  "hidden": [],
  "stack-trace-limit": 50
}
```

## 生产

###不使用pm2

```bash
$ yarn run build
$ SECRET_KEY=your_env_key yarn start
```

### 使用pm2

```bash
$ yarn run build
$ SECRET_KEY=your_env_key yarn run pm2:start
$ yarn run pm2:stop # to terminate the server
```

### 使用docker 网速慢 部署需要多试几次

```bash
$ docker-compose build
$ docker-compose up
```

Access `http://localhost:5000` to see the application

### heroku 部署

```base
$ heroku config:set BUILD_ASSETS=1 # run once
```

```bash
$ heroku create
$ git push heroku master
```
