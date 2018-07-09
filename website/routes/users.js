var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2ecfb507a750494b965dcf6dce2ee3ce');

var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function (req, res, next) {

    // url = 'http://ezinearticles.com/?cat=Computers-and-Technology';
    // url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2ecfb507a750494b965dcf6dce2ee3ce';
    var articles = {};
    var travelguides = {};

    newsapi.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us'
    }).then(response => {

        let items = response.articles;
        console.log(items);
        articles = items.slice(4, 12);
        travelguides = items.slice(1, 4);
        console.log("ARTICLE : ", articles);
    });

    res.render('index', {
        articles: articles,
        travelguides: travelguides
    });

});

module.exports = router;