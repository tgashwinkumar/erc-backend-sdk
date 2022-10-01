import { Schema, model } from "mongoose";

const userSchema = new Schema({
  wallet_address: {
    required: true,
    type: String,
    unique: true,
  },
  name: {
    required: true,
    type: String,
  },
  rollno: {
    required: true,
    type: String,
  }
});

export default model("User", userSchema);
