const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.subscribe((req, res) => {
    res.statues(404).end();
});

module.exports = router;