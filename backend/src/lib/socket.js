import {Server} from "socket.io";
import http from "http";
import express from "express";
import { connect } from "http2";

const app = express();
const server = http.createServer(app);


const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"]
    },
});

const userSocketMap = {};


export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

io.on("connection",(socket)=>{
    console.log("A user connected",socket.id);

    const userId = socket.handshake.query.userId
    if(userId) userSocketMap[userId] = socket.id

    io.emit("getonlineUsers",Object.keys(userSocketMap));

    socket.on("diconnect",()=>{
        console.log("A user diconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlinUsers",Object.keys(userSocketMap));
    });

});
export{io,app,server};