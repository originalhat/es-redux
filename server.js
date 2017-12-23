import express from 'express';
import * as bodyParser from 'body-parser';
import * as AppCommand from "./applications/core/appCommand";
import ServerStore from "./applications/server/stores/ServerStore";

const app = express();
const serverStore = new ServerStore();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/events', function (req, res) {
    res.json(serverStore.events);
});

app.post('/commands', function (req, res) {
    AppCommand.process(req.body, serverStore);
    res.sendStatus(200);
});

/* insert WS service here */

app.listen(3000, () => console.log('Example app listening on port 3000!'));

