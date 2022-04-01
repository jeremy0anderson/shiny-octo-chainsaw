import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
// const socketHost = io('https://assassination-multiplayer.herokuapp.com/game', {
//     forceNew: false,
//     transports:['websocket'],
//     reconnectionDelayMax: 10000
// });
let players = [];
const socket = io(`${window.location.origin}/player`, {
    forceNew: false,
    transports:['websocket'],
    reconnectionDelayMax: 10000
});

socket.on('playerConnected',(data)=>{
    players = data;
    console.log(data);
});