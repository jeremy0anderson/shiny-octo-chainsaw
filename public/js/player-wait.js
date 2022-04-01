import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socketHost = io('http://localhost:4005/player', {
    transports:['polling']
});

socketHost.on('playerConnected',(data)=>{
    console.log(data);
});