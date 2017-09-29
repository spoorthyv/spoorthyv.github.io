//= require jquery
//= require turbolinks

Turbolinks.start();

if ( 'querySelector' in document && 'addEventListener' in window ) {
  document.addEventListener("turbolinks:click", function(e) {
    var wrapper = $('#wrapper');
    wrapper.removeClass('fadeInDown');
    wrapper.addClass('fadeOutUp');
  }, false);

  document.addEventListener("turbolinks:load", function(e) {
    var wrapper = $('#wrapper');
    wrapper.removeClass('fadeOutUp');
    wrapper.addClass('fadeInDown');
  }, false);

  document.addEventListener("turbolinks:before-cache", function() {
    var wrapper = $('#wrapper');
    wrapper.removeClass('fadeOutUp');
    wrapper.addClass('fadeInDown');
  }, false);
}


jQuery(function($){
  if($('#photography').length > 0 ){
    window.addEventListener('scroll', function(){
      for (var i = 1; i < 7; i++) {
        if (isElementInViewport($("img:nth-child(" + i + ")"))) {
            $("*:nth-child(" + i + ")").addClass("currentPic");
            
        } else {
            $("*:nth-child(" + i + ")").removeClass("currentPic");
        }
      }
    });
  }
})

function isElementInViewport (el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top + 300 >= 0 &&
      rect.left >= 0 &&
      rect.bottom - 300<= (window.innerHeight || document.documentElement.clientHeight) && 
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
