// @flow
export default function (router: Object) {
  router.get('/api/v1/todos', (ctx) => {
    ctx.body = [
      {
        text: 'Todo 1',
        complete: false,
      },
      {
        text: 'Todo 2',
        complete: false,
      },
      {
        text: 'Todo 3',
        complete: false,
      },
    ];
  }).get('/api/v1/homepage', (ctx) => {
    ctx.body = {
      text: 'home1',
      welcome: 'Welcome Home Page'
    };
  }).get('/api/v1/navlist', (ctx) => {
    ctx.body = [
      { name: '推荐', route: '/' },
      { name: '热点', route: '/hot' },
      { name: '社会', route: '/social' },
      { name: '军事', route: '/military' },
      { name: '科技', route: '/science' }
    ];
  });
}
