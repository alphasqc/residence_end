const express = require('express');
const app = express();
const router = express.Router();

// 路由
const { sequelize } = require('./database/index');
const userRouter = require('./routes/front/user');

const port = 3000;

// 数据库重置结构和数据
(async () => {
    await sequelize.sync({ force: false });
})()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 默认接口内容
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// 路由中间件
app.use('/user', userRouter);


// 接口监听
app.listen(port, () => {
    console.log(`服务器端口号： ${port}`);
})