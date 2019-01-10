

window.onload=function(){
	
	$(function(){
		var timer = setInterval(autoPlay,3000);
		var index = 0;
		function autoPlay(){
			if(index == $("#ul_banner li").size()-1){
				$("#ul_banner").css("left",0)
				index=1;
			}else{
				index++;
			}
			removeSib();
			olLi[index == olLi.length ? 0 : index].className="active";
			$("#ul_banner").animate({
				left:-index*1554
			})
		}
		//移入图片中停止轮播
		$("#banner").hover(function(){
			clearInterval(timer)
		},function(){
			timer = setInterval(autoPlay,3000);
		});
		
		//移入小圆点图片跳转对应图片
		$(".slick_dots li").on("mouseover",function(){
			clearInterval(timer)
			index = $(this).index()
			removeSib();
			olLi[index == olLi.length ? 0 : index].className="active";
			console.log(index)
			$("#ul_banner").animate({
				left:-index*1554
			})
		})
		//点击左右轮播
		
		$(".btn_left").click(function(){
			if(index == 5){
				$("#ul_banner").animate({
				left:0
				});
				index =1;
			}
			if(index == 0){
				index=0;
			}else{
				index--;
			}
			removeSib();
			olLi[index == olLi.length ? 0 : index].className="active";
			$("#ul_banner").animate({
				left:-index*1554
			});
		})
		$(".btn_right").click(function(){
			if(index == 5){
				$("#ul_banner").animate({
				left:0
				});
				index = 0;
			}
			if(index == 4){
				index=4;
			}else{
				index++;
			}
			removeSib();
			olLi[index == olLi.length ? 0 : index].className="active";
			$("#ul_banner").animate({
				left:-index*1554
			});
		});
		
		var slick_dots=document.querySelector(".slick_dots")
		var olLi=slick_dots.children
		//定义一个排他
		function removeSib(){
			for (var i = 0; i < olLi.length; i++) {
				olLi[i].className="";
			}
		}
		//头部的nav显示
		$(".a_parent").hover(function(){
			$(".jt").css("transform","rotateZ(180deg)")
			$(".card").slideDown(30)
		},function(){
			$(".jt").css("transform","rotateZ(0)")
			$(".card").slideUp(30)
		})
		
		$(".customer_father").hover(function(){
			$(".jt2").css("transform","rotateZ(180deg)")
			$(".customer_card").show(100)
		},function(){
			$(".jt2").css("transform","rotateZ(0)")
			$(".customer_card").hide(100)
		});
		
		//吸顶部分
		$(".icon-yf").hover(function(){
			$(".hide_reg").slideDown(30)
		},function(){
			$(".hide_reg").slideUp(30)
		})
		$(".icon-gwc").hover(function(){
			$(".get_gwc").slideDown(30)
		},function(){
			$(".get_gwc").slideUp(30)
		})

		//注册登录
		$("#login").click(function(){
			$(".masking").fadeIn(300);
			$(".yx-register").hide(100)
		})
		//点击按钮关闭登录
		$("#shut_login").click(function(){
			$(".masking").fadeOut(200)
		})
		//监听点击是否使用验证码登录
		$("#yzm_login").click(function(){
			$(".drag").toggle(200);
			$("#yx_login").height(407)
		});
		
		//监听点击注册按钮
		$("#register").click(function(){
			$(".yx_login").hide(300)
			$(".yx-register").fadeIn(300)
			$(".masking").fadeIn(300);
			
		});
		//监听快速注册
		$("#query_reg").click(function(){
			$(".yx_login").hide(300)
			$(".yx-register").fadeIn(300)
			$(".masking").fadeIn(300);
			
		});
		//监听直接登录
		$("#skip_login").click(function(){
		$(".masking").fadeIn(300);
		$(".yx-register").hide(100)
		});
		
		
		//监听关闭
		$("#shut_register").click(function(){
			$(".masking").hide(100)
		});
		
		//登录验证拖拽
		$(".piece").bind("mousedown",function(e){
			var _this=$(this)
			var x = e.offsetX;
			$(document).bind({
				mousemove:function(e){
					e.preventDefault()//阻止事件默认行为
					var l=e.pageX-x-600;
					var maxL = $(".drag").width() - $(".piece").width();
					if(l<0){
						l=0
					}else{
						l=l
					}
					if(l>maxL){
						l=maxL
					}else{
						l=l;
					}
					_this.css({
						left:l
					})
				},
				mouseup:function(){
				$(document).unbind("mousemove");	
				}
			});
		});
		
		//点击跳转详情页
		$(".name").click(function(){
			location.href="childIndex.html"
		});
		
		//实现吸顶效果
		$(Window).scroll(function(){
			var stop = $("html,body").scrollTop();
			if( stop >=150 ){
				$(".warpper_fixed").slideDown(200)
			}else{
				$(".warpper_fixed").slideUp(200)
			}
		})
		
	})
		
}
