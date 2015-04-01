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
        mustache: "libs/mustache",
        text: 'libs/require-text',
        ivaryval: 'helper/ivaryval'
    },
    shim: {
        zepto: { exports: 'Zepto' },
        lazyload: {
            deps: ['zepto'],
            exports: 'Zepto.lazyload'
        },
        ivaryval: {
            deps: ['zepto'],
            exports: 'Zepto.ivaryval'
        },
        swipe: {
            deps: ['zepto'],
            exports: 'Zepto.swipe'
        },
        mustache: { exports: 'mustache' }
    }
});

requirejs(["zepto", "$http", "swipe", "mustache", "ivaryval", 'text!../html/templates/detailProductPicture.html', 'text!../html/templates/detailProductInfo.html'], function ($, $http, swipe, mustache, ivaryval, pictureTemplate, productInfoTemplate) {

    //详情页图片
    $http.getProductPicture(11001, function (response) {
        if (response.Code == "0") {
            //商品图片
            mustache.parse(pictureTemplate);
            var rendered = mustache.render(pictureTemplate, { productPictures: response.Data.productPictures });
            $('#detailSwipe').html(rendered);
            //详情页图片滑动
            window.mySwipe = $('#detailSwipe').Swipe({
                auto: 3000,
                callback: function (iNow) {
                    $('.serial-num > li').removeClass('on').eq(iNow).addClass('on');
                }
            }).data('swipe');

            //商品信息
            mustache.parse(productInfoTemplate);
            response.Data.productInfo.SaleUnitPrice = response.Data.productInfo.SaleUnitPrice.toFixed(2);
            var productInfoRendered = mustache.render(productInfoTemplate, response.Data.productInfo);
            $('.title').html(productInfoRendered);
        } else {
            alert(response.Code);
        }
    });
    
    var maxBuy = "10";
    
    //修改商品数量
    $(".quantity").iVaryVal({
        textval: 1,
        onAddClick: function (ele) {
            var beforeValue = ele.prev().val();
            ele.prev().val(parseInt(ele.prev().val()) + 1);
            if (!/^[1-9]\d*$/.test(beforeValue)) {
                ele.prev().val(1);
            }
            if (parseInt(ele.prev().val()) > parseInt(maxBuy)) {
                ele.prev().val(parseInt(ele.prev().val()) - 1);
            }
            else {
                //var pointNum = parseFloat($("#ReturnPoint").attr("data"));
                //$("#ReturnPoint").html(parseFloat($(".j_add").val()) * pointNum);
            }
            //$("#SaveTotalMoney").text("（为你节省 " + parseFloat($("#SaveTotalMoney").attr("data")) * parseFloat(ele.prev().val()) + " 元）");
        },
        onMinusClick: function (ele) {
            var changeValue = parseInt(ele.next().val());
            ele.next().val(parseInt(ele.next().val()) - 1);
            if (!/^[1-9]\d*$/.test(changeValue) || changeValue == "1") {
                ele.next().val(1);
            }
            else {
                //积分
                //var pointNum = parseFloat($("#ReturnPoint").attr("data"));
                //$("#ReturnPoint").html(parseFloat($(".j_add").val()) * pointNum);
            }
            //$("#SaveTotalMoney").text("（为你节省 " + parseFloat($("#SaveTotalMoney").attr("data")) * parseFloat(ele.next().val()) + " 元）");
        },
        onBlur: function (ele) {
            if (!/^[1-9]\d*|0$/.test(ele.val())) {
                //ele.showCartDialog({ flagInfo: "只能为整数", dataType: "error" });
                ele.val(1);
                //$("#ReturnPoint").html(parseFloat($(".j_add").val()) * parseFloat($("#ReturnPoint").attr("data")));
            }
            else {
                if (parseInt(ele.val()) > parseInt(maxBuy)) {
                    ele.val(maxBuy);
                    //$("#ReturnPoint").html(parseFloat($(".j_add").val()) * parseFloat($("#ReturnPoint").attr("data")));
                }
                else {
                    //$("#ReturnPoint").html(parseFloat($(".j_add").val()) * parseFloat($("#ReturnPoint").attr("data")));
                }
            }
            ele.trigger('keyup');
        }
    });

    //商品详情&用户点评切换
    detailSwipe();
    function detailSwipe() {
        var $detailBox = $('.detail-tab');
        var $tabsNav = $detailBox.find('.tabs-nav');
        var $tabsLink = $tabsNav.find('li');
        var $line = $tabsNav.find('.line');
        var $tabsCon = $detailBox.find('.tabs-con');

        $tabsCon.swipeLeft(function () {

        });

    }

});