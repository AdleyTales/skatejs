webpackJsonp([3], {
  170: function(e, t, n) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
    var l,
      u,
      c,
      p = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      s = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      ',
          '\n      <x-layout title="Preact renderer">\n        <p>\n          The\n          <a href="https://github.com/skatejs/renderer-preact">Preact renderer</a>\n          allows you to render using\n          <a href="https://github.com/developit/preact">Preact</a>.\n        </p>\n        <x-runnable\n          code="',
          '"\n          html="',
          '"></x-runnable>\n      </x-layout>\n    '
        ],
        [
          '\n      ',
          '\n      <x-layout title="Preact renderer">\n        <p>\n          The\n          <a href="https://github.com/skatejs/renderer-preact">Preact renderer</a>\n          allows you to render using\n          <a href="https://github.com/developit/preact">Preact</a>.\n        </p>\n        <x-runnable\n          code="',
          '"\n          html="',
          '"></x-runnable>\n      </x-layout>\n    '
        ]
      );
    n(29), n(26), n(34);
    var f = n(7),
      d = n(22);
    n(171);
    var h = n(173),
      m = r(h),
      y = n(174),
      v = r(y),
      _ =
        (0, f.define)(
          ((c = u = (function(e) {
            function t() {
              return (
                o(this, t),
                i(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              a(t, e),
              p(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(s, this.$style, m.default, v.default);
                  }
                }
              ]),
              t
            );
          })(d.Component)),
          (u.is = 'x-pages-renderers-preact'),
          (l = c))
        ) || l;
    t.default = _;
  },
  171: function(e, t, n) {
    'use strict';
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
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
    var a,
      l,
      u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      c = n(7),
      p = n(172),
      s = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(p),
      f = n(80),
      d = ((l = a = (function(e) {
        function t() {
          return (
            r(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          i(t, e),
          u(t, [
            {
              key: 'render',
              value: function(e) {
                var t = e.name;
                return (0, f.h)('span', null, 'Hello, ', t, '!');
              }
            }
          ]),
          t
        );
      })((0, c.withComponent)((0, s.default)()))),
      (a.props = { name: c.props.string }),
      l);
    customElements.define('with-preact', d);
  },
  172: function(e, t, n) {
    'use strict';
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t ||
        ('object' !== (void 0 === t ? 'undefined' : a(t)) &&
          'function' != typeof t)
        ? e
        : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' +
            (void 0 === t ? 'undefined' : a(t))
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
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      l = n(80),
      u =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      c = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      p = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      };
    t.default = function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : HTMLElement;
      return (function(e) {
        function t() {
          return (
            r(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          i(t, e),
          c(t, [
            {
              key: 'renderer',
              value: function(e, t) {
                this._preactDom = (0, l.render)(
                  t(),
                  e,
                  this._preactDom || e.children[0]
                );
              }
            },
            {
              key: 'props',
              get: function() {
                return u(
                  {},
                  p(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'props',
                    this
                  ),
                  { children: (0, l.h)('slot', null) }
                );
              }
            }
          ]),
          t
        );
      })(e);
    };
  },
  173: function(e, t) {
    e.exports =
      "// @jsx h\n\nimport { props, withComponent } from 'skatejs';\nimport withPreact from '@skatejs/renderer-preact';\nimport { h } from 'preact';\n\nclass WithPreact extends withComponent(withPreact()) {\n  static props = {\n    name: props.string\n  };\n  render({ name }) {\n    return <span>Hello, {name}!</span>;\n  }\n}\n\ncustomElements.define('with-preact', WithPreact);\n";
  },
  174: function(e, t) {
    e.exports = '<with-preact name="World"></with-preact>\n';
  },
  80: function(e, t, n) {
    'use strict';
    function r() {}
    function o(e, t) {
      var n,
        o,
        i,
        a,
        l = B;
      for (a = arguments.length; a-- > 2; ) W.push(arguments[a]);
      for (
        t &&
        null != t.children &&
        (W.length || W.push(t.children), delete t.children);
        W.length;

      )
        if ((o = W.pop()) && void 0 !== o.pop)
          for (a = o.length; a--; ) W.push(o[a]);
        else
          'boolean' == typeof o && (o = null),
            (i = 'function' != typeof e) &&
              (null == o
                ? (o = '')
                : 'number' == typeof o
                  ? (o = String(o))
                  : 'string' != typeof o && (i = !1)),
            i && n ? (l[l.length - 1] += o) : l === B ? (l = [o]) : l.push(o),
            (n = i);
      var u = new r();
      return (
        (u.nodeName = e),
        (u.children = l),
        (u.attributes = null == t ? void 0 : t),
        (u.key = null == t ? void 0 : t.key),
        void 0 !== L.vnode && L.vnode(u),
        u
      );
    }
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function a(e, t) {
      return o(
        e.nodeName,
        i(i({}, e.attributes), t),
        arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
      );
    }
    function l(e) {
      !e._dirty &&
        (e._dirty = !0) &&
        1 == R.push(e) &&
        (L.debounceRendering || D)(u);
    }
    function u() {
      var e,
        t = R;
      for (R = []; (e = t.pop()); ) e._dirty && N(e);
    }
    function c(e, t, n) {
      return 'string' == typeof t || 'number' == typeof t
        ? void 0 !== e.splitText
        : 'string' == typeof t.nodeName
          ? !e._componentConstructor && p(e, t.nodeName)
          : n || e._componentConstructor === t.nodeName;
    }
    function p(e, t) {
      return (
        e.normalizedNodeName === t ||
        e.nodeName.toLowerCase() === t.toLowerCase()
      );
    }
    function s(e) {
      var t = i({}, e.attributes);
      t.children = e.children;
      var n = e.nodeName.defaultProps;
      if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
      return t;
    }
    function f(e, t) {
      var n = t
        ? document.createElementNS('http://www.w3.org/2000/svg', e)
        : document.createElement(e);
      return (n.normalizedNodeName = e), n;
    }
    function d(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function h(e, t, n, r, o) {
      if (('className' === t && (t = 'class'), 'key' === t));
      else if ('ref' === t) n && n(null), r && r(e);
      else if ('class' !== t || o)
        if ('style' === t) {
          if (
            ((r && 'string' != typeof r && 'string' != typeof n) ||
              (e.style.cssText = r || ''),
            r && 'object' === (void 0 === r ? 'undefined' : U(r)))
          ) {
            if ('string' != typeof n)
              for (var i in n) i in r || (e.style[i] = '');
            for (var i in r)
              e.style[i] =
                'number' == typeof r[i] && !1 === H.test(i)
                  ? r[i] + 'px'
                  : r[i];
          }
        } else if ('dangerouslySetInnerHTML' === t)
          r && (e.innerHTML = r.__html || '');
        else if ('o' == t[0] && 'n' == t[1]) {
          var a = t !== (t = t.replace(/Capture$/, ''));
          (t = t.toLowerCase().substring(2)),
            r
              ? n || e.addEventListener(t, y, a)
              : e.removeEventListener(t, y, a),
            ((e._listeners || (e._listeners = {}))[t] = r);
        } else if ('list' !== t && 'type' !== t && !o && t in e)
          m(e, t, null == r ? '' : r),
            (null != r && !1 !== r) || e.removeAttribute(t);
        else {
          var l = o && t !== (t = t.replace(/^xlink\:?/, ''));
          null == r || !1 === r
            ? l
              ? e.removeAttributeNS(
                  'http://www.w3.org/1999/xlink',
                  t.toLowerCase()
                )
              : e.removeAttribute(t)
            : 'function' != typeof r &&
              (l
                ? e.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    t.toLowerCase(),
                    r
                  )
                : e.setAttribute(t, r));
        }
      else e.className = r || '';
    }
    function m(e, t, n) {
      try {
        e[t] = n;
      } catch (e) {}
    }
    function y(e) {
      return this._listeners[e.type]((L.event && L.event(e)) || e);
    }
    function v() {
      for (var e; (e = V.pop()); )
        L.afterMount && L.afterMount(e),
          e.componentDidMount && e.componentDidMount();
    }
    function _(e, t, n, r, o, i) {
      z++ ||
        ((A = null != o && void 0 !== o.ownerSVGElement),
        ($ = null != e && !('__preactattr_' in e)));
      var a = b(e, t, n, r, i);
      return (
        o && a.parentNode !== o && o.appendChild(a),
        --z || (($ = !1), i || v()),
        a
      );
    }
    function b(e, t, n, r, o) {
      var i = e,
        a = A;
      if (
        ((null != t && 'boolean' != typeof t) || (t = ''),
        'string' == typeof t || 'number' == typeof t)
      )
        return (
          e && void 0 !== e.splitText && e.parentNode && (!e._component || o)
            ? e.nodeValue != t && (e.nodeValue = t)
            : ((i = document.createTextNode(t)),
              e && (e.parentNode && e.parentNode.replaceChild(i, e), w(e, !0))),
          (i.__preactattr_ = !0),
          i
        );
      var l = t.nodeName;
      if ('function' == typeof l) return S(e, t, n, r);
      if (
        ((A = 'svg' === l || ('foreignObject' !== l && A)),
        (l = String(l)),
        (!e || !p(e, l)) && ((i = f(l, A)), e))
      ) {
        for (; e.firstChild; ) i.appendChild(e.firstChild);
        e.parentNode && e.parentNode.replaceChild(i, e), w(e, !0);
      }
      var u = i.firstChild,
        c = i.__preactattr_,
        s = t.children;
      if (null == c) {
        c = i.__preactattr_ = {};
        for (var d = i.attributes, h = d.length; h--; )
          c[d[h].name] = d[h].value;
      }
      return (
        !$ &&
        s &&
        1 === s.length &&
        'string' == typeof s[0] &&
        null != u &&
        void 0 !== u.splitText &&
        null == u.nextSibling
          ? u.nodeValue != s[0] && (u.nodeValue = s[0])
          : ((s && s.length) || null != u) &&
            g(i, s, n, r, $ || null != c.dangerouslySetInnerHTML),
        C(i, t.attributes, c),
        (A = a),
        i
      );
    }
    function g(e, t, n, r, o) {
      var i,
        a,
        l,
        u,
        p,
        s = e.childNodes,
        f = [],
        h = {},
        m = 0,
        y = 0,
        v = s.length,
        _ = 0,
        g = t ? t.length : 0;
      if (0 !== v)
        for (var x = 0; x < v; x++) {
          var C = s[x],
            O = C.__preactattr_,
            P = g && O ? (C._component ? C._component.__key : O.key) : null;
          null != P
            ? (m++, (h[P] = C))
            : (O || (void 0 !== C.splitText ? !o || C.nodeValue.trim() : o)) &&
              (f[_++] = C);
        }
      if (0 !== g)
        for (var x = 0; x < g; x++) {
          (u = t[x]), (p = null);
          var P = u.key;
          if (null != P)
            m && void 0 !== h[P] && ((p = h[P]), (h[P] = void 0), m--);
          else if (!p && y < _)
            for (i = y; i < _; i++)
              if (void 0 !== f[i] && c((a = f[i]), u, o)) {
                (p = a), (f[i] = void 0), i === _ - 1 && _--, i === y && y++;
                break;
              }
          (p = b(p, u, n, r)),
            (l = s[x]),
            p &&
              p !== e &&
              p !== l &&
              (null == l
                ? e.appendChild(p)
                : p === l.nextSibling ? d(l) : e.insertBefore(p, l));
        }
      if (m) for (var x in h) void 0 !== h[x] && w(h[x], !1);
      for (; y <= _; ) void 0 !== (p = f[_--]) && w(p, !1);
    }
    function w(e, t) {
      var n = e._component;
      n
        ? E(n)
        : (null != e.__preactattr_ &&
            e.__preactattr_.ref &&
            e.__preactattr_.ref(null),
          (!1 !== t && null != e.__preactattr_) || d(e),
          x(e));
    }
    function x(e) {
      for (e = e.lastChild; e; ) {
        var t = e.previousSibling;
        w(e, !0), (e = t);
      }
    }
    function C(e, t, n) {
      var r;
      for (r in n)
        (t && null != t[r]) ||
          null == n[r] ||
          h(e, r, n[r], (n[r] = void 0), A);
      for (r in t)
        'children' === r ||
          'innerHTML' === r ||
          (r in n &&
            t[r] === ('value' === r || 'checked' === r ? e[r] : n[r])) ||
          h(e, r, n[r], (n[r] = t[r]), A);
    }
    function O(e) {
      var t = e.constructor.name;
      (I[t] || (I[t] = [])).push(e);
    }
    function P(e, t, n) {
      var r,
        o = I[e.name];
      if (
        (e.prototype && e.prototype.render
          ? ((r = new e(t, n)), T.call(r, t, n))
          : ((r = new T(t, n)), (r.constructor = e), (r.render = j)),
        o)
      )
        for (var i = o.length; i--; )
          if (o[i].constructor === e) {
            (r.nextBase = o[i].nextBase), o.splice(i, 1);
            break;
          }
      return r;
    }
    function j(e, t, n) {
      return this.constructor(e, n);
    }
    function k(e, t, n, r, o) {
      e._disable ||
        ((e._disable = !0),
        (e.__ref = t.ref) && delete t.ref,
        (e.__key = t.key) && delete t.key,
        !e.base || o
          ? e.componentWillMount && e.componentWillMount()
          : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r),
        r &&
          r !== e.context &&
          (e.prevContext || (e.prevContext = e.context), (e.context = r)),
        e.prevProps || (e.prevProps = e.props),
        (e.props = t),
        (e._disable = !1),
        0 !== n &&
          (1 !== n && !1 === L.syncComponentUpdates && e.base
            ? l(e)
            : N(e, 1, o)),
        e.__ref && e.__ref(e));
    }
    function N(e, t, n, r) {
      if (!e._disable) {
        var o,
          a,
          l,
          u = e.props,
          c = e.state,
          p = e.context,
          f = e.prevProps || u,
          d = e.prevState || c,
          h = e.prevContext || p,
          m = e.base,
          y = e.nextBase,
          b = m || y,
          g = e._component,
          x = !1;
        if (
          (m &&
            ((e.props = f),
            (e.state = d),
            (e.context = h),
            2 !== t &&
            e.shouldComponentUpdate &&
            !1 === e.shouldComponentUpdate(u, c, p)
              ? (x = !0)
              : e.componentWillUpdate && e.componentWillUpdate(u, c, p),
            (e.props = u),
            (e.state = c),
            (e.context = p)),
          (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
          (e._dirty = !1),
          !x)
        ) {
          (o = e.render(u, c, p)),
            e.getChildContext && (p = i(i({}, p), e.getChildContext()));
          var C,
            O,
            j = o && o.nodeName;
          if ('function' == typeof j) {
            var S = s(o);
            (a = g),
              a && a.constructor === j && S.key == a.__key
                ? k(a, S, 1, p, !1)
                : ((C = a),
                  (e._component = a = P(j, S, p)),
                  (a.nextBase = a.nextBase || y),
                  (a._parentComponent = e),
                  k(a, S, 0, p, !1),
                  N(a, 1, n, !0)),
              (O = a.base);
          } else
            (l = b),
              (C = g),
              C && (l = e._component = null),
              (b || 1 === t) &&
                (l && (l._component = null),
                (O = _(l, o, p, n || !m, b && b.parentNode, !0)));
          if (b && O !== b && a !== g) {
            var T = b.parentNode;
            T &&
              O !== T &&
              (T.replaceChild(O, b), C || ((b._component = null), w(b, !1)));
          }
          if ((C && E(C), (e.base = O), O && !r)) {
            for (var M = e, U = e; (U = U._parentComponent); ) (M = U).base = O;
            (O._component = M), (O._componentConstructor = M.constructor);
          }
        }
        if (
          (!m || n
            ? V.unshift(e)
            : x ||
              (e.componentDidUpdate && e.componentDidUpdate(f, d, h),
              L.afterUpdate && L.afterUpdate(e)),
          null != e._renderCallbacks)
        )
          for (; e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
        z || r || v();
      }
    }
    function S(e, t, n, r) {
      for (
        var o = e && e._component,
          i = o,
          a = e,
          l = o && e._componentConstructor === t.nodeName,
          u = l,
          c = s(t);
        o && !u && (o = o._parentComponent);

      )
        u = o.constructor === t.nodeName;
      return (
        o && u && (!r || o._component)
          ? (k(o, c, 3, n, r), (e = o.base))
          : (i && !l && (E(i), (e = a = null)),
            (o = P(t.nodeName, c, n)),
            e && !o.nextBase && ((o.nextBase = e), (a = null)),
            k(o, c, 1, n, r),
            (e = o.base),
            a && e !== a && ((a._component = null), w(a, !1))),
        e
      );
    }
    function E(e) {
      L.beforeUnmount && L.beforeUnmount(e);
      var t = e.base;
      (e._disable = !0),
        e.componentWillUnmount && e.componentWillUnmount(),
        (e.base = null);
      var n = e._component;
      n
        ? E(n)
        : t &&
          (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null),
          (e.nextBase = t),
          d(t),
          O(e),
          x(t)),
        e.__ref && e.__ref(null);
    }
    function T(e, t) {
      (this._dirty = !0),
        (this.context = t),
        (this.props = e),
        (this.state = this.state || {});
    }
    function M(e, t, n) {
      return _(n, e, {}, !1, t, !1);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var U =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      L = {},
      W = [],
      B = [],
      D =
        'function' == typeof Promise
          ? Promise.resolve().then.bind(Promise.resolve())
          : setTimeout,
      H = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      R = [],
      V = [],
      z = 0,
      A = !1,
      $ = !1,
      I = {};
    i(T.prototype, {
      setState: function(e, t) {
        var n = this.state;
        this.prevState || (this.prevState = i({}, n)),
          i(n, 'function' == typeof e ? e(n, this.props) : e),
          t && (this._renderCallbacks = this._renderCallbacks || []).push(t),
          l(this);
      },
      forceUpdate: function(e) {
        e && (this._renderCallbacks = this._renderCallbacks || []).push(e),
          N(this, 2);
      },
      render: function() {}
    });
    var F = {
      h: o,
      createElement: o,
      cloneElement: a,
      Component: T,
      render: M,
      rerender: u,
      options: L
    };
    (t.h = o),
      (t.createElement = o),
      (t.cloneElement = a),
      (t.Component = T),
      (t.render = M),
      (t.rerender = u),
      (t.options = L),
      (t.default = F);
  }
});
