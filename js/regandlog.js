;(function(){
	$('.top_registor').on('click',function(){
		$('#reg').css('display','block');
		var $heigh=$('.include').height();
		var $width=$('.include').width();
		var $top=($(window).height()-$heigh)/5;
		var $left=($(window).width()-$width)/2;
		$('.include').css({'top':$top,'left':$left})
	});
	$('.top_login').on('click',function(){
		$('#log').css('display','block');
		var $heigh=$('.include').height();
		var $width=$('.include').width();
		var $top=($(window).height()-$heigh)/5;
		var $left=($(window).width()-$width)/2;
		$('.include').css({'top':$top,'left':$left})
	});
	$('.cha').on('click',function(){
		$('#reg').css('display','none');
		$('#log').css('display','none');
	})
	
})()
//表单注册

;(function(){
	var $phone=/^1[3578]\d{9}$/;
	var $num=/^(\d|[a-z]|[A-Z]){4}$/;
	var $password=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,16}$/;
	var $phoneflag=true;
	var $numflag=true;
	var $passwordflag=true;
	var $checkflag=true;
	//手机号码验证
	$('#registor #phone').on('blur',function(){
		if($phone.test($(this).val())){
			$.ajax({
				type:'post',
				url:'http://10.31.162.85/projectwangyi/php/reg.php',
				data:{
					username:$(this).val()
				}
			}).done(function(data){	
				if(!data){
					$('.inputbox').css('border','1px solid red')
					$('.gg').css('display','inline-block')
					$('.error').html('用户名已存在');
					$phoneflag=false;
				}else{
					$('.inputbox').css('border','1px solid dodgerblue')
					$('.gg').css('display','none')
					$('.error').html('');
					$phoneflag=true;
				}
			})
		
		
		}else if($(this).val()==''){
			$('.inputbox').css('border','1px solid red')
			$('.gg').css('display','inline-block')
			$('.error').html('手机号码不能为空');
			$phoneflag=false;
		}else{
			$('.error').html('手机号格式错误');
			$('.gg').css('display','inline-block')
			$('.inputbox').css('border','1px solid red')
			$phoneflag=false;
	    }
	})
//4位数验证码	
	$('#registor #number').on('blur',function(){
		if($num.test($(this).val())){
			$('#number').css('border','1px solid dodgerblue')
			$('.gg').css('display','none')
			$('.error').html('');
			$numflag=true;
		}else if($(this).val()==''){
			$('#number').css('border','1px solid red')
			$('.gg').css('display','inline-block')
			$('.error').html('请输入验证码');
			$numflag=false;
		}else{
			$('.error').html('验证码错误');
			$('.gg').css('display','inline-block')
			$('#number').css('border','1px solid red')
			$numflag=false;
	    }
	})
//密码验证
$('#registor #password').on('blur',function(){
		if($password.test($(this).val())){
			$('.inputbox2').css('border','1px solid dodgerblue')
			$('.gg').css('display','none')
			$('.error').html('');
			$passwordflag=true;
		}else if($(this).val()==''){
			$('.inputbox2').css('border','1px solid red')
			$('.gg').css('display','inline-block')
			$('.error').html('请输入密码');
			$passwordflag=false;
		}else{
			$('.error').html('输入8-16位密码（必须包括数字和字母）');
			$('.gg').css('display','inline-block')
			$('.inputbox2').css('border','1px solid red');
			$passwordflag=false;
	   }
	})
	if(!$('input:checked').prop('checked')){
		$checkflag=false;
	}

	$('#submit').on('click',function(){
		if(!$passwordflag || !$numflag || !$phoneflag){
			return false;
		}
	})

})()
;(function(){
	var $call=/^1[3578]\d{9}$/;
	var $ber=/^(\d|[a-z]|[A-Z]){4}$/;
	var $callflag=true;
	var $berflag=true;
		$('#login button').on('click',function(){
		if($call.test($('#call').val())){
			$.ajax({
				type:'post',
				url:'http://10.31.162.85/projectwangyi/php/reg.php',
				data:{
					username:$('#call').val()
				}
			}).done(function(data){
				console.log(data)
				if(data){
					$('.inputbox').css('border','1px solid red')
					$('.gg').css('display','inline-block')
					$('.error').html('用户名不存在');
					$callflag=false;
					window.location.href='location:http://10.31.162.85/projectwangyi/src/sindex.html#';
				}else{
					$('.inputbox').css('border','1px solid dodgerblue')
					$('.gg').css('display','none')
					$('.error').html('');
					$callflag=true;
					confirm('登录成功');
					window.location.href='location:http://10.31.162.85/projectwangyi/src/sindex.html#';
					
				}
				
			})
		
		}else if($('#call').val()==''){
			$('.inputbox').css('border','1px solid red')
			$('.gg').css('display','inline-block')
			$('.error').html('手机号码不能为空');
			$callflag=false;
		}else{
			$('.error').html('手机号格式错误');
			$('.gg').css('display','inline-block')
			$('.inputbox').css('border','1px solid red')
			$callflag=false;
	    }
	})
	
	
	$('#login #ber').on('blur',function(){
		if($ber.test($(this).val())){
			$('#ber').css('border','1px solid dodgerblue')
			$('.gg').css('display','none')
			$('.error').html('');
			$numflag=true;
		}else if($(this).val()==''){
			$('#ber').css('border','1px solid red')
			$('.gg').css('display','inline-block')
			$('.error').html('请输入验证码');
			$numflag=false;
		}else{
			$('.error').html('验证码错误');
			$('.gg').css('display','inline-block')
			$('#ber').css('border','1px solid red')
			$numflag=false;
	    }
	})
	
//	$('.submit').on('click',function(){
//		if(!$callflag || !$berflag){
//			return false;
//		}
//	})
})()
