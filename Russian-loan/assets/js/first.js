$(function () {
    
	    var $total = $(".js-price"),
	    	$returnPrise = $(".js-prise-procent")
	        step = 1000,
	        a = 0,
	        returnSum = 0;
	        commission = 0.007;



	    $("#range2").ionRangeSlider({
	        grid: true,
	        min: 1000,
	        max: 50000,
	        form:1000,
	        step: step,
	        hide_min_max: true,
	        onChange: function (data) {
	            
	            a = data.from;
	            $total.text(a);

	            returnSum = data.from + (data.from * $("#day").data('from') * commission);
	            $returnPrise.text(returnSum);
       			
	        },
	        onUpdate: function (data) {
	            
	            a = data.from;
	            $total.text(a);

	            returnSumPrise = data.from + (data.from * $("#day").data('from') * commission);
	            $returnPrise.text(returnSumPrise);	            

	        }
		});
        
        var slider1 = $("#range2").data("ionRangeSlider");			    

		$('#range1-minus').on('click', function(event){
	       	slider1.update({
	           	from: slider1.old_from - 1000
	       	});

       	});   
		$('#range1-plus').on('click', function(event){
	       	slider1.update({
	           	from: slider1.old_from + 1000
	       	});
       	});	    
		var flag4 = true;
  		var flag5 =true;
  		var flag6 = true;
  		var flag7 = true;
       	$("#first-loan").click(function()
		    {
		    	if (flag4) {
					slider1.update({
	           			max: slider1.old_max = 50000,
	           			max: slider1.old_max - 10000
	       		});
					flag4 = false;
		    	} else {
		    		slider1.update({
	           			max: slider1.old_max
		    		});
		    		flag4 = true;
		   		} 
		    
	    	});  

       	$("#rep-loan").click(function()
		    {
		    	if (flag5) {
					slider1.update({
	           			max: slider1.old_max = 50000,
	           			max: slider1.old_max - 5000
	       		});
					flag5 = false;
		    	} else {
		    		slider1.update({
	           			max: slider1.old_max
		    		});
		    		flag5 = true;
		   		} 
		    
	    	}); 
       	$("#pension").click(function()
		    {
		    	if (flag6) {
					slider1.update({
						max: slider1.old_max = 50000,
	           			max: slider1.old_max + 10000
	       		});
					flag6 = false;
		    	} else {
		    		slider1.update({
	           			max: slider1.old_max
		    		});
		    		flag6 = true;
		   		} 
		    
	    	});
       	$("#NDFL").click(function()
		    {
		    	if (flag7) {
					slider1.update({
						max: slider1.old_max = 50000,
	           			max: slider1.old_max + 15000
	       		});
					flag7 = false;
		    	} else {
		    		slider1.update({
	           			max: slider1.old_max
		    		});
		    		flag7 = true;
		   		} 
		    
	    	});







    var $total1 = $(".js-days"),
    	$returnDays = $(".js-days-procent")
    	$returnDate = $(".js-date")
    	$day = $(".day")
    	$month = $(".month")
    	$year = $(".year")
    	$week = $(".week")
	        step = 1,
	        b = 0;
	        date = new Date();
	        daysChar = 0;
	        days = 0;
	        monthChar = 0;
	        month = 0;
	        year = 0;


	    $("#day").ionRangeSlider({
	    	grid: true,
	        min: 1,
	        max: 35,
	        form: 1,
	        step: step,
	        hide_min_max: true,
	        onChange: function (data) {
	            b = data.from;
	            $total1.text(b);

	            returnSumDay = $("#range2").data('from') + (data.from * $("#range2").data('from') * commission);
	            $returnDays.text(returnSumDay);
	            
	            date = new Date();
	            date.setDate(date.getDate() + data.from);
	            date.setMonth(date.getMonth() + 1);
	            

	            day = date.getDate();
	            $day.text(day);

	            year = date.getFullYear();
	            $year.text(year)

	            monthChar = date.getMonth();
	            switch (monthChar) {
	            	case 1:
	            		month = 'январь ';
	            		break
            		case 2:
            			month = 'февраль ';
            			break
        			case 3:
        				month = 'март ';
        				break
    				case 4:
    					month = 'апрель ';
    					break
					case 5:
    					month = 'май ';
    					break
					case 6:
    					month = 'июнь ';
    					break
					case 7:
    					month = 'июль ';
    					break
	            	case 8:
	            		month = 'август ';
	            		break 
	            	case 9:
	            		month = 'сентябрь ';
	            		break
            		case 10:
    					month = 'октябрь ';
    					break
					case 11:
    					month = 'ноябрь ';
    					break
					case 12:
    					month = 'декабрь ';
    					break
	            }
	            
	            $month.text(month);

	            daysChar = date.getDay();
	            switch (daysChar) {
	            	case 3:
	            		week = 'понедельник';
            			break
	            	case 4:
	            		week = 'вторник';
            			break
	            	case 5:
	            		week = 'среда';
            			break

	            	case 6:
	            		week = 'четверг';
            			break
	            	case 0:
	            		week = 'пятница';
            			break
	            	case 1:
	            		week = 'суббота';
            			break
	            	case 2:
	            		week = 'воскресенье';
            			break
        		}
        		$week.text(week);

	            // $returnDate.text(date);
	            // console.log(days);	

	        },
	        onUpdate: function (data) {
	            
	            b = data.from;
	            $total1.text(b)

	            returnSumDay = $("#range2").data('from') + (data.from * $("#range2").data('from') * commission);
	            $returnDays.text(returnSumDay);

				date = new Date();
	            date.setDate(date.getDate() + data.from);
	            
	            day = date.getDate();
	            $day.text(day);

	            year = date.getFullYear();
	            $year.text(year)
	            
	            monthChar = date.getMonth() - 1;
	            switch (monthChar) {
	            	case 1:
	            		month = 'январь';
	            		break
            		case 2:
            			month = 'февраль';
            			break
        			case 3:
        				month = 'март';
        				break
    				case 4:
    					month = 'апрель';
    					break
					case 5:
    					month = 'май';
    					break
					case 6:
    					month = 'июнь';
    					break
					case 7:
    					month = 'июль';
    					break
	            	case 8:
	            		month = 'август';
	            		break 
	            	case 9:
	            		month = 'сентябрь';
	            		break
            		case 10:
    					month = 'октябрь';
    					break
					case 11:
    					month = 'ноябрь'
    					break
					case 12:
    					month = 'декабрь'
    					break
	            }
	            // month += '&'; 

	            $month.text(month);

	            daysChar = date.getDay();
	            switch (daysChar) {
	            	case 3:
	            		week = 'понедельник';
            			break
	            	case 4:
	            		week = 'вторник';
            			break
	            	case 5:
	            		week = 'среда';
            			break

	            	case 6:
	            		week = 'четверг';
            			break
	            	case 0:
	            		week = 'пятница';
            			break
	            	case 1:
	            		week = 'суббота';
            			break
	            	case 2:
	            		week = 'воскресенье';
            			break
	            	
        		}
        		$week.text(week);
	            $returnDate.text(date);
	            console.log(days);		            
	        }
	    });
	
	var slider2 = $("#day").data("ionRangeSlider");	    
		$('#range2-minus').on('click', function(event){
	       	slider2.update({
	           	
	           	from: slider2.old_from - 1
	           	
	       	});


       	});
    
		$('#range2-plus').on('click', function(event){
	       	slider2.update({
	           	from: slider2.old_from + 1
	       	});

       	}); 
	    
		// $('#first-loan').on('click', function(event){
	 //       	slider2.update({
	 //           	max: slider2.old_max = 10
	 //       	});

  //      	});
  		var flag = true;
  		var flag1 =true;
  		var flag2 = true;
  		var flag3 = true;
       	$("#first-loan").click(function()
		    {
		    	if (flag1) {
					slider2.update({
	           			max: slider2.old_max = 20,
	           			max: slider2.old_max - 10
	       		});
					flag1 = false;
		    	} else {
		    		slider2.update({
	           			max: slider2.old_max
		    		});
		    		flag1 = true;
		   		} 
		    
	    	});  

       	$("#rep-loan").click(function()
		    {
		    	if (flag) {
					slider2.update({
	           			max: slider2.old_max = 20,
	           			max: slider2.old_max - 5
	       		});
					flag = false;
		    	} else {
		    		slider2.update({
	           			max: slider2.old_max
		    		});
		    		flag = true;
		   		} 
		    
	    	}); 
       	$("#pension").click(function()
		    {
		    	if (flag2) {
					slider2.update({
						max: slider2.old_max = 20,
	           			max: slider2.old_max + 10
	       		});
					flag2 = false;
		    	} else {
		    		slider2.update({
	           			max: slider2.old_max
		    		});
		    		flag2 = true;
		   		} 
		    
	    	});
       	$("#NDFL").click(function()
		    {
		    	if (flag3) {
					slider2.update({
						max: slider2.old_max = 20,
	           			max: slider2.old_max + 15
	       		});
					flag3 = false;
		    	} else {
		    		slider2.update({
	           			max: slider2.old_max
		    		});
		    		flag3 = true;
		   		} 
		    
	    	});
       	

	  		  	
});



$(document).ready(function() {
	$(".slider").each(function () { // обрабатываем каждый слайдер
	var obj = $(this);
		$(obj).append("<div class='nav'></div>");
		$(obj).find("li").each(function () {
		$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
		$(this).addClass("slider"+$(this).index());
		});
		$(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
		});
});
function sliderJS (obj, sl) { // slider function
	var ul = $(sl).find("ul"); // находим блок
	var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
	var step = $(bl).width(); // ширина объекта
		$(ul).animate({marginLeft: "-"+step*obj}, 1000); // 500 это скорость перемотки
		}

$(document).on("click", ".slider .nav span", function() { // slider click navigate
	var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
		$(sl).find("span").removeClass("on"); // убираем активный элемент
		$(this).addClass("on"); // делаем активным текущий
	var obj = $(this).attr("rel"); // узнаем его номер
	sliderJS(obj, sl); // слайдим
		return false;
		});
