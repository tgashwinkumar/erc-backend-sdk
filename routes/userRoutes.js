import { Router } from "express";
import User from "../models/User.js";
const router = Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.get("/address/:token", async (req, res) => {
  const user = await User.findOne({ wallet_address: req.params.token.toLowerCase() });
  res.send(user);
});

router.get("/rollno/:rollno", async (req, res) => {
  const user = await User.findOne({ rollno: req.params.rollno });
  res.send(user);
});

router.post("/add", async (req, res) => {
  try {
    const user = new User({
      ...req.body,
      rollno: req.body.rollno.toLowerCase(),
      wallet_address: req.body.wallet_address.toLowerCase(),
    });
    await user.save();
    res
      .status(200)
      .send(`User, token: ${req.body.wallet_address}, added successfully`);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send("Enter proper data");
    } else {
      res.status(500).send(err);
    }
  }
});

export default router;
