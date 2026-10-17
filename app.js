require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("Server running...");
});