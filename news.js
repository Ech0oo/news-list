'use strict';

var request = require('request'),
    cheerio = require('cheerio'),
    console = require('better-console');  

request('https://habrahabr.ru/', function (error, response, body) {
  if (error) {
    console.log(error);
  } else { 
    var cards = [];
    
    var $ = cheerio.load(body);
    
    $('.post__title_link').each(function(){
        cards.push({
            title : $(this).text(),
            url : $(this).attr('href')
        });
    });
    
    console.table(cards);
  }
})