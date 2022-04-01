import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
// const socketHost = io(`https://assassination-multiplayer.herokuapp.com/game`, {
//     forceNew: false,
//     transports:['websocket'],
//     reconnectionDelayMax: 10000
// });
const socket = io(`${window.location.origin}/host`, {
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
socket.on('playerConnected',(playerStats)=>{
       playerDetails.push(playerStats);
       let detailString = "Player: "+ playerStats.name +" joined room: "+playerStats.room;
       players.push(detailString);
       console.log(players);
       players.forEach(str =>{
           let playerItem = document.createElement('li');
           playerItem.textContent = str;
           playerList.appendChild(playerItem);
       })
});
socket.on('playerDisconnected', (socketName, playersArr)=>{

    console.log(playersArr);
})

export default socket;