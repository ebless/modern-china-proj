var div = $('.intro-body');

$(window).on('scroll', function() {
	var st = $(this).scrollTop() - 855;
	div.css({opacity: 0 + st/600});
});


