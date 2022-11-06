import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel/slick/slick.js';

document.addEventListener('DOMContentLoaded', () => {

	$('.about_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		// adaptiveHeight: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/dist/arrow_slider.svg"></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><img style="transform: rotate(180deg);" src="images/dist/arrow_slider.svg"></button>',
	});

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// autoplay: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/dist/arrow_slider.svg"></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><img style="transform: rotate(180deg);" src="images/dist/arrow_slider.svg"></button>',
	});

	$('.about__container .slick-dots li button').each(function() {
		var id = $(this).attr('aria-controls');
		$(this).text($('#'+id+' h2').data('title'));
	});

	$('.accordion_wrapper .morelink').on('click', function(e) {
		e.preventDefault();

		if($(this).closest('.faq_item').hasClass('active')) {
			$('.faq_item').removeClass('active');
			$(this).closest('.faq_item .content').html('Читать далее');
		} else {
			$('.faq_item').removeClass('active');
			$(this).closest('.faq_item').addClass('active');
			$(this).closest('.faq_item .content').html('Свернуть');
		}

	});

	$('.radio label').on('click', function(e) {
		e.preventDefault();

		if($(this).closest('label').hasClass('active')) {
			$(this).closest('label').removeClass('active');
			$(this).children().prop('checked', false);
		} else {
			$(this).parent().children().removeClass('active');
			$(this).parent().children().children().prop('checked', false);
			$(this).addClass('active');
			$(this).children().prop('checked', true);
		}

	});


	;(function() {
		if (typeof ymaps === 'undefined') {
			return;
		}
	
		ymaps.ready(function () {
			var ymap = document.querySelector('.main__map');
      var coordinates = ymap.getAttribute('data-coordinates');
      var address = ymap.getAttribute('data-address');
			var myMap = new ymaps.Map('ymap2', {
							center: coordinates.split(','),
							zoom: 15
					}, {
							searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
							balloonContent: address
					});
			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
	});
	
	
	})();

	$('.burger').on('click', () => {
		$('.mobile__nav').addClass('mnu-active');
	});
	
	$('.close').on('click', () => {
		$('.mobile__nav').removeClass('mnu-active');
	});

	$('.mobile__nav a').on('click', () => {
		$('.mobile__nav').removeClass('mnu-active');
	});

})
