$(document).ready(function(){
//左侧点击展开
$(".entryNav ul li h3").click(function(){
	$(this).parent().toggleClass("cur")
	$(this).parent().siblings().removeClass("cur")
});
//删除左侧目录
$(".delMenu").click(function(){
	$(this).parent("a").remove()
});
//删除已选图片
$(".canleImg").click(function(){
	$(this).parents("dl").remove()
});
//删除已建相册
$(".modityDel").click(function(){
	$(this).parents("li").remove()
});
//参考资料删除
$(".photoDel").click(function(){
	$(this).parents("li").remove()
});
//点击删除正文内容
$(".envDelete").click(function(){
	$(this).parents(".envConment").remove()
});
//增加基本信息栏列表
$(".addInfor").on("click",function(){
$(".inforContent").append('<li><input class="inforTitle" type="text" placeholder="书名"/><input class="inforText" type="text" placeholder="书名"/></li>');
});
//左侧词条弹出窗口
$('.editorMenu').click(function(){
     dialog({
         content:document.getElementById('entryEditor'),
		 ok: function (){
			 this.close();
			 return false;
			 },
		 cancel: function () {
			 this.close();
			 return false;
			 },
		 width:370,
		 height:224,
		 fixed:false,
     }).showModal();
	 //让隐藏的样式显示
	 $('#entryEditor').css('display','block');
});
//左侧目录弹出窗口
$('.addMenu').click(function(){
     dialog({
         content:document.getElementById('dirEditor'),
		 ok: function () {
			 this.close();
			 return false;
			 },
		 cancel: function () {
			 this.close();
			 return false;
			 },
		 width:370,
		 height:224,
		 fixed:false,
     }).showModal();
	 //让隐藏的样式显示
	 $('#dirEditor').css('display','block');
});
//右侧添加参考资料弹出窗口
$('.addResources').click(function(){
     dialog({
         content:document.getElementById('addEditor'),
		 ok: function () {
			 this.close();
			 return false;
			 },
		 cancel: function () {
			 this.close();
			 return false;
			 },
		 width:540,
		 height:415,
		 fixed:false,
     }).showModal();
	 //让隐藏的样式显示
	 $('#addEditor').css('display','block');
});
//右侧编辑参考资料弹出窗口
$('.Editor').click(function(){
     dialog({
         content:document.getElementById('resEditor'),
		 ok: function () {
			 this.close();
			 return false;
			 },
		 cancel: function () {
			 this.close();
			 return false;
			 },
		 width:540,
		 height:415,
		 fixed:false,
     }).showModal();
	 //让隐藏的样式显示
	 $('#resEditor').css('display','block');
});
//右侧插入相册弹出窗口
$('.envPhotos,.fileImg').click(function(){
     dialog({
         content:document.getElementById('insertPhotos'),
		 ok: function () {
			 this.close();
			 return false;
			 },
		 cancel: function () {
			 this.close();
			 return false;
			 },
		 width:780,
		 height:590,
		 fixed:false,
     }).showModal();
	 //让隐藏的样式显示
	 $('#insertPhotos').css('display','block');
});
//右侧新建相册弹出窗口
$('.creatPhotos,.photoMan').click(function(){
     dialog({
         content:document.getElementById('editorPhotos'),
		 ok: function () {
			 this.close();
			 return false;
			 },
		 cancel: function () {
			 this.close();
			 return false;
			 },
		 width:780,
		 height:590,
		 fixed:false,
     }).showModal();
	 //让隐藏的样式显示
	 $('#editorPhotos').css('display','block');
});
})