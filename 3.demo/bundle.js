(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    var module = {
        name: '铁蛋儿',
        age: 18
    };

    const fn1 = () => {
        console.log('大娃');
    };
    const fn2 = () => {
        console.log('二娃');
    };

    var version = "1.0.0";

    console.log(module);
    fn1();
    fn2();
    console.log(version);

})));
