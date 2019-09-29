// Import the mongodb client
const mongoClient = require('mongodb').MongoClient;

// URL the database is hosted
const mongoUrl = "mongodb+srv://postitvote:postitvote123456@cluster0-thmot.gcp.mongodb.net/test?retryWrites=true&w=majority";

// Name of the database
const dbName = "testDB";

// Function to create a collection
exports.createCollection = function (collectionName) {
    mongoClient.connect(mongoUrl, function (error, client) {
        if (error) {
            console.log("Failed to connected to DB");
            throw error;
        }

        console.log("Connected to the database");

        let dbObject = client.db(dbName);

        dbObject.createCollection(collectionName, function (error, response) {
            if (error) {
                console.log("Failed to create the '" + collectionName + "' collection");
                throw error;
            }

            console.log("Created the '" + collectionName + "' collection");
        });
    });
}

// Adds a new JSON object to a collection
exports.addObjectToCollection = async function (collectionName, jsonObject) {
    mongoClient.connect(mongoUrl, function (error, client) {
        if (error) {
            console.log("Failed to connected to DB");
            throw error;
        }

        console.log("Connected to the database");

        let dbObject = client.db(dbName);

        dbObject.collection(collectionName).insertOne(jsonObject, function (error, response) {
            if (error) {
                console.log("Failed to write data into the '" + collectionName + "' collection");
                throw error;
            }

            console.log("Added object data to the '" + collectionName + "' collection");
        });
    });
}

// Returns an array of json objects containing the collection
exports.getCollectionData = async function (collectionName) {

    let collection = await new Promise((res, rej) => {
        mongoClient.connect(mongoUrl, function (error, client) {
            if (error) {
                console.log("Failed to connected to DB");
                rej(error);
            }

            console.log("Connected to the database");

            let dbObject = client.db(dbName);

            dbObject.collection(collectionName).find({}).toArray(function (error, result) {
                if (error) {
                    console.log("Failed to read data from the '" + collectionName + "' collection");
                    rej(error)
                }

                res(result);
            });
        });
    });

    return collection;
}

// Update Collection Data
exports.updateCollectionData = function (collectionName, query, newData) {
    mongoClient.connect(mongoUrl, function (error, client) {
        if (error) {
            console.log("Failed to connected to DB");
            throw error;
        }

        console.log("Connected to the database");

        let dbObject = client.db(dbName);

        dbObject.collection(collectionName).updateOne(query, newData, function (error, result) {
            if (error) {
                console.log("Failed to update data in the '" + collectionName + "' collection");
                throw error;
            }

            console.log("Succesfully updated the '" + collectionName + "' collection");
        });
    });
}