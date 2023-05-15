import { Request, Response } from "express";
import { CreateUserService, GetAdminService, GetAllUserService, GetEmailAndNameService, GetUserByIdService, GetUserExcludePassService, GetUserService } from "./user.service";

export const CreateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        const newUser = await CreateUserService(userData);
        res.status(200).json({status: 'success' , message: 'User created successfully', data: newUser});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await GetAllUserService();
        res.status(200).json({status: 'success' , message: 'Users fetched successfully', data: users});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const user = await GetUserByIdService(id);   
        res.status(200).json({status: 'success' , message: 'User fetched successfully', data: user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetUserByIdExcludePass = async (req: Request, res: Response): Promise<void> => { 
    try {
        const { id } = req.params;
        const user = await GetUserExcludePassService(id);
        res.status(200).json({status: 'success' , message: 'User fetched successfully', data: user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetEmailAndName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await GetEmailAndNameService(id);   
        res.status(200).json({status: 'success' , message: 'User fetched successfully', data: user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetAdmins = async (req: Request, res: Response): Promise<void> => { 
    try {
        const admins = await GetAdminService();   
        res.status(200).json({status: 'success' , message: 'Admins fetched successfully', data: admins});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await GetUserService();   
        res.status(200).json({status: 'success' , message: 'Users fetched successfully', data: users});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}