//Express and API logic
require('dotenv').config();
const express = require('express');
const connectDB = require('./connect');

const app = express();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

//Routes
const userRoutes = require('./routes/userR');
const productRoutes = require('./routes/productsR');
const orderRoutes = require('./routes/orderR');
const reviewRoutes = require('./routes/reviewR');
const categoryRoutes = require('./routes/categoryR');

//Middleware
(async () => {
    await connectDB();
    
    app.use(express.json());
    
    app.get('/', (req, res) => {
        res.send('🔩Welcome to the Marketplace API');
    });

    //Register routes
    app.use('/users', userRoutes);
    app.use('/products', productRoutes);
    app.use('/orders', orderRoutes);
    app.use('/reviews', reviewRoutes);
    app.use('/categories', categoryRoutes);
    
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://${HOST}:${PORT}`);
    });
})