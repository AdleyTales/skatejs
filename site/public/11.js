(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{121:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r,i,a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <x-layout title="define()">\n        <x-marked src="','"></x-marked>\n      </x-layout>\n    '],['\n      <x-layout title="define()">\n        <x-marked src="','"></x-marked>\n      </x-layout>\n    ']);t(25),t(28);var s=t(8),f=t(21);var c=(0,s.define)((i=r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,f.Component),a(n,[{key:"render",value:function(){return this.$(u,"\n          The `define()` function takes a custom element constructor and defines it using the value of the `static is` class property that you define on your element.\n\n          ```js\n          import { define } from 'skatejs';\n\n          export default define(\n            class extends HTMLElement {\n              static is = 'my-element';\n            }\n          );\n          ```\n\n          If you're into the whole decorator thing, you can also use it like one:\n\n          ```js\n          @define\n          export default class extends HTMLElement {\n            static is = 'my-element';\n          }\n          ```\n        ")}}]),n}(),r.is="x-pages-utils-define",o=i))||o;n.default=c}}]);