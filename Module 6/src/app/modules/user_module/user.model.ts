import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";


// And a schema that knows about IUserMethods too.
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
}, { timestamps: true });

// Add any instance methods to the schema here:

// For creating one method:
userSchema.methods.loginCredential = function () {
    return { email: this.email, password: this.password };
};

// For creating multiple methods:
// userSchema.methods({
//     loginCredential: function () {
//       return { email: this.email, password: this.password };
//     },
//     someOtherMethod: function () {
//       // Method implementation goes here
//     },
//     anotherMethod: function () {
//       // Method implementation goes here
//     }
//   });


// Add any static methods to the schema here:

// For creating one static method:
userSchema.statics.getAdmins = async function () {
    return this.find({ role: 'admin' });
};
  
userSchema.statics.getUsers = async function () {
    return this.find({ role: 'user' });
};

// For creating multiple static methods:
// userSchema.statics({
//     getAdmins: async function () {
//         return this.find({ role: 'admin' });
//     },
//     someOtherStaticMethod: async function () {
//         // Method implementation goes here
//     },
//     anotherStaticMethod: async function () {
//         // Method implementation goes here
//     }
// });

const User = model<IUser, UserModel>('user', userSchema); 
export default User;