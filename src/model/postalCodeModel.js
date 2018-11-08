const postalCodeModel = function (req, res, conn, mysql) {
    const postalCode = req.params.postalCode;
    const query = `
        SELECT * FROM postal.codigopostal 
          join postal.poblacion on (postal.poblacion.poblacionid = postal.codigopostal.poblacionid 
            and postal.poblacion.provinciaid = postal.codigopostal.provinciaid )
          join postal.provincia on postal.provincia.provinciaid = postal.codigopostal.provinciaid
          where postal.codigopostal.codigopostalid =${postalCode}`;
    return mysql.executeQuery(conn, query);
};

export {postalCodeModel}