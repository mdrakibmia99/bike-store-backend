import { Request, Response } from 'express';
import { bikeService } from './bike.service';
import bikeValidationSchema from './bike.validation';

const createBike = async (req: Request, res: Response) => {
  try {
    // get data from body
    const payload = req.body;

    const validatePayload = bikeValidationSchema.parse(payload);
    // create a bike use service function
    const result = await bikeService.createBike(validatePayload);
    // send response
    res.status(201).json({
      success: true,
      message: 'Bike  created successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || 'Validation Failed',
      error: err || 'ServerError',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};

// create a controller for get all bikes
const getBikes = async (req: Request, res: Response) => {
  try {
    //  get bike use bike service function
    const result = await bikeService.getBikes();
    // send response
    res.status(200).json({
      success: true,
      message: 'all bikes get successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || 'Resource not found',
      error: err || 'ServerError',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};

// create a controller for get specific bikes
const getSpecificBike = async (req: Request, res: Response) => {
  try {
    // get id of a bike
    const productId = req.params.productId;
    const result = await bikeService.getSpecificBike(productId);
    // send response
    res.status(201).json({
      success: true,
      message: 'Bike retrieved successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || 'Resource not found',
      error: err || 'ServerError',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};

// create a controller for update bikes
const updateBike = async (req: Request, res: Response) => {
  try {
    // get bike id
    const productId = req.params.productId;
    const body = req.body;
    const result = await bikeService.updateBike(productId, body);
    // send response
    res.status(201).json({
      success: true,
      message: 'Bike updated successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || 'Resource not found',
      error: err || 'ServerError',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};

// create a controller for delete bike
const deleteBike = async (req: Request, res: Response) => {
  try {
    // get id from parameters
    const productId = req.params.productId;
    await bikeService.deleteBike(productId);
    // send response
    res.status(201).json({
      success: true,
      message: 'Bike  deleted successfully',
      data: {},
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || 'Resource not found',
      error: err || 'ServerError',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};

export const bikeController = {
  createBike,
  getBikes,
  getSpecificBike,
  updateBike,
  deleteBike,
};
