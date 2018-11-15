import {postalCodeModel} from "../model/postalCodeModel";
import {Mysql} from "../connector/db";
import {postalProvinciaNameModel} from '../model/postalProvinciaNameModel'
import {postalNameModel} from "../model/postalNameModel";
import {setLinks} from "../utils/responses";

const postalCodeController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCodeModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({message: 'Postal code not found', status: 404}) :
                res.json(setLinks(req, {data: response[0]}));
            mysql.disconnect(connection);
        }).catch((err) => res.status(500).json({message: 'Server error'}))

};

const postalNameController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalNameModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({
                message: 'City not found',
                status: 404
            }) : res.json(setLinks(req, {data: response}));
            mysql.disconnect(connection);

        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

const postalProvinciaNameController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalProvinciaNameModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({
                message: 'Province not found',
                status: 404
            }) : res.json(setLinks(req, {data: response}));
            mysql.disconnect(connection);

        })
        .catch((err) => {
            res.status(500).json({message: ` Server error: ${err}`})
        })
};

export {postalCodeController, postalNameController, postalProvinciaNameController}