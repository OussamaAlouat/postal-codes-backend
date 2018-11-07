// In production environment, app runs in Heroku and it won't use config files. Instead, it will use environment vars.
// Same happens in test environment. Travis will use environment vars as well.
// So, only if we are in other environment than production and test, we import the config files.
// Because of that condition we can't use ES6 imports.
const config = (app) => {

    let configProd = {};
    let configDev = {};
    let configTest = {};

    if ('development' === app.get('env') || 'test_local' === app.get('env')) {
        configDev = require('./development').default;
        configTest = require('./test').default;
        configProd = require('./production').default;
    }

    return 'production' === app.get('env') ?
        configProd :
        'test' === app.get('env') || 'test_local' === app.get('env') ? configTest : configDev;

};

export default config;
