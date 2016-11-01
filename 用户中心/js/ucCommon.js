
//悬浮下拉
$(".topRight").hover(function(){
	$(this).addClass("on");
	$(this).children("ul").fadeIn(200);
},function(){
	$(this).removeClass("on");
	$(this).children("ul").fadeOut(200);
});
//导航条服务下来
$(".serviceTit").hover(function(){
	$(this).toggleClass("on");
});
