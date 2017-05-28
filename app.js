const koa = require('koa')
const bodyparser = require('koa-bodyparser')
const 

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

app.listen(3001)

console.log('app started at port 3001.....')
