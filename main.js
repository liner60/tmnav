// JavaScript Document
$(function(){
	for(var i=0;i<$('.classItem').length;i++){
		//偶数行添加一个背景色
		if(i%2==1){
			$('.classItem').eq(i).addClass('hcolor');
		}
	}
	$('.classItem').mouseover(function(){
		$('.classItem').removeClass('active');
		$(this).addClass('active');
	}).mouseout(function(){
		$(this).removeClass('active');
	});
	
	$('.icon2').click(function(){
		if($(this).hasClass('active')){
			$('.icon').addClass('active');
			$(this).removeClass('active');
			$(".classList").removeClass('hidden');
		}else{
			$('.icon').removeClass('active');
			$(this).addClass('active');
			$(".classList").addClass('hidden');
		}
		
	});
	$('.icon1').click(function(){
		if($(this).hasClass('active')){
			$('.icon').addClass('active');
			$(this).removeClass('active');
			$(".classList").addClass('hidden');
		}else{
			$('.icon').removeClass('active');
			$(this).addClass('active');
			$(".classList").removeClass('hidden');
		}
		
	});
	//滚动事件
	$(window).scroll(function(){
		for(var i=0;i<$('.classItem').length;i++){
			var oheight=$('.classList').get(i).offsetHeight+'px';
			if($(window).scrollTop()>=130*(i+1)){
		  	  $('.classList').eq(i).animate({height:'0'},200);
		    }else{
			  $('.classList').eq(i).animate({height:'40px'},200);
			}
		}
		
	})
})