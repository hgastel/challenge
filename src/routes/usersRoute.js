import { Router } from 'express';
const router = Router();

import { createUser, getUser, getUserById, deleteUser, updateUser, Login} from '../controllers/usersController.js';

// /api/users/
router.post('/', createUser);
router.get('/', getUser);
router.post('/login', Login)

// /api/users/:userID
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser)


export default router;