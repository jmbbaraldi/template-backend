import userRoutes from './userRoutes';
import { Express } from 'express-serve-static-core';

function Routes(app: Express) {
    userRoutes(app);
}

export default Routes;