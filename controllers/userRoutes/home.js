const handlebars = require('express-handlebars');
const router = require('express').Router();

const {Role} = require('../../Role');

const homepage = handlebars.registerPartial('homepage', function() {  })
const king = handlebars.registerPartial('king', function() {  })
const player = handlebars.registerPartial('player', function() {  })

function redirectUser(req, res, next){
    if (req.session.user){
        res.redirect('/dashboard');
    }
    next();
}

const kingHomeRender={
    king:{
        role:[{
            name: ,
            loyalty: ,
            ability: ,
            winCondition1: ,
            winCondition2: ,
            footnote:
        }],
        method:{
            type: "king",
            opposite: "player",
            oppositeRoute: "/home/king"
        }
    }
},
playerHomeRender={
    player:{
        role:[{
            name: ,
            loyalty: ,
            ability: ,
            winCondition1: ,
            winCondition2: ,
            footnote:
        }],
        method:{
            type: "player",
            opposite: "king",
            oppositeRoute: "/home/player"
        }
    }
};

router.get('/',redirectUser,(req, res)=>{
    res.render('home');
});

router.get('/king',redirectUser,(req, res)=>{
    res.render('home', kingHomeRender);
});

router.get('/player',redirectUser,(req, res)=>{
    res.render('home', playerHomeRender);
});

module.exports = router;