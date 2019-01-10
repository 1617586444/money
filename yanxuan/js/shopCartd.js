

/*
	$(function(){
			
		//把需要的属性用户obj封装起来
		var obj = {
			in_cart:$("#in_cart"),//加入购物车按钮
			icon_gwc:$("#icon-gwc")//购物车图标
			
		}
		new showGoods(obj).init();
	})
	
	class showGoods{
		constructor(obj){
			this.in_cart = in_cart;//加入购物车按钮
			this.icon_gwc = icon_gwc;//购物车图标
		}
		
		init(){//初始化所有功能
			this.login();//调用登录方法
		}
		login(){//登录操作
				this.loadingGoods(pro);
			};
		}
		loadingGoods(pro){
			pro.then(function(res){
			//加载所有的商品
			this.loading();
			}.bind(this));
		}*/
			/*$.getJSON("../goods.json",function(res){
				console.log(res)
				var str = "";
				/*for (var i = 0; i < res.length; i++) {
					str += `
						<ul>
							<li>
								<img src="img/${res[i].src}"/>
								<p><span>编号：</span><span class="goodBid">${res[i].bid}</span></p>
								<p><span>书名：</span><span>${res[i].bookName}</span></p>
								<p><span>作者：</span><span>${res[i].auter}</span></p>
								<p><span>出版日期：</span><span>${res[i].date}</span></p>
								<p><span>出版社：</span><span>${res[i].press}</span></p>
								<p><span>单价：</span><span>${res[i].price}</span></p>
								<p>加入购物车</p>
							</li>
						</ul>
					`;
				}*/
		






