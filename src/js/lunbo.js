;(function(){
	var $btns=$(".picshow ol li");
	var $imgs=$(".picshow ul li");
	var $num=0;
	var $timer1=null;
	var $timer2=null;
	function change(){
		$btns.eq($num).addClass('active').siblings('li').removeClass('active');
		$imgs.eq($num).animate({
			opacity:1
		}).siblings('li').animate({
			opacity:0
		})
	}
	change();
	
	$('.picshow').hover(function(){
		clearInterval($timer1);
	},function(){
		$timer1=setInterval(function(){
		$('#right1').click();
	},5000);
	})
	
	$btns.hover(function(){
		$num=$(this).index();
		$timer2=setTimeout(function(){
			change();
		},300);
	},function(){
		clearTimeout($timer2);
	})
	
	$('#right1').on('click',function(){
		$num++;
		if($num>$btns.length-1){
			$num=0;
		}
		change();
	})
	$('#left1').on('click',function(){
		$num--;
		if($num<0){
			$num=$btns.length-1;
		}
		change();
	})
	
	$timer1=setInterval(function(){
//		console.log(666);
		$('#right1').click();
	},5000)
})()
