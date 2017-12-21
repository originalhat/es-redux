import express from 'express';
import * as bodyParser from 'body-parser';
import * as AppCommand from "./applications/server/AppCommand";

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/events', function (req, res) {
    res.send('return all events')
});

app.post('/commands', function (req, res) {
    AppCommand.process(req.body);
    res.sendStatus(200);
});

/* insert WS service here */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

