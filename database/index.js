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
    // dialectOptions: {
    //     charset: "utf8mb4",
    //     collate: "utf8mb4_unicode_ci",
    //     supportBigNumbers: true,
    //     bigNumberStrings: true
    // }
});

const userModel = require('./model/user')(sequelize, DataTypes);
const blogsModel = require('./model/blogs')(sequelize, DataTypes);
const teaModel = require('./model/tea')(sequelize, DataTypes);
const starModel = require('./model/star')(sequelize, DataTypes);
const commentModel = require('./model/comment')(sequelize, DataTypes);
const noteModel = require('./model/note')(sequelize, DataTypes);
const likeModel = require('./model/like')(sequelize, DataTypes);

// 一对多关联
userModel.hasMany(blogsModel);
blogsModel.belongsTo(userModel);
userModel.hasMany(commentModel);
commentModel.belongsTo(userModel);
blogsModel.hasMany(starModel);
starModel.belongsTo(blogsModel);
blogsModel.hasMany(likeModel);
likeModel.belongsTo(blogsModel);
userModel.hasMany(starModel);
starModel.belongsTo(userModel);
userModel.hasMany(likeModel);
likeModel.belongsTo(userModel);
userModel.hasMany(noteModel);
noteModel.belongsTo(userModel);


module.exports = { sequelize, userModel, blogsModel, teaModel, starModel, commentModel, noteModel, likeModel }
