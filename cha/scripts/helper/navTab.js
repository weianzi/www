//切换效果
define(['zepto'], function ($) {

    function navTab() {

        var tabCon = $('.views .view');
        var tabLink = $('.tab-link');
        var iBtn = true;
        var firstHash = window.location.hash.substring(1) || 'index';

        //hash值对应的页面打开；如当前hash是index或空,切换到首页
        tab(firstHash);
        function tab(hash) {
            tabCon.hide();
            for (var i = 0; i < tabCon.length; i++) {
                if (hash == $(tabCon[i]).attr("data-hash")) {
                    $(tabCon[i]).show();
                }
            }
        }

        //如果hash值改变，刷新页面
        window.onhashchange = function () {
            if (iBtn) window.location.reload();
        };

        //点击导航切换页面
        tabLink.on('tap', function () {
            iBtn = false;
            var thisHash = $(this).attr("data-hash");
            $(this).addClass('active').siblings().removeClass('active');
            tabCon.hide();

            for (var i = 0; i < tabCon.length; i++) {
                if (thisHash == $(tabCon[i]).attr("data-hash")) {
                    $(tabCon[i]).show();
                    window.location.hash = thisHash;
                }
            }
            setTimeout(function () {
                iBtn = true;
            }, 10)
        });
    }

    return {
        navTab: navTab
    };

});
