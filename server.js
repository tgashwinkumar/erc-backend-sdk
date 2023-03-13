import express, { json } from "express";
import cors from "cors"; // get MongoDB driver connection
import { connectToServer } from "./mongo/conn.js";

import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(json());
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/transaction", transactionRoutes);

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

// perform a database connection when the server starts
connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
