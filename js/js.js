$(function(){
			//选项卡
			$(".btnbox div").hover(function(){
				var index=$(this).index();
				$(".bannerbox a").css("display","none").eq(index).css("display","block");
				$(".btnbox div").css("background","#ccc").filter(this).css("background","#0bc7b4")
			},function(){
				var num=$(this).index()
			})
			//自动轮播效果
			var num=0;
			var t=setInterval(move,2000);
			function move(){
				num++;
				// if(num<0){
				// 	num=$(".btnbox div").length-1;
				// }
				if(num==$(".btnbox div").length){
					num=0;
				}
				$(".bannerbox a").css("display","none").eq(num).css("display","block");
				$(".btnbox div").css("background","#ccc").eq(num).css("background","#0bc7b4")
			}
			//鼠标移入移出效果
			$(".container").hover(function(){
				clearInterval(t);
				$('.arrow').css("display","block")

			},function(){
				t=setInterval(move,2000)
				$('.arrow').css("display","none")
			})
			$(".right").click(function(){
				move()
			})
			$(".left").click(function(){
				num-=2;
				move();
			})
			// $(".arrow").mousedown(function(e){
			// 	e.preventDefult()//???
			// })
		})