import test from 'tape';
import request from 'supertest';
import {app, server} from '../src/index';

test('-------- Controller: GET /postalcode/:postalCode', (assert) => {
    const url = '/postalcode/46500';
    const message = 'Status must be 200 and response must match with the expected simple message';
    const statusCodeExpected = 200;
    const responseExpected = {
        _links: {
            getByPostalCode: "/postalcode/:postalCode",
            getByName: "/cityname/:idName",
            getAllCitiesOfAProvince: "/provincia/:idName"
        },
        data: {
            data: {
                codigopostalid: 46500,
                poblacionid: 220,
                provinciaid: 46,
                poblacion: "Sagunto/Sagunt",
                ineid: 46220000000,
                lat: -0.2759603,
                lon: 39.68008485,
                provincia: "Valencia/València"
            }

        }

    };

    request(app)
        .get(url)
        .expect(statusCodeExpected)
        .then(
            (res) => {
                assert.deepEqual(res.body, responseExpected, message);
                server.close()

            }, (err) => {
                assert.fail(err.message);
                server.close()
            }
        );
    //For not exists cp
    const urlNotExists = '/postalcode/00005';
    const notFoundExpectedCode = 404;
    const expectedResponseForNotExists = {
        message: "Postal code not found",
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