jQuery(document).ready(function() {
  
	var btn = $('#return-top');
  
	$(window).scroll(function() {
	  if ($(window).scrollTop() > 200) {
		btn.addClass('show');
	  } else {
		btn.removeClass('show');
	  }
	});
  
	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});
  
  });