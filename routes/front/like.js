var express = require('express');
var router = express.Router();
const { likeModel, blogsModel, userModel } = require('../../database/index');

// 新增实例
router.post('/add', async (req, res) => {
    const { UserUserID, BlogBlogID } = req.body;
    const likeadd = await likeModel.create({ UserUserID, BlogBlogID });
    res.send({
        code: 200,
        msg: "add success",
        data: likeadd
    });
})

// 删除指定ID实例
router.post('/delete', async (req, res) => {
    const { BlogBlogID, UserUserID } = req.body;
    console.log(BlogBlogID, UserUserID)
    const likedelete = await likeModel.destroy({
        where: {
            UserUserID: UserUserID,
            BlogBlogID: BlogBlogID
        }
    });
    res.send({
        code: 200,
        msg: "delete success",
        data: likedelete
    })
})

// 查询指定ID实例
router.post('/find', async (req, res) => {
    const { UserUserID, BlogBlogID } = req.body;
    const findlike = await likeModel.findAll({
        where: {
            UserUserID: UserUserID,
            BlogBlogID: BlogBlogID
        }
    });
    if (findlike == '') {
        res.send({
            code: 401,
            msg: "failed",
            data: findlike
        });
    }else{
        res.send({
            code: 200,
            msg: "find success",
            data: findlike
        });
    }
})

// 查询指定用户实例
router.post('/show', async (req, res) => {
    const { UserUserID } = req.body;
    const showlike = await likeModel.findAll({
        where: {
            UserUserID: UserUserID
        },
        include: [
            { model: blogsModel },
            { model: userModel }
        ]
    });
    if (showlike == '') {
        res.send({
            code: 401,
            msg: "failed",
            data: showlike
        });
    } else {
        res.send({
            code: 200,
            msg: "success",
            data: showlike
        });
    }
})

module.exports = router