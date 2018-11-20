import {postalCodeModel} from "../model/postalCodeModel";
import {Mysql} from "../connector/db";
import {postalProvinceNameModel} from '../model/postalProvinceNameModel'
import {postalTownNameModel} from "../model/postalTownNameModel";
import {setLinks} from "../utils/responses";
import {postalCoordinatesModel} from "../model/postalCoordinatesModel";

const postalCodeController = function (req, res, next, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCodeModel(req, res, connection, mysql)
        .then((response) => {
            mysql.disconnect(connection);
            next(response)
        }).catch((err) => res.status(500).json({message: 'Server error'}))

};

const postalNameController = function (req, res, next, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalTownNameModel(req, res, connection, mysql)
        .then((response) => {
            mysql.disconnect(connection);
            next(response)
        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

const postalProvinceNameController = function (req, res, next, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalProvinceNameModel(req, res, connection, mysql)
        .then((response) => {
            mysql.disconnect(connection);
            next(response);

        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

const postalCoordinatesController = (req, res, next ,config) => {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCoordinatesModel(req, res, connection, mysql)
        .then((response) => {
            next(response);
            mysql.disconnect(connection);
        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

export {postalCodeController, postalNameController, postalProvinceNameController, postalCoordinatesController}