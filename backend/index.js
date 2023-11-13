const { MongoClient } = require("mongodb");

const uri = 'mongodb+srv://dubeyanubhav12345:anubhav123@cluster0.j16vqjj.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const main = async () => {
    try {
        await client.connect();
        console.log("Connected to the database");

        const db = client.db("headfonedb");
        const collection = db.collection("Products");

        const data = await collection.find({ price: { $gt: 300 } }).toArray();
        console.log("Retrieved data:", data);

        return "done";
    } finally {
        await client.close();
        console.log("Connection closed");
    }
};

main()
    .then(() => {
        console.log("done again");
    })
    .catch((e) => {
        console.log("Error:", e);
    })
    .finally(() => {
        console.log("Script finished");
    });
