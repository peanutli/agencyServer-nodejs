const express =require('express')
const app = express();
const axios = require('axios')

app.get('/api/proxy',(req,res)=>{
    axios.post(`http://rap2api.taobao.org/app/mock/287809/auth/getUserTreeInfo`)
    .then(result=>{
        res.send({msg:result.data})
    })
})
//注册中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
// No 'Access-Control-Allow-Origin' header is present on the requested resource.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
//挂载静态资源
app.use(express.static('./index'))
// 把 node_modules 文件夹，托管为静态资源目录
app.use('/node_modules', express.static('./node_modules'))
app.listen(process.env.PORT || 5000)
