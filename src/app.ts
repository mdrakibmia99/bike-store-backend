import express, { Application } from 'express';
import cors from 'cors';
import bikeRoutes from './modules/bikes/bike.route';
import orderRoutes from './modules/orders/order.route';

const app: Application = express();

// parser use
app.use(express.json());
app.use(cors());

// this api for bike(get,post,update,delete)
app.use('/api/products', bikeRoutes);

// this api order (get,post,update,delete)
app.use('/api/orders', orderRoutes);

export default app;
