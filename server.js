import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("Client connected:",socket.id);

    socket.on("join-room", (room) => {
        socket.join(room);
        socket.to(room).emit("system", `${socket.id} joined ${room}`);
    });


    socket.on("message", ({room,message}) => {
        io.to(room).emit("message", {
            sender: socket.id,
            message,
        });
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:",socket.id);
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});