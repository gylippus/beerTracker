

var drinks = 0;

$(".icon-beer").click(function () {
  if ($(this).hasClass('clickedOn')){
  	drinks--;
  	localStorage.setItem("state", drinks);
  	$(this).removeClass("clickedOn");
  }
  else{
  	drinks++;
  	localStorage.setItem("state", drinks);
  	$(this).addClass("clickedOn");
  }

});
$(".btn-danger").click(function () {
  $(".icon-beer").removeClass("clickedOn");
  localStorage.setItem("state", 0);
  drinks = 0;
});
if ( Modernizr.touch == false ) {
    $(".icon-beer").hover(function() {
  $(this).addClass('hovered');
   }, 
   function() {
   $(this).removeClass('hovered'); 
   })
}

   
function init(){
	if (localStorage.getItem("state") == null){
		localStorage.setItem("state", 0);
	}
	else{
		drinks = localStorage.getItem("state");
		drinks = parseInt(drinks);
		var i = 0;
		$( ".icon-beer" ).each(function(){
    			if (i == drinks){
    				return false;
    			}
    			$(this).addClass( "clickedOn" );
    			i++;
  			});
  			
		}
	}