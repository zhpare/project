$(function(){
	$("#App").hover(function(){
		$("#divimg").show();
		$("#divimg1").hide();
	});
	$("#App").mouseout(function(){
		$("#divimg").hide();
		$("#divimg1").hide();
	});
	$("#shouchang").hover(function(){
		$("#divimg1").show();
		$("#divimg").hide();
	});
	$("#shouchang").mouseout(function(){
		$("#divimg").hide();
		$("#divimg1").hide();
	});
	/*网底js*/
	var i = $("#button_list ul li").index();
	$(".list_frist").css({"font-size":"17px","font-weight":"bold","margin-bottom":"17px"});
	$(".dibu1").hover(function(){
		$("#img_disNone").show();
		$("#img_disNone img").attr("src","img/底部图标/dibu.jpg");
	});
	$(".dibu1").mouseout(function(){
		$("#img_disNone").hide();
	});
	$(".dibu3").hover(function(){
		$("#img_disNone").show();
		$("#img_disNone img").attr("src","img/底部图标/dibu1.jpg");
	});
	$(".dibu3").mouseout(function(){
		$("#img_disNone").hide();
	});
});
