
$(document).ready(function () {
    $('nav').eq(1).find('a').eq(0).click(function (e) { 
        e.preventDefault();
    $('aside article').load("infocours.html")
    });

    $('nav').eq(1).find('a').eq(1).click(function (e) { 
        e.preventDefault();
    $('aside article').load("reviews.html")
    });

    $('nav').eq(1).find('a').eq(2).click(function (e) { 
        e.preventDefault();
    $('aside article').load("announce.html")
    });
});