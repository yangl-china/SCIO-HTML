// JavaScript Document
$(document).ready(function() {		
  
	//执行幻灯片
	slideShow();

});

function slideShow() {

	//将所有图像的value设置为0
	$('#gallery a').val("0");
	
	//获取第一个图像并显示它
	$('#gallery a:first').val("1");
	
	//设置标题背景半透明
	$('#gallery .caption').css({"opacity": "0.0","filter": "alpha(opacity:0)"});
	//$('#gallery .caption').css({filter:opacity(0)});
	
	//调整文字宽度根据图像宽度
	$('#gallery .caption').css({width: $('#gallery a').find('img').css('width')});
	
	//从rel属性获得第一个图像字幕显示
	$('#gallery .content').html($('#gallery a:first').find('img').attr('rel'));
	$('#gallery .caption').animate({"height": '500px',"opacity": "0.0","filter": "alpha(opacity:0)"},1).animate({"height": '500px',"opacity": "0.7","filter": "alpha(opacity:70)"},1000);
	//$('#gallery .caption').animate({height: '500px',filter:opacity(0)},1).animate({height: '500px',filter:opacity(70%)},1000);
	$('#gallery .caption .tit img').animate({left: '-900px'},1).animate({left: '0px'},1000);

	$('a img').bind("click",function(){
		clearTimeout(timer);
		gallery();
	});

	$('#gallery .caption').click(function(){
		clearTimeout(timer);
		gallery();
	});
	//运行幻灯片，6秒
	autoTime();
	//鼠标移入移出事件
	$("#gallery").hover(function (){  
        clearTimeout(timer); 
    },function (){  
       autoTime(); 
    }); 
	
}

//定时器
function autoTime() {
	timer=null;
	timer=setInterval('gallery()',6000);
}
	
function gallery() {
	$('#gallery .content').html("");
	//判断第一张图片
	var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));
	
	//获取下一个图像，如果它达到的幻灯片结束，旋转它回到第一图像
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));
	
	//获取下一个图像标题
	var caption = next.find('img').attr('rel');
	
	//设置下一个图像的淡入效果
	next.addClass('show')
	.animate({value: 1}, 100);
	
	//隐藏当前图像
	current.animate({value: 0}, 100)
	.removeClass('show');
	
	//加入动画
	animation()
	
	//显示的内容
	$('#gallery .content').html(caption);
	//末页点击
	$('#gallery a:last img').click(function(){
		window.location.reload();	
	});
	  
}

function animation(){
	
	if($('#gallery a:nth-child(1)').val()==1||$('#gallery a:nth-child(5)').val()==1||$('#gallery a:nth-child(9)').val()==1||$('#gallery a:nth-child(13)').val()==1){		
		$('#gallery .caption')
		.animate({"height": '500px',"opacity": "0.0","filter": "alpha(opacity:0)"},1)
		.animate({"height": '500px',"opacity": "0.7","filter": "alpha(opacity:70)"},1000);
		/*$('#gallery .caption')
		.animate({height: '500px',-webkit-filter:opacity(0.0)},1)
		.animate({height: '500px',-webkit-filter:opacity(0.7)},1000);*/
		
	}else{
		
		if($('#gallery a:nth-child(11)').val()==1){
			$('#gallery .caption')
			.css("background-color","rgba(255,255,255,0)")
			.css("height", '113px');
			clearInterval(timer);
		}else{
			$('#gallery .caption')
			.animate({"height": '77px',"opacity": "0.0","filter": "alpha(opacity:0)"},1)
			.animate({"height": '77px',"opacity": "0.7","filter": "alpha(opacity:70)"},1000);
			/*$('#gallery .caption')
			.animate({height: '77px',-webkit-filter:opacity(0.0)},1)
			.animate({height: '77px',-webkit-filter:opacity(0.7)},1000);*/
		}		  
	}	
}
