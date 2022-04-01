const router = require('express').Router();

/// configure io / appropriate namespaces

let players = [];
let connections = new Set();


function filterByUser(socket, array){
    const socketUsername = socket.username;
    return array.filter((username) => {
        return username !== socketUsername;
    });
}
function hostNSP(req, res, next){
    const ioHost = req.app.get('socketIO')
}
// displays HOST waiting/lobby page if user is signed in otherwise it re-directs
router.get('/host', (req,res) => {
    const io = req.app.get('socketIO');
    const hostNSP = io.of('/host');
    const playerNSP = io.of('/player')
    if (req.session.signedIn === true) {


        let user = req.session.hostName;
        let code = req.session.hostCode;
        hostNSP.on('connection', (socket) => {
            //add connection to set (makes it easier to remove on disconnect) //
            ///////// setup socket vars ////////
            socket.username = user;
            socket.gameCode = code;
            //// join the same game room as the host
            socket.join(code);

            connections.add(socket)
            console.log(connections);
            socket.to(socket.gameCode).emit('playerConnected', user);
            socket.on("disconnect", () => {
                connections.delete(socket);
                // players = players.filter(p=> p.includes(socket.username) === false);
                // ioHost.to(code).emit('removed', players);
                io.in(code).emit('userLeft', connections);
                let newPlayers = filterByUser(socket, players);
                console.log(newPlayers);
                socket.removeAllListeners();
                console.log('disconnected');
            })
        });
        res.render('partials/host-wait', {
            players: players,
            gameCode: req.session.hostCode
        });
    } else {
        res.redirect('/signup')
    }
});
router.post('/host', (req, res)=>{
    if (req.session.signedIn === true) {
        res.redirect('/lobby/host');
    }
})
// displays PLAYER waiting/lobby page if player has entered their info otherwise it re-directs
router.get('/player', (req,res) => {
    const io = req.app.get('socketIO');
    const hostNSP = io.of('/host');
    const playerNSP = io.of('/player')
    playerNSP.on('connection', (socket)=> {

        let name = req.session.playerName,
            code = req.session.playerCode
        socket.name = req.session.playerName
        socket.code = req.session.playerCode
        socket.join(socket.room);
        let playerStats = {
            id: socket.id,
            name: socket.name,
            room: socket.code
        }
        hostNSP.to(req.session.playerCode).emit('playerConnected', playerStats)
        playerNSP.emit('playerConnected', playerStats);
        socket.on("disconnect", ()=>{
            socket.removeAllListeners();
            console.log('disconnected');
        })

        socket.on('playerConnected', (players)=>{

        })

    });
    res.render('partials/player-wait');
});

router.post('/player', (req,res) => {

});
module.exports = router;