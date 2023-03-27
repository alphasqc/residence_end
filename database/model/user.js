module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        // 在这里定义模型属性
        userID: {
            type: DataTypes.INTEGER(11), //字段类型
            primaryKey: true, // 主键
            autoIncrement: true //自增长
        },
        userName: {
            type: DataTypes.STRING(20),
            allowNull: false //非空
        },
        userPassword: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        userSex: {
            type: DataTypes.STRING(1),
            allowNull: false
        },
        userPhone: {
            type: DataTypes.STRING(11),
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING(320),
            allowNull: false
        },
        userAvator: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        // userIsadmin: {
        //     type: DataTypes.STRING(1),
        //     allowNull: false
        // }
    }, {
        tableName: 'users',
        timestamps: true
        // 这是其他模型参数
    });

    return user
}