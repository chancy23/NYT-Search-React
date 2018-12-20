const db = require("../models");

// define methods for saving and getting items from our MongoDB here I think (for saving articles that are pulled from teh NYT API)

module.exports = {
    //retrieve the saved articles from the db and render to the saved component of the page
    findAll: function (req, res) {
        console.log(req.body);
        console.log('getting saved articles from db');
        db.Article
            .find({})
            .sort({date: -1})
            .then(doc => res.json(doc))
            .catch(err => res.status(422).json(err));
    },
    //save article info to the db
    create: function (req, res) {
        console.log(req.body)
        console.log('saving article to db');
        Article
            .create(req.body)
            .then(doc => res.json(doc))
            .catch(err => res.status(422).json(err))
    }
};