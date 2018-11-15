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
                town: "Avinyonet de Puigventós",
                postalcode: 17742,
                province: "Girona",
                latitude: 2.91439402,
                longitude: 42.24964566
            },
            {
                town: "Puigpunyent",
                postalcode: "07194",
                province: "Illes Balears",
                latitude: 2.5266031,
                longitude: 39.62087168
            },
            {
                town: "Puigpunyent",
                postalcode: "07195",
                province: "Illes Balears",
                latitude: 2.5266031,
                longitude: 39.62087168
            },
            {
                town: "Bellpuig",
                postalcode: 25250,
                province: "Lleida",
                latitude: 1.01228445,
                longitude: 41.62522812
            },
            {
                town: "Puigpelat",
                postalcode: 43812,
                province: "Tarragona",
                latitude: 1.29666609,
                longitude: 41.27974628
            },
            {
                town: "Puigcerdà",
                postalcode: 17520,
                province: "Girona",
                latitude: 1.92634012,
                longitude: 42.43264078
            },
            {
                town: "Puigcerdà",
                postalcode: 17529,
                province: "Girona",
                latitude: 1.92634012,
                longitude: 42.43264078
            },
            {
                town: "Puigdàlber",
                postalcode: "08797",
                province: "Barcelona",
                latitude: 1.70048194,
                longitude: 41.40553891
            },
            {
                town: "Puig-reig",
                postalcode: "08692",
                province: "Barcelona",
                latitude: 1.88151932,
                longitude: 41.97086915
            },
            {
                town: "Puiggròs",
                postalcode: 25420,
                province: "Lleida",
                latitude: 0.89000551,
                longitude: 41.55039239
            },
            {
                town: "Puigverd d'Agramunt",
                postalcode: 25318,
                province: "Lleida",
                latitude: 1.12196171,
                longitude: 41.77726506
            },
            {
                town: "Puigverd de Lleida",
                postalcode: 25153,
                province: "Lleida",
                latitude: 0.73288469,
                longitude: 41.54314115
            },
            {
                town: "el Puig de Santa Maria",
                postalcode: 46450,
                province: "Valencia/València",
                latitude: -0.3033912,
                longitude: 39.58982953
            },
            {
                town: "el Puig de Santa Maria",
                postalcode: 46540,
                province: "Valencia/València",
                latitude: -0.3033912,
                longitude: 39.58982953
            },
            {
                town: "Vilanova de Bellpuig",
                postalcode: 25264,
                province: "Lleida",
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