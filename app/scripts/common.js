$(window).scroll(function(){
	if($(window).scrollTop() > 0){
		$('.headerDiv').css({
			'position' : 'fixed',
			'top' : '0',
			'z-index' : '99'
		})
		$('.mainHeaderTop').css({
			'margin-top' : '100px'
		})
	} else{
		$('.headerDiv').css({
			'position' : 'static',
			'top' : '0',
			'z-index' : '99'
		})
		$('.mainHeaderTop').css({
			'margin-top' : '0'
		})
	}
});
// $(window).on('load',function(){
// 	 clearBorder();
// })
// function clearBorder(){
// 	var aa = window.location.hash;
// 	var a = aa.substr(2, 4);
// 	console.log(a)
// 	if(a == 'home'){
// 		$('.footer').css({
// 			'border-top' : 'none'
// 		})
// 	}else{
// 		$('.footer').css({
// 			'border-top' : '1px solid #d8d8d8'
// 		})
// 	}
// }


// $(window).on('load',function(){
// 	 waterfall();
// })
// function waterfall(){
// 	var box = $('.waterfall>div');
// 	var wC = $('.container').width();
// 	var wP = box.eq(0).outerWidth();
// 	var hArr = [];
// 	var cols = Math.floor(wC/wP);
// 	box.each(function(index,value){
// 		var h = box.eq(index).outerHeight();
// 		if(index < cols){
// 			hArr[index] = h;
// 		}else{
// 			var minH = Math.min.apply(null,hArr);
// 			console.log(minH)
// 			var minHIndex = $.inArray(minH,hArr);
// 			$(value).css({
// 				'position' : 'absolute',
// 				'top' : minH + 'px',
// 				'left' : minHIndex*wP + 'px'
// 			})
// 			hArr[minHIndex] += box.eq(index).outerHeight();
// 		}
// 	})
// 	console.log(hArr)
// }