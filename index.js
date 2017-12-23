import express from 'express';
import * as bodyParser from 'body-parser';
import * as AppCommand from "./applications/core/AppCommand";
import ServerStore from "./applications/server/ServerStore";

const app = express();
const serverStore = new ServerStore();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/events', function (req, res) {
    res.send('return all events')
});

app.post('/commands', function (req, res) {
    AppCommand.process(req.body, serverStore);
    res.sendStatus(200);
});

/* insert WS service here */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

