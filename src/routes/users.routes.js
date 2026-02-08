import { Router } from 'express';
import { createUser, deleteUser, getUsers } from '../controllers/users.controller.js';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);

export default router;
