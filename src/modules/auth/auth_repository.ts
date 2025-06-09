import { IUser, UserModel } from "../../models/user_model.ts";

export const getUser = async (username: string) => {
  const user = await UserModel.findOne({ username: username });
  return user;
};

export const createUser = async (
  username: string,
  email: string,
  password: string,
  fullName: string,
): Promise<IUser> => {
  const newUser = new UserModel({
    username: username,
    email: email,
    password: password,
    fullName: fullName,
  });
  await newUser.save();
  return newUser;
};
