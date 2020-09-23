$(window).on('load',function(){
  $(".js-bg").each(function () {
      $(this).css('background-image', 'url(' + $(this).data("preload") + ')');
  });
  $(".js-img").each(function () {
      $(this).attr('src', $(this).data("src"));
  });

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
        
	} else{
		$('body').addClass('web');
        
	};  
	
  setTimeout(function(){
    $('body').removeClass('loaded'); 
  },700)
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */


$(function(){
	/* placeholder*/	   
	$('.form-control').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});  
	/* placeholder*/ 

  /*$(".header .js-img").each(function () {
      $(this).attr('src', $(this).data("src"));
  });*/

  $("#btnSubmit").click(function(event) {
      // Fetch form to apply custom Bootstrap validation
      var form = $("#feedbackForm")
      if (form[0].checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.addClass('was-validated');
      // Perform ajax submit here...
  });
});
//


document.addEventListener('DOMContentLoaded', function () {
  
});

var handler = function(){
	  
  var height_footer = $('.footer').height();	
  var height_header = $('.header').height();		

  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;


  if (viewport_wid <= 991) {
    
  }
  else if (viewport_wid > 991) {
    
  }

  function showDiv() {
    if ( $(window).scrollTop() > 0 && $('.header').data('positioned') == 'false') {
      $(".header").data('positioned', 'true');
      $(".header").addClass('fix');
    }else if ( $(window).scrollTop() <= 0 && $('.header').data('positioned') == 'true') {
      $(".header").fadeIn(0, function() {
        $(".header").removeClass('fix');
      }).data('positioned', 'false');
    }
  }
  $(window).scroll(showDiv);
  $('.header').data('positioned', 'false');
  
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
