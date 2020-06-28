import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import RoleController from './app/controllers/RoleController';
import ContentController from './app/controllers/ContentController';
import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const router = Router();
const upload = multer(multerConfig);

router.post('/sessions', SessionController.store);
router.get('/public/contents', ContentController.index);

router.use(authMiddleware);

router.post('/files', upload.single('file'), FileController.create);

router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.put('/users/:userId', UserController.update);
router.delete('/users/:userId', UserController.delete);

router.get('/roles', RoleController.index);
router.post('/roles', RoleController.store);
router.put('/roles/:roleId', RoleController.update);
router.delete('/roles/:roleId', RoleController.delete);

router.get('/contents', ContentController.index);
router.post('/contents', ContentController.store);
router.put('/contents/:sessionId', ContentController.update);
router.delete('/contents/:sessionId', ContentController.delete);

export default router;
