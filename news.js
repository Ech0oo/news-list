'use strict';

var request = require('request'),
    cheerio = require('cheerio');

request('https://habrahabr.ru/', function (error, response, body) {
  if (error) {
    console.log(error);
  } else { 
    var cards = [];
    
    var $ = cheerio.load(body);
    
    $('.post__title_link').each(function(){
      cards.push({
          title:$('.post__title_link',this).text(),
          url:$('a',this).attr('href')
      });
    });
    console.log(cards);
  }
})