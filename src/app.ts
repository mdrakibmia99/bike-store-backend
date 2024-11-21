import express, { Application, Request, Response } from 'express';
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
app.get('/',(req:Request,res:Response)=>{
    res.send("Welcome to bike store server...")
})

export default app;
