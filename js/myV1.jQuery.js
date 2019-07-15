; (function () {

    window.$ = $;

    function $(selector) {
        return new Init(selector);
    }

    // 创建一个伪数组
    function Init(selector) {
        let dom = document.querySelectorAll(selector);
        for (let i = 0; i < dom.length; i++) {
            this[i] = dom[i];
        }
        // 增加伪数组长度
        this.length = dom.length;
    }

    // 创建一个构造函数
    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i, this[i]);
        }
    }

    // 创建一个增加
    Init.prototype.addClass = function (className) {
        this.each(function (i, e) {
            e.classList.add(className);
        })
        return this;
    }

    // 创建一个移除
    Init.prototype.removeClasss = function (className) {
        this.each(function (i, e) {
            e.classList.remove(className);
        })
        return this;
    }

    // 创建一个切换
    Init.prototype.toggleClass = function (className) {
        this.each(function (i, e) {
            e.classList.toggle(className);
        })
        return this;
    }


    // 创建一个循环列表
    Init.prototype.css = function (prototy, value) {
        if (value == undefined) {
            return window.getComputedStyle(this[0])[prototy];
        } else {
            // 设置需要添加单位的属性
            let pxArr = ['width', 'height', 'top', 'left'];
            for (let i = 0; i < this.length; i++) {
                if (pxArr.indexOf(prototy) !== -1) {
                    // 是否带了PX
                    if (value.toString().indexOf('px') === -1) {
                        this[i].style[prototy] = value + 'px';
                    } else {
                        this[i].style[prototy] = value;
                    }
                } else {
                    this[i].style[prototy] = value;
                }
            }
            return this;
        }
    }
}());


let box = $('.box');


box.css('width', 200);
box.css('height', 200);
box.css('backgroundColor','red');


box.addClass('b');
box.removeClasss('a');
box.toggleClass('a');