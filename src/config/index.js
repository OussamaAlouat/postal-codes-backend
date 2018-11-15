const config = (app) => {


    const CONFIG_ENV={
        'development': './development',
        'production': './production',
        'test': './test'
    };

    return require(CONFIG_ENV[app.get('env')]).default

};

export default config;
