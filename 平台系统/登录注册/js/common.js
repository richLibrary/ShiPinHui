//公用搜索tab切换
$(".searchTab li").click(function(){
	$(this).addClass("on");
	$(this).siblings().removeClass("on");
});
//悬浮下拉
$(".topRight").hover(function(){
	$(this).addClass("on");
	$(this).children("ul").fadeIn(200);
},function(){
	$(this).removeClass("on");
	$(this).children("ul").fadeOut(200);
});
//关闭二维码
$(".qrCode i").click(function(){
	$(this).parent().hide();
});
//分类导航菜单
$(".categoryMenu ul li").hover(function(){
	$(this).toggleClass("on")
})
