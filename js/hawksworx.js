var hx={};hx.posts=null,hx.loadSearchData=function(){$.getJSON("/search.json",function(s){hx.posts=s.posts;for(var e=hx.posts.length-1;e>=0;e--)hx.posts[e].ref=hx.posts[e].title.toLowerCase()+" "+hx.posts[e].words.toLowerCase()})},hx.search=function(s){var e,h=[];if(hx.clearResults(),s.length){for(e=hx.posts.length-1;e>=0;e--)-1!==hx.posts[e].ref.indexOf(s)&&h.push(hx.posts[e]);for($(".search-results").show(),e=h.length-1;e>=0;e--)$(".search-results ul").append("<li><time>"+h[e].date+"</time><a href='"+h[e].url+"'>"+h[e].title+"</a></li>")}},hx.hideSearch=function(){hx.clearResults(),$("#searchform").hide(),$("li.search a").show()},hx.clearResults=function(){$(".search-results ul").empty(),$(".search-results").hide()},hx.addEventHandlers=function(){$("#searchstr").keyup(function(s){if(27===s.which)hx.hideSearch();else{var e=$(this).val().trim();hx.search(e)}}),$("li.search a").click(function(s){return s.preventDefault(),hx.loadSearchData(),hx.clearResults(),$("#searchform").css({display:"inline-block"}),$("li.search a").hide(),$("#searchstr").val(""),$("#searchstr").focus(),!1})},$(function(){hx.addEventHandlers()});