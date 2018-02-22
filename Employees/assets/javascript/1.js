$(document).ready(function() {

    $("#button-sidebar-toggle").click(function(e) {
        e.preventDefault();
        $("body").toggleClass("toggled");
	});

    $("#olo").click(function()
    {
    	$("button.btn.btn-default.bot1").addClass("hover");
    });

    $("#olo").click(function()
    {
    	$("button.btn.btn-default.bot1").addClass("hover");
    });

    $("#reload").click(function()
    {
    	location.reload();
    });
    var flag = true;
     $("#search").click(function(e)
    {
    	e.preventDefault();
    	var search_input = $("input.text-form");
    	if (flag) {
			search_input.css("display","block");
			flag = false;
    	} else {
    		search_input.css("display","none");
    		flag = true;
    	}
    });

      $("#dropdownMenu-right-bar").click(function()
    {
    	var search_input = $("button.btn.btn-default.bot-right");
    	if (flag) {
			search_input.css("display","none");
			flag = false;
    	} else {
    		search_input.css("display","block");
    		flag = true;
    	}
    
    });
      
     

});  

