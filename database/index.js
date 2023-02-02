const { Sequelize, DataTypes } = require('sequelize');

const config = {
    host: 'localhost',
    database: 'graduation_project',
    username: 'root',
    password: 'sqc19990905.',
    port: '3306'
};

// 方法 3: 分别传递参数 (其它数据库)
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.localhost,
    dialect: 'mysql',
    pool: {
        max: 5, //连接池最大连接数量
        min: 0, //最小链接数量
        idle: 10000 //如果一个线程10秒内没有被使用过的话，就释放
    },
    logging: true,
});

const userModel = require('./model/user')(sequelize, DataTypes);

module.exports = { sequelize, userModel }