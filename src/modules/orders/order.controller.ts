import { NextFunction, Request, Response } from 'express';
import { orderService } from './order.service';

// create a controller for create o order
const createOrder = async (req: Request, res: Response,next:NextFunction) => {
  try {
    // get data from body
    const payload = req.body;

    // create a bike use service function
    const result = await orderService.createOrder(payload);
    // send response
    res.status(201).json({
      success: true,
      message: 'Order  created successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    next(err)
    // res.status(500).json({
    //   success: false,
    //   message: err?.name || 'Resource not found',
    //   error: err || 'ServerError',
    //   stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    // });
  }
};
// create a controller for get total revenue
const getTotalRevenue = async (req: Request, res: Response,next:NextFunction) => {
  try {
    // create a bike use service function
    const result = await orderService.getTotalRevenue();
    // send response
    res.status(201).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    next(err)
    // res.status(500).json({
    //   success: false,
    //   message: err?.name || 'Resource not found',
    //   error: err || 'ServerError',
    //   stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    // });
  }
};

export const orderController = {
  createOrder,
  getTotalRevenue,
};
