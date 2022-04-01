$(function(){
	
	$(document).ready(function(){
		$('#gnb .dep1_con').eq(a_num).addClass('active');
		$('#s_tab_right .dep1_con').eq(b_num).addClass('active');

	});

	var Currnet = 0;
    var Slide = $(".s12 .con3_slide>li, .s13 .slide_wrap>li");

	$(Slide).not(":eq(0)").css("left","1225px");
	
    var lastOne = $(".slide_wrap>li").length-1;
	
	function slideRight() {

		$(Slide).not(":eq("+Currnet+")").css("left","1225px");
		Currnet = Currnet == lastOne ? 0 : Currnet+= 1;
		$(Slide).eq(Currnet-1).animate({left:"-1225px"},500);
		$(Slide).eq(Currnet).animate({left:"0px"},500,function() {
			$(Slide).not(":eq("+Currnet+")").css("left","1225px")
		});
        $(".bullet>li").removeClass("active");
		$(".bullet>li").eq(Currnet).addClass("active");
	}


	function slideLeft() {
		var slideImage = 0;

		$(Slide).not(":eq("+Currnet+")").css("left","-1225px");
		Currnet = Currnet == slideImage ? lastOne : Currnet-= 1;
		if( Currnet == lastOne ) {
			$(Slide).eq(0).animate({left:"1225px"}, 500);
		}
		else {
			$(Slide).eq(Currnet+1).animate({left:"1225px"}, 500);
		}
		
		$(Slide).eq(Currnet).animate({left:"0px"}, 500, function() {
			$(Slide).not(":eq("+Currnet+")").css("left","-1225px");
		});
        $(".bullet>li").removeClass("active");
		$(".bullet>li").eq(Currnet).addClass("active");
	};

	$(".prev").click(slideLeft);
	$(".next").click(slideRight);

	$(".bullet>li").click(function() {
		
		var bulletNumber = $(this).index();
		// alert(bulletNumber);
		
		if(Currnet == bulletNumber) return;
		
		else {
			$(Slide).not(":eq("+Currnet+")").css("left","1225px");
			$(Slide).eq(Currnet).animate({left:"-1225px"},1000);
			$(Slide).eq(bulletNumber).animate({left:"0px"},1000,function() {
				$(Slide).not(":eq("+bulletNumber+")").css("left","1225px");
			});
			$(".bullet>li").removeClass("active");
			$(".bullet>li").eq(bulletNumber).addClass("active");
			
			Currnet = bulletNumber;
		};
	});

	function card_next() {
		$(".slide_cards").animate({left:"-320px"}, 800, function() {
			$(".slide_cards>li:first").appendTo(".slide_cards");
			$(".slide_cards").css("left","0px")
		})
	}
	$(".con4 .next_btn").click(function() {
		card_next();
		return false;
	});
});