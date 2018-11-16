const setLinks = (req, res,next) => {

    const _links = {
        'getByPostalCode': '/postalcode/:postalCode',
        'getByName': '/cityname/:idName',
        'getAllCitiesOfAProvince': '/province/:idName',
        'getCityByCoordinates': '/coordinates/:latitude/:longitude'
    };

    return Object.assign({}, {_links}, res);
};


const setOkResponse = (req, res, result) => {
    console.log('req: ', req, 'res: ', res, 'result: ', result)
     res.status(200).json(result);
};

export {setLinks, setOkResponse};