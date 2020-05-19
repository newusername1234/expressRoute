const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', {
        title: 'contact me pls',
        submitted: false
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.render('contact', {
        title: 'THANKS BRAH',
        name: req.body.name,
        submitted: true
    })
})

module.exports = router;