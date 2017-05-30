console.log($);

$('#footer').html('<h1>Footer immediate content (jquery global)</h1>');
console.log('jQuery.ui');
console.log($.ui);

$("body").addClass( "bodyred", 1000, () => {
	// $('#footer').append('<h1>Body color changed</h1>');
	$( "#dialog" ).dialog();
} );