import { Express } from 'express';
import userController from '../controllers/userController'

export default (app: Express) => {
    app.use('/users', userController.get)
    app.use('/users/:id', userController.get)
};