(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  var foo = {
    a: function a() {
      return 'a';
    },
    b: function b() {
      return 'b';
    }
  };
  var foo_1 = foo.a;
  var foo_2 = foo.b;

  console.log(foo_1());
  console.log(foo_2());

}));
