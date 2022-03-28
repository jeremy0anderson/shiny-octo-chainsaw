const router = require('express').Router();

router.get('/', (req, res)=>{
    if (!req.session.user) {
        res.redirect('/signin');
    }
        else {
            res.render('')
        }
})
router.get('/host', (req, res)=>{
    res.json(req.session.gameCode);
})

module.exports = router;