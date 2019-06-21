import mysql from'mysql'

const Mysql = function () {
    const connect = function (config) {
        return mysql.createConnection(Object.assign({}, config.db, {multipleStatements: true}));
    };

    const disconnect = function (connection) {
       return connection.end()
    };

    const executeQuery = function (connection, queryString) {
        return new Promise((resolve, reject) => {
            connection.query(queryString, function (err, data) {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    };

    return Object.freeze({connect, disconnect, executeQuery})
};

export  {Mysql}