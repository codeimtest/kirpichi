// mobile toggle
$('.toggle_button').click(function(){
	$(this).toggleClass('active')
	$('aside').toggleClass('active')
	$('body').toggleClass('lock')
	var isToggleButtonActive = $(this).hasClass('active');
	if (!isToggleButtonActive && !$(this).hasClass('active')) {
		// Закрываем элементы .sub_toggle
		$('.sub_toggle,.toggle_menu').removeClass('active');
}
})
$('.toggle_button.active').click(function(){
	$('.toggle_menu').removeClass('active')
})
$('.back_btn').click(function(){
	$('.toggle_menu,.overlay').removeClass('active')
})
$('.back_toggle_btn').click(function(){
	$('.sub_toggle').toggleClass('active')
})

// toggle menu
var toggleTarget = $('.toggle_menu nav ul li a')
toggleTarget.click(function(){
	$(toggleTarget).parent().removeClass('active')
	$(this).parent().addClass('active')
	$(toggleTarget).parent().find('.sub_toggle').removeClass('active')
	$(this).parent().find('.sub_toggle').toggleClass('active')
})
var toggleBtn = $('.toggle_catalog')
toggleBtn.click(function(){
	$('.toggle_menu').toggleClass('active')
	$('.overlay').toggleClass('active')
})
$('.overlay').click(function(){
	$(this).removeClass('active')
	$('.toggle_menu').removeClass('active')
})
$(window).scroll(function() {
	// Получаем текущее значение прокрутки от верха страницы
	var scrollPosition = $(window).scrollTop();

	// Условие: если прокрутка достигла 200 пикселей
	if (scrollPosition >= 200) {
			// Удалить класс 'active' у нужного элемента
			$('.your-element').removeClass('active');
	}
});
// carousel
var swiper = new Swiper(".first_screen_slider", {
	slidesPerView: 1,
	watchOverflow: true,
	loop: true,
	watchSlidesProgress: true,
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".next_btn",
		prevEl: ".prev_btn",
	},
});

// var swiper = new Swiper(".thumb_gallery", {
// 	loop: true,
// 	spaceBetween: 10,
// 	slidesPerView: 4,
// 	freeMode: true,
// 	watchSlidesVisibility: true,
// 	watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".product_gallery", {
// 	loop: true,
// 	spaceBetween: 10,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	thumbs: {
// 		swiper: swiper,
// 	},
// });
// filters
$('.filter_catalog').click(function(){
	$(this).next().slideToggle(300)
})
$('.choice_color button:first').addClass('active');
var initialColor = $('.choice_color button.active').css('background-color');
$('.choice_color_output').css('background-color', initialColor);
$('.choice_color button').click(function(){
	
	$('.choice_color button').removeClass('active')
	$(this).addClass('active')
	var inColor = $(this).css('background-color'); // Получаем цвет фона кнопки
	console.log(inColor); // Выводим цвет в консоль
	var outColor = $('.choice_color_output');
	$(outColor).css('background-color',inColor)
})
$('.js-select-single').select2({
	minimumResultsForSearch: -1,
});
