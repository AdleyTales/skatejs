webpackJsonp([6], {
  154: function(e, t, n) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
    var s,
      u,
      p,
      l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      c = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      ',
          '\n      <x-layout title="Update">\n        <p>\n          The <code>withUpdate</code> mixin is the heart of Skate and is what\n          makes attribute / property linkage and reflection manageable by\n          enforcing a convention that follows best-practices. It also exports\n          several pre-defined property types that handle serialisation and\n          deserialisation to / from attributes when they\'re set, as well as\n          coercion when the property is set. When properties update, everything\n          funnels into a single set of functions that are called so that you can\n          update your component in a functional manner.\n        </p>\n        <x-runnable\n          code="',
          '"\n          html="',
          '"\n        ></x-runnable>\n      </x-layout>\n    '
        ],
        [
          '\n      ',
          '\n      <x-layout title="Update">\n        <p>\n          The <code>withUpdate</code> mixin is the heart of Skate and is what\n          makes attribute / property linkage and reflection manageable by\n          enforcing a convention that follows best-practices. It also exports\n          several pre-defined property types that handle serialisation and\n          deserialisation to / from attributes when they\'re set, as well as\n          coercion when the property is set. When properties update, everything\n          funnels into a single set of functions that are called so that you can\n          update your component in a functional manner.\n        </p>\n        <x-runnable\n          code="',
          '"\n          html="',
          '"\n        ></x-runnable>\n      </x-layout>\n    '
        ]
      );
    n(29), n(26);
    var f = n(7),
      h = n(22);
    n(155);
    var d = n(156),
      y = o(d),
      b = n(157),
      w = o(b),
      m =
        (0, f.define)(
          ((p = u = (function(e) {
            function t() {
              return (
                r(this, t),
                a(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              i(t, e),
              l(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(c, this.$style, y.default, w.default);
                  }
                }
              ]),
              t
            );
          })(h.Component)),
          (u.is = 'x-pages-mixins-update'),
          (s = p))
        ) || s;
    t.default = m;
  },
  155: function(e, t, n) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function a(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var i,
      s,
      u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      p = n(7),
      l = ((s = i = (function(e) {
        function t() {
          o(this, t);
          var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return e.attachShadow({ mode: 'open' }), e;
        }
        return (
          a(t, e),
          u(t, [
            { key: 'updating', value: function(e) {} },
            {
              key: 'shouldUpdate',
              value: function(e, t) {
                return !0;
              }
            },
            {
              key: 'updated',
              value: function() {
                this.shadowRoot.innerHTML = 'Hey, ' + this.name + '!';
              }
            }
          ]),
          t
        );
      })((0, p.withUpdate)())),
      (i.props = { name: p.props.string }),
      s);
    customElements.define('with-update', l);
  },
  156: function(e, t) {
    e.exports =
      "import { props, withUpdate } from 'skatejs';\n\nclass WithProps extends withUpdate() {\n  // This is where you declare your props.\n  static props = {\n    // This will define a handler for the name attribute that will set the name\n    // prop. When the name prop is set, it will trigger an update allowing you\n    // to react to the changes in shouldUpdate.\n    name: props.string\n  };\n\n  constructor() {\n    super();\n    this.attachShadow({ mode: 'open' });\n  }\n\n  // Called when props have been set regardless of if they've changed.\n  updating(props) {}\n\n  // Called to check whether or not the component should call\n  // updated(), much like React's shouldComponentUpdate().\n  shouldUpdate(props, state) {\n    return true;\n  }\n\n  // Called if shouldUpdate returned true.\n  updated() {\n    this.shadowRoot.innerHTML = `Hey, ${this.name}!`;\n  }\n}\n\ncustomElements.define('with-update', WithProps);\n";
  },
  157: function(e, t) {
    e.exports = '<with-update name="You"></with-update>\n';
  }
});
