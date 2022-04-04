const router = require('express').Router();

/// configure io / appropriate namespaces

let players = [];
let connections =[]


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
    if (req.session.signedIn) {
        res.render('partials/host-wait', {
            players: players, gameCode: req.session.hostCode
        });
    }
        else {
            res.redirect('/signin');
        }
});
router.post('/host', (req, res)=>{
        res.redirect('/lobby/host');
})
// displays PLAYER waiting/lobby page if player has entered their info otherwise it re-directs
router.get('/player', (req,res) => {
    
    res.render('partials/player-wait');
});

router.post('/player', (req,res) => {

});
module.exports = router;