const authRoute = require("./routes/auth");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/users");
const usersRoute = require("./routes/users");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
const connection = require('./db');
const express = require('express');
const app = express();

const { API_PORT } = process.env;

//connection to database
connection();

//middlewares
app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = API_PORT || 3001;
app.listen(port, ()=> console.log(`Server running at ${port}`))
