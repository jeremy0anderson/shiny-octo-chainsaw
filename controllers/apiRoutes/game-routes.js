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

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;