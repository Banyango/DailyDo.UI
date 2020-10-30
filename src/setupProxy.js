const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/**',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
            secure:false,
            cookieDomainRewrite: {
                "localhost:3000":"localhost:3001"
            }
        })
    );
};