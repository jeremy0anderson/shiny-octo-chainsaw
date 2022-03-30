const handlebars = require('express-handlebars');
const router = require('express').Router();

const role = require('../../db/roles.json');

// const homepage = handlebars.registerPartial('homepage', function() {  })
// const king = handlebars.registerPartial('king', function() {  })
// const player = handlebars.registerPartial('player', function() {  })

const roleCardsRender = {
    roles:{
        id: 1,
        name: role.name,
        loyalty: role.loyalty,
        ability: role.ability,
        winCondition1: role.winCondition1,
        winCondition2: role.winCondition2,
        footnote: role.footnote,
        king: role.king
    }
};

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

router.get('/',redirectUser,(req, res)=>{
    res.render('home', roleCardsRender);
});

router.get('/king',redirectUser,(req, res)=>{
    res.render('home', kingHomeRender);
});

router.get('/player',redirectUser,(req, res)=>{
    res.render('home', playerHomeRender);
});

module.exports = router;