var navigationFn = {
    goToSection: function(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top
        });
    }
}

$(document).ready(function(){
	setTimeout(function(){
		$('#main').fadeIn();}, 600);

	setTimeout(function(){
		$('#android1').fadeIn();}, 1200);
	setTimeout(function(){
		$('#row1').fadeIn();}, 1300);
	setTimeout(function(){
		$('#android3').fadeIn();}, 1400);
	setTimeout(function(){
		$('#android').show();}, 1600);

	setTimeout(function(){
		$('#row2a').fadeIn();
		$("#row2a").height($("#row1").height());
	}, 1900);
	setTimeout(function(){
		$('#row2b').fadeIn();
		$("#row2b").height($("#row1").height());
	}, 2000);
	setTimeout(function(){
		$('#web').show();}, 2200);

	setTimeout(function(){
		$('#row3a').fadeIn();
		$("#row3a").height($("#row1").height());
	}, 2500);
	setTimeout(function(){
		$('#misc').show();}, 2700);

	setTimeout(function(){
		$('#footer').show();}, 2700);

	$("#hri").click(function(){
		navigationFn.goToSection('#row2');
	});
	$("#rca").click(function(){
		navigationFn.goToSection('#row2');
	});
	$("#undergrad").click(function(){
		navigationFn.goToSection('#row3');
	});
});