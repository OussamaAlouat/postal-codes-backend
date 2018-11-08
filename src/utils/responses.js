const codeMessages = {
    400: "Request malformed or has an invalid syntax",
    401: "Unauthorized: access to the requested resource is unauthorized",
    403: "Forbidden: access to the requested resource is forbidden",
    422: "Request was well-formed but it can't be processed"
};


const setLinks = (req, res) => {

    const _links = {
        'getByPostalCode': '/postalcode/:postalCode',
        'getByName': '/cityname/:idName',
        'getAllCitiesOfAProvidence': '/provincia/:idName'
    };

    return Object.assign({}, {_links, data: res});
};

export {codeMessages, setLinks};