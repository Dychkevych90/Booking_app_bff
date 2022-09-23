const authRoute = require("./routes/auth");
const hotelsRoute = require("./routes/auth");
const roomsRoute = require("./routes/auth");
const usersRoute = require("./routes/auth");

require("dotenv").config();
const connection = require('./db');
const express = require('express');
const app = express();

const { API_PORT } = process.env;

//connection to database
connection();

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);

const port = API_PORT || 3001;
app.listen(port, ()=> console.log(`Server running at ${port}`))
