const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const middlewares = require("./middlewares");
const mongoose = require("mongoose");
const morgan = require("morgan");
const api = require("./routes");
const path = require("path");

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = { server };
