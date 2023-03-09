module.exports = (sequelize, DataTypes) => {
    const tea = sequelize.define('Tea', {
        // 在这里定义模型属性
        teaID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        userName: {
            type: DataTypes.STRING(20),
            allowNull: false //非空
        },
        teaType: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        teaText: {
            type: DataTypes.STRING(600),
            allowNull: false
        }
        },{
            tableName: 'teas',
            timestamps: true
            // 这是其他模型参数
    });

    return tea
}