const express = require("express");
const app = express();
const http = require("http");

const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);


app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
});

server.listen(3000,()=>{
    console.log("Server Started On Port port");
});