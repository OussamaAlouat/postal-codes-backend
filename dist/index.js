"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _https = _interopRequireDefault(require("https"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import routes from './routes'
var app = (0, _express.default)(); // CONFIG ------------------------------------------------------------------------

exports.app = app;
var config = (0, _config.default)(app);
/*
if ('test' === process.env.NODE_ENV || 'test_local' === process.env.NODE_ENV) {
    db.disconnect();
}
db.connect(config);

// MIDDLEWARE -------------------------------------------------------------------

app.use(bodyParser.json({
    limit: process.env.APP_BODY_LIMIT || config.bodyLimit
}));

app.use(bodyParser.urlencoded({
    extended: false
}));
*/
// ROUTES -----------------------------------------------------------------------
//app.use('/', routes(config));
// catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json(errorHandler(err));
}); // To listen for connections only when our index.js file is called directly by node
// and not when is required by our files.
// See: https://puigcerber.com/2015/11/27/testing-express-apis-with-tape-and-supertest/

if (require.main === module) {
  if ('production' === app.get('env') || 'test' === app.get('env')) {
    // SSL termination is done on Heroku servers/load-balancers before the traffic gets to the application.
    // So in production, Heroku is in charge of HTTPS.
    app.listen(process.env.PORT || config.port, function () {
      var listeningPort = process.env.PORT || config.port;
      console.log('Server listening on port ' + listeningPort);
    });
  } else {
    // In other environment, we are in charge of managing HTTPS connections
    var httpsOptions = {
      key: _fs.default.readFileSync(__dirname + '/../key.pem'),
      cert: _fs.default.readFileSync(__dirname + '/../cert.pem')
    };

    _https.default.createServer(httpsOptions, app).listen(process.env.PORT || config.port, function () {
      var listeningPort = process.env.PORT || config.port;
      console.log('Server listening on port ' + listeningPort);
    });
  }
}
//# sourceMappingURL=index.js.map