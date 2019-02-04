const setLinks = (result, req, res, next) => {

    const _links = {
        'getByPostalCode': '/postalcode/:postalCode',
        'getByName': '/cityname/:idName',
        'getAllCitiesOfAProvince': '/province/:idName',
        'getCityByCoordinates': '/coordinates/:latitude/:longitude'
    };

    const resultObject = Object.assign({}, {_links}, result);
    next(resultObject);
};

const sendOkResponse = (result, req, res) => {
    res.status(200).json(result);
};

const filterNotFound = (result, req, res, next) => {
    if (!result.length > 0 )
        return res.status(404).json({message: 'Not found', status: 404})
    next(result);

};
export {setLinks, sendOkResponse, filterNotFound};