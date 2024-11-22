import express, { Application, NextFunction, Request, Response } from 'express';
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

// root route show welcome message
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to bike store server...');
});

// if client hit wrong route then show route not found message
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Route Not Found',
  });
});

// create a global error function
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars, @typescript-eslint/no-unused-vars
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message:
      error?.name == 'ZodError' || error?.name == 'ValidationError'
        ? 'Validation Failed'
        : error?.name,
    error: error || 'ServerError',
    stack: error?.stack,
  });
});

export default app;
