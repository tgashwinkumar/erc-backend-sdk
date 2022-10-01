// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://tgashwinkumar:Aa9659604838@erc-backend-cluster.pw2jgq2.mongodb.net/?retryWrites=true&w=majority";
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
