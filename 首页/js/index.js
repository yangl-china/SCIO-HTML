var lis=document.querySelectorAll("#banner .img_index li");
var divs=document.querySelectorAll("#banner .banner_img");
var timer=null;
var interval=6000;
//封装共用函数
function show_hide(index){
	//找到每个li对应的div
	for(var k=0;k<divs.length;k++){
		divs[k].className="banner_img"; //设置div初始化
		divs[index].className="banner_img show"; //设置移入li对应的div
		lis[k].className="";
	}
}
for(var i=0,n=0;i<lis.length;i++){
	//给每个li绑定鼠标移入事件
	lis[i].onmouseover=function(){
		//找到当前li的下标
		for(var j=0;j<lis.length;j++){
			if(this==lis[j]){
				n=j;
				show_hide(n);
				clearTimeout(timer);
				timer=null;
			}
		}
	}
	//给每个li绑定鼠标移出事件
	lis[i].onmouseout=function(){
		lis[n].className="hover";
		timer=setTimeout(cale,interval);
	}
}
//点击左边div绑定事件
document.querySelectorAll("#banner .icone_left")[0].onclick=function(){
	n-=1;
	(n==-1)&&(n=lis.length-1);
	clearTimeout(timer);
	timer=null;
	show_hide(n);
	lis[n].className="hover";
	timer=setTimeout(cale,interval);
}
//点击右边div绑定事件
document.querySelectorAll("#banner .icone_right")[0].onclick=move_right;
function move_right(){
	n+=1;
	(n==lis.length)&&(n=0);
	clearTimeout(timer);
	timer=null;
	show_hide(n);
	lis[n].className="hover";
	timer=setTimeout(cale,interval);
}
//设置定时器
timer=setTimeout(cale,interval);
function cale(){
	move_right();
}
$(function(){
    $(".banner_img:first").addClass("show");
})