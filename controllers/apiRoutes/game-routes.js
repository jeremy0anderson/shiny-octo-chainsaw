const router = require('express').Router();
const { Game } = require('../../models');


router.get('/', (req, res) => {
    const gameCode = Math.random().toString(36).slice(2,8);
    Game.create({
        code: gameCode
    }).then((gameData) =>{
        req.session.gameCode = gameData.code;
        if (req.session.user)
        res.redirect('/game/host');
    })
})

router.get('/player/end', (req, res) => {

    res.render("./layouts/player-end", {
        winStatus: test,
        winCon1: test,
        winCon2: test,
        winConRes1: test,
        winConRes2: test,
        blueKingStatus: test,
        redKingStatus: test,
        winImg: ''
    });
  
})

router.get('/king/end', (req, res) => {

    res.render("./layouts/king-end", {
        winStatus: test,
        assassinStatus: test,
        assassinRes: test,
        guardStatus: test,
        guardRes: test,
    });
  
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;