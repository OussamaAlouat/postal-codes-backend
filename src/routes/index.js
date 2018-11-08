import {Router} from 'express';
import {index} from '../controller';
import {postalCodeController,postalNameController, postalProvinciaNameController} from "../controller/postalCodeController";


export default (config) => {
    const routes = Router();

    routes.get('/', index);
    routes.get('/postalcode/:postalCode',(req, res) =>  postalCodeController(req, res, config));
    routes.get('/cityname/:idName',(req, res) =>  postalNameController(req, res, config));
    routes.get('/provincia/:idName',(req, res) =>  postalProvinciaNameController(req, res, config));
    return routes;
};
