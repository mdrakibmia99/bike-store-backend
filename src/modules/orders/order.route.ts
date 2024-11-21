import express from 'express';
import { orderController } from './order.controller';
const orderRoutes = express.Router();

orderRoutes.get('/revenue', orderController.getTotalRevenue);
orderRoutes.post('/', orderController.createOrder);

export default orderRoutes;
