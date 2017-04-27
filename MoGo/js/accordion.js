$(".accordion__content").mCustomScrollbar();
$('.accordion-link').on('click', function() {
	if ($(this).hasClass('active')){
		return
	}
	$('.accordion-link.active').next().slideUp();
	$('.accordion-link.active').removeClass('active');
	$(this).next().slideDown();
	$(this).addClass('active')
})
