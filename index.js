import {initializeDatabase} from "./applications/server/database";
import express from 'express';

const app = express();

initializeDatabase();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.post('/events', function (req, res) {
    res.send('Got a POST request')
});

app.post('/commands', function (req, res) {
    res.send('Got a POST request')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

