import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import fs from 'fs';
import configuration from './config'
import routes from './routes'

const app = express();

// CONFIG ------------------------------------------------------------------------

const config = configuration(app);
// MIDDLEWARE -------------------------------------------------------------------

app.use(bodyParser.json({
    limit: process.env.APP_BODY_LIMIT || config.bodyLimit
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

// ROUTES -----------------------------------------------------------------------
app.use('/', routes(config));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json(err);
});


// In other environment, we are in charge of managing HTTPS connections

const httpsOptions = {
    key: fs.readFileSync(__dirname + '/../key.pem'),
    cert: fs.readFileSync(__dirname + '/../cert.pem')
};

 const server = https.createServer(httpsOptions, app).listen(process.env.PORT || config.port, () => {
    const listeningPort = process.env.PORT || config.port;
    console.log('Server listening on port ' + listeningPort);
});


export {app , server};