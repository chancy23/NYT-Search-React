// this is where we will use the methods in the controller file to post and retreive from our mongoDb (saved articles)
const router = require('express').Router();
const articleController = require('../../controllers/articleController');

router
    .route('/articles')
    .get(articleController.findAll)
    .post(articleController.create);

//to save article to the db
// router.post('/', articleController.create);

// router.delete('/', function (req, res) {
//     res.send('Birds home page')
// });


module.exports = router