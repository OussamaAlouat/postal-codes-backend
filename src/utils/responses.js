const setLinks = (req, res) => {

    const _links = {
        'getByPostalCode': '/postalcode/:postalCode',
        'getByName': '/cityname/:idName',
        'getAllCitiesOfAProvince': '/provincia/:idName'
    };

    return Object.assign({}, res,{_links});
};

export { setLinks};