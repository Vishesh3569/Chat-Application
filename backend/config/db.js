const mongoose = require("mongoose");


// const uri = "mongodb+srv://vishesh:vishesh3569@cluster0.meg3yen.mongodb.net/?retryWrites=true&w=majority";
const uri=process.env.URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);

    console.log("MongoDB Connected: ");
  } catch (error) {
    console.error("Error:"+error.message);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;









// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017'; // Assuming MongoDB is running locally on the default port

// // Database Name
// // const dbName = 'yourDatabaseName';

// // Create a new MongoClient
// const client = new MongoClient(url);


// // Connect to the MongoDB server

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to the database');
//   } catch (err) {
//     console.error('Error connecting to the database:', err);
//   }
// }

// // Function to get the reference to the database
// // function getDatabase() {
// //   return client.db(dbName);
// // }

// // Function to close the database connection
// async function closeDatabase() {
//   await client.close();
//   console.log('Disconnected from the database');
// }

// // Export the functions
// module.exports = connectToDatabase;























// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vishesh:vishesh3569@cluster0.meg3yen.mongodb.net/?retryWrites=true&w=majority";

// const connectDB = () => {
// //        
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// // async function listDatabases(client){
// //     databasesList = await client.db().admin().listDatabases();
 
// //     console.log("Databases:");
// //     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// // };

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // await listDatabases(client);
//     // // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   }catch (e){
//     console.error(e);
//   }
//    finally {
//     // Ensures that the client will close when you finish/error
    
//     await client.close();
//   }
// }
// run().catch(console.dir);
        
// }

// module.exports= connectDB;


