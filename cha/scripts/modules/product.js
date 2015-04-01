
define(["zepto","$http"], function ($,$http) {
    function product() {
    };
    
    product.getProduct = function (productId) {
        $http.getProduct(productId, function(response) {
            if (response.Code == "0") {

            } else {
                alert(response.Code);
            }
        });
    };
    
    product.test = function() {
        return "test ok?";
    };

    return product;
});