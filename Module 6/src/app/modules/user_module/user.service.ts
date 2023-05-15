import { IUser } from "./user.interface";
import User from "./user.model";

export const CreateUserService = async (user: IUser): (Promise<IUser> | never) => {
    try {
        const existingUser = await User.findOne({ email: user.email });

        if (existingUser) {
            throw new Error('User already exists');
        }
        const newUser = new User(user);
        const savedUser = await newUser.save(); // Build-in method of mongoose
        const loginCredential = savedUser.loginCredential(); // Custom instance method
        return savedUser;

    } catch (error) {
        throw new Error(error);
    }
}

export const GetAllUserService = async (): (Promise<IUser[]> | never) => { 
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error);
    }
}

export const GetUserByIdService = async (id: string): Promise<IUser> => { 
    try {
        const user = await User.findById(id);
        if (user === null) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

export const GetUserExcludePassService = async (id: string): Promise<IUser> => { 
    try {
        const user = await User.findOne({ _id: id }, { password: 0 });
        if (user === null) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error);   
    }
}

export const GetEmailAndNameService = async (id: string): Promise<IUser> => {
    try {
        const user = await User.findOne({ _id: id }, { email: 1, name: 1 });
        if (user === null) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

export const GetAdminService = async (): Promise<IUser[] | []> => {
    try {
      const admins = await User.getAdmins();
      return Array.isArray(admins) ? admins : [];
    } catch (error) {
      throw new Error(error);
    }
};
  
export const GetUserService = async (): Promise<IUser[] | []> => {
    try {
      const users = await User.getUsers();
      return Array.isArray(users) ? users : [];
    } catch (error) {
      throw new Error(error);
    }
}
  