import { Router } from 'express';
import { index } from '../controller';
import {
  postalCodeController,
  postalNameController,
  postalCoordinatesController,
  postalProvinceNameController,
} from '../controller/postalCodeController';

import { filterNotFound, sendOkResponse, setLinks } from '../utils/responses';
import { setCitiesAtCitiesObject, setCityAtCityObject } from '../utils/setersAtObjects';

export default (config) => {
  const routes = Router();
  /**
   * @apiGroup Root
   * @api {get} /
   * @apiName Root
   * @apiSuccessExample Success-Resopnse:
   * HTTP/1.1 200 OK
   * {
     data : {
       message: 'Server up!!'
     },
    _links: {
      'getByPostalCode': '/postalcode/:postalCode',
      'getByName': '/cityname/:idName',
      'getAllCitiesOfAProvince': '/province/:idName',
      'getCityByCoordinates': '/coordinates/:latitude/:longitude'
      },

   * }
   */
  routes.get('/',
    (req, res, next) => index(req, res, next),
    (result, req, res, next) => setLinks(result, req, res, next),
    (result, req, res) => sendOkResponse(result, req, res));

      /**
   * @apiGroup Root
   * @apiName GET_BY_POSTAL_CODE
   * @api {get} /postalcode/:postalCode
   * @apiSuccessExample Success-Resopnse:
   * HTTP/1.1 200 OK
   * {
    "_links": {
        "getByPostalCode": "/postalcode/:postalCode",
        "getByName": "/cityname/:idName",
        "getAllCitiesOfAProvince": "/province/:idName",
        "getCityByCoordinates": "/coordinates/:latitude/:longitude"
    },
    "city": [
        {
            "postal_code": 46530,
            "town": "Puçol",
            "province": "Valencia/València",
            "latitude": -0.30317868,
            "longitude": 39.61631894
        },
        {
            "postal_code": 46530,
            "town": "Sagunto/Sagunt",
            "province": "Valencia/València",
            "latitude": -0.2759603,
            "longitude": 39.68008485
        }
    ]
  }
   */
  routes.get('/postalcode/:postalCode',
    (req, res, next) => postalCodeController(req, res, next, config),
    (result, req, res, next) => filterNotFound(result, req, res, next),
    (result, req, res, next) => setCityAtCityObject(result, req, res, next),
    (result, req, res, next) => setLinks(result, req, res, next),
    (result, req, res) => sendOkResponse(result, req, res));

  routes.get('/cityname/:idName',
    (req, res, next) => postalNameController(req, res, next, config),
    (result, req, res, next) => filterNotFound(result, req, res, next),
    (result, req, res, next) => setCitiesAtCitiesObject(result, req, res, next),
    (result, req, res, next) => setLinks(result, req, res, next),
    (result, req, res) => sendOkResponse(result, req, res));


  routes.get('/province/:idName',
    (req, res, next) => postalProvinceNameController(req, res, next, config),
    (result, req, res, next) => filterNotFound(result, req, res, next),
    (result, req, res, next) => setCitiesAtCitiesObject(result, req, res, next),
    (result, req, res, next) => setLinks(result, req, res, next),
    (result, req, res) => sendOkResponse(result, req, res));

  routes.get('/coordinates/:latitude/:longitude',
    (req, res, next) => postalCoordinatesController(req, res, next, config),
    (result, req, res, next) => filterNotFound(result, req, res, next),
    (result, req, res, next) => setCityAtCityObject(result, req, res, next),
    (result, req, res, next) => setLinks(result, req, res, next),
    (result, req, res) => sendOkResponse(result, req, res));

  return routes;
};
