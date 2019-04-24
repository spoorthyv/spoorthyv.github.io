//= require jquery
//= require turbolinks

Turbolinks.start();
addEventListeners();

var isMain = "first";
var filterState = [false, false, false];

$(document).on('turbolinks:load', function () {
  index()
  lane();
  uber();
  ebay();
  photography();
  toggleNav();
  jupyter()
});

function index() {
  if($('.index').length > 0 ){
    var internLabel = $("<p></p>").text("Internship"); 
    internLabel.addClass("label");
    internLabel.addClass("internship");

    var projectLabel = $("<p></p>").text("Project"); 
    projectLabel.addClass("label");
    projectLabel.addClass("project");

    var miscLabel = $("<p></p>").text("Other"); 
    miscLabel.addClass("label");
    miscLabel.addClass("other");

    internLabel.prependTo("#jupyter, #zoomforth, #elliemae, #ebay");
    projectLabel.prependTo("#polyplanner, #lane, #fiveMinShower, #uber");
    miscLabel.prependTo("#photography, #dribbble");

    var filters = $(".filter");
    filters.click(function() {
      if(this == filters[0]) {
        filterState = [!filterState[0], false, false];
      } else if(this == filters[1]) {
        filterState = [false, !filterState[1], false];
      } else if(this == filters[2]) {
        filterState = [false, false, !filterState[2]];
      }
      console.log(filterState);
      if (filterState[0]){ 
        $(".card").has(".internship").show();
        $(".card").has(".project").hide();
        $(".card").has(".other").hide();
        $(filters[0]).addClass("filterSelected");
        $(filters[1]).removeClass("filterSelected");
        $(filters[2]).removeClass("filterSelected");
      } else if (filterState[1]){ 
        $(".card").has(".internship").hide();
        $(".card").has(".project").show();
        $(".card").has(".other").hide();
        $(filters[0]).removeClass("filterSelected");
        $(filters[1]).addClass("filterSelected");
        $(filters[2]).removeClass("filterSelected");
      } else if (filterState[2]){ 
        $(".card").has(".internship").hide();
        $(".card").has(".project").hide();
        $(".card").has(".other").show();
        $(filters[0]).removeClass("filterSelected");
        $(filters[1]).removeClass("filterSelected");
        $(filters[2]).addClass("filterSelected");
      } else {
        $(".card").has(".internship").show();
        $(".card").has(".project").show();
        $(".card").has(".other").show();
        $(filters[0]).removeClass("filterSelected");
        $(filters[1]).removeClass("filterSelected");
        $(filters[2]).removeClass("filterSelected");
      }
    });
  }
}

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
    var prot = $("video");
    for (var i = 0; i < prot.length; i++) {
      if (isElementPartiallyInViewportVertically(prot[i])) {
        prot[i].play();  
        console.log("play");
      } else {
        prot[i].pause();
        console.log("pause");
      }
    }
    $("#wrapper").scroll(function(){
      for (var i = 0; i < prot.length; i++) {
        if (isElementPartiallyInViewportVertically(prot[i])) {
          prot[i].play();  
          console.log("play2");
        } else {
          prot[i].pause();
          console.log("pause2");
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

function ebay() {
  if($('.ebay').length > 0 ){
    var prot = $("video");
    for (var i = 0; i < prot.length; i++) {
      if (isElementPartiallyInViewportVertically(prot[i])) {
        prot[i].play();  
        console.log("play");
      } else {
        prot[i].pause();
        console.log("pause");
      }
    }
    $("#wrapper").scroll(function(){
      for (var i = 0; i < prot.length; i++) {
        if (isElementPartiallyInViewportVertically(prot[i])) {
          prot[i].play();  
          console.log("play2");
        } else {
          prot[i].pause();
          console.log("pause2");
        }
      }
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

function photography() {
  if($('.photography').length > 0 ) {
    $("#wrapper").on( 'scroll', function(){
      var images = $("img");
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

  if (window.location.pathname == "/resume") {
    $("#contactLink").removeClass("active");
    $("#portfolioLink").removeClass("active");
    $("#resumeLink").addClass("active");
  } else if (window.location.pathname == "/contact") {
    $("#portfolioLink").removeClass("active");
    $("#resumeLink").removeClass("active");
    $("#contactLink").addClass("active");
  } else {
    $("#resumeLink").removeClass("active");
    $("#contactLink").removeClass("active");
    $("#portfolioLink").addClass("active");
  }
  if( !loadedMain ) {
    $('body').addClass("smallNav");
    $("a:first").addClass("active");
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
      wrapper.removeClass('fadeIn');
      wrapper.addClass('fadeOut');
    }, false);
  
    document.addEventListener("turbolinks:load", function(e) {
      var wrapper = $('#wrapper');
      wrapper.removeClass('fadeOut');
      wrapper.addClass('fadeIn');
    }, false);
  
    document.addEventListener("turbolinks:before-cache", function() {
      var wrapper = $('#wrapper');
      wrapper.removeClass('fadeOut');
      wrapper.addClass('fadeIn');
    }, false);
  }
}