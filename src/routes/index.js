import {Router} from 'express';
import {index} from '../controller';
import {
    postalCodeController, postalNameController,
    postalProvinciaNameController,
    postalCoordinatesController
} from "../controller/postalCodeController";


export default (config) => {
    const routes = Router();

    routes.get('/', index);
    routes.get('/postalcode/:postalCode', (req, res) => postalCodeController(req, res, config));
    routes.get('/cityname/:idName', (req, res) => postalNameController(req, res, config));
    routes.get('/province/:idName', (req, res) => postalProvinciaNameController(req, res, config));
    routes.get('/coordinates/:latitude/:longitude', (req, res) => postalCoordinatesController(req, res, config));
    return routes;
};
