import { Express } from 'express';
import userController from '../controllers/userController'

export default (app: Express) => {
    app.get('/users', userController.get);
    app.get('/users/:id', userController.get);
    app.post('/users/register', userController.post);
    app.patch('/users/:id', userController.update);
    app.delete('/users/:id', userController.destroy);
};