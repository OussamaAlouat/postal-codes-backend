import {Router} from 'express';
import {index} from '../controller';
import {
    postalCodeController, postalNameController,
    postalCoordinatesController, postalProvinceNameController
} from "../controller/postalCodeController";
import {filterNotFound, sendOkResponse, setLinks} from "../utils/responses";
import {setCitiesAtCitiesObject, setCityAtCityObject} from "../utils/setersAtObjects";
import {processDataUsingPostalCode} from "../utils/processData";


export default (config) => {
    const routes = Router();

    routes.get('/',
        (req, res, next) => index(req, res,next),
        (result, req, res, next) => setLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)

    );

    routes.get('/postalcode/:postalCode',
        (req, res, next) => postalCodeController(req, res, next, config),
        (result, req, res, next) => filterNotFound(result, req, res, next),
        (result, req, res, next) => setCityAtCityObject(result, req, res, next),
        (result, req, res, next) => setLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );

    routes.get('/cityname/:idName',
        (req, res, next) => postalNameController(req, res, next, config),
        (result, req, res, next) => filterNotFound(result, req, res, next),
        (result, req, res, next) =>processDataUsingPostalCode(result, req, res, next),
        (result, req, res, next) => setCitiesAtCitiesObject(result, req, res, next),
        (result, req, res, next) => setLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );


    routes.get('/province/:idName',
        (req, res, next) => postalProvinceNameController(req, res, next, config),
        (result, req, res, next) => filterNotFound(result, req, res, next),
        (result, req, res, next) =>processDataUsingPostalCode(result, req, res, next),
        (result, req, res, next) => setCitiesAtCitiesObject(result, req, res, next),
        (result, req, res, next) => setLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );

    routes.get('/coordinates/:latitude/:longitude',
        (req, res, next) => postalCoordinatesController(req, res, next, config),
        (result, req, res, next) => filterNotFound(result, req, res, next),
        (result, req, res, next) => setCityAtCityObject(result, req, res, next),
        (result, req, res, next) => setLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    )
    ;

    return routes;
};
