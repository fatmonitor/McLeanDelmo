$(document).ready(function(){
    //stick in the fixed 100% height behind the navbar but don't wrap it
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
		// Avoid following the href location when clicking
		event.preventDefault(); 
		// Avoid having the menu to close when clicking
		event.stopPropagation(); 
		// Re-add .open to parent sub-menu item
		$(this).parent().addClass('open');
		$(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
	});
	
	var toggler = '.navbar-toggle';
    var pagewrapper = '.page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';

    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            right: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            right: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        });
		
		$("#slide-nav h1").stop().animate({
            right: selected ? '0px' : slidewidth
        });

        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');

        $('.page-content, .navbar, body, .navbar-header, #slide-nav h1').toggleClass('slide-active');

    });

    var selected = '#slidemenu, .page-content, body, .navbar, .navbar-header';

    $(window).on("resize", function () {
        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
			$(".page-content").css("right", "0");
        }
    });
	
}); 


