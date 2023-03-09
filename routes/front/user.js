var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const { userModel } = require('../../database/index');

// 全部查询
router.get('/', async (req, res) => {
    const users = await userModel.findAll();
    res.send({
        code: 200,
        msg: "success",
        data: users
    });
})

// 新增实例
router.post('/add', async (req, res) => {
    console.log(req.body)
    const { userName, userPassword, userSex, userPhone, userEmail, userAvator, userIsadmin } = req.body;
    const useradd = await userModel.create({ userName, userPassword, userSex, userPhone, userEmail, userAvator, userIsadmin });
    res.send({
        code: 200,
        msg: "success",
        data: useradd
    });
})

// 删除指定ID实例
router.post('/delete', async (req, res) => {
    const { userID } = req.body;
    // console.log(userID)
    const userdelete = await userModel.destroy({
        where:{
            userID: userID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: userdelete
    })
})

// 查询指定ID实例
router.post('/find', async (req, res) => {
    const { userID } = req.body;
    const { Op } = require("sequelize");
    const finduser = await userModel.findAll({
        where: {
            userID:{
                [Op.eq]: userID
            }
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: finduser
    });
})

router.get('/header', async (req, res) => {
    // const headeruser = await userModel.findAll({
    // }); 
    res.send({
        code: 200,
        msg: 'success',
        data: req.user
    })
})

// 登录实例
router.post('/login', async (req, res) => {
    const { userName, userPassword } = req.body;
    const finduser = await userModel.findAll({
        where: {
            userName:  userName,
            userPassword: userPassword
        }
    });
    if(finduser != ''){
        const token = 'Bearer ' + jwt.sign(
            {
                userName: userName,
            },
            'usertoken',
            {
                expiresIn: 3600 * 24 * 3
            }
        )
        res.send({
            code: 200,
            msg: "success",
            data: {
                token,
                finduser
            }
        });
    }else {
        res.send({
            code: 401,
            msg: "error",
            data: "login failed"
        })
    }
})

// 更新指定ID实例
router.post('/update', async (req, res) => {
    const { userID, userName } = req.body;
    // console.log(req.body)
    const userupdate = await userModel.update({
        userName: userName,
        },{
            where: {
                userID: userID
            } 
        }
    )
    res.send({
        code: 200,
        msg: "success",
        data: userupdate
    })
})

module.exports = router