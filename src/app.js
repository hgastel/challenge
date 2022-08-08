import express, {json} from 'express';
import morgan from 'morgan';
import 'dotenv/config'

// Importing routes
import userRoutes from './routes/usersRoute.js';
import propRoutes from './routes/propertiesRoute.js';

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/users',userRoutes);
app.use('/api/properties',propRoutes);

export default app;