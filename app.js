const koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('./router/index')
const config = require('./common/config.js')

const app = koa()

// app.use(function*(next){
//     yield next
//     this.response.type = 'text/html'
//     this.response.body = '<h1>hello koa2</h1>'
// })
// app.use(function*(next){
//     console.log('aaa')
//     yield next
// })
app.use(bodyparser())
app.use(router.routes())

app.listen(config.port)

console.log(`app ${config.host} started at port ${config.port}.....`)
//测试接口 localhost:3300/api/mb/aaa