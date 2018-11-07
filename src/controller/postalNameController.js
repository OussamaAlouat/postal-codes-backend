import {postalNameModel} from "../model/postalNameModel";
import {Mysql} from "../connector/db";

const postalNameController = function (req, res, config) {
    const mysql = Mysql();
    const connection = mysql.connect(config);
    postalNameModel(req, res, connection, mysql)
        .then((response) => {
            response.length === 0 ? res.status(404).json({
                message: 'Postal code not found',
                status: 404
            }) : res.json({data: response});
            res.json(response);
            mysql.disconnect(connection);

        })
        .catch((err) => {
            res.status(500).json({message: 'Server error'})
        })
};
export {postalNameController}