const path = require('path')
const root_config = require('../root_config')

module.exports = function viewEngineSetup(app){
    app.set('views', root_config.viewPath)
    app.set('view engine', 'pug')

    if(process.env.NODE_ENV === root_config.devEnv){
        console.log(`NOW RUNNING ${root_config.devEnv}`)

        const webpack = require('webpack')
        const config = require(path.join(root_config.config, 'webpack-dev.js'))
        const compiler = webpack(config)

        const webpackDevMiddleware = require('webpack-dev-middleware')(
        compiler,
        config.devServer
        )
        app.use(webpackDevMiddleware)
    }
    if(process.env.NODE_ENV === root_config.prodEnv){
        console.log(`NOW RUNNING ${root_config.prodEnv}`)
    }
    
}