const setCitiesAtCitiesObject = (result, req, res, next) => {
    const response = {
        cities : result

    };
    next(response)
};

const setCityAtCityObject = (result, req, res, next) => {
    const response = {
        city : result

    };
    next(response)
};



export {
    setCitiesAtCitiesObject,
    setCityAtCityObject
}