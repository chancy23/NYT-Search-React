// this is where we will use the methods in the controller file to post and retreive from our mongoDb (saved articles)
const router = require('express').Router();
const articleController = require('../controllers/articleController');

router.get('/articles', articleController.findAll);

//to save article to the db
router.post('/articles', articleController.create);

// router.put('/', function (req, res) {
//     res.send('Birds home page')
// });

router.delete('/', function (req, res) {
    res.send('Birds home page')
});


module.exports = router