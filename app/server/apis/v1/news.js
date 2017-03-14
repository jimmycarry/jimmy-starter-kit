// @flow
export default function (router: Object) {
    router.get('/api/v1/hot', (ctx) => {
        ctx.body = [
            {
                title: '11位母亲竟然生了10个女儿，个个都貌美如花！一首歌曲怀念母亲',
                image_url: 'http://p1.pstatp.com/list/190x124/18a5000595fc4d6e0586'
            }
        ];
    });
}
