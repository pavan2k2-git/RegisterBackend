
const express = require('express')
const dotEnv = require('dotenv')
//const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express()

const PORT = process.env.PORT || 5000;

dotEnv.config()

app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:4200"
}));

mongoose.connect(process.env.Mongo_URI).then(
    () => { console.log("MongoDb Connected Successfully.")}
).catch((error)=>{
    console.log("Error",error)
});

app.use('/registerpage', userRoutes);

app.listen(PORT, () => {
    console.log(`server started and running at ${PORT}`)
});