$(document).ready(function(){

	$(".dropdown-trigger").dropdown();

    $('.sidenav').sidenav();

    $('.slider').slider({
    	indicators : false,
    	durations : 1500,
    	interval : 2500
    });
          
    $('.modal').modal();

    $('.collapsible').collapsible();
});