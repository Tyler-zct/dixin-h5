// 文字展开收起
function textstr(obj, btn) {
    var initFontNum = 100; //初始化字数限制  
    var initTextHeight = 18; // 初始化高度px  

    var didiText = $(obj).text(); //获取完整内容  
    var didiHeight = 75; //获取完整内容时容器高度  

    if (didiText.length >= initFontNum && didiHeight > initTextHeight) {
        $(obj).text($(obj).text().substring(0, initFontNum)); //将内容截取到限制长度  
        $(obj).html($(obj).html() + '......'); //截取后的内容以省略号结尾  
        $('.unfold').css({ //显示最外层容器  
            'opacity': '1'
        });
        $(obj).css({
            'height': initTextHeight + 'vh',
        });

        $(btn).click(function () {
            var curText = $(obj).text(); //截取后的内容  
            if (curText.length == 106) {
                $(obj).css({
                    'height': didiHeight + 'vh',
                    '-moz-transition': '0.5s',
                    '-webkit-transition': '0.5s',
                    'transition': '0.5s'
                });
                $(btn).html(`<div class="updown"><img src="../images/up.png" class="min">收起</div>`);
                $(obj).text(didiText);
            } else {
                $(obj).css({
                    'height': initTextHeight + 'vh',
                    '-moz-transition': '0.4s',
                    '-webkit-transition': '0.4s',
                    'transition': '0.4s'
                });
                $(btn).html(`<div class="updown"><img src="../images/down.png" class="min">展开</div>`);
                setTimeout(function () {
                    $(obj).text($(obj).text().substring(0, initFontNum));
                    $(obj).html($(obj).html() + '......');
                }, 100)
            }
            return false;
        });
    } else {
        $(btn).hide();
        $('.unfold').css({
            'opacity': '1'
        });
    }
};
textstr('.animals', '.updown');

function meanstr(obj, btn) {
    var initFontNum = 20; //初始化字数限制  
    var initTextHeight = 10; // 初始化高度px  

    var didiText = $(obj).text(); //获取完整内容  
    var didiHeight = 60; //获取完整内容时容器高度  

    if (didiText.length >= initFontNum && didiHeight > initTextHeight) {
        $(obj).text($(obj).text().substring(0, initFontNum)); //将内容截取到限制长度  
        $(obj).html($(obj).html() + '......'); //截取后的内容以省略号结尾  
        $('.mean').css({ //显示最外层容器  
            'opacity': '1'
        });
        $(obj).css({
            'height': initTextHeight + 'vh',
        });

        $(btn).click(function () {
            var curText = $(obj).text(); //截取后的内容  
            if (curText.length == 20) {
                $(obj).css({
                    'height': didiHeight + 'vh',
                    '-moz-transition': '0.5s',
                    '-webkit-transition': '0.5s',
                    'transition': '0.5s'
                });
                $(btn).html(`<div class="updown"><img src="../images/up.png" class="min">收起</div>`);
                $(obj).text(didiText);
            } else {
                $(obj).css({
                    'height': initTextHeight + 'vh',
                    '-moz-transition': '0.4s',
                    '-webkit-transition': '0.4s',
                    'transition': '0.4s'
                });
                $(btn).html(`<div class="updown"><img src="../images/down.png" class="min">展开</div>`);
                setTimeout(function () {
                    $(obj).text($(obj).text().substring(0, initFontNum));
                    $(obj).html($(obj).html() + '......');
                }, 100)
            }
            return false;
        });
    } else {
        $(btn).hide();
        $('.mean').css({
            'opacity': '1'
        });
    }
};
meanstr('.meaning', '.updown');

// 底部弹窗
function showList1(){
	$("body").scrollmenu({
		type:'',
		bscroll:true,
		// animateIn:'bounceIn',
		// animateOut:'bounceOut',
		click:function(ret){
			if(ret.hasHref){
				return
			}else{
				switch (ret.index){
					case 0:
					alert(0);
					break;
				}
				alert(JSON.stringify(ret));
			}
		}
	});
}