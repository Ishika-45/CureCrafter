import express from 'express';
import { addDoctor, allDoctors, loginAdmin } from '../controllers/adminController.js'; 
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor', authAdmin, upload.single('docImg'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/add-doctors', authAdmin, allDoctors);

export default adminRouter;
