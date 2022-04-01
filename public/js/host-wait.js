import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socketHost = io(`http://localhost:4005/game`, {
    forceNew: false,
    transports:['websocket'],
    reconnectionDelayMax: 10000
});

socketHost.on('hostConnected',(data)=>{
    console.log(JSON.parse(data).message);
});