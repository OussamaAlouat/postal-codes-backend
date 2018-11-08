import test from 'tape';
import request from 'supertest';
import {app} from '../src/index';

test('-------- Controller: GET /', (assert) => {
    const url = '/';
    const message = 'Status must be 200 and response must match with the expected simple message';
    const responsePayloadExpected = {message: 'Server up!!'};
    const statusCodeExpected = 200;

    request(app)
        .get(url)
        .expect(statusCodeExpected)
        .expect('Content-Type', /json/)
        .then(
            (res) => {
                assert.deepEqual(res.body._data, responsePayloadExpected, message);
                assert.end();
            }, (err) => {
                assert.fail(err.message);
                assert.end();
            }
        );
});