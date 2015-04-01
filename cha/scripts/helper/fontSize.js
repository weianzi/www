/**
 * 文字大小和页面宽度联动
 */

define(['zepto'], function () {

    winWidth = $(window).width();
    if (winWidth > 750) winWidth = 750;

    foneSize = winWidth / 16 + 'px';
    $('html').css('font-size', foneSize);

});