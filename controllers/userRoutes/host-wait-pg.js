const router = require('express').Router();

router.get('/waiting', (req, res) => {
  res.render('host-wait-pg');
});

module.exports = router;