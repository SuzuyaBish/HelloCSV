var Ba = Object.defineProperty;
var ja = (e, t, n) => t in e ? Ba(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ae = (e, t, n) => ja(e, typeof t != "symbol" ? t + "" : t, n);
var _n, re, ll, yt, Zo, sl, kr, al, mo, Nr, Ar, ul, dn = {}, cl = [], Ua = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Kn = Array.isArray;
function rt(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function go(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function P(e, t, n) {
  var r, o, i, l = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : l[i] = t[i];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? _n.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) l[i] === void 0 && (l[i] = e.defaultProps[i]);
  return on(e, l, r, o, null);
}
function on(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ll, __i: -1, __u: 0 };
  return o == null && re.vnode != null && re.vnode(i), i;
}
function Yn() {
  return { current: null };
}
function me(e) {
  return e.children;
}
function ze(e, t) {
  this.props = e, this.context = t;
}
function Ht(e, t) {
  if (t == null) return e.__ ? Ht(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Ht(e) : null;
}
function dl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return dl(e);
  }
}
function Dr(e) {
  (!e.__d && (e.__d = !0) && yt.push(e) && !Vn.__r++ || Zo !== re.debounceRendering) && ((Zo = re.debounceRendering) || sl)(Vn);
}
function Vn() {
  var e, t, n, r, o, i, l, s;
  for (yt.sort(kr); e = yt.shift(); ) e.__d && (t = yt.length, r = void 0, i = (o = (n = e).__v).__e, l = [], s = [], n.__P && ((r = rt({}, o)).__v = o.__v + 1, re.vnode && re.vnode(r), ho(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, l, i ?? Ht(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, ml(l, r, s), r.__e != i && dl(r)), yt.length > t && yt.sort(kr));
  Vn.__r = 0;
}
function fl(e, t, n, r, o, i, l, s, a, u, c) {
  var d, p, f, m, h, v, w = r && r.__k || cl, b = t.length;
  for (a = Wa(n, t, w, a, b), d = 0; d < b; d++) (f = n.__k[d]) != null && (p = f.__i === -1 ? dn : w[f.__i] || dn, f.__i = d, v = ho(e, f, p, o, i, l, s, a, u, c), m = f.__e, f.ref && p.ref != f.ref && (p.ref && vo(p.ref, null, f), c.push(f.ref, f.__c || m, f)), h == null && m != null && (h = m), 4 & f.__u || p.__k === f.__k ? a = pl(f, a, e) : typeof f.type == "function" && v !== void 0 ? a = v : m && (a = m.nextSibling), f.__u &= -7);
  return n.__e = h, a;
}
function Wa(e, t, n, r, o) {
  var i, l, s, a, u, c = n.length, d = c, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (l = t[i]) != null && typeof l != "boolean" && typeof l != "function" ? (a = i + p, (l = e.__k[i] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? on(null, l, null, null, null) : Kn(l) ? on(me, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? on(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, s = null, (u = l.__i = Ga(l, n, a, d)) !== -1 && (d--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v === null ? (u == -1 && p--, typeof l.type != "function" && (l.__u |= 4)) : u != a && (u == a - 1 ? p-- : u == a + 1 ? p++ : (u > a ? p-- : p++, l.__u |= 4))) : e.__k[i] = null;
  if (d) for (i = 0; i < c; i++) (s = n[i]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = Ht(s)), gl(s, s));
  return r;
}
function pl(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = pl(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = Ht(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ot(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Kn(e) ? e.some(function(n) {
    ot(n, t);
  }) : t.push(e)), t;
}
function Ga(e, t, n, r) {
  var o, i, l = e.key, s = e.type, a = t[n];
  if (a === null || a && l == a.key && s === a.type && (2 & a.__u) == 0) return n;
  if (r > (a != null && (2 & a.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((a = t[o]) && (2 & a.__u) == 0 && l == a.key && s === a.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((a = t[i]) && (2 & a.__u) == 0 && l == a.key && s === a.type) return i;
      i++;
    }
  }
  return -1;
}
function Jo(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Ua.test(t) ? n : n + "px";
}
function In(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Jo(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || Jo(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(al, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = mo, e.addEventListener(t, i ? Ar : Nr, i)) : e.removeEventListener(t, i ? Ar : Nr, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Qo(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = mo++;
      else if (t.t < n.u) return;
      return n(re.event ? re.event(t) : t);
    }
  };
}
function ho(e, t, n, r, o, i, l, s, a, u) {
  var c, d, p, f, m, h, v, w, b, C, E, I, M, R, _, y, x, S = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (a = !!(32 & n.__u), i = [s = t.__e = n.__e]), (c = re.__b) && c(t);
  e: if (typeof S == "function") try {
    if (w = t.props, b = "prototype" in S && S.prototype.render, C = (c = S.contextType) && r[c.__c], E = c ? C ? C.props.value : c.__ : r, n.__c ? v = (d = t.__c = n.__c).__ = d.__E : (b ? t.__c = d = new S(w, E) : (t.__c = d = new ze(w, E), d.constructor = S, d.render = Ka), C && C.sub(d), d.props = w, d.state || (d.state = {}), d.context = E, d.__n = r, p = d.__d = !0, d.__h = [], d._sb = []), b && d.__s == null && (d.__s = d.state), b && S.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = rt({}, d.__s)), rt(d.__s, S.getDerivedStateFromProps(w, d.__s))), f = d.props, m = d.state, d.__v = t, p) b && S.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), b && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (b && S.getDerivedStateFromProps == null && w !== f && d.componentWillReceiveProps != null && d.componentWillReceiveProps(w, E), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(w, d.__s, E) === !1 || t.__v == n.__v)) {
        for (t.__v != n.__v && (d.props = w, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(T) {
          T && (T.__ = t);
        }), I = 0; I < d._sb.length; I++) d.__h.push(d._sb[I]);
        d._sb = [], d.__h.length && l.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(w, d.__s, E), b && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(f, m, h);
      });
    }
    if (d.context = E, d.props = w, d.__P = e, d.__e = !1, M = re.__r, R = 0, b) {
      for (d.state = d.__s, d.__d = !1, M && M(t), c = d.render(d.props, d.state, d.context), _ = 0; _ < d._sb.length; _++) d.__h.push(d._sb[_]);
      d._sb = [];
    } else do
      d.__d = !1, M && M(t), c = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++R < 25);
    d.state = d.__s, d.getChildContext != null && (r = rt(rt({}, r), d.getChildContext())), b && !p && d.getSnapshotBeforeUpdate != null && (h = d.getSnapshotBeforeUpdate(f, m)), s = fl(e, Kn(y = c != null && c.type === me && c.key == null ? c.props.children : c) ? y : [y], t, n, r, o, i, l, s, a, u), d.base = t.__e, t.__u &= -161, d.__h.length && l.push(d), v && (d.__E = d.__ = null);
  } catch (T) {
    if (t.__v = null, a || i != null) if (T.then) {
      for (t.__u |= a ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, t.__e = s;
    } else for (x = i.length; x--; ) go(i[x]);
    else t.__e = n.__e, t.__k = n.__k;
    re.__e(T, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = qa(n.__e, t, n, r, o, i, l, a, u);
  return (c = re.diffed) && c(t), 128 & t.__u ? void 0 : s;
}
function ml(e, t, n) {
  for (var r = 0; r < n.length; r++) vo(n[r], n[++r], n[++r]);
  re.__c && re.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      re.__e(i, o.__v);
    }
  });
}
function qa(e, t, n, r, o, i, l, s, a) {
  var u, c, d, p, f, m, h, v = n.props, w = t.props, b = t.type;
  if (b == "svg" ? o = "http://www.w3.org/2000/svg" : b == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (u = 0; u < i.length; u++) if ((f = i[u]) && "setAttribute" in f == !!b && (b ? f.localName == b : f.nodeType == 3)) {
      e = f, i[u] = null;
      break;
    }
  }
  if (e == null) {
    if (b == null) return document.createTextNode(w);
    e = document.createElementNS(o, b, w.is && w), s && (re.__m && re.__m(t, i), s = !1), i = null;
  }
  if (b === null) v === w || s && e.data === w || (e.data = w);
  else {
    if (i = i && _n.call(e.childNodes), v = n.props || dn, !s && i != null) for (v = {}, u = 0; u < e.attributes.length; u++) v[(f = e.attributes[u]).name] = f.value;
    for (u in v) if (f = v[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") d = f;
      else if (!(u in w)) {
        if (u == "value" && "defaultValue" in w || u == "checked" && "defaultChecked" in w) continue;
        In(e, u, null, f, o);
      }
    }
    for (u in w) f = w[u], u == "children" ? p = f : u == "dangerouslySetInnerHTML" ? c = f : u == "value" ? m = f : u == "checked" ? h = f : s && typeof f != "function" || v[u] === f || In(e, u, f, v[u], o);
    if (c) s || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
    else if (d && (e.innerHTML = ""), fl(e, Kn(p) ? p : [p], t, n, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, l, i ? i[0] : n.__k && Ht(n, 0), s, a), i != null) for (u = i.length; u--; ) go(i[u]);
    s || (u = "value", b == "progress" && m == null ? e.removeAttribute("value") : m !== void 0 && (m !== e[u] || b == "progress" && !m || b == "option" && m !== v[u]) && In(e, u, m, v[u], o), u = "checked", h !== void 0 && h !== e[u] && In(e, u, h, v[u], o));
  }
  return e;
}
function vo(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    re.__e(o, n);
  }
}
function gl(e, t, n) {
  var r, o;
  if (re.unmount && re.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || vo(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      re.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && gl(r[o], t, n || typeof e.type != "function");
  n || go(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ka(e, t, n) {
  return this.constructor(e, n);
}
function zt(e, t, n) {
  var r, o, i, l;
  t == document && (t = document.documentElement), re.__ && re.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], l = [], ho(t, e = (!r && n || t).__k = P(me, null, [e]), o || dn, dn, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? _n.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, l), ml(i, e, l);
}
function hl(e, t) {
  zt(e, t, hl);
}
function Ya(e, t, n) {
  var r, o, i, l, s = rt({}, e.props);
  for (i in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i] === void 0 && l !== void 0 ? l[i] : t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? _n.call(arguments, 2) : n), on(e.type, s, r || e.key, o || e.ref, null);
}
function pe(e, t) {
  var n = { __c: t = "__cC" + ul++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && o.forEach(function(s) {
        s.__e = !0, Dr(s);
      });
    }, this.sub = function(l) {
      o.add(l);
      var s = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        o && o.delete(l), s && s.call(l);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
_n = cl.slice, re = { __e: function(e, t, n, r) {
  for (var o, i, l; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), l = o.__d), l) return o.__E = o;
  } catch (s) {
    e = s;
  }
  throw e;
} }, ll = 0, ze.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rt({}, this.state), typeof e == "function" && (e = e(rt({}, n), this.props)), e && rt(n, e), e != null && this.__v && (t && this._sb.push(t), Dr(this));
}, ze.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Dr(this));
}, ze.prototype.render = me, yt = [], sl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, kr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Vn.__r = 0, al = /(PointerCapture)$|Capture$/i, mo = 0, Nr = Qo(!1), Ar = Qo(!0), ul = 0;
var Xa = 0;
function g(e, t, n, r, o, i) {
  t || (t = {});
  var l, s, a = t;
  if ("ref" in a) for (s in a = {}, t) s == "ref" ? l = t[s] : a[s] = t[s];
  var u = { type: e, props: a, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Xa, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) a[s] === void 0 && (a[s] = l[s]);
  return re.vnode && re.vnode(u), u;
}
var lt, fe, gr, ei, Bt = 0, vl = [], _e = re, ti = _e.__b, ni = _e.__r, ri = _e.diffed, oi = _e.__c, ii = _e.unmount, li = _e.__;
function Tt(e, t) {
  _e.__h && _e.__h(fe, e, Bt || t), Bt = 0;
  var n = fe.__H || (fe.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function U(e) {
  return Bt = 1, st(_l, e);
}
function st(e, t, n) {
  var r = Tt(lt++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : _l(void 0, t), function(s) {
    var a = r.__N ? r.__N[0] : r.__[0], u = r.t(a, s);
    a !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = fe, !fe.u)) {
    var o = function(s, a, u) {
      if (!r.__c.__H) return !0;
      var c = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (c.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, s, a, u);
      var d = r.__c.props !== s;
      return c.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (d = !0);
        }
      }), i && i.call(this, s, a, u) || d;
    };
    fe.u = !0;
    var i = fe.shouldComponentUpdate, l = fe.componentWillUpdate;
    fe.componentWillUpdate = function(s, a, u) {
      if (this.__e) {
        var c = i;
        i = void 0, o(s, a, u), i = c;
      }
      l && l.call(this, s, a, u);
    }, fe.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function oe(e, t) {
  var n = Tt(lt++, 3);
  !_e.__s && yo(n.__H, t) && (n.__ = e, n.i = t, fe.__H.__h.push(n));
}
function Ze(e, t) {
  var n = Tt(lt++, 4);
  !_e.__s && yo(n.__H, t) && (n.__ = e, n.i = t, fe.__h.push(n));
}
function D(e) {
  return Bt = 5, W(function() {
    return { current: e };
  }, []);
}
function _o(e, t, n) {
  Bt = 6, Ze(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function W(e, t) {
  var n = Tt(lt++, 7);
  return yo(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ie(e, t) {
  return Bt = 8, W(function() {
    return e;
  }, t);
}
function ae(e) {
  var t = fe.context[e.__c], n = Tt(lt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(fe)), t.props.value) : e.__;
}
function wo(e, t) {
  _e.useDebugValue && _e.useDebugValue(t ? t(e) : e);
}
function Za(e) {
  var t = Tt(lt++, 10), n = U();
  return t.__ = e, fe.componentDidCatch || (fe.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Me() {
  var e = Tt(lt++, 11);
  if (!e.__) {
    for (var t = fe.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Ja() {
  for (var e; e = vl.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Nn), e.__H.__h.forEach(Lr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], _e.__e(t, e.__v);
  }
}
_e.__b = function(e) {
  fe = null, ti && ti(e);
}, _e.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), li && li(e, t);
}, _e.__r = function(e) {
  ni && ni(e), lt = 0;
  var t = (fe = e.__c).__H;
  t && (gr === fe ? (t.__h = [], fe.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(Nn), t.__h.forEach(Lr), t.__h = [], lt = 0)), gr = fe;
}, _e.diffed = function(e) {
  ri && ri(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (vl.push(t) !== 1 && ei === _e.requestAnimationFrame || ((ei = _e.requestAnimationFrame) || Qa)(Ja)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), gr = fe = null;
}, _e.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Nn), n.__h = n.__h.filter(function(r) {
        return !r.__ || Lr(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], _e.__e(r, n.__v);
    }
  }), oi && oi(e, t);
}, _e.unmount = function(e) {
  ii && ii(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Nn(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && _e.__e(t, n.__v));
};
var si = typeof requestAnimationFrame == "function";
function Qa(e) {
  var t, n = function() {
    clearTimeout(r), si && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  si && (t = requestAnimationFrame(n));
}
function Nn(e) {
  var t = fe, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), fe = t;
}
function Lr(e) {
  var t = fe;
  e.__c = e.__(), fe = t;
}
function yo(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function _l(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = wl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function eu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = wl(e)) && (r && (r += " "), r += t);
  return r;
}
const ai = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ui = eu, It = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return ui(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, l = Object.keys(o).map((u) => {
    const c = n == null ? void 0 : n[u], d = i == null ? void 0 : i[u];
    if (c === null) return null;
    const p = ai(c) || ai(d);
    return o[u][p];
  }), s = n && Object.entries(n).reduce((u, c) => {
    let [d, p] = c;
    return p === void 0 || (u[d] = p), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: d, className: p, ...f } = c;
    return Object.entries(f).every((m) => {
      let [h, v] = m;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...s
      }[h]) : {
        ...i,
        ...s
      }[h] === v;
    }) ? [
      ...u,
      d,
      p
    ] : u;
  }, []);
  return ui(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, tu = It(
  "text-center inline-block font-semibold px-3 py-2 rounded-md text-sm",
  {
    variants: {
      variant: {
        primary: "shadow-xs bg-hello-csv-primary text-white",
        secondary: "bg-background text-hello-csv-primary ring-1 shadow-xs ring-bg-hello-csv-primary ring-inset",
        tertiary: "bg-background text-gray-900 ring-1 shadow-xs ring-hello-csv-tertiary ring-inset",
        success: "shadow-xs bg-hello-csv-success text-white",
        danger: "shadow-xs bg-hello-csv-danger text-white"
      },
      withFullWidth: {
        true: "w-full",
        false: ""
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "cursor-pointer"
      }
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: !1,
        className: "hover:bg-hello-csv-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hello-csv-primary"
      },
      {
        variant: "secondary",
        disabled: !1,
        className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hello-csv-secondary"
      },
      {
        variant: "tertiary",
        disabled: !1,
        className: "hover:bg-hello-csv-tertiary-light"
      },
      {
        variant: "success",
        disabled: !1,
        className: "hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hello-csv-success"
      },
      {
        variant: "danger",
        disabled: !1,
        className: "hover:bg-hello-csv-danger-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hello-csv-danger"
      }
    ],
    defaultVariants: {
      withFullWidth: !1,
      variant: "primary",
      disabled: !1
    }
  }
);
function He({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  withFullWidth: o
}) {
  const i = tu({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ g(
    "div",
    {
      role: "button",
      tabIndex: 0,
      className: i,
      onClick: r,
      "aria-disabled": n,
      children: e
    }
  );
}
function yl(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Vr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Xn(e, t) {
  var n = t(), r = U({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ze(function() {
    o.__ = n, o.u = t, hr(o) && i({ t: o });
  }, [e, n, t]), oe(function() {
    return hr(o) && i({ t: o }), e(function() {
      hr(o) && i({ t: o });
    });
  }, [e]), n;
}
function hr(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function bo(e) {
  e();
}
function xo(e) {
  return e;
}
function Co() {
  return [!1, bo];
}
var So = Ze;
function Hn(e, t) {
  this.props = e, this.context = t;
}
function bl(e, t) {
  function n(o) {
    var i = this.props.ref, l = i == o.ref;
    return !l && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !l : Vr(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, P(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Hn.prototype = new ze()).isPureReactComponent = !0, Hn.prototype.shouldComponentUpdate = function(e, t) {
  return Vr(this.props, e) || Vr(this.state, t);
};
var ci = re.__b;
re.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ci && ci(e);
};
var nu = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function de(e) {
  function t(n) {
    var r = yl({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = nu, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var di = function(e, t) {
  return e == null ? null : ot(ot(e).map(t));
}, xl = { map: di, forEach: di, count: function(e) {
  return e ? ot(e).length : 0;
}, only: function(e) {
  var t = ot(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ot }, ru = re.__e;
re.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  ru(e, t, n, r);
};
var fi = re.unmount;
function Cl(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = yl({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Cl(r, t, n);
  })), e;
}
function Sl(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Sl(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function ln() {
  this.__u = 0, this.o = null, this.__b = null;
}
function El(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Rl(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(l) {
      n = l.default || l;
    }, function(l) {
      r = l;
    }), r) throw r;
    if (!n) throw t;
    return P(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function At() {
  this.i = null, this.l = null;
}
re.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), fi && fi(e);
}, (ln.prototype = new ze()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = El(r.__v), i = !1, l = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = l;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Sl(a, a.__c.__P, a.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
}, ln.prototype.componentWillUnmount = function() {
  this.o = [];
}, ln.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Cl(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && P(me, null, e.fallback);
  return o && (o.__u &= -33), [P(me, null, t.__a ? null : e.children), o];
};
var pi = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function ou(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function iu(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    zt(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), zt(P(ou, { context: t.context }, e.__v), t.v);
}
function wn(e, t) {
  var n = P(iu, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(At.prototype = new ze()).__a = function(e) {
  var t = this, n = El(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), pi(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, At.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ot(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, At.prototype.componentDidUpdate = At.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    pi(e, n, t);
  });
};
var $l = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, lu = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, su = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, au = /[A-Z0-9]/g, uu = typeof document < "u", cu = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Tl(e, t, n) {
  return t.__k == null && (t.textContent = ""), zt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Il(e, t, n) {
  return hl(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
ze.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(ze.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var mi = re.event;
function du() {
}
function fu() {
  return this.cancelBubble;
}
function pu() {
  return this.defaultPrevented;
}
re.event = function(e) {
  return mi && (e = mi(e)), e.persist = du, e.isPropagationStopped = fu, e.isDefaultPrevented = pu, e.nativeEvent = e;
};
var Eo, mu = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, gi = re.vnode;
re.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var l in n) {
      var s = n[l];
      if (!(l === "value" && "defaultValue" in n && s == null || uu && l === "children" && r === "noscript" || l === "class" || l === "className")) {
        var a = l.toLowerCase();
        l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || cu(n.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : su.test(l) && (l = a) : a = l = "oninput" : i && lu.test(l) ? l = l.replace(au, "-$&").toLowerCase() : s === null && (s = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ot(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ot(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", mu)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = $l, gi && gi(e);
};
var hi = re.__r;
re.__r = function(e) {
  hi && hi(e), Eo = e.__c;
};
var vi = re.diffed;
re.diffed = function(e) {
  vi && vi(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Eo = null;
};
var Ml = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Eo.__n[e.__c].props.value;
}, useCallback: ie, useContext: ae, useDebugValue: wo, useDeferredValue: xo, useEffect: oe, useId: Me, useImperativeHandle: _o, useInsertionEffect: So, useLayoutEffect: Ze, useMemo: W, useReducer: st, useRef: D, useState: U, useSyncExternalStore: Xn, useTransition: Co } } }, gu = "18.3.1";
function Ol(e) {
  return P.bind(null, e);
}
function Gt(e) {
  return !!e && e.$$typeof === $l;
}
function Fl(e) {
  return Gt(e) && e.type === me;
}
function Pl(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function Ro(e) {
  return Gt(e) ? Ya.apply(null, arguments) : e;
}
function kl(e) {
  return !!e.__k && (zt(null, e), !0);
}
function Nl(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Al = function(e, t) {
  return e(t);
}, De = function(e, t) {
  return e(t);
}, Dl = me, Ll = Gt, L = { useState: U, useId: Me, useReducer: st, useEffect: oe, useLayoutEffect: Ze, useInsertionEffect: So, useTransition: Co, useDeferredValue: xo, useSyncExternalStore: Xn, startTransition: bo, useRef: D, useImperativeHandle: _o, useMemo: W, useCallback: ie, useContext: ae, useDebugValue: wo, version: "18.3.1", Children: xl, render: Tl, hydrate: Il, unmountComponentAtNode: kl, createPortal: wn, createElement: P, createContext: pe, createFactory: Ol, cloneElement: Ro, createRef: Yn, Fragment: me, isValidElement: Gt, isElement: Ll, isFragment: Fl, isMemo: Pl, findDOMNode: Nl, Component: ze, PureComponent: Hn, memo: bl, forwardRef: de, flushSync: De, unstable_batchedUpdates: Al, StrictMode: Dl, Suspense: ln, SuspenseList: At, lazy: Rl, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ml };
const Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: xl,
  Component: ze,
  Fragment: me,
  PureComponent: Hn,
  StrictMode: Dl,
  Suspense: ln,
  SuspenseList: At,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ml,
  cloneElement: Ro,
  createContext: pe,
  createElement: P,
  createFactory: Ol,
  createPortal: wn,
  createRef: Yn,
  default: L,
  findDOMNode: Nl,
  flushSync: De,
  forwardRef: de,
  hydrate: Il,
  isElement: Ll,
  isFragment: Fl,
  isMemo: Pl,
  isValidElement: Gt,
  lazy: Rl,
  memo: bl,
  render: Tl,
  startTransition: bo,
  unmountComponentAtNode: kl,
  unstable_batchedUpdates: Al,
  useCallback: ie,
  useContext: ae,
  useDebugValue: wo,
  useDeferredValue: xo,
  useEffect: oe,
  useErrorBoundary: Za,
  useId: Me,
  useImperativeHandle: _o,
  useInsertionEffect: So,
  useLayoutEffect: Ze,
  useMemo: W,
  useReducer: st,
  useRef: D,
  useState: U,
  useSyncExternalStore: Xn,
  useTransition: Co,
  version: gu
}, Symbol.toStringTag, { value: "Module" })), hu = It("overflow-hidden rounded-md border border-gray-200", {
  variants: {
    variant: {
      default: "bg-background",
      muted: "bg-hello-csv-muted"
    },
    withPadding: {
      true: "px-4 py-5 sm:p-6",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    withPadding: !0
  }
}), Vl = de(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = hu({ variant: n, withPadding: r });
    return /* @__PURE__ */ g("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function Hl({ checked: e, setChecked: t, label: n }) {
  const r = Me();
  return /* @__PURE__ */ g("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ g("div", { className: "flex h-6 shrink-0 items-center", children: /* @__PURE__ */ g("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ g(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "checked:border-hello-csv-primary checked:bg-hello-csv-primary indeterminate:border-hello-csv-primary indeterminate:bg-hello-csv-primary focus-visible:outline-hello-csv-hello-csv-primary col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-background focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ g(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",
          children: [
            /* @__PURE__ */ g(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ g(
              "path",
              {
                d: "M3 7H11",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-indeterminate:opacity-100"
              }
            )
          ]
        }
      )
    ] }) }),
    n && /* @__PURE__ */ g("div", { className: "text-sm/6", children: /* @__PURE__ */ g("label", { htmlFor: r, className: "font-medium text-gray-900", children: n }) })
  ] });
}
let vu = !1;
function $o() {
  return vu;
}
const zl = typeof document < "u" ? L.useLayoutEffect : () => {
};
function _u(e) {
  const t = D(null);
  return zl(() => {
    t.current = e;
  }, [
    e
  ]), ie((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const vt = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, xt = (e) => e && "window" in e && e.window === e ? e : vt(e).defaultView || window;
function wu(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function yu(e) {
  return wu(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function Bl(e, t) {
  if (!$o()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : yu(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const zr = (e = document) => {
  var t;
  if (!$o()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function jl(e) {
  return $o() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function bu(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function xu(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ul(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Cu = Ul(function() {
  return xu(/^Mac/i);
}), Su = Ul(function() {
  return bu(/Android/i);
});
function Wl() {
  let e = D(/* @__PURE__ */ new Map()), t = ie((o, i, l, s) => {
    let a = s != null && s.once ? (...u) => {
      e.current.delete(l), l(...u);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: o,
      fn: a,
      options: s
    }), o.addEventListener(i, a, s);
  }, []), n = ie((o, i, l, s) => {
    var a;
    let u = ((a = e.current.get(l)) === null || a === void 0 ? void 0 : a.fn) || l;
    o.removeEventListener(i, u, s), e.current.delete(l);
  }, []), r = ie(() => {
    e.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return oe(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Eu(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Su() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Gl(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ru(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function ql(e) {
  let t = D({
    isFocused: !1,
    observer: null
  });
  zl(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = _u((r) => {
    e == null || e(r);
  });
  return ie((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        if (t.current.isFocused = !1, o.disabled) {
          let s = Gl(l);
          n(s);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let s = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let $u = !1, yn = null, Br = /* @__PURE__ */ new Set(), sn = /* @__PURE__ */ new Map(), Et = !1, jr = !1;
const Tu = {
  Tab: !0,
  Escape: !0
};
function To(e, t) {
  for (let n of Br) n(e, t);
}
function Iu(e) {
  return !(e.metaKey || !Cu() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function zn(e) {
  Et = !0, Iu(e) && (yn = "keyboard", To("keyboard", e));
}
function Lt(e) {
  yn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Et = !0, To("pointer", e));
}
function Kl(e) {
  Eu(e) && (Et = !0, yn = "virtual");
}
function Yl(e) {
  e.target === window || e.target === document || $u || !e.isTrusted || (!Et && !jr && (yn = "virtual", To("virtual", e)), Et = !1, jr = !1);
}
function Xl() {
  Et = !1, jr = !0;
}
function Ur(e) {
  if (typeof window > "u" || sn.get(xt(e))) return;
  const t = xt(e), n = vt(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Et = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", zn, !0), n.addEventListener("keyup", zn, !0), n.addEventListener("click", Kl, !0), t.addEventListener("focus", Yl, !0), t.addEventListener("blur", Xl, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Lt, !0), n.addEventListener("pointermove", Lt, !0), n.addEventListener("pointerup", Lt, !0)), t.addEventListener("beforeunload", () => {
    Zl(e);
  }, {
    once: !0
  }), sn.set(t, {
    focus: r
  });
}
const Zl = (e, t) => {
  const n = xt(e), r = vt(e);
  t && r.removeEventListener("DOMContentLoaded", t), sn.has(n) && (n.HTMLElement.prototype.focus = sn.get(n).focus, r.removeEventListener("keydown", zn, !0), r.removeEventListener("keyup", zn, !0), r.removeEventListener("click", Kl, !0), n.removeEventListener("focus", Yl, !0), n.removeEventListener("blur", Xl, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Lt, !0), r.removeEventListener("pointermove", Lt, !0), r.removeEventListener("pointerup", Lt, !0)), sn.delete(n));
};
function Mu(e) {
  const t = vt(e);
  let n;
  return t.readyState !== "loading" ? Ur(e) : (n = () => {
    Ur(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Zl(e, n);
}
typeof document < "u" && Mu();
function Jl() {
  return yn !== "pointer";
}
const Ou = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Fu(e, t, n) {
  let r = vt(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? xt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? xt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? xt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? xt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Ou.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof l && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof s && !Tu[n.key]);
}
function Pu(e, t, n) {
  Ur(), oe(() => {
    let r = (o, i) => {
      Fu(!!(n != null && n.isTextInput), o, i) && e(Jl());
    };
    return Br.add(r), () => {
      Br.delete(r);
    };
  }, t);
}
function ku(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = ie((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = ql(i), s = ie((a) => {
    const u = vt(a.target), c = u ? zr(u) : zr();
    a.target === a.currentTarget && c === jl(a.nativeEvent) && (n && n(a), o && o(!0), l(a));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
function Nu(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = D({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: s } = Wl(), a = ie((d) => {
    d.currentTarget.contains(d.target) && i.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(d), o && o(!1));
  }, [
    n,
    o,
    i,
    s
  ]), u = ql(a), c = ie((d) => {
    if (!d.currentTarget.contains(d.target)) return;
    const p = vt(d.target), f = zr(p);
    if (!i.current.isFocusWithin && f === jl(d.nativeEvent)) {
      r && r(d), o && o(!0), i.current.isFocusWithin = !0, u(d);
      let m = d.currentTarget;
      l(p, "focus", (h) => {
        if (i.current.isFocusWithin && !Bl(m, h.target)) {
          let v = new p.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          Ru(v, m);
          let w = Gl(v);
          a(w);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    o,
    u,
    l,
    a
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: a
    }
  };
}
let Wr = !1, vr = 0;
function Au() {
  Wr = !0, setTimeout(() => {
    Wr = !1;
  }, 50);
}
function _i(e) {
  e.pointerType === "touch" && Au();
}
function Du() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", _i), vr++, () => {
      vr--, !(vr > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", _i);
    };
}
function Ql(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = U(!1), s = D({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  oe(Du, []);
  let { addGlobalListener: a, removeAllGlobalListeners: u } = Wl(), { hoverProps: c, triggerHoverEnd: d } = W(() => {
    let p = (h, v) => {
      if (s.pointerType = v, o || v === "touch" || s.isHovered || !h.currentTarget.contains(h.target)) return;
      s.isHovered = !0;
      let w = h.currentTarget;
      s.target = w, a(vt(h.target), "pointerover", (b) => {
        s.isHovered && s.target && !Bl(s.target, b.target) && f(b, b.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: w,
        pointerType: v
      }), n && n(!0), l(!0);
    }, f = (h, v) => {
      let w = s.target;
      s.pointerType = "", s.target = null, !(v === "touch" || !s.isHovered || !w) && (s.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: w,
        pointerType: v
      }), n && n(!1), l(!1));
    }, m = {};
    return typeof PointerEvent < "u" && (m.onPointerEnter = (h) => {
      Wr && h.pointerType === "mouse" || p(h, h.pointerType);
    }, m.onPointerLeave = (h) => {
      !o && h.currentTarget.contains(h.target) && f(h, h.pointerType);
    }), {
      hoverProps: m,
      triggerHoverEnd: f
    };
  }, [
    t,
    n,
    r,
    o,
    s,
    a,
    u
  ]);
  return oe(() => {
    o && d({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function es(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = D({
    isFocused: !1,
    isFocusVisible: t || Jl()
  }), [i, l] = U(!1), [s, a] = U(() => o.current.isFocused && o.current.isFocusVisible), u = ie(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = ie((f) => {
    o.current.isFocused = f, l(f), u();
  }, [
    u
  ]);
  Pu((f) => {
    o.current.isFocusVisible = f, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = ku({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: p } = Nu({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? p : d
  };
}
var Lu = Object.defineProperty, Vu = (e, t, n) => t in e ? Lu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _r = (e, t, n) => (Vu(e, typeof t != "symbol" ? t + "" : t, n), n);
let Hu = class {
  constructor() {
    _r(this, "current", this.detect()), _r(this, "handoffState", "pending"), _r(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, St = new Hu();
function qt(e) {
  return St.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Zn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ye() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Zn(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = Ye();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function Mt() {
  let [e] = U(Ye);
  return oe(() => () => e.dispose(), [e]), e;
}
let ce = (e, t) => {
  St.isServer ? oe(e, t) : Ze(e, t);
};
function _t(e) {
  let t = D(e);
  return ce(() => {
    t.current = e;
  }, [e]), t;
}
let j = function(e) {
  let t = _t(e);
  return L.useCallback((...n) => t.current(...n), [t]);
};
function zu(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Bu(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function ju({ disabled: e = !1 } = {}) {
  let t = D(null), [n, r] = U(!1), o = Mt(), i = j(() => {
    t.current = null, r(!1), o.dispose();
  }), l = j((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = qt(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (u) => {
          if (t.current) {
            let c = zu(u);
            r(Bu(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let Uu = pe(void 0);
function Io() {
  return ae(Uu);
}
function Gr(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ne(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ne), r;
}
var jt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(jt || {}), dt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(dt || {});
function Se() {
  let e = Gu();
  return ie((t) => Wu({ mergeRefs: e, ...t }), [e]);
}
function Wu({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? qu;
  let a = ts(t, e);
  if (i) return Mn(a, n, r, l, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...d } = a;
    if (c) return Mn(d, n, r, l, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...d } = a;
    return Ne(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Mn({ ...d, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return Mn(a, n, r, l, s);
}
function Mn(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = wr(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let d = {};
  if (t) {
    let p = !1, f = [];
    for (let [m, h] of Object.entries(t)) typeof h == "boolean" && (p = !0), h === !0 && f.push(m.replace(/([A-Z])/g, (v) => `-${v.toLowerCase()}`));
    if (p) {
      d["data-headlessui-state"] = f.join(" ");
      for (let m of f) d[`data-${m}`] = "";
    }
  }
  if (i === me && (Object.keys(ct(a)).length > 0 || Object.keys(ct(d)).length > 0)) if (!Gt(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(ct(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ct(a)).concat(Object.keys(ct(d))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = c.props, f = p == null ? void 0 : p.className, m = typeof f == "function" ? (...w) => Gr(f(...w), a.className) : Gr(f, a.className), h = m ? { className: m } : {}, v = ts(c.props, ct(wr(a, ["ref"])));
    for (let w in d) w in v && delete d[w];
    return Ro(c, Object.assign({}, v, d, u, { ref: o(Ku(c), u.ref) }, h));
  }
  return P(i, Object.assign({}, wr(a, ["ref"]), i !== me && u, i !== me && d), c);
}
function Gu() {
  let e = D([]), t = ie((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function qu(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function ts(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let l = n[r];
    for (let s of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      s(o, ...i);
    }
  } });
  return t;
}
function Mo(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let l of i) l == null || l(...o);
  } });
  return t;
}
function xe(e) {
  var t;
  return Object.assign(de(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ct(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function wr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Ku(e) {
  return L.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Yu(e, t, n) {
  let [r, o] = U(n), i = e !== void 0, l = D(i), s = D(!1), a = D(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !a.current && (a.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, j((u) => (i || o(u), t == null ? void 0 : t(u)))];
}
function Xu(e) {
  let [t] = U(e);
  return t;
}
function ns(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) os(n, rs(t, r), o);
  return n;
}
function rs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function os(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) os(e, rs(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : ns(n, t, e);
}
let Zu = "span";
var Ut = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ut || {});
function Ju(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Se()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Zu, name: "Hidden" });
}
let fn = xe(Ju), Qu = pe(null);
function ec({ children: e }) {
  let t = ae(Qu);
  if (!t) return L.createElement(L.Fragment, null, e);
  let { target: n } = t;
  return n ? wn(L.createElement(L.Fragment, null, e), n) : null;
}
function tc({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = U(null), s = Mt();
  return oe(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), L.createElement(ec, null, L.createElement(nc, { setForm: l, formId: t }), ns(e).map(([a, u]) => L.createElement(fn, { features: Ut.Hidden, ...ct({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function nc({ setForm: e, formId: t }) {
  return oe(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : L.createElement(fn, { features: Ut.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let rc = pe(void 0);
function is() {
  return ae(rc);
}
function oc(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && ic(n) ? !1 : r;
}
function ic(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let ls = Symbol();
function lc(e, t = !0) {
  return Object.assign(e, { [ls]: t });
}
function Pe(...e) {
  let t = D(e);
  oe(() => {
    t.current = e;
  }, [e]);
  let n = j((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[ls])) ? void 0 : n;
}
let Jn = pe(null);
Jn.displayName = "DescriptionContext";
function ss() {
  let e = ae(Jn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ss), t;
  }
  return e;
}
function sc() {
  var e, t;
  return (t = (e = ae(Jn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function ac() {
  let [e, t] = U([]);
  return [e.length > 0 ? e.join(" ") : void 0, W(() => function(n) {
    let r = j((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = W(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return L.createElement(Jn.Provider, { value: o }, n.children);
  }, [t])];
}
let uc = "p";
function cc(e, t) {
  let n = Me(), r = Io(), { id: o = `headlessui-description-${n}`, ...i } = e, l = ss(), s = Pe(t);
  ce(() => l.register(o), [o, l.register]);
  let a = r || !1, u = W(() => ({ ...l.slot, disabled: a }), [l.slot, a]), c = { ref: s, ...l.props, id: o };
  return Se()({ ourProps: c, theirProps: i, slot: u, defaultTag: uc, name: l.name || "Description" });
}
let dc = xe(cc), fc = Object.assign(dc, {});
var Te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Te || {});
let Qn = pe(null);
Qn.displayName = "LabelContext";
function as() {
  let e = ae(Qn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, as), t;
  }
  return e;
}
function er(e) {
  var t, n, r;
  let o = (n = (t = ae(Qn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function pc({ inherit: e = !1 } = {}) {
  let t = er(), [n, r] = U([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, W(() => function(i) {
    let l = j((a) => (r((u) => [...u, a]), () => r((u) => {
      let c = u.slice(), d = c.indexOf(a);
      return d !== -1 && c.splice(d, 1), c;
    }))), s = W(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return L.createElement(Qn.Provider, { value: s }, i.children);
  }, [r])];
}
let mc = "label";
function gc(e, t) {
  var n;
  let r = Me(), o = as(), i = is(), l = Io(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...c } = e, d = Pe(t);
  ce(() => o.register(s), [s, o.register]);
  let p = j((v) => {
    let w = v.currentTarget;
    if (w instanceof HTMLLabelElement && v.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(v), w instanceof HTMLLabelElement) {
      let b = document.getElementById(w.htmlFor);
      if (b) {
        let C = b.getAttribute("disabled");
        if (C === "true" || C === "") return;
        let E = b.getAttribute("aria-disabled");
        if (E === "true" || E === "") return;
        (b instanceof HTMLInputElement && (b.type === "radio" || b.type === "checkbox") || b.role === "radio" || b.role === "checkbox" || b.role === "switch") && b.click(), b.focus({ preventScroll: !0 });
      }
    }
  }), f = l || !1, m = W(() => ({ ...o.slot, disabled: f }), [o.slot, f]), h = { ref: d, ...o.props, id: s, htmlFor: a, onClick: p };
  return u && ("onClick" in h && (delete h.htmlFor, delete h.onClick), "onClick" in c && delete c.onClick), Se()({ ourProps: h, theirProps: c, slot: m, defaultTag: a ? mc : "div", name: o.name || "Label" });
}
let hc = xe(gc), vc = Object.assign(hc, {}), _c = pe(() => {
});
function wc({ value: e, children: t }) {
  return L.createElement(_c.Provider, { value: e }, t);
}
function Nt(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var l, s, a, u;
    let c;
    n.key && ((l = n.debug) != null && l.call(n)) && (c = Date.now());
    const d = e();
    if (!(d.length !== r.length || d.some((m, h) => r[h] !== m)))
      return o;
    r = d;
    let f;
    if (n.key && ((s = n.debug) != null && s.call(n)) && (f = Date.now()), o = t(...d), n.key && ((a = n.debug) != null && a.call(n))) {
      const m = Math.round((Date.now() - c) * 100) / 100, h = Math.round((Date.now() - f) * 100) / 100, v = h / 16, w = (b, C) => {
        for (b = String(b); b.length < C; )
          b = " " + b;
        return b;
      };
      console.info(
        `%c⏱ ${w(h, 5)} /${w(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (u = n == null ? void 0 : n.onChange) == null || u.call(n, o), o;
  }
  return i.updateDeps = (l) => {
    r = l;
  }, i;
}
function wi(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const yc = (e, t) => Math.abs(e - t) <= 1, bc = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var en = { NODE_ENV: "production" };
const yi = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, xc = (e) => e, Cc = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Sc = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const o = (l) => {
    const { width: s, height: a } = l;
    t({ width: Math.round(s), height: Math.round(a) });
  };
  if (o(yi(n)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((l) => {
    const s = () => {
      const a = l[0];
      if (a != null && a.borderBoxSize) {
        const u = a.borderBoxSize[0];
        if (u) {
          o({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      o(yi(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, bi = {
  passive: !0
}, xi = typeof window > "u" ? !0 : "onscrollend" in window, Ec = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && xi ? () => {
  } : bc(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (c) => () => {
    const { horizontal: d, isRtl: p } = e.options;
    o = d ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, i(), t(o, c);
  }, s = l(!0), a = l(!1);
  a(), n.addEventListener("scroll", s, bi);
  const u = e.options.useScrollendEvent && xi;
  return u && n.addEventListener("scrollend", a, bi), () => {
    n.removeEventListener("scroll", s), u && n.removeEventListener("scrollend", a);
  };
}, Rc = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, $c = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var o, i;
  const l = e + t;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, {
    [r.options.horizontal ? "left" : "top"]: l,
    behavior: n
  });
};
class Tc {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((i) => {
          const l = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), n = null;
        },
        observe: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, o]) => {
        typeof o > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: xc,
        rangeExtractor: Cc,
        onChange: () => {
        },
        measureElement: Rc,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = Nt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: en.NODE_ENV !== "production",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let l = r - 1; l >= 0; l--) {
        const s = n[l];
        if (o.has(s.lane))
          continue;
        const a = i.get(
          s.lane
        );
        if (a == null || s.end > a.end ? i.set(s.lane, s) : s.end < a.end && o.set(s.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((l, s) => l.end === s.end ? l.index - s.index : l.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = Nt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, o, i, l) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: i,
        enabled: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Nt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: l }, s) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const a = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, a);
        for (let c = a; c < n; c++) {
          const d = i(c), p = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), f = p ? p.end + this.options.gap : r + o, m = s.get(d), h = typeof m == "number" ? m : this.options.estimateSize(c), v = f + h, w = p ? p.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: f,
            size: h,
            end: v,
            key: d,
            lane: w
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: en.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Nt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Ic({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: en.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Nt(
      () => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, o, i, l) => i === null || l === null ? [] : n({
        startIndex: i,
        endIndex: l,
        overscan: r,
        count: o
      }),
      {
        key: en.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, o = n.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const o = this.indexFromElement(n), i = this.measurementsCache[o];
      if (!i)
        return;
      const l = i.key, s = this.elementsCache.get(l);
      s !== n && (s && this.observer.unobserve(s), this.observer.observe(n), this.elementsCache.set(l, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, l = r - i;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, l, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Nt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let i = 0, l = n.length; i < l; i++) {
          const s = n[i], a = r[s];
          o.push(a);
        }
        return o;
      },
      {
        key: en.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return wi(
          r[us(
            0,
            r.length - 1,
            (o) => wi(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r, o = 0) => {
      const i = this.getSize(), l = this.getScrollOffset();
      r === "auto" && (r = n >= l + i ? "end" : "start"), r === "center" ? n += (o - i) / 2 : r === "end" && (n -= i);
      const s = this.getTotalSize() - i;
      return Math.max(Math.min(s, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.getSize(), l = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= l + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= l + this.options.scrollPaddingStart)
          r = "start";
        else
          return [l, r];
      const s = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(s, r, o.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
      n = Math.max(0, Math.min(n, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const i = this.getOffsetForIndex(n, r);
      if (!i) return;
      const [l, s] = i;
      this._scrollToOffset(l, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(n)
        )) {
          const u = this.getOffsetForIndex(n, s);
          if (!u) return;
          const [c] = u, d = this.getScrollOffset();
          yc(c, d) || this.scrollToIndex(n, { align: s, behavior: o });
        } else
          this.scrollToIndex(n, { align: s, behavior: o });
      }));
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let l = r.length - 1;
        for (; l >= 0 && i.some((s) => s === null); ) {
          const s = r[l];
          i[s.lane] === null && (i[s.lane] = s.end), l--;
        }
        o = Math.max(...i.filter((s) => s !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(n, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const us = (e, t, n, r) => {
  for (; e <= t; ) {
    const o = (e + t) / 2 | 0, i = n(o);
    if (i < r)
      e = o + 1;
    else if (i > r)
      t = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function Ic({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const o = e.length - 1, i = (a) => e[a].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let l = us(
    0,
    o,
    i,
    n
  ), s = l;
  if (r === 1)
    for (; s < o && e[s].end < n + t; )
      s++;
  else if (r > 1) {
    const a = Array(r).fill(0);
    for (; s < o && a.some((c) => c < n + t); ) {
      const c = e[s];
      a[c.lane] = c.end, s++;
    }
    const u = Array(r).fill(n + t);
    for (; l >= 0 && u.some((c) => c >= n); ) {
      const c = e[l];
      u[c.lane] = c.start, l--;
    }
    l = Math.max(0, l - l % r), s = Math.min(o, s + (r - 1 - s % r));
  }
  return { startIndex: l, endIndex: s };
}
const Ci = typeof document < "u" ? Ze : oe;
function Mc(e) {
  const t = st(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var l;
      i ? De(t) : t(), (l = e.onChange) == null || l.call(e, o, i);
    }
  }, [r] = U(
    () => new Tc(n)
  );
  return r.setOptions(n), Ci(() => r._didMount(), []), Ci(() => r._willUpdate()), r;
}
function cs(e) {
  return Mc({
    observeElementRect: Sc,
    observeElementOffset: Ec,
    scrollToFn: $c,
    ...e
  });
}
function Oc(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Fc(e = Oc) {
  return ie((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Pc(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Si(e, t = !1) {
  let [n, r] = st(() => ({}), {}), o = W(() => Pc(e), [e, n]);
  return ce(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let kc = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function ds(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let l = t[o].call(n, ...i);
    l && (n = l, r.forEach((s) => s()));
  } };
}
function fs(e) {
  return Xn(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Nc = new kc(() => ds(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Kt(e, t) {
  let n = Nc.get(t), r = Me(), o = fs(n);
  if (ce(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let qr = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map();
function Ei(e) {
  var t;
  let n = (t = an.get(e)) != null ? t : 0;
  return an.set(e, n + 1), n !== 0 ? () => Ri(e) : (qr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Ri(e));
}
function Ri(e) {
  var t;
  let n = (t = an.get(e)) != null ? t : 1;
  if (n === 1 ? an.delete(e) : an.set(e, n - 1), n !== 1) return;
  let r = qr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, qr.delete(e));
}
function ps(e, { allowed: t, disallowed: n } = {}) {
  let r = Kt(e, "inert-others");
  ce(() => {
    var o, i;
    if (!r) return;
    let l = Ye();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(Ei(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let u = qt(a);
      if (!u) continue;
      let c = a.parentElement;
      for (; c && c !== u.body; ) {
        for (let d of c.children) s.some((p) => d.contains(p)) || l.add(Ei(d));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function ms(e, t, n) {
  let r = _t((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  oe(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Ye();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let Bn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Ac = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var tt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(tt || {}), Kr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Kr || {}), Dc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Dc || {});
function Lc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Bn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Vc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ac)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var gs = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(gs || {});
function Hc(e, t = 0) {
  var n;
  return e === ((n = qt(e)) == null ? void 0 : n.body) ? !1 : Ne(t, { 0() {
    return e.matches(Bn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Bn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var zc = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(zc || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function it(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Bc = ["textarea", "input"].join(",");
function jc(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Bc)) != null ? n : !1;
}
function hs(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function un(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? hs(e) : e : t & 64 ? Vc(e) : Lc(e);
  o.length > 0 && l.length > 1 && (l = l.filter((f) => !o.some((m) => m != null && "current" in m ? (m == null ? void 0 : m.current) === f : m === f))), r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, d = l.length, p;
  do {
    if (c >= d || c + d <= 0) return 0;
    let f = a + c;
    if (t & 16) f = (f + d) % d;
    else {
      if (f < 0) return 3;
      if (f >= d) return 1;
    }
    p = l[f], p == null || p.focus(u), c += s;
  } while (p !== i.activeElement);
  return t & 6 && jc(p) && p.select(), 2;
}
function vs() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Uc() {
  return /Android/gi.test(window.navigator.userAgent);
}
function _s() {
  return vs() || Uc();
}
function tn(e, t, n, r) {
  let o = _t(n);
  oe(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ws(e, t, n, r) {
  let o = _t(n);
  oe(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const $i = 30;
function ys(e, t, n) {
  let r = Kt(e, "outside-click"), o = _t(n), i = ie(function(a, u) {
    if (a.defaultPrevented) return;
    let c = u(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let d = function p(f) {
      return typeof f == "function" ? p(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let p of d) if (p !== null && (p.contains(c) || a.composed && a.composedPath().includes(p))) return;
    return !Hc(c, gs.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), l = D(null);
  tn(r, "pointerdown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), tn(r, "mousedown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), tn(r, "click", (a) => {
    _s() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = D({ x: 0, y: 0 });
  tn(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), tn(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= $i || Math.abs(u.y - s.current.y) >= $i)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), ws(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Ot(...e) {
  return W(() => qt(...e), [...e]);
}
function Oo(e, t, n, r) {
  let o = _t(n);
  oe(() => {
    e = e ?? window;
    function i(l) {
      o.current(l);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function bs(e) {
  let t = D({ value: "", selectionStart: null, selectionEnd: null });
  return Oo(e, "blur", (n) => {
    let r = n.target;
    r instanceof HTMLInputElement && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), j(() => {
    if (document.activeElement !== e && e instanceof HTMLInputElement && e.isConnected) {
      if (e.focus({ preventScroll: !0 }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
      else {
        let { selectionStart: n, selectionEnd: r } = t.current;
        n !== null && r !== null && e.setSelectionRange(n, r);
      }
      t.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Wc(e, t) {
  return W(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function Gc() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - o);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function qc() {
  return vs() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Ye();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let a = s.target.closest("a");
          if (!a) return;
          let { hash: u } = new URL(a.href), c = e.querySelector(u);
          c && !r(c) && (l = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let a = s.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let a = s.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let a = (s = window.scrollY) != null ? s : window.pageYOffset;
        i !== a && window.scrollTo(0, i), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function Kc() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Yc(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Ct = ds(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Ye(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Yc(n) }, o = [qc(), Gc(), Kc()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Ct.subscribe(() => {
  let e = Ct.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Ct.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ct.dispatch("TEARDOWN", n);
  }
});
function Xc(e, t, n = () => ({ containers: [] })) {
  let r = fs(Ct), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return ce(() => {
    if (!(!t || !e)) return Ct.dispatch("PUSH", t, n), () => Ct.dispatch("POP", t, n);
  }, [e, t]), i;
}
function xs(e, t, n = () => [document.body]) {
  let r = Kt(e, "scroll-lock");
  Xc(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Ti(e) {
  return [e.screenX, e.screenY];
}
function Zc() {
  let e = D([-1, -1]);
  return { wasMoved(t) {
    let n = Ti(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Ti(t);
  } };
}
function Jc(e = 0) {
  let [t, n] = U(e), r = ie((a) => n(a), [t]), o = ie((a) => n((u) => u | a), [t]), i = ie((a) => (t & a) === a, [t]), l = ie((a) => n((u) => u & ~a), [n]), s = ie((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var Qc = { NODE_ENV: "production" }, Ii, Mi;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Ii = process == null ? void 0 : Qc) == null ? void 0 : Ii.NODE_ENV) === "test" && typeof ((Mi = Element == null ? void 0 : Element.prototype) == null ? void 0 : Mi.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var ed = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(ed || {});
function Cs(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function Ss(e, t, n, r) {
  let [o, i] = U(n), { hasFlag: l, addFlag: s, removeFlag: a } = Jc(e && o ? 3 : 0), u = D(!1), c = D(!1), d = Mt();
  return ce(() => {
    var p;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (p = r == null ? void 0 : r.start) == null || p.call(r, n), td(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (s(3), a(4)) : (s(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
      }, done() {
        var f;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, a(7), n || i(!1), (f = r == null ? void 0 : r.end) == null || f.call(r, n));
      } });
    }
  }, [e, n, t, d]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function td(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Ye();
  return rd(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(nd(e, r));
    });
  }), i.dispose;
}
function nd(e, t) {
  var n, r;
  let o = Ye();
  if (!e) return o.dispose;
  let i = !1;
  o.add(() => {
    i = !0;
  });
  let l = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((s) => s instanceof CSSTransition)) != null ? r : [];
  return l.length === 0 ? (t(), o.dispose) : (Promise.allSettled(l.map((s) => s.finished)).then(() => {
    i || t();
  }), o.dispose);
}
function rd(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function od(e, { container: t, accept: n, walk: r }) {
  let o = D(n), i = D(r);
  oe(() => {
    o.current = n, i.current = r;
  }, [n, r]), ce(() => {
    if (!t || !e) return;
    let l = qt(t);
    if (!l) return;
    let s = o.current, a = i.current, u = Object.assign((d) => s(d), { acceptNode: s }), c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, i]);
}
function pn(e, t) {
  let n = D([]), r = j(e);
  oe(() => {
    let o = [...n.current];
    for (let [i, l] of t.entries()) if (n.current[i] !== l) {
      let s = r(t, o);
      return n.current = t, s;
    }
  }, [r, ...t]);
}
function tr() {
  return typeof window < "u";
}
function Yt(e) {
  return Es(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Je(e) {
  var t;
  return (t = (Es(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Es(e) {
  return tr() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function Oe(e) {
  return tr() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Xe(e) {
  return tr() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function Oi(e) {
  return !tr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function bn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function id(e) {
  return ["table", "td", "th"].includes(Yt(e));
}
function nr(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Fo(e) {
  const t = Po(), n = Oe(e) ? je(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ld(e) {
  let t = mt(e);
  for (; Xe(t) && !Wt(t); ) {
    if (Fo(t))
      return t;
    if (nr(t))
      return null;
    t = mt(t);
  }
  return null;
}
function Po() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wt(e) {
  return ["html", "body", "#document"].includes(Yt(e));
}
function je(e) {
  return Le(e).getComputedStyle(e);
}
function rr(e) {
  return Oe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if (Yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Oi(e) && e.host || // Fallback.
    Je(e)
  );
  return Oi(t) ? t.host : t;
}
function Rs(e) {
  const t = mt(e);
  return Wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xe(t) && bn(t) ? t : Rs(t);
}
function mn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Rs(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Le(o);
  if (i) {
    const s = Yr(l);
    return t.concat(l, l.visualViewport || [], bn(o) ? o : [], s && n ? mn(s) : []);
  }
  return t.concat(o, mn(o, [], n));
}
function Yr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sd() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Rt = Math.min, Ie = Math.max, gn = Math.round, On = Math.floor, Ke = (e) => ({
  x: e,
  y: e
}), ad = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ud = {
  start: "end",
  end: "start"
};
function Fi(e, t, n) {
  return Ie(e, Rt(t, n));
}
function Xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gt(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function $s(e) {
  return e === "x" ? "y" : "x";
}
function Ts(e) {
  return e === "y" ? "height" : "width";
}
function pt(e) {
  return ["top", "bottom"].includes(gt(e)) ? "y" : "x";
}
function Is(e) {
  return $s(pt(e));
}
function cd(e, t, n) {
  n === void 0 && (n = !1);
  const r = xn(e), o = Is(e), i = Ts(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = jn(l)), [l, jn(l)];
}
function dd(e) {
  const t = jn(e);
  return [Xr(e), t, Xr(t)];
}
function Xr(e) {
  return e.replace(/start|end/g, (t) => ud[t]);
}
function fd(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function pd(e, t, n, r) {
  const o = xn(e);
  let i = fd(gt(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Xr)))), i;
}
function jn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ad[t]);
}
function md(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gd(e) {
  return typeof e != "number" ? md(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Un(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Pi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = pt(t), l = Is(t), s = Ts(l), a = gt(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (xn(t)) {
    case "start":
      f[l] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      f[l] += p * (n && u ? -1 : 1);
      break;
  }
  return f;
}
const hd = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = Pi(u, r, a), p = r, f = {}, m = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: v,
      fn: w
    } = s[h], {
      x: b,
      y: C,
      data: E,
      reset: I
    } = await w({
      x: c,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: f,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = b ?? c, d = C ?? d, f = {
      ...f,
      [v]: {
        ...f[v],
        ...E
      }
    }, I && m <= 50 && (m++, typeof I == "object" && (I.placement && (p = I.placement), I.rects && (u = I.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : I.rects), {
      x: c,
      y: d
    } = Pi(u, p, a)), h = -1);
  }
  return {
    x: c,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: f
  };
};
async function or(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = Xt(t, e), m = gd(f), v = s[p ? d === "floating" ? "reference" : "floating" : d], w = Un(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), b = d === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), E = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, I = Un(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: C,
    strategy: a
  }) : b);
  return {
    top: (w.top - I.top + m.top) / E.y,
    bottom: (I.bottom - w.bottom + m.bottom) / E.y,
    left: (w.left - I.left + m.left) / E.x,
    right: (I.right - w.right + m.right) / E.x
  };
}
const vd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...v
      } = Xt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = gt(o), b = pt(s), C = gt(s) === s, E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), I = p || (C || !h ? [jn(s)] : dd(s)), M = m !== "none";
      !p && M && I.push(...pd(s, h, m, E));
      const R = [s, ...I], _ = await or(t, v), y = [];
      let x = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && y.push(_[w]), d) {
        const G = cd(o, l, E);
        y.push(_[G[0]], _[G[1]]);
      }
      if (x = [...x, {
        placement: o,
        overflows: y
      }], !y.every((G) => G <= 0)) {
        var S, T;
        const G = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, Z = R[G];
        if (Z) {
          var A;
          const z = d === "alignment" ? b !== pt(Z) : !1, O = ((A = x[0]) == null ? void 0 : A.overflows[0]) > 0;
          if (!z || O)
            return {
              data: {
                index: G,
                overflows: x
              },
              reset: {
                placement: Z
              }
            };
        }
        let B = (T = x.filter((z) => z.overflows[0] <= 0).sort((z, O) => z.overflows[1] - O.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!B)
          switch (f) {
            case "bestFit": {
              var F;
              const z = (F = x.filter((O) => {
                if (M) {
                  const k = pt(O.placement);
                  return k === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  k === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((k) => k > 0).reduce((k, N) => k + N, 0)]).sort((O, k) => O[1] - k[1])[0]) == null ? void 0 : F[0];
              z && (B = z);
              break;
            }
            case "initialPlacement":
              B = s;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function _d(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = gt(n), s = xn(n), a = pt(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, d = Xt(t, e);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof m == "number" && (f = s === "end" ? m * -1 : m), a ? {
    x: f * c,
    y: p * u
  } : {
    x: p * u,
    y: f * c
  };
}
const wd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: l,
        middlewareData: s
      } = t, a = await _d(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, yd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: w,
              y: b
            } = v;
            return {
              x: w,
              y: b
            };
          }
        },
        ...a
      } = Xt(e, t), u = {
        x: n,
        y: r
      }, c = await or(t, a), d = pt(gt(o)), p = $s(d);
      let f = u[p], m = u[d];
      if (i) {
        const v = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = f + c[v], C = f - c[w];
        f = Fi(b, f, C);
      }
      if (l) {
        const v = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", b = m + c[v], C = m - c[w];
        m = Fi(b, m, C);
      }
      const h = s.fn({
        ...t,
        [p]: f,
        [d]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [p]: i,
            [d]: l
          }
        }
      };
    }
  };
}, bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: l,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...u
      } = Xt(e, t), c = await or(t, u), d = gt(o), p = xn(o), f = pt(o) === "y", {
        width: m,
        height: h
      } = i.floating;
      let v, w;
      d === "top" || d === "bottom" ? (v = d, w = p === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = d, v = p === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, C = m - c.left - c.right, E = Rt(h - c[v], b), I = Rt(m - c[w], C), M = !t.middlewareData.shift;
      let R = E, _ = I;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = C), (r = t.middlewareData.shift) != null && r.enabled.y && (R = b), M && !p) {
        const x = Ie(c.left, 0), S = Ie(c.right, 0), T = Ie(c.top, 0), A = Ie(c.bottom, 0);
        f ? _ = m - 2 * (x !== 0 || S !== 0 ? x + S : Ie(c.left, c.right)) : R = h - 2 * (T !== 0 || A !== 0 ? T + A : Ie(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: _,
        availableHeight: R
      });
      const y = await l.getDimensions(s.floating);
      return m !== y.width || h !== y.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ms(e) {
  const t = je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Xe(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = gn(n) !== i || gn(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function ko(e) {
  return Oe(e) ? e : e.contextElement;
}
function Vt(e) {
  const t = ko(e);
  if (!Xe(t))
    return Ke(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ms(t);
  let l = (i ? gn(n.width) : n.width) / r, s = (i ? gn(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const xd = /* @__PURE__ */ Ke(0);
function Os(e) {
  const t = Le(e);
  return !Po() || !t.visualViewport ? xd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function $t(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ko(e);
  let l = Ke(1);
  t && (r ? Oe(r) && (l = Vt(r)) : l = Vt(e));
  const s = Cd(i, n, r) ? Os(i) : Ke(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, c = o.width / l.x, d = o.height / l.y;
  if (i) {
    const p = Le(i), f = r && Oe(r) ? Le(r) : r;
    let m = p, h = Yr(m);
    for (; h && r && f !== m; ) {
      const v = Vt(h), w = h.getBoundingClientRect(), b = je(h), C = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, E = w.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      a *= v.x, u *= v.y, c *= v.x, d *= v.y, a += C, u += E, m = Le(h), h = Yr(m);
    }
  }
  return Un({
    width: c,
    height: d,
    x: a,
    y: u
  });
}
function No(e, t) {
  const n = rr(e).scrollLeft;
  return t ? t.left + n : $t(Je(e)).left + n;
}
function Fs(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    No(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Sd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = Je(r), s = t ? nr(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ke(1);
  const c = Ke(0), d = Xe(r);
  if ((d || !d && !i) && ((Yt(r) !== "body" || bn(l)) && (a = rr(r)), Xe(r))) {
    const f = $t(r);
    u = Vt(r), c.x = f.x + r.clientLeft, c.y = f.y + r.clientTop;
  }
  const p = l && !d && !i ? Fs(l, a, !0) : Ke(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + p.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + p.y
  };
}
function Ed(e) {
  return Array.from(e.getClientRects());
}
function Rd(e) {
  const t = Je(e), n = rr(e), r = e.ownerDocument.body, o = Ie(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ie(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + No(e);
  const s = -n.scrollTop;
  return je(r).direction === "rtl" && (l += Ie(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function $d(e, t) {
  const n = Le(e), r = Je(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Po();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Td(e, t) {
  const n = $t(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Xe(e) ? Vt(e) : Ke(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function ki(e, t, n) {
  let r;
  if (t === "viewport")
    r = $d(e, n);
  else if (t === "document")
    r = Rd(Je(e));
  else if (Oe(t))
    r = Td(t, n);
  else {
    const o = Os(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Un(r);
}
function Ps(e, t) {
  const n = mt(e);
  return n === t || !Oe(n) || Wt(n) ? !1 : je(n).position === "fixed" || Ps(n, t);
}
function Id(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = mn(e, [], !1).filter((s) => Oe(s) && Yt(s) !== "body"), o = null;
  const i = je(e).position === "fixed";
  let l = i ? mt(e) : e;
  for (; Oe(l) && !Wt(l); ) {
    const s = je(l), a = Fo(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || bn(l) && !a && Ps(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = mt(l);
  }
  return t.set(e, r), r;
}
function Md(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? nr(t) ? [] : Id(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const d = ki(t, c, o);
    return u.top = Ie(d.top, u.top), u.right = Rt(d.right, u.right), u.bottom = Rt(d.bottom, u.bottom), u.left = Ie(d.left, u.left), u;
  }, ki(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Od(e) {
  const {
    width: t,
    height: n
  } = Ms(e);
  return {
    width: t,
    height: n
  };
}
function Fd(e, t, n) {
  const r = Xe(t), o = Je(t), i = n === "fixed", l = $t(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Ke(0);
  function u() {
    a.x = No(o);
  }
  if (r || !r && !i)
    if ((Yt(t) !== "body" || bn(o)) && (s = rr(t)), r) {
      const f = $t(t, !0, i, t);
      a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Fs(o, s) : Ke(0), d = l.left + s.scrollLeft - a.x - c.x, p = l.top + s.scrollTop - a.y - c.y;
  return {
    x: d,
    y: p,
    width: l.width,
    height: l.height
  };
}
function yr(e) {
  return je(e).position === "static";
}
function Ni(e, t) {
  if (!Xe(e) || je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Je(e) === n && (n = n.ownerDocument.body), n;
}
function ks(e, t) {
  const n = Le(e);
  if (nr(e))
    return n;
  if (!Xe(e)) {
    let o = mt(e);
    for (; o && !Wt(o); ) {
      if (Oe(o) && !yr(o))
        return o;
      o = mt(o);
    }
    return n;
  }
  let r = Ni(e, t);
  for (; r && id(r) && yr(r); )
    r = Ni(r, t);
  return r && Wt(r) && yr(r) && !Fo(r) ? n : r || ld(e) || n;
}
const Pd = async function(e) {
  const t = this.getOffsetParent || ks, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Fd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function kd(e) {
  return je(e).direction === "rtl";
}
const Nd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sd,
  getDocumentElement: Je,
  getClippingRect: Md,
  getOffsetParent: ks,
  getElementRects: Pd,
  getClientRects: Ed,
  getDimensions: Od,
  getScale: Vt,
  isElement: Oe,
  isRTL: kd
};
function Ns(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ad(e, t) {
  let n = null, r;
  const o = Je(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: p,
      height: f
    } = u;
    if (s || t(), !p || !f)
      return;
    const m = On(d), h = On(o.clientWidth - (c + p)), v = On(o.clientHeight - (d + f)), w = On(c), C = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -w + "px",
      threshold: Ie(0, Rt(1, a)) || 1
    };
    let E = !0;
    function I(M) {
      const R = M[0].intersectionRatio;
      if (R !== a) {
        if (!E)
          return l();
        R ? l(!1, R) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !Ns(u, e.getBoundingClientRect()) && l(), E = !1;
    }
    try {
      n = new IntersectionObserver(I, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(I, C);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Dd(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = ko(e), c = o || i ? [...u ? mn(u) : [], ...mn(t)] : [];
  c.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = u && s ? Ad(u, n) : null;
  let p = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === u && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = f) == null || C.observe(t);
    })), n();
  }), u && !a && f.observe(u), f.observe(t));
  let m, h = a ? $t(e) : null;
  a && v();
  function v() {
    const w = $t(e);
    h && !Ns(h, w) && n(), h = w, m = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    c.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), d == null || d(), (w = f) == null || w.disconnect(), f = null, a && cancelAnimationFrame(m);
  };
}
const br = or, Ld = wd, Vd = yd, Hd = vd, zd = bd, Bd = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Nd,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return hd(e, t, {
    ...o,
    platform: i
  });
};
var An = typeof document < "u" ? Ze : oe;
function Wn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Wn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Wn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function As(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ai(e, t) {
  const n = As(e);
  return Math.round(t * n) / n;
}
function xr(e) {
  const t = D(e);
  return An(() => {
    t.current = e;
  }), t;
}
function jd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: u
  } = e, [c, d] = U({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = U(r);
  Wn(p, r) || f(r);
  const [m, h] = U(null), [v, w] = U(null), b = ie((z) => {
    z !== M.current && (M.current = z, h(z));
  }, []), C = ie((z) => {
    z !== R.current && (R.current = z, w(z));
  }, []), E = i || m, I = l || v, M = D(null), R = D(null), _ = D(c), y = a != null, x = xr(a), S = xr(o), T = xr(u), A = ie(() => {
    if (!M.current || !R.current)
      return;
    const z = {
      placement: t,
      strategy: n,
      middleware: p
    };
    S.current && (z.platform = S.current), Bd(M.current, R.current, z).then((O) => {
      const k = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      F.current && !Wn(_.current, k) && (_.current = k, De(() => {
        d(k);
      }));
    });
  }, [p, t, n, S, T]);
  An(() => {
    u === !1 && _.current.isPositioned && (_.current.isPositioned = !1, d((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [u]);
  const F = D(!1);
  An(() => (F.current = !0, () => {
    F.current = !1;
  }), []), An(() => {
    if (E && (M.current = E), I && (R.current = I), E && I) {
      if (x.current)
        return x.current(E, I, A);
      A();
    }
  }, [E, I, A, x, y]);
  const G = W(() => ({
    reference: M,
    floating: R,
    setReference: b,
    setFloating: C
  }), [b, C]), Z = W(() => ({
    reference: E,
    floating: I
  }), [E, I]), B = W(() => {
    const z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!Z.floating)
      return z;
    const O = Ai(Z.floating, c.x), k = Ai(Z.floating, c.y);
    return s ? {
      ...z,
      transform: "translate(" + O + "px, " + k + "px)",
      ...As(Z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: k
    };
  }, [n, s, Z.floating, c.x, c.y]);
  return W(() => ({
    ...c,
    update: A,
    refs: G,
    elements: Z,
    floatingStyles: B
  }), [c, A, G, Z, B]);
}
const Ds = (e, t) => ({
  ...Ld(e),
  options: [e, t]
}), Ud = (e, t) => ({
  ...Vd(e),
  options: [e, t]
}), Wd = (e, t) => ({
  ...Hd(e),
  options: [e, t]
}), Gd = (e, t) => ({
  ...zd(e),
  options: [e, t]
}), Ls = {
  ...Hr
}, qd = Ls.useInsertionEffect, Kd = qd || ((e) => e());
function Vs(e) {
  const t = D(() => {
  });
  return Kd(() => {
    t.current = e;
  }), ie(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Zr = typeof document < "u" ? Ze : oe;
let Di = !1, Yd = 0;
const Li = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Yd++
);
function Xd() {
  const [e, t] = U(() => Di ? Li() : void 0);
  return Zr(() => {
    e == null && t(Li());
  }, []), oe(() => {
    Di = !0;
  }, []), e;
}
const Zd = Ls.useId, Jd = Zd || Xd;
function Qd() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const ef = /* @__PURE__ */ pe(null), tf = /* @__PURE__ */ pe(null), nf = () => {
  var e;
  return ((e = ae(ef)) == null ? void 0 : e.id) || null;
}, rf = () => ae(tf), of = "data-floating-ui-focusable";
function lf(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Jd(), i = D({}), [l] = U(() => Qd()), s = nf() != null, [a, u] = U(r.reference), c = Vs((f, m, h) => {
    i.current.openEvent = f ? m : void 0, l.emit("openchange", {
      open: f,
      event: m,
      reason: h,
      nested: s
    }), n == null || n(f, m, h);
  }), d = W(() => ({
    setPositionReference: u
  }), []), p = W(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return W(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: p,
    events: l,
    floatingId: o,
    refs: d
  }), [t, c, p, l, o, d]);
}
function sf(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = lf({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = U(null), [s, a] = U(null), c = (o == null ? void 0 : o.domReference) || i, d = D(null), p = rf();
  Zr(() => {
    c && (d.current = c);
  }, [c]);
  const f = jd({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), m = ie((C) => {
    const E = Oe(C) ? {
      getBoundingClientRect: () => C.getBoundingClientRect(),
      contextElement: C
    } : C;
    a(E), f.refs.setReference(E);
  }, [f.refs]), h = ie((C) => {
    (Oe(C) || C === null) && (d.current = C, l(C)), (Oe(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    C !== null && !Oe(C)) && f.refs.setReference(C);
  }, [f.refs]), v = W(() => ({
    ...f.refs,
    setReference: h,
    setPositionReference: m,
    domReference: d
  }), [f.refs, h, m]), w = W(() => ({
    ...f.elements,
    domReference: c
  }), [f.elements, c]), b = W(() => ({
    ...f,
    ...r,
    refs: v,
    elements: w,
    nodeId: t
  }), [f, v, w, t, r]);
  return Zr(() => {
    r.dataRef.current.floatingContext = b;
    const C = p == null ? void 0 : p.nodesRef.current.find((E) => E.id === t);
    C && (C.context = b);
  }), W(() => ({
    ...f,
    context: b,
    refs: v,
    elements: w
  }), [f, v, w, b]);
}
const Vi = "active", Hi = "selected";
function Cr(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Vi]: l,
      [Hi]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [of]: ""
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [u, c] = a;
      if (!(o && [Vi, Hi].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var d;
            (d = r.get(u)) == null || d.push(c), l[u] = function() {
              for (var p, f = arguments.length, m = new Array(f), h = 0; h < f; h++)
                m[h] = arguments[h];
              return (p = r.get(u)) == null ? void 0 : p.map((v) => v(...m)).find((v) => v !== void 0);
            };
          }
        } else
          l[u] = c;
    }), l), {})
  };
}
function af(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = ie(
    (s) => Cr(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = ie(
    (s) => Cr(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = ie(
    (s) => Cr(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return W(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
function zi(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const uf = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: l = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: u,
      ...c
    } = Xt(e, t), {
      rects: d,
      elements: {
        floating: p
      }
    } = t, f = n.current[l], m = (u == null ? void 0 : u.current) || p, h = p.clientTop || m.clientTop, v = p.clientTop !== 0, w = m.clientTop !== 0, b = p === m;
    if (!f)
      return {};
    const C = {
      ...t,
      ...await Ds(-f.offsetTop - p.clientTop - d.reference.height / 2 - f.offsetHeight / 2 - i).fn(t)
    }, E = await br(zi(C, m.scrollHeight + h + p.clientTop), c), I = await br(C, {
      ...c,
      elementContext: "reference"
    }), M = Ie(0, E.top), R = C.y + M, x = (m.scrollHeight > m.clientHeight ? (S) => S : gn)(Ie(0, m.scrollHeight + (v && b || w ? h * 2 : 0) - M - Ie(0, E.bottom)));
    if (m.style.maxHeight = x + "px", m.scrollTop = M, o) {
      const S = m.offsetHeight < f.offsetHeight * Rt(s, n.current.length) - 1 || I.top >= -a || I.bottom >= -a;
      De(() => o(S));
    }
    return r && (r.current = await br(zi({
      ...C,
      y: R
    }, m.offsetHeight + h + p.clientTop), c)), {
      y: R
    };
  }
});
function cf(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = Vs(s), u = D(!1), c = D(null), d = D(null);
  oe(() => {
    if (!o) return;
    function f(h) {
      if (h.ctrlKey || !m || i.current == null)
        return;
      const v = h.deltaY, w = i.current.top >= -0.5, b = i.current.bottom >= -0.5, C = m.scrollHeight - m.clientHeight, E = v < 0 ? -1 : 1, I = v < 0 ? "max" : "min";
      m.scrollHeight <= m.clientHeight || (!w && v > 0 || !b && v < 0 ? (h.preventDefault(), De(() => {
        a((M) => M + Math[I](v, C * E));
      })) : /firefox/i.test(sd()) && (m.scrollTop += v));
    }
    const m = (l == null ? void 0 : l.current) || r.floating;
    if (n && m)
      return m.addEventListener("wheel", f), requestAnimationFrame(() => {
        c.current = m.scrollTop, i.current != null && (d.current = {
          ...i.current
        });
      }), () => {
        c.current = null, d.current = null, m.removeEventListener("wheel", f);
      };
  }, [o, n, r.floating, i, l, a]);
  const p = W(() => ({
    onKeyDown() {
      u.current = !0;
    },
    onWheel() {
      u.current = !1;
    },
    onPointerMove() {
      u.current = !1;
    },
    onScroll() {
      const f = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !f || !u.current)) {
        if (c.current !== null) {
          const m = f.scrollTop - c.current;
          (i.current.bottom < -0.5 && m < -1 || i.current.top < -0.5 && m > 1) && De(() => a((h) => h + m));
        }
        requestAnimationFrame(() => {
          c.current = f.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return W(() => o ? {
    floating: p
  } : {}, [o, p]);
}
let Cn = pe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Cn.displayName = "FloatingContext";
let Ao = pe(null);
Ao.displayName = "PlacementContext";
function df(e) {
  return W(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function ff() {
  return ae(Cn).setReference;
}
function pf() {
  let { getFloatingProps: e, slot: t } = ae(Cn);
  return ie((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function mf(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = ae(Ao), n = W(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  ce(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = ae(Cn);
  return W(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Bi = 4;
function gf({ children: e, enabled: t = !0 }) {
  let [n, r] = U(null), [o, i] = U(0), l = D(null), [s, a] = U(null);
  hf(s);
  let u = t && n !== null && s !== null, { to: c = "bottom", gap: d = 0, offset: p = 0, padding: f = 0, inner: m } = vf(n, s), [h, v = "center"] = c.split(" ");
  ce(() => {
    u && i(0);
  }, [u]);
  let { refs: w, floatingStyles: b, context: C } = sf({ open: u, placement: h === "selection" ? v === "center" ? "bottom" : `bottom-${v}` : v === "center" ? `${h}` : `${h}-${v}`, strategy: "absolute", transform: !1, middleware: [Ds({ mainAxis: h === "selection" ? 0 : d, crossAxis: p }), Ud({ padding: f }), h !== "selection" && Wd({ padding: f }), h === "selection" && m ? uf({ ...m, padding: f, overflowRef: l, offset: o, minItemsVisible: Bi, referenceOverflowThreshold: f, onFallbackChange(S) {
    var T, A;
    if (!S) return;
    let F = C.elements.floating;
    if (!F) return;
    let G = parseFloat(getComputedStyle(F).scrollPaddingBottom) || 0, Z = Math.min(Bi, F.childElementCount), B = 0, z = 0;
    for (let O of (A = (T = C.elements.floating) == null ? void 0 : T.childNodes) != null ? A : []) if (O instanceof HTMLElement) {
      let k = O.offsetTop, N = k + O.clientHeight + G, V = F.scrollTop, $ = V + F.clientHeight;
      if (k >= V && N <= $) Z--;
      else {
        z = Math.max(0, Math.min(N, $) - Math.max(k, V)), B = O.clientHeight;
        break;
      }
    }
    Z >= 1 && i((O) => {
      let k = B * Z - z + G;
      return O >= k ? O : k;
    });
  } }) : null, Gd({ padding: f, apply({ availableWidth: S, availableHeight: T, elements: A }) {
    Object.assign(A.floating.style, { overflow: "auto", maxWidth: `${S}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${T}px)` });
  } })].filter(Boolean), whileElementsMounted: Dd }), [E = h, I = v] = C.placement.split("-");
  h === "selection" && (E = "selection");
  let M = W(() => ({ anchor: [E, I].filter(Boolean).join(" ") }), [E, I]), R = cf(C, { overflowRef: l, onChange: i }), { getReferenceProps: _, getFloatingProps: y } = af([R]), x = j((S) => {
    a(S), w.setFloating(S);
  });
  return P(Ao.Provider, { value: r }, P(Cn.Provider, { value: { setFloating: x, setReference: w.setReference, styles: b, getReferenceProps: _, getFloatingProps: y, slot: M } }, e));
}
function hf(e) {
  ce(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function vf(e, t) {
  var n, r, o;
  let i = Sr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = Sr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = Sr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function Sr(e, t, n = void 0) {
  let r = Mt(), o = j((a, u) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!u) return [n, null];
      let c = ji(a, u);
      return [c, (d) => {
        let p = Hs(a);
        {
          let f = p.map((m) => window.getComputedStyle(u).getPropertyValue(m));
          r.requestAnimationFrame(function m() {
            r.nextFrame(m);
            let h = !1;
            for (let [w, b] of p.entries()) {
              let C = window.getComputedStyle(u).getPropertyValue(b);
              if (f[w] !== C) {
                f[w] = C, h = !0;
                break;
              }
            }
            if (!h) return;
            let v = ji(a, u);
            c !== v && (d(v), c = v);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = W(() => o(e, t)[0], [e, t]), [l = i, s] = U();
  return ce(() => {
    let [a, u] = o(e, t);
    if (s(a), !!u) return u(s);
  }, [e, t]), l;
}
function Hs(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Hs(o)] : [r];
  }
  return [];
}
function ji(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function _f({ children: e, freeze: t }) {
  let n = Jr(t, e);
  return L.createElement(L.Fragment, null, n);
}
function Jr(e, t) {
  let [n, r] = U(t);
  return !e && n !== t && r(t), e ? n : t;
}
let ir = pe(null);
ir.displayName = "OpenClosedContext";
var Fe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Fe || {});
function Sn() {
  return ae(ir);
}
function zs({ value: e, children: t }) {
  return L.createElement(ir.Provider, { value: e }, t);
}
function wf({ children: e }) {
  return L.createElement(ir.Provider, { value: null }, e);
}
function yf(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let qe = [];
yf(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || qe[0] === t.target) return;
    let n = t.target;
    n = n.closest(Bn), qe.unshift(n ?? t.target), qe = qe.filter((r) => r != null && r.isConnected), qe.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function bf(e) {
  throw new Error("Unexpected object: " + e);
}
var be = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(be || {});
function Ui(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let i = o - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      bf(e);
  }
}
var Do = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Do || {});
function Bs(e) {
  let t = j(e), n = D(!1);
  oe(() => (n.current = !1, () => {
    n.current = !0, Zn(() => {
      n.current && t();
    });
  }), [t]);
}
function xf() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Hr ? ((t) => t.useSyncExternalStore)(Hr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function En() {
  let e = xf(), [t, n] = U(St.isHandoffComplete);
  return t && St.isHandoffComplete === !1 && n(!1), oe(() => {
    t !== !0 && n(!0);
  }, [t]), oe(() => St.handoff(), []), e ? !1 : t;
}
let js = pe(!1);
function Cf() {
  return ae(js);
}
function Wi(e) {
  return L.createElement(js.Provider, { value: e.force }, e.children);
}
function Sf(e) {
  let t = Cf(), n = ae(Ws), r = Ot(e), [o, i] = U(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (St.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return oe(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), oe(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let Us = me, Ef = xe(function(e, t) {
  let n = e, r = D(null), o = Pe(lc((d) => {
    r.current = d;
  }), t), i = Ot(r), l = Sf(r), [s] = U(() => {
    var d;
    return St.isServer ? null : (d = i == null ? void 0 : i.createElement("div")) != null ? d : null;
  }), a = ae(Qr), u = En();
  ce(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), ce(() => {
    if (s && a) return a.register(s);
  }, [a, s]), Bs(() => {
    var d;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((d = l.parentElement) == null || d.removeChild(l)));
  });
  let c = Se();
  return u ? !l || !s ? null : wn(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Us, name: "Portal" }), s) : null;
});
function Rf(e, t) {
  let n = Pe(t), { enabled: r = !0, ...o } = e, i = Se();
  return r ? L.createElement(Ef, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Us, name: "Portal" });
}
let $f = me, Ws = pe(null);
function Tf(e, t) {
  let { target: n, ...r } = e, o = { ref: Pe(t) }, i = Se();
  return L.createElement(Ws.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: $f, name: "Popover.Group" }));
}
let Qr = pe(null);
function If() {
  let e = ae(Qr), t = D([]), n = j((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = j((i) => {
    let l = t.current.indexOf(i);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
  }), o = W(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, W(() => function({ children: i }) {
    return L.createElement(Qr.Provider, { value: o }, i);
  }, [o])];
}
let Mf = xe(Rf), Gs = xe(Tf), qs = Object.assign(Mf, { Group: Gs });
var Of = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Of || {}), Ff = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ff || {}), Pf = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Pf || {}), kf = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(kf || {});
function Er(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((l, s) => l.dataRef.current.order - s.dataRef.current.order) : hs(r, (l) => l.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let Nf = { 1(e) {
  var t;
  return (t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1, isTyping: !1, activationTrigger: 2, __demoMode: !1 };
}, 0(e) {
  var t, n;
  if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
  if ((n = e.dataRef.current) != null && n.value) {
    let r = e.dataRef.current.calculateIndex(e.dataRef.current.value);
    if (r !== -1) return { ...e, activeOptionIndex: r, comboboxState: 0, __demoMode: !1 };
  }
  return { ...e, comboboxState: 0, __demoMode: !1 };
}, 3(e, t) {
  return e.isTyping === t.isTyping ? e : { ...e, isTyping: t.isTyping };
}, 2(e, t) {
  var n, r, o, i;
  if ((n = e.dataRef.current) != null && n.disabled || e.optionsElement && !((r = e.dataRef.current) != null && r.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
  if (e.virtual) {
    let { options: u, disabled: c } = e.virtual, d = t.focus === be.Specific ? t.idx : Ui(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var f, m;
      return (m = (f = e.activeOptionIndex) != null ? f : u.findIndex((h) => !c(h))) != null ? m : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), p = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === d && e.activationTrigger === p ? e : { ...e, activeOptionIndex: d, activationTrigger: p, isTyping: !1, __demoMode: !1 };
  }
  let l = Er(e);
  if (l.activeOptionIndex === null) {
    let u = l.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (l.activeOptionIndex = u);
  }
  let s = t.focus === be.Specific ? t.idx : Ui(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === s && e.activationTrigger === a ? e : { ...e, ...l, isTyping: !1, activeOptionIndex: s, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, l = Er(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(i));
  let s = { ...e, ...l, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = Er(e, (o) => {
    let i = o.findIndex((l) => l.id === t.id);
    return i !== -1 && o.splice(i, 1), o;
  });
  return { ...e, ...r, activationTrigger: 2 };
}, 6: (e, t) => e.activationTrigger === t.trigger ? e : { ...e, activationTrigger: t.trigger }, 7: (e, t) => {
  var n, r;
  if (e.virtual === null) return { ...e, virtual: { options: t.options, disabled: (n = t.disabled) != null ? n : () => !1 } };
  if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e;
  let o = e.activeOptionIndex;
  if (e.activeOptionIndex !== null) {
    let i = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
    i !== -1 ? o = i : o = null;
  }
  return { ...e, activeOptionIndex: o, virtual: { options: t.options, disabled: (r = t.disabled) != null ? r : () => !1 } };
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, Lo = pe(null);
Lo.displayName = "ComboboxActionsContext";
function Rn(e) {
  let t = ae(Lo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Rn), n;
  }
  return t;
}
let Ks = pe(null);
function Af(e) {
  let t = Zt("VirtualProvider"), { options: n } = t.virtual, [r, o] = W(() => {
    let u = t.optionsElement;
    if (!u) return [0, 0];
    let c = window.getComputedStyle(u);
    return [parseFloat(c.paddingBlockStart || c.paddingTop), parseFloat(c.paddingBlockEnd || c.paddingBottom)];
  }, [t.optionsElement]), i = cs({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [l, s] = U(0);
  ce(() => {
    s((u) => u + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : L.createElement(Ks.Provider, { value: i }, L.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var c;
    return L.createElement(me, { key: u.key }, L.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }), { key: `${l}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let hn = pe(null);
hn.displayName = "ComboboxDataContext";
function Zt(e) {
  let t = ae(hn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Zt), n;
  }
  return t;
}
function Df(e, t) {
  return Ne(t.type, Nf, e, t);
}
let Lf = me;
function Vf(e, t) {
  var n, r;
  let o = Io(), { value: i, defaultValue: l, onChange: s, form: a, name: u, by: c, disabled: d = o || !1, onClose: p, __demoMode: f = !1, multiple: m = !1, immediate: h = !1, virtual: v = null, nullable: w, ...b } = e, C = Xu(l), [E = m ? [] : void 0, I] = Yu(i, s, C), [M, R] = st(Df, { dataRef: Yn(), comboboxState: f ? 0 : 1, isTyping: !1, options: [], virtual: v ? { options: v.options, disabled: (n = v.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: f }), _ = D(!1), y = D({ static: !1, hold: !1 }), x = Fc(c), S = j((H) => v ? c === null ? v.options.indexOf(H) : v.options.findIndex((K) => x(K, H)) : M.options.findIndex((K) => x(K.dataRef.current.value, H))), T = ie((H) => Ne(F.mode, { 1: () => E.some((K) => x(K, H)), 0: () => x(E, H) }), [E]), A = j((H) => M.activeOptionIndex === S(H)), F = W(() => ({ ...M, immediate: h, optionsPropsRef: y, value: E, defaultValue: C, disabled: d, mode: m ? 1 : 0, virtual: v ? M.virtual : null, get activeOptionIndex() {
    if (_.current && M.activeOptionIndex === null && (v ? v.options.length > 0 : M.options.length > 0)) {
      if (v) {
        let K = v.options.findIndex((Q) => {
          var Ee, ne;
          return !((ne = (Ee = v.disabled) == null ? void 0 : Ee.call(v, Q)) != null && ne);
        });
        if (K !== -1) return K;
      }
      let H = M.options.findIndex((K) => !K.dataRef.current.disabled);
      if (H !== -1) return H;
    }
    return M.activeOptionIndex;
  }, calculateIndex: S, compare: x, isSelected: T, isActive: A }), [E, C, d, m, f, M, v]);
  ce(() => {
    var H;
    v && R({ type: 7, options: v.options, disabled: (H = v.disabled) != null ? H : null });
  }, [v, v == null ? void 0 : v.options, v == null ? void 0 : v.disabled]), ce(() => {
    M.dataRef.current = F;
  }, [F]);
  let G = F.comboboxState === 0;
  ys(G, [F.buttonElement, F.inputElement, F.optionsElement], () => q.closeCombobox());
  let Z = W(() => {
    var H, K, Q;
    return { open: F.comboboxState === 0, disabled: d, activeIndex: F.activeOptionIndex, activeOption: F.activeOptionIndex === null ? null : F.virtual ? F.virtual.options[(H = F.activeOptionIndex) != null ? H : 0] : (Q = (K = F.options[F.activeOptionIndex]) == null ? void 0 : K.dataRef.current.value) != null ? Q : null, value: E };
  }, [F, d, E]), B = j(() => {
    if (F.activeOptionIndex !== null) {
      if (q.setIsTyping(!1), F.virtual) $(F.virtual.options[F.activeOptionIndex]);
      else {
        let { dataRef: H } = F.options[F.activeOptionIndex];
        $(H.current.value);
      }
      q.goToOption(be.Specific, F.activeOptionIndex);
    }
  }), z = j(() => {
    R({ type: 0 }), _.current = !0;
  }), O = j(() => {
    R({ type: 1 }), _.current = !1, p == null || p();
  }), k = j((H) => {
    R({ type: 3, isTyping: H });
  }), N = j((H, K, Q) => (_.current = !1, H === be.Specific ? R({ type: 2, focus: be.Specific, idx: K, trigger: Q }) : R({ type: 2, focus: H, trigger: Q }))), V = j((H, K) => (R({ type: 4, payload: { id: H, dataRef: K } }), () => {
    F.isActive(K.current.value) && (_.current = !0), R({ type: 5, id: H });
  })), $ = j((H) => Ne(F.mode, { 0() {
    return I == null ? void 0 : I(H);
  }, 1() {
    let K = F.value.slice(), Q = K.findIndex((Ee) => x(Ee, H));
    return Q === -1 ? K.push(H) : K.splice(Q, 1), I == null ? void 0 : I(K);
  } })), se = j((H) => {
    R({ type: 6, trigger: H });
  }), te = j((H) => {
    R({ type: 8, element: H });
  }), ue = j((H) => {
    R({ type: 9, element: H });
  }), le = j((H) => {
    R({ type: 10, element: H });
  }), q = W(() => ({ onChange: $, registerOption: V, goToOption: N, setIsTyping: k, closeCombobox: O, openCombobox: z, setActivationTrigger: se, selectActiveOption: B, setInputElement: te, setButtonElement: ue, setOptionsElement: le }), []), [ee, ge] = pc(), J = t === null ? {} : { ref: t }, he = ie(() => {
    if (C !== void 0) return I == null ? void 0 : I(C);
  }, [I, C]), we = Se();
  return L.createElement(ge, { value: ee, props: { htmlFor: (r = F.inputElement) == null ? void 0 : r.id }, slot: { open: F.comboboxState === 0, disabled: d } }, L.createElement(gf, null, L.createElement(Lo.Provider, { value: q }, L.createElement(hn.Provider, { value: F }, L.createElement(zs, { value: Ne(F.comboboxState, { 0: Fe.Open, 1: Fe.Closed }) }, u != null && L.createElement(tc, { disabled: d, data: E != null ? { [u]: E } : {}, form: a, onReset: he }), we({ ourProps: J, theirProps: b, slot: Z, defaultTag: Lf, name: "Combobox" }))))));
}
let Hf = "input";
function zf(e, t) {
  var n, r, o, i, l;
  let s = Zt("Combobox.Input"), a = Rn("Combobox.Input"), u = Me(), c = is(), { id: d = c || `headlessui-combobox-input-${u}`, onChange: p, displayValue: f, disabled: m = s.disabled || !1, autoFocus: h = !1, type: v = "text", ...w } = e, b = D(null), C = Pe(b, t, ff(), a.setInputElement), E = Ot(s.inputElement), I = Mt(), M = j(() => {
    a.onChange(null), s.optionsElement && (s.optionsElement.scrollTop = 0), a.goToOption(be.Nothing);
  }), R = W(() => {
    var $;
    return typeof f == "function" && s.value !== void 0 ? ($ = f(s.value)) != null ? $ : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, f]);
  pn(([$, se], [te, ue]) => {
    if (s.isTyping) return;
    let le = b.current;
    le && ((ue === 0 && se === 1 || $ !== te) && (le.value = $), requestAnimationFrame(() => {
      if (s.isTyping || !le || (E == null ? void 0 : E.activeElement) !== le) return;
      let { selectionStart: q, selectionEnd: ee } = le;
      Math.abs((ee ?? 0) - (q ?? 0)) === 0 && q === 0 && le.setSelectionRange(le.value.length, le.value.length);
    }));
  }, [R, s.comboboxState, E, s.isTyping]), pn(([$], [se]) => {
    if ($ === 0 && se === 1) {
      if (s.isTyping) return;
      let te = b.current;
      if (!te) return;
      let ue = te.value, { selectionStart: le, selectionEnd: q, selectionDirection: ee } = te;
      te.value = "", te.value = ue, ee !== null ? te.setSelectionRange(le, q, ee) : te.setSelectionRange(le, q);
    }
  }, [s.comboboxState]);
  let _ = D(!1), y = j(() => {
    _.current = !0;
  }), x = j(() => {
    I.nextFrame(() => {
      _.current = !1;
    });
  }), S = j(($) => {
    switch (a.setIsTyping(!0), $.key) {
      case Te.Enter:
        if (s.comboboxState !== 0 || _.current) return;
        if ($.preventDefault(), $.stopPropagation(), s.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), s.mode === 0 && a.closeCombobox();
        break;
      case Te.ArrowDown:
        return $.preventDefault(), $.stopPropagation(), Ne(s.comboboxState, { 0: () => a.goToOption(be.Next), 1: () => a.openCombobox() });
      case Te.ArrowUp:
        return $.preventDefault(), $.stopPropagation(), Ne(s.comboboxState, { 0: () => a.goToOption(be.Previous), 1: () => {
          De(() => a.openCombobox()), s.value || a.goToOption(be.Last);
        } });
      case Te.Home:
        if ($.shiftKey) break;
        return $.preventDefault(), $.stopPropagation(), a.goToOption(be.First);
      case Te.PageUp:
        return $.preventDefault(), $.stopPropagation(), a.goToOption(be.First);
      case Te.End:
        if ($.shiftKey) break;
        return $.preventDefault(), $.stopPropagation(), a.goToOption(be.Last);
      case Te.PageDown:
        return $.preventDefault(), $.stopPropagation(), a.goToOption(be.Last);
      case Te.Escape:
        return s.comboboxState !== 0 ? void 0 : ($.preventDefault(), s.optionsElement && !s.optionsPropsRef.current.static && $.stopPropagation(), s.mode === 0 && s.value === null && M(), a.closeCombobox());
      case Te.Tab:
        if (s.comboboxState !== 0) return;
        s.mode === 0 && s.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), T = j(($) => {
    p == null || p($), s.mode === 0 && $.target.value === "" && M(), a.openCombobox();
  }), A = j(($) => {
    var se, te, ue;
    let le = (se = $.relatedTarget) != null ? se : qe.find((q) => q !== $.currentTarget);
    if (!((te = s.optionsElement) != null && te.contains(le)) && !((ue = s.buttonElement) != null && ue.contains(le)) && s.comboboxState === 0) return $.preventDefault(), s.mode === 0 && s.value === null && M(), a.closeCombobox();
  }), F = j(($) => {
    var se, te, ue;
    let le = (se = $.relatedTarget) != null ? se : qe.find((q) => q !== $.currentTarget);
    (te = s.buttonElement) != null && te.contains(le) || (ue = s.optionsElement) != null && ue.contains(le) || s.disabled || s.immediate && s.comboboxState !== 0 && I.microTask(() => {
      De(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), G = er(), Z = sc(), { isFocused: B, focusProps: z } = es({ autoFocus: h }), { isHovered: O, hoverProps: k } = Ql({ isDisabled: m }), N = W(() => ({ open: s.comboboxState === 0, disabled: m, hover: O, focus: B, autofocus: h }), [s, O, B, h, m]), V = Mo({ ref: C, id: d, role: "combobox", type: v, "aria-controls": (n = s.optionsElement) == null ? void 0 : n.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find(($) => !$.dataRef.current.disabled && s.compare($.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (o = s.options[s.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": G, "aria-describedby": Z, "aria-autocomplete": "list", defaultValue: (l = (i = e.defaultValue) != null ? i : s.defaultValue !== void 0 ? f == null ? void 0 : f(s.defaultValue) : null) != null ? l : s.defaultValue, disabled: m || void 0, autoFocus: h, onCompositionStart: y, onCompositionEnd: x, onKeyDown: S, onChange: T, onFocus: F, onBlur: A }, z, k);
  return Se()({ ourProps: V, theirProps: w, slot: N, defaultTag: Hf, name: "Combobox.Input" });
}
let Bf = "button";
function jf(e, t) {
  var n;
  let r = Zt("Combobox.Button"), o = Rn("Combobox.Button"), i = Pe(t, o.setButtonElement), l = Me(), { id: s = `headlessui-combobox-button-${l}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...c } = e, d = bs(r.inputElement), p = j((R) => {
    switch (R.key) {
      case Te.Space:
      case Te.Enter:
        R.preventDefault(), R.stopPropagation(), r.comboboxState === 1 && De(() => o.openCombobox()), d();
        return;
      case Te.ArrowDown:
        R.preventDefault(), R.stopPropagation(), r.comboboxState === 1 && (De(() => o.openCombobox()), r.value || o.goToOption(be.First)), d();
        return;
      case Te.ArrowUp:
        R.preventDefault(), R.stopPropagation(), r.comboboxState === 1 && (De(() => o.openCombobox()), r.value || o.goToOption(be.Last)), d();
        return;
      case Te.Escape:
        if (r.comboboxState !== 0) return;
        R.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && R.stopPropagation(), De(() => o.closeCombobox()), d();
        return;
      default:
        return;
    }
  }), f = j((R) => {
    R.preventDefault(), !oc(R.currentTarget) && (R.button === Do.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), d());
  }), m = er([s]), { isFocusVisible: h, focusProps: v } = es({ autoFocus: u }), { isHovered: w, hoverProps: b } = Ql({ isDisabled: a }), { pressed: C, pressProps: E } = ju({ disabled: a }), I = W(() => ({ open: r.comboboxState === 0, active: C || r.comboboxState === 0, disabled: a, value: r.value, hover: w, focus: h }), [r, w, h, C, a]), M = Mo({ ref: i, id: s, type: Wc(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": m, disabled: a || void 0, autoFocus: u, onMouseDown: f, onKeyDown: p }, v, b, E);
  return Se()({ ourProps: M, theirProps: c, slot: I, defaultTag: Bf, name: "Combobox.Button" });
}
let Uf = "div", Wf = jt.RenderStrategy | jt.Static;
function Gf(e, t) {
  var n, r, o;
  let i = Me(), { id: l = `headlessui-combobox-options-${i}`, hold: s = !1, anchor: a, portal: u = !1, modal: c = !0, transition: d = !1, ...p } = e, f = Zt("Combobox.Options"), m = Rn("Combobox.Options"), h = df(a);
  h && (u = !0);
  let [v, w] = mf(h), [b, C] = U(null), E = pf(), I = Pe(t, h ? v : null, m.setOptionsElement, C), M = Ot(f.optionsElement), R = Sn(), [_, y] = Ss(d, b, R !== null ? (R & Fe.Open) === Fe.Open : f.comboboxState === 0);
  ms(_, f.inputElement, m.closeCombobox);
  let x = f.__demoMode ? !1 : c && f.comboboxState === 0;
  xs(x, M);
  let S = f.__demoMode ? !1 : c && f.comboboxState === 0;
  ps(S, { allowed: ie(() => [f.inputElement, f.buttonElement, f.optionsElement], [f.inputElement, f.buttonElement, f.optionsElement]) }), ce(() => {
    var V;
    f.optionsPropsRef.current.static = (V = e.static) != null ? V : !1;
  }, [f.optionsPropsRef, e.static]), ce(() => {
    f.optionsPropsRef.current.hold = s;
  }, [f.optionsPropsRef, s]), od(f.comboboxState === 0, { container: f.optionsElement, accept(V) {
    return V.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : V.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(V) {
    V.setAttribute("role", "none");
  } });
  let T = er([(n = f.buttonElement) == null ? void 0 : n.id]), A = W(() => ({ open: f.comboboxState === 0, option: void 0 }), [f.comboboxState]), F = j(() => {
    m.setActivationTrigger(0);
  }), G = j((V) => {
    V.preventDefault(), m.setActivationTrigger(0);
  }), Z = Mo(h ? E() : {}, { "aria-labelledby": T, role: "listbox", "aria-multiselectable": f.mode === 1 ? !0 : void 0, id: l, ref: I, style: { ...p.style, ...w, "--input-width": Si(f.inputElement, !0).width, "--button-width": Si(f.buttonElement, !0).width }, onWheel: f.activationTrigger === 0 ? void 0 : F, onMouseDown: G, ...Cs(y) }), B = _ && f.comboboxState === 1, z = Jr(B, (r = f.virtual) == null ? void 0 : r.options), O = Jr(B, f.value), k = j((V) => f.compare(O, V));
  if (f.virtual) {
    if (z === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(p, { children: L.createElement(hn.Provider, { value: z !== f.virtual.options ? { ...f, virtual: { ...f.virtual, options: z } } : f }, L.createElement(Af, { slot: A }, p.children)) });
  }
  let N = Se();
  return L.createElement(qs, { enabled: u ? e.static || _ : !1 }, L.createElement(hn.Provider, { value: f.mode === 1 ? f : { ...f, isSelected: k } }, N({ ourProps: Z, theirProps: { ...p, children: L.createElement(_f, { freeze: B }, typeof p.children == "function" ? (o = p.children) == null ? void 0 : o.call(p, A) : p.children) }, slot: A, defaultTag: Uf, features: Wf, visible: _, name: "Combobox.Options" })));
}
let qf = "div";
function Kf(e, t) {
  var n, r, o, i;
  let l = Zt("Combobox.Option"), s = Rn("Combobox.Option"), a = Me(), { id: u = `headlessui-combobox-option-${a}`, value: c, disabled: d = (o = (r = (n = l.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null ? o : !1, order: p = null, ...f } = e, m = bs(l.inputElement), h = l.virtual ? l.activeOptionIndex === l.calculateIndex(c) : l.activeOptionIndex === null ? !1 : ((i = l.options[l.activeOptionIndex]) == null ? void 0 : i.id) === u, v = l.isSelected(c), w = D(null), b = _t({ disabled: d, value: c, domRef: w, order: p }), C = ae(Ks), E = Pe(t, w, C ? C.measureElement : null), I = j(() => {
    s.setIsTyping(!1), s.onChange(c);
  });
  ce(() => s.registerOption(u, b), [b, u]);
  let M = D(!(l.virtual || l.__demoMode));
  ce(() => {
    if (!l.virtual && !l.__demoMode) return Ye().requestAnimationFrame(() => {
      M.current = !0;
    });
  }, [l.virtual, l.__demoMode]), ce(() => {
    if (M.current && l.comboboxState === 0 && h && l.activationTrigger !== 0) return Ye().requestAnimationFrame(() => {
      var G, Z;
      (Z = (G = w.current) == null ? void 0 : G.scrollIntoView) == null || Z.call(G, { block: "nearest" });
    });
  }, [w, h, l.comboboxState, l.activationTrigger, l.activeOptionIndex]);
  let R = j((G) => {
    G.preventDefault(), G.button === Do.Left && (d || (I(), _s() || requestAnimationFrame(() => m()), l.mode === 0 && s.closeCombobox()));
  }), _ = j(() => {
    if (d) return s.goToOption(be.Nothing);
    let G = l.calculateIndex(c);
    s.goToOption(be.Specific, G);
  }), y = Zc(), x = j((G) => y.update(G)), S = j((G) => {
    if (!y.wasMoved(G) || d || h) return;
    let Z = l.calculateIndex(c);
    s.goToOption(be.Specific, Z, 0);
  }), T = j((G) => {
    y.wasMoved(G) && (d || h && (l.optionsPropsRef.current.hold || s.goToOption(be.Nothing)));
  }), A = W(() => ({ active: h, focus: h, selected: v, disabled: d }), [h, v, d]), F = { id: u, ref: E, role: "option", tabIndex: d === !0 ? void 0 : -1, "aria-disabled": d === !0 ? !0 : void 0, "aria-selected": v, disabled: void 0, onMouseDown: R, onFocus: _, onPointerEnter: x, onMouseEnter: x, onPointerMove: S, onMouseMove: S, onPointerLeave: T, onMouseLeave: T };
  return Se()({ ourProps: F, theirProps: f, slot: A, defaultTag: qf, name: "Combobox.Option" });
}
let Yf = xe(Vf), eo = xe(jf), Ys = xe(zf), Xf = vc, Xs = xe(Gf), to = xe(Kf), Zf = Object.assign(Yf, { Input: Ys, Button: eo, Label: Xf, Options: Xs, Option: to });
function Jf(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Kt(e, "escape");
  Oo(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Te.Escape && n(o));
  });
}
function Qf() {
  var e;
  let [t] = U(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = U((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return ce(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function ep({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Ot(n), o = j(() => {
    var i, l;
    let s = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? s.push(a) : "current" in a && a.current instanceof HTMLElement && s.push(a.current));
    if (t != null && t.current) for (let a of t.current) s.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((l = n == null ? void 0 : n.getRootNode()) == null ? void 0 : l.host)) || s.some((u) => a.contains(u)) || s.push(a));
    return s;
  });
  return { resolveContainers: o, contains: j((i) => o().some((l) => l.contains(i))) };
}
let Zs = pe(null);
function Gi({ children: e, node: t }) {
  let [n, r] = U(null), o = Js(t ?? n);
  return L.createElement(Zs.Provider, { value: o }, e, o === null && L.createElement(fn, { features: Ut.Hidden, ref: (i) => {
    var l, s;
    if (i) {
      for (let a of (s = (l = qt(i)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? s : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function Js(e = null) {
  var t;
  return (t = ae(Zs)) != null ? t : e;
}
function Vo() {
  let e = D(!1);
  return ce(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var rn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(rn || {});
function tp() {
  let e = D(0);
  return ws(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Qs(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let np = "div";
var bt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(bt || {});
function rp(e, t) {
  let n = D(null), r = Pe(n, t), { initialFocus: o, initialFocusFallback: i, containers: l, features: s = 15, ...a } = e;
  En() || (s = 0);
  let u = Ot(n);
  sp(s, { ownerDocument: u });
  let c = ap(s, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  up(s, { ownerDocument: u, container: n, containers: l, previousActiveElement: c });
  let d = tp(), p = j((b) => {
    let C = n.current;
    C && ((E) => E())(() => {
      Ne(d.current, { [rn.Forwards]: () => {
        un(C, tt.First, { skipElements: [b.relatedTarget, i] });
      }, [rn.Backwards]: () => {
        un(C, tt.Last, { skipElements: [b.relatedTarget, i] });
      } });
    });
  }), f = Kt(!!(s & 2), "focus-trap#tab-lock"), m = Mt(), h = D(!1), v = { ref: r, onKeyDown(b) {
    b.key == "Tab" && (h.current = !0, m.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(b) {
    if (!(s & 4)) return;
    let C = Qs(l);
    n.current instanceof HTMLElement && C.add(n.current);
    let E = b.relatedTarget;
    E instanceof HTMLElement && E.dataset.headlessuiFocusGuard !== "true" && (ea(C, E) || (h.current ? un(n.current, Ne(d.current, { [rn.Forwards]: () => tt.Next, [rn.Backwards]: () => tt.Previous }) | tt.WrapAround, { relativeTo: b.target }) : b.target instanceof HTMLElement && it(b.target)));
  } }, w = Se();
  return L.createElement(L.Fragment, null, f && L.createElement(fn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Ut.Focusable }), w({ ourProps: v, theirProps: a, defaultTag: np, name: "FocusTrap" }), f && L.createElement(fn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Ut.Focusable }));
}
let op = xe(rp), ip = Object.assign(op, { features: bt });
function lp(e = !0) {
  let t = D(qe.slice());
  return pn(([n], [r]) => {
    r === !0 && n === !1 && Zn(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = qe.slice());
  }, [e, qe, t]), j(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function sp(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = lp(n);
  pn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && it(r());
  }, [n]), Bs(() => {
    n && it(r());
  });
}
function ap(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = D(null), l = Kt(!!(e & 1), "focus-trap#initial-focus"), s = Vo();
  return pn(() => {
    if (e === 0) return;
    if (!l) {
      o != null && o.current && it(o.current);
      return;
    }
    let a = n.current;
    a && Zn(() => {
      if (!s.current) return;
      let u = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === u) {
          i.current = u;
          return;
        }
      } else if (a.contains(u)) {
        i.current = u;
        return;
      }
      if (r != null && r.current) it(r.current);
      else {
        if (e & 16) {
          if (un(a, tt.First | tt.AutoFocus) !== Kr.Error) return;
        } else if (un(a, tt.First) !== Kr.Error) return;
        if (o != null && o.current && (it(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), i;
}
function up(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = Vo(), l = !!(e & 4);
  Oo(t == null ? void 0 : t.defaultView, "focus", (s) => {
    if (!l || !i.current) return;
    let a = Qs(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let u = o.current;
    if (!u) return;
    let c = s.target;
    c && c instanceof HTMLElement ? ea(a, c) ? (o.current = c, it(c)) : (s.preventDefault(), s.stopPropagation(), it(u)) : it(o.current);
  }, !0);
}
function ea(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function ta(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : ra) !== me || L.Children.count(e.children) === 1;
}
let lr = pe(null);
lr.displayName = "TransitionContext";
var cp = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(cp || {});
function dp() {
  let e = ae(lr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function fp() {
  let e = ae(sr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let sr = pe(null);
sr.displayName = "NestingContext";
function ar(e) {
  return "children" in e ? ar(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function na(e, t) {
  let n = _t(e), r = D([]), o = Vo(), i = Mt(), l = j((f, m = dt.Hidden) => {
    let h = r.current.findIndex(({ el: v }) => v === f);
    h !== -1 && (Ne(m, { [dt.Unmount]() {
      r.current.splice(h, 1);
    }, [dt.Hidden]() {
      r.current[h].state = "hidden";
    } }), i.microTask(() => {
      var v;
      !ar(r) && o.current && ((v = n.current) == null || v.call(n));
    }));
  }), s = j((f) => {
    let m = r.current.find(({ el: h }) => h === f);
    return m ? m.state !== "visible" && (m.state = "visible") : r.current.push({ el: f, state: "visible" }), () => l(f, dt.Unmount);
  }), a = D([]), u = D(Promise.resolve()), c = D({ enter: [], leave: [] }), d = j((f, m, h) => {
    a.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([v]) => v !== f)), t == null || t.chains.current[m].push([f, new Promise((v) => {
      a.current.push(v);
    })]), t == null || t.chains.current[m].push([f, new Promise((v) => {
      Promise.all(c.current[m].map(([w, b]) => b)).then(() => v());
    })]), m === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => h(m)) : h(m);
  }), p = j((f, m, h) => {
    Promise.all(c.current[m].splice(0).map(([v, w]) => w)).then(() => {
      var v;
      (v = a.current.shift()) == null || v();
    }).then(() => h(m));
  });
  return W(() => ({ children: r, register: s, unregister: l, onStart: d, onStop: p, wait: u, chains: c }), [s, l, r, d, p, c, u]);
}
let ra = me, oa = jt.RenderStrategy;
function pp(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: u, enterFrom: c, enterTo: d, entered: p, leave: f, leaveFrom: m, leaveTo: h, ...v } = e, [w, b] = U(null), C = D(null), E = ta(e), I = Pe(...E ? [C, t, b] : t === null ? [] : [t]), M = (n = v.unmount) == null || n ? dt.Unmount : dt.Hidden, { show: R, appear: _, initial: y } = dp(), [x, S] = U(R ? "visible" : "hidden"), T = fp(), { register: A, unregister: F } = T;
  ce(() => A(C), [A, C]), ce(() => {
    if (M === dt.Hidden && C.current) {
      if (R && x !== "visible") {
        S("visible");
        return;
      }
      return Ne(x, { hidden: () => F(C), visible: () => A(C) });
    }
  }, [x, C, A, F, R, M]);
  let G = En();
  ce(() => {
    if (E && G && x === "visible" && C.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [C, x, G, E]);
  let Z = y && !_, B = _ && R && y, z = D(!1), O = na(() => {
    z.current || (S("hidden"), F(C));
  }, T), k = j((le) => {
    z.current = !0;
    let q = le ? "enter" : "leave";
    O.onStart(C, q, (ee) => {
      ee === "enter" ? i == null || i() : ee === "leave" && (s == null || s());
    });
  }), N = j((le) => {
    let q = le ? "enter" : "leave";
    z.current = !1, O.onStop(C, q, (ee) => {
      ee === "enter" ? l == null || l() : ee === "leave" && (a == null || a());
    }), q === "leave" && !ar(O) && (S("hidden"), F(C));
  });
  oe(() => {
    E && o || (k(R), N(R));
  }, [R, E, o]);
  let V = !(!o || !E || !G || Z), [, $] = Ss(V, w, R, { start: k, end: N }), se = ct({ ref: I, className: ((r = Gr(v.className, B && u, B && c, $.enter && u, $.enter && $.closed && c, $.enter && !$.closed && d, $.leave && f, $.leave && !$.closed && m, $.leave && $.closed && h, !$.transition && R && p)) == null ? void 0 : r.trim()) || void 0, ...Cs($) }), te = 0;
  x === "visible" && (te |= Fe.Open), x === "hidden" && (te |= Fe.Closed), $.enter && (te |= Fe.Opening), $.leave && (te |= Fe.Closing);
  let ue = Se();
  return L.createElement(sr.Provider, { value: O }, L.createElement(zs, { value: te }, ue({ ourProps: se, theirProps: v, defaultTag: ra, features: oa, visible: x === "visible", name: "Transition.Child" })));
}
function mp(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = D(null), s = ta(e), a = Pe(...s ? [l, t] : t === null ? [] : [t]);
  En();
  let u = Sn();
  if (n === void 0 && u !== null && (n = (u & Fe.Open) === Fe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, d] = U(n ? "visible" : "hidden"), p = na(() => {
    n || d("hidden");
  }), [f, m] = U(!0), h = D([n]);
  ce(() => {
    f !== !1 && h.current[h.current.length - 1] !== n && (h.current.push(n), m(!1));
  }, [h, n]);
  let v = W(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
  ce(() => {
    n ? d("visible") : !ar(p) && l.current !== null && d("hidden");
  }, [n, p]);
  let w = { unmount: o }, b = j(() => {
    var I;
    f && m(!1), (I = e.beforeEnter) == null || I.call(e);
  }), C = j(() => {
    var I;
    f && m(!1), (I = e.beforeLeave) == null || I.call(e);
  }), E = Se();
  return L.createElement(sr.Provider, { value: p }, L.createElement(lr.Provider, { value: v }, E({ ourProps: { ...w, as: me, children: L.createElement(ia, { ref: a, ...w, ...i, beforeEnter: b, beforeLeave: C }) }, theirProps: {}, defaultTag: me, features: oa, visible: c === "visible", name: "Transition" })));
}
function gp(e, t) {
  let n = ae(lr) !== null, r = Sn() !== null;
  return L.createElement(L.Fragment, null, !n && r ? L.createElement(no, { ref: t, ...e }) : L.createElement(ia, { ref: t, ...e }));
}
let no = xe(mp), ia = xe(pp), Ho = xe(gp), hp = Object.assign(no, { Child: Ho, Root: no });
var vp = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vp || {}), _p = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(_p || {});
let wp = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, zo = pe(null);
zo.displayName = "DialogContext";
function ur(e) {
  let t = ae(zo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ur), n;
  }
  return t;
}
function yp(e, t) {
  return Ne(t.type, wp, e, t);
}
let qi = xe(function(e, t) {
  let n = Me(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: l, role: s = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: c = !1, ...d } = e, p = D(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (p.current || (p.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Sn();
  o === void 0 && f !== null && (o = (f & Fe.Open) === Fe.Open);
  let m = D(null), h = Pe(m, t), v = Ot(m), w = o ? 0 : 1, [b, C] = st(yp, { titleId: null, descriptionId: null, panelRef: Yn() }), E = j(() => i(!1)), I = j((N) => C({ type: 0, id: N })), M = En() ? w === 0 : !1, [R, _] = If(), y = { get current() {
    var N;
    return (N = b.panelRef.current) != null ? N : m.current;
  } }, x = Js(), { resolveContainers: S } = ep({ mainTreeNode: x, portals: R, defaultContainers: [y] }), T = f !== null ? (f & Fe.Closing) === Fe.Closing : !1;
  ps(u || T ? !1 : M, { allowed: j(() => {
    var N, V;
    return [(V = (N = m.current) == null ? void 0 : N.closest("[data-headlessui-portal]")) != null ? V : null];
  }), disallowed: j(() => {
    var N;
    return [(N = x == null ? void 0 : x.closest("body > *:not(#headlessui-portal-root)")) != null ? N : null];
  }) }), ys(M, S, (N) => {
    N.preventDefault(), E();
  }), Jf(M, v == null ? void 0 : v.defaultView, (N) => {
    N.preventDefault(), N.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), E();
  }), xs(u || T ? !1 : M, v, S), ms(M, m, E);
  let [A, F] = ac(), G = W(() => [{ dialogState: w, close: E, setTitleId: I, unmount: c }, b], [w, b, E, I, c]), Z = W(() => ({ open: w === 0 }), [w]), B = { ref: h, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : w === 0 ? !0 : void 0, "aria-labelledby": b.titleId, "aria-describedby": A, unmount: c }, z = !Qf(), O = bt.None;
  M && !u && (O |= bt.RestoreFocus, O |= bt.TabLock, a && (O |= bt.AutoFocus), z && (O |= bt.InitialFocus));
  let k = Se();
  return L.createElement(wf, null, L.createElement(Wi, { force: !0 }, L.createElement(qs, null, L.createElement(zo.Provider, { value: G }, L.createElement(Gs, { target: m }, L.createElement(Wi, { force: !1 }, L.createElement(F, { slot: Z }, L.createElement(_, null, L.createElement(ip, { initialFocus: l, initialFocusFallback: m, containers: S, features: O }, L.createElement(wc, { value: E }, k({ ourProps: B, theirProps: d, slot: Z, defaultTag: bp, features: xp, visible: w === 0, name: "Dialog" })))))))))));
}), bp = "div", xp = jt.RenderStrategy | jt.Static;
function Cp(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = Sn(), l = e.hasOwnProperty("open") || i !== null, s = e.hasOwnProperty("onClose");
  if (!l && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? L.createElement(Gi, null, L.createElement(hp, { show: r, transition: n, unmount: o.unmount }, L.createElement(qi, { ref: t, ...o }))) : L.createElement(Gi, null, L.createElement(qi, { ref: t, open: r, ...o }));
}
let Sp = "div";
function Ep(e, t) {
  let n = Me(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: l, unmount: s }, a] = ur("Dialog.Panel"), u = Pe(t, a.panelRef), c = W(() => ({ open: l === 0 }), [l]), d = j((v) => {
    v.stopPropagation();
  }), p = { ref: u, id: r, onClick: d }, f = o ? Ho : me, m = o ? { unmount: s } : {}, h = Se();
  return L.createElement(f, { ...m }, h({ ourProps: p, theirProps: i, slot: c, defaultTag: Sp, name: "Dialog.Panel" }));
}
let Rp = "div";
function $p(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = ur("Dialog.Backdrop"), l = W(() => ({ open: o === 0 }), [o]), s = { ref: t, "aria-hidden": !0 }, a = n ? Ho : me, u = n ? { unmount: i } : {}, c = Se();
  return L.createElement(a, { ...u }, c({ ourProps: s, theirProps: r, slot: l, defaultTag: Rp, name: "Dialog.Backdrop" }));
}
let Tp = "h2";
function Ip(e, t) {
  let n = Me(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: l }] = ur("Dialog.Title"), s = Pe(t);
  oe(() => (l(r), () => l(null)), [r, l]);
  let a = W(() => ({ open: i === 0 }), [i]), u = { ref: s, id: r };
  return Se()({ ourProps: u, theirProps: o, slot: a, defaultTag: Tp, name: "Dialog.Title" });
}
let Mp = xe(Cp), la = xe(Ep), Op = xe($p), sa = xe(Ip), Fp = Object.assign(Mp, { Panel: la, Title: sa, Description: fc });
function Pp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const kp = /* @__PURE__ */ de(Pp);
function Np({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Ap = /* @__PURE__ */ de(Np);
function Dp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Lp = /* @__PURE__ */ de(Dp);
function Vp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const Hp = /* @__PURE__ */ de(Vp);
function zp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const Bp = /* @__PURE__ */ de(zp);
function jp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Up = /* @__PURE__ */ de(jp);
function Wp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const Gp = /* @__PURE__ */ de(Wp);
function qp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const Kp = /* @__PURE__ */ de(qp);
function Yp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const Xp = /* @__PURE__ */ de(Yp);
function Zp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const Jp = /* @__PURE__ */ de(Zp);
function Qp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const em = /* @__PURE__ */ de(Qp);
function tm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const nm = /* @__PURE__ */ de(tm);
function rm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const aa = /* @__PURE__ */ de(rm), om = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear" }, input: { clear: "Clear" } }, im = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, lm = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, sm = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, am = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, um = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, cm = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, dm = {
  components: om,
  importer: im,
  uploader: lm,
  mapper: sm,
  sheet: am,
  validators: um,
  importStatus: cm
}, fm = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer" }, input: { clear: "Effacer" } }, pm = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, mm = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, gm = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, hm = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, vm = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, _m = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, wm = {
  components: fm,
  importer: pm,
  uploader: mm,
  mapper: gm,
  sheet: hm,
  validators: vm,
  importStatus: _m
}, ym = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar" }, input: { clear: "Limpar" } }, bm = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, xm = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente" }, Cm = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Sm = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Em = { includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único" }, Rm = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, $m = {
  components: ym,
  importer: bm,
  uploader: xm,
  mapper: Cm,
  sheet: Sm,
  validators: Em,
  importStatus: Rm
}, ua = pe(
  {}
);
function Tm({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ g(ua.Provider, { value: e, children: t });
}
function at() {
  return ae(ua);
}
const Im = {
  en: dm,
  fr: wm,
  "pt-BR": $m
}, Mm = "en";
function Ki(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? Im[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function Om(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Fm(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ g("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    if (o) {
      const i = o[1];
      return t[i] ?? `{${i}}`;
    }
    return r;
  }) });
}
const ca = pe(
  {}
);
function Pm({ children: e }) {
  const { translationResources: t, locale: n } = at(), r = n ?? Mm;
  function o(l, s = {}) {
    const a = Ki(r, l, t);
    return Om(a, s);
  }
  function i(l, s = {}) {
    const a = Ki(r, l, t);
    return Fm(a, s);
  }
  return /* @__PURE__ */ g(ca.Provider, { value: { t: o, tHtml: i }, children: e });
}
function ye() {
  return ae(ca);
}
function ro({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: l,
  variant: s = "default"
}) {
  const { t: a } = ye(), u = {
    danger: {
      icon: /* @__PURE__ */ g(
        Up,
        {
          className: "text-hello-csv-danger size-6",
          "aria-hidden": "true"
        }
      ),
      btnVariant: "danger",
      bgColor: "bg-hello-csv-danger-extra-light"
    },
    default: {
      btnVariant: "primary"
    }
  }, { icon: c, btnVariant: d, bgColor: p } = u[s];
  return /* @__PURE__ */ g(Fp, { open: e, onClose: t, className: "relative z-10", children: [
    /* @__PURE__ */ g(
      Op,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ g("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ g("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ g(
      la,
      {
        transition: !0,
        className: "relative transform overflow-hidden rounded-lg bg-background px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ g("div", { className: "sm:flex sm:items-start", children: [
            c && /* @__PURE__ */ g(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${p} sm:mx-0 sm:size-10`,
                children: c
              }
            ),
            /* @__PURE__ */ g("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ g(
                sa,
                {
                  as: "h3",
                  className: "text-base font-semibold text-gray-900",
                  children: n
                }
              ),
              r && /* @__PURE__ */ g("div", { className: "mt-2", children: /* @__PURE__ */ g("p", { className: "text-sm text-gray-500", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ g("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ g("div", { className: "sm:ml-3 sm:w-auto", children: /* @__PURE__ */ g(
              He,
              {
                variant: d,
                onClick: () => {
                  l(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ g("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ g(
              He,
              {
                variant: "tertiary",
                "data-autofocus": !0,
                onClick: () => t(!1),
                withFullWidth: !0,
                children: i ?? a("components.confirmationModal.cancel")
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
const km = 100, da = 5, Nm = [
  "text/csv",
  "text/tab-separated-values"
], Yi = ",", Am = 500, Dm = "headlessui-portal-root", oo = "hello-csv", Lm = 52.62, io = "checkbox-column-id", Vm = 110, Hm = 50, zm = 500, Bm = 150, jm = de(function({ children: t, withFullHeight: n }, r) {
  return oe(() => {
    const o = new MutationObserver((i) => {
      for (const l of i)
        l.addedNodes.forEach((s) => {
          s.nodeType === Node.ELEMENT_NODE && s.id === Dm && s.classList.add(oo);
        });
    });
    return o.observe(document.body, { childList: !0, subtree: !1 }), () => o.disconnect();
  }, []), /* @__PURE__ */ g(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${oo}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ g(
        "div",
        {
          ref: r,
          className: `min-h-0 w-full overflow-auto ${n ? "h-full" : ""}`,
          children: t
        }
      )
    }
  );
});
function Um({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Wm = /* @__PURE__ */ de(Um);
function Gm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const qm = /* @__PURE__ */ de(Gm);
function Km({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const Ym = /* @__PURE__ */ de(Km);
function Xm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const Zm = /* @__PURE__ */ de(Xm);
function Jm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const fa = /* @__PURE__ */ de(Jm), pa = de(
  ({
    value: e,
    onBlur: t,
    onChange: n,
    placeholder: r,
    iconBuilder: o,
    classes: i,
    clearable: l,
    type: s = "text",
    ...a
  }, u) => {
    const { t: c } = ye(), [d, p] = U(e);
    oe(() => {
      p(e);
    }, [e]);
    const f = l && e != null && e !== "";
    function m(h) {
      const v = h.target, w = s === "number" ? v == null ? void 0 : v.valueAsNumber : v == null ? void 0 : v.value;
      return (typeof w == "number" && isNaN(w) ? "" : w) ?? "";
    }
    return /* @__PURE__ */ g("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ g(
        "input",
        {
          "aria-label": a["aria-label"],
          ref: u,
          type: s,
          inputMode: s === "number" ? "numeric" : "text",
          placeholder: r,
          value: d,
          onChange: (h) => (n == null ? void 0 : n(m(h))) ?? p(m(h)),
          className: `${i} ${o != null ? "pl-10" : ""} ${l ? "pr-10" : ""} focus:outline-hello-csv-primary col-start-1 row-start-1 block rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`,
          onBlur: (h) => t == null ? void 0 : t(m(h))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
      }),
      f && /* @__PURE__ */ g(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": c("components.input.clear"),
          onClick: (h) => {
            h.stopPropagation(), n == null || n("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ g(
            fa,
            {
              className: "h-5 w-5 text-gray-500 hover:text-gray-700",
              "aria-hidden": "true"
            }
          )
        }
      )
    ] });
  }
);
function vn({
  value: e,
  options: t,
  onChange: n,
  multiple: r = !1,
  compareFunction: o = (d, p) => d === p,
  clearable: i = !1,
  searchable: l = !1,
  placeholder: s,
  classes: a,
  displayPlaceholderWhenSelected: u = !1,
  ...c
}) {
  const { t: d } = ye(), [p, f] = U(""), m = (x) => r && Array.isArray(e) ? e.some((S) => o(S, x)) : o(e, x), h = (x) => {
    if (f(""), r) {
      const S = Array.isArray(x) ? x : [x];
      n(S);
    } else
      n(x);
  }, v = () => {
    f(""), n(r ? [] : null);
  }, w = t.filter((x) => m(x.value)), b = w.map((x) => x.label).join(", "), C = p && l ? t.filter(
    (x) => String(x.label).toLowerCase().includes(p.toLowerCase())
  ) : t, E = s ?? d("components.select.optionPlaceholder"), I = () => l ? b : w.length > 0 ? u ? `${E}: ${b}` : b : "", R = C.some((x) => x.group) ? Object.entries(
    C.reduce(
      (x, S) => {
        const T = S.group || "ungrouped";
        return x[T] = x[T] || [], x[T].push(S), x;
      },
      {}
    )
  ).map(([x, S]) => ({
    label: x,
    items: S
  })) : [{ label: null, items: C }], _ = R.every(({ items: x }) => x.length === 0), y = i && w.length > 0;
  return /* @__PURE__ */ g(Zf, { value: e, onChange: h, multiple: r, children: /* @__PURE__ */ g("div", { className: "relative", children: [
    /* @__PURE__ */ g(
      eo,
      {
        className: "w-full",
        "aria-label": c["aria-label"] ?? s,
        children: /* @__PURE__ */ g(
          Ys,
          {
            className: `${a} focus:outline-hello-csv-primary block w-full cursor-pointer truncate rounded-md bg-background py-1.5 focus:cursor-text ${y ? "pr-12" : "pr-2"} pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm`,
            displayValue: I,
            onChange: (x) => l && f(x.target.value),
            placeholder: E,
            readOnly: !l
          }
        )
      }
    ),
    y && /* @__PURE__ */ g(
      "span",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": d("components.select.clear"),
        onClick: (x) => {
          x.stopPropagation(), v();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ g(
          fa,
          {
            className: "h-5 w-5 text-gray-500 hover:text-gray-700",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ g(eo, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ g(
      Ym,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      }
    ) }),
    /* @__PURE__ */ g(
      Xs,
      {
        anchor: "bottom",
        transition: !0,
        className: "absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-background py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm",
        children: [
          _ && /* @__PURE__ */ g(
            to,
            {
              disabled: !0,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-2 pr-9 pl-3 text-gray-400 select-none",
              children: /* @__PURE__ */ g("span", { className: "block truncate font-normal", children: d("components.select.noOptions") })
            },
            "no-options"
          ),
          R.map(({ label: x, items: S }) => /* @__PURE__ */ g("div", { children: [
            x && /* @__PURE__ */ g("div", { className: "py-2 pr-9 pl-3 text-gray-400 uppercase", children: x }),
            S.map((T) => /* @__PURE__ */ g(
              to,
              {
                value: T.value,
                className: "group data-focus:bg-hello-csv-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden",
                children: [
                  T.icon,
                  /* @__PURE__ */ g("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: T.label }),
                  m(T.value) && /* @__PURE__ */ g("span", { className: "text-hello-csv-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white", children: /* @__PURE__ */ g(Wm, { "aria-hidden": "true", className: "h-5 w-5" }) })
                ]
              },
              T.value
            ))
          ] }, x || "all"))
        ]
      }
    )
  ] }) });
}
function Qm({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ g("div", { children: [
    /* @__PURE__ */ g("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ g(
      vn,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ g("div", { className: "hidden sm:block", children: /* @__PURE__ */ g("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ g(
      "nav",
      {
        "aria-label": "Tabs",
        className: "-mb-px flex space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ g(
          "button",
          {
            id: `${r}-tab-${o.value}`,
            role: "tab",
            "aria-selected": o.value === t,
            "aria-current": o.value === t ? "page" : void 0,
            "aria-controls": `${r}-tabpanel-${o.value}`,
            onClick: () => n(o.value),
            className: ` ${o.value === t ? "border-hello-csv-primary text-hello-csv-primary" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} flex cursor-pointer items-center border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`,
            children: [
              o.icon,
              o.label
            ]
          },
          o.label
        ))
      }
    ) }) })
  ] });
}
const eg = It(
  "bg-gray-50 text-gray-900 absolute outline top-full w-full whitespace-normal z-5 mb-2 hidden px-2 py-4 text-xs group-focus-within:block group-hover:block",
  {
    variants: {
      variant: {
        error: "outline-hello-csv-danger",
        info: "outline-gray-500"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), tg = It("group relative h-full w-full", {
  variants: {
    variant: {
      error: "focus-within:outline-hello-csv-danger hover:outline-hello-csv-danger",
      info: "focus-within:outline-gray-500 hover:outline-gray-500"
    },
    withOutline: {
      true: "focus-within:outline hover:outline hover:z-5 focus-within:z-5",
      false: ""
    }
  },
  defaultVariants: {
    variant: "info",
    withOutline: !1
  }
});
function ng({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = eg({ variant: e }), o = tg({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ g("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ g("span", { className: r, children: n })
  ] });
}
const rg = It(
  "relative inline-flex cursor-pointer items-center px-3 py-2 text-sm font-semibold ring-gray-300 ring-1 ring-inset focus:z-10",
  {
    variants: {
      active: {
        true: "",
        false: "bg-background hover:bg-gray-50"
      },
      variant: {
        default: "",
        danger: "text-hello-csv-danger"
      },
      location: {
        left: "rounded-l-md",
        center: "-ml-px",
        right: "rounded-r-md -ml-px "
      }
    },
    compoundVariants: [
      {
        active: !0,
        variant: "default",
        className: "bg-gray-900 text-white"
      },
      {
        active: !0,
        variant: "danger",
        className: "bg-hello-csv-danger text-white"
      },
      {
        active: !1,
        variant: "default",
        className: "text-gray-900"
      },
      {
        active: !1,
        variant: "danger",
        className: "text-hello-csv-danger"
      }
    ]
  }
);
function og({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ g("span", { className: "isolate inline-flex rounded-md shadow-xs", children: t.map((n, r) => /* @__PURE__ */ g(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: rg({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const ig = It(
  "absolute z-50 w-max rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-lg transition-opacity duration-200",
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none"
      },
      hidden: {
        true: "hidden",
        false: ""
      }
    }
  }
);
function Dt({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = U(!1), [l, s] = U({ top: 0, left: 0 }), a = D(null), u = D(null), [c, d] = U(null);
  oe(() => {
    const h = document.createElement("div");
    return h.classList.add(oo), document.body.appendChild(h), d(h), () => {
      document.body.removeChild(h);
    };
  }, []);
  const p = () => {
    if (!a.current) return;
    const h = a.current.getBoundingClientRect();
    s({
      top: h.bottom + window.scrollY + 8,
      left: h.left + h.width / 2 + window.scrollX
    }), i(!0);
  }, f = () => i(!1), m = Me();
  return /* @__PURE__ */ g(
    "div",
    {
      ref: a,
      tabIndex: 0,
      className: `${n} relative inline-block`,
      onMouseEnter: p,
      onMouseLeave: f,
      onFocus: p,
      onBlur: f,
      "aria-describedby": m,
      children: [
        t,
        c && wn(
          /* @__PURE__ */ g(
            "div",
            {
              id: m,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: u,
              className: ig({ visible: o, hidden: r }),
              style: {
                top: `${l.top}px`,
                left: `${l.left}px`,
                transform: "translateX(-50%)"
              },
              children: [
                e,
                /* @__PURE__ */ g("div", { className: "absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900" })
              ]
            }
          ),
          c
        )
      ]
    }
  );
}
const lg = It("inline-flex items-center rounded-md px-1.5 py-0.5", {
  variants: {
    variant: {
      primary: "bg-hello-csv-primary-extra-light text-xs font-medium",
      success: "bg-hello-csv-success-extra-light text-hello-csv-success text-xs font-medium",
      error: "bg-hello-csv-danger-extra-light text-hello-csv-danger text-xs font-medium"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
function Bo({ children: e, variant: t }) {
  const n = lg({ variant: t });
  return /* @__PURE__ */ g("div", { className: n, children: e });
}
function sg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const ma = /* @__PURE__ */ de(sg);
function ag({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const ug = /* @__PURE__ */ de(ag);
function cg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const lo = /* @__PURE__ */ de(cg);
function dg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const fg = /* @__PURE__ */ de(dg), pg = {
  info: {
    icon: /* @__PURE__ */ g(
      fg,
      {
        className: "text-hello-csv-primary-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-primary-extra-light text-hello-csv-primary rounded-md p-4"
  },
  success: {
    icon: /* @__PURE__ */ g(
      ma,
      {
        className: "text-hello-csv-success-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-success-extra-light text-hello-csv-success rounded-md p-4"
  },
  error: {
    icon: /* @__PURE__ */ g(
      lo,
      {
        className: "text-hello-csv-danger-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-danger-extra-light text-hello-csv-danger rounded-md p-4"
  },
  warning: {
    icon: /* @__PURE__ */ g(
      lo,
      {
        className: "text-hello-csv-warning-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-warning-extra-light text-hello-csv-warning rounded-md p-4"
  }
};
function jo({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = pg[e];
  return /* @__PURE__ */ g("div", { className: o, children: /* @__PURE__ */ g("div", { className: "flex", children: [
    /* @__PURE__ */ g("div", { className: "mt-1 shrink-0", children: r }),
    /* @__PURE__ */ g("div", { className: "ml-3", children: [
      t && /* @__PURE__ */ g("div", { className: "text-md", children: t }),
      /* @__PURE__ */ g("div", { className: "text-sm", children: n })
    ] })
  ] }) });
}
function mg({ children: e }) {
  return /* @__PURE__ */ g("div", { className: "flex", children: [
    /* @__PURE__ */ g("div", { className: "shrink-0", children: /* @__PURE__ */ g(
      nm,
      {
        "aria-hidden": "true",
        className: "text-hello-csv-danger size-5"
      }
    ) }),
    /* @__PURE__ */ g("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ g("p", { className: "text-hello-csv-danger text-sm", children: e }) })
  ] });
}
function ga(e, t) {
  return e.indexOf(t) !== -1;
}
function ha(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function va(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
class Ft {
  constructor(t) {
    Ae(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class gg extends Ft {
  constructor(n) {
    super(n);
    Ae(this, "key");
    Ae(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
function hg(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class cr extends Ft {
  constructor(n) {
    super(n);
    Ae(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(hg(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class vg extends cr {
  constructor() {
    super({
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      validate: "email"
    });
  }
}
class _g extends Ft {
  constructor(n) {
    super(n);
    Ae(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class wg extends Ft {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class yg extends Ft {
  constructor(n) {
    super(n);
    Ae(this, "delimiter");
    Ae(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    var o;
    if ((((o = n == null ? void 0 : n.toString()) == null ? void 0 : o.split(this.delimiter)) ?? []).some((i) => !this.values.includes(i.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class bg extends cr {
  constructor() {
    super({
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      validate: "phone_number"
    });
  }
}
class xg extends cr {
  constructor() {
    super({
      regex: /^\d{5}(-\d{4})?$/,
      validate: "postal_code"
    });
  }
}
const Cg = (e) => e == null, Sg = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function Uo(e) {
  return Cg(e) || e === "";
}
const Xi = (e) => [...new Set(e)];
function Gn(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function Zi(e) {
  if (e == null)
    return "";
  let t = String(e);
  return t = t.replace(/"/g, '""'), /[",\n\r]/.test(t) && (t = `"${t}"`), t;
}
function _a(e, t, n, r) {
  const o = e.columns.map(
    (s) => Zi(r === "label" ? s.label : s.id)
  ).join(Yi), i = t.map(
    (s) => e.columns.map((a) => {
      const u = s[a.id];
      let c;
      return r === "value" || u == null ? c = u : a.type === "enum" ? c = qn(
        n[e.id][a.id],
        u
      ) : a.type === "reference" ? c = qn(
        Wo(a, n),
        u
      ) : c = u, Zi(c);
    }).join(Yi)
  ), l = [o, ...i].join(`
`);
  return new Blob([l], { type: "text/csv" });
}
function wa(e, t, n, r) {
  const o = _a(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), l = document.createElement("a");
  l.href = i, l.download = `${e.label}.csv`, l.click(), URL.revokeObjectURL(i);
}
function Wo(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function qn(e, t) {
  return typeof t != "string" ? t : e[t] ?? t;
}
class Eg extends Ft {
  isValid(t) {
    if (Uo(t))
      return this.definition.error || "validators.required";
  }
}
class Rg extends Ft {
  constructor(n) {
    super(n);
    Ae(this, "seen");
    this.seen = /* @__PURE__ */ new Set();
  }
  isValid(n) {
    if (this.seen.has(n))
      return this.definition.error || "validators.unique";
    this.seen.add(n);
  }
}
function $g(e) {
  const t = {
    regex_matches: cr,
    required: Eg,
    unique: Rg,
    includes: _g,
    multi_includes: yg,
    is_integer: wg,
    postal_code: xg,
    phone_number: bg,
    email: vg,
    custom: gg
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function ya(e, t) {
  var o, i, l;
  const n = e.typeArguments, r = t.find(
    (s) => s.sheetId === n.sheetId
  );
  return ((l = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((s) => s[n.sheetColumnId])) == null ? void 0 : i.filter((s) => !Uo(s))) == null ? void 0 : l.filter((s, a, u) => u.indexOf(s) === a)) ?? [];
}
function ba(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function Tg(e, t, n, r, o, i, l) {
  return W(() => {
    let a = e.rows;
    switch (n) {
      case "errors":
        a = e.rows.filter(
          (u, c) => r.some((d) => d.rowIndex === c)
        );
        break;
      case "valid":
        a = e.rows.filter(
          (u, c) => !r.some((d) => d.rowIndex === c)
        );
        break;
      case "all":
      default:
        a = e.rows;
    }
    return o != null && (a = a.filter((u) => {
      const c = ba(t, i.id, u);
      return r.find(
        (p) => p.rowIndex === c && p.columnId === o
      ) != null;
    })), l.trim() !== "" && (a = a.filter(
      (u) => Object.values(u).some(
        (c) => {
          var d;
          return (d = Gn(c)) == null ? void 0 : d.includes(Gn(l));
        }
      )
    )), a;
  }, [
    e,
    n,
    r,
    o,
    i.id,
    t,
    l
  ]);
}
function xa(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function Ig(e) {
  return Object.fromEntries(
    e.map((t) => [
      t.id,
      Object.fromEntries(
        t.columns.filter((n) => n.type === "enum").map((n) => [
          n.id,
          Object.fromEntries(
            n.typeArguments.values.map(({ label: r, value: o }) => [
              o,
              r
            ])
          )
        ])
      )
    ])
  );
}
function Mg(e, t, n) {
  var i;
  const r = e.type === "enum" ? ((i = e.typeArguments.values.find((l) => l.value === t)) == null ? void 0 : i.label) ?? t : e.type === "reference" && t != null ? qn(
    Wo(e, n),
    t
  ) : t, o = r == null || typeof r == "string" && r.trim() === "";
  return { displayValue: o ? " " : r, valueEmpty: o };
}
function $n(e) {
  return e.validators && e.validators.length > 0 ? !!e.validators.find(
    (n) => n.validate === "required"
  ) : !1;
}
function Og(e, t) {
  const n = [];
  if (e.type === "enum" && n.push({
    values: e.typeArguments.values.map((r) => r.value),
    validate: "includes"
  }), e.type === "reference") {
    const r = ya(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  return n;
}
function Fg(e, t, n) {
  const r = [], o = ha(e.columns, (i, l) => {
    l[i.id] = [], [
      ...i.validators ?? [],
      ...Og(i, n)
    ].forEach((a) => {
      l[i.id].push(
        $g(a)
      );
    });
  });
  return e.columns.forEach((i) => {
    t.rows.forEach((l, s) => {
      if (!va(l) || !(i.id in l) && !$n(i))
        return;
      const a = l[i.id];
      o[i.id].forEach((c) => {
        const d = c.isValid(a, l);
        d != null && r.push({
          sheetId: e.id,
          columnId: i.id,
          rowIndex: s,
          message: d
        });
      });
    });
  }), r;
}
function Rr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = Fg(r, o, t);
      n.push(...i);
    }
  }), n;
}
const Pg = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Ca = Math.pow(2, 53), kg = -Ca;
function Sa(e, t, n) {
  return t.map((r) => {
    const o = e.find(
      (l) => l.id === r.sheetId
    );
    if (o == null)
      return r;
    const i = r.rows.map((l, s) => {
      const a = { ...l };
      return n(o.columns, a, l, s), a;
    });
    return {
      ...r,
      rows: i
    };
  });
}
function Ng(e, t) {
  return Sa(
    e,
    t,
    (n, r, o, i) => {
      n.filter((l) => l.type === "reference").forEach((l) => {
        const s = t.find(
          (a) => a.sheetId === l.typeArguments.sheetId
        );
        if (s != null) {
          const u = s.rows.map(
            (c) => c[l.typeArguments.sheetColumnId]
          )[i];
          r[l.id] = u;
        }
      });
    }
  );
}
function Ag(e, t) {
  return Sa(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function Dg(e) {
  if (Pg.test(e)) {
    const t = parseFloat(e);
    if (t > kg && t < Ca)
      return !0;
  }
  return !1;
}
function Lg(e, t) {
  return t.type === "number" && Dg(e) ? parseFloat(e) : e;
}
function Vg(e, t) {
  if (t.type === "enum") {
    const n = t.typeArguments.values.find(
      (r) => r.label === e
    );
    if (n != null)
      return n.value;
  }
  return Lg(e, t);
}
function Hg(e, t, n) {
  return e.map((r) => {
    const o = [], i = t.filter(
      (l) => l.sheetId === r.id
    );
    return n.map((l) => {
      const s = {};
      r.columns.forEach((a) => {
        const u = i.find(
          (c) => c.sheetColumnId === a.id
        );
        u != null && (s[u.sheetColumnId] = Vg(
          l[u.csvColumnName],
          a
        ));
      }), o.push(s);
    }), {
      sheetId: r.id,
      rows: o
    };
  });
}
function zg(e, t, n) {
  const r = n.data, o = Hg(e, t, r), i = Ag(
    e,
    o
  );
  return Ng(e, i);
}
function dr(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function Bg(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function jg(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!dr(i))
        return !1;
      const l = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Gn(a)), s = Gn(r);
      return l.includes(s);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const Ug = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = jg(r, t);
    n.push(...o);
  }), Bg(n);
};
function Wg(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Gg(e, t) {
  const n = qg(e, t), r = Kg(n);
  return Yg(r);
}
function qg(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, da);
}
function Kg(e) {
  return [
    ...e,
    ...Array(da - e.length).fill("")
  ];
}
function Yg(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > Am && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function Xg(e, t) {
  const { t: n } = ye();
  return e.flatMap(
    (o) => o.columns.filter((i) => dr(i)).map((i) => ({
      label: `${i.label}${$n(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (l) => l.sheetId === o.id && l.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => Zg(o, i, n("mapper.unused")));
}
function Zg(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function Jg(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if ($n(r) && dr(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function Qg({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = ye();
  return t && /* @__PURE__ */ g("div", { className: "m-4 rounded-sm border border-gray-300 bg-background px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ g("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ g("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ g("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ g("table", { className: "min-w-full divide-y divide-gray-300", children: [
    /* @__PURE__ */ g("thead", { children: /* @__PURE__ */ g("tr", { children: /* @__PURE__ */ g(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ g(Bo, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ g("tbody", { className: "divide-y divide-gray-300", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ g("tr", { children: /* @__PURE__ */ g("td", { className: "h-12 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: o || i === 0 && /* @__PURE__ */ g("span", { className: "text-gray-500 italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function eh({
  csvHeader: e,
  setMapping: t,
  currentMapping: n,
  mappingSelectionOptions: r,
  onMouseEnter: o
}) {
  var l;
  const i = n == null ? null : ((l = r.find(
    (s) => s.value.sheetId === n.sheetId && s.value.sheetColumnId === n.sheetColumnId
  )) == null ? void 0 : l.value) ?? null;
  return /* @__PURE__ */ g(
    "div",
    {
      className: "hover:bg-hello-csv-muted rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ g("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ g("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g(Bo, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ g("div", { className: "mx-5", children: /* @__PURE__ */ g(Ap, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ g("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ g(
          vn,
          {
            "aria-label": `column mapping for ${e}`,
            searchable: !0,
            clearable: !0,
            compareFunction: (s, a) => s == null || a == null ? !1 : s.sheetColumnId === a.sheetColumnId && s.sheetId === a.sheetId,
            value: i,
            options: r,
            onChange: (s) => t(s)
          }
        ) })
      ] })
    }
  );
}
class Tn {
  constructor(t) {
    Ae(this, "definition");
    this.definition = t;
  }
  transform(t) {
    const n = this.parse(t);
    return n ?? t;
  }
  parse(t) {
    throw new Error("Not Implemented");
  }
}
class th extends Tn {
  constructor(n) {
    super(n);
    Ae(this, "key");
    Ae(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class nh extends Tn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class rh extends Tn {
  parse(t) {
    if (typeof t == "string" && ga(t, "-"))
      return t.split("-")[0];
  }
}
const Ji = [
  ["Arizona", "AZ"],
  ["Alabama", "AL"],
  ["Alaska", "AK"],
  ["Arkansas", "AR"],
  ["California", "CA"],
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Delaware", "DE"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Hawaii", "HI"],
  ["Idaho", "ID"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Iowa", "IA"],
  ["Kansas", "KS"],
  ["Kentucky", "KY"],
  ["Louisiana", "LA"],
  ["Maine", "ME"],
  ["Maryland", "MD"],
  ["Massachusetts", "MA"],
  ["Michigan", "MI"],
  ["Minnesota", "MN"],
  ["Mississippi", "MS"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Nevada", "NV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["North Carolina", "NC"],
  ["North Dakota", "ND"],
  ["Ohio", "OH"],
  ["Oklahoma", "OK"],
  ["Oregon", "OR"],
  ["Pennsylvania", "PA"],
  ["Rhode Island", "RI"],
  ["South Carolina", "SC"],
  ["South Dakota", "SD"],
  ["Tennessee", "TN"],
  ["Texas", "TX"],
  ["Utah", "UT"],
  ["Vermont", "VT"],
  ["Virginia", "VA"],
  ["Washington", "WA"],
  ["West Virginia", "WV"],
  ["Wisconsin", "WI"],
  ["Wyoming", "WY"]
];
class oh extends Tn {
  parse(t) {
    const n = Ji.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && ga(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return Ji[r][1];
    }
  }
}
class ih extends Tn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function lh(e) {
  const t = {
    phone_number: nh,
    postal_code: rh,
    state_code: oh,
    strip: ih,
    custom: th
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function sh(e, t) {
  const n = ha(
    e.columns,
    (r, o) => {
      o[r.id] = new ah(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          lh(i)
        );
      });
    }
  );
  return e.columns.forEach((r) => {
    const o = r.id, i = n[o];
    t.rows.forEach((l) => {
      if (!va(l))
        return;
      const s = l[o];
      Uo(s) || (l[o] = i.transform(s));
    });
  }), t.rows;
}
function so(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = sh(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class ah {
  // Series of transformations
  constructor(t = []) {
    Ae(this, "steps");
    this.steps = t;
  }
  push(t) {
    this.steps.push(t);
  }
  transform(t) {
    let n = t;
    return this.steps.forEach((r) => {
      n = r.transform(n);
    }), n;
  }
}
const Ea = "HelloCSV", Ra = 1, nt = "state";
async function uh(e, t) {
  return new Promise((n, r) => {
    const o = Ta(e, t), i = indexedDB.open(Ea, Ra);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const u = i.result.transaction(nt, "readonly").objectStore(nt).get(o);
      u.onerror = () => n(null), u.onsuccess = () => {
        try {
          const c = u.result;
          c.sheetDefinitions = e, n(c);
        } catch {
          n(null);
        }
      };
    }, i.onupgradeneeded = (l) => {
      const s = l.target.result;
      s.objectStoreNames.contains(nt) && s.deleteObjectStore(nt), s.createObjectStore(nt);
    };
  });
}
async function $a(e, t) {
  return new Promise((n, r) => {
    const o = Ta(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const l = indexedDB.open(Ea, Ra);
    l.onerror = () => r(l.error), l.onsuccess = () => {
      const c = l.result.transaction(nt, "readwrite").objectStore(nt).put(i, o);
      c.onerror = () => r(c.error), c.onsuccess = () => n();
    }, l.onupgradeneeded = (s) => {
      const a = s.target.result;
      a.objectStoreNames.contains(nt) || a.createObjectStore(nt);
    };
  });
}
function Ta(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${ch(r)}`;
}
function ch(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function dh(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
function fr(e) {
  return {
    sheetDefinitions: e,
    currentSheetId: e[0].id,
    mode: "upload",
    validationErrors: [],
    sheetData: e.map((t) => ({
      sheetId: t.id,
      rows: []
    })),
    importProgress: 0
  };
}
async function fh(e, t) {
  const n = fr(e);
  try {
    return t.enabled ? await ph(e, t) : n;
  } catch {
    return n;
  }
}
async function ph(e, t) {
  const n = await uh(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = fr(e);
  return $a(r, t.customKey), r;
}
const mh = (e, t) => {
  switch (t.type) {
    case "ENTER_DATA_MANUALLY": {
      const n = e.sheetDefinitions.map((r) => ({
        sheetId: r.id,
        rows: Array.from(
          { length: t.payload.amountOfEmptyRowsToAdd },
          () => ({})
        )
      }));
      return { ...e, mode: "preview", sheetData: n };
    }
    case "FILE_PARSED":
      return {
        ...e,
        parsedFile: t.payload.parsed,
        rowFile: t.payload.rowFile,
        mode: "mapping"
      };
    case "UPLOAD":
      return { ...e, mode: "upload" };
    case "COLUMN_MAPPING_CHANGED":
      return {
        ...e,
        columnMappings: t.payload.mappings
      };
    case "DATA_MAPPED":
      return {
        ...e,
        sheetData: so(
          e.sheetDefinitions,
          t.payload.mappedData
        ),
        mode: "preview",
        validationErrors: Rr(
          e.sheetDefinitions,
          t.payload.mappedData
        )
      };
    case "CELL_CHANGED": {
      const r = e.sheetData.map((o) => {
        if (o.sheetId === t.payload.sheetId) {
          const i = [...o.rows];
          return i[t.payload.rowIndex] = dh(
            t.payload.value,
            t.payload,
            e
          ), { ...o, rows: i };
        } else
          return o;
      });
      return {
        ...e,
        sheetData: so(e.sheetDefinitions, r),
        validationErrors: Rr(e.sheetDefinitions, r)
      };
    }
    case "REMOVE_ROWS": {
      const n = e.sheetData.map((r) => r.sheetId === t.payload.sheetId ? {
        ...r,
        rows: r.rows.filter(
          (o) => !t.payload.rows.includes(o)
        )
      } : r);
      return {
        ...e,
        sheetData: n,
        validationErrors: Rr(e.sheetDefinitions, n)
      };
    }
    case "ADD_EMPTY_ROW": {
      const n = e.sheetData.map((r) => r.sheetId !== e.currentSheetId ? r : {
        ...r,
        rows: [...r.rows, {}]
      });
      return { ...e, sheetData: n };
    }
    case "SHEET_CHANGED":
      return { ...e, currentSheetId: t.payload.sheetId };
    case "SUBMIT":
      return { ...e, mode: "submit" };
    case "PROGRESS":
      return { ...e, importProgress: t.payload.progress };
    case "COMPLETED":
      return {
        ...e,
        mode: "completed",
        importStatistics: t.payload.importStatistics
      };
    case "FAILED":
      return { ...e, mode: "failed" };
    case "PREVIEW":
      return { ...e, mode: "preview" };
    case "MAPPING":
      return { ...e, mode: "mapping" };
    case "RESET":
      return fr(e.sheetDefinitions);
    case "SET_STATE":
      return t.payload.state;
    default:
      return e;
  }
}, gh = (e, t) => {
  const [n, r] = st(mh, fr(e));
  return oe(() => {
    (async () => {
      const i = await fh(e, t);
      r({ type: "SET_STATE", payload: { state: i } });
    })();
  }, []), oe(() => {
    t.enabled && $a(n, t.customKey);
  }, [n, t]), [n, r];
}, Ia = pe({}), Ma = pe(
  {}
);
function hh({
  sheets: e,
  persistenceConfig: t,
  children: n
}) {
  const [r, o] = gh(e, t);
  return /* @__PURE__ */ g(Ia.Provider, { value: r, children: /* @__PURE__ */ g(Ma.Provider, { value: o, children: n }) });
}
function wt() {
  return ae(Ia);
}
function vh() {
  return ae(Ma);
}
function _h({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = wt(), { sheets: i } = at(), { t: l } = ye(), [s, a] = U(null), u = r ?? [], c = o, d = c.data, p = c.meta.fields, f = Xg(
    i,
    u
  ), m = Jg(
    i,
    u
  ), h = W(() => s ? Gg(d, s) : [], [s, d]);
  return /* @__PURE__ */ g("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ g("div", { className: "flex-none text-2xl", children: l("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ g("div", { className: "min-h-0 flex-auto", children: /* @__PURE__ */ g("div", { className: "flex h-full justify-between space-x-5", children: [
      /* @__PURE__ */ g("div", { className: "flex flex-2 flex-col", children: [
        /* @__PURE__ */ g("div", { className: "my-5 flex text-sm font-light uppercase", children: [
          /* @__PURE__ */ g("div", { className: "flex-1", children: l("mapper.importedColumn") }),
          /* @__PURE__ */ g("div", { className: "flex-1", children: l("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ g("div", { className: "flex-1 overflow-y-auto", children: p.map((v, w) => {
          const b = u.find(
            (C) => C.csvColumnName === v
          ) ?? null;
          return /* @__PURE__ */ g(
            eh,
            {
              csvHeader: v,
              currentMapping: b,
              setMapping: (C) => {
                const E = Wg(
                  u,
                  v,
                  C
                );
                e(E);
              },
              mappingSelectionOptions: f,
              onMouseEnter: () => {
                a(v);
              }
            },
            w
          );
        }) })
      ] }),
      /* @__PURE__ */ g("div", { className: "bg-hello-csv-muted hidden flex-1 overflow-y-auto sm:block", children: /* @__PURE__ */ g(
        Qg,
        {
          examples: h,
          csvHeader: s ?? ""
        }
      ) })
    ] }) }),
    !m && /* @__PURE__ */ g("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ g(mg, { children: l("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ g("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ g("div", { className: "mt-5 flex justify-between", children: [
      /* @__PURE__ */ g(He, { variant: "secondary", outline: !0, onClick: n, children: l("mapper.back") }),
      /* @__PURE__ */ g(He, { onClick: t, disabled: !m, children: l("mapper.confirm") })
    ] }) })
  ] });
}
var wh = { NODE_ENV: "production" };
function ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: ft(n, r[e])
    }));
  };
}
function pr(e) {
  return e instanceof Function;
}
function yh(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function bh(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const l = t(i);
      l != null && l.length && r(l);
    });
  };
  return r(e), n;
}
function Y(e, t, n) {
  let r = [], o;
  return (i) => {
    let l;
    n.key && n.debug && (l = Date.now());
    const s = e(i);
    if (!(s.length !== r.length || s.some((c, d) => r[d] !== c)))
      return o;
    r = s;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const c = Math.round((Date.now() - l) * 100) / 100, d = Math.round((Date.now() - u) * 100) / 100, p = d / 16, f = (m, h) => {
        for (m = String(m); m.length < h; )
          m = " " + m;
        return m;
      };
      console.info(`%c⏱ ${f(d, 5)} /${f(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function X(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: wh.NODE_ENV === "development",
    onChange: r
  };
}
function xh(e, t, n, r) {
  const o = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: Y(() => [e, n, t, i], (l, s, a, u) => ({
      table: l,
      column: s,
      row: a,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), X(e.options, "debugCells"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, n, t, e);
  }, {}), i;
}
function Ch(e, t, n, r) {
  var o, i;
  const s = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = s.accessorKey;
  let u = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, c;
  if (s.accessorFn ? c = s.accessorFn : a && (a.includes(".") ? c = (p) => {
    let f = p;
    for (const h of a.split(".")) {
      var m;
      f = (m = f) == null ? void 0 : m[h];
    }
    return f;
  } : c = (p) => p[s.accessorKey]), !u)
    throw new Error();
  let d = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: Y(() => [!0], () => {
      var p;
      return [d, ...(p = d.columns) == null ? void 0 : p.flatMap((f) => f.getFlatColumns())];
    }, X(e.options, "debugColumns")),
    getLeafColumns: Y(() => [e._getOrderColumnsFn()], (p) => {
      var f;
      if ((f = d.columns) != null && f.length) {
        let m = d.columns.flatMap((h) => h.getLeafColumns());
        return p(m);
      }
      return [d];
    }, X(e.options, "debugColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(d, e);
  return d;
}
const $e = "debugHeaders";
function Qi(e, t, n) {
  var r;
  let i = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [], s = (a) => {
        a.subHeaders && a.subHeaders.length && a.subHeaders.map(s), l.push(a);
      };
      return s(i), l;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const Sh = {
  createTable: (e) => {
    e.getHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, l;
      const s = (i = r == null ? void 0 : r.map((d) => n.find((p) => p.id === d)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((d) => n.find((p) => p.id === d)).filter(Boolean)) != null ? l : [], u = n.filter((d) => !(r != null && r.includes(d.id)) && !(o != null && o.includes(d.id)));
      return Fn(t, [...s, ...u, ...a], e);
    }, X(e.options, $e)), e.getCenterHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Fn(t, n, e, "center")), X(e.options, $e)), e.getLeftHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return Fn(t, i, e, "left");
    }, X(e.options, $e)), e.getRightHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return Fn(t, i, e, "right");
    }, X(e.options, $e)), e.getFooterGroups = Y(() => [e.getHeaderGroups()], (t) => [...t].reverse(), X(e.options, $e)), e.getLeftFooterGroups = Y(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), X(e.options, $e)), e.getCenterFooterGroups = Y(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), X(e.options, $e)), e.getRightFooterGroups = Y(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), X(e.options, $e)), e.getFlatHeaders = Y(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, $e)), e.getLeftFlatHeaders = Y(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, $e)), e.getCenterFlatHeaders = Y(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, $e)), e.getRightFlatHeaders = Y(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), X(e.options, $e)), e.getCenterLeafHeaders = Y(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, $e)), e.getLeftLeafHeaders = Y(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, $e)), e.getRightLeafHeaders = Y(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), X(e.options, $e)), e.getLeafHeaders = Y(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, l, s, a, u;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []].map((c) => c.getLeafHeaders()).flat();
    }, X(e.options, $e));
  }
};
function Fn(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(p, f) {
    f === void 0 && (f = 1), l = Math.max(l, f), p.filter((m) => m.getIsVisible()).forEach((m) => {
      var h;
      (h = m.columns) != null && h.length && s(m.columns, f + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const u = (p, f) => {
    const m = {
      depth: f,
      id: [r, `${f}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    p.forEach((v) => {
      const w = [...h].reverse()[0], b = v.column.depth === m.depth;
      let C, E = !1;
      if (b && v.column.parent ? C = v.column.parent : (C = v.column, E = !0), w && (w == null ? void 0 : w.column) === C)
        w.subHeaders.push(v);
      else {
        const I = Qi(n, C, {
          id: [r, f, C.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: E,
          placeholderId: E ? `${h.filter((M) => M.column === C).length}` : void 0,
          depth: f,
          index: h.length
        });
        I.subHeaders.push(v), h.push(I);
      }
      m.headers.push(v), v.headerGroup = m;
    }), a.push(m), f > 0 && u(h, f - 1);
  }, c = t.map((p, f) => Qi(n, p, {
    depth: l,
    index: f
  }));
  u(c, l - 1), a.reverse();
  const d = (p) => p.filter((m) => m.column.getIsVisible()).map((m) => {
    let h = 0, v = 0, w = [0];
    m.subHeaders && m.subHeaders.length ? (w = [], d(m.subHeaders).forEach((C) => {
      let {
        colSpan: E,
        rowSpan: I
      } = C;
      h += E, w.push(I);
    })) : h = 1;
    const b = Math.min(...w);
    return v = v + b, m.colSpan = h, m.rowSpan = v, {
      colSpan: h,
      rowSpan: v
    };
  });
  return d((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const Eh = (e, t, n, r, o, i, l) => {
  let s = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: l,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (a) => {
      if (s._valuesCache.hasOwnProperty(a))
        return s._valuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return s._valuesCache[a] = u.accessorFn(s.original, r), s._valuesCache[a];
    },
    getUniqueValues: (a) => {
      if (s._uniqueValuesCache.hasOwnProperty(a))
        return s._uniqueValuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (s._uniqueValuesCache[a] = u.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[a]) : (s._uniqueValuesCache[a] = [s.getValue(a)], s._uniqueValuesCache[a]);
    },
    renderValue: (a) => {
      var u;
      return (u = s.getValue(a)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => bh(s.subRows, (a) => a.subRows),
    getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
    getParentRows: () => {
      let a = [], u = s;
      for (; ; ) {
        const c = u.getParentRow();
        if (!c) break;
        a.push(c), u = c;
      }
      return a.reverse();
    },
    getAllCells: Y(() => [e.getAllLeafColumns()], (a) => a.map((u) => xh(e, s, u, u.id)), X(e.options, "debugRows")),
    _getAllCellsByColumnId: Y(() => [s.getAllCells()], (a) => a.reduce((u, c) => (u[c.column.id] = c, u), {}), X(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, Rh = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Oa = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Oa.autoRemove = (e) => Be(e);
const Fa = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Fa.autoRemove = (e) => Be(e);
const Pa = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Pa.autoRemove = (e) => Be(e);
const ka = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
ka.autoRemove = (e) => Be(e);
const Na = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Na.autoRemove = (e) => Be(e) || !(e != null && e.length);
const Aa = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Aa.autoRemove = (e) => Be(e) || !(e != null && e.length);
const Da = (e, t, n) => e.getValue(t) === n;
Da.autoRemove = (e) => Be(e);
const La = (e, t, n) => e.getValue(t) == n;
La.autoRemove = (e) => Be(e);
const Go = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Go.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
Go.autoRemove = (e) => Be(e) || Be(e[0]) && Be(e[1]);
const et = {
  includesString: Oa,
  includesStringSensitive: Fa,
  equalsString: Pa,
  arrIncludes: ka,
  arrIncludesAll: Na,
  arrIncludesSome: Aa,
  equals: Da,
  weakEquals: La,
  inNumberRange: Go
};
function Be(e) {
  return e == null || e === "";
}
const $h = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ve("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? et.includesString : typeof r == "number" ? et.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? et.equals : Array.isArray(r) ? et.arrIncludes : et.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return pr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : et[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, r, o;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((r = t.options.enableColumnFilters) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, r;
      return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((r) => {
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((c) => c.id === e.id), l = ft(n, i ? i.value : void 0);
        if (el(o, l, e)) {
          var s;
          return (s = r == null ? void 0 : r.filter((c) => c.id !== e.id)) != null ? s : [];
        }
        const a = {
          id: e.id,
          value: l
        };
        if (i) {
          var u;
          return (u = r == null ? void 0 : r.map((c) => c.id === e.id ? a : c)) != null ? u : [];
        }
        return r != null && r.length ? [...r, a] : [a];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), r = (o) => {
        var i;
        return (i = ft(t, o)) == null ? void 0 : i.filter((l) => {
          const s = n.find((a) => a.id === l.id);
          if (s) {
            const a = s.getFilterFn();
            if (el(a, l.value, s))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (t) => {
      var n, r;
      e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function el(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Th = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Ih = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Mh = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Oh = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, Fh = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Ph = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!yh(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, kh = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Nh = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Ah = (e, t) => t.length, $r = {
  sum: Th,
  min: Ih,
  max: Mh,
  extent: Oh,
  mean: Fh,
  median: Ph,
  unique: kh,
  uniqueCount: Nh,
  count: Ah
}, Dh = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: Ve("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, r;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((r = t.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      if (typeof r == "number")
        return $r.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return $r.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return pr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : $r[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, r;
      e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const r = t.getColumn(n);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, r) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
    };
  }
};
function Lh(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const Vh = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ve("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = Y((n) => [cn(t, n)], (n) => n.findIndex((r) => r.id === e.id), X(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = cn(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = cn(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = Y(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const l = [...t], s = [...o];
        for (; s.length && l.length; ) {
          const a = l.shift(), u = s.findIndex((c) => c.id === a);
          u > -1 && i.push(s.splice(u, 1)[0]);
        }
        i = [...i, ...s];
      }
      return Lh(i, n, r);
    }, X(e.options, "debugTable"));
  }
}, Tr = () => ({
  left: [],
  right: []
}), Hh = {
  getInitialState: (e) => ({
    columnPinning: Tr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ve("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, l;
        if (n === "right") {
          var s, a;
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((d) => !(r != null && r.includes(d))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((d) => !(r != null && r.includes(d))), ...r]
          };
        }
        if (n === "left") {
          var u, c;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((d) => !(r != null && r.includes(d))), ...r],
            right: ((c = o == null ? void 0 : o.right) != null ? c : []).filter((d) => !(r != null && r.includes(d)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((d) => !(r != null && r.includes(d))),
          right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((d) => !(r != null && r.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, l;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (l = t.options.enableColumnPinning) != null ? l : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((s) => s.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
      return i ? "left" : l ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((l) => !i.includes(l.column.id));
    }, X(t.options, "debugRows")), e.getLeftVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), X(t.options, "debugRows")), e.getRightVisibleCells = Y(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), X(t.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? Tr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Tr());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns")), e.getRightLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), X(e.options, "debugColumns")), e.getCenterLeafColumns = Y(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, X(e.options, "debugColumns"));
  }
}, Pn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Ir = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), zh = {
  getDefaultColumnDef: () => Pn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Ir(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ve("columnSizing", e),
    onColumnSizingInfoChange: Ve("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Pn.minSize, (r = i ?? e.columnDef.size) != null ? r : Pn.size), (o = e.columnDef.maxSize) != null ? o : Pn.maxSize);
    }, e.getStart = Y((n) => [n, cn(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.getAfter = Y((n) => [n, cn(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: r,
          ...o
        } = n;
        return o;
      });
    }, e.getCanResize = () => {
      var n, r;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((r = t.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var i;
          n += (i = o.column.getSize()) != null ? i : 0;
        }
      };
      return r(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (i) => {
        if (!r || !o || (i.persist == null || i.persist(), Mr(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[r.id, r.getSize()]], a = Mr(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (w, b) => {
          typeof b == "number" && (t.setColumnSizingInfo((C) => {
            var E, I;
            const M = t.options.columnResizeDirection === "rtl" ? -1 : 1, R = (b - ((E = C == null ? void 0 : C.startOffset) != null ? E : 0)) * M, _ = Math.max(R / ((I = C == null ? void 0 : C.startSize) != null ? I : 0), -0.999999);
            return C.columnSizingStart.forEach((y) => {
              let [x, S] = y;
              u[x] = Math.round(Math.max(S + S * _, 0) * 100) / 100;
            }), {
              ...C,
              deltaOffset: R,
              deltaPercentage: _
            };
          }), (t.options.columnResizeMode === "onChange" || w === "end") && t.setColumnSizing((C) => ({
            ...C,
            ...u
          })));
        }, d = (w) => c("move", w), p = (w) => {
          c("end", w), t.setColumnSizingInfo((b) => ({
            ...b,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, f = n || typeof document < "u" ? document : null, m = {
          moveHandler: (w) => d(w.clientX),
          upHandler: (w) => {
            f == null || f.removeEventListener("mousemove", m.moveHandler), f == null || f.removeEventListener("mouseup", m.upHandler), p(w.clientX);
          }
        }, h = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), d(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var b;
            f == null || f.removeEventListener("touchmove", h.moveHandler), f == null || f.removeEventListener("touchend", h.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), p((b = w.touches[0]) == null ? void 0 : b.clientX);
          }
        }, v = Bh() ? {
          passive: !1
        } : !1;
        Mr(i) ? (f == null || f.addEventListener("touchmove", h.moveHandler, v), f == null || f.addEventListener("touchend", h.upHandler, v)) : (f == null || f.addEventListener("mousemove", m.moveHandler, v), f == null || f.addEventListener("mouseup", m.upHandler, v)), t.setColumnSizingInfo((w) => ({
          ...w,
          startOffset: a,
          startSize: l,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: s,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? Ir() : (n = e.initialState.columnSizingInfo) != null ? n : Ir());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    };
  }
};
let kn = null;
function Bh() {
  if (typeof kn == "boolean") return kn;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return kn = e, kn;
}
function Mr(e) {
  return e.type === "touchstart";
}
const jh = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ve("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((r) => ({
        ...r,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, r;
      const o = e.columns;
      return (n = o.length ? o.some((i) => i.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = Y(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), X(t.options, "debugRows")), e.getVisibleCells = Y(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], X(t.options, "debugRows"));
  },
  createTable: (e) => {
    const t = (n, r) => Y(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), X(e.options, "debugColumns"));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({
        ...o,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function cn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Uh = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Wh = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ve("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => et.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return pr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : et[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Gh = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ve("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, i;
      e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const l = i.split(".");
        r = Math.max(r, l.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let l = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((s) => {
          l[s] = !0;
        }) : l = r, n = (o = n) != null ? o : !i, !i && n)
          return {
            ...l,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: s,
            ...a
          } = l;
          return a;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var n;
      const r = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var n, r, o;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, r = e;
      for (; n && r.parentId; )
        r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, ao = 0, uo = 10, Or = () => ({
  pageIndex: ao,
  pageSize: uo
}), qh = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Or(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ve("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (i) => ft(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Or() : (o = e.initialState.pagination) != null ? o : Or());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = ft(r, o.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? ao : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : ao);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? uo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : uo);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, ft(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
        return {
          ...o,
          pageIndex: s,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let l = ft(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...o,
        pageCount: l
      };
    }), e.getPageOptions = Y(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, l) => l)), o;
    }, X(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Fr = () => ({
  top: [],
  bottom: []
}), Kh = {
  getInitialState: (e) => ({
    rowPinning: Fr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ve("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], l = o ? e.getParentRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], s = /* @__PURE__ */ new Set([...l, e.id, ...i]);
      t.setRowPinning((a) => {
        var u, c;
        if (n === "bottom") {
          var d, p;
          return {
            top: ((d = a == null ? void 0 : a.top) != null ? d : []).filter((h) => !(s != null && s.has(h))),
            bottom: [...((p = a == null ? void 0 : a.bottom) != null ? p : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)]
          };
        }
        if (n === "top") {
          var f, m;
          return {
            top: [...((f = a == null ? void 0 : a.top) != null ? f : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)],
            bottom: ((m = a == null ? void 0 : a.bottom) != null ? m : []).filter((h) => !(s != null && s.has(h)))
          };
        }
        return {
          top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter((h) => !(s != null && s.has(h))),
          bottom: ((c = a == null ? void 0 : a.bottom) != null ? c : []).filter((h) => !(s != null && s.has(h)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = t.options;
      return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: r,
        bottom: o
      } = t.getState().rowPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
      return i ? "top" : l ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((l) => {
        let {
          id: s
        } = l;
        return s;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? Fr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Fr());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, i;
        return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((l) => {
          const s = e.getRow(l, !0);
          return s.getIsAllParentsExpanded() ? s : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((l) => t.find((s) => s.id === l))
      )).filter(Boolean).map((l) => ({
        ...l,
        position: r
      }));
    }, e.getTopRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), X(e.options, "debugRows")), e.getBottomRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), X(e.options, "debugRows")), e.getCenterRows = Y(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, X(e.options, "debugRows"));
  }
}, Yh = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ve("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const r = {
          ...n
        }, o = e.getPreGroupedRowModel().flatRows;
        return t ? o.forEach((i) => {
          i.getCanSelect() && (r[i.id] = !0);
        }) : o.forEach((i) => {
          delete r[i.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        co(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Y(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getFilteredSelectedRowModel = Y(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getGroupedSelectedRowModel = Y(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Pr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let r = !!(t.length && Object.keys(n).length);
      return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let r = !!t.length;
      return r && t.some((o) => !n[o.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, r) => {
      const o = e.getIsSelected();
      t.setRowSelection((i) => {
        var l;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return i;
        const s = {
          ...i
        };
        return co(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return qo(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return fo(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return fo(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (r) => {
        var o;
        n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, co = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, !0);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => co(e, s.id, n, r, o));
};
function Pr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var u;
      const c = qo(a, n);
      if (c && (r.push(a), o[a.id] = a), (u = a.subRows) != null && u.length && (a = {
        ...a,
        subRows: i(a.subRows)
      }), c)
        return a;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function qo(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function fo(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (qo(l, t) ? i = !0 : o = !1), l.subRows && l.subRows.length)) {
      const s = fo(l, t);
      s === "all" ? i = !0 : (s === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const po = /([0-9]+)/gm, Xh = (e, t, n) => Va(ht(e.getValue(n)).toLowerCase(), ht(t.getValue(n)).toLowerCase()), Zh = (e, t, n) => Va(ht(e.getValue(n)), ht(t.getValue(n))), Jh = (e, t, n) => Ko(ht(e.getValue(n)).toLowerCase(), ht(t.getValue(n)).toLowerCase()), Qh = (e, t, n) => Ko(ht(e.getValue(n)), ht(t.getValue(n))), ev = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, tv = (e, t, n) => Ko(e.getValue(n), t.getValue(n));
function Ko(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function ht(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Va(e, t) {
  const n = e.split(po).filter(Boolean), r = t.split(po).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), l = parseInt(o, 10), s = parseInt(i, 10), a = [l, s].sort();
    if (isNaN(a[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(a[1]))
      return isNaN(l) ? -1 : 1;
    if (l > s)
      return 1;
    if (s > l)
      return -1;
  }
  return n.length - r.length;
}
const nn = {
  alphanumeric: Xh,
  alphanumericCaseSensitive: Zh,
  text: Jh,
  textCaseSensitive: Qh,
  datetime: ev,
  basic: tv
}, nv = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ve("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return nn.datetime;
        if (typeof i == "string" && (r = !0, i.split(po).length > 1))
          return nn.alphanumeric;
      }
      return r ? nn.text : nn.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return pr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : nn[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((l) => {
        const s = l == null ? void 0 : l.find((f) => f.id === e.id), a = l == null ? void 0 : l.findIndex((f) => f.id === e.id);
        let u = [], c, d = i ? n : o === "desc";
        if (l != null && l.length && e.getCanMultiSort() && r ? s ? c = "toggle" : c = "add" : l != null && l.length && a !== l.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (i || o || (c = "remove")), c === "add") {
          var p;
          u = [...l, {
            id: e.id,
            desc: d
          }], u.splice(0, u.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = l.map((f) => f.id === e.id ? {
          ...f,
          desc: d
        } : f) : c === "remove" ? u = l.filter((f) => f.id !== e.id) : u = [{
          id: e.id,
          desc: d
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const i = e.getFirstSortDir(), l = e.getIsSorted();
      return l ? l !== i && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : l === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var n, r;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((r = t.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, r;
      return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, r;
      return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (r) => {
        n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, r;
      e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, rv = [
  Sh,
  jh,
  Vh,
  Hh,
  Rh,
  $h,
  Uh,
  //depends on ColumnFaceting
  Wh,
  //depends on ColumnFiltering
  nv,
  Dh,
  //depends on RowSorting
  Gh,
  qh,
  Kh,
  Yh,
  zh
];
function ov(e) {
  var t, n;
  const r = [...rv, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((p, f) => Object.assign(p, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), l = (p) => o.options.mergeOptions ? o.options.mergeOptions(i, p) : {
    ...i,
    ...p
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((p) => {
    var f;
    a = (f = p.getInitialState == null ? void 0 : p.getInitialState(a)) != null ? f : a;
  });
  const u = [];
  let c = !1;
  const d = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: a,
    _queue: (p) => {
      u.push(p), c || (c = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        c = !1;
      }).catch((f) => setTimeout(() => {
        throw f;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (p) => {
      const f = ft(p, o.options);
      o.options = l(f);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, f, m) => {
      var h;
      return (h = o.options.getRowId == null ? void 0 : o.options.getRowId(p, f, m)) != null ? h : `${m ? [m.id, f].join(".") : f}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, f) => {
      let m = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
      if (!m && (m = o.getCoreRowModel().rowsById[p], !m))
        throw new Error();
      return m;
    },
    _getDefaultColumnDef: Y(() => [o.options.defaultColumn], (p) => {
      var f;
      return p = (f = p) != null ? f : {}, {
        header: (m) => {
          const h = m.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var h, v;
          return (h = (v = m.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? h : null;
        },
        ...o._features.reduce((m, h) => Object.assign(m, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...p
      };
    }, X(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: Y(() => [o._getColumnDefs()], (p) => {
      const f = function(m, h, v) {
        return v === void 0 && (v = 0), m.map((w) => {
          const b = Ch(o, w, v, h), C = w;
          return b.columns = C.columns ? f(C.columns, b, v + 1) : [], b;
        });
      };
      return f(p);
    }, X(e, "debugColumns")),
    getAllFlatColumns: Y(() => [o.getAllColumns()], (p) => p.flatMap((f) => f.getFlatColumns()), X(e, "debugColumns")),
    _getAllFlatColumnsById: Y(() => [o.getAllFlatColumns()], (p) => p.reduce((f, m) => (f[m.id] = m, f), {}), X(e, "debugColumns")),
    getAllLeafColumns: Y(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, f) => {
      let m = p.flatMap((h) => h.getLeafColumns());
      return f(m);
    }, X(e, "debugColumns")),
    getColumn: (p) => o._getAllFlatColumnsById()[p]
  };
  Object.assign(o, d);
  for (let p = 0; p < o._features.length; p++) {
    const f = o._features[p];
    f == null || f.createTable == null || f.createTable(o);
  }
  return o;
}
function iv() {
  return (e) => Y(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let u = 0; u < o.length; u++) {
        const c = Eh(e, e._getRowId(o[u], u, l), o[u], u, i, void 0, l == null ? void 0 : l.id);
        if (n.flatRows.push(c), n.rowsById[c.id] = c, s.push(c), e.options.getSubRows) {
          var a;
          c.originalSubRows = e.options.getSubRows(o[u], u), (a = c.originalSubRows) != null && a.length && (c.subRows = r(c.originalSubRows, i + 1, c));
        }
      }
      return s;
    };
    return n.rows = r(t), n;
  }, X(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function lv() {
  return (e) => Y(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], i = r.filter((a) => {
      var u;
      return (u = e.getColumn(a.id)) == null ? void 0 : u.getCanSort();
    }), l = {};
    i.forEach((a) => {
      const u = e.getColumn(a.id);
      u && (l[a.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const s = (a) => {
      const u = a.map((c) => ({
        ...c
      }));
      return u.sort((c, d) => {
        for (let f = 0; f < i.length; f += 1) {
          var p;
          const m = i[f], h = l[m.id], v = h.sortUndefined, w = (p = m == null ? void 0 : m.desc) != null ? p : !1;
          let b = 0;
          if (v) {
            const C = c.getValue(m.id), E = d.getValue(m.id), I = C === void 0, M = E === void 0;
            if (I || M) {
              if (v === "first") return I ? -1 : 1;
              if (v === "last") return I ? 1 : -1;
              b = I && M ? 0 : I ? v : -v;
            }
          }
          if (b === 0 && (b = h.sortingFn(c, d, m.id)), b !== 0)
            return w && (b *= -1), h.invertSorting && (b *= -1), b;
        }
        return c.index - d.index;
      }), u.forEach((c) => {
        var d;
        o.push(c), (d = c.subRows) != null && d.length && (c.subRows = s(c.subRows));
      }), u;
    };
    return {
      rows: s(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, X(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function tl(e, t) {
  return e ? sv(e) ? /* @__PURE__ */ P(e, t) : e : null;
}
function sv(e) {
  return av(e) || typeof e == "function" || uv(e);
}
function av(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function uv(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function cv(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = U(() => ({
    current: ov(t)
  })), [r, o] = U(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (l) => {
      o(l), e.onStateChange == null || e.onStateChange(l);
    }
  })), n.current;
}
const dv = 500, nl = 10;
function fv(e, { disabled: t = !1 } = {}) {
  const n = D(null), r = D(0), o = D(0), i = D(!1), l = ie(
    (u) => {
      if (t) return;
      const c = u.touches[0];
      r.current = c.clientX, o.current = c.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, dv);
    },
    [e, t]
  ), s = ie(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = ie(
    (u) => {
      const c = u.touches[0], d = Math.abs(c.clientX - r.current), p = Math.abs(c.clientY - o.current);
      (d > nl || p > nl) && (i.current = !0, s());
    },
    [s]
  );
  return {
    onTouchStart: l,
    onTouchMove: a,
    onTouchEnd: s,
    onTouchCancel: s,
    onMouseLeave: s
  };
}
function pv({
  rowId: e,
  columnDefinition: t,
  value: n,
  onUpdated: r,
  allData: o,
  clearRowsSelection: i,
  errorsText: l,
  enumLabelDict: s
}) {
  const { t: a } = ye(), [u, c] = U(!1), d = D(null);
  oe(() => {
    u && (i(), d.current && d.current.focus());
  }, [u]);
  const { displayValue: p, valueEmpty: f } = Mg(
    t,
    n,
    s
  ), m = xa(t), h = fv(
    () => {
      m || c(!0);
    },
    { disabled: m }
  ), v = l ? "bg-hello-csv-danger-extra-light" : m ? "bg-hello-csv-muted" : "";
  if (!u)
    return /* @__PURE__ */ g(
      ng,
      {
        variant: l ? "error" : "info",
        tooltipText: l || (m ? a("sheet.readOnly") : ""),
        children: /* @__PURE__ */ g(
          "div",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": `row ${Number(e) + 1} ${t.label} ${p}`,
            ...h,
            onClick: (b) => !m && b.detail > 1 && c(!0),
            className: `h-full w-full py-4 pr-3 pl-4 ${v} touch-manipulation truncate overflow-hidden whitespace-nowrap`,
            title: f ? void 0 : `${p}`,
            children: t.customRender ? t.customRender(n, p) : p
          }
        )
      }
    );
  function w(b) {
    c(!1), t.type === "number" && b !== "" && !isNaN(Number(b)) ? r(Number(b)) : r(b ?? "");
  }
  if (t.type === "reference") {
    const b = ya(
      t,
      o
    ), C = Wo(t, s), E = b.map((I) => ({
      label: String(qn(C, I)),
      value: I
    }));
    return /* @__PURE__ */ g(
      vn,
      {
        searchable: !0,
        options: E,
        value: n,
        onChange: (I) => w(I ?? "")
      }
    );
  }
  if (t.type === "enum") {
    const C = t.typeArguments.values;
    return /* @__PURE__ */ g(
      vn,
      {
        searchable: !0,
        options: C,
        value: n,
        onChange: (E) => w(E ?? "")
      }
    );
  }
  return /* @__PURE__ */ g(
    pa,
    {
      "aria-label": `edit row ${Number(e) + 1}'s ${t.label}`,
      type: t.type === "number" ? "number" : "text",
      classes: "block w-full",
      value: n,
      onBlur: w,
      ref: d
    }
  );
}
function mv({
  table: e,
  sheetDefinition: t,
  allData: n,
  sheetValidationErrors: r,
  onCellValueChanged: o,
  setSelectedRows: i,
  tableContainerRef: l,
  enumLabelDict: s
}) {
  const { t: a } = ye();
  function u(b, C) {
    return r.filter(
      (E) => E.columnId === b && E.rowIndex === C
    );
  }
  const c = "bg-hello-csv-muted py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 whitespace-nowrap border-y border-gray-300", d = "text-sm font-medium whitespace-nowrap text-gray-900 border-b border-gray-300", p = e.getRowModel().rows, f = cs({
    count: p.length,
    getScrollElement: () => l.current,
    estimateSize: () => Lm,
    measureElement: (b) => b == null ? void 0 : b.getBoundingClientRect().height,
    overscan: 20
  }), m = f.getVirtualItems().map((b) => ({
    row: p[b.index],
    index: b.index,
    start: b.start,
    end: b.end
  })), [h, v] = m.length > 0 ? [
    Math.max(
      0,
      m[0].start - f.options.scrollMargin
    ),
    Math.max(
      0,
      f.getTotalSize() - m[m.length - 1].end
    )
  ] : [0, 0], w = ie(
    (b) => {
      b && f.measureElement(b);
    },
    [f]
  );
  return /* @__PURE__ */ g(
    "table",
    {
      className: "w-full table-fixed border-separate border-spacing-0",
      "aria-label": a("sheet.sheetTitle"),
      children: [
        /* @__PURE__ */ g("thead", { className: "bg-hello-csv-muted sticky top-0 z-10", children: e.getHeaderGroups().map((b) => /* @__PURE__ */ g("tr", { children: b.headers.map((C) => /* @__PURE__ */ g(
          "th",
          {
            className: C.column.id === io ? `${c} sticky left-0 z-20` : `relative z-10 ${c}`,
            colSpan: C.colSpan,
            style: { width: C.getSize() },
            children: /* @__PURE__ */ g(
              "div",
              {
                className: `flex w-full ${C.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
                onClick: C.column.getToggleSortingHandler(),
                children: [
                  C.isPlaceholder ? null : /* @__PURE__ */ g("div", { children: tl(
                    C.column.columnDef.header,
                    C.getContext()
                  ) }, `header-${b.id}-${C.id}`),
                  /* @__PURE__ */ g(
                    "span",
                    {
                      className: "ml-2 flex-none rounded-sm bg-gray-500 text-gray-200",
                      children: {
                        asc: /* @__PURE__ */ g(Zm, { "aria-hidden": "true", className: "size-5" }),
                        desc: /* @__PURE__ */ g(
                          qm,
                          {
                            "aria-hidden": "true",
                            className: "size-5"
                          }
                        )
                      }[C.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${b.id}-${C.id}`
                  ),
                  C.column.getCanResize() && /* @__PURE__ */ g(
                    "div",
                    {
                      onMouseDown: C.getResizeHandler(),
                      onTouchStart: C.getResizeHandler(),
                      className: "absolute top-0 right-0 h-full w-0.5 cursor-col-resize touch-none bg-gray-200 select-none"
                    },
                    `resize-icon-${b.id}-${C.id}`
                  )
                ]
              }
            )
          },
          C.id
        )) }, b.id)) }),
        /* @__PURE__ */ g(
          "tbody",
          {
            className: "divide-y divide-gray-200",
            style: {
              height: `${f.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ g("tr", { children: /* @__PURE__ */ g("td", { style: { height: h } }) }),
              m.map(({ row: b, index: C }) => /* @__PURE__ */ g("tr", { "data-index": C, ref: w, children: b.getVisibleCells().map((E, I) => {
                if (E.column.id === io)
                  return /* @__PURE__ */ g(
                    "td",
                    {
                      "aria-label": `Select row ${Number(b.id) + 1}`,
                      className: `bg-hello-csv-muted ${d} sticky left-0 z-6 pr-3 pl-4`,
                      style: { width: E.column.getSize() },
                      children: tl(E.column.columnDef.cell, E.getContext())
                    },
                    E.id
                  );
                const M = t.columns[I - 1].id, R = ba(
                  n,
                  t.id,
                  b.original
                ), _ = u(M, R).map((y) => a(y.message)).join(", ");
                return /* @__PURE__ */ g(
                  "td",
                  {
                    className: d,
                    style: { width: E.column.getSize() },
                    children: /* @__PURE__ */ g(
                      pv,
                      {
                        rowId: b.id,
                        columnDefinition: t.columns.find((y) => y.id === M),
                        allData: n,
                        value: E.getValue(),
                        onUpdated: (y) => o(R, M, y),
                        clearRowsSelection: () => i([]),
                        errorsText: _,
                        enumLabelDict: s
                      }
                    )
                  },
                  E.id
                );
              }) }, b.id)),
              /* @__PURE__ */ g("tr", { children: /* @__PURE__ */ g("td", { style: { height: v } }) })
            ]
          }
        )
      ]
    }
  );
}
function gv({ column: e }) {
  const { t } = ye(), n = xa(e);
  return /* @__PURE__ */ g(
    "div",
    {
      className: "flex items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ g("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ g(aa, { className: "absolute top-0 left-0 h-5 w-5 text-gray-400" }),
          /* @__PURE__ */ g(Xp, { className: "absolute top-0 left-0 h-5 w-5 text-gray-500" })
        ] }),
        e.label,
        " ",
        $n(e) && "*"
      ]
    }
  );
}
function hv({
  sheetDefinition: e,
  rowData: t,
  selectedRows: n,
  setSelectedRows: r,
  viewMode: o,
  setViewMode: i,
  searchPhrase: l,
  setSearchPhrase: s,
  errorColumnFilter: a,
  setErrorColumnFilter: u,
  removeRows: c,
  addEmptyRow: d,
  sheetValidationErrors: p,
  rowValidationSummary: f,
  resetState: m,
  enumLabelDict: h
}) {
  const { csvDownloadMode: v } = at(), { t: w } = ye(), [b, C] = U(!1), [E, I] = U(!1), M = "pointer-events-none cursor-not-allowed opacity-50";
  function R(S) {
    const T = e.columns.find(
      (F) => F.id === S
    ), A = Xi(
      p.filter((F) => F.columnId === S).map((F) => F.rowIndex)
    ).length;
    return {
      label: `${(T == null ? void 0 : T.label) || S} (${A})`,
      value: S
    };
  }
  const _ = Xi(
    p.map((S) => S.columnId)
  ).map((S) => R(S));
  a != null && _.find((S) => S.value === a) == null && _.push(R(a));
  const y = [
    {
      value: "all",
      label: w("sheet.all") + ` (${f.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: w("sheet.valid") + ` (${f.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: w("sheet.invalid") + ` (${f.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function x() {
    c({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ g("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ g("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g(og, { activeButton: o, buttons: y }) }),
      /* @__PURE__ */ g(
        pa,
        {
          clearable: !0,
          value: l,
          onChange: (S) => s(S),
          placeholder: w("sheet.search"),
          iconBuilder: (S) => /* @__PURE__ */ g(Kp, { ...S })
        }
      ),
      /* @__PURE__ */ g(
        Dt,
        {
          tooltipText: w(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ g(
            em,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": w(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : M}`,
              onClick: () => C(!0)
            }
          )
        }
      ),
      /* @__PURE__ */ g(Dt, { tooltipText: w("sheet.addRowsTooltip"), children: /* @__PURE__ */ g(Jp, { className: "h-6 w-6 cursor-pointer", onClick: d }) }),
      /* @__PURE__ */ g(Dt, { tooltipText: w("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ g(
        kp,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : M}`,
          onClick: () => wa(
            e,
            t,
            h,
            v
          )
        }
      ) }),
      /* @__PURE__ */ g(
        vn,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: w("sheet.filterByError"),
          classes: "min-w-48",
          options: _,
          value: a,
          onChange: (S) => u(S)
        }
      ),
      /* @__PURE__ */ g(
        ro,
        {
          open: b,
          setOpen: C,
          onConfirm: x,
          title: w("sheet.removeConfirmationModalTitle"),
          confirmationText: w("sheet.removeConfirmationModalConfirmationText"),
          subTitle: w("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ g(Dt, { className: "ml-5", tooltipText: w("sheet.resetTooltip"), children: /* @__PURE__ */ g(
      aa,
      {
        className: "h-6 w-6 cursor-pointer",
        onClick: () => I(!0)
      }
    ) }),
    /* @__PURE__ */ g(
      ro,
      {
        open: E,
        setOpen: I,
        onConfirm: m,
        title: w("sheet.resetConfirmationModalTitle"),
        confirmationText: w("sheet.resetConfirmationModalConfirmationText"),
        subTitle: w("sheet.resetConfirmationModalSubTitle"),
        variant: "danger"
      }
    )
  ] });
}
function vv({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ g(Hl, { checked: r, setChecked: o });
}
function _v({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((l) => l !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ g(
    Hl,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
function wv({
  sheetDefinition: e,
  data: t,
  sheetValidationErrors: n,
  setRowData: r,
  removeRows: o,
  addEmptyRow: i,
  resetState: l,
  enumLabelDict: s
}) {
  const { sheetData: a } = wt(), [u, c] = U([]), [d, p] = U("all"), [f, m] = U(""), [h, v] = U(
    null
  );
  oe(() => {
    c([]), p("all");
  }, [e]);
  const w = Tg(
    t,
    a,
    d,
    n,
    h,
    e,
    f
  ), b = W(() => {
    const R = t.rows, _ = R.filter(
      (x, S) => !n.some((T) => T.rowIndex === S)
    ), y = R.filter(
      (x, S) => n.some((T) => T.rowIndex === S)
    );
    return {
      all: R.length,
      valid: _.length,
      errors: y.length
    };
  }, [t, n]), C = W(
    () => [
      {
        id: io,
        header: () => /* @__PURE__ */ g(
          vv,
          {
            visibleData: w,
            selectedRows: u,
            setSelectedRows: c
          }
        ),
        cell: ({ row: R }) => /* @__PURE__ */ g(
          _v,
          {
            row: R,
            selectedRows: u,
            setSelectedRows: c
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: Vm
      },
      ...e.columns.map(
        (R) => ({
          id: R.id,
          accessorFn: (_) => _[R.id],
          header: () => /* @__PURE__ */ g(gv, { column: R }),
          sortUndefined: "last",
          sortingFn: "auto",
          meta: { columnLabel: R.label },
          enableResizing: !0
        })
      )
    ],
    [e, u, w]
  ), E = cv({
    data: w,
    columns: C,
    getCoreRowModel: iv(),
    getSortedRowModel: lv(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: Hm,
      maxSize: zm,
      size: Bm
    }
  });
  function I(R, _, y) {
    const x = { ...t.rows[R] };
    x[_] = y, r({
      sheetId: e.id,
      value: x,
      rowIndex: R
    });
  }
  const M = D(null);
  return /* @__PURE__ */ g("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ g("div", { className: "flex-none", children: /* @__PURE__ */ g(
      hv,
      {
        sheetDefinition: e,
        rowData: w,
        selectedRows: u,
        setSelectedRows: c,
        viewMode: d,
        setViewMode: p,
        searchPhrase: f,
        setSearchPhrase: m,
        errorColumnFilter: h,
        setErrorColumnFilter: v,
        removeRows: o,
        addEmptyRow: i,
        sheetValidationErrors: n,
        rowValidationSummary: b,
        resetState: l,
        enumLabelDict: s
      }
    ) }),
    /* @__PURE__ */ g("div", { className: "min-h-0 flex-1 overflow-auto", ref: M, children: /* @__PURE__ */ g(
      mv,
      {
        tableContainerRef: M,
        table: E,
        sheetDefinition: e,
        allData: a,
        sheetValidationErrors: n,
        onCellValueChanged: I,
        setSelectedRows: c,
        enumLabelDict: s
      }
    ) })
  ] });
}
function Ha(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function yv(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (l) => l.id === o.sheetId
    );
    i && wa(
      i,
      o.rows,
      n,
      r
    );
  });
}
const rl = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const l = t.find(
    (s) => s.id === i.sheetId
  );
  return l ? o + _a(
    l,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function bv(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => dr(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      $n(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const Dn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, xv = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), Cv = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await xv(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), l = new Blob([i], { type: "text/csv" });
    return new File([l], o, {
      type: "text/csv"
    });
  }
  return e;
};
function Sv({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: l
  } = wt(), { csvDownloadMode: s } = at(), { t: a } = ye(), u = Ha(o);
  return /* @__PURE__ */ g("div", { className: "flex flex-row px-4 pt-3 pb-2", children: /* @__PURE__ */ g("div", { className: "flex-1 space-y-4", children: [
    /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ g("div", { className: "my-2 mr-5 text-center", children: /* @__PURE__ */ g(Bp, { className: "text-hello-csv-primary h-8 w-8" }) }),
      /* @__PURE__ */ g("div", { className: "flex-1", children: [
        /* @__PURE__ */ g("div", { className: "my-2 text-sm font-light uppercase", children: a("importStatus.fileInformation") }),
        /* @__PURE__ */ g("div", { className: "text-md my-2 font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ g("div", { className: "my-2 text-sm text-gray-500", children: n ? `${a("importStatus.original")}: ${Dn((n == null ? void 0 : n.size) || 0)} · ${a("importStatus.processed")}: ${Dn(rl(o, l, t, s))}` : `${a("importStatus.processed")}: ${Dn(rl(o, l, t, s))}` }),
        /* @__PURE__ */ g("div", { className: "mt-5", children: /* @__PURE__ */ g(
          He,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => yv(
              o,
              l,
              t,
              s
            ),
            children: a("importStatus.downloadProcessedData")
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ g("div", { className: "border-b border-gray-200 pb-2" }),
    /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ g("div", { className: "my-2 mr-5 text-center", children: r === "failed" ? /* @__PURE__ */ g(lo, { className: "text-hello-csv-danger-light h-8 w-8" }) : e ? /* @__PURE__ */ g(ug, { className: "text-hello-csv-warning-light h-8 w-8" }) : /* @__PURE__ */ g(ma, { className: "text-hello-csv-success-light h-8 w-8" }) }),
      /* @__PURE__ */ g("div", { className: "flex-1", children: [
        /* @__PURE__ */ g("div", { className: "my-2 text-sm font-light uppercase", children: a("importStatus.importResults") }),
        /* @__PURE__ */ g("div", { className: "text-md my-2 font-medium", children: a("importStatus.totalRows", { totalRows: u }) }),
        i && /* @__PURE__ */ g("div", { className: "my-2 text-sm text-gray-500", children: [
          i.skipped >= 0 && /* @__PURE__ */ g("span", { children: [
            a("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ g("span", { children: [
            a("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ g("span", { children: a("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ g("div", { className: "my-2 text-sm text-gray-500", children: [
          a("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ g(Bo, { variant: "error", children: a("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function za({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = ye();
  return /* @__PURE__ */ g(Vl, { withPadding: !1, className: "h-full", children: /* @__PURE__ */ g("div", { className: "flex flex-col py-5", children: [
    /* @__PURE__ */ g("div", { className: "px-4 pb-2 text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ g("div", { className: "px-4 pb-2 text-sm text-gray-500", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ g("div", { className: "border-b border-gray-200 pb-2" }),
    /* @__PURE__ */ g(
      Sv,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function Ev({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = wt(), { onSummaryFinished: o } = at(), { t: i } = ye(), l = Ha(n), s = (r == null ? void 0 : r.imported) ?? 0, a = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ g("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ g("div", { className: "text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ g("div", { className: "mt-4", children: /* @__PURE__ */ g(
      jo,
      {
        variant: a ? "warning" : "success",
        header: i(
          `importStatus.${a ? "importSuccessfulWithErrors" : "importSuccessful"}`
        ),
        description: i(
          `importStatus.successDescription${r ? "WithStats" : ""}`,
          {
            totalRecords: l,
            recordsImported: s
          }
        )
      }
    ) }),
    /* @__PURE__ */ g("div", { className: "mt-6", children: [
      /* @__PURE__ */ g(
        za,
        {
          completedWithErrors: a,
          enumLabelDict: t
        }
      ),
      /* @__PURE__ */ g("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ g("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ g(He, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
    ] })
  ] });
}
function Rv({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = ye();
  return /* @__PURE__ */ g("div", { className: "flex h-full flex-col", children: /* @__PURE__ */ g("div", { className: "flex h-full w-full flex-col", children: [
    /* @__PURE__ */ g("div", { className: "text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ g("div", { className: "mt-4", children: /* @__PURE__ */ g(
      jo,
      {
        variant: "error",
        header: r("importStatus.importFailed"),
        description: r("importStatus.failedDescription")
      }
    ) }),
    /* @__PURE__ */ g("div", { className: "mt-6", children: /* @__PURE__ */ g(za, { completedWithErrors: !1, enumLabelDict: n }) }),
    /* @__PURE__ */ g("div", { className: "mt-6 flex justify-between", children: [
      /* @__PURE__ */ g(He, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ g(He, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] }) });
}
function $v({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, l] = U(!1);
  return oe(() => {
    if (e === 0) {
      const s = setTimeout(() => {
        l(!0);
      }, 3e3);
      return () => clearTimeout(s);
    }
  }, [e]), i ? /* @__PURE__ */ g("div", { className: "flex justify-center", children: /* @__PURE__ */ g(
    "div",
    {
      className: `border-hello-csv-success-light h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ g("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ g(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: 40,
        fill: "transparent",
        className: "text-gray-200",
        strokeWidth: "10",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ g(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: 40,
        fill: "transparent",
        strokeWidth: "10",
        strokeDasharray: r,
        strokeDashoffset: o,
        className: "stroke-hello-csv-success-light transition-[stroke-dashoffset] duration-500"
      }
    )
  ] });
}
function Tv() {
  return /* @__PURE__ */ g(Lp, { className: "text-hello-csv-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Iv({ resetState: e }) {
  const { importProgress: t, mode: n } = wt(), r = n === "submit", { t: o } = ye();
  return /* @__PURE__ */ g("div", { className: "flex h-full p-10", children: /* @__PURE__ */ g("div", { className: "flex h-full w-full flex-col", children: /* @__PURE__ */ g("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ g("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ g($v, { progress: t, pending: r }),
      r && /* @__PURE__ */ g("div", { children: [
        /* @__PURE__ */ g("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ g("b", { className: "text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ g("h2", { className: "text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ g(Tv, {})
    ] }),
    !r && /* @__PURE__ */ g("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ g("h2", { className: "text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ g("div", { className: "h-5" }),
      /* @__PURE__ */ g(He, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function Mv({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = wt();
  return /* @__PURE__ */ g("div", { className: "h-full", children: [
    o === "submit" && /* @__PURE__ */ g(Iv, { resetState: n }),
    o === "failed" && /* @__PURE__ */ g(
      Rv,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ g(Ev, { resetState: n, enumLabelDict: r })
  ] });
}
async function ol(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
const Ov = ({ children: e }) => {
  const { theme: t } = at();
  return oe(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ g(me, { children: e });
};
function Fv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ln = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Pv = Ln.exports, il;
function kv() {
  return il || (il = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Pv, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, l = r.IS_PAPA_WORKER || !1, s = {}, a = 0, u = {};
      function c(_) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(y) {
          var x = I(y);
          x.chunkSize = parseInt(x.chunkSize), y.step || y.chunk || (x.chunkSize = null), this._handle = new h(x), (this._handle.streamer = this)._config = x;
        }).call(this, _), this.parseChunk = function(y, x) {
          var S = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < S) {
            let A = this._config.newline;
            A || (T = this._config.quoteChar || '"', A = this._handle.guessLineEndings(y, T)), y = [...y.split(A).slice(S)].join(A);
          }
          this.isFirstChunk && R(this._config.beforeFirstChunk) && (T = this._config.beforeFirstChunk(y)) !== void 0 && (y = T), this.isFirstChunk = !1, this._halted = !1;
          var S = this._partialLine + y, T = (this._partialLine = "", this._handle.parse(S, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (y = T.meta.cursor, S = (this._finished || (this._partialLine = S.substring(y - this._baseIndex), this._baseIndex = y), T && T.data && (this._rowCount += T.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), l) r.postMessage({ results: T, workerId: u.WORKER_ID, finished: S });
            else if (R(this._config.chunk) && !x) {
              if (this._config.chunk(T, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = T = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(T.data), this._completeResults.errors = this._completeResults.errors.concat(T.errors), this._completeResults.meta = T.meta), this._completed || !S || !R(this._config.complete) || T && T.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), S || T && T.meta.paused || this._nextChunk(), T;
          }
          this._halted = !0;
        }, this._sendError = function(y) {
          R(this._config.error) ? this._config.error(y) : l && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: y, finished: !1 });
        };
      }
      function d(_) {
        var y;
        (_ = _ || {}).chunkSize || (_.chunkSize = u.RemoteChunkSize), c.call(this, _), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(x) {
          this._input = x, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (y = new XMLHttpRequest(), this._config.withCredentials && (y.withCredentials = this._config.withCredentials), i || (y.onload = M(this._chunkLoaded, this), y.onerror = M(this._chunkError, this)), y.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var x, S = this._config.downloadRequestHeaders;
              for (x in S) y.setRequestHeader(x, S[x]);
            }
            var T;
            this._config.chunkSize && (T = this._start + this._config.chunkSize - 1, y.setRequestHeader("Range", "bytes=" + this._start + "-" + T));
            try {
              y.send(this._config.downloadRequestBody);
            } catch (A) {
              this._chunkError(A.message);
            }
            i && y.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          y.readyState === 4 && (y.status < 200 || 400 <= y.status ? this._chunkError() : (this._start += this._config.chunkSize || y.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((x) => (x = x.getResponseHeader("Content-Range")) !== null ? parseInt(x.substring(x.lastIndexOf("/") + 1)) : -1)(y), this.parseChunk(y.responseText)));
        }, this._chunkError = function(x) {
          x = y.statusText || x, this._sendError(new Error(x));
        };
      }
      function p(_) {
        (_ = _ || {}).chunkSize || (_.chunkSize = u.LocalChunkSize), c.call(this, _);
        var y, x, S = typeof FileReader < "u";
        this.stream = function(T) {
          this._input = T, x = T.slice || T.webkitSlice || T.mozSlice, S ? ((y = new FileReader()).onload = M(this._chunkLoaded, this), y.onerror = M(this._chunkError, this)) : y = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var T = this._input, A = (this._config.chunkSize && (A = Math.min(this._start + this._config.chunkSize, this._input.size), T = x.call(T, this._start, A)), y.readAsText(T, this._config.encoding));
          S || this._chunkLoaded({ target: { result: A } });
        }, this._chunkLoaded = function(T) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(T.target.result);
        }, this._chunkError = function() {
          this._sendError(y.error);
        };
      }
      function f(_) {
        var y;
        c.call(this, _ = _ || {}), this.stream = function(x) {
          return y = x, this._nextChunk();
        }, this._nextChunk = function() {
          var x, S;
          if (!this._finished) return x = this._config.chunkSize, y = x ? (S = y.substring(0, x), y.substring(x)) : (S = y, ""), this._finished = !y, this.parseChunk(S);
        };
      }
      function m(_) {
        c.call(this, _ = _ || {});
        var y = [], x = !0, S = !1;
        this.pause = function() {
          c.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          c.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(T) {
          this._input = T, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          S && y.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), y.length ? this.parseChunk(y.shift()) : x = !0;
        }, this._streamData = M(function(T) {
          try {
            y.push(typeof T == "string" ? T : T.toString(this._config.encoding)), x && (x = !1, this._checkIsFinished(), this.parseChunk(y.shift()));
          } catch (A) {
            this._streamError(A);
          }
        }, this), this._streamError = M(function(T) {
          this._streamCleanUp(), this._sendError(T);
        }, this), this._streamEnd = M(function() {
          this._streamCleanUp(), S = !0, this._streamData("");
        }, this), this._streamCleanUp = M(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function h(_) {
        var y, x, S, T, A = Math.pow(2, 53), F = -A, G = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Z = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, B = this, z = 0, O = 0, k = !1, N = !1, V = [], $ = { data: [], errors: [], meta: {} };
        function se(q) {
          return _.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0;
        }
        function te() {
          if ($ && S && (le("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), S = !1), _.skipEmptyLines && ($.data = $.data.filter(function(J) {
            return !se(J);
          })), ue()) {
            let J = function(he, we) {
              R(_.transformHeader) && (he = _.transformHeader(he, we)), V.push(he);
            };
            if ($) if (Array.isArray($.data[0])) {
              for (var q = 0; ue() && q < $.data.length; q++) $.data[q].forEach(J);
              $.data.splice(0, 1);
            } else $.data.forEach(J);
          }
          function ee(J, he) {
            for (var we = _.header ? {} : [], H = 0; H < J.length; H++) {
              var K = H, Q = J[H], Q = ((Ee, ne) => ((ve) => (_.dynamicTypingFunction && _.dynamicTyping[ve] === void 0 && (_.dynamicTyping[ve] = _.dynamicTypingFunction(ve)), (_.dynamicTyping[ve] || _.dynamicTyping) === !0))(Ee) ? ne === "true" || ne === "TRUE" || ne !== "false" && ne !== "FALSE" && (((ve) => {
                if (G.test(ve) && (ve = parseFloat(ve), F < ve && ve < A))
                  return 1;
              })(ne) ? parseFloat(ne) : Z.test(ne) ? new Date(ne) : ne === "" ? null : ne) : ne)(K = _.header ? H >= V.length ? "__parsed_extra" : V[H] : K, Q = _.transform ? _.transform(Q, K) : Q);
              K === "__parsed_extra" ? (we[K] = we[K] || [], we[K].push(Q)) : we[K] = Q;
            }
            return _.header && (H > V.length ? le("FieldMismatch", "TooManyFields", "Too many fields: expected " + V.length + " fields but parsed " + H, O + he) : H < V.length && le("FieldMismatch", "TooFewFields", "Too few fields: expected " + V.length + " fields but parsed " + H, O + he)), we;
          }
          var ge;
          $ && (_.header || _.dynamicTyping || _.transform) && (ge = 1, !$.data.length || Array.isArray($.data[0]) ? ($.data = $.data.map(ee), ge = $.data.length) : $.data = ee($.data, 0), _.header && $.meta && ($.meta.fields = V), O += ge);
        }
        function ue() {
          return _.header && V.length === 0;
        }
        function le(q, ee, ge, J) {
          q = { type: q, code: ee, message: ge }, J !== void 0 && (q.row = J), $.errors.push(q);
        }
        R(_.step) && (T = _.step, _.step = function(q) {
          $ = q, ue() ? te() : (te(), $.data.length !== 0 && (z += q.data.length, _.preview && z > _.preview ? x.abort() : ($.data = $.data[0], T($, B))));
        }), this.parse = function(q, ee, ge) {
          var J = _.quoteChar || '"', J = (_.newline || (_.newline = this.guessLineEndings(q, J)), S = !1, _.delimiter ? R(_.delimiter) && (_.delimiter = _.delimiter(q), $.meta.delimiter = _.delimiter) : ((J = ((he, we, H, K, Q) => {
            var Ee, ne, ve, ut;
            Q = Q || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Pt = 0; Pt < Q.length; Pt++) {
              for (var Ue, Jt = Q[Pt], Re = 0, We = 0, Ce = 0, ke = (ve = void 0, new w({ comments: K, delimiter: Jt, newline: we, preview: 10 }).parse(he)), Qe = 0; Qe < ke.data.length; Qe++) H && se(ke.data[Qe]) ? Ce++ : (Ue = ke.data[Qe].length, We += Ue, ve === void 0 ? ve = Ue : 0 < Ue && (Re += Math.abs(Ue - ve), ve = Ue));
              0 < ke.data.length && (We /= ke.data.length - Ce), (ne === void 0 || Re <= ne) && (ut === void 0 || ut < We) && 1.99 < We && (ne = Re, Ee = Jt, ut = We);
            }
            return { successful: !!(_.delimiter = Ee), bestDelimiter: Ee };
          })(q, _.newline, _.skipEmptyLines, _.comments, _.delimitersToGuess)).successful ? _.delimiter = J.bestDelimiter : (S = !0, _.delimiter = u.DefaultDelimiter), $.meta.delimiter = _.delimiter), I(_));
          return _.preview && _.header && J.preview++, y = q, x = new w(J), $ = x.parse(y, ee, ge), te(), k ? { meta: { paused: !0 } } : $ || { meta: { paused: !1 } };
        }, this.paused = function() {
          return k;
        }, this.pause = function() {
          k = !0, x.abort(), y = R(_.chunk) ? "" : y.substring(x.getCharIndex());
        }, this.resume = function() {
          B.streamer._halted ? (k = !1, B.streamer.parseChunk(y, !0)) : setTimeout(B.resume, 3);
        }, this.aborted = function() {
          return N;
        }, this.abort = function() {
          N = !0, x.abort(), $.meta.aborted = !0, R(_.complete) && _.complete($), y = "";
        }, this.guessLineEndings = function(he, J) {
          he = he.substring(0, 1048576);
          var J = new RegExp(v(J) + "([^]*?)" + v(J), "gm"), ge = (he = he.replace(J, "")).split("\r"), J = he.split(`
`), he = 1 < J.length && J[0].length < ge[0].length;
          if (ge.length === 1 || he) return `
`;
          for (var we = 0, H = 0; H < ge.length; H++) ge[H][0] === `
` && we++;
          return we >= ge.length / 2 ? `\r
` : "\r";
        };
      }
      function v(_) {
        return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function w(_) {
        var y = (_ = _ || {}).delimiter, x = _.newline, S = _.comments, T = _.step, A = _.preview, F = _.fastMode, G = null, Z = !1, B = _.quoteChar == null ? '"' : _.quoteChar, z = B;
        if (_.escapeChar !== void 0 && (z = _.escapeChar), (typeof y != "string" || -1 < u.BAD_DELIMITERS.indexOf(y)) && (y = ","), S === y) throw new Error("Comment character same as delimiter");
        S === !0 ? S = "#" : (typeof S != "string" || -1 < u.BAD_DELIMITERS.indexOf(S)) && (S = !1), x !== `
` && x !== "\r" && x !== `\r
` && (x = `
`);
        var O = 0, k = !1;
        this.parse = function(N, V, $) {
          if (typeof N != "string") throw new Error("Input must be a string");
          var se = N.length, te = y.length, ue = x.length, le = S.length, q = R(T), ee = [], ge = [], J = [], he = O = 0;
          if (!N) return Re();
          if (F || F !== !1 && N.indexOf(B) === -1) {
            for (var we = N.split(x), H = 0; H < we.length; H++) {
              if (J = we[H], O += J.length, H !== we.length - 1) O += x.length;
              else if ($) return Re();
              if (!S || J.substring(0, le) !== S) {
                if (q) {
                  if (ee = [], ut(J.split(y)), We(), k) return Re();
                } else ut(J.split(y));
                if (A && A <= H) return ee = ee.slice(0, A), Re(!0);
              }
            }
            return Re();
          }
          for (var K = N.indexOf(y, O), Q = N.indexOf(x, O), Ee = new RegExp(v(z) + v(B), "g"), ne = N.indexOf(B, O); ; ) if (N[O] === B) for (ne = O, O++; ; ) {
            if ((ne = N.indexOf(B, ne + 1)) === -1) return $ || ge.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ee.length, index: O }), Ue();
            if (ne === se - 1) return Ue(N.substring(O, ne).replace(Ee, B));
            if (B === z && N[ne + 1] === z) ne++;
            else if (B === z || ne === 0 || N[ne - 1] !== z) {
              K !== -1 && K < ne + 1 && (K = N.indexOf(y, ne + 1));
              var ve = Pt((Q = Q !== -1 && Q < ne + 1 ? N.indexOf(x, ne + 1) : Q) === -1 ? K : Math.min(K, Q));
              if (N.substr(ne + 1 + ve, te) === y) {
                J.push(N.substring(O, ne).replace(Ee, B)), N[O = ne + 1 + ve + te] !== B && (ne = N.indexOf(B, O)), K = N.indexOf(y, O), Q = N.indexOf(x, O);
                break;
              }
              if (ve = Pt(Q), N.substring(ne + 1 + ve, ne + 1 + ve + ue) === x) {
                if (J.push(N.substring(O, ne).replace(Ee, B)), Jt(ne + 1 + ve + ue), K = N.indexOf(y, O), ne = N.indexOf(B, O), q && (We(), k)) return Re();
                if (A && ee.length >= A) return Re(!0);
                break;
              }
              ge.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ee.length, index: O }), ne++;
            }
          }
          else if (S && J.length === 0 && N.substring(O, O + le) === S) {
            if (Q === -1) return Re();
            O = Q + ue, Q = N.indexOf(x, O), K = N.indexOf(y, O);
          } else if (K !== -1 && (K < Q || Q === -1)) J.push(N.substring(O, K)), O = K + te, K = N.indexOf(y, O);
          else {
            if (Q === -1) break;
            if (J.push(N.substring(O, Q)), Jt(Q + ue), q && (We(), k)) return Re();
            if (A && ee.length >= A) return Re(!0);
          }
          return Ue();
          function ut(Ce) {
            ee.push(Ce), he = O;
          }
          function Pt(Ce) {
            var ke = 0;
            return ke = Ce !== -1 && (Ce = N.substring(ne + 1, Ce)) && Ce.trim() === "" ? Ce.length : ke;
          }
          function Ue(Ce) {
            return $ || (Ce === void 0 && (Ce = N.substring(O)), J.push(Ce), O = se, ut(J), q && We()), Re();
          }
          function Jt(Ce) {
            O = Ce, ut(J), J = [], Q = N.indexOf(x, O);
          }
          function Re(Ce) {
            if (_.header && !V && ee.length && !Z) {
              var ke = ee[0], Qe = {}, mr = new Set(ke);
              let Yo = !1;
              for (let kt = 0; kt < ke.length; kt++) {
                let Ge = ke[kt];
                if (Qe[Ge = R(_.transformHeader) ? _.transformHeader(Ge, kt) : Ge]) {
                  let Qt, Xo = Qe[Ge];
                  for (; Qt = Ge + "_" + Xo, Xo++, mr.has(Qt); ) ;
                  mr.add(Qt), ke[kt] = Qt, Qe[Ge]++, Yo = !0, (G = G === null ? {} : G)[Qt] = Ge;
                } else Qe[Ge] = 1, ke[kt] = Ge;
                mr.add(Ge);
              }
              Yo && console.warn("Duplicate headers found and renamed."), Z = !0;
            }
            return { data: ee, errors: ge, meta: { delimiter: y, linebreak: x, aborted: k, truncated: !!Ce, cursor: he + (V || 0), renamedHeaders: G } };
          }
          function We() {
            T(Re()), ee = [], ge = [];
          }
        }, this.abort = function() {
          k = !0;
        }, this.getCharIndex = function() {
          return O;
        };
      }
      function b(_) {
        var y = _.data, x = s[y.workerId], S = !1;
        if (y.error) x.userError(y.error, y.file);
        else if (y.results && y.results.data) {
          var T = { abort: function() {
            S = !0, C(y.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: E, resume: E };
          if (R(x.userStep)) {
            for (var A = 0; A < y.results.data.length && (x.userStep({ data: y.results.data[A], errors: y.results.errors, meta: y.results.meta }, T), !S); A++) ;
            delete y.results;
          } else R(x.userChunk) && (x.userChunk(y.results, T, y.file), delete y.results);
        }
        y.finished && !S && C(y.workerId, y.results);
      }
      function C(_, y) {
        var x = s[_];
        R(x.userComplete) && x.userComplete(y), x.terminate(), delete s[_];
      }
      function E() {
        throw new Error("Not implemented.");
      }
      function I(_) {
        if (typeof _ != "object" || _ === null) return _;
        var y, x = Array.isArray(_) ? [] : {};
        for (y in _) x[y] = I(_[y]);
        return x;
      }
      function M(_, y) {
        return function() {
          _.apply(y, arguments);
        };
      }
      function R(_) {
        return typeof _ == "function";
      }
      return u.parse = function(_, y) {
        var x = (y = y || {}).dynamicTyping || !1;
        if (R(x) && (y.dynamicTypingFunction = x, x = {}), y.dynamicTyping = x, y.transform = !!R(y.transform) && y.transform, !y.worker || !u.WORKERS_SUPPORTED) return x = null, u.NODE_STREAM_INPUT, typeof _ == "string" ? (_ = ((S) => S.charCodeAt(0) !== 65279 ? S : S.slice(1))(_), x = new (y.download ? d : f)(y)) : _.readable === !0 && R(_.read) && R(_.on) ? x = new m(y) : (r.File && _ instanceof File || _ instanceof Object) && (x = new p(y)), x.stream(_);
        (x = (() => {
          var S;
          return !!u.WORKERS_SUPPORTED && (S = (() => {
            var T = r.URL || r.webkitURL || null, A = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", A, ")();"], { type: "text/javascript" })));
          })(), (S = new r.Worker(S)).onmessage = b, S.id = a++, s[S.id] = S);
        })()).userStep = y.step, x.userChunk = y.chunk, x.userComplete = y.complete, x.userError = y.error, y.step = R(y.step), y.chunk = R(y.chunk), y.complete = R(y.complete), y.error = R(y.error), delete y.worker, x.postMessage({ input: _, config: y, workerId: x.id });
      }, u.unparse = function(_, y) {
        var x = !1, S = !0, T = ",", A = `\r
`, F = '"', G = F + F, Z = !1, B = null, z = !1, O = ((() => {
          if (typeof y == "object") {
            if (typeof y.delimiter != "string" || u.BAD_DELIMITERS.filter(function(V) {
              return y.delimiter.indexOf(V) !== -1;
            }).length || (T = y.delimiter), typeof y.quotes != "boolean" && typeof y.quotes != "function" && !Array.isArray(y.quotes) || (x = y.quotes), typeof y.skipEmptyLines != "boolean" && typeof y.skipEmptyLines != "string" || (Z = y.skipEmptyLines), typeof y.newline == "string" && (A = y.newline), typeof y.quoteChar == "string" && (F = y.quoteChar), typeof y.header == "boolean" && (S = y.header), Array.isArray(y.columns)) {
              if (y.columns.length === 0) throw new Error("Option columns is empty");
              B = y.columns;
            }
            y.escapeChar !== void 0 && (G = y.escapeChar + F), y.escapeFormulae instanceof RegExp ? z = y.escapeFormulae : typeof y.escapeFormulae == "boolean" && y.escapeFormulae && (z = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(v(F), "g"));
        if (typeof _ == "string" && (_ = JSON.parse(_)), Array.isArray(_)) {
          if (!_.length || Array.isArray(_[0])) return k(null, _, Z);
          if (typeof _[0] == "object") return k(B || Object.keys(_[0]), _, Z);
        } else if (typeof _ == "object") return typeof _.data == "string" && (_.data = JSON.parse(_.data)), Array.isArray(_.data) && (_.fields || (_.fields = _.meta && _.meta.fields || B), _.fields || (_.fields = Array.isArray(_.data[0]) ? _.fields : typeof _.data[0] == "object" ? Object.keys(_.data[0]) : []), Array.isArray(_.data[0]) || typeof _.data[0] == "object" || (_.data = [_.data])), k(_.fields || [], _.data || [], Z);
        throw new Error("Unable to serialize unrecognized input");
        function k(V, $, se) {
          var te = "", ue = (typeof V == "string" && (V = JSON.parse(V)), typeof $ == "string" && ($ = JSON.parse($)), Array.isArray(V) && 0 < V.length), le = !Array.isArray($[0]);
          if (ue && S) {
            for (var q = 0; q < V.length; q++) 0 < q && (te += T), te += N(V[q], q);
            0 < $.length && (te += A);
          }
          for (var ee = 0; ee < $.length; ee++) {
            var ge = (ue ? V : $[ee]).length, J = !1, he = ue ? Object.keys($[ee]).length === 0 : $[ee].length === 0;
            if (se && !ue && (J = se === "greedy" ? $[ee].join("").trim() === "" : $[ee].length === 1 && $[ee][0].length === 0), se === "greedy" && ue) {
              for (var we = [], H = 0; H < ge; H++) {
                var K = le ? V[H] : H;
                we.push($[ee][K]);
              }
              J = we.join("").trim() === "";
            }
            if (!J) {
              for (var Q = 0; Q < ge; Q++) {
                0 < Q && !he && (te += T);
                var Ee = ue && le ? V[Q] : Q;
                te += N($[ee][Ee], Q);
              }
              ee < $.length - 1 && (!se || 0 < ge && !he) && (te += A);
            }
          }
          return te;
        }
        function N(V, $) {
          var se, te;
          return V == null ? "" : V.constructor === Date ? JSON.stringify(V).slice(1, 25) : (te = !1, z && typeof V == "string" && z.test(V) && (V = "'" + V, te = !0), se = V.toString().replace(O, G), (te = te || x === !0 || typeof x == "function" && x(V, $) || Array.isArray(x) && x[$] || ((ue, le) => {
            for (var q = 0; q < le.length; q++) if (-1 < ue.indexOf(le[q])) return !0;
            return !1;
          })(se, u.BAD_DELIMITERS) || -1 < se.indexOf(T) || se.charAt(0) === " " || se.charAt(se.length - 1) === " ") ? F + se + F : se);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = w, u.ParserHandle = h, u.NetworkStreamer = d, u.FileStreamer = p, u.StringStreamer = f, u.ReadableStreamStreamer = m, r.jQuery && ((o = r.jQuery).fn.parse = function(_) {
        var y = _.config || {}, x = [];
        return this.each(function(A) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var F = 0; F < this.files.length; F++) x.push({ file: this.files[F], inputElem: this, instanceConfig: o.extend({}, y) });
        }), S(), this;
        function S() {
          if (x.length === 0) R(_.complete) && _.complete();
          else {
            var A, F, G, Z, B = x[0];
            if (R(_.before)) {
              var z = _.before(B.file, B.inputElem);
              if (typeof z == "object") {
                if (z.action === "abort") return A = "AbortError", F = B.file, G = B.inputElem, Z = z.reason, void (R(_.error) && _.error({ name: A }, F, G, Z));
                if (z.action === "skip") return void T();
                typeof z.config == "object" && (B.instanceConfig = o.extend(B.instanceConfig, z.config));
              } else if (z === "skip") return void T();
            }
            var O = B.instanceConfig.complete;
            B.instanceConfig.complete = function(k) {
              R(O) && O(k, B.file, B.inputElem), T();
            }, u.parse(B.file, B.instanceConfig);
          }
        }
        function T() {
          x.splice(0, 1), S();
        }
      }), l && (r.onmessage = function(_) {
        _ = _.data, u.WORKER_ID === void 0 && _ && (u.WORKER_ID = _.workerId), typeof _.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(_.input, _.config), finished: !0 }) : (r.File && _.input instanceof File || _.input instanceof Object) && (_ = u.parse(_.input, _.config)) && r.postMessage({ workerId: u.WORKER_ID, results: _, finished: !0 });
      }), (d.prototype = Object.create(c.prototype)).constructor = d, (p.prototype = Object.create(c.prototype)).constructor = p, (f.prototype = Object.create(f.prototype)).constructor = f, (m.prototype = Object.create(c.prototype)).constructor = m, u;
    });
  }(Ln)), Ln.exports;
}
var Nv = kv();
const Av = /* @__PURE__ */ Fv(Nv);
function Dv({
  file: e,
  onCompleted: t
}) {
  Av.parse(e, {
    skipEmptyLines: !0,
    header: !0,
    complete: t
  });
}
function Lv({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ P("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ P("title", {
    id: t
  }, e) : null, /* @__PURE__ */ P("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Vv = /* @__PURE__ */ de(Lv);
function Hv({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = wt(), { sheets: i } = at();
  return /* @__PURE__ */ g(
    Qm,
    {
      tabs: i.map((l) => ({
        label: l.label + ` (${t[l.id]})`,
        value: l.id,
        icon: o.some((s) => s.sheetId === l.id) ? /* @__PURE__ */ g(Vv, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function zv({ onBackToMapping: e }) {
  const { t } = ye(), [n, r] = U(!1);
  return /* @__PURE__ */ g(me, { children: [
    /* @__PURE__ */ g(
      He,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ g(
      ro,
      {
        variant: "danger",
        onConfirm: e,
        open: n,
        setOpen: r,
        title: t("importer.backToMappingConfirmation.title"),
        subTitle: t("importer.backToMappingConfirmation.subTitle"),
        confirmationText: t(
          "importer.backToMappingConfirmation.confirmationText"
        ),
        cancelText: t("importer.backToMappingConfirmation.cancelText")
      }
    )
  ] });
}
function Bv({ importerRequirements: e }) {
  const { t } = ye();
  return /* @__PURE__ */ g("div", { className: "h-full w-full space-y-5 overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ g("div", { className: "me-3", children: [
      /* @__PURE__ */ g("div", { className: "my-3 border-b border-gray-200 pb-4 text-sm font-light uppercase", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ g("div", { className: "mt-4", children: r.map((i) => /* @__PURE__ */ g(
        "div",
        {
          className: "my-3 flex justify-between",
          children: [
            /* @__PURE__ */ g("div", { className: "text-xs", children: i.columnLabel }),
            /* @__PURE__ */ g("div", { className: "text-xs font-light", children: /* @__PURE__ */ g(
              Dt,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ g(Gp, { className: "size-5 text-gray-500" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function jv({ importerRequirements: e }) {
  const { t } = ye();
  return /* @__PURE__ */ g("div", { className: "flex h-full flex-col space-y-5", children: [
    /* @__PURE__ */ g("div", { className: "me-3", children: /* @__PURE__ */ g(jo, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ g("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ g(Bv, { importerRequirements: e }) })
  ] });
}
function Uv({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = at(), { t: i, tHtml: l } = ye(), s = D(null), [a, u] = U(!1), c = Nm.concat(
    (r == null ? void 0 : r.map((m) => m.mimeType)) ?? []
  ), d = (m, h) => {
    c.includes(m.type) && m.size <= h && e(m);
  }, p = (m) => {
    var v;
    const h = m.target;
    (v = h.files) != null && v.length && d(h.files[0], n);
  }, f = (m) => {
    var h;
    m.preventDefault(), u(!1), (h = m.dataTransfer) != null && h.files.length && d(m.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ g(Vl, { variant: "muted", withPadding: !1, className: "h-full", children: /* @__PURE__ */ g(
    "div",
    {
      className: `flex h-full flex-col p-5 transition-colors ${a ? "bg-hello-csv-muted-light" : "bg-hello-csv-muted"}`,
      onClick: () => {
        var m;
        return (m = s.current) == null ? void 0 : m.click();
      },
      onDragOver: (m) => {
        m.preventDefault(), u(!0);
      },
      onDragEnter: () => u(!0),
      onDragLeave: () => u(!1),
      onDrop: (m) => f(m),
      children: [
        /* @__PURE__ */ g("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
          /* @__PURE__ */ g(Hp, { className: "text-hello-csv-primary h-12 w-12" }),
          /* @__PURE__ */ g("p", { className: "mt-3 text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ g("div", { className: "mt-3 text-sm text-gray-500", children: [
            l("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ g("b", { children: Dn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((m) => m.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ g("div", { className: "mt-3", children: /* @__PURE__ */ g(He, { children: i("uploader.browseFiles") }) }),
          o && /* @__PURE__ */ g("div", { className: "mt-3 text-sm", children: /* @__PURE__ */ g(
            "p",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": i("uploader.enterManually"),
              onClick: (m) => {
                m.stopPropagation(), t == null || t();
              },
              className: "text-hello-csv-primary hover:text-hello-csv-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none",
              children: i("uploader.enterManually")
            }
          ) })
        ] }),
        /* @__PURE__ */ g(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: s,
            type: "file",
            accept: c.join(","),
            className: "sr-only",
            onChange: (m) => p(m)
          }
        )
      ]
    }
  ) });
}
function Wv({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = at(), r = bv(n), { t: o } = ye();
  return /* @__PURE__ */ g("div", { className: "flex h-full flex-col space-y-4", children: [
    /* @__PURE__ */ g("div", { className: "flex-none text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ g("div", { className: "flex-auto md:min-h-0", children: /* @__PURE__ */ g("div", { className: "flex h-full flex-col-reverse gap-5 md:flex-row", children: [
      /* @__PURE__ */ g("div", { className: "h-full flex-1 lg:flex-1", children: /* @__PURE__ */ g(jv, { importerRequirements: r }) }),
      /* @__PURE__ */ g("div", { className: "flex-1 lg:flex-2", children: /* @__PURE__ */ g(
        Uv,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
function Gv({
  onComplete: e,
  sheets: t,
  customFileLoaders: n,
  onDataColumnsMapped: r,
  preventUploadOnValidationErrors: o,
  customSuggestedMapper: i
}) {
  const { t: l } = ye(), s = D(!0), a = D(null), u = wt(), c = vh(), d = Me(), {
    mode: p,
    currentSheetId: f,
    sheetData: m,
    columnMappings: h,
    parsedFile: v,
    validationErrors: w
  } = u;
  oe(() => {
    var k;
    if (s.current) {
      s.current = !1;
      return;
    }
    (k = a.current) == null || k.scrollIntoView({ behavior: "smooth" });
  }, [p]);
  const b = m.find(
    (k) => k.sheetId === f
  ), C = W(() => Object.fromEntries(
    m.map((k) => [k.sheetId, k.rows.length])
  ), [m]), E = t.find(
    (k) => k.id === f
  ), I = Ig(t), R = (typeof o == "function" ? (o == null ? void 0 : o(w)) ?? !1 : o ?? !1) && w.length > 0;
  function _(k) {
    Cv(k, n).then((N) => {
      Dv({
        file: N,
        onCompleted: async (V) => {
          const $ = V.meta.fields, se = i != null ? await i(t, $) : Ug(t, $);
          c({
            type: "FILE_PARSED",
            payload: { parsed: V, rowFile: k }
          }), c({
            type: "COLUMN_MAPPING_CHANGED",
            payload: {
              mappings: se
            }
          });
        }
      });
    });
  }
  function y() {
    c({
      type: "ENTER_DATA_MANUALLY",
      payload: {
        amountOfEmptyRowsToAdd: km
      }
    });
  }
  function x(k) {
    c({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: k }
    });
  }
  async function S() {
    const k = zg(t, h ?? [], v), N = r != null ? await r(k) : k;
    c({ type: "DATA_MAPPED", payload: { mappedData: N } });
  }
  function T(k) {
    c({ type: "CELL_CHANGED", payload: k });
  }
  function A(k) {
    c({ type: "REMOVE_ROWS", payload: k });
  }
  function F() {
    c({ type: "ADD_EMPTY_ROW" });
  }
  function G() {
    c({ type: "RESET" });
  }
  async function Z() {
    c({ type: "PROGRESS", payload: { progress: 0 } }), c({ type: "SUBMIT" });
    try {
      const k = so(
        t,
        m.map((V) => ({ ...V, rows: Sg(V) }))
      ), N = await e(
        { ...u, sheetData: k },
        (V) => {
          c({ type: "PROGRESS", payload: { progress: V } });
        }
      );
      await ol(400), c({ type: "PROGRESS", payload: { progress: 100 } }), await ol(200), c({
        type: "COMPLETED",
        payload: { importStatistics: N ?? void 0 }
      });
    } catch {
      c({ type: "FAILED" });
    }
  }
  function B() {
    c({ type: "PREVIEW" });
  }
  function z() {
    c({ type: "UPLOAD" });
  }
  function O() {
    c({ type: "MAPPING" });
  }
  return /* @__PURE__ */ g(Ov, { children: /* @__PURE__ */ g(
    jm,
    {
      ref: a,
      withFullHeight: p === "submit" || p === "failed" || p === "completed",
      children: [
        p === "upload" && /* @__PURE__ */ g(
          Wv,
          {
            onFileUploaded: _,
            onEnterDataManually: y
          }
        ),
        p === "mapping" && /* @__PURE__ */ g(
          _h,
          {
            onMappingsChanged: x,
            onMappingsSet: S,
            onBack: z
          }
        ),
        p === "preview" && // TODO: Move these to separate component in future PR
        /* @__PURE__ */ g("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ g("div", { className: "flex-none", children: /* @__PURE__ */ g(
            Hv,
            {
              idPrefix: d,
              sheetCountDict: C,
              onSheetChange: (k) => c({ type: "SHEET_CHANGED", payload: { sheetId: k } })
            }
          ) }),
          /* @__PURE__ */ g(
            "div",
            {
              className: "flex-1 overflow-auto",
              role: "tabpanel",
              id: `${d}-tabpanel-${f}`,
              "aria-labelledby": `${d}-tab-${f}`,
              tabIndex: 0,
              children: /* @__PURE__ */ g(
                wv,
                {
                  data: b,
                  sheetDefinition: E,
                  sheetValidationErrors: w.filter(
                    (k) => k.sheetId === (E == null ? void 0 : E.id)
                  ),
                  setRowData: T,
                  removeRows: A,
                  addEmptyRow: F,
                  resetState: G,
                  enumLabelDict: I
                }
              )
            }
          ),
          /* @__PURE__ */ g("div", { className: "flex-none", children: b.rows.length > 0 && /* @__PURE__ */ g("div", { className: "mt-5 flex justify-between", children: [
            /* @__PURE__ */ g("div", { children: h != null && /* @__PURE__ */ g(zv, { onBackToMapping: O }) }),
            /* @__PURE__ */ g(
              Dt,
              {
                tooltipText: l("importer.uploadBlocked"),
                hidden: !R,
                children: /* @__PURE__ */ g(He, { onClick: Z, disabled: R, children: l("importer.upload") })
              }
            )
          ] }) })
        ] }),
        (p === "submit" || p === "failed" || p === "completed") && /* @__PURE__ */ g(
          Mv,
          {
            onRetry: Z,
            onBackToPreview: B,
            resetState: G,
            enumLabelDict: I
          }
        )
      ]
    }
  ) });
}
function qv(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1
  };
  return /* @__PURE__ */ g(Tm, { importerDefintion: t, children: /* @__PURE__ */ g(
    hh,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      children: /* @__PURE__ */ g(Pm, { children: /* @__PURE__ */ g(Gv, { ...t }) })
    }
  ) });
}
function Zv(e, t) {
  zt(P(qv, t), e);
}
export {
  qv as default,
  Zv as renderImporter
};
