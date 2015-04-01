//分类
define(['zepto'], function ($) {

    function category() {

        //左侧大分类 如茶途精选、红茶等点击效果
        $('.category-nav li').each(function (index) {
            $(this).tap(function () {
                $(this).addClass('active').siblings().removeClass('active');
                $('.category-con > .item-list').hide().eq(index).show();
            });
        });

        //细分类导航切换
        $('.view-categorylist > .order li').tap(function () {
            var $this = $(this);
            var $icon = $this.find('i');
            $this.addClass('active').siblings().removeClass('active');
            if ($icon.hasClass('icon-down')) {
                $icon.attr('class', 'icon-up');
            } else if ($icon.hasClass('icon-up')) {
                $icon.attr('class', 'icon-down');
            }
        });

        //点击筛选
        $('.view-categorylist > .order li.filter').tap(function () {
            $('.filter-con').show().animate({'right': '-.4rem'});
        });

        //筛选窗口头部 返回
        $('.filter-con > .head > a').tap(function () {
            $('.filter-con').animate({
                'right': '-12.4rem'
            }, function () {
                $('.filter-con').hide()
            });
        });

        //筛选窗口点击单个dt
        $('.filter-con dt').tap(function () {
            var $this = $(this);
            var $icon = $this.find('i');

            if ($icon.hasClass('icon-down')) {
                $icon.attr('class', 'icon-up');
            } else if ($icon.hasClass('icon-up')) {
                $icon.attr('class', 'icon-down');
            }
            //$('.filter-con dd').hide();
            $this.next().toggle();
        });

        $('.filter-con dd .btn').tap(function () {
            $(this).toggleClass('btn-important');
        });

    }


    return {
        category: category
    }

});
