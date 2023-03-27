module.exports = (sequelize, DataTypes) => {
    const blogs = sequelize.define('Blogs', {
        // 在这里定义模型属性
        blogID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        blogTitle: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        blogContent: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        blogType: {
            type: DataTypes.STRING(10),
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

    return blogs
}