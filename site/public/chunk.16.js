webpackJsonp([16], {
  278: function(e, t, n) {
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
    var u,
      a,
      l,
      c = (function() {
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
      f = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      <x-layout title="Utilities">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ],
        [
          '\n      <x-layout title="Utilities">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ]
      );
    n(26), n(30);
    var s = n(7),
      p = n(22),
      d =
        (0, s.define)(
          ((l = a = (function(e) {
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
              i(t, e),
              c(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      f,
                      "\n          Skate includes a few utilities that you'll end up needing when you build\n          complex components. They're minimal, opt-in and augment your building of\n          web components, not required by it.\n\n          - [define()](/utils/define)\n          - [emit()](/utils/emit)\n          - [link()](/utils/link)\n          - [shadow()](/utils/shadow)\n        "
                    );
                  }
                }
              ]),
              t
            );
          })(p.Component)),
          (a.is = 'x-pages-utils-index'),
          (u = l))
        ) || u;
    t.default = d;
  }
});
