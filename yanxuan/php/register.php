<?php
	
	include("public.php");
	$conn = getConn("yanxuan");
	
	//拿到前端注册的数据
	$email = $_POST["email"];
	$pwd = $_POST["pwd"];
	$phone = $_POST["phone"];
	
	//检测数据是否在数据库中。如果不存在则可以注册，有则不可以
	$selectsql = "SELECT * FROM `emailreg`" ;
	//执行sql语句
	
	$res = mysqli_query($conn,$selectsql);
	
	//3 设置字符编码
	mysqli_query($conn,"set names utf8");
	
	$flag = false;//表示用户存在
	
	while($arr = mysqli_fetch_array($res)){
		if($email == $arr["email"]){
			$flag = true;
			break;
		}
	}
	
	if($flag){//存在用户名
		echo "<script>alert('用户名已存在，请重新输入');location.href='../emailreg.html';</script>";
	}else{
		//定义sql语句
		$instersql = "INSERT INTO `emailreg`( email, pwd, phone) VALUES ('$email','$pwd','$phone')";
		//执行sql语句
		$row = mysqli_query($conn,$instersql);
		
		if($row){//插入成功
			echo "<script>alert('注册成功');location.href='../emailreg.html';</script>";
		}else{//失败
			echo "0";
		}
	}
	
	
?>