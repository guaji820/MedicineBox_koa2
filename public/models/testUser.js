/*

*/

module.exports = function(sequelize,DataTypes){
    const TestUser = sequelize.define('TestUser',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        userName:{
            allowNull:false,
            type:DataTypes.STRING,
        },
        password:{
            allowNull:false,
            type:DataTypes.STRING,
        },
        address:DataTypes.TEXT,
    },{
        tableName:'mb_test_user'
    })
}