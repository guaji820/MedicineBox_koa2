const Router = require('koa-router')
const router = new Router()

router.get('/aaa',function(){
    console.log('test abc')
    this.body = {
        user:'li'
    }
})

module.exports = router.routes()