const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeClient = require('./src/routes/client');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

let dev_db_url = 'mongodb://litrozuser:litrozpass123@ds259207.mlab.com:59207/litroz';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routeClient);

app.listen(PORT, async (req, res) =>{
    console.log('Conectado');
})