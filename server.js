import express from 'express';
import cors from 'cors';
import restaurantRoutes from './router/restaurant.router.js';

const app = express();
const port = 5000;

// body parser
app.use(express.json());
app.use(cors());


app.use('/api/restaurants', restaurantRoutes);


app.listen(port, () => {
    console.info(`Server is up and listening on port ${port}`);
});