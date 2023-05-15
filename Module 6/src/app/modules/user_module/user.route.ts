import express from 'express';
import { CreateUser, GetAdmins, GetAllUsers, GetEmailAndName, GetUserById, GetUserByIdExcludePass, GetUsers } from './user.controller';
const router = express.Router();

router.post('/create_user', CreateUser);
router.get('/get_all_users', GetAllUsers);
router.get('/get_user_by_id/:id', GetUserById);
router.get('/get_user_by_id_exclude_pass/:id', GetUserByIdExcludePass);
router.get('/get_email_and_name/:id', GetEmailAndName);
router.get('/get_admins', GetAdmins);
router.get('/get_users', GetUsers);

export default router;