import { IBike } from './bike.interface';
import Bike from './bike.model';

// create this service for create a bike
const createBike = async (payload: IBike): Promise<IBike> => {
  const result = await Bike.create(payload);
  return result;
};

// create this service for get all bike
const getBikes = async (searchTerm: string) => {
  let filter = {};
  if (searchTerm) {
    // Create a regex to perform filter by name or brand or category wise
    const regex = new RegExp(searchTerm as string, 'i');

    filter = {
      $or: [{ name: regex }, { brand: regex }, { category: regex }],
    };
  }
  const result = await Bike.find(filter);
  return result;
};

// create this service for get a Specific  bike
const getSpecificBike = async (id: string) => {
  const result = await Bike.findById(id);
  return result;
};

// create this service for update a bike
const updateBike = async (id: string, data: Partial<IBike>) => {
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
