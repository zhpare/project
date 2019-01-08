$(function(){
	var i = $("#button_list ul li").index();
	$(".list_frist").css({"font-size":"17px","font-weight":"bold","margin-bottom":"17px"});
	$("#button_list ul li").click(function(){
		var n = $(this).index();
		$(".list_button").eq(n).attr("id","tab_change").siblings().removeAttr("id");
		$(".box").eq(n).show().siblings(".box").hide();
		if(n==2){
			$(".button_red").css({"background-color":"white","border":"1px solid #ccc","color":"#ccc"});
			$(".button_white").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
		}else if(n==1){
			$(".button_red").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
			$(".button_white").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
		}else if(n==0){
			$(".button_white").css({"background-color":"white","border":"1px solid #ccc","color":"#ccc"});
			$(".button_red").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
		}
	});
	$(".button_white").click(function(){
		if(i>0){
			i--;
			$(".list_button").eq(i).attr("id","tab_change").siblings().removeAttr("id");
			$(".box").eq(i).show().siblings(".box").hide();
			if(i==2){
				$(".button_red").css({"background-color":"white","border":"1px solid #ccc","color":"#ccc"});
				$(".button_white").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
			}else if(i==1){
				$(".button_red").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
				$(".button_white").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
			}else if(i==0){
				$(".button_white").css({"background-color":"white","border":"1px solid #ccc","color":"#ccc"});
				$(".button_red").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
			}
		}
			
	});
	$(".button_red").click(function(){
		if(i<3){
			i++;
			$(".list_button").eq(i).attr("id","tab_change").siblings().removeAttr("id");
			$(".box").eq(i).show().siblings(".box").hide();
			if(i==2){
				$(".button_red").css({"background-color":"white","border":"1px solid #ccc","color":"#ccc"});
				$(".button_white").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
			}else if(i==1){
				$(".button_red").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
				$(".button_white").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
			}else if(i==0){
				$(".button_white").css({"background-color":"white","border":"1px solid #ccc","color":"#ccc"});
				$(".button_red").css({"background-color":"#d9326a","border":"0px solid ","color":"white"});
			}
		}
	});
	/*网底js*/
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
	/*页面滚动到130px时显示nav导航栏*/
	 $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 330) {
                    if (!$("#nav").is(":visible")) {
                        try {
                            $("#nav").slideDown();
                        } catch (e) {
                        	$("#nav_bar").css("background-color","transparent");
                            $("#nav").show();
                        }                      
                    }
                }
                else {
                    if ($("#nav").is(":visible")) {
                        try {
                            $("#nav").slideUp();
                        } catch (e) {
                        	$("#nav_bar").css("background-color","transparent");
                            $("#nav").hide();
                        }                       
                    }
                } 
            });
})
