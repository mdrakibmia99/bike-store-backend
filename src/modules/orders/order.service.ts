import Bike from '../bikes/bike.model';
import { IOrder } from './order.interface';
import Order from './order.model';

// create this service for create a order
const createOrder = async (payload: IOrder) => {
  // find bike data use id 
  const getBikeById = await Bike.findById(payload?.product);

  // if bike data not found then show this error 
  if (!getBikeById) {
    const result = {
      status: false,
      message: 'Car not found!! please check your product id',
    };
    return result;
  }
  // if main data quantity will be getterthan from payload quantity 
  if (getBikeById.quantity < payload?.quantity) {
    const result = {
      status: false,
      message: `Insufficient stock, Stock available only ${getBikeById.quantity}`,
    };
    return result;
  }
  // if payload totalprice not equal to payload totaldata then this function work
  if (payload?.totalPrice !== getBikeById?.price * payload.quantity) {
    const result = {
      status: false,
      message: `Please send the correct total price (product price * quantity)[totalPrice will be ${getBikeById?.price * payload.quantity}]`,
    };
    return result;
  }

  // if every thing is okk then quantity will be reduce from main data and then it will be save
  getBikeById.quantity -= payload.quantity;
  if (getBikeById.quantity === 0) {
    getBikeById.inStock = false;
  }
  await getBikeById.save();

  const result = await Order.create(payload);
  return {
    success: true,
    message: 'Order  created successfully',
    data: result,
  };
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
