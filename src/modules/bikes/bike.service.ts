import { IBike } from './bike.interface';
import Bike from './bike.model';

// create this service for create a bike
const createBike = async (payload: IBike): Promise<IBike> => {
  const result = await Bike.create(payload);
  return result;
};

// create this service for get all bike
const getBikes = async () => {
  const result = await Bike.find();
  return result;
};

// create this service for get a Specific  bike
const getSpecificBike = async (id: string) => {
  const result = await Bike.findById(id);
  return result;
};

// create this service for update a bike
const updateBike = async (id: string, data: IBike) => {
  const result = await Bike.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// create this service for delete a bike use a id
const deleteBike = async (id: string) => {
  const result = await Bike.findByIdAndDelete(id);
  return result;
};

export const bikeService = {
  createBike,
  getBikes,
  getSpecificBike,
  updateBike,
  deleteBike,
};
