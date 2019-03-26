var path = require('path')

module.exports = {
    root: path.join(__dirname),
    config: path.join(__dirname, 'config'),
    clientPath: path.join(__dirname, 'public'),
    viewPath: path.join(__dirname, 'views'),
    devEnv: 'development',
    prodEnv: 'production'
}