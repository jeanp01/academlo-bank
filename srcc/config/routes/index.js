import express from 'express';
import { router as userRoute } from '../module/users/users.route.js';
import { router as transferRoute } from '../module/transfers/transfers.route.js';

export const router = express.Router();

router.use('/users', userRoute);
router.use('/transfers', transferRoute);
