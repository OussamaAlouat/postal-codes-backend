import {postalCodeModel} from "../model/postalCodeModel";
import {Mysql} from "../connector/db";

const postalCodeController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalCodeModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({message: 'Postal code not found', status: 404}) :
                res.json({data: response[0]});
            res.json(response);
            mysql.disconnect(connection);
        }).catch((err) => res.status(500).json({message: 'Server error'}))


};
export {postalCodeController}