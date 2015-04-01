//搜索条效果
define(['zepto', "$http", 'mustache', 'text!../html/templates/searchProductTemp.html'], function ($, $http, mustache, searchProducttemplate) {
    function search() {
        var searchInput = $('.search-input > input');
        var suggestResult = $('.suggest-result');
        var searchResult = $('.search-result');
        var searchform = $('.search-form');
        var searchkey = $(".search-key");
        var searchBtn = $(".search-btn");
        searchform.blur(function() {
            searchResult.hide();
            suggestResult.hide();
        });
        searchInput.focus(function() {
            searchResult.hide();
            suggestResult.show();
        }).blur(function() {
            
        });

        var suggesRetultTemp = "<a class=\"suggest_word clearfix\" target=\"_blank\" href=\"javascript:;\" keyword=\"{{swchn}}\"><span class=\"fl\">{{swchn}}</span><span class=\"fr\">约<b class=\"palegreen\">{{swnf}}</b>个商品 ↖</span></a>";
        var searchNoneTemp="<div class=\"search-none\"><p>抱歉，没有找到符合 '<span class=\"red\">{{keyword}}</span>' 的查询结果。</p></div>";
        var cache = "";
        searchInput.keyup(function() {
            var keyword = $(this).val();
            if (keyword.trim() != cache) {
                cache = keyword.trim();
                if (cache == "") {
                    suggestResult.html("");
                    searchkey.show();
                    return;
                }
                $http.suggest(keyword, function(response) {
                    if (response.Data.TotalCount > 0) {
                        suggestResult.html("");
                        $.each(response.Data.SuggestVMs, function(index, item) {
                            suggestResult.append(mustache.to_html(suggesRetultTemp, item));
                        });
                        suggestResult.find("a").each(function() {
                            $(this).bind("click", function() {
                                searchProduct($(this).attr("keyword"), 1);
                            });
                        });
                        searchkey.hide();
                    } else {
                        suggestResult.html("");
                        searchkey.show();
                    }
                });
            }
        });
        var currentPage = 1;
        var currentKeyword = "";
        var totalPageCounnt = 2;
        //$(window).unbind("scroll");//先卸载页面scroll
        //$(window).scroll(function () {
        //    if ($(document).height() <= $(this).scrollTop() + $(this).height()) {
        //        if (totalPageCounnt > currentPage) {
        //            currentPage++;
        //            searchProduct(currentKeyword, currentPage);
        //        }
        //    }
        //});
        
        searchBtn.click(function () {
            if (currentKeyword == searchInput.val().trim()) {
                return;
            }
            searchProduct(searchInput.val().trim(), 1);
        });

        function searchProduct(keyword, page) {
            currentPage = page;
            if (keyword != "") {
                searchResult.show();
                suggestResult.hide();
                searchkey.hide();
                $http.searchProduct(keyword, page, function (response) {
                    if (currentKeyword != keyword) {
                        searchResult.find(".item-list").html("");
                    }
                    currentKeyword = keyword;
                    if (response.Data.TotalCount > 0) {
                        totalPageCounnt = response.Data.TotalPageCount;
                        var html = mustache.to_html(searchProducttemplate, response.Data);
                        searchResult.find(".item-list").append(html);
                    } else {
                        searchResult.find(".item-list").html("");
                        searchResult.append(mustache.to_html(searchNoneTemp, { keyword: keyword }));
                    }
                });
            }
        }
    }

    return {
        search: search
    };
});