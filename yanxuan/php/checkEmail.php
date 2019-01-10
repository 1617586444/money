<?php
	
	include("public.php");
	$conn = getConn("yanxuan");
	
	
	//接收来自登录的数据
	$phone=$_POST["phone"];
	
	//检测数据库是否存在该数据
	$selectsql = "SELECT * FROM `emailreg`";
	
	//执行sql语句
	
	$result = mysqli_query($conn,$selectsql);
	
	$flag = false;//表示号码不存在
		
	while($arr = mysqli_fetch_array($result)){
		if($phone == $arr["phone"]){
			$flag = true;
			break;
		}
	}

	if($flag){//用户名已存在
			echo "<script>alert('登录成功');location.href='http://127.0.0.1:8020/demo/PhaseIiProject/yanxuan/index.html?__hbt=1547087072800#';</script>"; 
		}else{
			echo "<script>alert('号码还没注册,请注册号码再来');location.href='../index.html';</script>";
		}
	
	
?>