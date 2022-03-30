const router = require('express').Router();


function redirectUser(req, res, next){
    if (req.session.user){
        res.redirect('/dashboard');
    }
    next();
}

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