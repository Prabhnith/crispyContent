var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2ecfb507a750494b965dcf6dce2ee3ce');

/* GET users listing. */
router.get('/', function (req, res, next) {

    var articles = {};
    var featured = {};
    var travelguides = {};
    var technology = {};
    var items = {};
    var topics = {};

    newsapi.v2.topHeadlines().then(response => {

        items = response.articles;
        console.log(items.length);

        travelguides = items.slice(1, 4);
        articles = items.slice(5, 12);
        featured = items.slice(12, 16);
        featured1 = items.slice(16, 20);
        technology = items.slice(1, 9);
        topics = items.slice(5, 8);
        // console.log("ARTICLE : ", travelguides);
        res.render('index', {
            articles: articles,
            travelguides: travelguides,
            featured: featured,
            featured1: featured1,
            technology:technology,
            topics: topics
        });
    });
});

module.exports = router;