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
        this.length = dom.length;
    }

    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i, this[i]);
        }
    }

    // 增加
    Init.prototype.addClass = function (className) {
        this.each(function (i, e) {
            e.classList.add(className);
        })
    }

    // 移除
    Init.prototype.removeClass = function (className) {
        this.each(function (i, e) {
            e.classList.remove(className);
        })
    }
    // 切换
    Init.prototype.toggleClass = function (className) {
        this.each(function (i, e) {
            e.classList.toggle(className);
        })
    }
}());


let box = $('.box');

box.addClass('uzi');
box.removeClass('uzi');
