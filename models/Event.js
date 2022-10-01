import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  prize: {
    required: true,
    type: Number,
  },
  date: {
    required: true,
    type: Date,
  },
});

export default model("Event", eventSchema);
