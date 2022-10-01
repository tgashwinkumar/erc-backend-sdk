import { Router } from "express";
import Event from "../models/Event.js";

const router = Router();

router.get("/", async (req, res) => {
  const events = await Event.find({});
  res.send(events);
});

router.post("/add", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res
      .status(200)
      .send(`Event ${req.body.name}, added successfully`);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).send("Enter proper data");
    } else {
      res.status(500).send(err);
    }
  }
});

export default router;
