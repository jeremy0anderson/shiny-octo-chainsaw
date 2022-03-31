const router = require('express').Router();

// displays HOST waiting/lobby page if user is signed in otherwise it re-directs
router.get('/host', (req,res) => {
    if (!req.session.user){
        res.redirect('/signup');
    }

    res.render('partials/host-wait', {layout: 'main'});
});

// displays PLAYER waiting/lobby page if player has entered their info otherwise it re-directs
router.get('/player', (req,res) => {
    // if (!req.session.player){
    //     res.redirect('/signup');
    // }

    res.render('partials/player-wait', {layout: 'main'})
});

module.exports = router;