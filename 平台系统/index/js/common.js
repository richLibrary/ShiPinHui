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
//右边侧边栏和楼层导航位置
$(function(){
	var WinHeight = $(window).height();
	var middle = (WinHeight-252)/2;
	var WinWidth = $(window).width();
	var marginLeft = (WinWidth-1200)/2-80;
	//右侧侧边栏位置
	$(".fastFirst").css({"margin-top":middle+"px"})
	//楼层导航
	$(".floorNav").onePageNav({currentClass:'on'})
	//楼层导航位置
	$(".floorNav").css({"top":middle+"px","left":marginLeft+"px"})

	//页面滚动，楼层导航出现、隐藏
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$(".floorNav").fadeIn();
		} else {
			$(".floorNav").fadeOut();
		}
	});
})