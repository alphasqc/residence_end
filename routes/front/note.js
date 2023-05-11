var express = require('express');
var router = express.Router();
const { noteModel } = require('../../database/index');

// 新增实例
router.post('/add', async (req, res) => {
    const { UserUserID, noteContent } = req.body;
    const noteadd = await noteModel.create({ UserUserID, noteContent });
    res.send({
        code: 200,
        msg: "success",
        data: noteadd
    });
})

// 删除指定ID实例
router.post('/delete', async (req, res) => {
    const { noteID } = req.body;
    const notedelete = await noteModel.destroy({
        where: {
            noteID: noteID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: notedelete
    })
})

// 查询指定ID实例
router.post('/show', async (req, res) => {
    const { UserUserID } = req.body;
    const shownote = await noteModel.findAll({
        where: {
            UserUserID: UserUserID
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: shownote
    });
})

module.exports = router