var express = require('express');
var router = express.Router();
const { starModel } = require('../../database/index');

// 新增实例
router.post('/add', async (req, res) => {
    const { userID, blogID } = req.body;
    const staradd = await starModel.create({ userID, blogID });
    res.send({
        code: 200,
        msg: "success",
        data: staradd
    });
})

// 删除指定ID实例
router.post('/delete', async (req, res) => {
    const { blogID, userID } = req.body;
    const stardelete = await starModel.destroy({
        where: {
            blogID: blogID,
            userID: userID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: stardelete
    })
})

// 查询指定ID实例
router.post('/show', async (req, res) => {
    const { userID } = req.body;
    const showstar = await starModel.findAll({
        where: {
            userID: {
                userID
            }
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: showstar
    });
})

module.exports = router