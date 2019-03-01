;(function(){
    		//1.封装函数实现商品列表的创建
    		function goodslist(sid,num){//sid：商品的编号，num:商品的数量
    			$.ajax({
    				url:"http://10.31.162.85/projectwangyi/php/yxdata.php",
    				dataType:'json'
    			}).done(function(data){
    				$.each(data,function(index,value){
    					if(sid==value.sid){//比较当前传入的sid和数据里面的sid比较，相同获取当前的整条数据
    						var clonegoodslist=$('.item:hidden').clone(true,true);//深度克隆被隐藏的商品列表。
    						clonegoodslist.find('img').attr('src',value.url);
    						clonegoodslist.find('.pname a').html(value.title);
    						clonegoodslist.find('.price .aprice').html(value.price);
    						clonegoodslist.find('.counts input').val(num);
    						clonegoodslist.find('.allmoney').html((num*value.price).toFixed(2));
    						clonegoodslist.css('display','block');
    						$('.conter').append(clonegoodslist);//追加
    						totalprice();
    					}
    				})
    			});
    		}
    		
    		
    		//2.通过cookie渲染商品列表
	  		if(getcookie('cooksid') && getcookie('cookienum')){
  				var sid=getcookie('cooksid').split(',');//[2,1,3,4]
    			var num=getcookie('cookienum').split(',');//[2,1,3,4]
    			
    			$.each(sid,function(index,value){
    				goodslist(sid[index],num[index]);
    			});
    			
    		}
  		
//  		3.如果商品列表存在，隐藏--“购物车空空”
    		empty();
    		function empty(){
    			if(getcookie('cooksid')){
    				$('.cart-empty').hide();
    				$('.all').show()
    			}else{
    				$('.cart-empty').show();
    				$('.all').hide()
    			}
    		}
//  		
	 		//4.计算总的数量和总价
    		function totalprice(){
    			var allprice=0;
    			var allcount=0;
    			$('.item:visible').each(function(){
    				if($(this).find('input:checkbox').prop('checked')){
	    				allprice+=parseFloat($(this).find('.allmoney').html());
	  					allcount+=parseInt($(this).find('.count').val());
    				}
    			});
    			$('.armb').html(allprice);
    			$('.money').html(allprice);
	  			$('.sl').html(allcount);
    		}
  		
    		//5.全选按钮
    		$('.allcheck').on('change',function(){
    			$('.item:visible').find('input:checkbox').prop('checked',$(this).prop('checked'));
    			$('.allcheck').prop('checked',$(this).prop('checked'));
    			totalprice()
    		});
    		var $inputs=$('.item:visible').find('input:checkbox');
    		$('.item').on('input',$inputs,function(){//事件委托123
    			if($('.item:visible').find('input:checkbox').size()==$('.item:visible').find('input:checked').length){
    				$('.allcheck').prop('checked',true);
    			}else{
    				$('.allcheck').prop('checked',false);
    			}
    			totalprice();
    		});
    		
    		//6.改变商品的数量
    		$('.r').on('click',function(){
    			var addvalue=$(this).parents('.item').find('.count').val();
    			addvalue++;
    			if(addvalue>99){
    				addvalue=99;
    			}
    			$(this).parents('.item').find('.count').val(addvalue);
    			$(this).parents('.item').find('.allmoney').html(calcsingleprice($(this)));
    			totalprice();
    			changecookie($(this));
    		});
    		
			
			$('.l').on('click',function(){
    			var addvalue=$(this).parents('.item').find('.count').val();
    			addvalue--;
    			if(addvalue<=0){
    				addvalue=1;
    			}
    			$(this).parents('.item').find('.count').val(addvalue);
    			$(this).parents('.item').find('.allmoney').html(calcsingleprice($(this)));
    			totalprice()
    			changecookie($(this));
			});
			
			$counts=$('.item:visible').find('');
			$('.count').on('input',function(){
				var reg=/^\d+$/g;
				if(reg.test($(this).val())){
					var $value=$(this).val();
					if($value>99){
						$(this).val(99);
					}else if($value <= 0){
						$(this).val(1);
					}else{
						$(this).val($value);
					}
				}else{
					$(this).val(1);
				}
				$(this).parents('.item').find('.allmoney').html(calcsingleprice($(this).val()));
				totalprice();
				changecookie($(this));
			});
			
			//封装函数实现价格的计算
			function calcsingleprice(obj){
				var $singleprice=parseFloat(obj.parents('.item').find('.aprice').html());
				var $addvalue=parseInt(obj.parents('.item').find('.count').val());
				return ($singleprice*$addvalue).toFixed(2);
			}
			
			
			//将cookie值取出，转换成数组。
			var sidarr=[];//商品的编号
			var numarr=[];//商品的数量
			function cookietoarray(){
				if(getcookie('cooksid') && getcookie('cookienum')){
					sidarr=getcookie('cooksid').split(',');
					numarr=getcookie('cookienum').split(',');
				}
			}
			
			//将改变的值存放到cookie里面。
			//将当前改变数量的商品列表下面找到对应的id和cookie里面的sid比较找到位置，通过位置找到数量数组中的位置，进行重新赋值
			function changecookie(obj){
				cookietoarray();
				var sid=obj.parents('.item').find('img').attr('sid');
				numarr[$.inArray(sid,sidarr)]=obj.parents('.item').find('.count').val();
				addcookie('cookienum',numarr.toString(),7);
			}
			
			
			//7.删除
			$('.all').on('click','.del',function(){//$(this)-->.b-action a123
				if(window.confirm('你确定要删除吗？')){
					$(this).parents('.item').remove();
					deletecookie($(this).parents('.item').find('img').attr('sid'),sidarr);
				}
			});
			
			
			$('.mg').on('click',function(){
				if(window.confirm('你确定要删除吗？')){
					$('.item:visible').each(function(index,ele){
						
							$(this).remove();
							deletecookie($(this).find('.img').attr('sid'),sidarr);
						
					});
				}
			});
			
			function deletecookie(sid){
				cookietoarray();
				var $index=$.inArray(sid,sidarr);
				console.log($index);
				sidarr.splice($index,1);
				numarr.splice($index,1);
				addcookie('cooksid',sidarr.toString(),7);
				addcookie('cookienum',numarr.toString(),7);
			}
			
			
    	})();