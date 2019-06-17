import {postalCodeModel} from "../model/postalCodeModel";
import {Mysql} from "../connector/db";
import {postalProvinceNameModel} from '../model/postalProvinceNameModel'
import {postalTownNameModel} from "../model/postalTownNameModel";
import {postalCoordinatesModel} from "../model/postalCoordinatesModel";
import {processDataUsingPostalCode} from "../utils/processData";
import {handleError} from '../utils/handleError'

const postalCodeController = function (req, res, next, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCodeModel(req, res, connection, mysql)
        .then((response) => {
            mysql.disconnect(connection);
            next(response)
        }).catch(handleError(req, res))

};

const postalNameController = function (req, res, next, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalTownNameModel(req, res, connection, mysql)
        .then((response) => {
            mysql.disconnect(connection);
            const processed = processDataUsingPostalCode(response);
            next(processed);
        }).catch(handleError(req,res))
    };

const postalProvinceNameController = function (req, res, next, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalProvinceNameModel(req, res, connection, mysql)
        .then((response) => {
            mysql.disconnect(connection);
            const processed = processDataUsingPostalCode(response);
            next(processed);

        }).catch(handleError(req, res))
};

const postalCoordinatesController = (req, res, next ,config) => {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCoordinatesModel(req, res, connection, mysql)
        .then((response) => {
            next(response);
            mysql.disconnect(connection);
        }).catch(handleError(req, res))
};

export {postalCodeController, postalNameController, postalProvinceNameController, postalCoordinatesController}