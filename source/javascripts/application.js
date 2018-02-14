//= require jquery
//= require turbolinks

Turbolinks.start();

var isMain = "first";
addEventListeners();

$(document).on('turbolinks:load', function () {
  index()
  lane();
  uber();
  photography();
  toggleNav();
  jupyter()
});


function lane() {
  if($('.lane').length > 0 ){
    $('.horizGallery img').on('click', function(e) {
      console.log("image");
      $target = $(e.target);
      $target.parent().parent().addClass('fullScreen');
      e.preventDefault();
    });
    $('.close').on('click', function(e) {
      $('.horizGallery').removeClass("fullScreen");
      e.preventDefault();
    });
  }
}

function uber() {
  if($('.uber').length > 0 ){
    var prot = $(".video");
    for (var i = 0; i < prot.length; i++) {
      if (isElementPartiallyInViewportVertically(prot[i])) {
        prot[i].play();  
      } else {
        prot[i].pause();
      }
    }
    $("#wrapper").scroll(function(){
      for (var i = 0; i < prot.length; i++) {
        if (isElementPartiallyInViewportVertically(prot[i])) {
          prot[i].play();  
        } else {
          prot[i].pause();
        }
      }
    });

    $('.horizGallery img').on('click', function(e) {
      console.log("image");
      $target = $(e.target);
      $target.parent().parent().addClass('fullScreen');
      e.preventDefault();
    });

    $('.close').on('click', function(e) {
      $('.horizGallery').removeClass("fullScreen");
      e.preventDefault();
    });

  }
}

function jupyter() {
  if($('.jupyter').length > 0 ){
    $('.horizGallery img').on('click', function(e) {
      console.log("image");
      $target = $(e.target);
      $target.parent().parent().addClass('fullScreen');
      e.preventDefault();
    });

    $('.close').on('click', function(e) {
      $('.horizGallery').removeClass("fullScreen");
      e.preventDefault();
    });
  }
}

function index() {
  if($('.index').length > 0 ){
    var internLabel = $("<p></p>").text("Internship"); 
    internLabel.addClass("label");
    internLabel.addClass("internship");

    var projectLabel = $("<p></p>").text("Project"); 
    projectLabel.addClass("label");
    projectLabel.addClass("project");

    var miscLabel = $("<p></p>").text("Misc"); 
    miscLabel.addClass("label");
    miscLabel.addClass("misc");

    internLabel.prependTo("#jupyter, #zoomforth, #elliemae");
    projectLabel.prependTo("#polyplanner, #lane, #fiveMinShower, #uber, #dribbble");
    miscLabel.prependTo("#photography");
  }
}

function photography() {
  if($('.photography').length > 0 ) {
    window.addEventListener('scroll', function(){
      var images = $("img");
      console.log();
      for (var i = 0; i < images.length; i++) {
        if (photoIsInViewport(images[i])) {
          $(images[i]).addClass("currentPic");    
        } else {
          $(images[i]).removeClass("currentPic");
        }
      }
    });
  }
}

function toggleNav() {
  var loadedMain = (($('.index').length > 0) || ($('.contact').length > 0) || ($('.resume').length > 0));

  if( !loadedMain ) {
    $('body').addClass("smallNav");
  } else {
    $('body').removeClass("smallNav");
  }

  if (isMain == "first") {
    if( !loadedMain ) {
      $('#navbar').addClass("shrinkNav");
      isMain = false;
    } else {
      isMain = true;
    }
  } else if (isMain) {
    if( !loadedMain ) {
      $('#navbar').removeClass("expandNav");
      $('#navbar').addClass("shrinkNav");
      isMain = false;
    } else {
      $('#navbar').removeClass("expandNav");
      isMain = true;
    }
  } else {
    if( loadedMain ) {
      $('#navbar').removeClass("shrinkNav");
      $('#navbar').addClass("expandNav");
      isMain = true;
    } else {
      isMain = false;
    }
  }
}

function photoIsInViewport(el) {
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
function isElementPartiallyInViewportVertically(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();
  return !((rect.bottom < 0) || (rect.top > window.innerHeight));
}

function addEventListeners() {
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
}