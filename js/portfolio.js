jQuery(function($){
   var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
   if (width < 960) {
     document.getElementById("currentLabel").innerHTML = "Current Projects";
   }
})
