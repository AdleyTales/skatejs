(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{247:function(e,n){e.exports='<with-component name="Bobbo"></with-component>\n'},248:function(e,n){e.exports="import { props, withComponent } from 'skatejs';\n\nclass WithComponent extends withComponent() {\n  static get props() {\n    return {\n      name: props.string\n    };\n  }\n  render({ name }) {\n    return `Hello, ${this.name}!`;\n  }\n}\n\ncustomElements.define('with-component', WithComponent);\n"},249:function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=t(8);var i=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,(0,r.withComponent)()),o(n,[{key:"render",value:function(e){e.name;return"Hello, "+this.name+"!"}}],[{key:"props",get:function(){return{name:r.props.string}}}]),n}();customElements.define("with-component",i)},250:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r,i,u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n      ","\n      <x-layout title=\"Component\">\n        <p>\n          The <code>withComponent</code> mixin combines all of Skate's mixins into\n          a single one for easy use. It's likely that this will be the most common\n          mixin you'll pair with renderers when authoring components, unless you\n          prefer to be selective about exactly which mixins you piece together.\n        </p>\n        <x-runnable\n          code=\"",'"\n          html="','"\n        ></x-runnable>\n      </x-layout>\n    '],["\n      ","\n      <x-layout title=\"Component\">\n        <p>\n          The <code>withComponent</code> mixin combines all of Skate's mixins into\n          a single one for easy use. It's likely that this will be the most common\n          mixin you'll pair with renderers when authoring components, unless you\n          prefer to be selective about exactly which mixins you piece together.\n        </p>\n        <x-runnable\n          code=\"",'"\n          html="','"\n        ></x-runnable>\n      </x-layout>\n    ']);t(29),t(25);var s=t(8),c=t(21);t(249);var l=f(t(248)),p=f(t(247));function f(e){return e&&e.__esModule?e:{default:e}}var h=(0,s.define)((i=r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.Component),u(n,[{key:"render",value:function(){return this.$(a,this.$style,l.default,p.default)}}]),n}(),r.is="x-pages-mixins-component",o=i))||o;n.default=h}}]);