const express = require('express');
const router = express.Router();

const { Page } = require('../models');
const { addPage } = require('../views');

router.get('/', (req, res) => {
    res.send("This is retrieve all wiki pages");
});

// router.post('/', (req, res) => {
//     res.json(req.body);
// });

router.post('/', async (req, res, next) => {

    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`
    
    const page = new Page({
      title: req.body.title,
      content: req.body.content,
      slug: req.body.slug
    });
  
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise.
    try {
      await page.save();
      res.redirect('/');
    } catch (error) { next(error) }
});

router.get('/add', (req, res) => {
    res.send(addPage());
});



module.exports = router;