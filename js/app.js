$(function(){

// Section : Navbar >> Links click
	$('.navbar li a').click(function(){
		$('.navbar li').removeClass("active");
		$(this).parent("li").addClass("active");
			
		if($(this).data('destination'))	{
			$('body,html').animate({
			scrollTop: $($(this).data('destination')).offset().top
			},1000)
		}
	});

// Section : Portfolio >> Star Rating
	function star_rating(selector,percentage){
		var no_of_stars = percentage * 5; //3.5
		var full_stars = parseInt(no_of_stars); //3
		var half_star = (no_of_stars - full_stars) // .5
		var half_star_perc = 100-(half_star*100); // 50  

		for (var i = 0; i < full_stars; i++) {
			selector.querySelectorAll(".overlay")[i].style.clipPath = "inset(0px 0px 0px 0px)"
		}
		if(full_stars !=5){
			selector.querySelectorAll(".overlay")[full_stars].style.clipPath = "inset(0px "+half_star_perc+"% 0px 0px)"
		}
	}	
	var selector1= document.querySelector("#rateid1");
	star_rating(selector1,.7);
	var selector2= document.querySelector("#rateid2");
	star_rating(selector2,1);
	var selector3= document.querySelector("#rateid3");
	star_rating(selector3,.6);
	

// Section : add_project >> element after button give us
	var send_button_height = $('.send-section .question button').outerHeight();
	function button_arrow(){
		send_button_height = $('.send-section .question button').outerHeight();
		$('.send-section .question button span').css({
		"border-width":send_button_height/2 -1,
		"right": -send_button_height +2
		});
	}
	button_arrow();
	$(window).resize(function(){
		button_arrow()
	});





});