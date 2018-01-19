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

$('.steenbrugge').expandable();
$('.steenbrugge2').expandable();
$('.steenbrugge3').expandable();
$('.steenbrugge4').expandable();

$(document).ready(function () {
    let ispay = false

    //On Click Event  
    $(".backgary").click(function () {
        console.log('click')
        if (ispay == false) {
            $('#unpaid').modal("show")
        }
    });
});