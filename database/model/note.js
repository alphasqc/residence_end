module.exports = (sequelize, DataTypes) => {
    const note = sequelize.define('Notes', {
        // 在这里定义模型属性
        noteID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        userID: {
            type: DataTypes.INTEGER(11), //字段类型
            allowNull: false //非空
        },
        noteContent: {
            type: DataTypes.STRING(500),
            allowNull: false //非空
        }
    }, {
        tableName: 'notes',
        timestamps: true
        // 这是其他模型参数
    });

    return note
}