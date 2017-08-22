//= require jquery
//= require turbolinks

Turbolinks.start();

if ( 'querySelector' in document && 'addEventListener' in window ) {


   
  // if (document.documentElement.hasAttribute("data-turbolinks-preview")) {
  //   var wrapper = document.getElementById('wrapper');
  //   removeClass(wrapper, 'fadeInDown');
  //   addClass(wrapper, 'fadeOutUp');
  // }

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


