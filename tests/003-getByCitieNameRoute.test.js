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
            getAllCitiesOfAProvince: "/province/:idName",
            getCityByCoordinates: "/coordinates/:latitude/:longitude"
        },
        "cities": [
            {
                town: "Avinyonet de Puigventós",
                province: "Girona",
                latitude: 2.91439402,
                longitude: 42.24964566,
                postalCodes: [
                    17742
                ]
            },
            {
                town: "Puigpunyent",
                province: "Illes Balears",
                latitude: 2.5266031,
                longitude: 39.62087168,
                postalCodes: [
                    "07194",
                    "07195"
                ]
            },
            {
                town: "Bellpuig",
                province: "Lleida",
                latitude: 1.01228445,
                longitude: 41.62522812,
                postalCodes: [
                    25250
                ]
            },
            {
                town: "Puigpelat",
                province: "Tarragona",
                latitude: 1.29666609,
                longitude: 41.27974628,
                postalCodes: [
                    43812
                ]
            },
            {
                town: "Puigcerdà",
                province: "Girona",
                latitude: 1.92634012,
                longitude: 42.43264078,
                postalCodes: [
                    17520,
                    17529
                ]
            },
            {
                town: "Puigdàlber",
                province: "Barcelona",
                latitude: 1.70048194,
                longitude: 41.40553891,
                postalCodes: [
                    "08797"
                ]
            },
            {
                town: "Puig-reig",
                province: "Barcelona",
                latitude: 1.88151932,
                longitude: 41.97086915,
                postalCodes: [
                    "08692"
                ]
            },
            {
                town: "Puiggròs",
                province: "Lleida",
                latitude: 0.89000551,
                longitude: 41.55039239,
                postalCodes: [
                    25420
                ]
            },
            {
                town: "Puigverd d'Agramunt",
                province: "Lleida",
                latitude: 1.12196171,
                longitude: 41.77726506,
                postalCodes: [
                    25318
                ]
            },
            {
                town: "Puigverd de Lleida",
                province: "Lleida",
                latitude: 0.73288469,
                longitude: 41.54314115,
                postalCodes: [
                    25153
                ]
            },
            {
                town: "el Puig de Santa Maria",
                province: "Valencia/València",
                latitude: -0.3033912,
                longitude: 39.58982953,
                postalCodes: [
                    46450,
                    46540
                ]
            },
            {
                town: "Vilanova de Bellpuig",
                province: "Lleida",
                latitude: 0.96086785,
                longitude: 41.61470838,
                postalCodes: [
                    25264
                ]
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
        message: "Not found",
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