var express = require('express');
var router = express.Router();
const { commentModel } = require('../../database/index');

// 新增实例
router.post('/add', async (req, res) => {
    const { blogID, userID, commentContent, toID } = req.body;
    const commentadd = await commentModel.create({ blogID, userID, commentContent, toID });
    res.send({
        code: 200,
        msg: "success",
        data: commentadd
    });
})

// 删除指定ID实例
// router.post('/delete', async (req, res) => {
//     const { commentID } = req.body;
//     const commentdelete = await commentModel.destroy({
//         where: {
//             commentID: commentID
//         }
//     });
//     res.send({
//         code: 200,
//         msg: "success",
//         data: commentdelete
//     })
// })

// 查询指定ID实例
router.post('/find', async (req, res) => {
    const { blogID } = req.body;
    const findcomment = await commentModel.findAll({
        where: {
            blogID: blogID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: findcomment
    });
})

module.exports = router