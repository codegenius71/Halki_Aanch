var menuToggle = document.querySelector('.menu-toggle');
var headerSearch = document.querySelector('.header-search');
var navMenu = document.querySelector('.nav-menu');
var subMenu = document.querySelectorAll('.menu-item-has-children > .submenu-expand');
var searchToggle = document.querySelectorAll('.search-toggle-disabled');
var searchField = document.querySelector('.header-search .search-field');

// Mobile Menu toggle
menuToggle.addEventListener('click', function(e) {
	for( i = 0, len = searchToggle.length; i < len; i++ ) {
		searchToggle[i].classList.remove('active');
	}
	headerSearch.classList.remove('active');
	navMenu.classList.toggle('active');
	this.classList.toggle('active');
});


// Menu item toggle
for( var i = 0, len = subMenu.length; i < len; i++ ) {
	subMenu[i].addEventListener('click', function(e) {
		this.classList.toggle('expanded');
		e.preventDefault();
	});
};


// Search toggle
for( var i = 0, len = searchToggle.length; i < len; i++ ) {
	searchToggle[i].addEventListener('click', function(e) {
		menuToggle.classList.remove('active');
		navMenu.classList.remove('active');
		this.classList.toggle('active');
		headerSearch.classList.toggle('active');
		searchField.focus();
	});
}

const elementExists = function(element) {
	if ( typeof(element) != 'undefined' && element != null ) {
		return true;
	}
	return false;
}



// FacetWP: Scroll whenever facet pager is interacted with 
jQuery(function($){
	$(document).on('facetwp-refresh', function() {
		if ( FWP.soft_refresh == true )  {
		  FWP.enable_scroll = true;
		} else {
		  FWP.enable_scroll = false;
		}
	});
	$(document).on('facetwp-loaded', function() {
	  if (FWP.enable_scroll == true) {
		$('html, body').animate({
		  scrollTop: $('.recipe-filter').offset().top
		}, 500);
	  }
	});
});


// Yoast FAQ Toggle
const yoastFaqs = document.querySelectorAll('.schema-faq');
if ( yoastFaqs.length ) {
	for( let [faqIndex, faq] of yoastFaqs.entries() ) {
		faq.classList.add('schema-faq--has-toggle');
		let questions = faq.querySelectorAll('.schema-faq-question');
		if ( questions.length ) {
			for( let [questionIndex, question] of questions.entries() ) {
				let btn = document.createElement('button');
				btn.setAttribute('aria-label', 'Display answer');
				btn.classList.add('schema-faq-toggle');
				question.append(btn);
				question.style.cursor = 'pointer';

				// Close all faqs by default.
				question.closest('.schema-faq-section').querySelector('.schema-faq-answer').toggleAttribute('hidden');

				// Open all faqs by default.
				// question.closest('.schema-faq-section').classList.toggle('active');

				// Open first faq question in each faq block.
				//if ( questionIndex !== 0 ) {
				//	question.closest('.schema-faq-section').querySelector('.schema-faq-answer').toggleAttribute('hidden');
				//} else {
				//	question.closest('.schema-faq-section').classList.toggle('active');
				//}
			}
		}
	}
}

const faqToggle = function(event) {
	if( !event.target.closest('.schema-faq-question') ) return;
	let parent = event.target.closest('.schema-faq-section');
	parent.classList.toggle('active');
	parent.querySelector('.schema-faq-answer').toggleAttribute('hidden');
}

// Add functions to click event listener
document.addEventListener('click', function(event) {
	faqToggle(event);
});