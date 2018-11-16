const postalTownNameModel = function (req, res, conn, mysql) {
    const name = req.params.idName;
    const query = `
    SELECT  DISTINCT
      postal.poblacion.poblacion as town,
      postal.codigopostal.codigopostalid as postalcode,
      postal.provincia.provincia as province,
      postal.poblacion.lat as latitude,
      postal.poblacion.lon as longitude
    FROM postal.poblacion 
      join postal.codigopostal  on (postal.poblacion.poblacionid = postal.codigopostal.poblacionid 
        and postal.poblacion.provinciaid = postal.codigopostal.provinciaid)
      join postal.provincia on postal.poblacion.provinciaid = postal.provincia.provinciaid
    where postal.poblacion.poblacion LIKE '%${name}%';`;
    return mysql.executeQuery(conn, query);
};

export {postalTownNameModel}