setTimeout(function() {
	$('#horse').clone().attr('id', 'finitehorse').appendTo('body');
	$('#horse').remove();
	$('.jscroll-inner .jscroll-added').last().find('#segment').html("	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       | | | |             || |  \n\
	       |_| |_|             ||_|  ");
}, 500);