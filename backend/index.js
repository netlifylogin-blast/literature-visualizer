import express from "express";
import {
    SERVER_PORT
} from "./config.js";

const app = express();

app.get("/proxy", (req, res) => {
    
});

app.listen(SERVER_PORT, () => {
    console.log("Server is listening!");
})