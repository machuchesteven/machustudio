const { createproxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use('/api', createproxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
    })
    );
}