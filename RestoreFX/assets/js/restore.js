$(function(){
    $('.first-car-in-steps').hover(function(){
        $(this).stop().animate({width:"400px",height:"400px",left:"0",top:"0",backgroundSize:"400px"}, 600);
        $(this).addClass("Animate");
        $(".arrow").fadeIn("slow");
        $(".arrow1").fadeIn("slow");
        $(".arrow2").fadeIn("slow");
        $(".arrow-block-1").fadeIn("slow");
        $(".arrow-block-2").fadeIn("slow");
        $(".arrow-block-3").fadeIn("slow");
    },
    function(){

        $(this).stop().animate({width:"380px",height:"305px",left:"0",top:"0",backgroundSize:"250px"}, 600);
        $(this).removeClass("Animate");
        $(".arrow").css("display","none");
        $(".arrow1").css("display","none");
        $(".arrow2").css("display","none");
        $(".arrow-block-1").css("display","none");
        $(".arrow-block-2").css("display","none");
        $(".arrow-block-3").css("display","none");
    });
    $('.second-car-in-steps').hover(function(){
        $(this).stop().animate({width:"400px",height:"400px",left:"0",top:"0",backgroundSize:"400px"}, 600);
        $(this).addClass("Animate1");
        $(".arrow4").fadeIn("slow");
        $(".arrow5").fadeIn("slow");
        $(".arrow-block-4").fadeIn("slow");
        $(".arrow-block-5").fadeIn("slow");
    },
    function(){

        $(this).stop().animate({width:"380px",height:"305px",left:"0",top:"0",backgroundSize:"250px"}, 600);
        $(this).removeClass("Animate1");
        $(".arrow4").css("display","none");
        $(".arrow5").css("display","none");
        $(".arrow-block-4").css("display","none");
        $(".arrow-block-5").css("display","none");

    });
    $('.third-car-in-steps').hover(function(){
        $(this).stop().animate({width:"400px",height:"400px",left:"0",top:"0",backgroundSize:"400px"}, 600);
        $(this).addClass("Animate2");
        $(".arrow6").fadeIn("slow");
        $(".arrow7").fadeIn("slow");
        $(".arrow8").fadeIn("slow");
        $(".arrow-block-6").fadeIn("slow");
        $(".arrow-block-7").fadeIn("slow");
        $(".arrow-block-8").fadeIn("slow");
    },
    function(){

        $(this).stop().animate({width:"380px",height:"305px",left:"0",top:"0",backgroundSize:"250px"}, 600);
        $(this).removeClass("Animate2");
        $(".arrow6").css("display","none");
        $(".arrow7").css("display","none");
        $(".arrow8").css("display","none");
        $(".arrow-block-6").css("display","none");
        $(".arrow-block-7").css("display","none");
        $(".arrow-block-8").css("display","none");

    });

});
