const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.render('homepage', { title: 'Express' });
});

module.exports = router;