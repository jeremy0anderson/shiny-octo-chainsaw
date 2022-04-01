const router = require('express').Router();
const {addUser, removeUser, getUser, getUsersInRoom} = require('../../config/handleUsers');

// displays HOST waiting/lobby page if user is signed in otherwise it re-directs
router.get('/host', (req,res) => {
    const GameRoom = Math.random().toString(36).slice(2,8);
    req.session.hostCode = GameRoom;
    const io = req.app.get('socketIO').of('/host');
    io.on('connection', (socket)=> {
        console.log(socket.id);
        socket.username = req.session.user;
        socket.code = req.session.hostCode;
        socket.join(GameRoom);
        io.to(GameRoom).emit('hostConnected', "you're in " + GameRoom);
        socket.on("disconnect", ()=>{
            io.removeAllListeners();
            console.log('disconnected');
        })
    });

    res.render('partials/host-wait', {layout: 'main'});

});

// displays PLAYER waiting/lobby page if player has entered their info otherwise it re-directs
router.get('/player', (req,res) => {
    const ioPlayer = req.app.get('socketIO').of('/player');
    ioPlayer.on('connection', (socket)=> {
        if (req.session.hostCode === req.session.playerCode) {
            socket.username = req.session.playerName;
            socket.join(req.session.playerCode);
            ioPlayer.to(req.session.playerCode).emit('hostConnected', "you're in " + GameRoom);
        }
    });

    res.render('partials/player-wait', {layout: 'main'})
});

router.post('/player', (req,res) => {
    // if (!req.session.player){
    //     res.redirect('/signup');
    // }
    req.session.playerName = req.body.username;
    req.session.playerCode = req.body.gameCode
    res.redirect('/lobby/player');

});
module.exports = router;