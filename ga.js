var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-xxxxxxx-xx"]);_gaq.push(["_trackPageview"]);(function(){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();var _ga=_ga||{};var _gaq=_gaq||[];_ga.getSocialActionTrackers_=function(e,t,n,r){return function(){var i=_gat._getTrackers();for(var s=0,o;o=i[s];s++){o._trackSocial(e,t,n,r)}}};_ga.trackFacebook=function(e){try{if(FB&&FB.Event&&FB.Event.subscribe){FB.Event.subscribe("edge.create",function(t){_gaq.push(_ga.getSocialActionTrackers_("facebook","like",t,e))});FB.Event.subscribe("edge.remove",function(t){_gaq.push(_ga.getSocialActionTrackers_("facebook","unlike",t,e))});FB.Event.subscribe("message.send",function(t){_gaq.push(_ga.getSocialActionTrackers_("facebook","send",t,e))})}}catch(t){}};_ga.trackTwitterHandler_=function(e,t){var n;if(e&&e.type=="tweet"||e.type=="click"){if(e.target.nodeName=="IFRAME"){n=_ga.extractParamFromUri_(e.target.src,"url")}var r=e.type+(e.type=="click"?"-"+e.region:"");_gaq.push(_ga.getSocialActionTrackers_("twitter",r,n,t))}};_ga.trackTwitter=function(e){intent_handler=function(t){_ga.trackTwitterHandler_(t,e)};twttr.events.bind("click",intent_handler);twttr.events.bind("tweet",intent_handler)};_ga.extractParamFromUri_=function(e,t){if(!e){return}var n=new RegExp("[\\?&#]"+t+"=([^&#]*)");var r=n.exec(e);if(r!=null){return unescape(r[1])}return}