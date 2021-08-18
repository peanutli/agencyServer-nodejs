const express =require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// app.use('^/', createProxyMiddleware({ target: 'http://rap2api.taobao.org/app/mock/287809', changeOrigin: true }));
app.use('^/', createProxyMiddleware({ target: 'https://wifi.12306.cn/operatemonit/wifiapps/ordercenter-query-front-end/api', changeOrigin: true }));
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.listen(process.env.PORT || 5000)

