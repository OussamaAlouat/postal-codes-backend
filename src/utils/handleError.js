import log from 'log4js';
const logger = log.getLogger('CONTROLER');
logger.level = 'debug';

function handleError(req, res) {
  return err => {
    const errObject = {message: err.message};
    const status = err.statusCode || 500;
    const message = `${req.method} ${req.url} ${status}`;
    logger.err(message);
    res.status(status).json(errObject);
  }
}

export {handleError}