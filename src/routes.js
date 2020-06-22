import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RoleController from './app/controllers/RoleController';
import SessionController from './app/controllers/SessionController';

const router = Router();

router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.put('/users/:userId', UserController.update);
router.delete('/users/:userId', UserController.delete);

router.get('/roles', RoleController.index);
router.post('/roles', RoleController.store);
router.put('/roles/:roleId', RoleController.update);
router.delete('/roles/:roleId', RoleController.delete);

router.get('/sessions', SessionController.index);
router.post('/sessions', SessionController.store);
router.put('/sessions/:sessionId', SessionController.update);
router.delete('/sessions/:sessionId', SessionController.delete);

export default router;
