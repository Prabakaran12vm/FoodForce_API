import express from 'express';
import {getRestaurants, getRestaurantMenu} from '../controller/restaurant.controller.js';

const router = express.Router();


router.get('/', getRestaurants);
router.get('/:id', getRestaurantMenu);


export default router;