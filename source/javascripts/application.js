//= require jquery
//= require turbolinks

Turbolinks.start();

if ( 'querySelector' in document && 'addEventListener' in window ) {
  document.addEventListener("turbolinks:click", function(e) {
    var wrapper = $('#wrapper');
    wrapper.removeClass('fadeInDown');
    wrapper.addClass('fadeOutUp');

    var navbar = $('.navbar');
    navbar.removeClass('fadeInDown');
    navbar.addClass('fadeOutUp');
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


$(document).on('turbolinks:load', function () {
  if($('.lane').length > 0 ){
    $('.horizGallery img').on('click', function(e) {
      console.log("image");
      $target = $(e.target);
      $target.parent().parent().addClass('fullScreen');
      e.preventDefault();
    });
    $('.close').on('click', function(e) {
      $('.horizGallery').removeClass("fullScreen"); //you can list several class names 
      e.preventDefault();
    });
  }
  if($('.photography').length > 0 ) {
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

  if( !(($('.index').length > 0) || ($('.contact').length > 0) || ($('.resume').length > 0)) ) {
    console.log("add small");
    $('body').addClass("smallNav");
  } else {
    console.log("remove small");
    $('body').removeClass("smallNav");
  }
});


function isElementInViewport (el) {
  console.log("isElement");
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
