// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// console.log(process.env.PORT);
// app.get("/api/auth/signup", (req, res) => {
//     res.send("Signup endpoint");
// });

app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);

app.listen(PORT, () => {
    console.log("Server running on port: "+PORT);
});