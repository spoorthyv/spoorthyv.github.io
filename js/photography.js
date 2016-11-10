

jQuery(function($){
    window.addEventListener('scroll', function(){
        switchSidebar();
        test();
    });
})

function test() {
    for (var i = 1; i < 7; i++) {
        if (isElementInViewport($("img:nth-child(" + i + ")"))) {
            $("img:nth-child(" + i + ")").addClass("currentPic");
        } else {
            $("img:nth-child(" + i + ")").removeClass("currentPic");
        }
    }
}

function isElementInViewport (el) {

    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top + 100>= 0 &&
        rect.left >= 0 &&
        rect.bottom - 100<= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function switchSidebar() {
  var distanceY = $(window).scrollTop(),
      shrinkOn = $("#1").offset().top - 200,
      videos = $("#videos"),
      photos = $("#photos");
  if (distanceY > shrinkOn && $(window).width() > 480) {
      photos.removeClass("currentLabel");
      videos.addClass("currentLabel");
  } else {
      if (videos.hasClass("currentLabel")) {
        videos.removeClass("currentLabel");
        photos.addClass("currentLabel");
      }
  }
}

$("#videos").click(
    function() {
        $('html,body').animate({scrollTop: $("#1").offset().top - 150}, 'slow');
    }
);
$("#photos").click(
    function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    }
);

$(window).resize(function() {
  $("iframe").each(function() {
    var yes = $(this);
    yes.height(yes.width() * 0.5625);
  });
}).resize();
