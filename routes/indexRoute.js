const express = require('express');
const router = express.Router();



router.get(['/', '/home'], (req, res) => {
    res.render('index');
})
router.get('/about', (req, res) => {
    res.render('about');
})
router.get('/contact', (req, res) => {
    res.render('contact');
})
router.get('/courses', (req, res) => {
    res.render('courses');
})
router.get('/team', (req, res) => {
    res.render('team');
})
router.get('/testimonial', (req, res) => {
    res.render('testimonial');
})


module.exports = router;