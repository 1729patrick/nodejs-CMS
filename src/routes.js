import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import RoleController from './app/controllers/RoleController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const router = Router();
const upload = multer(multerConfig);

router.post('/files', upload.single('file'), FileController.create);

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
