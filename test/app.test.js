const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello, Jenkins Pipeline!'));

test('GET / should return "Hello, Jenkins Pipeline!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Jenkins Pipeline!');
});
