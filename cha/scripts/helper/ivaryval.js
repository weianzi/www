(function ($) {
    $.fn.iVaryVal = function (options) {
        var defaults = {
            addCss: "addClass",
            isCartUse: false,
            textval: 1, //开放接口
            onAddClick: function () { return false; }, //开放接口
            onMinusClick: function () { return false; },  //开放接口        
            onBlur: function () { return false; } //开放接口
        };
        var opts = $.extend(defaults, options);
        return this.each(function () {
            $.fn.draw(opts, $(this));
        });
    };

    $.fn.draw = function(o, obj) {
        var ele_t;
        var add;
        var minus;
        var O = 1;

        o.addCss = "j_add";
        minus = $("<a>", { "href": "javascript:void(0);", "class": "decrement" }).html('<s>-</s>').appendTo(obj);
        ele_t = $("<input>", { "type": "text", "class": o.addCss }).val(o.textval).appendTo(obj);
        add = $("<a>", { "href": "javascript:void(0);", "class": "increment" }).html('<s>+</s>').appendTo(obj);
        add.click(function() { o.onAddClick(add); });
        minus.click(function() { o.onMinusClick(minus); });

        ele_t.click(function() { $(this).select(); });

        ele_t.keyup(function(e) {
            if ($(this).val() != '') {
                C = parseInt($(this).val());
                //非负整数判断
                if ((/^[1-9]\d*|0$/.test(C)) && C > 0) {
                    $(this).val(C);
                    O = C;
                } else {
                    $(this).val(O);
                }
            }
            //键盘控制：上右--加，下左--减
            if (e.keyCode == 38 || e.keyCode == 39) {
                add.click();
            }
            if (e.keyCode == 37 || e.keyCode == 40) {
                minus.click();
            }
        });

        ele_t.blur(function() {
            $("#cartQuantity").val($(this).val());
            o.onBlur(ele_t);
        });
    };
})(Zepto);