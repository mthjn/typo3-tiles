$(document).ready(function(){
	// Load the BG urls
  var bgs = [];
	var images = $('#bgarray').find('img').map(function(){
	    return $(this).attr('src')
	 }).get()
	for (var i = 0; i < images.length; i++) {
		var css = "url(\'" + images[i] + "\')";
		bgs.push( css );
	 }
	$('#plus').click(function( ){
	 $('#fliesen').fadeToggle("fast");
		$('#plusminus').toggleClass("shift");
		 $('#slimpanel').toggleClass("shiftslim");
		  $('#content').toggleClass("bgtoggle");
	 });
  // do the deed onclick
	$('.select_item').click(function( ){
		var ditem = $(this).attr('data-item');
		  $('.content_item').hide("slow").filter( '[data-item="'+ditem+'"]' ).show("slow");
    var selected = $('.select_item' ).hasClass( "activeitem" );
     if ( selected !== false && selected !== $(this) ) {
		  $( '.activeitem' ).removeClass( "activeitem" );
	 }
  $(this).addClass( "activeitem" );
  // BG swap
		var bgimage;
		switch( ditem ) {
			case "p1":
				bgimage = bgs[0];
				break;
			case "p2":
				bgimage = bgs[1];
				break;
			case "p3":
				bgimage = bgs[2];
				break;
			case "p4":
				bgimage = bgs[3];
				break;
			case "p5":
				bgimage = bgs[4];
				break;
			case "p6":
				bgimage = bgs[5];
				break;
		}
	$('#content').css({"background-image" : bgimage});
			 return false;
	 });
});
