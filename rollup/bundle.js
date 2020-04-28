(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var module = {
      name:'小明',
      age:29
    };

  const fn1=()=>{
      console.log('fn1');
    };
  const fn2=()=>{
      console.log('fn2');
    };

  var version = "1.0.0";

  console.log(module);
  fn1();
  fn2();
  console.log('version ' + version);

})));
