//$(document).ready(function(e) {
//    $('body').click(function() {
//		$('.logo').fadeOut('slow',function() {
//		});
//	});
//});

$(function(){
	
	var win = $(window);
	var docHeight 	= $(document).height();	

	var navHeight = 100;
	
	
	
	// INITIALIZE
	
	bgHeight();
	
	
	// RESIZE
	win.resize(function(){ 
	
		bgHeight();
	
	});
	
	
	
	
		
	win.scroll(function(){
	
		winTop = win.scrollTop();
		
		
		if (winTop <= 0 && winTop <= navHeight+200) {
			$('body').removeClass('middle bottom');
			$('body').addClass('top');
		}
		
		/*
		else if (winTop >= navHeight+100 && winTop <= navHeight+150) {
			$('body').removeClass();
			$('body').addClass('topMiddle');
		}
		*/
		
		else if (winTop >= navHeight+300 && winTop <= navHeight+350) {
			$('body').removeClass('top bottom');
			$('body').addClass('middle');
		}
		/*
		else if (winTop >= navHeight+300 && winTop <= navHeight+380) {
			$('body').removeClass();
			$('body').addClass('bottomMiddle');
		}
		*/
		
		else if (winTop >= navHeight+600) {
			$('body').removeClass('top middle');
			$('body').addClass('bottom');

		}
		

		
	});
	
	
	
    win.scroll(function () {
    
    	if ($('body').hasClass('bumped') && win.height() + win.scrollTop() >= $(document).height()) {}
    	
    	else if ($('body').hasClass('bumped') && win.height() + win.scrollTop() -20 <= $(document).height()) {
    		$('body').removeClass('bumped');
    	}
    
        else if (win.height() + win.scrollTop() >= $(document).height()) {
        	$('body').addClass('bumped');
        }
        
        
    });
	

	// FUNCTIONS
	
	
	
	
	function bgHeight() {
	
		$('.bg').css('height', docHeight);
	
	};




});