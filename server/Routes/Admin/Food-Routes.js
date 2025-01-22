import express from 'express';
import {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood
} from '../../controllers/Admin/Food-Controller.js';

const router = express.Router();

router.get('/all', getAllFoods);

router.get('/get/:id', getFoodById);

router.post('/create', createFood);

router.put('/update/:id', updateFood);

router.delete('/delete/:id', deleteFood);

export default router;
