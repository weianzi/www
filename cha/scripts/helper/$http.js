/**
 * Created by Administrator on 2015-03-23.
 */
define(["zepto"],function($){
    var $http={
         suggest: function (keyword,callback) {
             $.ajax({
                 url: "/api/Suggest",
                 type:"get",
                 data: { keyword: keyword},
                 dataType:"json",
                 success: function(response) {
                     callback(response);
                 },
                 error: function() {
                 }
             });
         },
         searchProduct: function (keyword,page,callback) {
             $.ajax({
                 url: "/api/Search",
                 type: "get",
                 data: { keyword: keyword, page: page },
                 dataType: "json",
                 success: function (response) {
                     callback(response);
                 },
                 error: function () {
                 }
             });
         },
         getProduct: function (productId, callback) {
             $.ajax({
                 url: "/api/Product",
                 type: "get",
                 data: { productId:productId },
                 dataType: "json",
                 success: function (response) {
                     callback(response);
                 },
                 error: function () {
                 }
             });
         },
		getHomeAd: function (callback) {
            $.ajax({
                url: "/api/banner",
                type: "get",
                dataType: "json",
                success: function (response) {
                    callback(response);
                },
                error: function () {
                }
            });
        },
        getProductArea: function (area,page,callback) {
            $.ajax({
                url: "/api/product/getorgin",
                data: { area: area, page: page },
                type: "get",
                dataType: "json",
                success: function (response) {
                    callback(response);
                },
                error: function () {
                }
            });
        },
         getProductPicture: function (productId, callback) {
             $.ajax({
                 url: "/api/Product",
                 type: "get",
                 data: { productId: productId },
                 dataType: "json",
                 success: function (response) {
                     callback(response);
                 },
                 error: function () {
                 }
             });
         }
    };
    return  $http;
});

