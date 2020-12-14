$('.page-scroll a').on('click', function(e){
  var hrefA = $(this).attr('href');
  $('body').animate({
  scrollTop: $(hrefA).offset().top -50
  }, 400, 'swing');
});

$('document').on('click',function(){
	$('.isiprofil').
})