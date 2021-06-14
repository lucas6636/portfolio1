
$('.js-modal-open').on('click', function(){
  var target = $(this).data('target');
  var modal = document.getElementById(target);
  scrollPosition = $(window).scrollTop();

  $('body').addClass('fixed').css({'top': -scrollPosition});
  $(modal).fadeIn();
  return false;
});

$('.js-modal-close').on('click', function(){
  $('body').removeClass('fixed');
  window.scrollTo( 0 , scrollPosition );
  $('.js-modal').fadeOut();
  return false;
});

$(function(){
  $("#typing").t()
});

$(window).on('load',function(){
  $(".loader-wrap").delay(1500).fadeOut('slow');
  $(".loader-wrap").delay(1200).fadeOut('slow');
});