import test from 'tape';
import request from 'supertest';
import {app, server} from '../src/index';

test('-------- Controller: GET /', (assert) => {
    const url = '/';
    const message = 'Status must be 200 and response must match with the expected simple message';
    const responseExpected = {
        _links: {
            getByPostalCode: "/postalcode/:postalCode",
            getByName: "/cityname/:idName",
            getAllCitiesOfAProvince: "/province/:idName",
            getCityByCoordinates: "/coordinates/:latitude/:longitude"
        },
        data: {
            message: "Server up!!"
        }
    };
    const statusCodeExpected = 200;
    request(app)
        .get(url)
        .expect(statusCodeExpected)
        .then(
            (res) => {
                assert.deepEqual(res.body, responseExpected, message);
                assert.end();
                server.close()
            }, (err) => {
                assert.fail(err.message);
                assert.end();
                server.close()
            }
        );
});