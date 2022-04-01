const router = require('express').Router();


// displays HOST waiting/lobby page if user is signed in otherwise it re-directs
router.get('/host', (req,res) => {
    const ioHost = req.app.get('socketIO').of('/game');
        ioHost.on('connection', (socket)=> {
            ///////// setup socket vars ////////
            socket.username = req.session.hostName;
            socket.gameCode = req.session.hostCode;
            socket.join(req.session.hostCode);
            ioHost.to(req.session.hostCode).emit('hostConnected', JSON.stringify({
                message: `host: ${socket.username} is in room: ${socket.gameCode}`
            }));
            socket.on("disconnect", ()=>{
                ioHost.removeAllListeners();
                console.log('disconnected');
            })

    });
    res.render('partials/host-wait', {layout: 'main'});

});

// displays PLAYER waiting/lobby page if player has entered their info otherwise it re-directs
router.get('/player', (req,res) => {
    const io = req.app.get('socketIO');
    const ioPlayer = req.app.get('socketIO').of('/game');
    const GameRoom = req.session.hostCode;
    ioPlayer.on('connection', (socket)=> {
        if (req.session.playerCode === GameRoom) {
            socket.username = req.session.playerName;
            console.log(`player: ${socket.username}`)
            socket.join(GameRoom);
            ioPlayer.to(GameRoom).emit('playerConnected', JSON.stringify({
                message: `${socket.username} is in: ${GameRoom}`
            }));
            socket.on("disconnect", ()=>{
                io.removeAllListeners();
                console.log('disconnected');
            })
        }
    });

    res.render('partials/player-wait', {layout: 'main'})
});

router.post('/host', (req,res) => {

})

router.post('/player', (req,res) => {
    // if (!req.session.player){
    //     res.redirect('/signup');
    // }
    req.session.playerName = req.body.username;
    req.session.playerCode = req.body.gameCode
    res.redirect('/lobby/player');

});
module.exports = router;