var express = require('express');
var router = express.Router();
const { starModel, blogsModel } = require('../../database/index');

// 新增实例
router.post('/add', async (req, res) => {
    const { UserUserID, BlogBlogID } = req.body;
    const staradd = await starModel.create({ UserUserID, BlogBlogID });
    res.send({
        code: 200,
        msg: "success",
        data: staradd
    });
})

// 删除指定ID实例
router.post('/delete', async (req, res) => {
    const { BlogBlogID, UserUserID } = req.body;
    const stardelete = await starModel.destroy({
        where: {
            BlogBlogID: BlogBlogID,
            UserUserID: UserUserID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: stardelete
    })
})

// 查询指定ID实例
router.post('/find', async (req, res) => {
    const { UserUserID, BlogBlogID } = req.body;
    const findstar = await starModel.findAll({
        where: {
            UserUserID: UserUserID,
            BlogBlogID: BlogBlogID
        }
    });
    if (findstar == '') {
        res.send({
            code: 401,
            msg: "failed",
            data: findstar
        });
    }else {
        res.send({
            code: 200,
            msg: "success",
            data: findstar
        });
    }
})

// 查询指定用户实例
router.post('/show', async (req, res) => {
    const { UserUserID } = req.body;
    const showstar = await starModel.findAll({
        where: {
            UserUserID: UserUserID
        },
        include: [
            { model: blogsModel }
        ]
    });
    if (showstar == '') {
        res.send({
            code: 401,
            msg: "failed",
            data: showstar
        });
    } else {
        res.send({
            code: 200,
            msg: "success",
            data: showstar
        });
    }
})

module.exports = router