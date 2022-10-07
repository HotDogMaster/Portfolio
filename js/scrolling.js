$(function(){
	$(document).scroll(function(){
		if ($(this).scrollTop() >= $('.fpc1').position().top - 800) {
    		$('.fpc1').removeClass('show-animation');
		    $('.fpc1').addClass('show-animation');
		}
	});
	$(document).scroll(function(){
		if ($(this).scrollTop() >= $('.hello').position().top - 800) {
    		$(".hello").fadeOut(5000);
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('.fpc2').position().top - 800) {
    		$('.fpc2').removeClass('show-animation');
		    $('.fpc2').addClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('.fpc3').position().top - 800) {
    		$('.fpc3').removeClass('show-animation');
		    $('.fpc3').addClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('.pc2_des').position().top - 800) {
    		$('.pc2_des').removeClass('show-animation');
		    $('.pc2_des').addClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('.pc_video video').position().top - 800) {
    		$('.pc_video video').removeClass('show-animation');
		    $('.pc_video video').addClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('.nozin_img').position().top - 600) {
    		$('.nozin_img').removeClass('show-animation');
		    $('.nozin_img').addClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('.nozin_cont').position().top - 1200) {
    		$('.nozin_cont').removeClass('show-animation');
		    $('.nozin_cont').addClass('show-animation');
		}
	});
	// 얘네는 네비로 화면 이동하는거
	$( '.pubup' ).click( function() {
		$('html, body').animate({
			scrollTop: $("#publish").offset().top
		}, 400);
	} );
	$(".desdw").click(function() {
		$('html, body').animate({
			scrollTop: $("#design").offset().top
		}, 400);
	});
})

