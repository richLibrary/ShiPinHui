//首页焦点图
jQuery(".sphFocus").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click",interTime:5000});
jQuery(".sphFocus").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
//热门信息选项卡
jQuery(".hotInfo").slide({ titCell:".hotInfoTit a", mainCell:".hotInfoTxt",delayTime:0});
//物流线路列表鼠标悬浮效果
$(".wlTabTxt li").hover(function(){
	$(this).toggleClass("on");
});
//物流线路选项卡
jQuery(".wlService").slide({ titCell:".wlTabTit li", mainCell:".wlTabTxt",delayTime:0,trigger:"click"});
// *鼠标移过，左右按钮显示*/
jQuery(".encyFocus").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
/*SuperSlide图片切换*/
jQuery(".encyFocus").slide({ mainCell:".encyFocusImg",titCell:".encyFocusTit li",effect:"fold", autoPlay:true, delayTime:600, trigger:"click",interTime:5000});
//首页延迟加载
$(function() {
	$("img").delayLoading({
		defaultImg: "",
		errorImg: "",
		imgSrcAttr: "src",
		setImg: "originalSrc",
		beforehand: 0,
		event: "scroll",
		duration: "slow",
		container: window,
		success: function(imgObj) {},
		error: function(imgObj) {}
	})
});