const router = require('express').Router();
function redirectUser(req, res, next){
    if (!req.session.user){
        res.redirect('/signin');
        next();
    } else {
        next();
    }
}

router.get('/', redirectUser,(req, res)=>{
        res.render('home', {
            signedIn:{
                username: req.session.user
            }
        })
});





module.exports = router;