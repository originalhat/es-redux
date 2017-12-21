import express from 'express';
import * as bodyParser from 'body-parser';
import * as command from "./applications/server/command";

const app = express();

app.use(bodyParser.json()); // for parsing application/json

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/events', function (req, res) {
    res.send('return all events')
});

app.post('/commands', function (req, res) {
    command.process(req.body);
    res.sendStatus(200);
});

/* insert WS service here */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

