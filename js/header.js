jQuery(function($){
   $( '.menu-btn' ).click(function(){
     $('.mobile-menu').toggleClass('expand');
   })
})

jQuery(function($){
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = $(".header");
        if (distanceY > shrinkOn && $(window).width() > 480) {
            header.addClass("scroll");
        } else {
            if (header.hasClass("scroll")) {
              header.removeClass("scroll")
            }
        }
    });
})
