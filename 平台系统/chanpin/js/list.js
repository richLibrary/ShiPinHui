// 筛选条件
$(document).ready(function() {
	$(".sxList >ul >li").click(function(){
		$(".sxList >ul >li").removeClass('sxListOn');
		$(this).addClass('sxListOn');
	});
	$(".searchAreaSj li").click(function(){
		$(".searchAreaSj li").removeClass('gouxuanOn');
		$(this).addClass('gouxuanOn');
	});
});
