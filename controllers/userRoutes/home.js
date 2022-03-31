const router = require('express').Router();

// JSON file with all role's data
const roles = require('../../lib/roles.json');

// display's homepage
router.get('/',(req, res)=>{
    res.render('partials/homepage', {layout: 'main', roles});
});

module.exports = router;