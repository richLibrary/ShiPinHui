//��ҳ����ͼ
jQuery(".sphFocus").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click",interTime:5000});
jQuery(".sphFocus").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
//������Ϣѡ�
jQuery(".hotInfo").slide({ titCell:".hotInfoTit a", mainCell:".hotInfoTxt",delayTime:0});
//������·�б��������Ч��
$(".wlTabTxt li").hover(function(){
	$(this).toggleClass("on");
});
//������·ѡ�
jQuery(".wlService").slide({ titCell:".wlTabTit li", mainCell:".wlTabTxt",delayTime:0,trigger:"click"});
// *����ƹ������Ұ�ť��ʾ*/
jQuery(".encyFocus").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
/*SuperSlideͼƬ�л�*/
jQuery(".encyFocus").slide({ mainCell:".encyFocusImg",titCell:".encyFocusTit li",effect:"fold", autoPlay:true, delayTime:600, trigger:"click",interTime:5000});
//��ҳ�ӳټ���
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