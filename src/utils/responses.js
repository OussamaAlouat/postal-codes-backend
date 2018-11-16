const setLinks = (req, res,next) => {

    const _links = {
        'getByPostalCode': '/postalcode/:postalCode',
        'getByName': '/cityname/:idName',
        'getAllCitiesOfAProvince': '/province/:idName',
        'getCityByCoordinates': '/coordinates/:latitude/:longitude'
    };

    return Object.assign({}, {_links}, res);
};

export {setLinks};