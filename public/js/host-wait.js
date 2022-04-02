import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
// const socketHost = io(`https://assassination-multiplayer.herokuapp.com/game`, {
//     forceNew: false,
//     transports:['websocket'],
//     reconnectionDelayMax: 10000
// });
const socket = io(`${window.location.origin}/`, {
    forceNew: false,
    transports:['websocket'],
    reconnectionDelayMax: 10000
});
let players = [];
let playerDetails = [];
const playerList = document.querySelector('#players-list');
socket.on('connected', (socket)=>{
    console.log(socket.id);
})
socket.on('playerConnected',(players)=>{
       players.forEach(str =>{
           let playerItem = document.createElement('li');
           playerItem.textContent = str;
           playerList.appendChild(playerItem);
       })
});
socket.on('deletePlayer', (removed)=>{
    console.log(removed);
})

export default socket;