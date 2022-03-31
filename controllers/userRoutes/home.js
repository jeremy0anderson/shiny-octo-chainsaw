const router = require('express').Router();

const roles = require('../../lib/roles.json');

// const homepage = handlebars.registerPartial('homepage', function() {  })
// const king = handlebars.registerPartial('king', function() {  })
// const player = handlebars.registerPartial('player', function() {  })

// const roleCardsRender = {
//     roles:{
//         id: 1,
//         name: role.name,
//         loyalty: role.loyalty,
//         ability: role.ability,
//         winCondition1: role.winCondition1,
//         winCondition2: role.winCondition2,
//         footnote: role.footnote,
//         king: role.king
//     }
// };

// function redirectUser(req, res, next){
//     if (req.session.user){
//         res.redirect('/dashboard');
//     }
//     next();
// };

// const kingHomeRender={
//     king:{
//         role:[{
//             name: ,
//             loyalty: ,
//             ability: ,
//             winCondition1: ,
//             winCondition2: ,
//             footnote:
//         }],
//         method:{
//             type: "king",
//             opposite: "player",
//             oppositeRoute: "/home/king"
//         }
//     }
// },
// playerHomeRender={
//     player:{
//         role:[{
//             name: ,
//             loyalty: ,
//             ability: ,
//             winCondition1: ,
//             winCondition2: ,
//             footnote:
//         }],
//         method:{
//             type: "player",
//             opposite: "king",
//             oppositeRoute: "/home/player"
//         }
//     }
// };

router.get('/',(req, res)=>{
    if (!req.session.user){
        res.redirect('/signup');
    }
    res.render('partials/homepage', {layout: 'main', roles});
});

router.get('/king',(req, res)=>{
    const kingData = 
        {
            "id": 1,
            "name": "Red King",
            "loyalty": "Red",
            "ability": "Banish subjects to the Blue Court",
            "winCondition1": "Survive",
            "winCondition2": "Kill the Blue King",
            "footnote": "Remain in the Red court",
            "king": true
        };

    res.render('partials/king', {layout: 'main', kingData});
});

router.get('/player',(req, res)=>{
    res.render('partials/player', {layout: 'main'});
});

module.exports = router;