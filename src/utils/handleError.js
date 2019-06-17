function handleError(req, res) {
  return err => {
    const errObject = {
      message: err.message,
    };

    const status = err.statusCode || 500;

    res.status(status).json(errObject);
  }
}

export {handleError}