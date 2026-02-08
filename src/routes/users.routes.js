import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/users.controller.js';
import { authorizationMiddleware } from '../middleware/authorizationMiddleware.js';

const router = Router();

router.post('/', authorizationMiddleware, createUser);
router.get('/', authorizationMiddleware, getUsers);
router.delete('/:id', authorizationMiddleware, deleteUser);
router.put('/:id', authorizationMiddleware, updateUser);

export default router;
