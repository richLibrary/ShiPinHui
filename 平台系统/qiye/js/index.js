//��ҳ����ͼ
jQuery(".sphFocus").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click",interTime:5000});
jQuery(".sphFocus").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ jQuery(this).find(".prev,.next").fadeOut() });

// ʳƷ���Ƽ�
$(document).ready(function(){
	var ywfa = $('.sphtj .tjNav >ul >li');
    ywfa.click(function(){
          
            $(this).addClass('tjOn').siblings().removeClass('tjOn');
      
            $('.sphtj .tjList >ul >li').eq(ywfa.index(this)).show().siblings().hide();
                  
            });
});

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

