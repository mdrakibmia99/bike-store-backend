import { IOrder } from './order.interface';
import Order from './order.model';

// create this service for create a order
const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);
  return result;
};
// create this service for get total revenue
const getTotalRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        // Grouping by null will aggregate all documents
        _id: null,
        // Sum the totalPrice field across all orders
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        // Include only totalRevenue in the result
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result;
};

export const orderService = {
  createOrder,
  getTotalRevenue,
};
