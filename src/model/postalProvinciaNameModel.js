const postalProvinciaNameModel = function (req, res, conn, mysql) {
    const name = req.params.idName;
    const query = `
    SELECT * 
    FROM postal.provincia 
      JOIN postal.poblacion on postal.provincia.provinciaid = postal.poblacion.provinciaid
      JOIN postal.codigopostal on (postal.poblacion.provinciaid = postal.codigopostal.provinciaid 
        and postal.poblacion.poblacionid = postal.codigopostal.poblacionid )
    WHERE postal.provincia.provincia LIKE '%${name}%';`;
    return mysql.executeQuery(conn, query);
};

export {postalProvinciaNameModel}