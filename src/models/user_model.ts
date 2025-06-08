import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  fullName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  modifiedAt: { type: Date, default: Date.now() },
});

export default model("UserModel", userSchema);
