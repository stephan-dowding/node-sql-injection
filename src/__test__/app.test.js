import request from 'supertest';
import app from '../app';

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/');
        // console.log(response);
        expect(response.statusCode).toBe(200);
    });
});

describe('Login path', () => {
    test('It should respond 200 to the POST method when credentials valid', async () => {
        const response = await request(app)
        .post('/login')
        .send('username=alice&password=password');
        // console.log(response);
        expect(response.statusCode).toBe(200);
    });
    test('It should respond 403 to the POST method when credentials invalid', async () => {
        const response = await request(app)
        .post('/login')
        .send('username=alice&password=wrong');
        // console.log(response);
        expect(response.statusCode).toBe(403);
    });
});
