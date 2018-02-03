jQuery(document).ready(function($){
  // ここにコードを記述
  $('.navbar a').click(function(){
    var navHight = 60;
    var id = $(this).attr('href')
    var position = $(id).offset().top-navHight;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });
  $('btn-success').click(function(){
    var navHight = 60;
    var id = $(this).attr('href')
    var position = $(id).offset().top-navHight;
    $('html,body').animate({
      'scrollTop':position
    },500);
  })
});
