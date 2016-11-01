$(document).ready(function(){
							
	$("#brandContent dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".selResult").append(copyThisA.attr("id", "selectA"));
			}
		}
	});	
	$("#ficatContent dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".selResult").append(copyThisB.attr("id", "selectB"));
			}
		}
	});
	$("#huopinContent dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".selResult").append(copyThisA.attr("id", "selectC"));
			}
		}
	});	
	$("#cityContent dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectD").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectD").length > 0) {
				$("#selectD a").html($(this).text());
			} else {
				$(".selResult").append(copyThisB.attr("id", "selectD"));
			}
		}
	});	
	
	$("#selectA").live("click", function () {
		$(this).remove();
		$("#brandContent .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectB").live("click", function () {
		$(this).remove();
		$("#ficatContent .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function () {
		$(this).remove();
		$("#huopinContent .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$("#selectD").live("click", function () {
		$(this).remove();
		$("#cityContent .select-all").addClass("selected").siblings().removeClass("selected");
	});
	$(".breadcrumb dd").live("click", function () {
		if ($(".selResult dd").length > 1) {
			$(".selectNo").hide();
		} else {
			$(".selectNo").show();
		}
	});
	
});