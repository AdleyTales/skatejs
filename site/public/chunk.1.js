webpackJsonp([1], {
  112: function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e, t) {
        if ('function' == typeof e) return r('*', e);
        if ('function' == typeof t)
          for (var n = new a(e), o = 1; o < arguments.length; ++o)
            r.callbacks.push(n.middleware(arguments[o]));
        else
          'string' == typeof e
            ? r['string' == typeof t ? 'redirect' : 'show'](e, t)
            : r.start(e);
      }
      function o(e) {
        if (!e.handled) {
          var t;
          (t = y ? g + m.hash.replace('#!', '') : m.pathname + m.search),
            t !== e.canonicalPath &&
              (r.stop(), (e.handled = !1), (m.href = e.canonicalPath));
        }
      }
      function i(e) {
        return 'string' != typeof e
          ? e
          : v ? decodeURIComponent(e.replace(/\+/g, ' ')) : e;
      }
      function s(e, t) {
        '/' === e[0] && 0 !== e.indexOf(g) && (e = g + (y ? '#!' : '') + e);
        var n = e.indexOf('?');
        if (
          ((this.canonicalPath = e),
          (this.path = e.replace(g, '') || '/'),
          y && (this.path = this.path.replace('#!', '') || '/'),
          (this.title = document.title),
          (this.state = t || {}),
          (this.state.path = e),
          (this.querystring = ~n ? i(e.slice(n + 1)) : ''),
          (this.pathname = i(~n ? e.slice(0, n) : e)),
          (this.params = {}),
          (this.hash = ''),
          !y)
        ) {
          if (!~this.path.indexOf('#')) return;
          var r = this.path.split('#');
          (this.path = r[0]),
            (this.hash = i(r[1]) || ''),
            (this.querystring = this.querystring.split('#')[0]);
        }
      }
      function a(e, t) {
        (t = t || {}),
          (this.path = '*' === e ? '(.*)' : e),
          (this.method = 'GET'),
          (this.regexp = p(this.path, (this.keys = []), t));
      }
      function l(e) {
        if (
          1 === c(e) &&
          !(e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)
        ) {
          for (var n = e.path ? e.path[0] : e.target; n && 'A' !== n.nodeName; )
            n = n.parentNode;
          if (
            n &&
            'A' === n.nodeName &&
            !n.hasAttribute('download') &&
            'external' !== n.getAttribute('rel')
          ) {
            var o = n.getAttribute('href');
            if (
              (y || n.pathname !== m.pathname || (!n.hash && '#' !== o)) &&
              !(o && o.indexOf('mailto:') > -1) &&
              !n.target &&
              u(n.href)
            ) {
              var i = n.pathname + n.search + (n.hash || '');
              void 0 !== t &&
                i.match(/^\/[a-zA-Z]:\//) &&
                (i = i.replace(/^\/[a-zA-Z]:\//, '/'));
              var s = i;
              0 === i.indexOf(g) && (i = i.substr(g.length)),
                y && (i = i.replace('#!', '')),
                (g && s === i) || (e.preventDefault(), r.show(s));
            }
          }
        }
      }
      function c(e) {
        return (e = e || window.event), null === e.which ? e.button : e.which;
      }
      function u(e) {
        var t = m.protocol + '//' + m.hostname;
        return m.port && (t += ':' + m.port), e && 0 === e.indexOf(t);
      }
      var p = n(113);
      e.exports = r;
      var h,
        f,
        d =
          'undefined' != typeof document && document.ontouchstart
            ? 'touchstart'
            : 'click',
        m =
          'undefined' != typeof window &&
          (window.history.location || window.location),
        b = !0,
        v = !0,
        g = '',
        y = !1;
      (r.callbacks = []),
        (r.exits = []),
        (r.current = ''),
        (r.len = 0),
        (r.base = function(e) {
          if (0 === arguments.length) return g;
          g = e;
        }),
        (r.start = function(e) {
          if (
            ((e = e || {}),
            !h &&
              ((h = !0),
              !1 === e.dispatch && (b = !1),
              !1 === e.decodeURLComponents && (v = !1),
              !1 !== e.popstate && window.addEventListener('popstate', k, !1),
              !1 !== e.click && document.addEventListener(d, l, !1),
              !0 === e.hashbang && (y = !0),
              b))
          ) {
            var t =
              y && ~m.hash.indexOf('#!')
                ? m.hash.substr(2) + m.search
                : m.pathname + m.search + m.hash;
            r.replace(t, null, !0, b);
          }
        }),
        (r.stop = function() {
          h &&
            ((r.current = ''),
            (r.len = 0),
            (h = !1),
            document.removeEventListener(d, l, !1),
            window.removeEventListener('popstate', k, !1));
        }),
        (r.show = function(e, t, n, o) {
          var i = new s(e, t);
          return (
            (r.current = i.path),
            !1 !== n && r.dispatch(i),
            !1 !== i.handled && !1 !== o && i.pushState(),
            i
          );
        }),
        (r.back = function(e, t) {
          r.len > 0
            ? (history.back(), r.len--)
            : e
              ? setTimeout(function() {
                  r.show(e, t);
                })
              : setTimeout(function() {
                  r.show(g, t);
                });
        }),
        (r.redirect = function(e, t) {
          'string' == typeof e &&
            'string' == typeof t &&
            r(e, function(e) {
              setTimeout(function() {
                r.replace(t);
              }, 0);
            }),
            'string' == typeof e &&
              void 0 === t &&
              setTimeout(function() {
                r.replace(e);
              }, 0);
        }),
        (r.replace = function(e, t, n, o) {
          var i = new s(e, t);
          return (
            (r.current = i.path),
            (i.init = n),
            i.save(),
            !1 !== o && r.dispatch(i),
            i
          );
        }),
        (r.dispatch = function(e) {
          function t() {
            var e = r.exits[a++];
            if (!e) return n();
            e(i, t);
          }
          function n() {
            var t = r.callbacks[s++];
            return e.path !== r.current
              ? void (e.handled = !1)
              : t ? void t(e, n) : o(e);
          }
          var i = f,
            s = 0,
            a = 0;
          (f = e), i ? t() : n();
        }),
        (r.exit = function(e, t) {
          if ('function' == typeof e) return r.exit('*', e);
          for (var n = new a(e), o = 1; o < arguments.length; ++o)
            r.exits.push(n.middleware(arguments[o]));
        }),
        (r.Context = s),
        (s.prototype.pushState = function() {
          r.len++,
            history.pushState(
              this.state,
              this.title,
              y && '/' !== this.path ? '#!' + this.path : this.canonicalPath
            );
        }),
        (s.prototype.save = function() {
          history.replaceState(
            this.state,
            this.title,
            y && '/' !== this.path ? '#!' + this.path : this.canonicalPath
          );
        }),
        (r.Route = a),
        (a.prototype.middleware = function(e) {
          var t = this;
          return function(n, r) {
            if (t.match(n.path, n.params)) return e(n, r);
            r();
          };
        }),
        (a.prototype.match = function(e, t) {
          var n = this.keys,
            r = e.indexOf('?'),
            o = ~r ? e.slice(0, r) : e,
            s = this.regexp.exec(decodeURIComponent(o));
          if (!s) return !1;
          for (var a = 1, l = s.length; a < l; ++a) {
            var c = n[a - 1],
              u = i(s[a]);
            (void 0 === u && hasOwnProperty.call(t, c.name)) || (t[c.name] = u);
          }
          return !0;
        });
      var k = (function() {
        var e = !1;
        if ('undefined' != typeof window)
          return (
            'complete' === document.readyState
              ? (e = !0)
              : window.addEventListener('load', function() {
                  setTimeout(function() {
                    e = !0;
                  }, 0);
                }),
            function(t) {
              if (e)
                if (t.state) {
                  var n = t.state.path;
                  r.replace(n, t.state);
                } else r.show(m.pathname + m.hash, void 0, void 0, !1);
            }
          );
      })();
      r.sameOrigin = u;
    }.call(t, n(56)));
  },
  113: function(e, t, n) {
    'use strict';
    function r(e) {
      for (var t, n = [], r = 0, o = 0, i = ''; null != (t = v.exec(e)); ) {
        var s = t[0],
          l = t[1],
          c = t.index;
        if (((i += e.slice(o, c)), (o = c + s.length), l)) i += l[1];
        else {
          i && (n.push(i), (i = ''));
          var u = t[2],
            p = t[3],
            h = t[4],
            f = t[5],
            d = t[6],
            m = t[7],
            b = '+' === d || '*' === d,
            g = '?' === d || '*' === d,
            y = u || '/',
            k = h || f || (m ? '.*' : '[^' + y + ']+?');
          n.push({
            name: p || r++,
            prefix: u || '',
            delimiter: y,
            optional: g,
            repeat: b,
            pattern: a(k)
          });
        }
      }
      return o < e.length && (i += e.substr(o)), i && n.push(i), n;
    }
    function o(e) {
      return i(r(e));
    }
    function i(e) {
      for (var t = new Array(e.length), n = 0; n < e.length; n++)
        'object' === m(e[n]) && (t[n] = new RegExp('^' + e[n].pattern + '$'));
      return function(n) {
        for (var r = '', o = n || {}, i = 0; i < e.length; i++) {
          var s = e[i];
          if ('string' != typeof s) {
            var a,
              l = o[s.name];
            if (null == l) {
              if (s.optional) continue;
              throw new TypeError('Expected "' + s.name + '" to be defined');
            }
            if (b(l)) {
              if (!s.repeat)
                throw new TypeError(
                  'Expected "' +
                    s.name +
                    '" to not repeat, but received "' +
                    l +
                    '"'
                );
              if (0 === l.length) {
                if (s.optional) continue;
                throw new TypeError(
                  'Expected "' + s.name + '" to not be empty'
                );
              }
              for (var c = 0; c < l.length; c++) {
                if (((a = encodeURIComponent(l[c])), !t[i].test(a)))
                  throw new TypeError(
                    'Expected all "' +
                      s.name +
                      '" to match "' +
                      s.pattern +
                      '", but received "' +
                      a +
                      '"'
                  );
                r += (0 === c ? s.prefix : s.delimiter) + a;
              }
            } else {
              if (((a = encodeURIComponent(l)), !t[i].test(a)))
                throw new TypeError(
                  'Expected "' +
                    s.name +
                    '" to match "' +
                    s.pattern +
                    '", but received "' +
                    a +
                    '"'
                );
              r += s.prefix + a;
            }
          } else r += s;
        }
        return r;
      };
    }
    function s(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1');
    }
    function a(e) {
      return e.replace(/([=!:$\/()])/g, '\\$1');
    }
    function l(e, t) {
      return (e.keys = t), e;
    }
    function c(e) {
      return e.sensitive ? '' : 'i';
    }
    function u(e, t) {
      var n = e.source.match(/\((?!\?)/g);
      if (n)
        for (var r = 0; r < n.length; r++)
          t.push({
            name: r,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            pattern: null
          });
      return l(e, t);
    }
    function p(e, t, n) {
      for (var r = [], o = 0; o < e.length; o++) r.push(d(e[o], t, n).source);
      return l(new RegExp('(?:' + r.join('|') + ')', c(n)), t);
    }
    function h(e, t, n) {
      for (var o = r(e), i = f(o, n), s = 0; s < o.length; s++)
        'string' != typeof o[s] && t.push(o[s]);
      return l(i, t);
    }
    function f(e, t) {
      t = t || {};
      for (
        var n = t.strict,
          r = !1 !== t.end,
          o = '',
          i = e[e.length - 1],
          a = 'string' == typeof i && /\/$/.test(i),
          l = 0;
        l < e.length;
        l++
      ) {
        var u = e[l];
        if ('string' == typeof u) o += s(u);
        else {
          var p = s(u.prefix),
            h = u.pattern;
          u.repeat && (h += '(?:' + p + h + ')*'),
            (h = u.optional
              ? p ? '(?:' + p + '(' + h + '))?' : '(' + h + ')?'
              : p + '(' + h + ')'),
            (o += h);
        }
      }
      return (
        n || (o = (a ? o.slice(0, -2) : o) + '(?:\\/(?=$))?'),
        (o += r ? '$' : n && a ? '' : '(?=\\/|$)'),
        new RegExp('^' + o, c(t))
      );
    }
    function d(e, t, n) {
      return (
        (t = t || []),
        b(t) ? n || (n = {}) : ((n = t), (t = [])),
        e instanceof RegExp ? u(e, t, n) : b(e) ? p(e, t, n) : h(e, t, n)
      );
    }
    var m =
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
      b = n(114);
    (e.exports = d),
      (e.exports.parse = r),
      (e.exports.compile = o),
      (e.exports.tokensToFunction = i),
      (e.exports.tokensToRegExp = f);
    var v = new RegExp(
      [
        '(\\\\.)',
        '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
      ].join('|'),
      'g'
    );
  },
  114: function(e, t, n) {
    'use strict';
    e.exports =
      Array.isArray ||
      function(e) {
        return '[object Array]' == Object.prototype.toString.call(e);
      };
  },
  115: function(e, t, n) {
    'use strict';
    (function(e) {
      var n,
        r,
        o,
        i =
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
              }; /*!
 * @skatejs/val v0.3.1 - https://github.com/skatejs/val
 * MIT Licensed
 */
      !(function(s, a) {
        if ('object' === i(t) && 'object' === i(e)) e.exports = a();
        else {
          (r = []),
            (n = a),
            void 0 !== (o = 'function' == typeof n ? n.apply(t, r) : n) &&
              (e.exports = o);
        }
      })(0, function() {
        return (function(e) {
          function t(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
          }
          var n = {};
          return (
            (t.m = e),
            (t.c = n),
            (t.i = function(e) {
              return e;
            }),
            (t.d = function(e, n, r) {
              t.o(e, n) ||
                Object.defineProperty(e, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: r
                });
            }),
            (t.n = function(e) {
              var n =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return t.d(n, 'a', n), n;
            }),
            (t.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ''),
            t((t.s = 1))
          );
        })([
          function(e, t, n) {
            function r(e, t) {
              var n = {};
              for (var r in e)
                t.indexOf(r) >= 0 ||
                  (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
              return n;
            }
            function o(e, t) {
              t &&
                Object.keys(t).forEach(function(n) {
                  var r = t[n];
                  null == r ? e.removeAttribute(n) : e.setAttribute(n, r);
                });
            }
            function i(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = b.get(e) || {};
              b.set(e, t),
                Object.keys(n).forEach(function(r) {
                  n[r] && n[r] !== t[r] && e.removeEventListener(r, n[r]);
                }),
                Object.keys(t).forEach(function(r) {
                  t[r] !== n[r] && e.addEventListener(r, t[r]);
                });
            }
            function s(e, t) {
              Object.keys(t || {}).forEach(function(n) {
                e[n] = t[n];
              });
            }
            function a(e, t) {
              t && t(e);
            }
            function l(e) {
              var t = e || {},
                n = t.attrs,
                o = t.events,
                i = t.ref,
                s = t.key;
              return {
                ref: c({
                  attrs: n,
                  events: o,
                  props: r(t, ['attrs', 'events', 'ref', 'key']),
                  ref: i
                }),
                key: s
              };
            }
            function c(e) {
              var t = e.attrs,
                n = e.events,
                r = e.props,
                l = e.ref;
              return function(e) {
                e && (o(e, t), i(e, n), s(e, r)), a(e, l);
              };
            }
            function u(e) {
              return m.get(e) || e;
            }
            function p(e, t) {
              var n = t.ref,
                o = (r(t, ['ref']),
                'function' == typeof e ? new e() : document.createElement(e));
              n && n(o);
              for (
                var i = arguments.length, s = Array(i > 2 ? i - 2 : 0), a = 2;
                a < i;
                a++
              )
                s[a - 2] = arguments[a];
              return (
                s.forEach(function(e) {
                  return o.appendChild(
                    'string' == typeof e ? document.createTextNode(e) : e
                  );
                }),
                o
              );
            }
            function h() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p;
              return function(t, n) {
                (t = u(t)), (n = l(n));
                for (
                  var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), i = 2;
                  i < r;
                  i++
                )
                  o[i - 2] = arguments[i];
                return e.apply(void 0, [t, n].concat(o));
              };
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = h),
              n.d(t, 'h', function() {
                return g;
              });
            var f = window,
              d = f.customElements,
              m = new Map(),
              b = new WeakMap();
            if (d) {
              var v = d.define;
              d.define = function(e, t) {
                return m.set(t, e), v.call(d, e, t);
              };
            }
            var g = h();
          },
          function(e, t, n) {
            e.exports = n(0);
          }
        ]);
      });
    }.call(t, n(116)(e)));
  },
  116: function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  117: function(e, t, n) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.withLoadable = void 0);
    var s = (function() {
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
      a = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var s = o.get;
        if (void 0 !== s) return s.call(r);
      },
      l = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(['', ''], ['', '']),
      c = n(7),
      u = n(76);
    t.withLoadable = function(e) {
      var t, n;
      return (0, c.define)(
        ((n = t = (function(t) {
          function n() {
            var t, i, s, a;
            r(this, n);
            for (var l = arguments.length, c = Array(l), u = 0; u < l; u++)
              c[u] = arguments[u];
            return (
              (i = s = o(
                this,
                (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                  t,
                  [this].concat(c)
                )
              )),
              (s.props = e),
              (a = i),
              o(s, a)
            );
          }
          return (
            i(n, t),
            s(n, [
              {
                key: 'connecting',
                value: function() {
                  var e = this,
                    t = this.loading;
                  t && (this.state = { loaded: t }),
                    this.loader &&
                      this.loader().then(function(t) {
                        var n = t.default || t;
                        n && (e.state = { loaded: n });
                      });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.loaded;
                  return this.$(l, 'function' == typeof e ? new e() : e);
                }
              },
              {
                key: 'renderRoot',
                get: function() {
                  return e.useShadowRoot
                    ? a(
                        n.prototype.__proto__ ||
                          Object.getPrototypeOf(n.prototype),
                        'renderRoot',
                        this
                      )
                    : this;
                }
              }
            ]),
            n
          );
        })(u.Component)),
        (t.is = e.is),
        (t.props = {
          format: e.any,
          loader: e.any,
          loading: e.any,
          useShadowRoot: e.boolean
        }),
        n)
      );
    };
  },
  118: function(e, t, n) {
    e.exports = n.p + 'f769bd425c803618653a2fa1c1802dde.svg';
  },
  119: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(37),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = (0, o.default)({
      '* a': { color: '#F2567C', textDecoration: 'none' },
      '* blockquote': {
        backgroundColor: '#DCE4CA',
        borderLeft: '3px solid #c6d3a8',
        fontSize: 'smaller',
        fontStyle: 'italic',
        margin: '20px 0',
        padding: '10px 15px'
      },
      '* blockquote code': {
        backgroundColor: 'transparent',
        display: 'inline',
        padding: 0
      },
      '* blockquote p': { margin: 0 },
      '* code': {
        backgroundColor: '#dce4c9',
        display: 'inline-block',
        fontFamily: 'monaco, Consolas, "Lucida Console", monospace',
        fontSize: '.8em',
        padding: '0 8px'
      },
      '* h1': { fontSize: '2.5em', fontWeight: 'normal' },
      '* h2': {
        fontSize: '1.8em',
        fontWeight: 'lighter',
        lineHeight: '1.2em',
        margin: '60px 0 30px 0'
      },
      '* h3': {
        fontSize: '1.4em',
        fontWeight: 'lighter',
        margin: '50px 0 25px 0'
      },
      '* h4': {
        fontSize: '1.3em',
        fontWeight: 'lighter',
        margin: '40px 0 20px 0'
      },
      '* .logo': { display: 'block', margin: '0 auto' }
    });
  },
  120: function(e, t, n) {
    e.exports = n.p + 'b45abae964ea092c4fbf91285397c357.png';
  },
  121: function(e, t, n) {
    e.exports = n.p + 'f0c227dd973557381886bf54b0bfabaa.png';
  },
  122: function(e, t, n) {
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
    function s(e, t) {
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
    var a,
      l,
      c,
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
      p = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      ',
          '\n      <div className="',
          '">\n        <h1 className="',
          '">SkateJS</h1>\n        <h2 className="',
          '">\n          Effortless custom elements for modern view libraries.\n        </h2>\n      </div>\n      <x-code code="',
          '" className="',
          '"></x-code>\n      <x-hr></x-hr>\n      <x-layout>\n        <x-marked renderers="',
          '" src="',
          '"></x-marked>\n      </x-layout>\n    '
        ],
        [
          '\n      ',
          '\n      <div className="',
          '">\n        <h1 className="',
          '">SkateJS</h1>\n        <h2 className="',
          '">\n          Effortless custom elements for modern view libraries.\n        </h2>\n      </div>\n      <x-code code="',
          '" className="',
          '"></x-code>\n      <x-hr></x-hr>\n      <x-layout>\n        <x-marked renderers="',
          '" src="',
          '"></x-marked>\n      </x-layout>\n    '
        ]
      );
    n(29), n(26), n(30), n(34);
    var h = n(7),
      f = n(37),
      d = r(f),
      m = n(22),
      b = n(129),
      v = r(b),
      g = n(130),
      y = r(g),
      k = {
        heading: function(e, t) {
          return 1 === t ? '' : '<h' + t + '>' + e + '</h' + t + '>';
        }
      },
      w =
        (0, h.define)(
          ((c = l = (function(e) {
            function t() {
              var e, n, r, s;
              o(this, t);
              for (var a = arguments.length, l = Array(a), c = 0; c < a; c++)
                l[c] = arguments[c];
              return (
                (n = r = i(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(l)
                  )
                )),
                (r.css = {
                  code: (0, d.default)({
                    borderRadius: '3px',
                    boxShadow: '0 5px 50px 0 rgba(0, 0, 0, .5)',
                    margin: '0 auto',
                    overflow: 'hidden',
                    maxWidth: '600px'
                  }),
                  hero: (0, d.default)({
                    margin: '60px 0',
                    textAlign: 'center'
                  }),
                  subtitle: (0, d.default)({
                    fontSize: '1.4em',
                    marginTop: '30px'
                  }),
                  title: (0, d.default)({ marginBottom: '30px' })
                }),
                (s = n),
                i(r, s)
              );
            }
            return (
              s(t, e),
              u(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      p,
                      this.$style,
                      this.css.hero,
                      this.css.title,
                      this.css.subtitle,
                      v.default,
                      this.css.code,
                      k,
                      y.default
                    );
                  }
                }
              ]),
              t
            );
          })(m.Component)),
          (l.is = 'x-pages-index'),
          (a = c))
        ) || a;
    t.default = w;
  },
  123: function(e, t, n) {
    'use strict';
    function r(e, t) {
      return Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      );
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
    function s(e, t) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tabs = void 0);
    var a,
      l,
      c,
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
      p = r(
        [
          '\n      ',
          '\n      ',
          '\n      <div className="',
          '">\n        <ul class="tabs">\n          ',
          '\n        </ul>\n        ',
          '\n      </div>\n    '
        ],
        [
          '\n      ',
          '\n      ',
          '\n      <div className="',
          '">\n        <ul class="tabs">\n          ',
          '\n        </ul>\n        ',
          '\n      </div>\n    '
        ]
      ),
      h = r(
        [
          '\n                    <li class="tab">\n                      <a\n                        className="',
          '"\n                        href="#"\n                        on-click="',
          '"\n                      >\n                        ',
          '\n                      </a>\n                    </li>\n                  '
        ],
        [
          '\n                    <li class="tab">\n                      <a\n                        className="',
          '"\n                        href="#"\n                        on-click="',
          '"\n                      >\n                        ',
          '\n                      </a>\n                    </li>\n                  '
        ]
      ),
      f = r(
        [
          '\n                  <div className="pane ',
          '">\n                    ',
          '\n                  </div>\n                '
        ],
        [
          '\n                  <div className="pane ',
          '">\n                    ',
          '\n                  </div>\n                '
        ]
      ),
      d = n(37),
      m = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(d),
      b = n(7),
      v = n(22),
      g = (0, m.default)({
        pane: { display: 'none' },
        '.pane.selected': { display: 'block' },
        tab: { margin: 0, overflow: 'hidden', padding: 0 },
        tabs: { display: 'flex', listStyle: 'none', margin: 0, padding: 0 },
        '.tabs a': {
          borderBottom: '3px solid transparent',
          color: '#333',
          display: 'inline-block',
          padding: '15px 20px 18px 20px',
          position: 'relative',
          textDecoration: 'none',
          top: '3px'
        },
        '.tabs a.selected, .tabs a:hover': {
          borderBottom: '3px solid #F2567C',
          color: '#eee'
        }
      });
    t.Tabs =
      (0, b.define)(
        ((c = l = (function(e) {
          function t() {
            var e, n, r, s;
            o(this, t);
            for (var a = arguments.length, l = Array(a), c = 0; c < a; c++)
              l[c] = arguments[c];
            return (
              (n = r = i(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(l)
                )
              )),
              (r.state = { selected: 0 }),
              (s = n),
              i(r, s)
            );
          }
          return (
            s(t, e),
            u(t, [
              {
                key: 'connecting',
                value: function() {
                  this.style.display = 'block';
                }
              },
              {
                key: 'onClick',
                value: function(e, t) {
                  t.preventDefault(), (this.state = { selected: e });
                }
              },
              {
                key: 'render',
                value: function(e) {
                  var t = this,
                    n = e.css,
                    r = e.items,
                    o = e.onClick,
                    i = e.state,
                    s = i.selected;
                  return this.$(
                    p,
                    this.$style,
                    (0, v.style)(n, (0, d.value)(g)),
                    g,
                    r.map(function(e, n) {
                      var r = e.name;
                      return e.pane
                        ? t.$(h, n === s ? 'selected' : '', o.bind(t, n), r)
                        : '';
                    }),
                    r.map(function(e, n) {
                      var r = e.pane;
                      return r ? t.$(f, n === s ? 'selected' : '', r) : '';
                    })
                  );
                }
              }
            ]),
            t
          );
        })(v.Component)),
        (l.is = 'x-tabs'),
        (l.props = {
          css: b.props.string,
          items: b.props.array,
          selected: b.props.number
        }),
        (a = c))
      ) || a;
  },
  126: function(e, t, n) {
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
        ('object' !== (void 0 === t ? 'undefined' : c(t)) &&
          'function' != typeof t)
        ? e
        : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' +
            (void 0 === t ? 'undefined' : c(t))
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
    function s(e) {
      (e = e.replace(/"/g, '&quot;')), (e = e.split('\n'));
      var t = e[1] ? e[1].match(/^\s*/)[0].length : 0;
      return (
        (e = e.map(function(e) {
          return e.substring(t);
        })),
        e.join('\n')
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a,
      l,
      c =
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
      u = n(7),
      p = n(127),
      h = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(p),
      f = (function() {
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
      })();
    t.default = (0, u.define)(
      ((l = a = (function(e) {
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
          f(t, [
            {
              key: 'render',
              value: function(e) {
                var t = e.css,
                  n = e.renderers,
                  r = e.src,
                  o = new h.default.Renderer();
                return (
                  Object.assign(o, n),
                  '\n      <style>' +
                    t +
                    '></style>\n      ' +
                    (0, h.default)(s(r), { renderer: o }) +
                    '\n    '
                );
              }
            }
          ]),
          t
        );
      })((0, u.withComponent)())),
      (a.is = 'sk-marked'),
      (a.props = {
        css: u.props.string,
        renderers: u.props.object,
        src: u.props.string
      }),
      l)
    );
  },
  127: function(e, t, n) {
    'use strict';
    (function(r) {
      var o,
        i =
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
              };
      (function() {
        function r(e) {
          (this.tokens = []),
            (this.tokens.links = {}),
            (this.options = e || d.defaults),
            (this.rules = m.normal),
            this.options.gfm &&
              (this.options.tables
                ? (this.rules = m.tables)
                : (this.rules = m.gfm));
        }
        function s(e, t) {
          if (
            ((this.options = t || d.defaults),
            (this.links = e),
            (this.rules = b.normal),
            (this.renderer = this.options.renderer || new a()),
            (this.renderer.options = this.options),
            !this.links)
          )
            throw new Error('Tokens array requires a `links` property.');
          this.options.gfm
            ? this.options.breaks
              ? (this.rules = b.breaks)
              : (this.rules = b.gfm)
            : this.options.pedantic && (this.rules = b.pedantic);
        }
        function a(e) {
          this.options = e || {};
        }
        function l(e) {
          (this.tokens = []),
            (this.token = null),
            (this.options = e || d.defaults),
            (this.options.renderer = this.options.renderer || new a()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options);
        }
        function c(e, t) {
          return e
            .replace(t ? /&/g : /&(?!#?\w+;)/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        }
        function u(e) {
          return e.replace(
            /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,
            function(e, t) {
              return (
                (t = t.toLowerCase()),
                'colon' === t
                  ? ':'
                  : '#' === t.charAt(0)
                    ? 'x' === t.charAt(1)
                      ? String.fromCharCode(parseInt(t.substring(2), 16))
                      : String.fromCharCode(+t.substring(1))
                    : ''
              );
            }
          );
        }
        function p(e, t) {
          return (
            (e = e.source),
            (t = t || ''),
            function n(r, o) {
              return r
                ? ((o = o.source || o),
                  (o = o.replace(/(^|[^\[])\^/g, '$1')),
                  (e = e.replace(r, o)),
                  n)
                : new RegExp(e, t);
            }
          );
        }
        function h() {}
        function f(e) {
          for (var t, n, r = 1; r < arguments.length; r++) {
            t = arguments[r];
            for (n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }
        function d(e, t, n) {
          if (n || 'function' == typeof t) {
            n || ((n = t), (t = null)), (t = f({}, d.defaults, t || {}));
            var o,
              i,
              s = t.highlight,
              a = 0;
            try {
              o = r.lex(e, t);
            } catch (e) {
              return n(e);
            }
            i = o.length;
            var u = function(e) {
              if (e) return (t.highlight = s), n(e);
              var r;
              try {
                r = l.parse(o, t);
              } catch (t) {
                e = t;
              }
              return (t.highlight = s), e ? n(e) : n(null, r);
            };
            if (!s || s.length < 3) return u();
            if ((delete t.highlight, !i)) return u();
            for (; a < o.length; a++)
              !(function(e) {
                'code' !== e.type
                  ? --i || u()
                  : s(e.text, e.lang, function(t, n) {
                      return t
                        ? u(t)
                        : null == n || n === e.text
                          ? --i || u()
                          : ((e.text = n), (e.escaped = !0), void (--i || u()));
                    });
              })(o[a]);
          } else
            try {
              return t && (t = f({}, d.defaults, t)), l.parse(r.lex(e, t), t);
            } catch (e) {
              if (
                ((e.message +=
                  '\nPlease report this to https://github.com/chjj/marked.'),
                (t || d.defaults).silent)
              )
                return (
                  '<p>An error occured:</p><pre>' +
                  c(e.message + '', !0) +
                  '</pre>'
                );
              throw e;
            }
        }
        var m = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences: h,
          hr: /^( *[-*_]){3,} *(?:\n+|$)/,
          heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
          nptable: h,
          lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
          blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
          list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
          table: h,
          paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
          text: /^[^\n]+/
        };
        (m.bullet = /(?:[*+-]|\d+\.)/),
          (m.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/),
          (m.item = p(m.item, 'gm')(/bull/g, m.bullet)()),
          (m.list = p(m.list)(/bull/g, m.bullet)(
            'hr',
            '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))'
          )('def', '\\n+(?=' + m.def.source + ')')()),
          (m.blockquote = p(m.blockquote)('def', m.def)()),
          (m._tag =
            '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b'),
          (m.html = p(m.html)('comment', /<!--[\s\S]*?-->/)(
            'closed',
            /<(tag)[\s\S]+?<\/\1>/
          )('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, m._tag)()),
          (m.paragraph = p(m.paragraph)('hr', m.hr)('heading', m.heading)(
            'lheading',
            m.lheading
          )('blockquote', m.blockquote)('tag', '<' + m._tag)('def', m.def)()),
          (m.normal = f({}, m)),
          (m.gfm = f({}, m.normal, {
            fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
            paragraph: /^/,
            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
          })),
          (m.gfm.paragraph = p(m.paragraph)(
            '(?!',
            '(?!' +
              m.gfm.fences.source.replace('\\1', '\\2') +
              '|' +
              m.list.source.replace('\\1', '\\3') +
              '|'
          )()),
          (m.tables = f({}, m.gfm, {
            nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
          })),
          (r.rules = m),
          (r.lex = function(e, t) {
            return new r(t).lex(e);
          }),
          (r.prototype.lex = function(e) {
            return (
              (e = e
                .replace(/\r\n|\r/g, '\n')
                .replace(/\t/g, '    ')
                .replace(/\u00a0/g, ' ')
                .replace(/\u2424/g, '\n')),
              this.token(e, !0)
            );
          }),
          (r.prototype.token = function(e, t, n) {
            for (
              var r, o, i, s, a, l, c, u, p, e = e.replace(/^ +$/gm, '');
              e;

            )
              if (
                ((i = this.rules.newline.exec(e)) &&
                  ((e = e.substring(i[0].length)),
                  i[0].length > 1 && this.tokens.push({ type: 'space' })),
                (i = this.rules.code.exec(e)))
              )
                (e = e.substring(i[0].length)),
                  (i = i[0].replace(/^ {4}/gm, '')),
                  this.tokens.push({
                    type: 'code',
                    text: this.options.pedantic ? i : i.replace(/\n+$/, '')
                  });
              else if ((i = this.rules.fences.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: 'code',
                    lang: i[2],
                    text: i[3] || ''
                  });
              else if ((i = this.rules.heading.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: 'heading',
                    depth: i[1].length,
                    text: i[2]
                  });
              else if (t && (i = this.rules.nptable.exec(e))) {
                for (
                  e = e.substring(i[0].length),
                    l = {
                      type: 'table',
                      header: i[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                      align: i[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                      cells: i[3].replace(/\n$/, '').split('\n')
                    },
                    u = 0;
                  u < l.align.length;
                  u++
                )
                  /^ *-+: *$/.test(l.align[u])
                    ? (l.align[u] = 'right')
                    : /^ *:-+: *$/.test(l.align[u])
                      ? (l.align[u] = 'center')
                      : /^ *:-+ *$/.test(l.align[u])
                        ? (l.align[u] = 'left')
                        : (l.align[u] = null);
                for (u = 0; u < l.cells.length; u++)
                  l.cells[u] = l.cells[u].split(/ *\| */);
                this.tokens.push(l);
              } else if ((i = this.rules.lheading.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: 'heading',
                    depth: '=' === i[2] ? 1 : 2,
                    text: i[1]
                  });
              else if ((i = this.rules.hr.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({ type: 'hr' });
              else if ((i = this.rules.blockquote.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({ type: 'blockquote_start' }),
                  (i = i[0].replace(/^ *> ?/gm, '')),
                  this.token(i, t, !0),
                  this.tokens.push({ type: 'blockquote_end' });
              else if ((i = this.rules.list.exec(e))) {
                for (
                  e = e.substring(i[0].length),
                    s = i[2],
                    this.tokens.push({
                      type: 'list_start',
                      ordered: s.length > 1
                    }),
                    i = i[0].match(this.rules.item),
                    r = !1,
                    p = i.length,
                    u = 0;
                  u < p;
                  u++
                )
                  (l = i[u]),
                    (c = l.length),
                    (l = l.replace(/^ *([*+-]|\d+\.) +/, '')),
                    ~l.indexOf('\n ') &&
                      ((c -= l.length),
                      (l = this.options.pedantic
                        ? l.replace(/^ {1,4}/gm, '')
                        : l.replace(new RegExp('^ {1,' + c + '}', 'gm'), ''))),
                    this.options.smartLists &&
                      u !== p - 1 &&
                      ((a = m.bullet.exec(i[u + 1])[0]),
                      s === a ||
                        (s.length > 1 && a.length > 1) ||
                        ((e = i.slice(u + 1).join('\n') + e), (u = p - 1))),
                    (o = r || /\n\n(?!\s*$)/.test(l)),
                    u !== p - 1 &&
                      ((r = '\n' === l.charAt(l.length - 1)), o || (o = r)),
                    this.tokens.push({
                      type: o ? 'loose_item_start' : 'list_item_start'
                    }),
                    this.token(l, !1, n),
                    this.tokens.push({ type: 'list_item_end' });
                this.tokens.push({ type: 'list_end' });
              } else if ((i = this.rules.html.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: this.options.sanitize ? 'paragraph' : 'html',
                    pre:
                      !this.options.sanitizer &&
                      ('pre' === i[1] || 'script' === i[1] || 'style' === i[1]),
                    text: i[0]
                  });
              else if (!n && t && (i = this.rules.def.exec(e)))
                (e = e.substring(i[0].length)),
                  (this.tokens.links[i[1].toLowerCase()] = {
                    href: i[2],
                    title: i[3]
                  });
              else if (t && (i = this.rules.table.exec(e))) {
                for (
                  e = e.substring(i[0].length),
                    l = {
                      type: 'table',
                      header: i[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                      align: i[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                      cells: i[3].replace(/(?: *\| *)?\n$/, '').split('\n')
                    },
                    u = 0;
                  u < l.align.length;
                  u++
                )
                  /^ *-+: *$/.test(l.align[u])
                    ? (l.align[u] = 'right')
                    : /^ *:-+: *$/.test(l.align[u])
                      ? (l.align[u] = 'center')
                      : /^ *:-+ *$/.test(l.align[u])
                        ? (l.align[u] = 'left')
                        : (l.align[u] = null);
                for (u = 0; u < l.cells.length; u++)
                  l.cells[u] = l.cells[u]
                    .replace(/^ *\| *| *\| *$/g, '')
                    .split(/ *\| */);
                this.tokens.push(l);
              } else if (t && (i = this.rules.paragraph.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: 'paragraph',
                    text:
                      '\n' === i[1].charAt(i[1].length - 1)
                        ? i[1].slice(0, -1)
                        : i[1]
                  });
              else if ((i = this.rules.text.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({ type: 'text', text: i[0] });
              else if (e)
                throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
            return this.tokens;
          });
        var b = {
          escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
          autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
          url: h,
          tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
          link: /^!?\[(inside)\]\(href\)/,
          reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
          nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
          strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
          em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
          code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
          br: /^ {2,}\n(?!\s*$)/,
          del: h,
          text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
        };
        (b._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/),
          (b._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/),
          (b.link = p(b.link)('inside', b._inside)('href', b._href)()),
          (b.reflink = p(b.reflink)('inside', b._inside)()),
          (b.normal = f({}, b)),
          (b.pedantic = f({}, b.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
          })),
          (b.gfm = f({}, b.normal, {
            escape: p(b.escape)('])', '~|])')(),
            url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text: p(b.text)(']|', '~]|')('|', '|https?://|')()
          })),
          (b.breaks = f({}, b.gfm, {
            br: p(b.br)('{2,}', '*')(),
            text: p(b.gfm.text)('{2,}', '*')()
          })),
          (s.rules = b),
          (s.output = function(e, t, n) {
            return new s(t, n).output(e);
          }),
          (s.prototype.output = function(e) {
            for (var t, n, r, o, i = ''; e; )
              if ((o = this.rules.escape.exec(e)))
                (e = e.substring(o[0].length)), (i += o[1]);
              else if ((o = this.rules.autolink.exec(e)))
                (e = e.substring(o[0].length)),
                  '@' === o[2]
                    ? ((n =
                        ':' === o[1].charAt(6)
                          ? this.mangle(o[1].substring(7))
                          : this.mangle(o[1])),
                      (r = this.mangle('mailto:') + n))
                    : ((n = c(o[1])), (r = n)),
                  (i += this.renderer.link(r, null, n));
              else if (this.inLink || !(o = this.rules.url.exec(e))) {
                if ((o = this.rules.tag.exec(e)))
                  !this.inLink && /^<a /i.test(o[0])
                    ? (this.inLink = !0)
                    : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1),
                    (e = e.substring(o[0].length)),
                    (i += this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(o[0])
                        : c(o[0])
                      : o[0]);
                else if ((o = this.rules.link.exec(e)))
                  (e = e.substring(o[0].length)),
                    (this.inLink = !0),
                    (i += this.outputLink(o, { href: o[2], title: o[3] })),
                    (this.inLink = !1);
                else if (
                  (o = this.rules.reflink.exec(e)) ||
                  (o = this.rules.nolink.exec(e))
                ) {
                  if (
                    ((e = e.substring(o[0].length)),
                    (t = (o[2] || o[1]).replace(/\s+/g, ' ')),
                    !(t = this.links[t.toLowerCase()]) || !t.href)
                  ) {
                    (i += o[0].charAt(0)), (e = o[0].substring(1) + e);
                    continue;
                  }
                  (this.inLink = !0),
                    (i += this.outputLink(o, t)),
                    (this.inLink = !1);
                } else if ((o = this.rules.strong.exec(e)))
                  (e = e.substring(o[0].length)),
                    (i += this.renderer.strong(this.output(o[2] || o[1])));
                else if ((o = this.rules.em.exec(e)))
                  (e = e.substring(o[0].length)),
                    (i += this.renderer.em(this.output(o[2] || o[1])));
                else if ((o = this.rules.code.exec(e)))
                  (e = e.substring(o[0].length)),
                    (i += this.renderer.codespan(c(o[2], !0)));
                else if ((o = this.rules.br.exec(e)))
                  (e = e.substring(o[0].length)), (i += this.renderer.br());
                else if ((o = this.rules.del.exec(e)))
                  (e = e.substring(o[0].length)),
                    (i += this.renderer.del(this.output(o[1])));
                else if ((o = this.rules.text.exec(e)))
                  (e = e.substring(o[0].length)),
                    (i += this.renderer.text(c(this.smartypants(o[0]))));
                else if (e)
                  throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
              } else
                (e = e.substring(o[0].length)),
                  (n = c(o[1])),
                  (r = n),
                  (i += this.renderer.link(r, null, n));
            return i;
          }),
          (s.prototype.outputLink = function(e, t) {
            var n = c(t.href),
              r = t.title ? c(t.title) : null;
            return '!' !== e[0].charAt(0)
              ? this.renderer.link(n, r, this.output(e[1]))
              : this.renderer.image(n, r, c(e[1]));
          }),
          (s.prototype.smartypants = function(e) {
            return this.options.smartypants
              ? e
                  .replace(/---/g, '—')
                  .replace(/--/g, '–')
                  .replace(/(^|[-\u2014\/(\[{"\s])'/g, '$1‘')
                  .replace(/'/g, '’')
                  .replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, '$1“')
                  .replace(/"/g, '”')
                  .replace(/\.{3}/g, '…')
              : e;
          }),
          (s.prototype.mangle = function(e) {
            if (!this.options.mangle) return e;
            for (var t, n = '', r = e.length, o = 0; o < r; o++)
              (t = e.charCodeAt(o)),
                Math.random() > 0.5 && (t = 'x' + t.toString(16)),
                (n += '&#' + t + ';');
            return n;
          }),
          (a.prototype.code = function(e, t, n) {
            if (this.options.highlight) {
              var r = this.options.highlight(e, t);
              null != r && r !== e && ((n = !0), (e = r));
            }
            return t
              ? '<pre><code class="' +
                  this.options.langPrefix +
                  c(t, !0) +
                  '">' +
                  (n ? e : c(e, !0)) +
                  '\n</code></pre>\n'
              : '<pre><code>' + (n ? e : c(e, !0)) + '\n</code></pre>';
          }),
          (a.prototype.blockquote = function(e) {
            return '<blockquote>\n' + e + '</blockquote>\n';
          }),
          (a.prototype.html = function(e) {
            return e;
          }),
          (a.prototype.heading = function(e, t, n) {
            return (
              '<h' +
              t +
              ' id="' +
              this.options.headerPrefix +
              n.toLowerCase().replace(/[^\w]+/g, '-') +
              '">' +
              e +
              '</h' +
              t +
              '>\n'
            );
          }),
          (a.prototype.hr = function() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          }),
          (a.prototype.list = function(e, t) {
            var n = t ? 'ol' : 'ul';
            return '<' + n + '>\n' + e + '</' + n + '>\n';
          }),
          (a.prototype.listitem = function(e) {
            return '<li>' + e + '</li>\n';
          }),
          (a.prototype.paragraph = function(e) {
            return '<p>' + e + '</p>\n';
          }),
          (a.prototype.table = function(e, t) {
            return (
              '<table>\n<thead>\n' +
              e +
              '</thead>\n<tbody>\n' +
              t +
              '</tbody>\n</table>\n'
            );
          }),
          (a.prototype.tablerow = function(e) {
            return '<tr>\n' + e + '</tr>\n';
          }),
          (a.prototype.tablecell = function(e, t) {
            var n = t.header ? 'th' : 'td';
            return (
              (t.align
                ? '<' + n + ' style="text-align:' + t.align + '">'
                : '<' + n + '>') +
              e +
              '</' +
              n +
              '>\n'
            );
          }),
          (a.prototype.strong = function(e) {
            return '<strong>' + e + '</strong>';
          }),
          (a.prototype.em = function(e) {
            return '<em>' + e + '</em>';
          }),
          (a.prototype.codespan = function(e) {
            return '<code>' + e + '</code>';
          }),
          (a.prototype.br = function() {
            return this.options.xhtml ? '<br/>' : '<br>';
          }),
          (a.prototype.del = function(e) {
            return '<del>' + e + '</del>';
          }),
          (a.prototype.link = function(e, t, n) {
            if (this.options.sanitize) {
              try {
                var r = decodeURIComponent(u(e))
                  .replace(/[^\w:]/g, '')
                  .toLowerCase();
              } catch (e) {
                return '';
              }
              if (
                0 === r.indexOf('javascript:') ||
                0 === r.indexOf('vbscript:') ||
                0 === r.indexOf('data:')
              )
                return '';
            }
            var o = '<a href="' + e + '"';
            return t && (o += ' title="' + t + '"'), (o += '>' + n + '</a>');
          }),
          (a.prototype.image = function(e, t, n) {
            var r = '<img src="' + e + '" alt="' + n + '"';
            return (
              t && (r += ' title="' + t + '"'),
              (r += this.options.xhtml ? '/>' : '>')
            );
          }),
          (a.prototype.text = function(e) {
            return e;
          }),
          (l.parse = function(e, t, n) {
            return new l(t, n).parse(e);
          }),
          (l.prototype.parse = function(e) {
            (this.inline = new s(e.links, this.options, this.renderer)),
              (this.tokens = e.reverse());
            for (var t = ''; this.next(); ) t += this.tok();
            return t;
          }),
          (l.prototype.next = function() {
            return (this.token = this.tokens.pop());
          }),
          (l.prototype.peek = function() {
            return this.tokens[this.tokens.length - 1] || 0;
          }),
          (l.prototype.parseText = function() {
            for (var e = this.token.text; 'text' === this.peek().type; )
              e += '\n' + this.next().text;
            return this.inline.output(e);
          }),
          (l.prototype.tok = function() {
            switch (this.token.type) {
              case 'space':
                return '';
              case 'hr':
                return this.renderer.hr();
              case 'heading':
                return this.renderer.heading(
                  this.inline.output(this.token.text),
                  this.token.depth,
                  this.token.text
                );
              case 'code':
                return this.renderer.code(
                  this.token.text,
                  this.token.lang,
                  this.token.escaped
                );
              case 'table':
                var e,
                  t,
                  n,
                  r,
                  o = '',
                  i = '';
                for (n = '', e = 0; e < this.token.header.length; e++)
                  ({ header: !0, align: this.token.align[e] },
                    (n += this.renderer.tablecell(
                      this.inline.output(this.token.header[e]),
                      { header: !0, align: this.token.align[e] }
                    )));
                for (
                  o += this.renderer.tablerow(n), e = 0;
                  e < this.token.cells.length;
                  e++
                ) {
                  for (
                    t = this.token.cells[e], n = '', r = 0;
                    r < t.length;
                    r++
                  )
                    n += this.renderer.tablecell(this.inline.output(t[r]), {
                      header: !1,
                      align: this.token.align[r]
                    });
                  i += this.renderer.tablerow(n);
                }
                return this.renderer.table(o, i);
              case 'blockquote_start':
                for (var i = ''; 'blockquote_end' !== this.next().type; )
                  i += this.tok();
                return this.renderer.blockquote(i);
              case 'list_start':
                for (
                  var i = '', s = this.token.ordered;
                  'list_end' !== this.next().type;

                )
                  i += this.tok();
                return this.renderer.list(i, s);
              case 'list_item_start':
                for (var i = ''; 'list_item_end' !== this.next().type; )
                  i +=
                    'text' === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(i);
              case 'loose_item_start':
                for (var i = ''; 'list_item_end' !== this.next().type; )
                  i += this.tok();
                return this.renderer.listitem(i);
              case 'html':
                var a =
                  this.token.pre || this.options.pedantic
                    ? this.token.text
                    : this.inline.output(this.token.text);
                return this.renderer.html(a);
              case 'paragraph':
                return this.renderer.paragraph(
                  this.inline.output(this.token.text)
                );
              case 'text':
                return this.renderer.paragraph(this.parseText());
            }
          }),
          (h.exec = h),
          (d.options = d.setOptions = function(e) {
            return f(d.defaults, e), d;
          }),
          (d.defaults = {
            gfm: !0,
            tables: !0,
            breaks: !1,
            pedantic: !1,
            sanitize: !1,
            sanitizer: null,
            mangle: !0,
            smartLists: !1,
            silent: !1,
            highlight: null,
            langPrefix: 'lang-',
            smartypants: !1,
            headerPrefix: '',
            renderer: new a(),
            xhtml: !1
          }),
          (d.Parser = l),
          (d.parser = l.parse),
          (d.Renderer = a),
          (d.Lexer = r),
          (d.lexer = r.lex),
          (d.InlineLexer = s),
          (d.inlineLexer = s.output),
          (d.parse = d),
          void 0 !== e && 'object' === i(t)
            ? (e.exports = d)
            : void 0 !==
                (o = function() {
                  return d;
                }.call(t, n, t, e)) && (e.exports = o);
      }.call(
        (function() {
          return this || ('undefined' != typeof window ? window : r);
        })()
      ));
    }.call(t, n(128)));
  },
  128: function(e, t, n) {
    'use strict';
    var r,
      o =
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
            };
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : o(window)) &&
        (r = window);
    }
    e.exports = r;
  },
  129: function(e, t) {
    e.exports =
      "import { props, withComponent } from 'skatejs';\nimport withReact from '@skatejs/renderer-react';\nimport React from 'react';\n\nclass WithReact extends withComponent(withReact()) {\n  static props = {\n    name: props.string\n  };\n  render({ name }) {\n    return <span>Hello, {name}!</span>;\n  }\n}\n\ncustomElements.define('with-react', WithReact);\n";
  },
  130: function(e, t) {
    e.exports =
      "# Skate\n\n[![Downloads per month](https://img.shields.io/npm/dm/skatejs.svg)](https://www.npmjs.com/package/skatejs)\n[![NPM version](https://img.shields.io/npm/v/skatejs.svg)](https://www.npmjs.com/package/skatejs)\n[![Build Status](https://travis-ci.org/skatejs/skatejs.svg?branch=master)](https://travis-ci.org/skatejs/skatejs)\n[![Join the chat at https://gitter.im/skatejs/skatejs](https://badges.gitter.im/skatejs/skatejs.svg)](https://gitter.im/skatejs/skatejs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\n[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)\n[![Semantic Release](https://img.shields.io/badge/semantic--release-%F0%9F%9A%80-ffffff.svg)](https://github.com/semantic-release/semantic-release)\n[![OpenCollective](https://opencollective.com/skatejs/backers/badge.svg)](#backers)\n[![OpenCollective](https://opencollective.com/skatejs/sponsors/badge.svg)](#sponsors)\n[![Follow @skate_js on Twitter](https://img.shields.io/twitter/follow/skate_js.svg?style=social&label=@skate_js)](https://twitter.com/skate_js)\n\n> SkateJS is a web component library designed to give you an augmentation of the\n> web component specs focusing on a functional rendering pipeline, clean\n> property / attribute semantics and a small footprint.\n\nSkate is a functional abstraction over\n[the web component standards](https://github.com/w3c/webcomponents) that:\n\n* Produces cross-framework compatible components\n* Abstracts away common attribute / property semantics via `props`, such as\n  attribute reflection and coercion\n* Adds several lifecycle callbacks for responding to prop updates, rendering and\n  more\n* Provides a base set of\n  [mixins](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)\n  that hook into renderers such as\n  [@skatejs/renderer-preact](https://github.com/skatejs/renderer-preact).\n\n## Anatomy of a Skate web component\n\nAt its core, Skate is about creating\n[Custom Elements](https://w3c.github.io/webcomponents/spec/custom/). Skate\nprovides a series of\n[mixin functions](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)\nthat enable you to control what your component can do.\n\nFor instance, Skate's main mixin, `withComponent`, is just a composition of all\nof Skate's other mixin behaviours:\n\n* `withUpdate` -- the generated element will react to changes on their props or\n  HTML attributes.\n* `withChildren` -- the generated element will react to changes to its child\n  elements.\n* `withRenderer` -- the element can generate its own DOM and output it to a\n  `renderRoot` (a `ShadowRoot` node by default).\n* `withLifecycle` -- the element can use added sugar on top of the built-in\n  lifecycle callbacks.\n* `withContext` -- the element will inherit context from components up the tree,\n  like in React.\n* `withUnique` -- allows for naming the custom element through `is`.\n\nCalling `withComponent()` gives you a Custom Element class constructor, which\nyou can then extend to define your own elements.\n\nEvery mixin accepts an optional `Element` constructor as its only parameter,\nwhich allows you to extend virtually any element type in HTML!\n\n### Rendering an element\n\nAs an example, let's create a simple greeting component...\n\n```html\n<x-hello>Bob</x-hello>\n```\n\n...such that when this element is rendered, the end-user will see `Hello, Bob!`.\n\nWe can define a Skate component that renders the contents of our Custom Element:\n\n```js\nimport { withComponent } from 'skatejs';\n\nconst Component = withComponent();\n\nclass GreetingComponent extends Component {\n  render() {\n    return 'Hello, <slot></slot>!';\n  }\n}\n\ncustomElements.define('x-hello', GreetingComponent);\n```\n\nWhen this element is rendered, the DOM will look something like the following:\n\n```html\n<x-hello>\n  #shadow-root\n    Hello, <slot></slot>!\n  Bob\n</x-hello>\n```\n\nThis is the utility that web components provide when using Custom Elements and\nthe Shadow DOM.\n\nSkate also allows **turning off Shadow DOM** if you don't wanna use it for\nvarious particular reasons. You can turn it off via `get renderRoot()` override:\n\n> NOTE: by turning off Shadow DOM you cannot use <slot/> content projection\n> anymore by default, further tweaks needs to be applied\n\n```js\nimport { withComponent, props } from 'skatejs';\n\n// define base class without Shadow DOM\nconst NoShadowComponent = class extends withComponent() {\n  // you need to return where you want to render your content, in our case we wanna render directly to our custom element children\n  get renderRoot() {\n    return this;\n  }\n};\n\n// use custom NoShadowComponent as a base class\nclass GreetingComponent extends NoShadowComponent {\n  static props = {\n    name: props.string\n  };\n  render({ name }) {\n    return `Hello, ${name}!`;\n  }\n}\n\ncustomElements.define('x-hello', GreetingComponent);\n```\n\nNow when you write:\n\n```html\n<x-hello name=\"Bob\"></x-hello>\n```\n\nWhen this element is rendered, the DOM will look something like the following:\n\n```html\n<x-hello>\n  Hello, Bob!\n</x-hello>\n```\n\n### Watching element properties and attributes\n\nWe can create a Skate component that watches for HTML attribute changes on\nitself:\n\n```js\nimport { props, withComponent } from 'skatejs';\n\nconst Component = withComponent();\n\nclass GreetingComponent extends Component {\n  static props = {\n    name: props.string\n  };\n  render({ name }) {\n    return `Hello, ${name}!`;\n  }\n}\n\ncustomElements.define('x-hello', GreetingComponent);\n```\n\nThe resulting HTML when the element is rendered would look like this:\n\n```html\n<x-hello name=\"Bob\">\n  #shadow-root\n    Hello, Bob!\n</x-hello>\n```\n\nNow, whenever the `name` property or attribute on the greeting component\nchanges, the component will re-render.\n\n### Making your own mixins\n\nIn the previous examples, each component implements `render` method which\nreturns a string. This is default \"renderer\" behaviour provided by Skate. You\ncan define custom renderer as well by re-defining `renderer` all the time for\nevery component or rather we can write a mixin and take advantage of prototype\ninheritance:\n\n> NOTE: the `with` prefix is not mandatory, just a common practice for naming\n> HOCs and Mixins\n\n```js\nimport { props, withComponent } from 'skatejs';\n\nconst withDangerouslyNaiveRenderer = (Base = HTMLElement) => {\n  return class extends Base {\n    renderer(renderRoot, render) {\n      renderRoot.innerHtml = '';\n      renderRoot.appendChild(render());\n    }\n  };\n};\n\nconst Component = withComponent(withDangerouslyNaiveRenderer());\n\nclass GreetingComponent extends Component {\n  static props = {\n    name: props.string\n  };\n  render({ name }) {\n    const el = document.createElement('span');\n    el.innerHTML = `Hello, ${name}!`;\n    return el;\n  }\n}\n\ncustomElements.define('x-hello', GreetingComponent);\n```\n\n### Rendering using other front-end libraries\n\nSkate provides default renderer by setting return string of `render` method to\nyour component root ( ShadowRoot by default ) via `innerHTML`. Besides that it\nallows you to hook to the renderer ( by defining custom renderer ), which gives\nyou options to support just about every modern component-based front-end library\n&mdash; React, Preact, Vue... just provide a `render` to stamp out your\ncomponent's HTML, a `renderer` to update the DOM with your HTML, and then it's\nall the same to Skate!\n\nThe Skate team have provided a few renderers for popular front-end libraries;\ncheck the [Installing](#installing-skate) section.\n\n#### Using Skate with Preact\n\nInstead of writing our own `renderer`, we could use a library like\n[Preact](https://preactjs.com/) to do the work for us. Skate provides a\nready-made renderer for Preact; here's how we would update our previous greeting\ncomponent to use it:\n\n```js\n/** @jsx h */\n\nimport { props, withComponent } from 'skatejs';\nimport withRenderer from '@skatejs/renderer-preact';\nimport { h } from 'preact';\n\nconst Component = withComponent(withRenderer());\n\ncustomElements.define(\n  'x-hello',\n  class extends Component {\n    static props = {\n      name: props.string\n    };\n    render({ name }) {\n      return <span>Hello, {name}!</span>;\n    }\n  }\n);\n```\n\nNow that the greeting component is rendered via Preact, when it renders, it only\nchanges the part of the DOM that requires updating.\n\n## Installing Skate\n\nTo use Skate on its own, just add it to your `package.json`:\n\n```sh\nnpm install skatejs\n```\n\nTo use Skate with another front-end library, you'll want to install that library\nitself, along with a Skate renderer for it.\n\n```sh\nnpm install skatejs @skatejs/renderer-[renderer] [renderer]\n```\n\nWhere `[renderer]` is one of:\n\n* [lit-html](https://github.com/skatejs/renderer-lit-html)\n* [preact](https://github.com/skatejs/renderer-preact)\n* [react](https://github.com/skatejs/renderer-react)\n* Or any custom renderer!\n\n## Polyfills\n\nSkate builds upon the\n[Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) and\n[the Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) standards.\nSkate is capable of operating without the Shadow DOM &mdash; it just means you\ndon't get any encapsulation of your component's HTML or styles.\n\nThough most modern browsers support these standards, some still need polyfills\nto implement missing or inconsistent behaviours for them.\n\nFor more information on the polyfills, see\n[the web components polyfill documentation](https://github.com/webcomponents/webcomponentsjs).\n\n## Browser Support\n\nSkate supports all evergreens and IE11, and is subject to the browser support\nmatrix of the polyfills.\n\n## Backers\n\nSupport us with a monthly donation and help us continue our activities.\n[Become a backer](https://opencollective.com/skatejs#backer)!\n\n[![](https://opencollective.com/skatejs/backer/0/avatar.svg)](https://opencollective.com/skatejs/backer/0/website)\n[![](https://opencollective.com/skatejs/backer/1/avatar.svg)](https://opencollective.com/skatejs/backer/1/website)\n[![](https://opencollective.com/skatejs/backer/2/avatar.svg)](https://opencollective.com/skatejs/backer/2/website)\n[![](https://opencollective.com/skatejs/backer/3/avatar.svg)](https://opencollective.com/skatejs/backer/3/website)\n[![](https://opencollective.com/skatejs/backer/4/avatar.svg)](https://opencollective.com/skatejs/backer/4/website)\n[![](https://opencollective.com/skatejs/backer/5/avatar.svg)](https://opencollective.com/skatejs/backer/5/website)\n[![](https://opencollective.com/skatejs/backer/6/avatar.svg)](https://opencollective.com/skatejs/backer/6/website)\n[![](https://opencollective.com/skatejs/backer/7/avatar.svg)](https://opencollective.com/skatejs/backer/7/website)\n[![](https://opencollective.com/skatejs/backer/8/avatar.svg)](https://opencollective.com/skatejs/backer/8/website)\n[![](https://opencollective.com/skatejs/backer/9/avatar.svg)](https://opencollective.com/skatejs/backer/9/website)\n[![](https://opencollective.com/skatejs/backer/10/avatar.svg)](https://opencollective.com/skatejs/backer/10/website)\n[![](https://opencollective.com/skatejs/backer/11/avatar.svg)](https://opencollective.com/skatejs/backer/11/website)\n[![](https://opencollective.com/skatejs/backer/12/avatar.svg)](https://opencollective.com/skatejs/backer/12/website)\n[![](https://opencollective.com/skatejs/backer/13/avatar.svg)](https://opencollective.com/skatejs/backer/13/website)\n[![](https://opencollective.com/skatejs/backer/14/avatar.svg)](https://opencollective.com/skatejs/backer/14/website)\n[![](https://opencollective.com/skatejs/backer/15/avatar.svg)](https://opencollective.com/skatejs/backer/15/website)\n[![](https://opencollective.com/skatejs/backer/16/avatar.svg)](https://opencollective.com/skatejs/backer/16/website)\n[![](https://opencollective.com/skatejs/backer/17/avatar.svg)](https://opencollective.com/skatejs/backer/17/website)\n[![](https://opencollective.com/skatejs/backer/18/avatar.svg)](https://opencollective.com/skatejs/backer/18/website)\n[![](https://opencollective.com/skatejs/backer/19/avatar.svg)](https://opencollective.com/skatejs/backer/19/website)\n\n## Sponsors\n\nBecome a sponsor and get your logo on our README on Github with a link to your\nsite. [Become a sponsor](https://opencollective.com/skatejs#sponsor)!\n\n[![](https://opencollective.com/skatejs/sponsor/0/avatar.svg)](https://opencollective.com/skatejs/sponsor/0/website)\n[![](https://opencollective.com/skatejs/sponsor/1/avatar.svg)](https://opencollective.com/skatejs/sponsor/1/website)\n[![](https://opencollective.com/skatejs/sponsor/2/avatar.svg)](https://opencollective.com/skatejs/sponsor/2/website)\n[![](https://opencollective.com/skatejs/sponsor/3/avatar.svg)](https://opencollective.com/skatejs/sponsor/3/website)\n[![](https://opencollective.com/skatejs/sponsor/4/avatar.svg)](https://opencollective.com/skatejs/sponsor/4/website)\n[![](https://opencollective.com/skatejs/sponsor/5/avatar.svg)](https://opencollective.com/skatejs/sponsor/5/website)\n[![](https://opencollective.com/skatejs/sponsor/6/avatar.svg)](https://opencollective.com/skatejs/sponsor/6/website)\n[![](https://opencollective.com/skatejs/sponsor/7/avatar.svg)](https://opencollective.com/skatejs/sponsor/7/website)\n[![](https://opencollective.com/skatejs/sponsor/8/avatar.svg)](https://opencollective.com/skatejs/sponsor/8/website)\n[![](https://opencollective.com/skatejs/sponsor/9/avatar.svg)](https://opencollective.com/skatejs/sponsor/9/website)\n[![](https://opencollective.com/skatejs/sponsor/10/avatar.svg)](https://opencollective.com/skatejs/sponsor/10/website)\n[![](https://opencollective.com/skatejs/sponsor/11/avatar.svg)](https://opencollective.com/skatejs/sponsor/11/website)\n[![](https://opencollective.com/skatejs/sponsor/12/avatar.svg)](https://opencollective.com/skatejs/sponsor/12/website)\n[![](https://opencollective.com/skatejs/sponsor/13/avatar.svg)](https://opencollective.com/skatejs/sponsor/13/website)\n[![](https://opencollective.com/skatejs/sponsor/14/avatar.svg)](https://opencollective.com/skatejs/sponsor/14/website)\n[![](https://opencollective.com/skatejs/sponsor/15/avatar.svg)](https://opencollective.com/skatejs/sponsor/15/website)\n[![](https://opencollective.com/skatejs/sponsor/16/avatar.svg)](https://opencollective.com/skatejs/sponsor/16/website)\n[![](https://opencollective.com/skatejs/sponsor/17/avatar.svg)](https://opencollective.com/skatejs/sponsor/17/website)\n[![](https://opencollective.com/skatejs/sponsor/18/avatar.svg)](https://opencollective.com/skatejs/sponsor/18/website)\n[![](https://opencollective.com/skatejs/sponsor/19/avatar.svg)](https://opencollective.com/skatejs/sponsor/19/website)\n";
  },
  20: function(e, t, n) {
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
    function s(e, t) {
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
    function a(e, t) {
      return Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
    var l,
      c,
      u,
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
      h = a(['<x-loading></x-loading>'], ['<x-loading></x-loading>']),
      f = a(
        [
          '\n  <sk-router>\n    <sk-route page="',
          '" path="/"></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/guides"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/guides/flowtype"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/migrating"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-children"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-component"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-context"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-lifecycle"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-renderer"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-update"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/default"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/with-lit-html"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/with-preact"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/with-react"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/define"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/emit"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/link"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/name"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/shadow"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="*"\n    ></sk-route>\n  </sk-router>\n'
        ],
        [
          '\n  <sk-router>\n    <sk-route page="',
          '" path="/"></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/guides"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/guides/flowtype"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/migrating"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-children"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-component"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-context"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-lifecycle"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-renderer"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/mixins/with-update"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/default"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/with-lit-html"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/with-preact"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers/with-react"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/renderers"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/define"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/emit"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/link"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/name"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils/shadow"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="/utils"\n    ></sk-route>\n    <sk-route\n      page="',
          '"\n      path="*"\n    ></sk-route>\n  </sk-router>\n'
        ]
      ),
      d = a(
        [
          '\n      ',
          '\n      <div className="',
          '">\n        ',
          '\n        <img class="logo" src="',
          '">\n        ',
          '\n      </div>\n    '
        ],
        [
          '\n      ',
          '\n      <div className="',
          '">\n        ',
          '\n        <img class="logo" src="',
          '">\n        ',
          '\n      </div>\n    '
        ]
      );
    n(34), n(75);
    var m = n(44),
      b = n(7),
      v = n(37),
      g = r(v),
      y = n(22),
      k = n(119),
      w = r(k),
      x = n(120),
      j = r(x),
      _ = n(121),
      O = r(_),
      S = n(122),
      P = r(S),
      C = function(e) {
        return (0, y.withLoadable)({
          is: (0, b.name)(),
          loader: e,
          loading: (0, m.html)(h)
        });
      },
      E = (0, m.html)(
        f,
        P.default,
        C(function() {
          return n.e(22).then(n.bind(null, 131));
        }),
        C(function() {
          return n.e(23).then(n.bind(null, 132));
        }),
        C(function() {
          return n.e(21).then(n.bind(null, 133));
        }),
        C(function() {
          return n.e(20).then(n.bind(null, 134));
        }),
        C(function() {
          return n.e(2).then(n.bind(null, 135));
        }),
        C(function() {
          return n.e(10).then(n.bind(null, 142));
        }),
        C(function() {
          return n.e(9).then(n.bind(null, 146));
        }),
        C(function() {
          return n.e(8).then(n.bind(null, 150));
        }),
        C(function() {
          return n.e(7).then(n.bind(null, 154));
        }),
        C(function() {
          return n.e(6).then(n.bind(null, 158));
        }),
        C(function() {
          return n.e(5).then(n.bind(null, 162));
        }),
        C(function() {
          return n.e(4).then(n.bind(null, 166));
        }),
        C(function() {
          return n.e(3).then(n.bind(null, 170));
        }),
        C(function() {
          return n.e(0).then(n.bind(null, 175));
        }),
        C(function() {
          return n.e(19).then(n.bind(null, 272));
        }),
        C(function() {
          return n.e(18).then(n.bind(null, 273));
        }),
        C(function() {
          return n.e(17).then(n.bind(null, 274));
        }),
        C(function() {
          return n.e(15).then(n.bind(null, 275));
        }),
        C(function() {
          return n.e(14).then(n.bind(null, 276));
        }),
        C(function() {
          return n.e(13).then(n.bind(null, 277));
        }),
        C(function() {
          return n.e(16).then(n.bind(null, 278));
        }),
        C(function() {
          return n.e(24).then(n.bind(null, 279));
        })
      ),
      T = (0, g.default)({
        borderTop: '5px solid #F2567C',
        padding: '50px 25px 25px 25px'
      }),
      N =
        (0, b.define)(
          ((u = c = (function(e) {
            function t() {
              var e, n, r, s;
              o(this, t);
              for (var a = arguments.length, l = Array(a), c = 0; c < a; c++)
                l[c] = arguments[c];
              return (
                (n = r = i(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(l)
                  )
                )),
                (r.context = { style: (0, v.value)(w.default) }),
                (r.onHistory = function() {
                  window.scrollTo(0, 0),
                    (r.state = { href: location.pathname });
                }),
                (s = n),
                i(r, s)
              );
            }
            return (
              s(t, e),
              p(t, [
                {
                  key: 'connecting',
                  value: function() {
                    this.onHistory(),
                      window.addEventListener('popstate', this.onHistory),
                      window.addEventListener('pushstate', this.onHistory),
                      window.addEventListener('replaceState', this.onHistory);
                  }
                },
                {
                  key: 'render',
                  value: function(e) {
                    var t = e.state;
                    return this.$(
                      d,
                      this.$style,
                      T,
                      (0, y.style)((0, v.value)(T)),
                      '/' === t.href ? O.default : j.default,
                      E
                    );
                  }
                }
              ]),
              t
            );
          })(y.Component)),
          (c.is = 'x-app'),
          (l = u))
        ) || l;
    t.default = N;
  },
  22: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(76);
    Object.keys(r).forEach(function(e) {
      'default' !== e &&
        '__esModule' !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return r[e];
          }
        });
    });
    var o = n(57);
    Object.keys(o).forEach(function(e) {
      'default' !== e &&
        '__esModule' !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return o[e];
          }
        });
    });
    var i = n(79);
    Object.keys(i).forEach(function(e) {
      'default' !== e &&
        '__esModule' !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return i[e];
          }
        });
    });
    var s = n(117);
    Object.keys(s).forEach(function(e) {
      'default' !== e &&
        '__esModule' !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return s[e];
          }
        });
    });
  },
  26: function(e, t, n) {
    'use strict';
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
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
    function s(e, t) {
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
    function a(e, t) {
      return Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      );
    }
    function l(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e && e.length
        ? (0, g.html)(
            f,
            e.map(function(e) {
              var n = j({ depth: t, selected: location.pathname === e.href });
              return (0,
              g.html)(d, { a: n }, (0, k.value)(n), e.href, e.text, 0 === location.pathname.indexOf(e.href) ? l(e.tree, t + 1) : '');
            })
          )
        : '';
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.Layout = void 0);
    var c,
      u,
      p,
      h = (function() {
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
      f = a(
        ['\n        <ul>\n          ', '\n        </ul>\n      '],
        ['\n        <ul>\n          ', '\n        </ul>\n      ']
      ),
      d = a(
        [
          '\n              <li>\n                <x-link\n                  classNames="',
          '"\n                  css="',
          '"\n                  href="',
          '"\n                >\n                  ',
          '\n                </x-link>\n                ',
          '\n              </li>\n            '
        ],
        [
          '\n              <li>\n                <x-link\n                  classNames="',
          '"\n                  css="',
          '"\n                  href="',
          '"\n                >\n                  ',
          '\n                </x-link>\n                ',
          '\n              </li>\n            '
        ]
      ),
      m = a(
        [
          '\n      ',
          '\n      ',
          '\n      <div className="',
          '">\n        <div className="',
          '"></div>\n        <section className="',
          '">\n          ',
          '\n        </section>\n      </div>\n      <div className="',
          '">\n        ',
          '\n        <section className="',
          '">\n          <slot></slot>\n        </section>\n      </div>\n    '
        ],
        [
          '\n      ',
          '\n      ',
          '\n      <div className="',
          '">\n        <div className="',
          '"></div>\n        <section className="',
          '">\n          ',
          '\n        </section>\n      </div>\n      <div className="',
          '">\n        ',
          '\n        <section className="',
          '">\n          <slot></slot>\n        </section>\n      </div>\n    '
        ]
      ),
      b = a(['<h2>', '</h2>'], ['<h2>', '</h2>']),
      v = a(
        [
          '\n                <nav className="',
          '">\n                  ',
          '\n                </nav>\n              '
        ],
        [
          '\n                <nav className="',
          '">\n                  ',
          '\n                </nav>\n              '
        ]
      ),
      g = n(44),
      y = n(7),
      k = n(37),
      w = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(k),
      x = n(22),
      j = (n(34),
      function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.depth,
          n = e.selected;
        return (0, w.default)({
          backgroundColor: n ? '#DCE4CA' : 'transparent',
          display: 'block',
          padding: '5px 10px 5px ' + (10 + (t ? 10 * t : 0)) + 'px',
          '&:hover': { backgroundColor: '#DCE4CA' }
        });
      }),
      _ = function() {
        return [
          { href: '/', text: 'Home' },
          {
            href: '/guides',
            text: 'Guides',
            tree: [{ href: '/guides/flowtype', text: 'Flowtype' }]
          },
          { href: '/migrating', text: 'Migrating' },
          {
            href: '/mixins',
            text: 'Mixins',
            tree: [
              { href: '/mixins/with-children', text: 'Children' },
              { href: '/mixins/with-component', text: 'Component' },
              { href: '/mixins/with-context', text: 'Context' },
              { href: '/mixins/with-lifecycle', text: 'Lifecycle' },
              { href: '/mixins/with-renderer', text: 'Renderer' },
              { href: '/mixins/with-update', text: 'Update' }
            ]
          },
          {
            href: '/renderers',
            text: 'Renderers',
            tree: [
              { href: '/renderers/default', text: 'Default' },
              { href: '/renderers/with-lit-html', text: 'LitHTML' },
              { href: '/renderers/with-preact', text: 'Preact' },
              { href: '/renderers/with-react', text: 'React' }
            ]
          },
          {
            href: '/utils',
            text: 'Utilities',
            tree: [
              { href: '/utils/define', text: 'define()' },
              { href: '/utils/emit', text: 'emit()' },
              { href: '/utils/link', text: 'link()' },
              { href: '/utils/name', text: 'name()' },
              { href: '/utils/shadow', text: 'shadow()' }
            ]
          }
        ];
      },
      O = {
        flex: (0, w.default)({
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 auto',
          maxWidth: '1000px'
        }),
        flexItem: (0, w.default)({ minWidth: 0 }),
        nav: (0, w.default)({
          flexBasis: '200px',
          flexShrink: 0,
          margin: '10px 20px 0 0',
          ' li': { margin: '5px 0', padding: 0 },
          ' ul': { listStyle: 'none', margin: 0, padding: 0 }
        }),
        section: (0, w.default)({ flexBasis: '300px', flexGrow: 1 })
      };
    t.Layout =
      (0, y.define)(
        ((p = u = (function(e) {
          function t() {
            var e, n, r, s;
            o(this, t);
            for (var a = arguments.length, l = Array(a), c = 0; c < a; c++)
              l[c] = arguments[c];
            return (
              (n = r = i(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(l)
                )
              )),
              (r.props = { nav: !0 }),
              (s = n),
              i(r, s)
            );
          }
          return (
            s(t, e),
            h(t, [
              {
                key: 'connecting',
                value: function() {
                  this.style.display = 'block';
                }
              },
              {
                key: 'render',
                value: function(e) {
                  var t = e.nav,
                    n = e.title;
                  return this.$(
                    m,
                    this.$style,
                    (0, x.style)(k.value.apply(void 0, r(Object.values(O)))),
                    O.flex,
                    (0, k.names)(O.flexItem, O.nav),
                    (0, k.names)(O.flexItem, O.section),
                    n ? this.$(b, n) : '',
                    O.flex,
                    t ? this.$(v, (0, k.names)(O.flexItem, O.nav), l(_())) : '',
                    (0, k.names)(O.flexItem, O.section)
                  );
                }
              }
            ]),
            t
          );
        })(x.Component)),
        (u.is = 'x-layout'),
        (u.props = { nav: y.props.boolean, title: y.props.string }),
        (c = p))
      ) || c;
  },
  29: function(e, t, n) {
    'use strict';
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function o(e, t) {
      return Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      );
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function s(e, t) {
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
    function l(e) {
      (e = e || ''),
        (e = e.replace(/(\.\.\/)*src/, 'skatejs').replace(/\/umd/, '')),
        (e = e.split('\n').filter(function(e, t, n) {
          return n[t - 1] || e.trim().length;
        }));
      var t = e[0] ? e[0].match(/^\s*/)[0].length : 0;
      return (
        (e = e.map(function(e) {
          return e.substring(t);
        })),
        (e = e.join('\n'))
      );
    }
    function c(e, t, r) {
      n
        .e(11)
        .then(n.bind(null, 124))
        .then(function(n) {
          var o = new n();
          (o.onmessage = function(t) {
            e.innerHTML = t.data;
          }),
            o.postMessage(JSON.stringify({ code: t, language: r }));
        });
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.Runnable = t.Example = t.Code = void 0);
    var u,
      p,
      h,
      f,
      d,
      m,
      b,
      v,
      g,
      y = (function() {
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
      k = o(
        [
          '\n      <div>\n        <code-style></code-style>\n        <style textContent="',
          '"></style>\n        ',
          '\n        <div className="',
          '">\n          <pre className="',
          '">',
          '</pre>\n        </div>\n      </div>\n    '
        ],
        [
          '\n      <div>\n        <code-style></code-style>\n        <style textContent="',
          '"></style>\n        ',
          '\n        <div className="',
          '">\n          <pre className="',
          '">',
          '</pre>\n        </div>\n      </div>\n    '
        ]
      ),
      w = o(
        ['<div className="', '">', '</div>'],
        ['<div className="', '">', '</div>']
      ),
      x = o(
        [
          '\n      <x-tabs\n        css="',
          '"\n        items="',
          '"\n      ></x-tabs>\n    '
        ],
        [
          '\n      <x-tabs\n        css="',
          '"\n        items="',
          '"\n      ></x-tabs>\n    '
        ]
      ),
      j = o(
        ['<x-code code="', '" lang="js"></x-code>'],
        ['<x-code code="', '" lang="js"></x-code>']
      ),
      _ = o(
        ['<x-code code="', '" lang="html"></x-code>'],
        ['<x-code code="', '" lang="html"></x-code>']
      ),
      O = o(
        ['<x-example html="', '"></x-example>'],
        ['<x-example html="', '"></x-example>']
      );
    n(123);
    var S = (n(44), n(37)),
      P = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(S),
      C = n(7),
      E = n(22),
      T = {};
    (0, E.withLoadable)({
      is: 'code-style',
      loader: function() {
        return n
          .e(12)
          .then(n.bind(null, 125))
          .then(E.style);
      }
    });
    var N = {
        code: (0, P.default)({
          backgroundColor: '#292D34',
          color: '#eee',
          margin: 0,
          overflow: 'auto',
          padding: '20px'
        }),
        pre: (0, P.default)({ margin: 0 }),
        title: (0, P.default)({
          backgroundColor: '#20232A',
          color: '#eee',
          fontSize: '.8em',
          padding: '10px 20px'
        })
      },
      A = ((t.Code =
        (0, C.define)(
          ((h = p = (function(e) {
            function t() {
              return (
                i(this, t),
                s(
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
              y(t, [
                {
                  key: 'connecting',
                  value: function() {
                    this.style.display = 'block';
                  }
                },
                {
                  key: 'render',
                  value: function(e) {
                    var t = e.code,
                      n = e.lang,
                      o = e.title,
                      i = document.createElement('div');
                    return (
                      (i.textContent = l(t)),
                      c(i, t, T[n] || 'js'),
                      this.$(
                        k,
                        S.value.apply(void 0, r(Object.values(N))),
                        o ? this.$(w, N.title, o) : null,
                        N.code,
                        N.pre,
                        i
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(E.Component)),
          (p.is = 'x-code'),
          (p.props = {
            code: C.props.string,
            lang: C.props.string,
            title: C.props.string
          }),
          (u = h))
        ) || u),
      {
        code: (0, P.default)({
          backgroundColor: '#292D34',
          color: 'white',
          margin: 0,
          overflow: 'auto',
          padding: '20px'
        }),
        title: (0, P.default)({
          backgroundColor: '#20232A',
          color: '#eee',
          fontSize: '.8em',
          padding: '10px 20px'
        })
      });
    (t.Example =
      (0, C.define)(
        ((m = d = (function(e) {
          function t() {
            return (
              i(this, t),
              s(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            a(t, e),
            y(t, [
              {
                key: 'connecting',
                value: function() {
                  this.style.display = 'block';
                }
              },
              {
                key: 'renderer',
                value: function(e) {
                  e.innerHTML =
                    '\n      <style>' +
                    S.value.apply(void 0, r(Object.values(A))) +
                    '</style>\n      ' +
                    (this.title
                      ? '<div class="' + A.title + '">' + this.title + '</div>'
                      : '') +
                    '\n      <div class="' +
                    A.code +
                    '">' +
                    this.html +
                    '</div>\n    ';
                }
              }
            ]),
            t
          );
        })((0, C.withComponent)())),
        (d.is = 'x-example'),
        (d.props = { html: C.props.string, title: C.props.string }),
        (f = m))
      ) || f),
      (t.Runnable =
        (0, C.define)(
          ((g = v = (function(e) {
            function t() {
              return (
                i(this, t),
                s(
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
              y(t, [
                {
                  key: 'connecting',
                  value: function() {
                    this.style.display = 'block';
                  }
                },
                {
                  key: 'render',
                  value: function(e) {
                    var t = e.code,
                      n = e.html;
                    return this.$(
                      x,
                      '\n          .tabs {\n            border-bottom: none;\n          }\n          .tabs a {\n            border-bottom: none;\n          }\n          .tabs a.selected,\n          .tabs a:hover {\n            background-color: #292D34;\n            border-bottom: none;\n            color: #eee;\n          }\n        ',
                      [
                        { name: 'Code', pane: this.$(j, t) },
                        { name: 'HTML', pane: n ? this.$(_, n) : '' },
                        { name: 'Result', pane: n ? this.$(O, n) : '' }
                      ]
                    );
                  }
                }
              ]),
              t
            );
          })(E.Component)),
          (v.is = 'x-runnable'),
          (v.props = { code: null, html: null }),
          (b = g))
        ) || b);
  },
  30: function(e, t, n) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.Marked = void 0);
    var s,
      a,
      l,
      c =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
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
      p = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      <sk-marked\n        css="',
          '"\n        renderers="',
          '"\n        src="',
          '"\n      ></sk-marked>\n    '
        ],
        [
          '\n      <sk-marked\n        css="',
          '"\n        renderers="',
          '"\n        src="',
          '"\n      ></sk-marked>\n    '
        ]
      );
    n(126), n(29), n(34);
    var h = n(7),
      f = n(22),
      d = {
        code: function(e, t) {
          return '<x-code code="' + e + '" lang="' + t + '"></x-code>';
        },
        link: function(e, t, n) {
          return (
            '<x-link href="' + e + '" title="' + t + '">' + n + '</x-link>'
          );
        }
      };
    t.Marked =
      (0, h.define)(
        ((l = a = (function(e) {
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
                  var t = e.renderers,
                    n = e.src;
                  return this.$(p, this.context.style, c({}, d, t), n);
                }
              }
            ]),
            t
          );
        })(f.Component)),
        (a.is = 'x-marked'),
        (a.props = { renderers: h.props.object, src: h.props.string }),
        (s = l))
      ) || s;
  },
  34: function(e, t, n) {
    'use strict';
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      return Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      );
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function s(e, t) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.Note = t.Loading = t.Link = t.Hr = void 0);
    var l,
      c,
      u,
      p,
      h,
      f,
      d,
      m,
      b,
      v,
      g,
      y,
      k = (function() {
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
      w = o(
        [
          '\n      <div className="',
          '">\n        ',
          '\n        &mdash;&mdash;&mdash;\n      </div>\n    '
        ],
        [
          '\n      <div className="',
          '">\n        ',
          '\n        &mdash;&mdash;&mdash;\n      </div>\n    '
        ]
      ),
      x = o(
        [
          '\n      <sk-link\n        classNames="',
          '"\n        css="',
          '"\n        href="',
          '"\n      >\n        <slot></slot>\n      </sk-link>\n    '
        ],
        [
          '\n      <sk-link\n        classNames="',
          '"\n        css="',
          '"\n        href="',
          '"\n      >\n        <slot></slot>\n      </sk-link>\n    '
        ]
      ),
      j = o(
        [
          '\n      <div className="',
          '">\n        ',
          '\n        <img src="',
          '">\n      </div>\n    '
        ],
        [
          '\n      <div className="',
          '">\n        ',
          '\n        <img src="',
          '">\n      </div>\n    '
        ]
      ),
      _ = o(
        [
          '\n      <em className="',
          '">\n        ',
          '\n        <slot></slot>\n      </em>\n    '
        ],
        [
          '\n      <em className="',
          '">\n        ',
          '\n        <slot></slot>\n      </em>\n    '
        ]
      );
    n(75);
    var O = n(7),
      S = n(37),
      P = r(S),
      C = n(22),
      E = n(118),
      T = r(E),
      N = (0, P.default)({
        letterSpacing: '10px',
        margin: '50px 0',
        textAlign: 'center'
      }),
      A = ((t.Hr =
        (0, O.define)(
          ((u = c = (function(e) {
            function t() {
              return (
                i(this, t),
                s(
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
              k(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(w, N, (0, C.style)((0, S.value)(N)));
                  }
                }
              ]),
              t
            );
          })(C.Component)),
          (c.is = 'x-hr'),
          (l = u))
        ) || l),
      (t.Link =
        (0, O.define)(
          ((f = h = (function(e) {
            function t() {
              return (
                i(this, t),
                s(
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
              k(t, [
                {
                  key: 'render',
                  value: function(e) {
                    var t = e.classNames,
                      n = e.context,
                      r = e.css,
                      o = e.href;
                    return this.$(x, t, n.style + r, o);
                  }
                }
              ]),
              t
            );
          })(C.Component)),
          (h.is = 'x-link'),
          (h.props = {
            classNames: O.props.object,
            css: O.props.string,
            href: O.props.string
          }),
          (p = f))
        ) || p),
      (0, P.default)({
        display: 'block',
        margin: '60px auto 0 auto',
        width: '44px'
      })),
      R = ((t.Loading =
        (0, O.define)(
          ((b = m = (function(e) {
            function t() {
              return (
                i(this, t),
                s(
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
              k(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      j,
                      A,
                      (0, C.style)((0, S.value)(A)),
                      T.default
                    );
                  }
                }
              ]),
              t
            );
          })(C.Component)),
          (m.is = 'x-loading'),
          (d = b))
        ) || d),
      (0, P.default)({
        backgroundColor: '#DCE4CA',
        borderLeft: '3px solid #c6d3a8',
        display: 'block',
        margin: '20px 0',
        padding: '10px 15px'
      }));
    t.Note =
      (0, O.define)(
        ((y = g = (function(e) {
          function t() {
            return (
              i(this, t),
              s(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            a(t, e),
            k(t, [
              {
                key: 'render',
                value: function() {
                  return this.$(_, R, (0, C.style)((0, S.value)(R)));
                }
              }
            ]),
            t
          );
        })(C.Component)),
        (g.is = 'x-note'),
        (v = y))
      ) || v;
  },
  37: function(e, t, n) {
    'use strict';
    var r,
      o,
      i,
      s =
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
            };
    !(function(n, a) {
      'object' === s(t) && void 0 !== e
        ? a(t)
        : ((o = [t]),
          (r = a),
          void 0 !== (i = 'function' == typeof r ? r.apply(t, o) : r) &&
            (e.exports = i));
    })(0, function(e) {
      function t(e) {
        return JSON.stringify(e);
      }
      function n(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
          r = {};
        return function() {
          for (var t = arguments.length, o = Array(t), i = 0; i < t; i++)
            o[i] = arguments[i];
          var s = n(o);
          return s in r ? r[s] : (r[s] = e.apply(void 0, o));
        };
      }
      function r(e) {
        var t = {};
        for (var n in e)
          if ('object' === v(e[n]))
            for (var r in e[n]) t[n] || (t[n] = {}), (t[n][d(r)] = e[n][r]);
          else t._ || (t._ = {}), (t._[d(n)] = e[n]);
        return t;
      }
      function o() {
        return k[k.length - 1];
      }
      function i(e) {
        e.forEach(function(e) {
          return w(e);
        });
      }
      function a(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          n = '._' + t;
        if ('_' === e) return n;
        var r = e[0];
        if (' ' === r || ':' === r) return n + e;
        if ('>' === r) return n + '>' + e.substring(1).trim();
        if ('*' === r) return e.substring(1).trim();
        if ('&' === r) {
          var o = e.substring(1);
          return o[0].match(x) ? o + n : n + o;
        }
        return r.match(x) ? n + ' .' + e : n + ' ' + e;
      }
      function l(e) {
        return Object.keys(e).map(function(t) {
          var n = e[t];
          return (
            t +
            '{' +
            Object.keys(n)
              .map(function(e) {
                return e + ':' + n[e];
              })
              .join(';') +
            '}'
          );
        });
      }
      function c(e) {
        var t = P(e),
          n = t.className;
        return i(t.parsed), n;
      }
      function u(e) {
        return P(e).className;
      }
      function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(' ');
      }
      function h() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.reduce(function(e, t) {
          return S({}, e, b[t]);
        }, {});
      }
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .map(function(e) {
            return m[e];
          })
          .join('');
      }
      var d = n(function(e) {
          return e.replace(/([A-Z]{1})/g, function(e, t, n) {
            return (n ? '-' : '') + t.toLowerCase();
          });
        }),
        m = {},
        b = {},
        v =
          'function' == typeof Symbol && 'symbol' === s(Symbol.iterator)
            ? function(e) {
                return void 0 === e ? 'undefined' : s(e);
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : void 0 === e ? 'undefined' : s(e);
              },
        g = 0,
        y = n(function(e) {
          return g++;
        }),
        k = [],
        w = n(function(e) {
          var t = o();
          (!t || t.sheet.cssRules.length > 1e4) &&
            ((t = document.createElement('style')),
            document.head.appendChild(t),
            k.push(t)),
            t.sheet.insertRule(e, t.sheet.cssRules.length);
        }),
        x = /\w/,
        j =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        _ =
          'function' == typeof Symbol && 'symbol' === s(Symbol.iterator)
            ? function(e) {
                return void 0 === e ? 'undefined' : s(e);
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : void 0 === e ? 'undefined' : s(e);
              },
        O = function(e, t) {
          var n = {};
          for (var r in e) {
            var o = a(r, t),
              i = n[o],
              s = e[r];
            n[o] =
              'object' === (void 0 === i ? 'undefined' : _(i)) &&
              'object' === (void 0 === s ? 'undefined' : _(s))
                ? j({}, i, s)
                : s;
          }
          return n;
        },
        S =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        P = n(function(e) {
          var t = y(e),
            n = '_' + t,
            o = r(e),
            i = l(O(o, t));
          return (m[n] = i.join('')), (b[n] = o._), { className: n, parsed: i };
        });
      (e.default = c),
        (e.raw = u),
        (e.names = p),
        (e.rules = h),
        (e.value = f),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  },
  44: function(e, t, n) {
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
    } /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    function s(e, t) {
      (0, l.render)(e, t, c);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.EventPart = t.PropertyPart = t.extendedPartCallback = t.html = void 0);
    var a = (function() {
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
      l = n(78);
    Object.defineProperty(t, 'html', {
      enumerable: !0,
      get: function() {
        return l.html;
      }
    }),
      (t.render = s);
    var c = (t.extendedPartCallback = function(e, t, n) {
        if ('attribute' === t.type) {
          if (t.rawName.startsWith('on-')) {
            var r = t.rawName.substring(3);
            return new p(e, n, r);
          }
          if (t.name.endsWith('$')) {
            var o = t.name.substring(0, t.name.length - 1);
            return new l.AttributePart(e, n, o, t.strings);
          }
          return new u(e, n, t.rawName, t.strings);
        }
        return (0, l.defaultPartCallback)(e, t, n);
      }),
      u = (t.PropertyPart = (function(e) {
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
          a(t, [
            {
              key: 'setValue',
              value: function(e, t) {
                var n = this.strings,
                  r = void 0;
                if (2 === n.length && '' === n[0] && '' === n[n.length - 1])
                  r = (0, l.getValue)(this, e[t]);
                else {
                  r = '';
                  for (var o = 0; o < n.length; o++)
                    (r += n[o]),
                      o < n.length - 1 &&
                        (r += (0, l.getValue)(this, e[t + o]));
                }
                this.element[this.name] = r;
              }
            }
          ]),
          t
        );
      })(l.AttributePart)),
      p = (t.EventPart = (function() {
        function e(t, n, o) {
          r(this, e),
            (this.instance = t),
            (this.element = n),
            (this.eventName = o);
        }
        return (
          a(e, [
            {
              key: 'setValue',
              value: function(e) {
                var t = (0, l.getValue)(this, e);
                t !== this._listener &&
                  (null == t
                    ? this.element.removeEventListener(this.eventName, this)
                    : null == this._listener &&
                      this.element.addEventListener(this.eventName, this),
                  (this._listener = t));
              }
            },
            {
              key: 'handleEvent',
              value: function(e) {
                'function' == typeof this._listener
                  ? this._listener.call(this.element, e)
                  : 'function' == typeof this._listener.handleEvent &&
                    this._listener.handleEvent(e);
              }
            }
          ]),
          e
        );
      })());
  },
  56: function(e, t, n) {
    'use strict';
    function r() {
      throw new Error('setTimeout has not been defined');
    }
    function o() {
      throw new Error('clearTimeout has not been defined');
    }
    function i(e) {
      if (p === setTimeout) return setTimeout(e, 0);
      if ((p === r || !p) && setTimeout)
        return (p = setTimeout), setTimeout(e, 0);
      try {
        return p(e, 0);
      } catch (t) {
        try {
          return p.call(null, e, 0);
        } catch (t) {
          return p.call(this, e, 0);
        }
      }
    }
    function s(e) {
      if (h === clearTimeout) return clearTimeout(e);
      if ((h === o || !h) && clearTimeout)
        return (h = clearTimeout), clearTimeout(e);
      try {
        return h(e);
      } catch (t) {
        try {
          return h.call(null, e);
        } catch (t) {
          return h.call(this, e);
        }
      }
    }
    function a() {
      b &&
        d &&
        ((b = !1), d.length ? (m = d.concat(m)) : (v = -1), m.length && l());
    }
    function l() {
      if (!b) {
        var e = i(a);
        b = !0;
        for (var t = m.length; t; ) {
          for (d = m, m = []; ++v < t; ) d && d[v].run();
          (v = -1), (t = m.length);
        }
        (d = null), (b = !1), s(e);
      }
    }
    function c(e, t) {
      (this.fun = e), (this.array = t);
    }
    function u() {}
    var p,
      h,
      f = (e.exports = {});
    !(function() {
      try {
        p = 'function' == typeof setTimeout ? setTimeout : r;
      } catch (e) {
        p = r;
      }
      try {
        h = 'function' == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        h = o;
      }
    })();
    var d,
      m = [],
      b = !1,
      v = -1;
    (f.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      m.push(new c(e, t)), 1 !== m.length || b || i(l);
    }),
      (c.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (f.title = 'browser'),
      (f.browser = !0),
      (f.env = {}),
      (f.argv = []),
      (f.version = ''),
      (f.versions = {}),
      (f.on = u),
      (f.addListener = u),
      (f.once = u),
      (f.off = u),
      (f.removeListener = u),
      (f.removeAllListeners = u),
      (f.emit = u),
      (f.prependListener = u),
      (f.prependOnceListener = u),
      (f.listeners = function(e) {
        return [];
      }),
      (f.binding = function(e) {
        throw new Error('process.binding is not supported');
      }),
      (f.cwd = function() {
        return '/';
      }),
      (f.chdir = function(e) {
        throw new Error('process.chdir is not supported');
      }),
      (f.umask = function() {
        return 0;
      });
  },
  57: function(e, t, n) {
    'use strict';
    function r(e) {
      for (
        var t = [],
          n = e.concat(),
          r = [],
          i = arguments.length,
          s = Array(i > 1 ? i - 1 : 0),
          a = 1;
        a < i;
        a++
      )
        s[a - 1] = arguments[a];
      for (var l = 0; l < s.length; l++) {
        var c = s[l];
        c && c.is ? ((n[l] = n[l] + c.is), r.push(l)) : t.push(c);
      }
      for (var u = 0; u < r.length; u++) {
        var p = r[u] - u;
        (n[p] = n[p] + n[p + 1]), n.splice(p + 1, 1);
      }
      return o.html.apply(void 0, [n].concat(t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.html = r);
    var o = n(44);
  },
  75: function(e, t, n) {
    'use strict';
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
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
      return !t ||
        ('object' !== (void 0 === t ? 'undefined' : a(t)) &&
          'function' != typeof t)
        ? e
        : t;
    }
    function s(e, t) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.Router = t.Route = t.Link = void 0);
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
      l = n(112),
      c = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(l),
      u = n(7),
      p = n(115),
      h = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var s = o.get;
        if (void 0 !== s) return s.call(r);
      },
      f = (function() {
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
      d = (function(e) {
        function t() {
          return (
            o(this, t),
            i(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          s(t, e),
          f(t, [
            {
              key: 'renderer',
              value: function(e, t) {
                var n = e.firstChild,
                  r = t();
                n
                  ? r ? e.replaceChild(r, n) : e.removeChild(n)
                  : r && e.appendChild(r);
              }
            }
          ]),
          t
        );
      })((0, u.withComponent)()),
      m = (t.Link = (function(e) {
        function t() {
          var e, n, r, s;
          o(this, t);
          for (var a = arguments.length, l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          return (
            (n = r = i(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(l)
              )
            )),
            (r.go = function(e) {
              e.preventDefault(), c.default.show(r.href);
            }),
            (s = n),
            i(r, s)
          );
        }
        return (
          s(t, e),
          f(t, [
            {
              key: 'render',
              value: function(e) {
                var t = e.classNames,
                  n = e.css,
                  r = e.href;
                return (0, p.h)(
                  'a',
                  { className: t.a || '', href: r, events: { click: this.go } },
                  (0, p.h)('style', null, n),
                  (0, p.h)('slot', null)
                );
              }
            }
          ]),
          t
        );
      })(d));
    (m.is = 'sk-link'),
      (m.props = {
        classNames: u.props.object,
        css: u.props.string,
        href: u.props.string
      });
    var b = (t.Route = (function(e) {
      function t() {
        return (
          o(this, t),
          i(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        );
      }
      return (
        s(t, e),
        f(t, [
          {
            key: 'updated',
            value: function() {
              var e,
                n = this,
                r = this.PageToRender;
              r &&
                (r.constructor === Function && (r = new r()),
                r.then &&
                  r.then(function(e) {
                    return (n.PageToRender = e.default || e);
                  }));
              for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
                i[s] = arguments[s];
              return (e = h(
                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                'updated',
                this
              )).call.apply(e, [this].concat(i));
            }
          },
          {
            key: 'render',
            value: function(e) {
              var t = e.PageToRender;
              e.propsToRender;
              if (t && t.prototype && t.prototype.render)
                return (0, p.h)(t, null);
            }
          }
        ]),
        t
      );
    })(d));
    (b.is = 'sk-route'),
      (b.props = {
        page: null,
        PageToRender: null,
        path: u.props.string,
        propsToRender: u.props.object
      });
    var v = (t.Router = (function(e) {
      function t() {
        return (
          o(this, t),
          i(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        );
      }
      return (
        s(t, e),
        f(t, [
          {
            key: 'childrenUpdated',
            value: function() {
              [].concat(r(this.children)).forEach(function(e) {
                (0, c.default)(e.path, function(t, n) {
                  (e.propsToRender = t), (e.PageToRender = e.page);
                }),
                  c.default.exit(e.path, function(t, n) {
                    (e.PageToRender = null), n();
                  });
              }),
                c.default.start();
            }
          },
          {
            key: 'updated',
            value: function() {
              var e;
              (0, c.default)(this.options);
              for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
              return (e = h(
                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                'updated',
                this
              )).call.apply(e, [this].concat(r));
            }
          },
          {
            key: 'render',
            value: function() {
              return (0, p.h)('slot', null);
            }
          }
        ]),
        t
      );
    })(d));
    (v.is = 'sk-router'),
      (v.props = { options: u.props.object }),
      [m, b, v].forEach(u.define);
  },
  76: function(e, t, n) {
    'use strict';
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
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
    function s(e, t) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.Component = void 0);
    var a = (function() {
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
      l = n(7),
      c = n(77),
      u = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(c),
      p = n(37),
      h = n(57),
      f = n(79);
    t.Component = (function(e) {
      function t() {
        var e, n, r, s;
        o(this, t);
        for (var a = arguments.length, l = Array(a), c = 0; c < a; c++)
          l[c] = arguments[c];
        return (
          (n = r = i(
            this,
            (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              e,
              [this].concat(l)
            )
          )),
          (r.$ = h.html),
          (s = n),
          i(r, s)
        );
      }
      return (
        s(t, e),
        a(t, [
          {
            key: '$style',
            get: function() {
              return (0, f.style)(
                this.context.style,
                p.value.apply(void 0, r(Object.values(this.css || {})))
              );
            }
          }
        ]),
        t
      );
    })((0, l.withComponent)((0, u.default)()));
  },
  77: function(e, t, n) {
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
        ('object' !== (void 0 === t ? 'undefined' : s(t)) &&
          'function' != typeof t)
        ? e
        : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' +
            (void 0 === t ? 'undefined' : s(t))
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
    var s =
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
      a = n(44),
      l = (function() {
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
      })();
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
          l(t, [
            {
              key: 'renderer',
              value: function(e, t) {
                (0, a.render)(t(), e);
              }
            }
          ]),
          t
        );
      })(e);
    };
  },
  78: function(e, t, n) {
    'use strict';
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t, n, r) {
      var o = c ? e : e.join('{{--uniqueness-workaround--}}'),
        i = n.get(o);
      return void 0 === i && ((i = new k(e, r)), n.set(o, i)), new h(i, t);
    }
    function i(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _,
        r = t.__templateInstance;
      if (void 0 !== r && r.template === e.template && r._partCallback === n)
        return void r.update(e.values);
      (r = new O(e.template, n)), (t.__templateInstance = r);
      var o = r._clone();
      r.update(e.values);
      for (var i = void 0; (i = t.lastChild); ) t.removeChild(i);
      t.appendChild(o);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var s =
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
      a = (function() {
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
      l = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([''], ['']);
    t.render = i; /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    var c = (function(e) {
        return e() === e();
      })(function() {
        return (function(e) {
          return e;
        })(l);
      }),
      u = new Map(),
      p = new Map(),
      h = ((t.html = function(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return o(e, n, u, !1);
      }),
      (t.svg = function(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return o(e, n, p, !0);
      }),
      (t.TemplateResult = function e(t, n) {
        r(this, e), (this.template = t), (this.values = n);
      })),
      f = '{{lit-' + Math.random() + '}}',
      d = />[^<]*$/,
      m = /[^<]*/,
      b = '_-lit-html-_',
      v = '\x3c!--' + b + '--\x3e',
      g = new RegExp(f + '|' + v),
      y = (t.TemplatePart = function e(t, n, o, i, s) {
        r(this, e),
          (this.type = t),
          (this.index = n),
          (this.name = o),
          (this.rawName = i),
          (this.strings = s);
      }),
      k = (t.Template = (function() {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          r(this, e),
            (this.parts = []),
            (this.svg = n),
            (this.element = document.createElement('template')),
            (this.element.innerHTML = this._getHtml(t, n));
          for (
            var o = document.createTreeWalker(
                this.element.content,
                133,
                null,
                !1
              ),
              i = -1,
              s = 0,
              a = [],
              l = void 0,
              c = void 0;
            o.nextNode();

          ) {
            i++, (l = c);
            var u = (c = o.currentNode);
            if (1 === u.nodeType) {
              if (!u.hasAttributes()) continue;
              for (var p = u.attributes, h = 0; h < p.length; h++) {
                var d = p.item(h),
                  m = d.value.split(g);
                if (m.length > 1) {
                  var v = t[s],
                    k = v.substring(0, v.length - m[0].length),
                    w = k.match(/((?:\w|[.\-_$])+)=["']?$/)[1];
                  this.parts.push(new y('attribute', i, d.name, w, m)),
                    u.removeAttribute(d.name),
                    (s += m.length - 1),
                    h--;
                }
              }
            } else if (3 === u.nodeType) {
              var x = u.nodeValue,
                j = x.split(f);
              if (j.length > 1) {
                var _ = u.parentNode,
                  O = j.length - 1;
                (s += O), (u.textContent = j[O]);
                for (var S = 0; S < O; S++)
                  _.insertBefore(document.createTextNode(j[S]), u),
                    this.parts.push(new y('node', i++));
              } else {
                var P = u.previousSibling,
                  C = u.nextSibling;
                (null !== P && 1 !== P.nodeType) ||
                  (null !== C && 1 !== C.nodeType) ||
                  '' !== x.trim() ||
                  (a.push(u), (c = l), i--);
              }
            } else if (8 === u.nodeType && u.nodeValue === b) {
              var E = u.parentNode;
              null === u.previousSibling || u.previousSibling !== l
                ? E.insertBefore(new Text(), u)
                : i--,
                this.parts.push(new y('node', i++)),
                a.push(u),
                null === u.nextSibling ? E.insertBefore(new Text(), u) : i--,
                (c = l),
                s++;
            }
          }
          var T = !0,
            N = !1,
            A = void 0;
          try {
            for (
              var R, M = a[Symbol.iterator]();
              !(T = (R = M.next()).done);
              T = !0
            ) {
              var $ = R.value;
              $.parentNode.removeChild($);
            }
          } catch (e) {
            (N = !0), (A = e);
          } finally {
            try {
              !T && M.return && M.return();
            } finally {
              if (N) throw A;
            }
          }
        }
        return (
          a(e, [
            {
              key: '_getHtml',
              value: function(e, t) {
                for (var n = e.length, r = [], o = !1, i = 0; i < n - 1; i++) {
                  var s = e[i];
                  r.push(s),
                    (o = null !== s.match(d) || (null !== s.match(m) && o)),
                    r.push(o ? v : f);
                }
                r.push(e[n - 1]);
                var a = r.join('');
                return t ? '<svg>' + a + '</svg>' : a;
              }
            }
          ]),
          e
        );
      })()),
      w = (t.getValue = function(e, t) {
        return (
          null != t && !0 === t.__litDirective && (t = t(e)),
          null === t ? void 0 : t
        );
      }),
      x = ((t.directive = function(e) {
        return (e.__litDirective = !0), e;
      }),
      (t.AttributePart = (function() {
        function e(t, n, o, i) {
          r(this, e),
            (this.instance = t),
            (this.element = n),
            (this.name = o),
            (this.strings = i),
            (this.size = i.length - 1);
        }
        return (
          a(e, [
            {
              key: 'setValue',
              value: function(e, t) {
                for (var n = this.strings, r = '', o = 0; o < n.length; o++)
                  if (((r += n[o]), o < n.length - 1)) {
                    var i = w(this, e[t + o]);
                    if (
                      i &&
                      (Array.isArray(i) ||
                        ('string' != typeof i && i[Symbol.iterator]))
                    ) {
                      var s = !0,
                        a = !1,
                        l = void 0;
                      try {
                        for (
                          var c, u = i[Symbol.iterator]();
                          !(s = (c = u.next()).done);
                          s = !0
                        ) {
                          var p = c.value;
                          r += p;
                        }
                      } catch (e) {
                        (a = !0), (l = e);
                      } finally {
                        try {
                          !s && u.return && u.return();
                        } finally {
                          if (a) throw l;
                        }
                      }
                    } else r += i;
                  }
                this.element.setAttribute(this.name, r);
              }
            }
          ]),
          e
        );
      })())),
      j = (t.NodePart = (function() {
        function e(t, n, o) {
          r(this, e),
            (this.instance = t),
            (this.startNode = n),
            (this.endNode = o),
            (this._previousValue = void 0);
        }
        return (
          a(e, [
            {
              key: 'setValue',
              value: function(e) {
                if (
                  null === (e = w(this, e)) ||
                  ('object' !== (void 0 === e ? 'undefined' : s(e)) &&
                    'function' != typeof e)
                ) {
                  if (e === this._previousValue) return;
                  this._setText(e);
                } else
                  e instanceof h
                    ? this._setTemplateResult(e)
                    : Array.isArray(e) || e[Symbol.iterator]
                      ? this._setIterable(e)
                      : e instanceof Node
                        ? this._setNode(e)
                        : void 0 !== e.then
                          ? this._setPromise(e)
                          : this._setText(e);
              }
            },
            {
              key: '_insert',
              value: function(e) {
                this.endNode.parentNode.insertBefore(e, this.endNode);
              }
            },
            {
              key: '_setNode',
              value: function(e) {
                this.clear(), this._insert(e), (this._previousValue = e);
              }
            },
            {
              key: '_setText',
              value: function(e) {
                var t = this.startNode.nextSibling;
                t === this.endNode.previousSibling &&
                t.nodeType === Node.TEXT_NODE
                  ? (t.textContent = e)
                  : this._setNode(
                      document.createTextNode(void 0 === e ? '' : e)
                    ),
                  (this._previousValue = e);
              }
            },
            {
              key: '_setTemplateResult',
              value: function(e) {
                var t = void 0;
                this._previousValue &&
                this._previousValue.template === e.template
                  ? (t = this._previousValue)
                  : ((t = new O(e.template, this.instance._partCallback)),
                    this._setNode(t._clone()),
                    (this._previousValue = t)),
                  t.update(e.values);
              }
            },
            {
              key: '_setIterable',
              value: function(t) {
                Array.isArray(this._previousValue) ||
                  (this.clear(), (this._previousValue = []));
                var n = this._previousValue,
                  r = 0,
                  o = !0,
                  i = !1,
                  s = void 0;
                try {
                  for (
                    var a, l = t[Symbol.iterator]();
                    !(o = (a = l.next()).done);
                    o = !0
                  ) {
                    var c = a.value,
                      u = n[r];
                    if (void 0 === u) {
                      var p = this.startNode;
                      if (r > 0) {
                        (p = n[r - 1].endNode = document.createTextNode('')),
                          this._insert(p);
                      }
                      (u = new e(this.instance, p, this.endNode)), n.push(u);
                    }
                    u.setValue(c), r++;
                  }
                } catch (e) {
                  (i = !0), (s = e);
                } finally {
                  try {
                    !o && l.return && l.return();
                  } finally {
                    if (i) throw s;
                  }
                }
                if (0 === r) this.clear(), (this._previousValue = void 0);
                else if (r < n.length) {
                  var h = n[r - 1];
                  (n.length = r),
                    this.clear(h.endNode.previousSibling),
                    (h.endNode = this.endNode);
                }
              }
            },
            {
              key: '_setPromise',
              value: function(e) {
                var t = this;
                e.then(function(n) {
                  t._previousValue === e && t.setValue(n);
                }),
                  (this._previousValue = e);
              }
            },
            {
              key: 'clear',
              value: function() {
                for (
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.startNode,
                    t = void 0;
                  (t = e.nextSibling) !== this.endNode;

                )
                  t.parentNode.removeChild(t);
              }
            }
          ]),
          e
        );
      })()),
      _ = (t.defaultPartCallback = function(e, t, n) {
        if ('attribute' === t.type) return new x(e, n, t.name, t.strings);
        if ('node' === t.type) return new j(e, n, n.nextSibling);
        throw new Error('Unknown part type ' + t.type);
      }),
      O = (t.TemplateInstance = (function() {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
          r(this, e),
            (this._parts = []),
            (this.template = t),
            (this._partCallback = n);
        }
        return (
          a(e, [
            {
              key: 'update',
              value: function(e) {
                var t = 0,
                  n = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var i, s = this._parts[Symbol.iterator]();
                    !(n = (i = s.next()).done);
                    n = !0
                  ) {
                    var a = i.value;
                    void 0 === a.size
                      ? (a.setValue(e[t]), t++)
                      : (a.setValue(e, t), (t += a.size));
                  }
                } catch (e) {
                  (r = !0), (o = e);
                } finally {
                  try {
                    !n && s.return && s.return();
                  } finally {
                    if (r) throw o;
                  }
                }
              }
            },
            {
              key: '_clone',
              value: function() {
                var e = document.importNode(this.template.element.content, !0);
                if (this.template.parts.length > 0)
                  for (
                    var t = document.createTreeWalker(e, 133, null, !1),
                      n = this.template.parts,
                      r = 0,
                      o = 0,
                      i = n[0],
                      s = t.nextNode();
                    null != s && o < n.length;

                  )
                    r === i.index
                      ? (this._parts.push(this._partCallback(this, i, s)),
                        (i = n[++o]))
                      : (r++, (s = t.nextNode()));
                if (this.template.svg) {
                  var a = e.firstChild;
                  e.removeChild(a);
                  for (var l = a.childNodes, c = 0; c < l.length; c++)
                    e.appendChild(l.item(c));
                }
                return e;
              }
            }
          ]),
          e
        );
      })());
  },
  79: function(e, t, n) {
    'use strict';
    function r() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return (0, i.html)(o, t.join(''));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function(e, t) {
      return Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      );
    })(
      ['<style textContent="', '"></style>'],
      ['<style textContent="', '"></style>']
    );
    t.style = r;
    var i = n(57);
  }
});
