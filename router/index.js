const Router = require('koa-router')

const router = new Router({
    prefix:'/api'
})

// router.get('/mb1',function(){
//     console.log('mb1')
//     this.body = {
//         a:'mb1'
//     }
// })

router.use('/mb',require('./test'))

module.exports = router
