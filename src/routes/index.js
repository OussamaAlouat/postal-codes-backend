import {Router} from 'express';
import {index} from '../controller';
import {postalCodeController} from "../controller/postalCodeController";
import {postalNameController} from "../controller/postalNameController";
import {postalProvinciaNameController} from "../controller/postalProvinciaNameConroller";


export default (config) => {
    const routes = Router();

    routes.get('/', index);
    routes.get('/postalcode/:postalCode',(req, res) =>  postalCodeController(req, res, config));
    routes.get('/cityname/:idName',(req, res) =>  postalNameController(req, res, config));
    routes.get('/provincia/:idName',(req, res) =>  postalProvinciaNameController(req, res, config));
    return routes;
};
