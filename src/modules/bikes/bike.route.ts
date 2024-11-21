import express from 'express';
import { bikeController } from './bike.controller';

const bikeRoutes = express.Router();

bikeRoutes.post('/', bikeController.createBike);
bikeRoutes.get('/:productId', bikeController.getSpecificBike);
bikeRoutes.put('/:productId', bikeController.updateBike);
bikeRoutes.delete('/:productId', bikeController.deleteBike);
bikeRoutes.get('/', bikeController.getBikes);

export default bikeRoutes;
