//首页按省份

define(['zepto'], function ($) {
    function indexTabsIscroll() {

        var tabsBox = $('.tabs-iscroll');
        var btnL = tabsBox.find('.btn-pre');
        var btnR = tabsBox.find('.btn-next');
        var tabsUl = tabsBox.find('.tabs-inner');
        var tabsLi = tabsUl.find('li');
        var tabsLiW = tabsLi.eq(0).width() || 28;
        var tabsUlW = tabsLiW * (tabsLi.length + 1);
        var tabsUlL = tabsUl.offset().left;

        tabsUl.width(tabsUlW);

        //向左
        btnL.tap(MoveToLeft);
        tabsUl.focus(function(){

        });
        tabsUl.swipeLeft(function () {
            MoveToLeft();
            document.ontouchmove = function(ev){
                ev.preventDefault();
            };
        });
        //向右
        btnR.tap(MoveToRight);
        tabsUl.swipeRight(function () {
            MoveToRight();
         });

        function MoveToLeft() {
            tabsUlL -= tabsLiW * 4;
            if (tabsUlL < -tabsUlW / 2) tabsUlL = -tabsUlW / 2 - 50;
            tabsUl.animate({'left': tabsUlL});
        }

        function MoveToRight() {
            tabsUlL += tabsLiW * 4;
            if (tabsUlL > 0) tabsUlL = 20;
            tabsUl.animate({'left': tabsUlL});
        }


        //点击单个省份
        tabsLi.tap(function(){
            $(this).addClass('selected').siblings('li').removeClass('selected');
        });
    }

    return {
        indexTabsIscroll: indexTabsIscroll
    }

});