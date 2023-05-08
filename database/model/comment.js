module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define('Comments', {
        // 在这里定义模型属性
        commentID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        userID: {
            type: DataTypes.INTEGER(11), //字段类型
            allowNull: false //非空
        },
        blogID: {
            type: DataTypes.INTEGER(11), //字段类型
            allowNull: false //非空
        },
        commentContent: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        toID: {
            type: DataTypes.INTEGER(11), //字段类型
            allowNull: true
        }
    }, {
        tableName: 'comments',
        timestamps: true
        // 这是其他模型参数
    });

    return comment
}