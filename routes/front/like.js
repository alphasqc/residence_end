var express = require('express');
var router = express.Router();
const { likeModel } = require('../../database/index');

// 新增实例
router.post('/add', async (req, res) => {
    const { userID, blogID } = req.body;
    const likeadd = await likeModel.create({ userID, blogID });
    res.send({
        code: 200,
        msg: "success",
        data: likeadd
    });
})

// 删除指定ID实例
router.post('/delete', async (req, res) => {
    const { blogID, userID } = req.body;
    const likedelete = await likeModel.destroy({
        where: {
            blogID: blogID,
            userID: userID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: likedelete
    })
})

// 查询指定ID实例
router.post('/show', async (req, res) => {
    const { userID } = req.body;
    const showlike = await likeModel.findAll({
        where: {
            userID: {
                userID
            }
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: showlike
    });
})

module.exports = router