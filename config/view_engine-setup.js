const root_config = require('../root_config')

module.exports = function viewEngineSetup(app){
    app.set('views', root_config.viewPath);
    app.set('view engine', 'pug');

    /* 
    if(environment === dev){
        //dev settings
    }
    if(environment === prod){
        //prod settings 
    }
    */
}