// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://jeyam:12345@cluster0.akbk8ky.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

let dbConnection;

export const connectToServer = (callback) => {
  // client.connect(function (err, db) {
  //   if (err || !db) {
  //     return callback(err);
  //   }

  //   dbConnection = db.db("gochart-admin");
  //   console.log("Successfully connected to MongoDB.");

  //   return callback();
  // });

  mongoose
    .connect(connectionString, {})
    .then(() => {
      console.log("Connected to MongoDB");
      return callback();
    })
    .catch((err) => {
      console.log(err);
      return callback(err);
    });
};

// export const getDb = () => dbConnection;
