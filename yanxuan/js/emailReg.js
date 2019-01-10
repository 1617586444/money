

window.onload=function(){
	
		$(function(){
			//移入点此认证显示对应的二维码
			$(".yidun_control").hover(function(){
				$("#posi_img").fadeIn(300);
				$("#hide_t").fadeOut()
				$("#show_t").fadeIn();
				
			},function(){
				$("#posi_img").fadeOut(300);
				$("#hide_t").fadeIn()
				$("#show_t").fadeOut();
			})
			/*----------------------邮箱验证----------------------------*/
			var emailCheckSuc = false,
			    eVal=0, emailText = $(".emailText");
			
			
			//邮箱验证正则
			var emailCheckReg = /^[1-9a-zA-Z_]\w{2,15}@\w{2,6}(\.[a-z]{2,3}){1,2}$/;
			
			//获取焦点时显示
			$("#txt_inp").focus(function(){
				$("#ng_gth").hide();
				$("#succ").hide();
				$("#ck_kong").hide();
				$("#txt_inp").css("border","1px solid #ccc")
			})
			
			
			//文本框失去焦点时检测邮箱
			$("#txt_inp").blur(function(){
				if(checkEmail()){
					//验证通过
					emailCheckSuc = true;
					//显示可用
					$("#succ").show();
					$("#ng_gth").hide();
					$("#txt_inp").css("border","1px solid #ccc");
				}else if(eVal == ""){//当不为空格时表示正常不做任何处理
					
				}else if(emaliCheckEmpty()){
						//验证是否为空
						$("#ck_kong").show();
						$("#ng_gth").hide();
				}else{
					//验证不通过
					emailCheckSuc = false;
					//显示账号要求提示
					$("#ng_gth").show();
					$("#txt_inp").css("border","1px solid red");
				}
				
			});
			
			//检测email是否符合
			function checkEmail(){
				eVal = $("#txt_inp").val();
				if(emailCheckReg.test(eVal)){
					return true;
				}else{
					return false;
				}
			}
			//验证是否为空
			function emaliCheckEmpty(){
				eVal = $("#txt_inp").val();
				if($("#txt_inp").val() == " "){
					return true;
				}
			}
			
			
			//监听键盘抬起事件
			$("#txt_inp").keyup(function(){
				//键盘抬起时显示提示框
				var emVal = $(this).val();//这是一个jq对象
				//对字符串的截取
				if( emVal.indexOf("@") != -1){
				 	 emVal = emVal.split("@")[0];
				}
				$("#all_email").show();
				for (var i = 0; i < emailText.length; i++) {
					emailText.eq(i).html(emVal);
				}
				
			})
			
			//利用事件委托拿到li
			$("#all_email").on("mouseover","li",function(e){
				$(this).css("background","#ccc");
			}).on("mouseout","li",function(e){
				$(this).css("background","#fff");
			});
			
			//监听点击li邮箱补齐框消失并进行验证
			$("#all_email").on("click","li",function(e){
				$("#txt_inp").val($(this).text());  
				$("#txt_inp").blur();
				$("#all_email").hide();
			});
			
			//点击doc时隐藏邮箱补齐框
			$(document).click(function(){
				$("#all_email").hide();
			})
			
			var index = -1;
			//拿到ol的li
			var olLi = $("#all_email").children();
			//监听键盘选择
			$(document).keydown(function(e){
				var e = e || event;
				var code = e.keyCode || e.which;
				for (var i = 0; i < olLi.length; i++) {
					olLi.eq(i).css("background","#fff")
				}
				switch(code){
					case  38:
					if(index == 0){
						index = olLi.length-1;
					}else{
						index --;
					}
					break;
					case 40 :
					if( index == olLi.length-1){
						index =0
					}else{
						index++;
					}
					break;
					case 13 :
					$("#txt_inp").val(olLi.eq(index).text());  
					$("#all_email").hide()
					$("#txt_inp").blur();
					break;
				}
				if( index >=0){
					olLi.eq(index).css("background","#ccc")
				}
			})
			/*------------------------密码验证----------------------------------*/
			
			
			var passCheckSuc = false;
			var passCheckReg = /^[0-9a-zA-Z]{6,16}$/;
			//获取焦点时
			$("#pwd").focus(function(){
				$("#succ2").hide();
				$("#m_zc").hide();
				$("#m_eacy").hide();
				$("#pwd_k").hide();
				$("#pwd").css("border","1px solid #ccc");
			})
			
			//失去焦点时进行验证
			$("#pwd").blur(function(){
				var pVal = $("#pwd").val();
				if(passCheck() && (pVal != "123456") && (pVal !="111111") && (pVal !="123456789") && (pVal !="0000000") && (pVal != "987654321")){
					//验证通过
					passCheckSuc = true;
					//显示可用
					$("#succ2").show();
					$("#m_zc").hide();
					$("#m_eacy").hide();
					$("#pwd").css("border","1px solid #ccc");
				}else if( pVal== ""){//当不为空格时表示正常不做任何处理
					
				}else if(passCheckEmpty()){
						//验证是否为空
						$("#pwd_k").show();
						$("#m_zc").hide();
				}else{
					//验证不通过
					passCheckSuc = false;
					//显示账号要求提示
					passCheckSuc = false;
					$("#succ2").hide();
					$("#m_zc").show();
					$("#m_eacy").hide();
					$("#pwd").css("border","1px solid red");
				}
				
			})
			
			//监听当键盘按下抬起时事件显示密码难易程度
			$("#pwd").keyup(function(){
				var pVal =$(this).val();
				if((pVal == "123456") || (pVal =="111111") || (pVal =="123456789") || (pVal =="0000000") && (pVal == "987654321")){
					$("#m_eacy").show();
					$("#pwd").css("border","1px solid red");
				}else{
					$("#m_eacy").hide();
					$("#pwd").css("border","1px solid #ccc");
				}
			})
			
			//检测密码的正则
			
			function passCheck(){
				var pVal = $("#pwd").val();
				//正则检测
				if(passCheckReg.test(pVal)){
					return true;
				}else{
					return false;
				}
			}
				//验证是否为空
			function passCheckEmpty(){
				eVal = $("#pwd").val();
				if($("#pwd").val() == " "){
					return true;
				}
			}
			/*-------------再次输入密码---------------*/
			
			var passAgainCheckSuc = false;
			
			//获取焦点时
			$("#inp_pwd").focus(function(){
				$("#succ3").hide();//可用
				$("#m_const").hide();//密码须由6-16个字符组成，区分大小写
				$("#m_diff").hide();//密码不一致
				$("#pwd_k2").hide();//请先输入密码
				$("#inp_pwd").css("border","1px solid #ccc");
			})
			
			//失去焦点时进行验证
			$("#inp_pwd").blur(function(){
				var pVal = $("#inp_pwd").val();
				if( pVal == $("#pwd").val() && pVal !=""){
					//验证通过
					passAgainCheckSuc = true;
					$("#succ3").show();//显示可用
					$("#m_const").hide();//密码须由6-16个字符组成，区分大小写
					$("#m_diff").hide();//密码不一致
					$("#pwd_k2").hide();//请先输入密码
					$("#inp_pwd").css("border","1px solid #ccc");
					
				}else if( pVal== ""){//当不为空格时表示正常不做任何处理
					
				}else if(passAginCheckEmpty()){
						//验证是否为空
						$("#pwd_k2").show();//请先输入密码
						$("#inp_pwd").css("border","1px solid red");
						$("#succ3").hide();//可用
						$("#m_const").hide();//密码须由6-16个字符组成，区分大小写
						$("#m_diff").hide();//密码不一致
				}else{
					//验证不通过
					passAgainCheckSuc = false;
					//显示账号要求提示
					$("#succ3").hide();
					$("#m_diff").show();//密码不一致
					$("#inp_pwd").css("border","1px solid red");
				}
				
			});
			
			//验证是否为空
			function passAginCheckEmpty(){
				eVal = $("#inp_pwd").val();
				if($("#inp_pwd").val() == " "){
					return true;
				}
			}
			/*---------手机号验证--------------------*/
	
			var phoneCheckSuc = false;
			var phoneCheckReg = /^1[3-9]\d{9}$/;
				
				
			//获取焦点
			$("#phone_txt").focus(function(){
				$("#phone_err").hide();//手机号输入有误，请重新输入
				$("#succ4").hide();//可用
			})
			
			//失去焦点进行验证
			$("#phone_txt").blur(function(){
				var phVal=$("#phone_txt").val();
				if(phoneCheck()){//手机号符合
					phoneCheckSuc = true;
					$("#phone_err").hide();//手机号输入有误，请重新输入
					$("#succ4").show();//可用
				}else if( phVal== ""){//当不为空格时表示正常不做任何处理
					
				}else if(passAginCheckEmpty()){
						//验证是否为空
						$("#inp_pwd").css("border","1px solid #ccc");
						$("#succ4").hide();//可用
				}else{
					//手机号不符合
					phoneCheckSuc = false;
					//显示账号要求提示
					$("#phone_err").show();//手机号输入有误，请重新输入
					$("#succ4").hide();//可用
					$("#phone_txt").css("border","1px solid red");
				}
			})
			
			
			//手机验证正则
			function phoneCheck(){
				var phVal=$("#phone_txt").val();
		        if(phoneCheckReg.test(phVal)){
		           return true;
		        }else {
		            return false;
		        }
				
			}
		
			
			
			
			/*------------表单提交事件-----------------*/
			
			//表单提交事件
			$("form").submit(function(){
				//邮箱账号通过 && 密码通过
				if(emailCheckSuc && passCheckSuc && passAgainCheckSuc && phoneCheckSuc){//邮箱通过
					return true;
				}else{//邮箱不通过
					return false;
				}
				
			})
		
		});	
	
	
	
	
	
	
}
