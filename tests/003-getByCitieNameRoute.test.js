import test from 'tape';
import request from 'supertest';
import {app, server} from '../src/index';

test('-------- Controller: GET /cityname/:name', (assert) => {
    const url = '/cityname/puig';
    const message = 'Status must be 200 and response must match with the expected  message';
    const statusCodeExpected = 200;
    const responseExpected = {
        _links: {
            getByPostalCode: "/postalcode/:postalCode",
            getByName: "/cityname/:idName",
            getAllCitiesOfAProvince: "/provincia/:idName"
        },
            data: [
                {
                    poblacion: "Avinyonet de Puigventós",
                    codigopostal: 17742,
                    provincia: "Girona",
                    latitude: 2.91439402,
                    longitude: 42.24964566
                },
                {
                    poblacion: "Puigpunyent",
                    codigopostal: "07194",
                    provincia: "Illes Balears",
                    latitude: 2.5266031,
                    longitude: 39.62087168
                },
                {
                    poblacion: "Puigpunyent",
                    codigopostal: "07195",
                    provincia: "Illes Balears",
                    latitude: 2.5266031,
                    longitude: 39.62087168
                },
                {
                    poblacion: "Bellpuig",
                    codigopostal: 25250,
                    provincia: "Lleida",
                    latitude: 1.01228445,
                    longitude: 41.62522812
                },
                {
                    poblacion: "Puigpelat",
                    codigopostal: 43812,
                    provincia: "Tarragona",
                    latitude: 1.29666609,
                    longitude: 41.27974628
                },
                {
                    poblacion: "Puigcerdà",
                    codigopostal: 17520,
                    provincia: "Girona",
                    latitude: 1.92634012,
                    longitude: 42.43264078
                },
                {
                    poblacion: "Puigcerdà",
                    codigopostal: 17529,
                    provincia: "Girona",
                    latitude: 1.92634012,
                    longitude: 42.43264078
                },
                {
                    poblacion: "Puigdàlber",
                    codigopostal: "08797",
                    provincia: "Barcelona",
                    latitude: 1.70048194,
                    longitude: 41.40553891
                },
                {
                    poblacion: "Puig-reig",
                    codigopostal: "08692",
                    provincia: "Barcelona",
                    latitude: 1.88151932,
                    longitude: 41.97086915
                },
                {
                    poblacion: "Puiggròs",
                    codigopostal: 25420,
                    provincia: "Lleida",
                    latitude: 0.89000551,
                    longitude: 41.55039239
                },
                {
                    poblacion: "Puigverd d'Agramunt",
                    codigopostal: 25318,
                    provincia: "Lleida",
                    latitude: 1.12196171,
                    longitude: 41.77726506
                },
                {
                    poblacion: "Puigverd de Lleida",
                    codigopostal: 25153,
                    provincia: "Lleida",
                    latitude: 0.73288469,
                    longitude: 41.54314115
                },
                {
                    poblacion: "el Puig de Santa Maria",
                    codigopostal: 46450,
                    provincia: "Valencia/València",
                    latitude: -0.3033912,
                    longitude: 39.58982953
                },
                {
                    poblacion: "el Puig de Santa Maria",
                    codigopostal: 46540,
                    provincia: "Valencia/València",
                    latitude: -0.3033912,
                    longitude: 39.58982953
                },
                {
                    poblacion: "Vilanova de Bellpuig",
                    codigopostal: 25264,
                    provincia: "Lleida",
                    latitude: 0.96086785,
                    longitude: 41.61470838
                }
            ]

    };

    request(app)
        .get(url)
        .expect(statusCodeExpected)
        .then(
            (res) => {
                const currentResponseData = res.body;
                assert.deepEqual(currentResponseData, responseExpected, message);
                server.close();

            }, (err) => {
                assert.fail(err.message);
                server.close();

            }
        );

    //For not exists cp
    const urlNotExists = '/cityname/xzu';
    const notFoundExpectedCode = 404;
    const expectedResponseForNotExists = {
        message: "City not found",
        status: 404
    };
    const messageForExpectedNotExists = 'Status should be 404 and message "Postal code not found", for not exists postal code';
    request(app)
        .get(urlNotExists)
        .expect(notFoundExpectedCode)
        .then(
            (res) => {
                const currentResponseForNotExists = res.body;
                assert.deepEqual(currentResponseForNotExists, expectedResponseForNotExists, messageForExpectedNotExists);
                assert.end();
                server.close()
            }, (err) => {
                assert.fail(err.message);
                assert.end();
                server.close()
            }
        )

});