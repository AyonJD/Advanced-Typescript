import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    role: string;
    password: string;
}

// Put all user instance methods in this interface:
export interface IUserMethods {
    loginCredential(): { email: string, password: string};
}

// For using static methods in model:
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdmins(): Promise<HydratedDocument<IUser, IUserMethods>>;
    getUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }