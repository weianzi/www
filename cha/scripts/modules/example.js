require.config({
    baseUrl: '../../scripts/',
    paths: {
        zepto: 'libs/zepto.min',
        lazyload: 'libs/lazyload',
        fontSize: 'helper/fontSize',
        navTab: 'helper/navTab',
        Swipe: 'libs/Swipe',
        mustache: "libs/mustache",
        text: 'libs/require-text',
        product:'models/product'
    },
    shim: {
        zepto: { exports: 'Zepto' },
        lazyload: {
            deps: ['zepto'],
            exports: 'Zepto.lazyload'
        },
        Swipe: {
            deps: ['zepto'],
            exports: 'Zepto.Swipe'
        },
        mustache: { exports: "mustache" }
    }
});

requirejs(["zepto", "mustache", "text!/html/example/exampletemplate.html", "product"], function ($, mustache, exampletemplate, product) {
    var company = { companyName: "广州茶途网络科技有限公司", address: "广州天河区元岗街道智汇PARK5 Floor" };
    var html = mustache.to_html(exampletemplate, company);
    $("#Mustache").html(html);

    //product.getProduct(1409);
    //product.collectProduct(1409);
});