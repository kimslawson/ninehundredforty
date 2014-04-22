$('.dot').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
//  alert($(this).parent().attr('class'));
	$(this).parent().toggleClass('bigger');
	if($(this).css('background-image') == 'none') {
	//	var bkg = 'http://flickholdr.com/1000/1000/kids,family/' + $(this).parent().attr('id').replace('ordinal-','');
	//	var bkg = 'http://pixelholdr.com/kids,vacation/1000x1000/seed:' + $(this).parent().attr('id').replace('ordinal-','') + ',dimensions:hide';
		var bkg = 'http://lorempixel.com/1000/1000/people/' + $(this).parent().attr('id').replace('ordinal-','') % 10; // other placeholder services are dead as of 4/2014
	//	alert(bkg);
		$(this).css('background-image', 'url(' + bkg + ')');
	}
});

$('#add').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	$('#upload').toggleClass('visible');
});

$('#what').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	$('#description').toggle();
});

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}


$(document).ready(function() {
	var startDate = new Date();
	startDate.setFullYear(2005, 2, 12); /* month is zero-indexed but not day? weird. */
	var weekDate = new Date();
	weekDate = startDate;

	$('.dot-container').each(function(i){
		var num = (i%4) + 1;
		var ord = i + 1;
		$(this).addClass('class-' + num).attr('id','ordinal-' + ord);
		$(this).find('.dot').append('<span class="ordinal">' + ord + '</span>');
		$(this).append('<span class="date">' + dateToYMD(weekDate) + '</span>');
		weekDate = weekDate.addDays(7);
	});
});
