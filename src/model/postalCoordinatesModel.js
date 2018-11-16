const postalCoordinatesModel = function (req, res, conn, mysql) {
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    const query = `
    SELECT DISTINCT
     postal.poblacion.poblacion AS poblacion,
     postal.codigopostal.codigopostalid AS codigopostal,
     postal.provincia.provincia AS provincia
    FROM
        postal.poblacion
         JOIN
         postal.codigopostal ON (postal.poblacion.poblacionid = postal.codigopostal.poblacionid
          AND postal.poblacion.provinciaid = postal.codigopostal.provinciaid)
          JOIN
         postal.provincia ON postal.poblacion.provinciaid = postal.provincia.provinciaid
    WHERE
      postal.poblacion.lat = '${latitude}' AND postal.poblacion.lon = '${longitude}';`;

    return mysql.executeQuery(conn, query);
};

export {postalCoordinatesModel}