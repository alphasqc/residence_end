module.exports = (sequelize, DataTypes) => {
    const star = sequelize.define('Stars', {
        // 在这里定义模型属性
        starID: {
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
        }
    }, {
        tableName: 'stars',
        timestamps: true
        // 这是其他模型参数
    });

    return star
}