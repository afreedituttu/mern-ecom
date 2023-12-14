const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const logger = require('morgan');

require('./config/connection');

const userRoute = require("./routes/users");
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripePayment = require('./routes/payment');

app.use(express.json())
app.use(cors());
app.use(logger('dev'))

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);
app.use('/api/checkout', stripePayment);

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(`server started on PORT : ${PORT}`);
    }
})