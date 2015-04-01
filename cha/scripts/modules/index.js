require.config({
    baseUrl: '../scripts/',
    paths: {
        $http: "helper/$http",
        zepto: 'libs/zepto.min',
        lazyload: 'libs/lazyload',
        fontSize: 'helper/fontSize',
        navTab: 'helper/navTab',
        swipe: 'libs/Swipe',
        indexTabsIscroll: 'modules/indexTabsIscroll',
        search: 'modules/search',
        category: 'modules/category',
        mustache: "libs/mustache",
        text: 'libs/require-text'
    },
    shim: {
        zepto: { exports: 'Zepto' },
        lazyload: {
            deps: ['zepto'],
            exports: 'Zepto.lazyload'
        },
        swipe: {
            deps: ['zepto'],
            exports: 'Zepto.swipe'
        },
        mustache: { exports: 'mustache' }
    }
});

require(['zepto', '$http', 'mustache', 'lazyload', 'fontSize', 'navTab', 'swipe', 'indexTabsIscroll', 'search', 'text!../html/templates/homeTopAdTemp.html', 'text!../html/templates/homeProductAreaTemp.html','category'], function ($, $http, mustache, lazyload, fontSize, navTab, swipe, indexTabsIscroll, search, hometopadtemplate, homeproductareatemplate,category) {


    //头部导航切换及hash地址
    navTab.navTab();

    $http.getHomeAd(function (response) {
        var html = mustache.to_html(hometopadtemplate, response);
        $("#chatuSwipe").append(html);
        
        //首页焦点图效果
        window.mySwipe = $('#chatuSwipe').Swipe({
            auto: 3000,
            callback: function (iNow) {
                $('.serial-num > li').removeClass('on').eq(iNow).addClass('on');
            }
        }).data('swipe');
    });

    //图片懒加载
    $('.lazyload').lazyload();

    var currentPage = 0;
    $http.getProductArea("", currentPage, function (response) {
        var html = mustache.to_html(homeproductareatemplate, response);
        $(".tabs-iscroll-con").append(html);
    });
    //$(window).unbind("scroll");//先卸载页面scroll
    $(window).scroll(function () {
        if ($(document).height() <= $(this).scrollTop() + $(this).height()) {
                currentPage++;
                $http.getProductArea("", currentPage, function (response) {
                    var html = mustache.to_html(homeproductareatemplate, response);
                    $(".tabs-iscroll-con").append(html);
                });
        }
    });

    //首页按省份
    indexTabsIscroll.indexTabsIscroll();

    //搜索条效果
    search.search();

    //分类页面效果
    category.category();

    
});
