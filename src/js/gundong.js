;(function(){
	$(window).on('scroll',function(){
		var $top=$(window).scrollTop();
		var $left=$('.ullt');
		var $right=$('.ulr');
		if($top>555){
			$left.css({'position':'fixed','top':'22px','left':'0px'})
			$right.css({'position':'fixed','top':'22px','rigth':'0'})
		}else{
			$left.css({'position':'absolute','top':'615px','left':'0px'})
			$right.css({'position':'absolute','top':'615px','rigth':'0'})
		}
	})
	$('.lib').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		})
	})
})()
