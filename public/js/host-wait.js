import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socketHost = io('http://localhost:4005/host', {
    forceNew: false,
    transports:['websocket', 'polling'],
    reconnectionDelayMax: 10000
});

socketHost.on('hostConnected',(data)=>{
    console.log(data);
});
socketHost.on('disconnect', (socket)=>{
    socket.disconnect();
})