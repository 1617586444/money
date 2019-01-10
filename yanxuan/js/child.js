




window.onload=function(){
	
	$(function(){
		
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
			
			//监听颜色选择
			$(".yx-clearfix ul li").eq(0).hover(function(){
				$("#black").show()
			},function(){
				$("#black").hide()
			});
			$(".yx-clearfix ul li").eq(1).hover(function(){
				$("#nccolor").show()
			},function(){
				$("#nccolor").hide()
			})
			
			//监听尺码的选择
			$(".yx_size ul").on("click","li",function(){//事件委托
				$(this).css({
					border:"2px solid #b4a078",
					boxSizing: "border-box"
				}).siblings().css("border","1px solid #ccc");
			})
			//监听颜色的选择
			$(".yx-clearfix ul").on("click","li",function(){//事件委托
				//$(this).index() == 0 黑色的鞋 1 黄色的鞋
				if($(this).index() == 0){
					$(".max_img img").attr("src","childImg/bigImg1.jpg");
					$(".da_img img").attr("src","childImg/maxImg1.jpg");
				}else{
					$(".max_img img").attr("src","images/tab_min.png");
					$(".da_img img").attr("src","images/tab_max.png");
				}
				
				
				$(this).css({
					border:"2px solid #b4a078",
					boxSizing: "border-box"
				}).siblings().css("border","1px solid #ccc");
			})
			//监听数量的加减
			var numINdex=0;
			$(".btn-minus").click(function(){
				if(numINdex == 0){
					numINdex=0;
				}else{
					numINdex--;
				}
				$(".btn-txt").val(numINdex)
			})
			
			$(".btn-plus").click(function(){
					numINdex++;
				
				$(".btn-txt").val(numINdex)
			});
			//实现吸顶效果
				$(Window).scroll(function(){
					var stop = $("html,body").scrollTop();
					if( stop >=150 ){
						$(".warpper_fixed").slideDown(200)
					}else{
						$(".warpper_fixed").slideUp(200)
					}
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
				});
				
			
			
		})

}
