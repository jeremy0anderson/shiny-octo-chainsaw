import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socketHost = io('https://strawberry-crumble-34987.herokuapp.com/game', {
    forceNew: false,
    transports:['websocket'],
    reconnectionDelayMax: 10000
});

socketHost.on('playerConnected',(data)=>{
    console.log(JSON.parse(data).message);
});