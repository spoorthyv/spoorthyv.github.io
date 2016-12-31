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

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89545098-1', 'auto');
  ga('send', 'pageview');
