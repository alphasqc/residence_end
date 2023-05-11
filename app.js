const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const{ expressjwt: jwt } = require('express-jwt')


// 路由
const { sequelize } = require('./database/index');
const userRouter = require('./routes/front/user');
const blogsRouter = require('./routes/front/blogs');
const teaRouter = require('./routes/front/tea');
const starRouter = require('./routes/front/star');
const commentRouter = require('./routes/front/comment');
const noteRouter = require('./routes/front/note');
const likeRouter = require('./routes/front/like');


const port = 3001;

// 同步模型
(async () => {
    await sequelize.sync({ alter: true });
})()

// token
// app.use(
//     jwt({
//         credentialsRequired: false,
//         // 密钥
//         secret: "usertoken",
//         // 算法
//         algorithms: ["HS256"] 
//     }).unless({
//         //添加不需要token验证的路由 
//         path: [
//             "/user/login",
//             "/user/regist"
//         ]
//     })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 默认接口内容
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// 路由中间件
app.use('/user', userRouter);
app.use('/blogs', blogsRouter);
app.use('/tea', teaRouter);
app.use('/star', starRouter);
app.use('/comment', commentRouter);
app.use('/note', noteRouter);
app.use('/like', likeRouter);

// 允许跨域
app.use(cors())
// 接口监听
app.listen(port, () => {
    console.log(`服务器端口号： ${port}`);
})