import express from 'express'
import { getMessages, getUserForSidebar, sendMessage } from '../controller/message.controller.js';
import { protectedRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/user',protectedRoute,getUserForSidebar)
router.get('/:id',protectedRoute,getMessages)

router.post('/send/:id',protectedRoute,sendMessage)

export default router