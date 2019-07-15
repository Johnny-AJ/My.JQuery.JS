// 创建一个局部作用域
; (function () {

    // 封装jQuery函数变成一个window属性
    window.$ = window.jQuery = jQuery;

    function jQuery(selector) {
        return new Init(selector);
    }

    // 把所有的数据都放到原型身上
    function Init(selector) {
        // JQ要求对象是一个伪数组,使用数字作为属性名的对象
        let dom = document.querySelectorAll(selector);
        for (let i = 0; i < dom.length; i++) {
            this[i] = dom[i];
        };
        // 创建一个伪数组长度
        this.length = dom.length;
    };

    Init.prototype.css = function (property, value) {
        if (value == undefined) {
            // 获取伪数组第一个参数
            return window.getComputedStyle(this[0])[property];
        } else {
            // 创建一个带单位的数组
            let pxArr = ['width', 'height', 'top', 'left'];
            // 元素对象.style.css属性名=新的值
            for (let i = 0; i < this.length; i++) {
                // 带属性和不带属性的
                if (pxArr.indexOf(property) !== -1) {
                    if (value.toString().indexOf('px') === -1) {
                        this[i].style[property] = value + 'px';
                    } else {
                        this[i].style[property] = value;
                    }
                } else {
                    this[i].style[property] = value;
                }
            }
            // 最后返回this，链式编程
            return this;
        }
    }


    // 实现增加addClass功能
    Init.prototype.addClass = function (className) {
        // 循环遍历伪数组
        for (let i = 0; i < this.length; i++) {
            this[i].classList.add(className);
        }
        return this;
    }

    // 实现清除removeClass功能
    // Init.prototype.removeClass = function (className) {
    //     // 循环遍历伪数组
    //     for (let i = 0; i < this.length; i++) {
    //         this[i].classList.remove(className);
    //     }
    //     return this;
    // }

    // // 实现切换toggle功能
    // Init.prototype.toggleClass = function () {
    //     // 循环遍历伪数组
    //     for (let i = 0; i < this.length; i++) {
    //         this[i].classList.toggle(className);
    //     }
    // }


}());


let box = $('.box');

// box.css('width', 400);
// box.css('height', 400);
// box.css('backgroundColor', 'blue');

box.addClass('a');
// box.removeClass('a');
// box.toggleClass('a');