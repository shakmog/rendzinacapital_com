// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .
//= require readmore
//= require jquery.backstretch

$(function() {

	// Foundation

	$(document).foundation();

	// Read More
	
	// $('article#home_left').readmore();

	// Backstretch
	switch (document.location.href) {
		case "http://localhost:3003/":
			$('#header-featured').backstretch([
				"/assets/banner2.jpg", 
				"/assets/banner1.jpg", 
				"/assets/banner.jpg",
				"/assets/banner3.jpg",
				"/assets/banner4.jpg"
			]);
			break;
		case "http://localhost:3003/aboutus":
			$('#header-featured').backstretch(
				"/assets/aboutus.jpg"
			);
			break;
		case "http://localhost:3003/careers":
			$('#header-featured').backstretch(
				"/assets/careers.jpg"
			);
			break;
		case "http://localhost:3003/whatwedo":
			$('#header-featured').backstretch(
				"/assets/whatwedo.jpg"
			);
			break;
		case "http://localhost:3003/whatwedo/social":
			$('#header-featured').backstretch(
				"/assets/whatwedo.jpg"
			);
			break;
		case "http://localhost:3003/whatwedo/consulting":
			$('#header-featured').backstretch(
				"/assets/whatwedo.jpg"
			);
			break;
		case "http://localhost:3003/whatwedo/technology":
			$('#header-featured').backstretch(
				"/assets/whatwedo.jpg"
			);
			break;
		case "http://localhost:3003/contact-us":
			$('#header-featured').backstretch(
				"/assets/contact.jpg"
			);
			break;
		case "http://localhost:3003/blog":
			$('#header-featured').backstretch(
				"/assets/aboutus.jpg"
			);
			break;
		case "http://localhost:3003/blog/new":
			$('#header-featured').backstretch(
				"/assets/aboutus.jpg"
			);
			break;
	}
	

	// Menu Toggle

	// $('#menu ul li a').click(function(){
	// 	$(this).parent().addClass('current_page_item').siblings().removeClass('current_page_item');
	// });

});


