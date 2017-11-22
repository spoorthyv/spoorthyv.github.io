/**
 * Galleria Classic Theme 2017-02-13
 * http://galleria.io
 *
 * Copyright (c) 2010 - 2017 worse is better UG
 * Licensed under the MIT license
 * https://raw.github.com/worseisbetter/galleria/master/LICENSE
 *
 */
!function(i){Galleria.addTheme({name:"classic",version:1.5,author:"Galleria",css:"galleria.classic.css",defaults:{transition:"slide",thumbCrop:"height",_toggleInfo:!0},init:function(t){Galleria.requires(1.4,"This version of Classic theme requires Galleria 1.4 or later"),this.addElement("info-link","info-close"),this.append({info:["info-link","info-close"]});var e=this.$("info-link,info-close,info-text"),s=Galleria.TOUCH;this.$("loader,counter").show().css("opacity",.4),s||(this.addIdleState(this.get("image-nav-left"),{left:-50}),this.addIdleState(this.get("image-nav-right"),{right:-50}),this.addIdleState(this.get("counter"),{opacity:0})),!0===t._toggleInfo?e.bind("click:fast",function(){e.toggle()}):(e.show(),this.$("info-link, info-close").hide()),this.bind("thumbnail",function(t){s?i(t.thumbTarget).css("opacity",this.getIndex()?1:.6).bind("click:fast",function(){i(this).css("opacity",1).parent().siblings().children().css("opacity",.6)}):(i(t.thumbTarget).css("opacity",.6).parent().hover(function(){i(this).not(".active").children().stop().fadeTo(100,1)},function(){i(this).not(".active").children().stop().fadeTo(400,.6)}),t.index===this.getIndex()&&i(t.thumbTarget).css("opacity",1))});var n=function(t){i(t.thumbTarget).css("opacity",1).parent().siblings().children().css("opacity",.6)};this.bind("loadstart",function(i){i.cached||this.$("loader").show().fadeTo(200,.4),window.setTimeout(function(){n(i)},s?300:0),this.$("info").toggle(this.hasInfo())}),this.bind("loadfinish",function(){this.$("loader").fadeOut(200)})}})}(jQuery);