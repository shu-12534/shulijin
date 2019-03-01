;(function(){
	$.ajax({
		url:'http://10.31.162.85/projectwangyi/php/yxdata.php',
		dataType:'json'
	}).done(function(data){
		var strhtml="<ul>";
		$.each(data,function(index,value){
			strhtml+=`
				<div class="new_pic">
					<a href="http://10.31.162.85/projectwangyi/src/details.html?sid=${value.sid}" target="_blank">
					<img src="${value.url}"></img>
					<p>${value.title}</p>
					<span>¥<i>${value.price}</i></span>
				</div> 
			`;
		})
		strhtml+="</ul>";
		$('.new').html(strhtml);
			
			var $left=$('#section_1 #left');
			var $right=$('#section_1 #right');
			var $ul=$('#section_1 ul')
			var num=0;
		    var $liwidth=272;
			$right.on('click',function(){
				num++;
				if(num>=2){
					num=2;
				}
				$ul.stop(false,true).animate({
					left:-$liwidth*4*num
				})
			})
			$left.stop(false,true).on('click',function(){
				num--;
				if(num<=0){
					num=0;
				}
				$ul.animate({
					left:-$liwidth*4*num
				})
			})
		}).done(function(data){
				$.each(data,function(index,value){
					var $picbox=$('.new_pic');
					$picbox.hover(function(){
						var $src=data[$(this).index()].url2;
						$(this).find('img').attr('src',$src)
					},function(){
						var $src=data[$(this).index()].url;
						$(this).find('img').attr('src',$src)
					})
			})	
		});
	
})()
