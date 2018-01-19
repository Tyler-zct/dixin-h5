$(function () {
    var sex_list = document.getElementsByClassName("gender"); //获取tab列表
    for (var i = 0; i < sex_list.length; i++) {
        sex_list[i].index = i; //定义index变量，以便让tab按钮和tab内容相互对应
        sex_list[i].onclick = function () { //移除全部tab样式和tab内容
            for (var i = 0; i < sex_list.length; i++) {
                sex_list[i].className = "gender";
            }
            this.className = "gender sex"; //为当前tab添加样式
        }
    }

    var page_list = document.getElementsByClassName("page-icon"); //获取tab列表
    for (var i = 0; i < page_list.length; i++) {
        page_list[i].onclick = function () {
            var src1 = page_list[0].getAttribute('src')
            var src2 = page_list[1].getAttribute('src')
            var src3 = page_list[2].getAttribute('src')
            src1 = src1.substring(src1.lastIndexOf("/img") + 1, src1.length - 5);
            src2 = src2.substring(src2.lastIndexOf("/img") + 1, src2.length - 5);
            src3 = src3.substring(src3.lastIndexOf("/img") + 1, src3.length - 5);
            page_list[0].setAttribute('src', `${src1}2.svg`)
            page_list[1].setAttribute('src', `${src2}2.svg`)
            page_list[2].setAttribute('src', `${src3}2.svg`)

            var src = this.getAttribute('src')
            src = src.substring(src.lastIndexOf("/img") + 1, src.length - 5);
            this.setAttribute('src', `${src}1.svg`)
        }
    }
});

// 表单验证
function checkchinese() {
    var reg = /[^\x00-\x80]/;
    var x = document.namefrom.xing.value;
    if (!reg.test(x)) {
        $("[data-toggle='tooltip']").tooltip();
        document.namefrom.xing.focus();
        document.namefrom.xing.value = "";
        return false;
    }
    var m = document.namefrom.ming.value;
    if (!reg.test(m)) {
        $("[data-toggle='tooltip']").tooltip();
        document.namefrom.ming.focus();
        document.namefrom.ming.value = "";
        return false;
    }
}

function marrychinese() {
    var reg = /[^\x00-\x80]/;
    var man = document.marryfrom.male.value;
    if (!reg.test(man)) {
        $("[data-toggle='tooltip']").tooltip();
        document.marryfrom.male.focus();
        document.marryfrom.male.value = "";
        return false;
    }
    var woman = document.marryfrom.female.value;
    if (!reg.test(woman)) {
        $("[data-toggle='tooltip']").tooltip();
        document.marryfrom.female.focus();
        document.marryfrom.female.value = "";
        return false;
    }
}

function fortunechinese() {
    var reg = /[^\x00-\x80]/;
    var n = document.fortunefrom.fullname.value;
    if (!reg.test(n)) {
        $("[data-toggle='tooltip']").tooltip();
        document.fortunefrom.fullname.focus();
        document.fortunefrom.fullname.value = "";
        return false;
    }
}

// 时间日期选择
new DateSelector({
    input: 'calculate', //点击触发插件的input框的id
    container: 'calculateContainer', //插件插入的容器id
    type: 0,
    //0：不需要tab切换，自定义滑动内容，建议小于三个；
    //1：需要tab切换，【年月日】【时分】完全展示，固定死，可设置开始年份和结束年份
    param: [1, 1, 1, 1, 0],
    //设置['year','month','day','hour','minute'],1为需要，0为不需要,需要连续的1
    beginTime: [1910, 1, 1, 0], //如空数组默认设置成1970年1月1日0时0分开始，如需要设置开始时间点，数组的值对应param参数的对应值。
    endTime: [2016, 5, 7, 12], //如空数组默认设置成次年12月31日23时59分结束，如需要设置结束时间点，数组的值对应param参数的对应值。
    recentTime: [1980, 1, 1, 0], //如不需要设置当前时间，被为空数组，如需要设置的开始的时间点，数组的值对应param参数的对应值。
    success: function (arr, arr2) {
        $('#calculate').attr('style', 'color: #333333;');
        $('#calculate').text(`${arr2[0]}年-${arr2[1]}月-${arr2[2]}日 ${arr2[3]}时`)
    }
});

new DateSelector({
    input: 'marry_male',
    container: 'maleContainer',
    type: 0,
    param: [1, 1, 1, 1, 0],
    beginTime: [1930, 1, 1, 0],
    endTime: [2013, 5, 7, 12],
    recentTime: [1980, 1, 1, 0],
    success: function (arr, arr2) {
        $('#marry_male').attr('style', 'color: #333333;');
        $('#marry_male').text(`${arr2[0]}年-${arr2[1]}月-${arr2[2]}日 ${arr2[3]}时`)
    }
});

new DateSelector({
    input: 'marry_female',
    container: 'femaleContainer',
    type: 0,
    param: [1, 1, 1, 1, 0],
    beginTime: [1930, 1, 1, 0],
    endTime: [2013, 5, 7, 12],
    recentTime: [1980, 1, 1, 0],
    success: function (arr, arr2) {
        $('#marry_female').attr('style', 'color: #333333;');
        $('#marry_female').text(`${arr2[0]}年-${arr2[1]}月-${arr2[2]}日 ${arr2[3]}时`)
    }
});

// tab切换
$(document).ready(function () {
    $(".tab_content").hide(); //Hide all content  
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab  
    $(".tab_content:first").show(); //Show first tab content  

    //On Click Event  
    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $(".tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;
    });

    $("[name='fullname']").focus(function () {
        $("[name='fullname']").css("color", "#333333");
    });
    $("[name='male']").focus(function () {
        $("[name='male']").css("color", "#333333");
    });
    $("[name='female']").focus(function () {
        $("[name='female']").css("color", "#333333");
    });
    $("[name='xing']").focus(function () {
        $("[name='xing']").css("color", "#333333");
    });
    $("[name='ming']").focus(function () {
        $("[name='ming']").css("color", "#333333");
    });
});