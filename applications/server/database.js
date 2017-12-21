import {MongoClient} from 'mongodb';

const HOST = 'mongodb://localhost:27017';
const DATABASE = 'todo';
const COLLECTION = 'event';

export function setEvents() {
    MongoClient.connect(HOST, function (err, client) {
        console.log("Connected successfully to database");

        const db = client.db(DATABASE);
        const collection = db.collection(COLLECTION);

        collection.insertMany(events, (err, results) => {
            if (err) {
                throw err;
            }
        });

        client.close();
    });
}

export function getEvents() {
    MongoClient.connect(HOST, function (err, client) {
        console.log("Connected successfully to database");

        const db = client.db(DATABASE);
        const collection = db.collection(COLLECTION);

        collection.find({}).toArray(function (err, docs) {
            if (err) {
                throw err;
            }

            console.log("Found the following records");
            console.log(docs)
        });

        client.close();
    });
}
