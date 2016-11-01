//购物车js
//地址列表默认样式
$(".addressList ul li").hover(function(){
		$(this).children("span").toggleClass("hover")
})
//设为默认地址
$(".setDefault").click(function(){
	$(this).parents("li").addClass("selected")
	$(this).parents("li").siblings().removeClass("selected")
})
//删除收获地址
$(".delAdd").click(function(){
	$(this).parents("li").remove();
})
//展开收起地址
$(".showAddList").click(function(){
	$(this).toggleClass("up")
	$(this).siblings("ul").toggleClass("up")
	var showText=$(".showAddList").text();
	if(showText=="更多收货地址"){
		$(this).html("收起收货地址")
	}
	else{
		$(this).html("更多收货地址")
	}
})
//支付方式选择
$(".payWay ul li").click(function(){
	$(this).addClass("selected");
	$(this).siblings().removeClass("selected");
})	
//编辑地址弹窗
$('.addAddress').click(function(){
	dialog({
		 content:document.getElementById('editAddress'),
		 title:"新增地址",
		 ok: function () {
			 this.close();
			 return false;
			 },
		 cancel: function () {
			 this.close();
			 return false;
			 },
	}).showModal();
	//隐藏的弹窗显示
	$('#editAddress').css('display','block');
});
	
	