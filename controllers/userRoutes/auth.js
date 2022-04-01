const router = require('express').Router();
const {Host} = require('../../models');
const bcrypt = require('bcrypt');
// configure objects to use with conditional rendering
function redirectUser(req, res, next){
    if (req.session.user){
        res.redirect('/home');
    } else{
        res.redirect('/signin');
    }
    next();
}
const loginRenderOptions={
            auth:{
                login:{
                    header: "Sign In",
                    subheader: "Welcome Back"
                },
                method:{
                    type: "Sign In",
                    opposite: "Sign Up",
                    oppositeRoute: "/signup"
                },
                formAction: "/signin",
                formMethod: "post"
            }
        },
        signUpRenderOptions={
            auth:{
                signup:{
                    header: "Sign Up",
                    subheader: "Welcome"
                },
                method:{
                    type: "Sign Up",
                    opposite: "Sign In",
                    oppositeRoute: "/signin"
                },
                formAction:"/signup",
                formMethod:'post'
            }
        },
        joinRenderOptions= {
            auth: {
                join: {
                    header: "Join A Game",
                    subheader: ""
                },
                method: {
                    type: "Join",
                    opposite: "Host a Game",
                    oppositeRoute: "/lobby/host"
                },
                formAction: "/lobby/player",
                formMethod: "post"
            }
        };

router.get('/',(req, res)=>{
        res.render('partials/homepage');
});

router.get('/signin',(req, res)=>{
    res.render('partials/auth', loginRenderOptions);
});
router.post("/signin",(req, res)=>{
    Host.findOne({
        where: {
            username: req.body.username
        }
    }).then((hostData) => {
        if(!hostData){
            res.status(400)
        }
        if (hostData.checkPassword(req.body.password)) {
            // when user signs in, set host name and game code (stored in session).
            req.session.hostName = hostData.username;
            req.session.hostCode = Math.random().toString(36).slice(2,8);
            // res.locals.user = req.session.user;
            // res.redirect('/home');
        }
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    })
});


router.get('/signup', (req, res)=>{
    if (req.session.user){
        res.redirect('/home')
    } else {
        res.render('partials/auth', signUpRenderOptions);
    }
});
router.post("/signup",async(req, res)=>{
    const signupBody = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    Host.create(signupBody)
        .then((dbHostData) =>{
            // setup hostname and game code (stored in session) on signup
            req.session.hostName = req.body.username;
            req.session.hostCode = Math.random().toString(36).slice(2,8);
            //res.locals.user = req.session.user;
            res.redirect('/home');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/join', (req, res)=>{
    res.render('partials/auth', joinRenderOptions);
});
router.post('/join', (req, res)=>{

});

module.exports = router;