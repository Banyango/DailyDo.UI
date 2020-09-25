const { createProxyMiddleware } = require('http-proxy-middleware');

var setCookie;

module.exports = function(app) {
    app.use(
        '/api/**',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
            secure:false,
            onProxyRes(proxyRes, req, res) {
                if (proxyRes.headers['set-cookie']) {
                    setCookie = proxyRes.headers['set-cookie'];
                }
            },
            onProxyReq(proxyReq, req, res) {
                if (setCookie) {
                    proxyReq.setHeader('Cookie', setCookie);
                }
            }

        })
    );
};