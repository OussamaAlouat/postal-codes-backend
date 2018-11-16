import test from 'tape';
import request from 'supertest';
import {app, server} from '../src/index';

test('-------- Controller: GET /', (assert) => {
    const url = '/hshshshs';
    const message = 'Status must be 400';
    const responseExpected = {status: 404};
    const statusCodeExpected = 404;
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