import { Router } from 'express';
import { getMessagesByChat, sendMessage } from '../controllers/messages.controller.js';

const router = Router();

router.post('/', sendMessage);
router.get('/:chatId', getMessagesByChat);

export default router;
