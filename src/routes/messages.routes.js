import { Router } from 'express';
import { getMessagesByChat, sendMessage, updateMessage } from '../controllers/messages.controller.js';
import { authorizationMiddleware } from '../middleware/authorizationMiddleware.js';

const router = Router();

router.post('/', authorizationMiddleware, sendMessage);
router.get('/:chatId', authorizationMiddleware, getMessagesByChat);
router.put('/:id', authorizationMiddleware, updateMessage);

export default router;
