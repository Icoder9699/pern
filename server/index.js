require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const sequelize = require("./database/#index");
const models = require("./models");
const router = require("./routes/#index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();

// VARIABLES
const PORT = process.env.PORT || 1001;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, "static")));

// routes
app.use("/api", router);
// middlewares
app.use(errorHandler);

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
