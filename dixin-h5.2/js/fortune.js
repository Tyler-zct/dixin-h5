$(function () {

    // tab栏滚动到顶部后固定在顶部
    $(window).scroll(function () {
        // 滚动条距离顶部的距离 大于 570px时
        if ($(window).scrollTop() >= 580) {
            $('.horoscope').attr('style', 'position:fixed;top:0;z-index:100;height:13vw;width:90%;');
            $('.tabs li').css('line-height', '9vw');

        } else {
            $('.horoscope').attr('style', 'position:relative;height:12vw;width:100%;');
            $('.tabs li').css('line-height', '11vw');
        }
    });

    // 文字展开收起
    $.fn.expandable = function (config) {
        var that = $(this);
        var isExpand = false;
        var summaryCharLen = 250;

        var horoscope2 = that.html();
        var summary = horoscope2.substr(0, summaryCharLen);
        that.html(summary + '...');

        var btn = $(`<div class="updown"><img src="./img/down.svg" class="unfold">展开</div>`).click(function (e) {
            var target = $(this).prev();
            if (isExpand) {
                target.html(summary + '......');
                $(this).html(`<div class="updown"><img src="./img/down.svg" class="unfold">展开</div>`);
            } else {
                target.html(horoscope2);
                $(this).html(`<div class="updown"><img src="./img/up.svg" class="unfold">收起</div>`);
            }
            isExpand = !isExpand;
        }).insertAfter(that);
    };

    $('.character').expandable();
    $('.love').expandable();
    $('.cause').expandable();
    $('.luck').expandable();
    $('.easy').expandable();
    $('.life').expandable();

    // 选择支付方式
    var pay_list = document.getElementsByClassName("select"); //获取tab列表
    for (var i = 0; i < pay_list.length; i++) {
        pay_list[i].index = i; //定义index变量，以便让tab按钮和tab内容相互对应
        pay_list[i].onclick = function () { //移除全部tab样式和tab内容
            var span = document.createElement("span");
            span.className = 'payment';
            for (var i = 0; i < pay_list.length; i++) {
                pay_list[i].innerHTML = '';
            }
            this.appendChild(span); //为当前tab添加样式
        }
    }

})

// tab切换
$(document).ready(function () {
    let ispay = false
    $(".tab_content").hide(); //Hide all content  
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab  
    $(".tab_content:first").show(); //Show first tab content  

    //On Click Event  
    $("ul.tabs li").click(function () {
        if (ispay == true) {
            $("ul.tabs li").removeClass("active"); //Remove any "active" class  
            $(this).addClass("active"); //Add "active" class to selected tab  
            $('ul.tabs li a img').each(function (i, ele) {
                let initsrc = ele.getAttribute('src')
                initsrc = initsrc.substring(initsrc.lastIndexOf("/img") + 1, initsrc.length - 5);
                ele.setAttribute('src', `${initsrc}2.svg`)
            });
            let src = $('li.active a img').attr('src')
            src = src.substring(src.lastIndexOf("/img") + 1, src.length - 5);
            $('li.active a img').attr('src', `${src}1.svg`)
            $(".tab_content").hide(); //Hide all tab content  
            let activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
            $(activeTab).fadeIn(); //Fade in the active content  
            return false;
        } else {
            $('#unpaid').modal("show")
        }
    });
});