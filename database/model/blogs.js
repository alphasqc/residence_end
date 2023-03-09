module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('Blogs', {
        // 在这里定义模型属性
        blogID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        userID: {
            type: DataTypes.INTEGER(11),
            allowNull: false //非空
        },
        blogTitle: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        blogContent: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        typeId: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        blogImg: {
            type: DataTypes.STRING(10000),
            allowNull: true
        }
    }, {
        tableName: 'blogs',
        timestamps: true
        // 这是其他模型参数
    });

    return user
}