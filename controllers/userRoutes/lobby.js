const router = require('express').Router();

router.get('/host', (req,res) => {
    if (!req.session.user){
        res.redirect('/signup');
    }

    res.render('partials/host-wait', {layout: 'main'});
});

router.get('/player', (req,res) => {
    // change below to session player when set up!!
    if (!req.session.user){
        res.redirect('/signup');
    }

    res.render('partials/player-wait', {layout: 'main'})
});

module.exports = router;