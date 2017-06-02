const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');

const config = require('../../common/config')
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  dialect: 'postgres',
  host: config.db.host,
  port: config.db.port,
  timezone: '+08:00',
  logging: config.db.logging ? console.log : undefined,
  pool: {
    maxConnections: config.db.pool,
  },
})
const db = {}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))

    const keys = Object.keys(model.attributes)
    keys.forEach(key => {
      const field = model.attributes[key].field
      if (field) {
        model.attributes[key].field = field.replace(/([A-Z])/g, '_$1').toLowerCase()
      }
    })
    db[model.name] = model
    const tableName = model.tableName
    if (!tableName.startsWith('zk_crm2_view')) {
      model.sync({ logging: false })
    }
  })

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
