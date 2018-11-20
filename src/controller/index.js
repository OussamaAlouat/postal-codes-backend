const index = (req, res,next) => {
    const response =  {data : {message: 'Server up!!'}}
    next(response);
};

export {index};