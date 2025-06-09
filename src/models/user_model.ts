import { model, Schema } from "mongoose";

export interface IUser {
  username: string;
  fullName?: string;
  email: string;
  password: string;
  createdAt: Date;
  modifiedAt?: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, unique: true, required: true },
  fullName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  modifiedAt: { type: Date },
});

export const UserModel = model<IUser>("UserModel", userSchema);
