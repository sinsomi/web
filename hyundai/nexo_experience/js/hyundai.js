$(document).ready(function(){
	$(".menu_box").hide(function(){
	});
	$(".menu_img").click(function(){
		$(".menu_box").fadeIn();
	});
	$("#img").click(function(){
		$(".menu_box").fadeOut();
	});
	$(".space").click(function(){
		$(".menu_box").fadeOut();
	});
	/*img_border*/
	$('#img').mouseenter(function(){
		$('#img').css('border','1px solid #57b7e7');
	});
	$('#img').mouseleave(function(){
		$('#img').css('border','0px');
	});
	/*dimmed*/
	$(".menu_box").click(function(){
		$(".dimmed").show();
	});
	$(".dimmed").click(function(){
		$(".menu_box").hide();
	});
	/*step03_인원수*/
	$("button").click(function(){
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
	});
	/*step04_달력*/
	$("td").click(function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	});
});