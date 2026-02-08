import { Router } from 'express';
import { createChat, getChats,updateChat } from '../controllers/chats.controller.js';
import { authorizationMiddleware } from '../middleware/authorizationMiddleware.js';

const router = Router();

router.post('/', authorizationMiddleware, createChat);
router.get('/', authorizationMiddleware, getChats);
router.put('/:id', authorizationMiddleware, updateChat);

export default router;
