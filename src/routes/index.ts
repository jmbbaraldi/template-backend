import userRoutes from './userRoutes';
import { Express } from 'express-serve-static-core';

function Routes(app: Express) {
    app.use('/api', userRoutes)
}

export default Routes;