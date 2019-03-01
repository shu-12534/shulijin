;(function(){
	var $box=$('.thumb');
	var $smallpic=$('.thumb img');
	var $bigpic=$('.bf img');
	var $bf=$('.bf');
	var $sf=$('.sf');
	var $li=$('.slide ul li');
	
	var $width=$bf.width()*$smallpic.width()/$bigpic.width();
	var $height=$bf.height()*$smallpic.height()/$bigpic.height();
	$sf.css({'width':$width,'height':$height});
	$box.hover(function(){
		$sf.css('display','block');
		$bf.css('display','block');
		$box.on('mousemove',function(e){	
		var $x=e.pageX-$box.offset().left-$sf.width()/2;
		var $y=e.pageY-$box.offset().top-$sf.height()/2;
		if($x<=0){
			$x=0;
		}
		if($x>=$box.width()-$sf.width()){
			$x=$box.width()-$sf.width();
		}
		if($y<=0){
			$y=0;
		}
		if($y>=$box.height()-$sf.height()){
			$y=$box.height()-$sf.height();
		}
		$bili=$bigpic.width()/$smallpic.width();
		$sf.css({'left':$x,'top':$y});
		$bigpic.css({'left':-$x*$bili,'top':-$y*$bili});
	});
	},function(){
		$sf.css('display','none');
		$bf.css('display','none');
	})
		
	
})()
