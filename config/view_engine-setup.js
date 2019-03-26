const path = require('path')
const root_config = require('../root_config')

module.exports = function viewEngineSetup(app) {
    app.set('views', root_config.viewPath)
    app.set('view engine', 'pug')

    if (process.env.NODE_ENV === root_config.staticVariables.development) {
        console.log(`NOW RUNNING ${root_config.staticVariables.development}`)

        console.log(root_config.configPath)
        const webpack = require('webpack')
        const config = require(path.join(root_config.configPath, 'webpack-dev.js'))
        console.log(config);
        const compiler = webpack(config)

        const webpackDevMiddleware = require('webpack-dev-middleware')(
            compiler,
            config.devServer
        )
        app.use(webpackDevMiddleware)
    }
    else if (process.env.NODE_ENV === root_config.staticVariables.production) {
        console.log(`NOW RUNNING ${root_config.staticVariables.production}`)
    }

}