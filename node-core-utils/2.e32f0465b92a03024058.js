webpackJsonp([2],{70:function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0});var g=c(0),h=c.n(g),i=c(5),j=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),k=function(a){function b(){return d(this,b),e(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return f(b,a),j(b,[{key:"componentWillMount",value:function(){window.addEventListener("storage",function(a){if("page"===a.key){var b=JSON.parse(a.newValue).page;window.slide.bespoke.slide(b)}})}},{key:"componentDidMount",value:function(){c.e(0).then(c.bind(null,67))}},{key:"render",value:function(){return h.a.createElement(i.a,{slides:this.props.slides})}}]),b}(h.a.Component);b["default"]=k}});