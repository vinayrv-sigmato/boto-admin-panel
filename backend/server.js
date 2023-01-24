const express= require("express");
const bodyparser = require("body-parser")
const dotenv = require('dotenv').config()
const port= process.env.PORT;
const {errorHandler} = require('./middleware/errorhandler')
const cors = require("cors")
const connectDB = require('./config/db')
connectDB();
const app=express();
app.use(cors({
    origin: '*'
}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

app.use('/api/admin', require('./routes/adminRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))