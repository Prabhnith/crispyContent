var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2ecfb507a750494b965dcf6dce2ee3ce');

/* GET users listing. */
router.get('/', function (req, res, next) {

    var articles = {};
    var travelguides = {};
    var items = {};

    newsapi.v2.topHeadlines().then(response => {

        items = response.articles;
        console.log(items.length);

        travelguides = items.slice(1, 4);
        articles = items.slice(5, 12);
        // console.log("ARTICLE : ", travelguides);
        res.render('index', {
            articles: articles,
            travelguides: travelguides
        });
    });
});

module.exports = router;