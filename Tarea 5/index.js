const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

let database;

const uri = process.env.DB_URL;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});

app.get('', async (req, res) => {
    const collection = database.collection('users');
    const users = await collection.find({}).toArray();
    res.send(users);
})

client.connect((err) => {
    if (err) {
        console.log('Failed to connect to database');
    } else {
        database = client.db('memegenerator');

        app.listen(port, () => {
            console.log('app is running in port ' + port);
        });
    }
});