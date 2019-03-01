;(function(){
	function double(n){
			return n<10?'0'+n:n;
	}
			var futureTime=new Date('2019-2-29 16:00:00');//未来时间
			var nowTime=new Date();//当前的时间
			//时间可以进行相减运算,结果是毫秒数
			var sec=parseInt((futureTime-nowTime)/1000);  //秒
			var day=parseInt(sec/86400);
			var hour=parseInt(sec%86400/3600);
			var min=parseInt(sec%3600/60);
			var sec=sec%60;
			var ahour=document.querySelector('.hour');
			var amin=document.querySelector('.min');
			var asec=document.querySelector('.second');

		var timedown=document.querySelector('#time')
		setInterval(function(){
			var futureTime=new Date('2019-2-29 16:00:00');//未来时间
			var nowTime=new Date();//当前的时间
			//时间可以进行相减运算,结果是毫秒数
			var sec=parseInt((futureTime-nowTime)/1000);  //秒
			var day=parseInt(sec/86400);
			var hour=parseInt(sec%86400/3600);
			var min=parseInt(sec%3600/60);
			var sec=sec%60;
			var ahour=document.querySelector('.hour');
			var amin=document.querySelector('.min');
			var asec=document.querySelector('.second');
			ahour.innerHTML=hour;
			amin.innerHTML=double(min);
			asec.innerHTML=double(sec);
		},1000);
})()
