/**
 * Galleria History Plugin 2016-09-03
 * http://galleria.io
 *
 * Copyright (c) 2010 - 2017 worse is better UG
 * Licensed under the MIT license
 * https://raw.github.com/worseisbetter/galleria/master/LICENSE
 *
 */
!function(n,t){Galleria.requires(1.25,"The History Plugin requires Galleria version 1.2.5 or later."),Galleria.History=function(){var e,i=[],a=!1,o=t.location,r=t.document,c=Galleria.IE,u="onhashchange"in t&&(r.mode===undefined||r.mode>7),s=function(n){return n=e&&!u&&Galleria.IE?n||e.location:o,parseInt(n.hash.substr(2),10)},h=s(o),l=[],f=function(){n.each(l,function(n,e){e.call(t,s())})},d=function(){n.each(i,function(n,t){t()}),a=!0},y=function(n){return"/"+n};return u&&c<8&&(u=!1),u?d():n(function(){t.setInterval(function(){var n=s();isNaN(n)||n==h||(h=n,o.hash=y(n),f())},50);c?n('<iframe tabindex="-1" title="empty">').hide().attr("src","about:blank").one("load",function(){e=this.contentWindow,d()}).insertAfter(r.body):d()}),{change:function(n){l.push(n),u&&(t.onhashchange=f)},set:function(n){isNaN(n)||(!u&&c&&this.ready(function(){var t=e.document;t.open(),t.close(),e.location.hash=y(n)}),o.hash=y(n))},ready:function(n){a?n():i.push(n)}}}()}(jQuery,this);