"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/registry.npmmirror.com+preact@10.13.2/node_modules/preact/dist/preact.module.js
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function v(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, r3, o4, f3 = {};
    for (o4 in u3)
      "key" == o4 ? t3 = u3[o4] : "ref" == o4 ? r3 = u3[o4] : f3[o4] = u3[o4];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (o4 in l3.defaultProps)
        void 0 === f3[o4] && (f3[o4] = l3.defaultProps[o4]);
    return p(l3, f3, t3, r3, null);
  }
  function p(n2, i3, t3, r3, o4) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o4 ? ++u : o4 };
    return null == o4 && null != l.vnode && l.vnode(f3), f3;
  }
  function d() {
    return { current: null };
  }
  function _(n2) {
    return n2.children;
  }
  function k(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function b(n2, l3) {
    if (null == l3)
      return n2.__ ? b(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? b(n2) : null;
  }
  function g(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return g(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
  }
  function w() {
    var n2, l3, u3, i3, r3, o4, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, r3 = void 0, e3 = (o4 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (r3 = h({}, o4)).__v = o4.__v + 1, L(c3, o4, r3, u3.__n, void 0 !== c3.ownerSVGElement, null != o4.__h ? [e3] : null, i3, null == e3 ? b(o4) : e3, o4.__h), M(i3, o4), o4.__e != e3 && g(o4)), t.length > l3 && t.sort(f));
    w.__r = 0;
  }
  function x(n2, l3, u3, i3, t3, r3, o4, f3, e3, a3) {
    var h3, v3, y3, d3, k4, g4, m3, w4 = i3 && i3.__k || s, x4 = w4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (d3 = u3.__k[h3] = null == (d3 = l3[h3]) || "boolean" == typeof d3 || "function" == typeof d3 ? null : "string" == typeof d3 || "number" == typeof d3 || "bigint" == typeof d3 ? p(null, d3, null, null, d3) : Array.isArray(d3) ? p(_, { children: d3 }, null, null, null) : d3.__b > 0 ? p(d3.type, d3.props, d3.key, d3.ref ? d3.ref : null, d3.__v) : d3)) {
        if (d3.__ = u3, d3.__b = u3.__b + 1, null === (y3 = w4[h3]) || y3 && d3.key == y3.key && d3.type === y3.type)
          w4[h3] = void 0;
        else
          for (v3 = 0; v3 < x4; v3++) {
            if ((y3 = w4[v3]) && d3.key == y3.key && d3.type === y3.type) {
              w4[v3] = void 0;
              break;
            }
            y3 = null;
          }
        L(n2, d3, y3 = y3 || c, t3, r3, o4, f3, e3, a3), k4 = d3.__e, (v3 = d3.ref) && y3.ref != v3 && (m3 || (m3 = []), y3.ref && m3.push(y3.ref, null, d3), m3.push(v3, d3.__c || k4, d3)), null != k4 ? (null == g4 && (g4 = k4), "function" == typeof d3.type && d3.__k === y3.__k ? d3.__d = e3 = A(d3, e3, n2) : e3 = C(n2, d3, y3, w4, k4, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = b(y3));
      }
    for (u3.__e = g4, h3 = x4; h3--; )
      null != w4[h3] && ("function" == typeof u3.type && null != w4[h3].__e && w4[h3].__e == u3.__d && (u3.__d = $(i3).nextSibling), S(w4[h3], w4[h3]));
    if (m3)
      for (h3 = 0; h3 < m3.length; h3++)
        O(m3[h3], m3[++h3], m3[++h3]);
  }
  function A(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? A(i3, l3, u3) : C(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function P(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      P(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function C(n2, l3, u3, i3, t3, r3) {
    var o4, f3, e3;
    if (void 0 !== l3.__d)
      o4 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != r3 || null == t3.parentNode)
      n:
        if (null == r3 || r3.parentNode !== n2)
          n2.appendChild(t3), o4 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o4 = r3;
        }
    return void 0 !== o4 ? o4 : t3.nextSibling;
  }
  function $(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = $(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      "children" === r3 || "key" === r3 || r3 in l3 || T(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && "function" != typeof l3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || u3[r3] === l3[r3] || T(n2, r3, l3[r3], u3[r3], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? z : j, r3) : n2.removeEventListener(l3, r3 ? z : j, r3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, r3, o4, f3, e3, c3) {
    var s3, a3, v3, y3, p3, d3, b3, g4, m3, w4, A4, P4, C3, $3, H3, I3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o4 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I3) {
          if (g4 = u3.props, m3 = (s3 = I3.contextType) && t3[s3.__c], w4 = s3 ? m3 ? m3.props.value : s3.__ : t3, i3.__c ? b3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I3 && I3.prototype.render ? u3.__c = a3 = new I3(g4, w4) : (u3.__c = a3 = new k(g4, w4), a3.constructor = I3, a3.render = q), m3 && m3.sub(a3), a3.props = g4, a3.state || (a3.state = {}), a3.context = w4, a3.__n = t3, v3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I3.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I3.getDerivedStateFromProps(g4, a3.__s))), y3 = a3.props, p3 = a3.state, a3.__v = u3, v3)
            null == I3.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I3.getDerivedStateFromProps && g4 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(g4, w4), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(g4, a3.__s, w4) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = g4, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A4 = 0; A4 < a3._sb.length; A4++)
                a3.__h.push(a3._sb[A4]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(g4, a3.__s, w4), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y3, p3, d3);
            });
          }
          if (a3.context = w4, a3.props = g4, a3.__P = n2, P4 = l.__r, C3 = 0, "prototype" in I3 && I3.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, P4 && P4(u3), s3 = a3.render(a3.props, a3.state, a3.context), $3 = 0; $3 < a3._sb.length; $3++)
              a3.__h.push(a3._sb[$3]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, P4 && P4(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++C3 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), v3 || null == a3.getSnapshotBeforeUpdate || (d3 = a3.getSnapshotBeforeUpdate(y3, p3)), H3 = null != s3 && s3.type === _ && null == s3.key ? s3.props.children : s3, x(n2, Array.isArray(H3) ? H3 : [H3], u3, i3, t3, r3, o4, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), b3 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == o4 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, r3, o4, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != o4) && (u3.__e = e3, u3.__h = !!c3, o4[o4.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, r3, o4, f3, e3) {
    var s3, a3, h3, y3 = i3.props, p3 = u3.props, d3 = u3.type, _4 = 0;
    if ("svg" === d3 && (r3 = true), null != o4) {
      for (; _4 < o4.length; _4++)
        if ((s3 = o4[_4]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
          l3 = s3, o4[_4] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), o4 = null, e3 = false;
    }
    if (null === d3)
      y3 === p3 || e3 && l3.data === p3 || (l3.data = p3);
    else {
      if (o4 = o4 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = p3.dangerouslySetInnerHTML, !e3) {
        if (null != o4)
          for (y3 = {}, _4 = 0; _4 < l3.attributes.length; _4++)
            y3[l3.attributes[_4].name] = l3.attributes[_4].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l3, p3, y3, r3, e3), h3)
        u3.__k = [];
      else if (_4 = u3.props.children, x(l3, Array.isArray(_4) ? _4 : [_4], u3, i3, t3, r3 && "foreignObject" !== d3, o4, f3, o4 ? o4[0] : i3.__k && b(i3, 0), e3), null != o4)
        for (_4 = o4.length; _4--; )
          null != o4[_4] && v(o4[_4]);
      e3 || ("value" in p3 && void 0 !== (_4 = p3.value) && (_4 !== l3.value || "progress" === d3 && !_4 || "option" === d3 && _4 !== y3.value) && T(l3, "value", _4, y3.value, false), "checked" in p3 && void 0 !== (_4 = p3.checked) && _4 !== l3.checked && T(l3, "checked", _4, y3.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function S(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && S(t3[r3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, i3, t3) {
    var r3, o4, f3;
    l.__ && l.__(u3, i3), o4 = (r3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!r3 && t3 || i3).__k = y(_, null, [u3]), o4 || c, c, void 0 !== i3.ownerSVGElement, !r3 && t3 ? [t3] : o4 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o4 ? o4.__e : i3.firstChild, r3), M(f3, u3);
  }
  function D(n2, l3) {
    B(n2, l3, D);
  }
  function E(l3, u3, i3) {
    var t3, r3, o4, f3 = h({}, l3.props);
    for (o4 in u3)
      "key" == o4 ? t3 = u3[o4] : "ref" == o4 ? r3 = u3[o4] : f3[o4] = u3[o4];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), p(l3.type, f3, t3 || l3.key, r3 || l3.ref, null);
  }
  function F(n2, l3) {
    var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, m(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, r, o, f, e, c, s, a;
  var init_preact_module = __esm({
    "node_modules/.pnpm/registry.npmmirror.com+preact@10.13.2/node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = s.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, r3, o4; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((r3 = t3.constructor) && null != r3.getDerivedStateFromError && (t3.setState(r3.getDerivedStateFromError(n2)), o4 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), o4 = t3.__d), o4)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, k.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), m(this));
      }, k.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, w.__r = 0, e = 0;
    }
  });

  // node_modules/.pnpm/registry.npmmirror.com+webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/.pnpm/registry.npmmirror.com+webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
      (function(global, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports !== "undefined") {
          factory(module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache2 = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache2;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache2) {
                    return cache2[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache2, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache2[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache2) {
                    cache2[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache2, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache2, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(
                  req,
                  {},
                  {
                    getContent: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  }
                );
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = globalThis.browser;
        }
      });
    }
  });

  // node_modules/.pnpm/registry.npmmirror.com+preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o4 = d2(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o4.__c.__H)
          return true;
        var u4 = o4.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o4.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o4.__N || o4.__;
  }
  function p2(u3, i3) {
    var o4 = d2(t2++, 3);
    !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__H.__h.push(o4));
  }
  function y2(u3, i3) {
    var o4 = d2(t2++, 4);
    !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__h.push(o4));
  }
  function _2(n2) {
    return o2 = 5, F2(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, t3, r3) {
    o2 = 6, y2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function F2(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F2(function() {
      return n2;
    }, t3);
  }
  function q2(n2) {
    var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function x2(t3, r3) {
    l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
  }
  function P2(n2) {
    var u3 = d2(t2++, 10), i3 = h2();
    return u3.__ = n2, r2.componentDidCatch || (r2.componentDidCatch = function(n3, t3) {
      u3.__ && u3.__(n3, t3), i3[1](n3);
    }), [i3[0], function() {
      i3[1](void 0);
    }];
  }
  function V() {
    var n2 = d2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/.pnpm/registry.npmmirror.com+preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o4 = t3.__c;
        o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/.pnpm/registry.npmmirror.com+preact@10.13.2/node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E2(n2, t3) {
    return n2 === t3 && (0 !== n2 || 1 / n2 == 1 / t3) || n2 != n2 && t3 != t3;
  }
  function w3(n2) {
    this.props = n2;
  }
  function x3(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, y(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function k3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function L2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    })), n2;
  }
  function U(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return U(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function M2(n2) {
    var e3, r3, u3;
    function o4(o5) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3)
        throw u3;
      if (!r3)
        throw e3;
      return y(r3, o5);
    }
    return o4.displayName = "Lazy", o4.__f = true, o4;
  }
  function V2() {
    this.u = null, this.o = null;
  }
  function P3(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function j3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      B(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), B(y(P3, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function z3(n2, e3) {
    var r3 = y(j3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  function G(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), B(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function J(n2, t3, e3) {
    return D(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  function fn(n2) {
    return y.bind(null, n2);
  }
  function an(n2) {
    return !!n2 && n2.$$typeof === B3;
  }
  function sn(n2) {
    return an(n2) ? E.apply(null, arguments) : n2;
  }
  function hn(n2) {
    return !!n2.__k && (B(null, n2), true);
  }
  function vn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  function yn(n2) {
    n2();
  }
  function _n(n2) {
    return n2;
  }
  function bn() {
    return [false, yn];
  }
  function gn(n2, t3) {
    var e3 = t3(), r3 = h2({ h: { __: e3, v: t3 } }), u3 = r3[0].h, o4 = r3[1];
    return y2(function() {
      u3.__ = e3, u3.v = t3, E2(u3.__, t3()) || o4({ h: u3 });
    }, [n2, e3, t3]), p2(function() {
      return E2(u3.__, u3.v()) || o4({ h: u3 }), n2(function() {
        E2(u3.__, u3.v()) || o4({ h: u3 });
      });
    }, [n2]), e3;
  }
  var R, N2, A3, O2, T3, I2, W, B3, H2, Z, Y, $2, q3, K, tn, en, rn, un, on, ln, cn, dn, pn, mn, Sn, Cn;
  var init_compat_module = __esm({
    "node_modules/.pnpm/registry.npmmirror.com+preact@10.13.2/node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (w3.prototype = new k()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
        return C2(this.props, n2) || C2(this.state, t3);
      };
      R = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
      };
      N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      A3 = function(n2, t3) {
        return null == n2 ? null : P(P(n2).map(t3));
      };
      O2 = { map: A3, forEach: A3, count: function(n2) {
        return n2 ? P(n2).length : 0;
      }, only: function(n2) {
        var t3 = P(n2);
        if (1 !== t3.length)
          throw "Children.only";
        return t3[0];
      }, toArray: P };
      T3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o4 = t3; o4 = o4.__; )
            if ((u3 = o4.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        T3(n2, t3, e3, r3);
      };
      I2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
      }, (D2.prototype = new k()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = F3(r3.__v), o4 = false, i3 = function() {
          o4 || (o4 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        }, c3 = true === t3.__h;
        r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, D2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D2.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o4 = this.__v.__k[0].__c;
            this.__v.__k[0] = L2(this.__b, r3, o4.__O = o4.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && y(_, null, n2.fallback);
        return i3 && (i3.__h = null), [y(_, null, e3.__a ? null : n2.children), i3];
      };
      W = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (V2.prototype = new k()).__a = function(n2) {
        var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o4 = function() {
            t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
          };
          e3 ? e3(o4) : o4();
        };
      }, V2.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = P(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          W(n2, e3, t3);
        });
      };
      B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Y = /[A-Z0-9]/g;
      $2 = "undefined" != typeof document;
      q3 = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      k.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(k.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      K = l.event;
      l.event = function(n2) {
        return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
      };
      en = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      rn = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {};
          for (var o4 in t3) {
            var i3 = t3[o4];
            if (!("value" === o4 && "defaultValue" in t3 && null == i3 || $2 && "children" === o4 && "noscript" === e3 || "class" === o4 || "className" === o4)) {
              var l3 = o4.toLowerCase();
              "defaultValue" === o4 && "value" in t3 && null == t3.value ? o4 = "value" : "download" === o4 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o4 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o4 = "onfocusin" : "onblur" === l3 ? o4 = "onfocusout" : Z.test(o4) ? o4 = l3 : -1 === e3.indexOf("-") && H2.test(o4) ? o4 = o4.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o4 = "oninput", "oninput" === l3 && u3[o4 = l3] && (o4 = "oninputCapture"), u3[o4] = i3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = P(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = P(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = B3, rn && rn(n2);
      };
      un = l.__r;
      l.__r = function(n2) {
        un && un(n2), tn = n2.__c;
      };
      on = l.diffed;
      l.diffed = function(n2) {
        on && on(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
      };
      ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return tn.__n[n2.__c].props.value;
      } } } };
      cn = "17.0.2";
      dn = function(n2, t3) {
        return n2(t3);
      };
      pn = function(n2, t3) {
        return n2(t3);
      };
      mn = _;
      Sn = y2;
      Cn = { useState: h2, useId: V, useReducer: s2, useEffect: p2, useLayoutEffect: y2, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _2, useImperativeHandle: A2, useMemo: F2, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: G, hydrate: J, unmountComponentAtNode: hn, createPortal: z3, createElement: y, createContext: F, createFactory: fn, cloneElement: sn, createRef: d, Fragment: _, isValidElement: an, findDOMNode: vn, Component: k, PureComponent: w3, memo: x3, forwardRef: k3, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D2, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
    }
  });

  // node_modules/.pnpm/registry.npmmirror.com+@preact+compat@17.1.2_preact@10.13.2/node_modules/@preact/compat/index.mjs
  var compat_exports = {};
  __export(compat_exports, {
    Children: () => O2,
    Component: () => k,
    Fragment: () => _,
    PureComponent: () => w3,
    StrictMode: () => mn,
    Suspense: () => D2,
    SuspenseList: () => V2,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ln,
    cloneElement: () => sn,
    createContext: () => F,
    createElement: () => y,
    createFactory: () => fn,
    createPortal: () => z3,
    createRef: () => d,
    default: () => Cn,
    findDOMNode: () => vn,
    flushSync: () => pn,
    forwardRef: () => k3,
    hydrate: () => J,
    isValidElement: () => an,
    lazy: () => M2,
    memo: () => x3,
    render: () => G,
    startTransition: () => yn,
    unmountComponentAtNode: () => hn,
    unstable_batchedUpdates: () => dn,
    useCallback: () => T2,
    useContext: () => q2,
    useDebugValue: () => x2,
    useDeferredValue: () => _n,
    useEffect: () => p2,
    useErrorBoundary: () => P2,
    useId: () => V,
    useImperativeHandle: () => A2,
    useInsertionEffect: () => Sn,
    useLayoutEffect: () => y2,
    useMemo: () => F2,
    useReducer: () => s2,
    useRef: () => _2,
    useState: () => h2,
    useSyncExternalStore: () => gn,
    useTransition: () => bn,
    version: () => cn
  });
  var init_compat = __esm({
    "node_modules/.pnpm/registry.npmmirror.com+@preact+compat@17.1.2_preact@10.13.2/node_modules/@preact/compat/index.mjs"() {
      init_compat_module();
      init_compat_module();
    }
  });

  // node_modules/.pnpm/registry.npmmirror.com+use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js
  var require_use_sync_external_store_shim_production_min = __commonJS({
    "node_modules/.pnpm/registry.npmmirror.com+use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"(exports) {
      "use strict";
      var e3 = (init_compat(), __toCommonJS(compat_exports));
      function h3(a3, b3) {
        return a3 === b3 && (0 !== a3 || 1 / a3 === 1 / b3) || a3 !== a3 && b3 !== b3;
      }
      var k4 = "function" === typeof Object.is ? Object.is : h3;
      var l3 = e3.useState;
      var m3 = e3.useEffect;
      var n2 = e3.useLayoutEffect;
      var p3 = e3.useDebugValue;
      function q4(a3, b3) {
        var d3 = b3(), f3 = l3({ inst: { value: d3, getSnapshot: b3 } }), c3 = f3[0].inst, g4 = f3[1];
        n2(function() {
          c3.value = d3;
          c3.getSnapshot = b3;
          r3(c3) && g4({ inst: c3 });
        }, [a3, d3, b3]);
        m3(function() {
          r3(c3) && g4({ inst: c3 });
          return a3(function() {
            r3(c3) && g4({ inst: c3 });
          });
        }, [a3]);
        p3(d3);
        return d3;
      }
      function r3(a3) {
        var b3 = a3.getSnapshot;
        a3 = a3.value;
        try {
          var d3 = b3();
          return !k4(a3, d3);
        } catch (f3) {
          return true;
        }
      }
      function t3(a3, b3) {
        return b3();
      }
      var u3 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t3 : q4;
      exports.useSyncExternalStore = void 0 !== e3.useSyncExternalStore ? e3.useSyncExternalStore : u3;
    }
  });

  // node_modules/.pnpm/registry.npmmirror.com+use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/.pnpm/registry.npmmirror.com+use-sync-external-store@1.2.0_@preact+compat@17.1.2/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_use_sync_external_store_shim_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/popup/index.tsx
  init_preact_module();

  // src/assets/img/logo.png
  var logo_default = "data:image/png;base64,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";

  // src/config/index.ts
  var import_webextension_polyfill = __toESM(require_browser_polyfill());
  var APP_TITLE = `Glarity Summary`;

  // src/popup/App.tsx
  init_compat();

  // node_modules/.pnpm/registry.npmmirror.com+swr@2.1.3_@preact+compat@17.1.2/node_modules/swr/core/dist/index.mjs
  init_compat();
  var import_shim = __toESM(require_shim(), 1);

  // node_modules/.pnpm/registry.npmmirror.com+swr@2.1.3_@preact+compat@17.1.2/node_modules/swr/_internal/dist/index.mjs
  init_compat();
  var SWRGlobalState = /* @__PURE__ */ new WeakMap();
  var EMPTY_CACHE = {};
  var INITIAL_CACHE = {};
  var noop = () => {
  };
  var UNDEFINED = (
    /*#__NOINLINE__*/
    noop()
  );
  var OBJECT = Object;
  var isUndefined = (v3) => v3 === UNDEFINED;
  var isFunction = (v3) => typeof v3 == "function";
  var mergeObjects = (a3, b3) => ({
    ...a3,
    ...b3
  });
  var STR_UNDEFINED = "undefined";
  var isWindowDefined = typeof window != STR_UNDEFINED;
  var isDocumentDefined = typeof document != STR_UNDEFINED;
  var hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
  var createCacheHelper = (cache2, key) => {
    const state = SWRGlobalState.get(cache2);
    return [
      // Getter
      () => !isUndefined(key) && cache2.get(key) || EMPTY_CACHE,
      // Setter
      (info) => {
        if (!isUndefined(key)) {
          const prev = cache2.get(key);
          if (!(key in INITIAL_CACHE)) {
            INITIAL_CACHE[key] = prev;
          }
          state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
        }
      },
      // Subscriber
      state[6],
      // Get server cache snapshot
      () => {
        if (!isUndefined(key)) {
          if (key in INITIAL_CACHE)
            return INITIAL_CACHE[key];
        }
        return !isUndefined(key) && cache2.get(key) || EMPTY_CACHE;
      }
    ];
  };
  var table = /* @__PURE__ */ new WeakMap();
  var counter = 0;
  var stableHash = (arg) => {
    const type = typeof arg;
    const constructor = arg && arg.constructor;
    const isDate = constructor == Date;
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
      result = table.get(arg);
      if (result)
        return result;
      result = ++counter + "~";
      table.set(arg, result);
      if (constructor == Array) {
        result = "@";
        for (index = 0; index < arg.length; index++) {
          result += stableHash(arg[index]) + ",";
        }
        table.set(arg, result);
      }
      if (constructor == OBJECT) {
        result = "#";
        const keys = OBJECT.keys(arg).sort();
        while (!isUndefined(index = keys.pop())) {
          if (!isUndefined(arg[index])) {
            result += index + ":" + stableHash(arg[index]) + ",";
          }
        }
        table.set(arg, result);
      }
    } else {
      result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
    }
    return result;
  };
  var online = true;
  var isOnline = () => online;
  var [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
  ] : [
    noop,
    noop
  ];
  var isVisible = () => {
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== "hidden";
  };
  var initFocus = (callback) => {
    if (isDocumentDefined) {
      document.addEventListener("visibilitychange", callback);
    }
    onWindowEvent("focus", callback);
    return () => {
      if (isDocumentDefined) {
        document.removeEventListener("visibilitychange", callback);
      }
      offWindowEvent("focus", callback);
    };
  };
  var initReconnect = (callback) => {
    const onOnline = () => {
      online = true;
      callback();
    };
    const onOffline = () => {
      online = false;
    };
    onWindowEvent("online", onOnline);
    onWindowEvent("offline", onOffline);
    return () => {
      offWindowEvent("online", onOnline);
      offWindowEvent("offline", onOffline);
    };
  };
  var preset = {
    isOnline,
    isVisible
  };
  var defaultConfigOptions = {
    initFocus,
    initReconnect
  };
  var IS_REACT_LEGACY = !Cn.useId;
  var IS_SERVER = !isWindowDefined || "Deno" in window;
  var rAF = (f3) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f3) : setTimeout(f3, 1);
  var useIsomorphicLayoutEffect = IS_SERVER ? p2 : y2;
  var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
  var slowConnection = !IS_SERVER && navigatorConnection && ([
    "slow-2g",
    "2g"
  ].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
  var serialize = (key) => {
    if (isFunction(key)) {
      try {
        key = key();
      } catch (err) {
        key = "";
      }
    }
    const args = key;
    key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
    return [
      key,
      args
    ];
  };
  var __timestamp = 0;
  var getTimestamp = () => ++__timestamp;
  var FOCUS_EVENT = 0;
  var RECONNECT_EVENT = 1;
  var MUTATE_EVENT = 2;
  var ERROR_REVALIDATE_EVENT = 3;
  var constants = {
    __proto__: null,
    FOCUS_EVENT,
    RECONNECT_EVENT,
    MUTATE_EVENT,
    ERROR_REVALIDATE_EVENT
  };
  async function internalMutate(...args) {
    const [cache2, _key, _data, _opts] = args;
    const options = mergeObjects({
      populateCache: true,
      throwOnError: true
    }, typeof _opts === "boolean" ? {
      revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const revalidate = options.revalidate !== false;
    const rollbackOnError = (error) => {
      return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    if (isFunction(_key)) {
      const keyFilter = _key;
      const matchedKeys = [];
      const it = cache2.keys();
      for (let keyIt = it.next(); !keyIt.done; keyIt = it.next()) {
        const key = keyIt.value;
        if (
          // Skip the special useSWRInfinite and useSWRSubscription keys.
          !/^\$(inf|sub)\$/.test(key) && keyFilter(cache2.get(key)._k)
        ) {
          matchedKeys.push(key);
        }
      }
      return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    async function mutateByKey(_k) {
      const [key] = serialize(_k);
      if (!key)
        return;
      const [get, set] = createCacheHelper(cache2, key);
      const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
      const revalidators = EVENT_REVALIDATORS[key];
      const startRevalidate = () => {
        if (revalidate) {
          delete FETCH[key];
          if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(() => get().data);
          }
        }
        return get().data;
      };
      if (args.length < 3) {
        return startRevalidate();
      }
      let data = _data;
      let error;
      const beforeMutationTs = getTimestamp();
      MUTATION[key] = [
        beforeMutationTs,
        0
      ];
      const hasOptimisticData = !isUndefined(optimisticData);
      const state = get();
      const displayedData = state.data;
      const currentData = state._c;
      const committedData = isUndefined(currentData) ? displayedData : currentData;
      if (hasOptimisticData) {
        optimisticData = isFunction(optimisticData) ? optimisticData(committedData) : optimisticData;
        set({
          data: optimisticData,
          _c: committedData
        });
      }
      if (isFunction(data)) {
        try {
          data = data(committedData);
        } catch (err) {
          error = err;
        }
      }
      if (data && isFunction(data.then)) {
        data = await data.catch((err) => {
          error = err;
        });
        if (beforeMutationTs !== MUTATION[key][0]) {
          if (error)
            throw error;
          return data;
        } else if (error && hasOptimisticData && rollbackOnError(error)) {
          populateCache = true;
          data = committedData;
          set({
            data,
            _c: UNDEFINED
          });
        }
      }
      if (populateCache) {
        if (!error) {
          if (isFunction(populateCache)) {
            data = populateCache(data, committedData);
          }
          set({
            data,
            _c: UNDEFINED
          });
        }
      }
      MUTATION[key][1] = getTimestamp();
      const res = await startRevalidate();
      set({
        _c: UNDEFINED
      });
      if (error) {
        if (throwOnError)
          throw error;
        return;
      }
      return populateCache ? res : data;
    }
  }
  var revalidateAllKeys = (revalidators, type) => {
    for (const key in revalidators) {
      if (revalidators[key][0])
        revalidators[key][0](type);
    }
  };
  var initCache = (provider, options) => {
    if (!SWRGlobalState.has(provider)) {
      const opts = mergeObjects(defaultConfigOptions, options);
      const EVENT_REVALIDATORS = {};
      const mutate2 = internalMutate.bind(UNDEFINED, provider);
      let unmount = noop;
      const subscriptions = {};
      const subscribe = (key, callback) => {
        const subs = subscriptions[key] || [];
        subscriptions[key] = subs;
        subs.push(callback);
        return () => subs.splice(subs.indexOf(callback), 1);
      };
      const setter = (key, value, prev) => {
        provider.set(key, value);
        const subs = subscriptions[key];
        if (subs) {
          for (const fn2 of subs) {
            fn2(value, prev);
          }
        }
      };
      const initProvider = () => {
        if (!SWRGlobalState.has(provider)) {
          SWRGlobalState.set(provider, [
            EVENT_REVALIDATORS,
            {},
            {},
            {},
            mutate2,
            setter,
            subscribe
          ]);
          if (!IS_SERVER) {
            const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = () => {
              releaseFocus && releaseFocus();
              releaseReconnect && releaseReconnect();
              SWRGlobalState.delete(provider);
            };
          }
        }
      };
      initProvider();
      return [
        provider,
        mutate2,
        initProvider,
        unmount
      ];
    }
    return [
      provider,
      SWRGlobalState.get(provider)[4]
    ];
  };
  var onErrorRetry = (_4, __, config, revalidate, opts) => {
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
      return;
    }
    setTimeout(revalidate, timeout, opts);
  };
  var compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
  var [cache, mutate] = initCache(/* @__PURE__ */ new Map());
  var defaultConfig = mergeObjects(
    {
      // events
      onLoadingSlow: noop,
      onSuccess: noop,
      onError: noop,
      onErrorRetry,
      onDiscarded: noop,
      // switches
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      shouldRetryOnError: true,
      // timeouts
      errorRetryInterval: slowConnection ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: slowConnection ? 5e3 : 3e3,
      // providers
      compare,
      isPaused: () => false,
      cache,
      mutate,
      fallback: {}
    },
    // use web preset by default
    preset
  );
  var mergeConfigs = (a3, b3) => {
    const v3 = mergeObjects(a3, b3);
    if (b3) {
      const { use: u1, fallback: f1 } = a3;
      const { use: u22, fallback: f22 } = b3;
      if (u1 && u22) {
        v3.use = u1.concat(u22);
      }
      if (f1 && f22) {
        v3.fallback = mergeObjects(f1, f22);
      }
    }
    return v3;
  };
  var SWRConfigContext = F({});
  var SWRConfig = (props) => {
    const { value } = props;
    const parentConfig = q2(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = F2(() => isFunctionalConfig ? value(parentConfig) : value, [
      isFunctionalConfig,
      parentConfig,
      value
    ]);
    const extendedConfig = F2(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
      isFunctionalConfig,
      parentConfig,
      config
    ]);
    const provider = config && config.provider;
    const cacheContextRef = _2(UNDEFINED);
    if (provider && !cacheContextRef.current) {
      cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    if (cacheContext) {
      extendedConfig.cache = cacheContext[0];
      extendedConfig.mutate = cacheContext[1];
    }
    useIsomorphicLayoutEffect(() => {
      if (cacheContext) {
        cacheContext[2] && cacheContext[2]();
        return cacheContext[3];
      }
    }, []);
    return y(SWRConfigContext.Provider, mergeObjects(props, {
      value: extendedConfig
    }));
  };
  var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
  var use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
  var setupDevTools = () => {
    if (enableDevtools) {
      window.__SWR_DEVTOOLS_REACT__ = Cn;
    }
  };
  var normalize = (args) => {
    return isFunction(args[1]) ? [
      args[0],
      args[1],
      args[2] || {}
    ] : [
      args[0],
      null,
      (args[1] === null ? args[2] : args[1]) || {}
    ];
  };
  var useSWRConfig = () => {
    return mergeObjects(defaultConfig, q2(SWRConfigContext));
  };
  var middleware = (useSWRNext) => (key_, fetcher_, config) => {
    const fetcher = fetcher_ && ((...args) => {
      const key = serialize(key_)[0];
      const [, , , PRELOAD] = SWRGlobalState.get(cache);
      const req = PRELOAD[key];
      if (req) {
        delete PRELOAD[key];
        return req;
      }
      return fetcher_(...args);
    });
    return useSWRNext(key_, fetcher, config);
  };
  var BUILT_IN_MIDDLEWARE = use.concat(middleware);
  var withArgs = (hook) => {
    return function useSWRArgs(...args) {
      const fallbackConfig = useSWRConfig();
      const [key, fn2, _config] = normalize(args);
      const config = mergeConfigs(fallbackConfig, _config);
      let next = hook;
      const { use: use2 } = config;
      const middleware2 = (use2 || []).concat(BUILT_IN_MIDDLEWARE);
      for (let i3 = middleware2.length; i3--; ) {
        next = middleware2[i3](next);
      }
      return next(key, fn2 || config.fetcher || null, config);
    };
  };
  var subscribeCallback = (key, callbacks, callback) => {
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return () => {
      const index = keyedRevalidators.indexOf(callback);
      if (index >= 0) {
        keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
        keyedRevalidators.pop();
      }
    };
  };
  setupDevTools();

  // node_modules/.pnpm/registry.npmmirror.com+swr@2.1.3_@preact+compat@17.1.2/node_modules/swr/core/dist/index.mjs
  var WITH_DEDUPE = {
    dedupe: true
  };
  var useSWRHandler = (_key, fetcher, config) => {
    const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
    const [key, fnArg] = serialize(_key);
    const initialMountedRef = _2(false);
    const unmountedRef = _2(false);
    const keyRef = _2(key);
    const fetcherRef = _2(fetcher);
    const configRef = _2(config);
    const getConfig = () => configRef.current;
    const isActive = () => getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
    const stateDependencies = _2({}).current;
    const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
    const isEqual = (prev, current) => {
      let equal = true;
      for (const _4 in stateDependencies) {
        const t3 = _4;
        if (t3 === "data") {
          if (!compare2(current[t3], prev[t3])) {
            if (isUndefined(prev[t3])) {
              if (!compare2(current[t3], returnedData)) {
                equal = false;
              }
            } else {
              equal = false;
            }
          }
        } else {
          if (current[t3] !== prev[t3]) {
            equal = false;
          }
        }
      }
      return equal;
    };
    const getSnapshot = F2(() => {
      const shouldStartRequest = (() => {
        if (!key)
          return false;
        if (!fetcher)
          return false;
        if (!isUndefined(revalidateOnMount))
          return revalidateOnMount;
        if (getConfig().isPaused())
          return false;
        if (suspense)
          return false;
        if (!isUndefined(revalidateIfStale))
          return revalidateIfStale;
        return true;
      })();
      const getSelectedCache = (state) => {
        const snapshot = mergeObjects(state);
        delete snapshot._k;
        if (!shouldStartRequest) {
          return snapshot;
        }
        return {
          isValidating: true,
          isLoading: true,
          ...snapshot
        };
      };
      const cachedData2 = getCache();
      const initialData = getInitialCache();
      const clientSnapshot = getSelectedCache(cachedData2);
      const serverSnapshot = cachedData2 === initialData ? clientSnapshot : getSelectedCache(initialData);
      let memorizedSnapshot = clientSnapshot;
      return [
        () => {
          const newSnapshot = getSelectedCache(getCache());
          return isEqual(newSnapshot, memorizedSnapshot) ? memorizedSnapshot : memorizedSnapshot = newSnapshot;
        },
        () => serverSnapshot
      ];
    }, [
      cache2,
      key
    ]);
    const cached = (0, import_shim.useSyncExternalStore)(T2(
      (callback) => subscribeCache(key, (current, prev) => {
        if (!isEqual(prev, current))
          callback();
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        cache2,
        key
      ]
    ), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = isUndefined(cachedData) ? fallback : cachedData;
    const error = cached.error;
    const laggyDataRef = _2(data);
    const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
    const shouldDoInitialRevalidation = (() => {
      if (hasRevalidator && !isUndefined(error))
        return false;
      if (isInitialMount && !isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return isUndefined(data) ? false : revalidateIfStale;
      return isUndefined(data) || revalidateIfStale;
    })();
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    const revalidate = T2(
      async (revalidateOpts) => {
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
          return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        const callbackSafeguard = () => {
          if (IS_REACT_LEGACY) {
            return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
          }
          return key === keyRef.current;
        };
        const finalState = {
          isValidating: false,
          isLoading: false
        };
        const finishRequestAndUpdateState = () => {
          setCache(finalState);
        };
        const cleanupState = () => {
          const requestInfo = FETCH[key];
          if (requestInfo && requestInfo[1] === startAt) {
            delete FETCH[key];
          }
        };
        const initialState = {
          isValidating: true
        };
        if (isUndefined(getCache().data)) {
          initialState.isLoading = true;
        }
        try {
          if (shouldStartNewRequest) {
            setCache(initialState);
            if (config.loadingTimeout && isUndefined(getCache().data)) {
              setTimeout(() => {
                if (loading && callbackSafeguard()) {
                  getConfig().onLoadingSlow(key, config);
                }
              }, config.loadingTimeout);
            }
            FETCH[key] = [
              currentFetcher(fnArg),
              getTimestamp()
            ];
          }
          [newData, startAt] = FETCH[key];
          newData = await newData;
          if (shouldStartNewRequest) {
            setTimeout(cleanupState, config.dedupingInterval);
          }
          if (!FETCH[key] || FETCH[key][1] !== startAt) {
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onDiscarded(key);
              }
            }
            return false;
          }
          finalState.error = UNDEFINED;
          const mutationInfo = MUTATION[key];
          if (!isUndefined(mutationInfo) && // case 1
          (startAt <= mutationInfo[0] || // case 2
          startAt <= mutationInfo[1] || // case 3
          mutationInfo[1] === 0)) {
            finishRequestAndUpdateState();
            if (shouldStartNewRequest) {
              if (callbackSafeguard()) {
                getConfig().onDiscarded(key);
              }
            }
            return false;
          }
          const cacheData = getCache().data;
          finalState.data = compare2(cacheData, newData) ? cacheData : newData;
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onSuccess(newData, key, config);
            }
          }
        } catch (err) {
          cleanupState();
          const currentConfig = getConfig();
          const { shouldRetryOnError } = currentConfig;
          if (!currentConfig.isPaused()) {
            finalState.error = err;
            if (shouldStartNewRequest && callbackSafeguard()) {
              currentConfig.onError(err, key, currentConfig);
              if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
                if (isActive()) {
                  currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
                    const revalidators = EVENT_REVALIDATORS[key];
                    if (revalidators && revalidators[0]) {
                      revalidators[0](constants.ERROR_REVALIDATE_EVENT, _opts);
                    }
                  }, {
                    retryCount: (opts.retryCount || 0) + 1,
                    dedupe: true
                  });
                }
              }
            }
          }
        }
        loading = false;
        finishRequestAndUpdateState();
        return true;
      },
      // `setState` is immutable, and `eventsCallback`, `fnArg`, and
      // `keyValidating` are depending on `key`, so we can exclude them from
      // the deps array.
      //
      // FIXME:
      // `fn` and `config` might be changed during the lifecycle,
      // but they might be changed every render like this.
      // `useSWR('key', () => fetch('/api/'), { suspense: true })`
      // So we omit the values from the deps array
      // even though it might cause unexpected behaviors.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        key,
        cache2
      ]
    );
    const boundMutate = T2(
      // Use callback to make sure `keyRef.current` returns latest result every time
      (...args) => {
        return internalMutate(cache2, keyRef.current, ...args);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    useIsomorphicLayoutEffect(() => {
      fetcherRef.current = fetcher;
      configRef.current = config;
      if (!isUndefined(cachedData)) {
        laggyDataRef.current = cachedData;
      }
    });
    useIsomorphicLayoutEffect(() => {
      if (!key)
        return;
      const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
      let nextFocusRevalidatedAt = 0;
      const onRevalidate = (type, opts = {}) => {
        if (type == constants.FOCUS_EVENT) {
          const now = Date.now();
          if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
            nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
            softRevalidate();
          }
        } else if (type == constants.RECONNECT_EVENT) {
          if (getConfig().revalidateOnReconnect && isActive()) {
            softRevalidate();
          }
        } else if (type == constants.MUTATE_EVENT) {
          return revalidate();
        } else if (type == constants.ERROR_REVALIDATE_EVENT) {
          return revalidate(opts);
        }
        return;
      };
      const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
      unmountedRef.current = false;
      keyRef.current = key;
      initialMountedRef.current = true;
      setCache({
        _k: fnArg
      });
      if (shouldDoInitialRevalidation) {
        if (isUndefined(data) || IS_SERVER) {
          softRevalidate();
        } else {
          rAF(softRevalidate);
        }
      }
      return () => {
        unmountedRef.current = true;
        unsubEvents();
      };
    }, [
      key
    ]);
    useIsomorphicLayoutEffect(() => {
      let timer;
      function next() {
        const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
        if (interval && timer !== -1) {
          timer = setTimeout(execute, interval);
        }
      }
      function execute() {
        if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
          revalidate(WITH_DEDUPE).then(next);
        } else {
          next();
        }
      }
      next();
      return () => {
        if (timer) {
          clearTimeout(timer);
          timer = -1;
        }
      };
    }, [
      refreshInterval,
      refreshWhenHidden,
      refreshWhenOffline,
      key
    ]);
    x2(returnedData);
    if (suspense && isUndefined(data) && key) {
      if (!IS_REACT_LEGACY && IS_SERVER) {
        throw new Error("Fallback data is required when using suspense in SSR.");
      }
      fetcherRef.current = fetcher;
      configRef.current = config;
      unmountedRef.current = false;
      throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
      mutate: boundMutate,
      get data() {
        stateDependencies.data = true;
        return returnedData;
      },
      get error() {
        stateDependencies.error = true;
        return error;
      },
      get isValidating() {
        stateDependencies.isValidating = true;
        return isValidating;
      },
      get isLoading() {
        stateDependencies.isLoading = true;
        return isLoading;
      }
    };
  };
  var SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
    value: defaultConfig
  });
  var useSWR = withArgs(useSWRHandler);

  // src/popup/App.tsx
  var import_webextension_polyfill2 = __toESM(require_browser_polyfill());

  // node_modules/.pnpm/registry.npmmirror.com+preact@10.13.2/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var _3 = 0;
  function o3(o4, e3, n2, t3, f3, l3) {
    var s3, u3, a3 = {};
    for (u3 in e3)
      "ref" == u3 ? s3 = e3[u3] : a3[u3] = e3[u3];
    var i3 = { type: o4, props: a3, key: n2, ref: s3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f3, __self: l3 };
    if ("function" == typeof o4 && (s3 = o4.defaultProps))
      for (u3 in s3)
        void 0 === a3[u3] && (a3[u3] = s3[u3]);
    return l.vnode && l.vnode(i3), i3;
  }

  // src/popup/App.tsx
  var isChrome = /chrome/i.test(navigator.userAgent);
  function App() {
    const [question, setQuestion] = h2("");
    const accessTokenQuery = useSWR(
      "accessToken",
      () => import_webextension_polyfill2.default.runtime.sendMessage({ type: "GET_ACCESS_TOKEN" }),
      { shouldRetryOnError: false }
    );
    const hideShortcutsTipQuery = useSWR("hideShortcutsTip", async () => {
      const { hideShortcutsTip } = await import_webextension_polyfill2.default.storage.local.get("hideShortcutsTip");
      return !!hideShortcutsTip;
    });
    const openOptionsPage = T2(() => {
      import_webextension_polyfill2.default.runtime.sendMessage({ type: "OPEN_OPTIONS_PAGE" });
    }, []);
    const openShortcutsPage = T2(() => {
      import_webextension_polyfill2.default.storage.local.set({ hideShortcutsTip: true });
      import_webextension_polyfill2.default.tabs.create({ url: "chrome://extensions/shortcuts" });
    }, []);
    return /* @__PURE__ */ o3("div", { className: "glarity--flex glarity--flex-col glarity--h-full glarity--popup", children: [
      /* @__PURE__ */ o3("div", { className: "glarity--mb-1 glarity--flex glarity--flex-row glarity--items-center glarity--px-1", children: [
        /* @__PURE__ */ o3("img", { src: logo_default, className: "glarity--w-5 glarity--h-5 glarity--rounded-sm" }),
        /* @__PURE__ */ o3("p", { className: "glarity--text-sm glarity--font-semibold glarity--m-0 glarity--ml-1", children: APP_TITLE })
      ] }),
      isChrome && !hideShortcutsTipQuery.isLoading && !hideShortcutsTipQuery.data && /* @__PURE__ */ o3("p", { className: "glarity--m-0 glarity--mb-1", children: [
        "Tip:",
        " ",
        /* @__PURE__ */ o3("a", { onClick: openShortcutsPage, className: "glarity--underline glarity--cursor-pointer", children: "setup shortcuts" }),
        " ",
        "for faster access."
      ] })
    ] });
  }
  var App_default = App;

  // src/popup/index.tsx
  B(/* @__PURE__ */ o3(App_default, {}), document.getElementById("app"));
})();
