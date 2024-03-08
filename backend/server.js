
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authroutes");
const userRouter = require("./routes/userRoutes");
const listRoutes = require('./routes/listRoutes');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
})
  .catch((err) => console.error(err));

  // Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/createList", listRoutes);
app.use("/api/getList", listRoutes);
app.use("/api/deleteList", listRoutes);
app.use("/api/upadteList", listRoutes);

app.use("/api", userRouter);















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const listRoutes = require('./routes/listRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const MONGODB_URI = 'mongodb://localhost:27017/super_admin';
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/createList', listRoutes);
// app.use('/api/getUsers', listRoutes);
// app.use('/api/deleteUser', listRoutes);

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
