
const btnShowBlock = document.querySelectorAll('._btn-toggle');
const closeBlock = document.querySelector('.header-special__btn-close');

btnShowBlock.forEach(item => {
	item.addEventListener('click', function (){
		if (item.classList.contains("show-block")) {
			item.classList.remove('show-block');
		} else {
			addClass(item);
		}
	})
})

function addClass(currentItem) {
	btnShowBlock.forEach((item) => {
		item.classList.remove('show-block');
	})
	item = currentItem;
	item.classList.add('show-block');
}

document.addEventListener('click', function(e){
	if (!e.target.closest('.hidden-block, ._btn-toggle')) {
		btnShowBlock.forEach(item => {
			if (item.classList.contains('show-block')) {
				item.classList.remove('show-block');
			}
		})
	}
})

closeBlock.addEventListener('click', function(e){
	btnShowBlock.forEach((item) => {
		item.classList.remove('show-block');
	})
})

const btnToggleTheme = document.querySelector('.nav-header__toggle-theme');
const cntTheme = document.querySelector('.nav-header__nav');

btnToggleTheme.addEventListener('click', function (){
	cntTheme.classList.toggle('_black');
})

const btnToggleThemeSpecial = document.querySelector('.header-special__toggle-theme');
const cntThemeSpecial = document.querySelector('.header-special__block');

btnToggleThemeSpecial.addEventListener('click', function (){
	cntThemeSpecial.classList.toggle('_black');
})

let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}

$('.language-select').click(function(){
	$(this).toggleClass('open');
})
	
$('.language-select li').click(function(){
var setLang = $('.language-select').data('location'),
		dataLangSelect = $(this).data('lang')
		$('.language-select').data('location', dataLangSelect);
		$('.language-select li').removeClass('_active');
		$(this).toggleClass('_active');
})
//    titlesFilter = document.querySelectorAll('.filter__title'),
// const imgItems = document.querySelectorAll('.content__bg'),
//    titlesFilter = document.querySelectorAll('.filter__title'),
//    body = document.querySelector('body'),
//    header = document.querySelector('header'),
//    burgerButton = document.querySelector('.header__burger'),
//    menuNav = document.querySelector('.header__nav');

// burgerButton.addEventListener('click', function (e) {
//    burgerButton.classList.toggle('active');
//    menuNav.classList.toggle('active');
//    body.classList.toggle('lock');
// });

// document.addEventListener('click', function (e) {
//    if (!e.target.closest('.header__nav, .header__burger')) {
//       burgerButton.classList.remove('active');
// 		menuNav.classList.remove('active');
// 		body.classList.remove('lock');
// 		}
// });

// titlesFilter.forEach(item => {
// 	item.addEventListener('click', function (){
// 		item.classList.toggle('active');
// 	})
// })

// document.addEventListener('click', function(e){
// 	if (!e.target.closest('.filter__section')) {
// 		titlesFilter.forEach(item => {
// 			if (item.classList.contains('active')) {
// 				item.classList.remove('active');
// 			}
// 		})
// 	}
// })

// function parallax(e) {
//    imgItems.forEach((item) => {
//       let speed = item.getAttribute('data-speed');
//       item.style.transform = `translate(${(e.clientX * speed) / 2000}px, ${
//          (e.clientY * speed) / 2000
//       }px)`;
//    });
// }

// document.addEventListener('mousemove', parallax)

// $('.partners').slick({
// 	infinite: true,
// 	slidesToShow: 5,
// 	slidesToScroll: 1,
// 	dots: false,
// 	responsive: [
// 		{
// 			breakpoint: 1250,
// 			settings: {
// 				arrows: false,
// 				dots: true
// 			}
// 		},
// 		{
// 			breakpoint: 991,
// 			settings: {
// 				slidesToShow: 4,
// 					arrows: false,
// 					dots: true
// 			}
// 		},
// 		{
// 			breakpoint: 765,
// 			settings: {
// 				slidesToShow: 3,
// 					arrows: false,
// 					dots: true
// 			}
// 		},
// 		{
// 			breakpoint: 565,
// 			settings: {
// 				slidesToShow: 2,
// 					arrows: false,
// 					dots: true
// 			}
// 		},
// 		{
// 			breakpoint: 450,
// 			settings: {
// 				slidesToShow: 1,
// 					arrows: false,
// 					dots: true
// 			}
// 		},
// 	]
// });

// $('.slider-events').slick({
// 	arrows: false,
// 	dots: true,
// 	adaptiveHeight: true,
// 	responsive: [
		
// 	]
// });

// $('.news__slider').slick({
// 	infinite: false,
// 	adaptiveHeight: true,
// 	responsive: [
// 		{
// 			breakpoint: 1250,
// 			settings: {
// 				arrows: false,
// 				dots: true
// 			}
// 		},
// 	]
// });

// $(".photo-slider__main").slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	fade: true,
// 	asNavFor: ".photo-slider__nav",
// });

// $(".photo-slider__nav").slick({
// 	slidesToShow: 4,
// 	slidesToScroll: 1,
// 	asNavFor: ".photo-slider__main",
// 	dots: false,
// 	arrows: false,
// 	centerMode: true,
// 	focusOnSelect: true,
// 	responsive: [
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 3
// 			}
// 		},
// 		{
// 			breakpoint: 565,
// 			settings: {
// 				slidesToShow: 2
// 			}
// 		},
// 	]
// });