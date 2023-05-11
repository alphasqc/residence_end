var express = require('express');
var router = express.Router();
const { teaModel } = require('../../database/index');

// 全部查询
router.get('/', async (req, res) => {
    const teas = await teaModel.findAll();
    res.send({
        code: 200,
        msg: "success",
        data: teas
    });
})


// 新增实例
router.post('/add', async (req, res) => {
    // console.log(req.body)
    const { teaText, userName, teaType } = req.body;
    const teaadd = await teaModel.create({ teaText, userName, teaType });
    res.send({
        code: 200,
        msg: "success",
        data: teaadd
    });
})

router.post('/search', async (req, res) => {
    const { searchInput } = req.body;
    const { Op } = require("sequelize");
    const showtea = await teaModel.findAll({
        where: {
            teaText: {
                [Op.like]: '%' + searchInput + '%'
            }
        }
    });
    res.send({
        code: 200,
        msg: "success",
        data: showtea
    });
})


module.exports = router