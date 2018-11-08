import {Mysql} from "../connector/db";
import {postalProvinciaNameModel} from '../model/postalProvinciaNameModel'
const postalProvinciaNameController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalProvinciaNameModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({
                message: 'Postal code not found',
                status: 404
            }) : res.json({data: response});
            mysql.disconnect(connection);

        })
        .catch((err) => {
            res.status(500).json({message: 'Server error'})
        })
};
export {postalProvinciaNameController}