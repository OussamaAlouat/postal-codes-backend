import {postalCodeModel} from "../model/postalCodeModel";
import {Mysql} from "../connector/db";
import {postalProvinceNameModel} from '../model/postalProvinciaNameModel'
import {postalTownNameModel} from "../model/postalTownNameModel";
import {setLinks} from "../utils/responses";
import {postalCoordinatesModel} from "../model/postalCoordinatesModel";

const postalCodeController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCodeModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({message: 'Postal code not found', status: 404}) :
                res.json(setLinks(req, {city: response[0]}));
            mysql.disconnect(connection);
        }).catch((err) => res.status(500).json({message: 'Server error'}))

};

const postalNameController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalTownNameModel(req, res, connection, mysql)
        .then((response) => {
            mysql.disconnect(connection);
            response.length === 0 ?
                res.status(404).json({
                    message: 'City not found',
                    status: 404
                }) : res.json(setLinks(req, {cities: response}));

        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

const postalProvinciaNameController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalProvinceNameModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({
                message: 'Province not found',
                status: 404
            }) : res.json(setLinks(req, {cities: response}));
            mysql.disconnect(connection);

        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

const postalCoordinatesController = (req, res, config) => {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCoordinatesModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({message: 'Coordinates not found not found', status: 404}) :
                res.json(setLinks(req, {city: response}));
            mysql.disconnect(connection);
        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

export {postalCodeController, postalNameController, postalProvinciaNameController, postalCoordinatesController}