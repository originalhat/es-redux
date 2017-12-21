let MongoClient = require('mongodb').MongoClient;

class Database {
    constructor() {

    }

    setEvent() {

    }

    getEvent() {

    }
}

export function initializeDatabase() {
    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        console.log("Connected successfully to database");

        const db = client.db('animals');

        const collection = db.collection('mammals');

        // console.log(collection.find({}))

        collection.insertMany([
            {a: 1}, {a: 2}, {a: 3}
        ], function (err, result) {
            // assert.equal(err, null);
            // assert.equal(3, result.result.n);
            // assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            // callback(result);
        });

        console.log(collection.find({}).toArray(function (err, docs) {
            // assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs)
            // callback(docs);
        }));

        client.close();
    });
}
