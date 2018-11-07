import {Router} from 'express';
import {index} from '../controller';
import {postalCodeController} from "../controller/postalCodeController";


export default (config) => {
    const routes = Router();

    routes.get('/', index);
    routes.get('/postalcode/:postalCode',(req, res) =>  postalCodeController(req, res, config));

    return routes;
};
