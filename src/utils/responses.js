const setLinks = (req, res) => {

    const _links = {
        'getByPostalCode': '/postalcode/:postalCode',
        'getByName': '/cityname/:idName',
        'getAllCitiesOfAProvince': '/province/:idName'
    };

    return Object.assign({}, {_links},res);
};

export { setLinks};