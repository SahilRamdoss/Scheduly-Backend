const express = require("express");
const app = express();
const cors = require("cors");

const API_PORT = 5000;
const REACT_APP_ORIGIN = "http://localhost:5173";

app.use(cors({
    origin: REACT_APP_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:false
}));

// --- Middleware ---
app.use(express.json()); // For parsing JSON request bodies for post and put requests

app.get("/api",(req,res)=>{
    res.json({"users":["user1", "user2", "user3", "user4"]});
})

app.listen(API_PORT,()=>{
    console.log("Server started on port 5000.")
})