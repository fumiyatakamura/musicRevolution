$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(function(){
  $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      var windowH = $(window).height();
      var position = scroll+70;

      $('#record').css('background-position','center '+ position +'px');
      $('#boombox').css('background-position','center '+(position-windowH)+'px');
      $('#cassette').css('background-position','center '+ (position-2*windowH) +'px');
      $('#cd').css('background-position','center '+ (position-3*windowH) +'px');
      $('#mp3').css('background-position','center '+ (position-4*windowH) +'px');
      $('#sp').css('background-position','center '+ (position-5*windowH) +'px');

  });
});