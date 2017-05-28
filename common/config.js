module.exports = {
    port:3001,
    host:'127.0.0.1',
    localdebug:false,

    db:{
        username:'root',
        password:'lifangyuan',
        database:'ll',
        host:'localhost',
        port:3306,
        logging:true,
        prefix:'mb_',
        dialect:'mysql',
    },
    redis:{
        host:'localhost',
        port:6379,
        prefix:'mbr_',
        time:1
    },
    mqs:{

    }
}