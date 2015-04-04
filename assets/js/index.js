var navigationFn = {
    goToSection: function(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top
        });
    }
}

$(document).ready(function(){
	setTimeout(function(){
		$('#android1').fadeIn();}, 400);
	setTimeout(function(){
		$('#row1').fadeIn();}, 500);
	setTimeout(function(){
		$('#android3').fadeIn();}, 600);
	setTimeout(function(){
		$('#android').show();}, 800);

	setTimeout(function(){
		$('#row2a').fadeIn();
		$("#row2a").height($("#row1").height());
	}, 1100);
	setTimeout(function(){
		$('#row2b').fadeIn();
		$("#row2b").height($("#row1").height());
	}, 1200);
	setTimeout(function(){
		$('#web').show();}, 1400);

	setTimeout(function(){
		$('#row3a').fadeIn();
		$("#row3a").height($("#row1").height());
	}, 1600);
	setTimeout(function(){
		$('#misc').show();}, 1800);

	setTimeout(function(){
		$('#footer').fadeIn();}, 1800);

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