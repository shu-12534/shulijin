;(function(){
	var $sid=location.search.substring(1).split('=')[1];
		$.ajax({
			url:'http://10.31.162.85/projectwangyi/php/detail.php',
			data:{
				sid:$sid
			},
			dataType:'json'
		}).done(function(data){
			$('.spanl').html(data.title);
			$('.num').html(data.price);
			var arrpic=data.urls.split(',');
			$('.thumb img').attr('src',arrpic[0]);
			$('.bf img').attr('src',arrpic[0]);
			var str='';
				$.each(arrpic,function(index,value){
					str+='<li><img src="'+value+'" /></li>';
				});
				$('.slide ul').html(str);
				var $smallpic=$('.thumb img');
				var $bigpic=$('.bf img');
				var $img=$('.slide ul li img');
				$img.on('click',function(){
					$smallpic.attr('src',$(this).attr('src'));
					$bigpic.attr('src',$(this).attr('src'));
					})
		});
		var num=1;
		$('.less').on('click',function(){
			num--;
			if(num<=1){
				num=1;
			}
			$('.number').val(num);
		})
		$('.more').on('click',function(){
			num++;
			if(num>=99){
				num=99;
			}
			$('.number').val(num);
		})
		var sidarr=[];//商品的编号
		var numarr=[];//商品的数量
		if(getcookie('cooksid') && getcookie('cookienum')){
			sidarr=getcookie('cooksid').split(',');
			numarr=getcookie('cookienum').split(',');
		}
		
		$('.btn2').on('click',function(){
			
			if($.inArray($sid,sidarr)==-1){//不存在
				sidarr.push($sid);
				numarr.push($('.number').val());
				addcookie('cooksid',sidarr.toString(),7);
				addcookie('cookienum',numarr.toString(),7);
			}else{//存在
				//console.log(numarr[$.inArray($sid,sidarr)]);//已经存在的值
				var newnum=parseInt($('.number').val())+parseInt(numarr[$.inArray($sid,sidarr)]);
				numarr[$.inArray($sid,sidarr)]=newnum;
				addcookie('cookienum',numarr.toString(),7);
			};
			location.reload(true);
			
		});
})()
