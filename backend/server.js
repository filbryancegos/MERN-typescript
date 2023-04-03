const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoute = require("./route/todo");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
