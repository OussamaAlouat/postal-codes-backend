const postalCodeModel = function (req, res, conn, mysql) {
        const postalCode = req.params.postalCode;
        const query = `SELECT distinct * FROM postal.codigopostal 
           join postal.poblacion on  (postal.codigopostal.poblacionid = postal.poblacion.poblacionid and 
           postal.codigopostal.provinciaid = postal.poblacion.provinciaid)
           where codigopostalid = ${postalCode}`;
       return mysql.executeQuery(conn, query);
};

export {postalCodeModel}