var express = require('express');
var router = express.Router();
const { blogsModel, userModel } = require('../../database/index');

// 全部查询
router.get('/', async (req, res) => {
    const blogs = await blogsModel.findAll({
        include: [
            { model: userModel }
        ],
        attributes: [ 'blogID', 'blogImg', 'blogTitle', 'blogContent', 'User.userName']
    });
    res.send({
        code: 200,
        msg: "success",
        data: blogs
    });
})

// 分类查询实例
router.post('/type', async (req, res) => {
    const { blogType } = req.body;
    const { Op } = require("sequelize");
    const findblog = await blogsModel.findAll({
        include: [
            { model: userModel }
        ],
        attributes: ['blogID', 'blogImg', 'blogTitle', 'blogContent', 'User.userName'],
        where: {
            blogType: {
                [Op.eq]: blogType
            }
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: findblog
    });
})

// 新增实例
router.post('/add', async (req, res) => {
    const { userID, blogTitle, blogContent, blogType, blogImg } = req.body;
    const blogadd = await blogsModel.create({ userID, blogTitle, blogContent, blogType, blogImg });
    res.send({
        code: 200,
        msg: "success",
        data: blogadd
    });
})

// 删除指定ID实例
router.post('/delete', async (req, res) => {
    const { blogID } = req.body;
    const blogdelete = await blogsModel.destroy({
        where: {
            blogID: blogID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: blogdelete
    })
})

// 查询指定ID实例
router.post('/find', async (req, res) => {
    const { blogID } = req.body;
    // console.log(userID)
    const { Op } = require("sequelize");
    const findblog = await blogsModel.findAll({
        where: {
            blogID: {
                [Op.eq]: blogID
            }
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: findblog
    });
})


// 查询指定ID实例
router.post('/show', async (req, res) => {
    const { typeId } = req.body;
    const showblog = await blogsModel.findAll({
        where: {
            typeId: {
                typeId
            }
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: showblog
    });
})

// 更新指定ID实例
router.post('/update', async (req, res) => {
    const { blogID, blogContent } = req.body;
    // console.log(req.body)
    const blogupdate = await blogsModel.update({
        blogContent: blogContent,
    }, {
        where: {
            blogID: blogID
        }
    }
    )
    res.send({
        code: 200,
        msg: "success",
        data: blogupdate
    })
})

module.exports = router