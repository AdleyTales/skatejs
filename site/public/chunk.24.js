webpackJsonp([24], {
  275: function(e, t, n) {
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
    function u(e, t) {
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
    var f,
      i,
      c,
      a = (function() {
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
      p = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          "\n      <h2>Not found!</h2>\n      <p>The requested page couldn't be found.</p>\n    "
        ],
        [
          "\n      <h2>Not found!</h2>\n      <p>The requested page couldn't be found.</p>\n    "
        ]
      ),
      l = n(7),
      s = n(22),
      b =
        (0, l.define)(
          ((c = i = (function(e) {
            function t() {
              return (
                o(this, t),
                r(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              u(t, e),
              a(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(p);
                  }
                }
              ]),
              t
            );
          })(s.Component)),
          (i.is = 'x-notfound'),
          (f = c))
        ) || f;
    t.default = b;
  }
});
