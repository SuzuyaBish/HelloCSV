var da = Object.defineProperty;
var fa = (e, t, n) => t in e ? da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ke = (e, t, n) => fa(e, typeof t != "symbol" ? t + "" : t, n);
import { options as Se, Component as _t, createElement as P, Fragment as we, toChildArray as ct, render as ln, createRef as Hn, createContext as fe, cloneElement as pa, hydrate as ma, h as ga } from "preact";
var ha = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var l, s, a = t;
  if ("ref" in a) for (s in a = {}, t) s == "ref" ? l = t[s] : a[s] = t[s];
  var u = { type: e, props: a, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ha, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (l = e.defaultProps)) for (s in l) a[s] === void 0 && (a[s] = l[s]);
  return Se.vnode && Se.vnode(u), u;
}
var rt, de, lr, No, Lt = 0, Hi = [], he = Se, Ao = he.__b, ko = he.__r, Do = he.diffed, Lo = he.__c, Vo = he.unmount, Ho = he.__;
function Rt(e, t) {
  he.__h && he.__h(de, e, Lt || t), Lt = 0;
  var n = de.__H || (de.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function W(e) {
  return Lt = 1, ot(zi, e);
}
function ot(e, t, n) {
  var r = Rt(rt++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : zi(void 0, t), function(s) {
    var a = r.__N ? r.__N[0] : r.__[0], u = r.t(a, s);
    a !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = de, !de.u)) {
    var o = function(s, a, u) {
      if (!r.__c.__H) return !0;
      var c = r.__c.__H.__.filter(function(g) {
        return !!g.__c;
      });
      if (c.every(function(g) {
        return !g.__N;
      })) return !i || i.call(this, s, a, u);
      var p = r.__c.props !== s;
      return c.forEach(function(g) {
        if (g.__N) {
          var d = g.__[0];
          g.__ = g.__N, g.__N = void 0, d !== g.__[0] && (p = !0);
        }
      }), i && i.call(this, s, a, u) || p;
    };
    de.u = !0;
    var i = de.shouldComponentUpdate, l = de.componentWillUpdate;
    de.componentWillUpdate = function(s, a, u) {
      if (this.__e) {
        var c = i;
        i = void 0, o(s, a, u), i = c;
      }
      l && l.call(this, s, a, u);
    }, de.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function re(e, t) {
  var n = Rt(rt++, 3);
  !he.__s && no(n.__H, t) && (n.__ = e, n.i = t, de.__H.__h.push(n));
}
function Xe(e, t) {
  var n = Rt(rt++, 4);
  !he.__s && no(n.__H, t) && (n.__ = e, n.i = t, de.__h.push(n));
}
function D(e) {
  return Lt = 5, G(function() {
    return { current: e };
  }, []);
}
function eo(e, t, n) {
  Lt = 6, Xe(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function G(e, t) {
  var n = Rt(rt++, 7);
  return no(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function oe(e, t) {
  return Lt = 8, G(function() {
    return e;
  }, t);
}
function se(e) {
  var t = de.context[e.__c], n = Rt(rt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(de)), t.props.value) : e.__;
}
function to(e, t) {
  he.useDebugValue && he.useDebugValue(t ? t(e) : e);
}
function va(e) {
  var t = Rt(rt++, 10), n = W();
  return t.__ = e, de.componentDidCatch || (de.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Oe() {
  var e = Rt(rt++, 11);
  if (!e.__) {
    for (var t = de.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function wa() {
  for (var e; e = Hi.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Tn), e.__H.__h.forEach(Er), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], he.__e(t, e.__v);
  }
}
he.__b = function(e) {
  de = null, Ao && Ao(e);
}, he.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ho && Ho(e, t);
}, he.__r = function(e) {
  ko && ko(e), rt = 0;
  var t = (de = e.__c).__H;
  t && (lr === de ? (t.__h = [], de.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(Tn), t.__h.forEach(Er), t.__h = [], rt = 0)), lr = de;
}, he.diffed = function(e) {
  Do && Do(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Hi.push(t) !== 1 && No === he.requestAnimationFrame || ((No = he.requestAnimationFrame) || ya)(wa)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), lr = de = null;
}, he.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Tn), n.__h = n.__h.filter(function(r) {
        return !r.__ || Er(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], he.__e(r, n.__v);
    }
  }), Lo && Lo(e, t);
}, he.unmount = function(e) {
  Vo && Vo(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Tn(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && he.__e(t, n.__v));
};
var zo = typeof requestAnimationFrame == "function";
function ya(e) {
  var t, n = function() {
    clearTimeout(r), zo && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  zo && (t = requestAnimationFrame(n));
}
function Tn(e) {
  var t = de, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), de = t;
}
function Er(e) {
  var t = de;
  e.__c = e.__(), de = t;
}
function no(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function zi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Bi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ba() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Bi(e)) && (r && (r += " "), r += t);
  return r;
}
const Bo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, jo = ba, $t = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return jo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, l = Object.keys(o).map((u) => {
    const c = n == null ? void 0 : n[u], p = i == null ? void 0 : i[u];
    if (c === null) return null;
    const g = Bo(c) || Bo(p);
    return o[u][g];
  }), s = n && Object.entries(n).reduce((u, c) => {
    let [p, g] = c;
    return g === void 0 || (u[p] = g), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: p, className: g, ...d } = c;
    return Object.entries(d).every((m) => {
      let [h, w] = m;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...s
      }[h]) : {
        ...i,
        ...s
      }[h] === w;
    }) ? [
      ...u,
      p,
      g
    ] : u;
  }, []);
  return jo(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, xa = $t(
  "text-center inline-block font-semibold px-3 py-2 rounded-md text-sm",
  {
    variants: {
      variant: {
        primary: "shadow-xs bg-hello-csv-primary text-white",
        secondary: "bg-white text-hello-csv-primary ring-1 shadow-xs ring-bg-hello-csv-primary ring-inset",
        tertiary: "bg-white text-gray-900 ring-1 shadow-xs ring-hello-csv-tertiary ring-inset",
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
  const i = xa({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ f(
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
function ji(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Rr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function zn(e, t) {
  var n = t(), r = W({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Xe(function() {
    o.__ = n, o.u = t, sr(o) && i({ t: o });
  }, [e, n, t]), re(function() {
    return sr(o) && i({ t: o }), e(function() {
      sr(o) && i({ t: o });
    });
  }, [e]), n;
}
function sr(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function ro(e) {
  e();
}
function oo(e) {
  return e;
}
function io() {
  return [!1, ro];
}
var lo = Xe;
function Mn(e, t) {
  this.props = e, this.context = t;
}
function Wi(e, t) {
  function n(o) {
    var i = this.props.ref, l = i == o.ref;
    return !l && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !l : Rr(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, P(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Mn.prototype = new _t()).isPureReactComponent = !0, Mn.prototype.shouldComponentUpdate = function(e, t) {
  return Rr(this.props, e) || Rr(this.state, t);
};
var Wo = Se.__b;
Se.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Wo && Wo(e);
};
var _a = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ce(e) {
  function t(n) {
    var r = ji({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = _a, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Go = function(e, t) {
  return e == null ? null : ct(ct(e).map(t));
}, Gi = { map: Go, forEach: Go, count: function(e) {
  return e ? ct(e).length : 0;
}, only: function(e) {
  var t = ct(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ct }, Ca = Se.__e;
Se.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Ca(e, t, n, r);
};
var Uo = Se.unmount;
function Ui(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = ji({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Ui(r, t, n);
  })), e;
}
function qi(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return qi(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function en() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Ki(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Yi(e) {
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
function Nt() {
  this.i = null, this.l = null;
}
Se.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Uo && Uo(e);
}, (en.prototype = new _t()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Ki(r.__v), i = !1, l = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = l;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = qi(a, a.__c.__P, a.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.o.pop(); ) u.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
}, en.prototype.componentWillUnmount = function() {
  this.o = [];
}, en.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Ui(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && P(we, null, e.fallback);
  return o && (o.__u &= -33), [P(we, null, t.__a ? null : e.children), o];
};
var qo = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Sa(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Ea(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    ln(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), ln(P(Sa, { context: t.context }, e.__v), t.v);
}
function pn(e, t) {
  var n = P(Ea, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Nt.prototype = new _t()).__a = function(e) {
  var t = this, n = Ki(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), qo(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Nt.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ct(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Nt.prototype.componentDidUpdate = Nt.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    qo(e, n, t);
  });
};
var Xi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ra = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $a = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ta = /[A-Z0-9]/g, Ia = typeof document < "u", Oa = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Zi(e, t, n) {
  return t.__k == null && (t.textContent = ""), ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Qi(e, t, n) {
  return ma(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
_t.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(_t.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Ko = Se.event;
function Fa() {
}
function Ma() {
  return this.cancelBubble;
}
function Pa() {
  return this.defaultPrevented;
}
Se.event = function(e) {
  return Ko && (e = Ko(e)), e.persist = Fa, e.isPropagationStopped = Ma, e.isDefaultPrevented = Pa, e.nativeEvent = e;
};
var so, Na = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Yo = Se.vnode;
Se.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var l in n) {
      var s = n[l];
      if (!(l === "value" && "defaultValue" in n && s == null || Ia && l === "children" && r === "noscript" || l === "class" || l === "className")) {
        var a = l.toLowerCase();
        l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Oa(n.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : $a.test(l) && (l = a) : a = l = "oninput" : i && Ra.test(l) ? l = l.replace(Ta, "-$&").toLowerCase() : s === null && (s = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ct(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ct(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Na)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Xi, Yo && Yo(e);
};
var Xo = Se.__r;
Se.__r = function(e) {
  Xo && Xo(e), so = e.__c;
};
var Zo = Se.diffed;
Se.diffed = function(e) {
  Zo && Zo(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), so = null;
};
var Ji = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return so.__n[e.__c].props.value;
}, useCallback: oe, useContext: se, useDebugValue: to, useDeferredValue: oo, useEffect: re, useId: Oe, useImperativeHandle: eo, useInsertionEffect: lo, useLayoutEffect: Xe, useMemo: G, useReducer: ot, useRef: D, useState: W, useSyncExternalStore: zn, useTransition: io } } }, Aa = "18.3.1";
function el(e) {
  return P.bind(null, e);
}
function Bt(e) {
  return !!e && e.$$typeof === Xi;
}
function tl(e) {
  return Bt(e) && e.type === we;
}
function nl(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function ao(e) {
  return Bt(e) ? pa.apply(null, arguments) : e;
}
function rl(e) {
  return !!e.__k && (ln(null, e), !0);
}
function ol(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var il = function(e, t) {
  return e(t);
}, De = function(e, t) {
  return e(t);
}, ll = we, sl = Bt, L = { useState: W, useId: Oe, useReducer: ot, useEffect: re, useLayoutEffect: Xe, useInsertionEffect: lo, useTransition: io, useDeferredValue: oo, useSyncExternalStore: zn, startTransition: ro, useRef: D, useImperativeHandle: eo, useMemo: G, useCallback: oe, useContext: se, useDebugValue: to, version: "18.3.1", Children: Gi, render: Zi, hydrate: Qi, unmountComponentAtNode: rl, createPortal: pn, createElement: P, createContext: fe, createFactory: el, cloneElement: ao, createRef: Hn, Fragment: we, isValidElement: Bt, isElement: sl, isFragment: tl, isMemo: nl, findDOMNode: ol, Component: _t, PureComponent: Mn, memo: Wi, forwardRef: ce, flushSync: De, unstable_batchedUpdates: il, StrictMode: ll, Suspense: en, SuspenseList: Nt, lazy: Yi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ji };
const $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Gi,
  Component: _t,
  Fragment: we,
  PureComponent: Mn,
  StrictMode: ll,
  Suspense: en,
  SuspenseList: Nt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ji,
  cloneElement: ao,
  createContext: fe,
  createElement: P,
  createFactory: el,
  createPortal: pn,
  createRef: Hn,
  default: L,
  findDOMNode: ol,
  flushSync: De,
  forwardRef: ce,
  hydrate: Qi,
  isElement: sl,
  isFragment: tl,
  isMemo: nl,
  isValidElement: Bt,
  lazy: Yi,
  memo: Wi,
  render: Zi,
  startTransition: ro,
  unmountComponentAtNode: rl,
  unstable_batchedUpdates: il,
  useCallback: oe,
  useContext: se,
  useDebugValue: to,
  useDeferredValue: oo,
  useEffect: re,
  useErrorBoundary: va,
  useId: Oe,
  useImperativeHandle: eo,
  useInsertionEffect: lo,
  useLayoutEffect: Xe,
  useMemo: G,
  useReducer: ot,
  useRef: D,
  useState: W,
  useSyncExternalStore: zn,
  useTransition: io,
  version: Aa
}, Symbol.toStringTag, { value: "Module" })), ka = $t("overflow-hidden rounded-md border border-gray-200", {
  variants: {
    variant: {
      default: "bg-white",
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
}), al = ce(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = ka({ variant: n, withPadding: r });
    return /* @__PURE__ */ f("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function ul({ checked: e, setChecked: t, label: n }) {
  const r = Oe();
  return /* @__PURE__ */ f("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ f("div", { className: "flex h-6 shrink-0 items-center", children: /* @__PURE__ */ f("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ f(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "checked:border-hello-csv-primary checked:bg-hello-csv-primary indeterminate:border-hello-csv-primary indeterminate:bg-hello-csv-primary focus-visible:outline-hello-csv-hello-csv-primary col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ f(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",
          children: [
            /* @__PURE__ */ f(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ f(
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
    n && /* @__PURE__ */ f("div", { className: "text-sm/6", children: /* @__PURE__ */ f("label", { htmlFor: r, className: "font-medium text-gray-900", children: n }) })
  ] });
}
let Da = !1;
function uo() {
  return Da;
}
const cl = typeof document < "u" ? L.useLayoutEffect : () => {
};
function La(e) {
  const t = D(null);
  return cl(() => {
    t.current = e;
  }, [
    e
  ]), oe((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const gt = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, yt = (e) => e && "window" in e && e.window === e ? e : gt(e).defaultView || window;
function Va(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Ha(e) {
  return Va(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function dl(e, t) {
  if (!uo()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Ha(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Tr = (e = document) => {
  var t;
  if (!uo()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function fl(e) {
  return uo() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function za(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Ba(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function pl(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const ja = pl(function() {
  return Ba(/^Mac/i);
}), Wa = pl(function() {
  return za(/Android/i);
});
function ml() {
  let e = D(/* @__PURE__ */ new Map()), t = oe((o, i, l, s) => {
    let a = s != null && s.once ? (...u) => {
      e.current.delete(l), l(...u);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: o,
      fn: a,
      options: s
    }), o.addEventListener(i, a, s);
  }, []), n = oe((o, i, l, s) => {
    var a;
    let u = ((a = e.current.get(l)) === null || a === void 0 ? void 0 : a.fn) || l;
    o.removeEventListener(i, u, s), e.current.delete(l);
  }, []), r = oe(() => {
    e.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return re(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Ga(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Wa() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function gl(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ua(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function hl(e) {
  let t = D({
    isFocused: !1,
    observer: null
  });
  cl(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = La((r) => {
    e == null || e(r);
  });
  return oe((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        if (t.current.isFocused = !1, o.disabled) {
          let s = gl(l);
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
let qa = !1, mn = null, Ir = /* @__PURE__ */ new Set(), tn = /* @__PURE__ */ new Map(), Ct = !1, Or = !1;
const Ka = {
  Tab: !0,
  Escape: !0
};
function co(e, t) {
  for (let n of Ir) n(e, t);
}
function Ya(e) {
  return !(e.metaKey || !ja() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Pn(e) {
  Ct = !0, Ya(e) && (mn = "keyboard", co("keyboard", e));
}
function kt(e) {
  mn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ct = !0, co("pointer", e));
}
function vl(e) {
  Ga(e) && (Ct = !0, mn = "virtual");
}
function wl(e) {
  e.target === window || e.target === document || qa || !e.isTrusted || (!Ct && !Or && (mn = "virtual", co("virtual", e)), Ct = !1, Or = !1);
}
function yl() {
  Ct = !1, Or = !0;
}
function Fr(e) {
  if (typeof window > "u" || tn.get(yt(e))) return;
  const t = yt(e), n = gt(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ct = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Pn, !0), n.addEventListener("keyup", Pn, !0), n.addEventListener("click", vl, !0), t.addEventListener("focus", wl, !0), t.addEventListener("blur", yl, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", kt, !0), n.addEventListener("pointermove", kt, !0), n.addEventListener("pointerup", kt, !0)), t.addEventListener("beforeunload", () => {
    bl(e);
  }, {
    once: !0
  }), tn.set(t, {
    focus: r
  });
}
const bl = (e, t) => {
  const n = yt(e), r = gt(e);
  t && r.removeEventListener("DOMContentLoaded", t), tn.has(n) && (n.HTMLElement.prototype.focus = tn.get(n).focus, r.removeEventListener("keydown", Pn, !0), r.removeEventListener("keyup", Pn, !0), r.removeEventListener("click", vl, !0), n.removeEventListener("focus", wl, !0), n.removeEventListener("blur", yl, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", kt, !0), r.removeEventListener("pointermove", kt, !0), r.removeEventListener("pointerup", kt, !0)), tn.delete(n));
};
function Xa(e) {
  const t = gt(e);
  let n;
  return t.readyState !== "loading" ? Fr(e) : (n = () => {
    Fr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => bl(e, n);
}
typeof document < "u" && Xa();
function xl() {
  return mn !== "pointer";
}
const Za = /* @__PURE__ */ new Set([
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
function Qa(e, t, n) {
  let r = gt(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? yt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? yt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? yt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? yt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Za.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof l && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof s && !Ka[n.key]);
}
function Ja(e, t, n) {
  Fr(), re(() => {
    let r = (o, i) => {
      Qa(!!(n != null && n.isTextInput), o, i) && e(xl());
    };
    return Ir.add(r), () => {
      Ir.delete(r);
    };
  }, t);
}
function eu(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = oe((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = hl(i), s = oe((a) => {
    const u = gt(a.target), c = u ? Tr(u) : Tr();
    a.target === a.currentTarget && c === fl(a.nativeEvent) && (n && n(a), o && o(!0), l(a));
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
function tu(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = D({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: s } = ml(), a = oe((p) => {
    p.currentTarget.contains(p.target) && i.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(p), o && o(!1));
  }, [
    n,
    o,
    i,
    s
  ]), u = hl(a), c = oe((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const g = gt(p.target), d = Tr(g);
    if (!i.current.isFocusWithin && d === fl(p.nativeEvent)) {
      r && r(p), o && o(!0), i.current.isFocusWithin = !0, u(p);
      let m = p.currentTarget;
      l(g, "focus", (h) => {
        if (i.current.isFocusWithin && !dl(m, h.target)) {
          let w = new g.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          Ua(w, m);
          let b = gl(w);
          a(b);
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
let Mr = !1, ar = 0;
function nu() {
  Mr = !0, setTimeout(() => {
    Mr = !1;
  }, 50);
}
function Qo(e) {
  e.pointerType === "touch" && nu();
}
function ru() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", Qo), ar++, () => {
      ar--, !(ar > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", Qo);
    };
}
function _l(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = W(!1), s = D({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  re(ru, []);
  let { addGlobalListener: a, removeAllGlobalListeners: u } = ml(), { hoverProps: c, triggerHoverEnd: p } = G(() => {
    let g = (h, w) => {
      if (s.pointerType = w, o || w === "touch" || s.isHovered || !h.currentTarget.contains(h.target)) return;
      s.isHovered = !0;
      let b = h.currentTarget;
      s.target = b, a(gt(h.target), "pointerover", (_) => {
        s.isHovered && s.target && !dl(s.target, _.target) && d(_, _.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: b,
        pointerType: w
      }), n && n(!0), l(!0);
    }, d = (h, w) => {
      let b = s.target;
      s.pointerType = "", s.target = null, !(w === "touch" || !s.isHovered || !b) && (s.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: b,
        pointerType: w
      }), n && n(!1), l(!1));
    }, m = {};
    return typeof PointerEvent < "u" && (m.onPointerEnter = (h) => {
      Mr && h.pointerType === "mouse" || g(h, h.pointerType);
    }, m.onPointerLeave = (h) => {
      !o && h.currentTarget.contains(h.target) && d(h, h.pointerType);
    }), {
      hoverProps: m,
      triggerHoverEnd: d
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
  return re(() => {
    o && p({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function Cl(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = D({
    isFocused: !1,
    isFocusVisible: t || xl()
  }), [i, l] = W(!1), [s, a] = W(() => o.current.isFocused && o.current.isFocusVisible), u = oe(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = oe((d) => {
    o.current.isFocused = d, l(d), u();
  }, [
    u
  ]);
  Ja((d) => {
    o.current.isFocusVisible = d, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = eu({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: g } = tu({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? g : p
  };
}
var ou = Object.defineProperty, iu = (e, t, n) => t in e ? ou(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ur = (e, t, n) => (iu(e, typeof t != "symbol" ? t + "" : t, n), n);
let lu = class {
  constructor() {
    ur(this, "current", this.detect()), ur(this, "handoffState", "pending"), ur(this, "currentId", 0);
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
}, xt = new lu();
function jt(e) {
  return xt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Bn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ke() {
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
    return Bn(() => {
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
    let r = Ke();
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
function Tt() {
  let [e] = W(Ke);
  return re(() => () => e.dispose(), [e]), e;
}
let ue = (e, t) => {
  xt.isServer ? re(e, t) : Xe(e, t);
};
function ht(e) {
  let t = D(e);
  return ue(() => {
    t.current = e;
  }, [e]), t;
}
let j = function(e) {
  let t = ht(e);
  return L.useCallback((...n) => t.current(...n), [t]);
};
function su(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function au(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function uu({ disabled: e = !1 } = {}) {
  let t = D(null), [n, r] = W(!1), o = Tt(), i = j(() => {
    t.current = null, r(!1), o.dispose();
  }), l = j((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = jt(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (u) => {
          if (t.current) {
            let c = su(u);
            r(au(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let cu = fe(void 0);
function fo() {
  return se(cu);
}
function Pr(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ae(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ae), r;
}
var Vt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Vt || {}), at = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(at || {});
function Ce() {
  let e = fu();
  return oe((t) => du({ mergeRefs: e, ...t }), [e]);
}
function du({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? pu;
  let a = Sl(t, e);
  if (i) return Cn(a, n, r, l, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...p } = a;
    if (c) return Cn(p, n, r, l, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...p } = a;
    return Ae(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Cn({ ...p, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return Cn(a, n, r, l, s);
}
function Cn(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = cr(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let p = {};
  if (t) {
    let g = !1, d = [];
    for (let [m, h] of Object.entries(t)) typeof h == "boolean" && (g = !0), h === !0 && d.push(m.replace(/([A-Z])/g, (w) => `-${w.toLowerCase()}`));
    if (g) {
      p["data-headlessui-state"] = d.join(" ");
      for (let m of d) p[`data-${m}`] = "";
    }
  }
  if (i === we && (Object.keys(st(a)).length > 0 || Object.keys(st(p)).length > 0)) if (!Bt(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(st(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(st(a)).concat(Object.keys(st(p))).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
  } else {
    let g = c.props, d = g == null ? void 0 : g.className, m = typeof d == "function" ? (...b) => Pr(d(...b), a.className) : Pr(d, a.className), h = m ? { className: m } : {}, w = Sl(c.props, st(cr(a, ["ref"])));
    for (let b in p) b in w && delete p[b];
    return ao(c, Object.assign({}, w, p, u, { ref: o(mu(c), u.ref) }, h));
  }
  return P(i, Object.assign({}, cr(a, ["ref"]), i !== we && u, i !== we && p), c);
}
function fu() {
  let e = D([]), t = oe((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function pu(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Sl(...e) {
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
function po(...e) {
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
  return Object.assign(ce(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function st(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function cr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function mu(e) {
  return L.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function gu(e, t, n) {
  let [r, o] = W(n), i = e !== void 0, l = D(i), s = D(!1), a = D(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !a.current && (a.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, j((u) => (i || o(u), t == null ? void 0 : t(u)))];
}
function hu(e) {
  let [t] = W(e);
  return t;
}
function El(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) $l(n, Rl(t, r), o);
  return n;
}
function Rl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function $l(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) $l(e, Rl(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : El(n, t, e);
}
let vu = "span";
var Ht = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ht || {});
function wu(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Ce()({ ourProps: i, theirProps: o, slot: {}, defaultTag: vu, name: "Hidden" });
}
let sn = xe(wu), yu = fe(null);
function bu({ children: e }) {
  let t = se(yu);
  if (!t) return L.createElement(L.Fragment, null, e);
  let { target: n } = t;
  return n ? pn(L.createElement(L.Fragment, null, e), n) : null;
}
function xu({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = W(null), s = Tt();
  return re(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), L.createElement(bu, null, L.createElement(_u, { setForm: l, formId: t }), El(e).map(([a, u]) => L.createElement(sn, { features: Ht.Hidden, ...st({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function _u({ setForm: e, formId: t }) {
  return re(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : L.createElement(sn, { features: Ht.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let Cu = fe(void 0);
function Tl() {
  return se(Cu);
}
function Su(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Eu(n) ? !1 : r;
}
function Eu(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Il = Symbol();
function Ru(e, t = !0) {
  return Object.assign(e, { [Il]: t });
}
function Pe(...e) {
  let t = D(e);
  re(() => {
    t.current = e;
  }, [e]);
  let n = j((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Il])) ? void 0 : n;
}
let jn = fe(null);
jn.displayName = "DescriptionContext";
function Ol() {
  let e = se(jn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ol), t;
  }
  return e;
}
function $u() {
  var e, t;
  return (t = (e = se(jn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function Tu() {
  let [e, t] = W([]);
  return [e.length > 0 ? e.join(" ") : void 0, G(() => function(n) {
    let r = j((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = G(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return L.createElement(jn.Provider, { value: o }, n.children);
  }, [t])];
}
let Iu = "p";
function Ou(e, t) {
  let n = Oe(), r = fo(), { id: o = `headlessui-description-${n}`, ...i } = e, l = Ol(), s = Pe(t);
  ue(() => l.register(o), [o, l.register]);
  let a = r || !1, u = G(() => ({ ...l.slot, disabled: a }), [l.slot, a]), c = { ref: s, ...l.props, id: o };
  return Ce()({ ourProps: c, theirProps: i, slot: u, defaultTag: Iu, name: l.name || "Description" });
}
let Fu = xe(Ou), Mu = Object.assign(Fu, {});
var Te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Te || {});
let Wn = fe(null);
Wn.displayName = "LabelContext";
function Fl() {
  let e = se(Wn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Fl), t;
  }
  return e;
}
function Gn(e) {
  var t, n, r;
  let o = (n = (t = se(Wn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Pu({ inherit: e = !1 } = {}) {
  let t = Gn(), [n, r] = W([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, G(() => function(i) {
    let l = j((a) => (r((u) => [...u, a]), () => r((u) => {
      let c = u.slice(), p = c.indexOf(a);
      return p !== -1 && c.splice(p, 1), c;
    }))), s = G(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return L.createElement(Wn.Provider, { value: s }, i.children);
  }, [r])];
}
let Nu = "label";
function Au(e, t) {
  var n;
  let r = Oe(), o = Fl(), i = Tl(), l = fo(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...c } = e, p = Pe(t);
  ue(() => o.register(s), [s, o.register]);
  let g = j((w) => {
    let b = w.currentTarget;
    if (b instanceof HTMLLabelElement && w.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(w), b instanceof HTMLLabelElement) {
      let _ = document.getElementById(b.htmlFor);
      if (_) {
        let C = _.getAttribute("disabled");
        if (C === "true" || C === "") return;
        let E = _.getAttribute("aria-disabled");
        if (E === "true" || E === "") return;
        (_ instanceof HTMLInputElement && (_.type === "radio" || _.type === "checkbox") || _.role === "radio" || _.role === "checkbox" || _.role === "switch") && _.click(), _.focus({ preventScroll: !0 });
      }
    }
  }), d = l || !1, m = G(() => ({ ...o.slot, disabled: d }), [o.slot, d]), h = { ref: p, ...o.props, id: s, htmlFor: a, onClick: g };
  return u && ("onClick" in h && (delete h.htmlFor, delete h.onClick), "onClick" in c && delete c.onClick), Ce()({ ourProps: h, theirProps: c, slot: m, defaultTag: a ? Nu : "div", name: o.name || "Label" });
}
let ku = xe(Au), Du = Object.assign(ku, {}), Lu = fe(() => {
});
function Vu({ value: e, children: t }) {
  return L.createElement(Lu.Provider, { value: e }, t);
}
function Pt(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var l, s, a, u;
    let c;
    n.key && ((l = n.debug) != null && l.call(n)) && (c = Date.now());
    const p = e();
    if (!(p.length !== r.length || p.some((m, h) => r[h] !== m)))
      return o;
    r = p;
    let d;
    if (n.key && ((s = n.debug) != null && s.call(n)) && (d = Date.now()), o = t(...p), n.key && ((a = n.debug) != null && a.call(n))) {
      const m = Math.round((Date.now() - c) * 100) / 100, h = Math.round((Date.now() - d) * 100) / 100, w = h / 16, b = (_, C) => {
        for (_ = String(_); _.length < C; )
          _ = " " + _;
        return _;
      };
      console.info(
        `%c⏱ ${b(h, 5)} /${b(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * w, 120)
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
function Jo(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Hu = (e, t) => Math.abs(e - t) <= 1, zu = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var Xt = { NODE_ENV: "production" };
const ei = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Bu = (e) => e, ju = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Wu = (e, t) => {
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
  if (o(ei(n)), !r.ResizeObserver)
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
      o(ei(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, ti = {
  passive: !0
}, ni = typeof window > "u" ? !0 : "onscrollend" in window, Gu = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && ni ? () => {
  } : zu(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (c) => () => {
    const { horizontal: p, isRtl: g } = e.options;
    o = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(o, c);
  }, s = l(!0), a = l(!1);
  a(), n.addEventListener("scroll", s, ti);
  const u = e.options.useScrollendEvent && ni;
  return u && n.addEventListener("scrollend", a, ti), () => {
    n.removeEventListener("scroll", s), u && n.removeEventListener("scrollend", a);
  };
}, Uu = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, qu = (e, {
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
class Ku {
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
        getItemKey: Bu,
        rangeExtractor: ju,
        onChange: () => {
        },
        measureElement: Uu,
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
    }, this.maybeNotify = Pt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: Xt.NODE_ENV !== "production",
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
    }, this.getMeasurementOptions = Pt(
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
    ), this.getMeasurements = Pt(
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
          const p = i(c), g = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), d = g ? g.end + this.options.gap : r + o, m = s.get(p), h = typeof m == "number" ? m : this.options.estimateSize(c), w = d + h, b = g ? g.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: d,
            size: h,
            end: w,
            key: p,
            lane: b
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: Xt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Pt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Yu({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: Xt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Pt(
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
        key: Xt.NODE_ENV !== "production",
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
    }, this.getVirtualItems = Pt(
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
        key: Xt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Jo(
          r[Ml(
            0,
            r.length - 1,
            (o) => Jo(r[o]).start,
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
          const [c] = u, p = this.getScrollOffset();
          Hu(c, p) || this.scrollToIndex(n, { align: s, behavior: o });
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
const Ml = (e, t, n, r) => {
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
function Yu({
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
  let l = Ml(
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
const ri = typeof document < "u" ? Xe : re;
function Xu(e) {
  const t = ot(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var l;
      i ? De(t) : t(), (l = e.onChange) == null || l.call(e, o, i);
    }
  }, [r] = W(
    () => new Ku(n)
  );
  return r.setOptions(n), ri(() => r._didMount(), []), ri(() => r._willUpdate()), r;
}
function Pl(e) {
  return Xu({
    observeElementRect: Wu,
    observeElementOffset: Gu,
    scrollToFn: qu,
    ...e
  });
}
function Zu(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Qu(e = Zu) {
  return oe((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Ju(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function oi(e, t = !1) {
  let [n, r] = ot(() => ({}), {}), o = G(() => Ju(e), [e, n]);
  return ue(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let ec = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function Nl(e, t) {
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
function Al(e) {
  return zn(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let tc = new ec(() => Nl(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Wt(e, t) {
  let n = tc.get(t), r = Oe(), o = Al(n);
  if (ue(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let Nr = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map();
function ii(e) {
  var t;
  let n = (t = nn.get(e)) != null ? t : 0;
  return nn.set(e, n + 1), n !== 0 ? () => li(e) : (Nr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => li(e));
}
function li(e) {
  var t;
  let n = (t = nn.get(e)) != null ? t : 1;
  if (n === 1 ? nn.delete(e) : nn.set(e, n - 1), n !== 1) return;
  let r = Nr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Nr.delete(e));
}
function kl(e, { allowed: t, disallowed: n } = {}) {
  let r = Wt(e, "inert-others");
  ue(() => {
    var o, i;
    if (!r) return;
    let l = Ke();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(ii(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let u = jt(a);
      if (!u) continue;
      let c = a.parentElement;
      for (; c && c !== u.body; ) {
        for (let p of c.children) s.some((g) => p.contains(g)) || l.add(ii(p));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function Dl(e, t, n) {
  let r = ht((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  re(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Ke();
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
let Nn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), nc = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var et = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(et || {}), Ar = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ar || {}), rc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(rc || {});
function oc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Nn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function ic(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(nc)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ll = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ll || {});
function lc(e, t = 0) {
  var n;
  return e === ((n = jt(e)) == null ? void 0 : n.body) ? !1 : Ae(t, { 0() {
    return e.matches(Nn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Nn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var sc = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(sc || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function nt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ac = ["textarea", "input"].join(",");
function uc(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ac)) != null ? n : !1;
}
function Vl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function rn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? Vl(e) : e : t & 64 ? ic(e) : oc(e);
  o.length > 0 && l.length > 1 && (l = l.filter((d) => !o.some((m) => m != null && "current" in m ? (m == null ? void 0 : m.current) === d : m === d))), r = r ?? i.activeElement;
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
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, p = l.length, g;
  do {
    if (c >= p || c + p <= 0) return 0;
    let d = a + c;
    if (t & 16) d = (d + p) % p;
    else {
      if (d < 0) return 3;
      if (d >= p) return 1;
    }
    g = l[d], g == null || g.focus(u), c += s;
  } while (g !== i.activeElement);
  return t & 6 && uc(g) && g.select(), 2;
}
function Hl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function cc() {
  return /Android/gi.test(window.navigator.userAgent);
}
function zl() {
  return Hl() || cc();
}
function Zt(e, t, n, r) {
  let o = ht(n);
  re(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Bl(e, t, n, r) {
  let o = ht(n);
  re(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const si = 30;
function jl(e, t, n) {
  let r = Wt(e, "outside-click"), o = ht(n), i = oe(function(a, u) {
    if (a.defaultPrevented) return;
    let c = u(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let p = function g(d) {
      return typeof d == "function" ? g(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let g of p) if (g !== null && (g.contains(c) || a.composed && a.composedPath().includes(g))) return;
    return !lc(c, Ll.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), l = D(null);
  Zt(r, "pointerdown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Zt(r, "mousedown", (a) => {
    var u, c;
    l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Zt(r, "click", (a) => {
    zl() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = D({ x: 0, y: 0 });
  Zt(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), Zt(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= si || Math.abs(u.y - s.current.y) >= si)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), Bl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function It(...e) {
  return G(() => jt(...e), [...e]);
}
function mo(e, t, n, r) {
  let o = ht(n);
  re(() => {
    e = e ?? window;
    function i(l) {
      o.current(l);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Wl(e) {
  let t = D({ value: "", selectionStart: null, selectionEnd: null });
  return mo(e, "blur", (n) => {
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
function dc(e, t) {
  return G(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function fc() {
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
function pc() {
  return Hl() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Ke();
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
function mc() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function gc(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let bt = Nl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Ke(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: gc(n) }, o = [pc(), fc(), mc()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
bt.subscribe(() => {
  let e = bt.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && bt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && bt.dispatch("TEARDOWN", n);
  }
});
function hc(e, t, n = () => ({ containers: [] })) {
  let r = Al(bt), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return ue(() => {
    if (!(!t || !e)) return bt.dispatch("PUSH", t, n), () => bt.dispatch("POP", t, n);
  }, [e, t]), i;
}
function Gl(e, t, n = () => [document.body]) {
  let r = Wt(e, "scroll-lock");
  hc(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function ai(e) {
  return [e.screenX, e.screenY];
}
function vc() {
  let e = D([-1, -1]);
  return { wasMoved(t) {
    let n = ai(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = ai(t);
  } };
}
function wc(e = 0) {
  let [t, n] = W(e), r = oe((a) => n(a), [t]), o = oe((a) => n((u) => u | a), [t]), i = oe((a) => (t & a) === a, [t]), l = oe((a) => n((u) => u & ~a), [n]), s = oe((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var yc = { NODE_ENV: "production" }, ui, ci;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((ui = process == null ? void 0 : yc) == null ? void 0 : ui.NODE_ENV) === "test" && typeof ((ci = Element == null ? void 0 : Element.prototype) == null ? void 0 : ci.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var bc = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(bc || {});
function Ul(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function ql(e, t, n, r) {
  let [o, i] = W(n), { hasFlag: l, addFlag: s, removeFlag: a } = wc(e && o ? 3 : 0), u = D(!1), c = D(!1), p = Tt();
  return ue(() => {
    var g;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (g = r == null ? void 0 : r.start) == null || g.call(r, n), xc(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (s(3), a(4)) : (s(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
      }, done() {
        var d;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, a(7), n || i(!1), (d = r == null ? void 0 : r.end) == null || d.call(r, n));
      } });
    }
  }, [e, n, t, p]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function xc(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Ke();
  return Cc(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(_c(e, r));
    });
  }), i.dispose;
}
function _c(e, t) {
  var n, r;
  let o = Ke();
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
function Cc(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function Sc(e, { container: t, accept: n, walk: r }) {
  let o = D(n), i = D(r);
  re(() => {
    o.current = n, i.current = r;
  }, [n, r]), ue(() => {
    if (!t || !e) return;
    let l = jt(t);
    if (!l) return;
    let s = o.current, a = i.current, u = Object.assign((p) => s(p), { acceptNode: s }), c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, i]);
}
function an(e, t) {
  let n = D([]), r = j(e);
  re(() => {
    let o = [...n.current];
    for (let [i, l] of t.entries()) if (n.current[i] !== l) {
      let s = r(t, o);
      return n.current = t, s;
    }
  }, [r, ...t]);
}
function Un() {
  return typeof window < "u";
}
function Gt(e) {
  return Kl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (Kl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Kl(e) {
  return Un() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function Fe(e) {
  return Un() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Ye(e) {
  return Un() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function di(e) {
  return !Un() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function gn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Be(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ec(e) {
  return ["table", "td", "th"].includes(Gt(e));
}
function qn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function go(e) {
  const t = ho(), n = Fe(e) ? Be(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Rc(e) {
  let t = ft(e);
  for (; Ye(t) && !zt(t); ) {
    if (go(t))
      return t;
    if (qn(t))
      return null;
    t = ft(t);
  }
  return null;
}
function ho() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zt(e) {
  return ["html", "body", "#document"].includes(Gt(e));
}
function Be(e) {
  return Le(e).getComputedStyle(e);
}
function Kn(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Gt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    di(e) && e.host || // Fallback.
    Ze(e)
  );
  return di(t) ? t.host : t;
}
function Yl(e) {
  const t = ft(e);
  return zt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ye(t) && gn(t) ? t : Yl(t);
}
function un(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Yl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Le(o);
  if (i) {
    const s = kr(l);
    return t.concat(l, l.visualViewport || [], gn(o) ? o : [], s && n ? un(s) : []);
  }
  return t.concat(o, un(o, [], n));
}
function kr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function $c() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const St = Math.min, Ie = Math.max, cn = Math.round, Sn = Math.floor, qe = (e) => ({
  x: e,
  y: e
}), Tc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ic = {
  start: "end",
  end: "start"
};
function fi(e, t, n) {
  return Ie(e, St(t, n));
}
function Ut(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pt(e) {
  return e.split("-")[0];
}
function hn(e) {
  return e.split("-")[1];
}
function Xl(e) {
  return e === "x" ? "y" : "x";
}
function Zl(e) {
  return e === "y" ? "height" : "width";
}
function dt(e) {
  return ["top", "bottom"].includes(pt(e)) ? "y" : "x";
}
function Ql(e) {
  return Xl(dt(e));
}
function Oc(e, t, n) {
  n === void 0 && (n = !1);
  const r = hn(e), o = Ql(e), i = Zl(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = An(l)), [l, An(l)];
}
function Fc(e) {
  const t = An(e);
  return [Dr(e), t, Dr(t)];
}
function Dr(e) {
  return e.replace(/start|end/g, (t) => Ic[t]);
}
function Mc(e, t, n) {
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
function Pc(e, t, n, r) {
  const o = hn(e);
  let i = Mc(pt(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Dr)))), i;
}
function An(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Tc[t]);
}
function Nc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ac(e) {
  return typeof e != "number" ? Nc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function kn(e) {
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
function pi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = dt(t), l = Ql(t), s = Zl(l), a = pt(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, g = r[s] / 2 - o[s] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (hn(t)) {
    case "start":
      d[l] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      d[l] += g * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const kc = async (e, t, n) => {
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
    y: p
  } = pi(u, r, a), g = r, d = {}, m = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: w,
      fn: b
    } = s[h], {
      x: _,
      y: C,
      data: E,
      reset: I
    } = await b({
      x: c,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = _ ?? c, p = C ?? p, d = {
      ...d,
      [w]: {
        ...d[w],
        ...E
      }
    }, I && m <= 50 && (m++, typeof I == "object" && (I.placement && (g = I.placement), I.rects && (u = I.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : I.rects), {
      x: c,
      y: p
    } = pi(u, g, a)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: d
  };
};
async function Yn(e, t) {
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
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: d = 0
  } = Ut(t, e), m = Ac(d), w = s[g ? p === "floating" ? "reference" : "floating" : p], b = kn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), _ = p === "floating" ? {
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
  }, I = kn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: C,
    strategy: a
  }) : _);
  return {
    top: (b.top - I.top + m.top) / E.y,
    bottom: (I.bottom - b.bottom + m.bottom) / E.y,
    left: (b.left - I.left + m.left) / E.x,
    right: (I.right - b.right + m.right) / E.x
  };
}
const Dc = function(e) {
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
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...w
      } = Ut(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = pt(o), _ = dt(s), C = pt(s) === s, E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), I = g || (C || !h ? [An(s)] : Fc(s)), M = m !== "none";
      !g && M && I.push(...Pc(s, h, m, E));
      const R = [s, ...I], v = await Yn(t, w), y = [];
      let x = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && y.push(v[b]), p) {
        const U = Oc(o, l, E);
        y.push(v[U[0]], v[U[1]]);
      }
      if (x = [...x, {
        placement: o,
        overflows: y
      }], !y.every((U) => U <= 0)) {
        var S, T;
        const U = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, Z = R[U];
        if (Z) {
          var k;
          const z = p === "alignment" ? _ !== dt(Z) : !1, O = ((k = x[0]) == null ? void 0 : k.overflows[0]) > 0;
          if (!z || O)
            return {
              data: {
                index: U,
                overflows: x
              },
              reset: {
                placement: Z
              }
            };
        }
        let B = (T = x.filter((z) => z.overflows[0] <= 0).sort((z, O) => z.overflows[1] - O.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!B)
          switch (d) {
            case "bestFit": {
              var F;
              const z = (F = x.filter((O) => {
                if (M) {
                  const N = dt(O.placement);
                  return N === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((N) => N > 0).reduce((N, A) => N + A, 0)]).sort((O, N) => O[1] - N[1])[0]) == null ? void 0 : F[0];
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
async function Lc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = pt(n), s = hn(n), a = dt(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, p = Ut(t, e);
  let {
    mainAxis: g,
    crossAxis: d,
    alignmentAxis: m
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof m == "number" && (d = s === "end" ? m * -1 : m), a ? {
    x: d * c,
    y: g * u
  } : {
    x: g * u,
    y: d * c
  };
}
const Vc = function(e) {
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
      } = t, a = await Lc(t, e);
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
}, Hc = function(e) {
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
          fn: (w) => {
            let {
              x: b,
              y: _
            } = w;
            return {
              x: b,
              y: _
            };
          }
        },
        ...a
      } = Ut(e, t), u = {
        x: n,
        y: r
      }, c = await Yn(t, a), p = dt(pt(o)), g = Xl(p);
      let d = u[g], m = u[p];
      if (i) {
        const w = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", _ = d + c[w], C = d - c[b];
        d = fi(_, d, C);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", _ = m + c[w], C = m - c[b];
        m = fi(_, m, C);
      }
      const h = s.fn({
        ...t,
        [g]: d,
        [p]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [g]: i,
            [p]: l
          }
        }
      };
    }
  };
}, zc = function(e) {
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
      } = Ut(e, t), c = await Yn(t, u), p = pt(o), g = hn(o), d = dt(o) === "y", {
        width: m,
        height: h
      } = i.floating;
      let w, b;
      p === "top" || p === "bottom" ? (w = p, b = g === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, w = g === "end" ? "top" : "bottom");
      const _ = h - c.top - c.bottom, C = m - c.left - c.right, E = St(h - c[w], _), I = St(m - c[b], C), M = !t.middlewareData.shift;
      let R = E, v = I;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (v = C), (r = t.middlewareData.shift) != null && r.enabled.y && (R = _), M && !g) {
        const x = Ie(c.left, 0), S = Ie(c.right, 0), T = Ie(c.top, 0), k = Ie(c.bottom, 0);
        d ? v = m - 2 * (x !== 0 || S !== 0 ? x + S : Ie(c.left, c.right)) : R = h - 2 * (T !== 0 || k !== 0 ? T + k : Ie(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: v,
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
function Jl(e) {
  const t = Be(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ye(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = cn(n) !== i || cn(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function vo(e) {
  return Fe(e) ? e : e.contextElement;
}
function Dt(e) {
  const t = vo(e);
  if (!Ye(t))
    return qe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Jl(t);
  let l = (i ? cn(n.width) : n.width) / r, s = (i ? cn(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Bc = /* @__PURE__ */ qe(0);
function es(e) {
  const t = Le(e);
  return !ho() || !t.visualViewport ? Bc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function jc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function Et(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = vo(e);
  let l = qe(1);
  t && (r ? Fe(r) && (l = Dt(r)) : l = Dt(e));
  const s = jc(i, n, r) ? es(i) : qe(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, c = o.width / l.x, p = o.height / l.y;
  if (i) {
    const g = Le(i), d = r && Fe(r) ? Le(r) : r;
    let m = g, h = kr(m);
    for (; h && r && d !== m; ) {
      const w = Dt(h), b = h.getBoundingClientRect(), _ = Be(h), C = b.left + (h.clientLeft + parseFloat(_.paddingLeft)) * w.x, E = b.top + (h.clientTop + parseFloat(_.paddingTop)) * w.y;
      a *= w.x, u *= w.y, c *= w.x, p *= w.y, a += C, u += E, m = Le(h), h = kr(m);
    }
  }
  return kn({
    width: c,
    height: p,
    x: a,
    y: u
  });
}
function wo(e, t) {
  const n = Kn(e).scrollLeft;
  return t ? t.left + n : Et(Ze(e)).left + n;
}
function ts(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    wo(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Wc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = Ze(r), s = t ? qn(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = qe(1);
  const c = qe(0), p = Ye(r);
  if ((p || !p && !i) && ((Gt(r) !== "body" || gn(l)) && (a = Kn(r)), Ye(r))) {
    const d = Et(r);
    u = Dt(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  const g = l && !p && !i ? ts(l, a, !0) : qe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + g.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + g.y
  };
}
function Gc(e) {
  return Array.from(e.getClientRects());
}
function Uc(e) {
  const t = Ze(e), n = Kn(e), r = e.ownerDocument.body, o = Ie(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ie(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + wo(e);
  const s = -n.scrollTop;
  return Be(r).direction === "rtl" && (l += Ie(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function qc(e, t) {
  const n = Le(e), r = Ze(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = ho();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Kc(e, t) {
  const n = Et(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ye(e) ? Dt(e) : qe(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function mi(e, t, n) {
  let r;
  if (t === "viewport")
    r = qc(e, n);
  else if (t === "document")
    r = Uc(Ze(e));
  else if (Fe(t))
    r = Kc(t, n);
  else {
    const o = es(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return kn(r);
}
function ns(e, t) {
  const n = ft(e);
  return n === t || !Fe(n) || zt(n) ? !1 : Be(n).position === "fixed" || ns(n, t);
}
function Yc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = un(e, [], !1).filter((s) => Fe(s) && Gt(s) !== "body"), o = null;
  const i = Be(e).position === "fixed";
  let l = i ? ft(e) : e;
  for (; Fe(l) && !zt(l); ) {
    const s = Be(l), a = go(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || gn(l) && !a && ns(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = ft(l);
  }
  return t.set(e, r), r;
}
function Xc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? qn(t) ? [] : Yc(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const p = mi(t, c, o);
    return u.top = Ie(p.top, u.top), u.right = St(p.right, u.right), u.bottom = St(p.bottom, u.bottom), u.left = Ie(p.left, u.left), u;
  }, mi(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Zc(e) {
  const {
    width: t,
    height: n
  } = Jl(e);
  return {
    width: t,
    height: n
  };
}
function Qc(e, t, n) {
  const r = Ye(t), o = Ze(t), i = n === "fixed", l = Et(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = qe(0);
  function u() {
    a.x = wo(o);
  }
  if (r || !r && !i)
    if ((Gt(t) !== "body" || gn(o)) && (s = Kn(t)), r) {
      const d = Et(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? ts(o, s) : qe(0), p = l.left + s.scrollLeft - a.x - c.x, g = l.top + s.scrollTop - a.y - c.y;
  return {
    x: p,
    y: g,
    width: l.width,
    height: l.height
  };
}
function dr(e) {
  return Be(e).position === "static";
}
function gi(e, t) {
  if (!Ye(e) || Be(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ze(e) === n && (n = n.ownerDocument.body), n;
}
function rs(e, t) {
  const n = Le(e);
  if (qn(e))
    return n;
  if (!Ye(e)) {
    let o = ft(e);
    for (; o && !zt(o); ) {
      if (Fe(o) && !dr(o))
        return o;
      o = ft(o);
    }
    return n;
  }
  let r = gi(e, t);
  for (; r && Ec(r) && dr(r); )
    r = gi(r, t);
  return r && zt(r) && dr(r) && !go(r) ? n : r || Rc(e) || n;
}
const Jc = async function(e) {
  const t = this.getOffsetParent || rs, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Qc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ed(e) {
  return Be(e).direction === "rtl";
}
const td = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wc,
  getDocumentElement: Ze,
  getClippingRect: Xc,
  getOffsetParent: rs,
  getElementRects: Jc,
  getClientRects: Gc,
  getDimensions: Zc,
  getScale: Dt,
  isElement: Fe,
  isRTL: ed
};
function os(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function nd(e, t) {
  let n = null, r;
  const o = Ze(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: g,
      height: d
    } = u;
    if (s || t(), !g || !d)
      return;
    const m = Sn(p), h = Sn(o.clientWidth - (c + g)), w = Sn(o.clientHeight - (p + d)), b = Sn(c), C = {
      rootMargin: -m + "px " + -h + "px " + -w + "px " + -b + "px",
      threshold: Ie(0, St(1, a)) || 1
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
      R === 1 && !os(u, e.getBoundingClientRect()) && l(), E = !1;
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
function rd(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = vo(e), c = o || i ? [...u ? un(u) : [], ...un(t)] : [];
  c.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const p = u && s ? nd(u, n) : null;
  let g = -1, d = null;
  l && (d = new ResizeObserver((b) => {
    let [_] = b;
    _ && _.target === u && d && (d.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var C;
      (C = d) == null || C.observe(t);
    })), n();
  }), u && !a && d.observe(u), d.observe(t));
  let m, h = a ? Et(e) : null;
  a && w();
  function w() {
    const b = Et(e);
    h && !os(h, b) && n(), h = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    c.forEach((_) => {
      o && _.removeEventListener("scroll", n), i && _.removeEventListener("resize", n);
    }), p == null || p(), (b = d) == null || b.disconnect(), d = null, a && cancelAnimationFrame(m);
  };
}
const fr = Yn, od = Vc, id = Hc, ld = Dc, sd = zc, ad = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: td,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return kc(e, t, {
    ...o,
    platform: i
  });
};
var In = typeof document < "u" ? Xe : re;
function Dn(e, t) {
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
        if (!Dn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Dn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function is(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hi(e, t) {
  const n = is(e);
  return Math.round(t * n) / n;
}
function pr(e) {
  const t = D(e);
  return In(() => {
    t.current = e;
  }), t;
}
function ud(e) {
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
  } = e, [c, p] = W({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, d] = W(r);
  Dn(g, r) || d(r);
  const [m, h] = W(null), [w, b] = W(null), _ = oe((z) => {
    z !== M.current && (M.current = z, h(z));
  }, []), C = oe((z) => {
    z !== R.current && (R.current = z, b(z));
  }, []), E = i || m, I = l || w, M = D(null), R = D(null), v = D(c), y = a != null, x = pr(a), S = pr(o), T = pr(u), k = oe(() => {
    if (!M.current || !R.current)
      return;
    const z = {
      placement: t,
      strategy: n,
      middleware: g
    };
    S.current && (z.platform = S.current), ad(M.current, R.current, z).then((O) => {
      const N = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      F.current && !Dn(v.current, N) && (v.current = N, De(() => {
        p(N);
      }));
    });
  }, [g, t, n, S, T]);
  In(() => {
    u === !1 && v.current.isPositioned && (v.current.isPositioned = !1, p((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [u]);
  const F = D(!1);
  In(() => (F.current = !0, () => {
    F.current = !1;
  }), []), In(() => {
    if (E && (M.current = E), I && (R.current = I), E && I) {
      if (x.current)
        return x.current(E, I, k);
      k();
    }
  }, [E, I, k, x, y]);
  const U = G(() => ({
    reference: M,
    floating: R,
    setReference: _,
    setFloating: C
  }), [_, C]), Z = G(() => ({
    reference: E,
    floating: I
  }), [E, I]), B = G(() => {
    const z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!Z.floating)
      return z;
    const O = hi(Z.floating, c.x), N = hi(Z.floating, c.y);
    return s ? {
      ...z,
      transform: "translate(" + O + "px, " + N + "px)",
      ...is(Z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: N
    };
  }, [n, s, Z.floating, c.x, c.y]);
  return G(() => ({
    ...c,
    update: k,
    refs: U,
    elements: Z,
    floatingStyles: B
  }), [c, k, U, Z, B]);
}
const ls = (e, t) => ({
  ...od(e),
  options: [e, t]
}), cd = (e, t) => ({
  ...id(e),
  options: [e, t]
}), dd = (e, t) => ({
  ...ld(e),
  options: [e, t]
}), fd = (e, t) => ({
  ...sd(e),
  options: [e, t]
}), ss = {
  ...$r
}, pd = ss.useInsertionEffect, md = pd || ((e) => e());
function as(e) {
  const t = D(() => {
  });
  return md(() => {
    t.current = e;
  }), oe(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Lr = typeof document < "u" ? Xe : re;
let vi = !1, gd = 0;
const wi = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + gd++
);
function hd() {
  const [e, t] = W(() => vi ? wi() : void 0);
  return Lr(() => {
    e == null && t(wi());
  }, []), re(() => {
    vi = !0;
  }, []), e;
}
const vd = ss.useId, wd = vd || hd;
function yd() {
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
const bd = /* @__PURE__ */ fe(null), xd = /* @__PURE__ */ fe(null), _d = () => {
  var e;
  return ((e = se(bd)) == null ? void 0 : e.id) || null;
}, Cd = () => se(xd), Sd = "data-floating-ui-focusable";
function Ed(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = wd(), i = D({}), [l] = W(() => yd()), s = _d() != null, [a, u] = W(r.reference), c = as((d, m, h) => {
    i.current.openEvent = d ? m : void 0, l.emit("openchange", {
      open: d,
      event: m,
      reason: h,
      nested: s
    }), n == null || n(d, m, h);
  }), p = G(() => ({
    setPositionReference: u
  }), []), g = G(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return G(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: g,
    events: l,
    floatingId: o,
    refs: p
  }), [t, c, g, l, o, p]);
}
function Rd(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Ed({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = W(null), [s, a] = W(null), c = (o == null ? void 0 : o.domReference) || i, p = D(null), g = Cd();
  Lr(() => {
    c && (p.current = c);
  }, [c]);
  const d = ud({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), m = oe((C) => {
    const E = Fe(C) ? {
      getBoundingClientRect: () => C.getBoundingClientRect(),
      contextElement: C
    } : C;
    a(E), d.refs.setReference(E);
  }, [d.refs]), h = oe((C) => {
    (Fe(C) || C === null) && (p.current = C, l(C)), (Fe(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    C !== null && !Fe(C)) && d.refs.setReference(C);
  }, [d.refs]), w = G(() => ({
    ...d.refs,
    setReference: h,
    setPositionReference: m,
    domReference: p
  }), [d.refs, h, m]), b = G(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), _ = G(() => ({
    ...d,
    ...r,
    refs: w,
    elements: b,
    nodeId: t
  }), [d, w, b, t, r]);
  return Lr(() => {
    r.dataRef.current.floatingContext = _;
    const C = g == null ? void 0 : g.nodesRef.current.find((E) => E.id === t);
    C && (C.context = _);
  }), G(() => ({
    ...d,
    context: _,
    refs: w,
    elements: b
  }), [d, w, b, _]);
}
const yi = "active", bi = "selected";
function mr(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [yi]: l,
      [bi]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Sd]: ""
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [u, c] = a;
      if (!(o && [yi, bi].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var p;
            (p = r.get(u)) == null || p.push(c), l[u] = function() {
              for (var g, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
                m[h] = arguments[h];
              return (g = r.get(u)) == null ? void 0 : g.map((w) => w(...m)).find((w) => w !== void 0);
            };
          }
        } else
          l[u] = c;
    }), l), {})
  };
}
function $d(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = oe(
    (s) => mr(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = oe(
    (s) => mr(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = oe(
    (s) => mr(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return G(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
function xi(e, t) {
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
const Td = (e) => ({
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
    } = Ut(e, t), {
      rects: p,
      elements: {
        floating: g
      }
    } = t, d = n.current[l], m = (u == null ? void 0 : u.current) || g, h = g.clientTop || m.clientTop, w = g.clientTop !== 0, b = m.clientTop !== 0, _ = g === m;
    if (!d)
      return {};
    const C = {
      ...t,
      ...await ls(-d.offsetTop - g.clientTop - p.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, E = await fr(xi(C, m.scrollHeight + h + g.clientTop), c), I = await fr(C, {
      ...c,
      elementContext: "reference"
    }), M = Ie(0, E.top), R = C.y + M, x = (m.scrollHeight > m.clientHeight ? (S) => S : cn)(Ie(0, m.scrollHeight + (w && _ || b ? h * 2 : 0) - M - Ie(0, E.bottom)));
    if (m.style.maxHeight = x + "px", m.scrollTop = M, o) {
      const S = m.offsetHeight < d.offsetHeight * St(s, n.current.length) - 1 || I.top >= -a || I.bottom >= -a;
      De(() => o(S));
    }
    return r && (r.current = await fr(xi({
      ...C,
      y: R
    }, m.offsetHeight + h + g.clientTop), c)), {
      y: R
    };
  }
});
function Id(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = as(s), u = D(!1), c = D(null), p = D(null);
  re(() => {
    if (!o) return;
    function d(h) {
      if (h.ctrlKey || !m || i.current == null)
        return;
      const w = h.deltaY, b = i.current.top >= -0.5, _ = i.current.bottom >= -0.5, C = m.scrollHeight - m.clientHeight, E = w < 0 ? -1 : 1, I = w < 0 ? "max" : "min";
      m.scrollHeight <= m.clientHeight || (!b && w > 0 || !_ && w < 0 ? (h.preventDefault(), De(() => {
        a((M) => M + Math[I](w, C * E));
      })) : /firefox/i.test($c()) && (m.scrollTop += w));
    }
    const m = (l == null ? void 0 : l.current) || r.floating;
    if (n && m)
      return m.addEventListener("wheel", d), requestAnimationFrame(() => {
        c.current = m.scrollTop, i.current != null && (p.current = {
          ...i.current
        });
      }), () => {
        c.current = null, p.current = null, m.removeEventListener("wheel", d);
      };
  }, [o, n, r.floating, i, l, a]);
  const g = G(() => ({
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
      const d = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !d || !u.current)) {
        if (c.current !== null) {
          const m = d.scrollTop - c.current;
          (i.current.bottom < -0.5 && m < -1 || i.current.top < -0.5 && m > 1) && De(() => a((h) => h + m));
        }
        requestAnimationFrame(() => {
          c.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return G(() => o ? {
    floating: g
  } : {}, [o, g]);
}
let vn = fe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
vn.displayName = "FloatingContext";
let yo = fe(null);
yo.displayName = "PlacementContext";
function Od(e) {
  return G(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Fd() {
  return se(vn).setReference;
}
function Md() {
  let { getFloatingProps: e, slot: t } = se(vn);
  return oe((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Pd(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = se(yo), n = G(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  ue(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = se(vn);
  return G(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let _i = 4;
function Nd({ children: e, enabled: t = !0 }) {
  let [n, r] = W(null), [o, i] = W(0), l = D(null), [s, a] = W(null);
  Ad(s);
  let u = t && n !== null && s !== null, { to: c = "bottom", gap: p = 0, offset: g = 0, padding: d = 0, inner: m } = kd(n, s), [h, w = "center"] = c.split(" ");
  ue(() => {
    u && i(0);
  }, [u]);
  let { refs: b, floatingStyles: _, context: C } = Rd({ open: u, placement: h === "selection" ? w === "center" ? "bottom" : `bottom-${w}` : w === "center" ? `${h}` : `${h}-${w}`, strategy: "absolute", transform: !1, middleware: [ls({ mainAxis: h === "selection" ? 0 : p, crossAxis: g }), cd({ padding: d }), h !== "selection" && dd({ padding: d }), h === "selection" && m ? Td({ ...m, padding: d, overflowRef: l, offset: o, minItemsVisible: _i, referenceOverflowThreshold: d, onFallbackChange(S) {
    var T, k;
    if (!S) return;
    let F = C.elements.floating;
    if (!F) return;
    let U = parseFloat(getComputedStyle(F).scrollPaddingBottom) || 0, Z = Math.min(_i, F.childElementCount), B = 0, z = 0;
    for (let O of (k = (T = C.elements.floating) == null ? void 0 : T.childNodes) != null ? k : []) if (O instanceof HTMLElement) {
      let N = O.offsetTop, A = N + O.clientHeight + U, V = F.scrollTop, $ = V + F.clientHeight;
      if (N >= V && A <= $) Z--;
      else {
        z = Math.max(0, Math.min(A, $) - Math.max(N, V)), B = O.clientHeight;
        break;
      }
    }
    Z >= 1 && i((O) => {
      let N = B * Z - z + U;
      return O >= N ? O : N;
    });
  } }) : null, fd({ padding: d, apply({ availableWidth: S, availableHeight: T, elements: k }) {
    Object.assign(k.floating.style, { overflow: "auto", maxWidth: `${S}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${T}px)` });
  } })].filter(Boolean), whileElementsMounted: rd }), [E = h, I = w] = C.placement.split("-");
  h === "selection" && (E = "selection");
  let M = G(() => ({ anchor: [E, I].filter(Boolean).join(" ") }), [E, I]), R = Id(C, { overflowRef: l, onChange: i }), { getReferenceProps: v, getFloatingProps: y } = $d([R]), x = j((S) => {
    a(S), b.setFloating(S);
  });
  return P(yo.Provider, { value: r }, P(vn.Provider, { value: { setFloating: x, setReference: b.setReference, styles: _, getReferenceProps: v, getFloatingProps: y, slot: M } }, e));
}
function Ad(e) {
  ue(() => {
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
function kd(e, t) {
  var n, r, o;
  let i = gr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = gr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = gr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function gr(e, t, n = void 0) {
  let r = Tt(), o = j((a, u) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!u) return [n, null];
      let c = Ci(a, u);
      return [c, (p) => {
        let g = us(a);
        {
          let d = g.map((m) => window.getComputedStyle(u).getPropertyValue(m));
          r.requestAnimationFrame(function m() {
            r.nextFrame(m);
            let h = !1;
            for (let [b, _] of g.entries()) {
              let C = window.getComputedStyle(u).getPropertyValue(_);
              if (d[b] !== C) {
                d[b] = C, h = !0;
                break;
              }
            }
            if (!h) return;
            let w = Ci(a, u);
            c !== w && (p(w), c = w);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = G(() => o(e, t)[0], [e, t]), [l = i, s] = W();
  return ue(() => {
    let [a, u] = o(e, t);
    if (s(a), !!u) return u(s);
  }, [e, t]), l;
}
function us(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...us(o)] : [r];
  }
  return [];
}
function Ci(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function Dd({ children: e, freeze: t }) {
  let n = Vr(t, e);
  return L.createElement(L.Fragment, null, n);
}
function Vr(e, t) {
  let [n, r] = W(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Xn = fe(null);
Xn.displayName = "OpenClosedContext";
var Me = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Me || {});
function wn() {
  return se(Xn);
}
function cs({ value: e, children: t }) {
  return L.createElement(Xn.Provider, { value: e }, t);
}
function Ld({ children: e }) {
  return L.createElement(Xn.Provider, { value: null }, e);
}
function Vd(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ue = [];
Vd(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ue[0] === t.target) return;
    let n = t.target;
    n = n.closest(Nn), Ue.unshift(n ?? t.target), Ue = Ue.filter((r) => r != null && r.isConnected), Ue.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Hd(e) {
  throw new Error("Unexpected object: " + e);
}
var be = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(be || {});
function Si(e, t) {
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
      Hd(e);
  }
}
var bo = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(bo || {});
function ds(e) {
  let t = j(e), n = D(!1);
  re(() => (n.current = !1, () => {
    n.current = !0, Bn(() => {
      n.current && t();
    });
  }), [t]);
}
function zd() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in $r ? ((t) => t.useSyncExternalStore)($r)(() => () => {
  }, () => !1, () => !e) : !1;
}
function yn() {
  let e = zd(), [t, n] = W(xt.isHandoffComplete);
  return t && xt.isHandoffComplete === !1 && n(!1), re(() => {
    t !== !0 && n(!0);
  }, [t]), re(() => xt.handoff(), []), e ? !1 : t;
}
let fs = fe(!1);
function Bd() {
  return se(fs);
}
function Ei(e) {
  return L.createElement(fs.Provider, { value: e.force }, e.children);
}
function jd(e) {
  let t = Bd(), n = se(ms), r = It(e), [o, i] = W(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (xt.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return re(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), re(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let ps = we, Wd = xe(function(e, t) {
  let n = e, r = D(null), o = Pe(Ru((p) => {
    r.current = p;
  }), t), i = It(r), l = jd(r), [s] = W(() => {
    var p;
    return xt.isServer ? null : (p = i == null ? void 0 : i.createElement("div")) != null ? p : null;
  }), a = se(Hr), u = yn();
  ue(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), ue(() => {
    if (s && a) return a.register(s);
  }, [a, s]), ds(() => {
    var p;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((p = l.parentElement) == null || p.removeChild(l)));
  });
  let c = Ce();
  return u ? !l || !s ? null : pn(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: ps, name: "Portal" }), s) : null;
});
function Gd(e, t) {
  let n = Pe(t), { enabled: r = !0, ...o } = e, i = Ce();
  return r ? L.createElement(Wd, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: ps, name: "Portal" });
}
let Ud = we, ms = fe(null);
function qd(e, t) {
  let { target: n, ...r } = e, o = { ref: Pe(t) }, i = Ce();
  return L.createElement(ms.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Ud, name: "Popover.Group" }));
}
let Hr = fe(null);
function Kd() {
  let e = se(Hr), t = D([]), n = j((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = j((i) => {
    let l = t.current.indexOf(i);
    l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
  }), o = G(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, G(() => function({ children: i }) {
    return L.createElement(Hr.Provider, { value: o }, i);
  }, [o])];
}
let Yd = xe(Gd), gs = xe(qd), hs = Object.assign(Yd, { Group: gs });
var Xd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Xd || {}), Zd = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Zd || {}), Qd = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Qd || {}), Jd = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(Jd || {});
function hr(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((l, s) => l.dataRef.current.order - s.dataRef.current.order) : Vl(r, (l) => l.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let ef = { 1(e) {
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
    let { options: u, disabled: c } = e.virtual, p = t.focus === be.Specific ? t.idx : Si(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var d, m;
      return (m = (d = e.activeOptionIndex) != null ? d : u.findIndex((h) => !c(h))) != null ? m : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), g = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === p && e.activationTrigger === g ? e : { ...e, activeOptionIndex: p, activationTrigger: g, isTyping: !1, __demoMode: !1 };
  }
  let l = hr(e);
  if (l.activeOptionIndex === null) {
    let u = l.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (l.activeOptionIndex = u);
  }
  let s = t.focus === be.Specific ? t.idx : Si(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === s && e.activationTrigger === a ? e : { ...e, ...l, isTyping: !1, activeOptionIndex: s, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, l = hr(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(i));
  let s = { ...e, ...l, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = hr(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, xo = fe(null);
xo.displayName = "ComboboxActionsContext";
function bn(e) {
  let t = se(xo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, bn), n;
  }
  return t;
}
let vs = fe(null);
function tf(e) {
  let t = qt("VirtualProvider"), { options: n } = t.virtual, [r, o] = G(() => {
    let u = t.optionsElement;
    if (!u) return [0, 0];
    let c = window.getComputedStyle(u);
    return [parseFloat(c.paddingBlockStart || c.paddingTop), parseFloat(c.paddingBlockEnd || c.paddingBottom)];
  }, [t.optionsElement]), i = Pl({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [l, s] = W(0);
  ue(() => {
    s((u) => u + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : L.createElement(vs.Provider, { value: i }, L.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var c;
    return L.createElement(we, { key: u.key }, L.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }), { key: `${l}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let dn = fe(null);
dn.displayName = "ComboboxDataContext";
function qt(e) {
  let t = se(dn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, qt), n;
  }
  return t;
}
function nf(e, t) {
  return Ae(t.type, ef, e, t);
}
let rf = we;
function of(e, t) {
  var n, r;
  let o = fo(), { value: i, defaultValue: l, onChange: s, form: a, name: u, by: c, disabled: p = o || !1, onClose: g, __demoMode: d = !1, multiple: m = !1, immediate: h = !1, virtual: w = null, nullable: b, ..._ } = e, C = hu(l), [E = m ? [] : void 0, I] = gu(i, s, C), [M, R] = ot(nf, { dataRef: Hn(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: w ? { options: w.options, disabled: (n = w.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), v = D(!1), y = D({ static: !1, hold: !1 }), x = Qu(c), S = j((H) => w ? c === null ? w.options.indexOf(H) : w.options.findIndex((K) => x(K, H)) : M.options.findIndex((K) => x(K.dataRef.current.value, H))), T = oe((H) => Ae(F.mode, { 1: () => E.some((K) => x(K, H)), 0: () => x(E, H) }), [E]), k = j((H) => M.activeOptionIndex === S(H)), F = G(() => ({ ...M, immediate: h, optionsPropsRef: y, value: E, defaultValue: C, disabled: p, mode: m ? 1 : 0, virtual: w ? M.virtual : null, get activeOptionIndex() {
    if (v.current && M.activeOptionIndex === null && (w ? w.options.length > 0 : M.options.length > 0)) {
      if (w) {
        let K = w.options.findIndex((J) => {
          var Ee, ne;
          return !((ne = (Ee = w.disabled) == null ? void 0 : Ee.call(w, J)) != null && ne);
        });
        if (K !== -1) return K;
      }
      let H = M.options.findIndex((K) => !K.dataRef.current.disabled);
      if (H !== -1) return H;
    }
    return M.activeOptionIndex;
  }, calculateIndex: S, compare: x, isSelected: T, isActive: k }), [E, C, p, m, d, M, w]);
  ue(() => {
    var H;
    w && R({ type: 7, options: w.options, disabled: (H = w.disabled) != null ? H : null });
  }, [w, w == null ? void 0 : w.options, w == null ? void 0 : w.disabled]), ue(() => {
    M.dataRef.current = F;
  }, [F]);
  let U = F.comboboxState === 0;
  jl(U, [F.buttonElement, F.inputElement, F.optionsElement], () => q.closeCombobox());
  let Z = G(() => {
    var H, K, J;
    return { open: F.comboboxState === 0, disabled: p, activeIndex: F.activeOptionIndex, activeOption: F.activeOptionIndex === null ? null : F.virtual ? F.virtual.options[(H = F.activeOptionIndex) != null ? H : 0] : (J = (K = F.options[F.activeOptionIndex]) == null ? void 0 : K.dataRef.current.value) != null ? J : null, value: E };
  }, [F, p, E]), B = j(() => {
    if (F.activeOptionIndex !== null) {
      if (q.setIsTyping(!1), F.virtual) $(F.virtual.options[F.activeOptionIndex]);
      else {
        let { dataRef: H } = F.options[F.activeOptionIndex];
        $(H.current.value);
      }
      q.goToOption(be.Specific, F.activeOptionIndex);
    }
  }), z = j(() => {
    R({ type: 0 }), v.current = !0;
  }), O = j(() => {
    R({ type: 1 }), v.current = !1, g == null || g();
  }), N = j((H) => {
    R({ type: 3, isTyping: H });
  }), A = j((H, K, J) => (v.current = !1, H === be.Specific ? R({ type: 2, focus: be.Specific, idx: K, trigger: J }) : R({ type: 2, focus: H, trigger: J }))), V = j((H, K) => (R({ type: 4, payload: { id: H, dataRef: K } }), () => {
    F.isActive(K.current.value) && (v.current = !0), R({ type: 5, id: H });
  })), $ = j((H) => Ae(F.mode, { 0() {
    return I == null ? void 0 : I(H);
  }, 1() {
    let K = F.value.slice(), J = K.findIndex((Ee) => x(Ee, H));
    return J === -1 ? K.push(H) : K.splice(J, 1), I == null ? void 0 : I(K);
  } })), le = j((H) => {
    R({ type: 6, trigger: H });
  }), te = j((H) => {
    R({ type: 8, element: H });
  }), ae = j((H) => {
    R({ type: 9, element: H });
  }), ie = j((H) => {
    R({ type: 10, element: H });
  }), q = G(() => ({ onChange: $, registerOption: V, goToOption: A, setIsTyping: N, closeCombobox: O, openCombobox: z, setActivationTrigger: le, selectActiveOption: B, setInputElement: te, setButtonElement: ae, setOptionsElement: ie }), []), [ee, pe] = Pu(), Q = t === null ? {} : { ref: t }, me = oe(() => {
    if (C !== void 0) return I == null ? void 0 : I(C);
  }, [I, C]), ve = Ce();
  return L.createElement(pe, { value: ee, props: { htmlFor: (r = F.inputElement) == null ? void 0 : r.id }, slot: { open: F.comboboxState === 0, disabled: p } }, L.createElement(Nd, null, L.createElement(xo.Provider, { value: q }, L.createElement(dn.Provider, { value: F }, L.createElement(cs, { value: Ae(F.comboboxState, { 0: Me.Open, 1: Me.Closed }) }, u != null && L.createElement(xu, { disabled: p, data: E != null ? { [u]: E } : {}, form: a, onReset: me }), ve({ ourProps: Q, theirProps: _, slot: Z, defaultTag: rf, name: "Combobox" }))))));
}
let lf = "input";
function sf(e, t) {
  var n, r, o, i, l;
  let s = qt("Combobox.Input"), a = bn("Combobox.Input"), u = Oe(), c = Tl(), { id: p = c || `headlessui-combobox-input-${u}`, onChange: g, displayValue: d, disabled: m = s.disabled || !1, autoFocus: h = !1, type: w = "text", ...b } = e, _ = D(null), C = Pe(_, t, Fd(), a.setInputElement), E = It(s.inputElement), I = Tt(), M = j(() => {
    a.onChange(null), s.optionsElement && (s.optionsElement.scrollTop = 0), a.goToOption(be.Nothing);
  }), R = G(() => {
    var $;
    return typeof d == "function" && s.value !== void 0 ? ($ = d(s.value)) != null ? $ : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, d]);
  an(([$, le], [te, ae]) => {
    if (s.isTyping) return;
    let ie = _.current;
    ie && ((ae === 0 && le === 1 || $ !== te) && (ie.value = $), requestAnimationFrame(() => {
      if (s.isTyping || !ie || (E == null ? void 0 : E.activeElement) !== ie) return;
      let { selectionStart: q, selectionEnd: ee } = ie;
      Math.abs((ee ?? 0) - (q ?? 0)) === 0 && q === 0 && ie.setSelectionRange(ie.value.length, ie.value.length);
    }));
  }, [R, s.comboboxState, E, s.isTyping]), an(([$], [le]) => {
    if ($ === 0 && le === 1) {
      if (s.isTyping) return;
      let te = _.current;
      if (!te) return;
      let ae = te.value, { selectionStart: ie, selectionEnd: q, selectionDirection: ee } = te;
      te.value = "", te.value = ae, ee !== null ? te.setSelectionRange(ie, q, ee) : te.setSelectionRange(ie, q);
    }
  }, [s.comboboxState]);
  let v = D(!1), y = j(() => {
    v.current = !0;
  }), x = j(() => {
    I.nextFrame(() => {
      v.current = !1;
    });
  }), S = j(($) => {
    switch (a.setIsTyping(!0), $.key) {
      case Te.Enter:
        if (s.comboboxState !== 0 || v.current) return;
        if ($.preventDefault(), $.stopPropagation(), s.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), s.mode === 0 && a.closeCombobox();
        break;
      case Te.ArrowDown:
        return $.preventDefault(), $.stopPropagation(), Ae(s.comboboxState, { 0: () => a.goToOption(be.Next), 1: () => a.openCombobox() });
      case Te.ArrowUp:
        return $.preventDefault(), $.stopPropagation(), Ae(s.comboboxState, { 0: () => a.goToOption(be.Previous), 1: () => {
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
    g == null || g($), s.mode === 0 && $.target.value === "" && M(), a.openCombobox();
  }), k = j(($) => {
    var le, te, ae;
    let ie = (le = $.relatedTarget) != null ? le : Ue.find((q) => q !== $.currentTarget);
    if (!((te = s.optionsElement) != null && te.contains(ie)) && !((ae = s.buttonElement) != null && ae.contains(ie)) && s.comboboxState === 0) return $.preventDefault(), s.mode === 0 && s.value === null && M(), a.closeCombobox();
  }), F = j(($) => {
    var le, te, ae;
    let ie = (le = $.relatedTarget) != null ? le : Ue.find((q) => q !== $.currentTarget);
    (te = s.buttonElement) != null && te.contains(ie) || (ae = s.optionsElement) != null && ae.contains(ie) || s.disabled || s.immediate && s.comboboxState !== 0 && I.microTask(() => {
      De(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), U = Gn(), Z = $u(), { isFocused: B, focusProps: z } = Cl({ autoFocus: h }), { isHovered: O, hoverProps: N } = _l({ isDisabled: m }), A = G(() => ({ open: s.comboboxState === 0, disabled: m, hover: O, focus: B, autofocus: h }), [s, O, B, h, m]), V = po({ ref: C, id: p, role: "combobox", type: w, "aria-controls": (n = s.optionsElement) == null ? void 0 : n.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find(($) => !$.dataRef.current.disabled && s.compare($.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (o = s.options[s.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": U, "aria-describedby": Z, "aria-autocomplete": "list", defaultValue: (l = (i = e.defaultValue) != null ? i : s.defaultValue !== void 0 ? d == null ? void 0 : d(s.defaultValue) : null) != null ? l : s.defaultValue, disabled: m || void 0, autoFocus: h, onCompositionStart: y, onCompositionEnd: x, onKeyDown: S, onChange: T, onFocus: F, onBlur: k }, z, N);
  return Ce()({ ourProps: V, theirProps: b, slot: A, defaultTag: lf, name: "Combobox.Input" });
}
let af = "button";
function uf(e, t) {
  var n;
  let r = qt("Combobox.Button"), o = bn("Combobox.Button"), i = Pe(t, o.setButtonElement), l = Oe(), { id: s = `headlessui-combobox-button-${l}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...c } = e, p = Wl(r.inputElement), g = j((R) => {
    switch (R.key) {
      case Te.Space:
      case Te.Enter:
        R.preventDefault(), R.stopPropagation(), r.comboboxState === 1 && De(() => o.openCombobox()), p();
        return;
      case Te.ArrowDown:
        R.preventDefault(), R.stopPropagation(), r.comboboxState === 1 && (De(() => o.openCombobox()), r.value || o.goToOption(be.First)), p();
        return;
      case Te.ArrowUp:
        R.preventDefault(), R.stopPropagation(), r.comboboxState === 1 && (De(() => o.openCombobox()), r.value || o.goToOption(be.Last)), p();
        return;
      case Te.Escape:
        if (r.comboboxState !== 0) return;
        R.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && R.stopPropagation(), De(() => o.closeCombobox()), p();
        return;
      default:
        return;
    }
  }), d = j((R) => {
    R.preventDefault(), !Su(R.currentTarget) && (R.button === bo.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), p());
  }), m = Gn([s]), { isFocusVisible: h, focusProps: w } = Cl({ autoFocus: u }), { isHovered: b, hoverProps: _ } = _l({ isDisabled: a }), { pressed: C, pressProps: E } = uu({ disabled: a }), I = G(() => ({ open: r.comboboxState === 0, active: C || r.comboboxState === 0, disabled: a, value: r.value, hover: b, focus: h }), [r, b, h, C, a]), M = po({ ref: i, id: s, type: dc(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": m, disabled: a || void 0, autoFocus: u, onMouseDown: d, onKeyDown: g }, w, _, E);
  return Ce()({ ourProps: M, theirProps: c, slot: I, defaultTag: af, name: "Combobox.Button" });
}
let cf = "div", df = Vt.RenderStrategy | Vt.Static;
function ff(e, t) {
  var n, r, o;
  let i = Oe(), { id: l = `headlessui-combobox-options-${i}`, hold: s = !1, anchor: a, portal: u = !1, modal: c = !0, transition: p = !1, ...g } = e, d = qt("Combobox.Options"), m = bn("Combobox.Options"), h = Od(a);
  h && (u = !0);
  let [w, b] = Pd(h), [_, C] = W(null), E = Md(), I = Pe(t, h ? w : null, m.setOptionsElement, C), M = It(d.optionsElement), R = wn(), [v, y] = ql(p, _, R !== null ? (R & Me.Open) === Me.Open : d.comboboxState === 0);
  Dl(v, d.inputElement, m.closeCombobox);
  let x = d.__demoMode ? !1 : c && d.comboboxState === 0;
  Gl(x, M);
  let S = d.__demoMode ? !1 : c && d.comboboxState === 0;
  kl(S, { allowed: oe(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), ue(() => {
    var V;
    d.optionsPropsRef.current.static = (V = e.static) != null ? V : !1;
  }, [d.optionsPropsRef, e.static]), ue(() => {
    d.optionsPropsRef.current.hold = s;
  }, [d.optionsPropsRef, s]), Sc(d.comboboxState === 0, { container: d.optionsElement, accept(V) {
    return V.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : V.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(V) {
    V.setAttribute("role", "none");
  } });
  let T = Gn([(n = d.buttonElement) == null ? void 0 : n.id]), k = G(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), F = j(() => {
    m.setActivationTrigger(0);
  }), U = j((V) => {
    V.preventDefault(), m.setActivationTrigger(0);
  }), Z = po(h ? E() : {}, { "aria-labelledby": T, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: l, ref: I, style: { ...g.style, ...b, "--input-width": oi(d.inputElement, !0).width, "--button-width": oi(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : F, onMouseDown: U, ...Ul(y) }), B = v && d.comboboxState === 1, z = Vr(B, (r = d.virtual) == null ? void 0 : r.options), O = Vr(B, d.value), N = j((V) => d.compare(O, V));
  if (d.virtual) {
    if (z === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(g, { children: L.createElement(dn.Provider, { value: z !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: z } } : d }, L.createElement(tf, { slot: k }, g.children)) });
  }
  let A = Ce();
  return L.createElement(hs, { enabled: u ? e.static || v : !1 }, L.createElement(dn.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: N } }, A({ ourProps: Z, theirProps: { ...g, children: L.createElement(Dd, { freeze: B }, typeof g.children == "function" ? (o = g.children) == null ? void 0 : o.call(g, k) : g.children) }, slot: k, defaultTag: cf, features: df, visible: v, name: "Combobox.Options" })));
}
let pf = "div";
function mf(e, t) {
  var n, r, o, i;
  let l = qt("Combobox.Option"), s = bn("Combobox.Option"), a = Oe(), { id: u = `headlessui-combobox-option-${a}`, value: c, disabled: p = (o = (r = (n = l.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null ? o : !1, order: g = null, ...d } = e, m = Wl(l.inputElement), h = l.virtual ? l.activeOptionIndex === l.calculateIndex(c) : l.activeOptionIndex === null ? !1 : ((i = l.options[l.activeOptionIndex]) == null ? void 0 : i.id) === u, w = l.isSelected(c), b = D(null), _ = ht({ disabled: p, value: c, domRef: b, order: g }), C = se(vs), E = Pe(t, b, C ? C.measureElement : null), I = j(() => {
    s.setIsTyping(!1), s.onChange(c);
  });
  ue(() => s.registerOption(u, _), [_, u]);
  let M = D(!(l.virtual || l.__demoMode));
  ue(() => {
    if (!l.virtual && !l.__demoMode) return Ke().requestAnimationFrame(() => {
      M.current = !0;
    });
  }, [l.virtual, l.__demoMode]), ue(() => {
    if (M.current && l.comboboxState === 0 && h && l.activationTrigger !== 0) return Ke().requestAnimationFrame(() => {
      var U, Z;
      (Z = (U = b.current) == null ? void 0 : U.scrollIntoView) == null || Z.call(U, { block: "nearest" });
    });
  }, [b, h, l.comboboxState, l.activationTrigger, l.activeOptionIndex]);
  let R = j((U) => {
    U.preventDefault(), U.button === bo.Left && (p || (I(), zl() || requestAnimationFrame(() => m()), l.mode === 0 && s.closeCombobox()));
  }), v = j(() => {
    if (p) return s.goToOption(be.Nothing);
    let U = l.calculateIndex(c);
    s.goToOption(be.Specific, U);
  }), y = vc(), x = j((U) => y.update(U)), S = j((U) => {
    if (!y.wasMoved(U) || p || h) return;
    let Z = l.calculateIndex(c);
    s.goToOption(be.Specific, Z, 0);
  }), T = j((U) => {
    y.wasMoved(U) && (p || h && (l.optionsPropsRef.current.hold || s.goToOption(be.Nothing)));
  }), k = G(() => ({ active: h, focus: h, selected: w, disabled: p }), [h, w, p]), F = { id: u, ref: E, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": w, disabled: void 0, onMouseDown: R, onFocus: v, onPointerEnter: x, onMouseEnter: x, onPointerMove: S, onMouseMove: S, onPointerLeave: T, onMouseLeave: T };
  return Ce()({ ourProps: F, theirProps: d, slot: k, defaultTag: pf, name: "Combobox.Option" });
}
let gf = xe(of), zr = xe(uf), ws = xe(sf), hf = Du, ys = xe(ff), Br = xe(mf), vf = Object.assign(gf, { Input: ws, Button: zr, Label: hf, Options: ys, Option: Br });
function wf(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Wt(e, "escape");
  mo(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Te.Escape && n(o));
  });
}
function yf() {
  var e;
  let [t] = W(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = W((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return ue(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function bf({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = It(n), o = j(() => {
    var i, l;
    let s = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? s.push(a) : "current" in a && a.current instanceof HTMLElement && s.push(a.current));
    if (t != null && t.current) for (let a of t.current) s.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((l = n == null ? void 0 : n.getRootNode()) == null ? void 0 : l.host)) || s.some((u) => a.contains(u)) || s.push(a));
    return s;
  });
  return { resolveContainers: o, contains: j((i) => o().some((l) => l.contains(i))) };
}
let bs = fe(null);
function Ri({ children: e, node: t }) {
  let [n, r] = W(null), o = xs(t ?? n);
  return L.createElement(bs.Provider, { value: o }, e, o === null && L.createElement(sn, { features: Ht.Hidden, ref: (i) => {
    var l, s;
    if (i) {
      for (let a of (s = (l = jt(i)) == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? s : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function xs(e = null) {
  var t;
  return (t = se(bs)) != null ? t : e;
}
function _o() {
  let e = D(!1);
  return ue(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Jt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Jt || {});
function xf() {
  let e = D(0);
  return Bl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function _s(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let _f = "div";
var wt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(wt || {});
function Cf(e, t) {
  let n = D(null), r = Pe(n, t), { initialFocus: o, initialFocusFallback: i, containers: l, features: s = 15, ...a } = e;
  yn() || (s = 0);
  let u = It(n);
  $f(s, { ownerDocument: u });
  let c = Tf(s, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  If(s, { ownerDocument: u, container: n, containers: l, previousActiveElement: c });
  let p = xf(), g = j((_) => {
    let C = n.current;
    C && ((E) => E())(() => {
      Ae(p.current, { [Jt.Forwards]: () => {
        rn(C, et.First, { skipElements: [_.relatedTarget, i] });
      }, [Jt.Backwards]: () => {
        rn(C, et.Last, { skipElements: [_.relatedTarget, i] });
      } });
    });
  }), d = Wt(!!(s & 2), "focus-trap#tab-lock"), m = Tt(), h = D(!1), w = { ref: r, onKeyDown(_) {
    _.key == "Tab" && (h.current = !0, m.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(_) {
    if (!(s & 4)) return;
    let C = _s(l);
    n.current instanceof HTMLElement && C.add(n.current);
    let E = _.relatedTarget;
    E instanceof HTMLElement && E.dataset.headlessuiFocusGuard !== "true" && (Cs(C, E) || (h.current ? rn(n.current, Ae(p.current, { [Jt.Forwards]: () => et.Next, [Jt.Backwards]: () => et.Previous }) | et.WrapAround, { relativeTo: _.target }) : _.target instanceof HTMLElement && nt(_.target)));
  } }, b = Ce();
  return L.createElement(L.Fragment, null, d && L.createElement(sn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: g, features: Ht.Focusable }), b({ ourProps: w, theirProps: a, defaultTag: _f, name: "FocusTrap" }), d && L.createElement(sn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: g, features: Ht.Focusable }));
}
let Sf = xe(Cf), Ef = Object.assign(Sf, { features: wt });
function Rf(e = !0) {
  let t = D(Ue.slice());
  return an(([n], [r]) => {
    r === !0 && n === !1 && Bn(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Ue.slice());
  }, [e, Ue, t]), j(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function $f(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Rf(n);
  an(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && nt(r());
  }, [n]), ds(() => {
    n && nt(r());
  });
}
function Tf(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = D(null), l = Wt(!!(e & 1), "focus-trap#initial-focus"), s = _o();
  return an(() => {
    if (e === 0) return;
    if (!l) {
      o != null && o.current && nt(o.current);
      return;
    }
    let a = n.current;
    a && Bn(() => {
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
      if (r != null && r.current) nt(r.current);
      else {
        if (e & 16) {
          if (rn(a, et.First | et.AutoFocus) !== Ar.Error) return;
        } else if (rn(a, et.First) !== Ar.Error) return;
        if (o != null && o.current && (nt(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, l, e]), i;
}
function If(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = _o(), l = !!(e & 4);
  mo(t == null ? void 0 : t.defaultView, "focus", (s) => {
    if (!l || !i.current) return;
    let a = _s(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let u = o.current;
    if (!u) return;
    let c = s.target;
    c && c instanceof HTMLElement ? Cs(a, c) ? (o.current = c, nt(c)) : (s.preventDefault(), s.stopPropagation(), nt(u)) : nt(o.current);
  }, !0);
}
function Cs(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Ss(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Rs) !== we || L.Children.count(e.children) === 1;
}
let Zn = fe(null);
Zn.displayName = "TransitionContext";
var Of = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Of || {});
function Ff() {
  let e = se(Zn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Mf() {
  let e = se(Qn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Qn = fe(null);
Qn.displayName = "NestingContext";
function Jn(e) {
  return "children" in e ? Jn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Es(e, t) {
  let n = ht(e), r = D([]), o = _o(), i = Tt(), l = j((d, m = at.Hidden) => {
    let h = r.current.findIndex(({ el: w }) => w === d);
    h !== -1 && (Ae(m, { [at.Unmount]() {
      r.current.splice(h, 1);
    }, [at.Hidden]() {
      r.current[h].state = "hidden";
    } }), i.microTask(() => {
      var w;
      !Jn(r) && o.current && ((w = n.current) == null || w.call(n));
    }));
  }), s = j((d) => {
    let m = r.current.find(({ el: h }) => h === d);
    return m ? m.state !== "visible" && (m.state = "visible") : r.current.push({ el: d, state: "visible" }), () => l(d, at.Unmount);
  }), a = D([]), u = D(Promise.resolve()), c = D({ enter: [], leave: [] }), p = j((d, m, h) => {
    a.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([w]) => w !== d)), t == null || t.chains.current[m].push([d, new Promise((w) => {
      a.current.push(w);
    })]), t == null || t.chains.current[m].push([d, new Promise((w) => {
      Promise.all(c.current[m].map(([b, _]) => _)).then(() => w());
    })]), m === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => h(m)) : h(m);
  }), g = j((d, m, h) => {
    Promise.all(c.current[m].splice(0).map(([w, b]) => b)).then(() => {
      var w;
      (w = a.current.shift()) == null || w();
    }).then(() => h(m));
  });
  return G(() => ({ children: r, register: s, unregister: l, onStart: p, onStop: g, wait: u, chains: c }), [s, l, r, p, g, c, u]);
}
let Rs = we, $s = Vt.RenderStrategy;
function Pf(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: u, enterFrom: c, enterTo: p, entered: g, leave: d, leaveFrom: m, leaveTo: h, ...w } = e, [b, _] = W(null), C = D(null), E = Ss(e), I = Pe(...E ? [C, t, _] : t === null ? [] : [t]), M = (n = w.unmount) == null || n ? at.Unmount : at.Hidden, { show: R, appear: v, initial: y } = Ff(), [x, S] = W(R ? "visible" : "hidden"), T = Mf(), { register: k, unregister: F } = T;
  ue(() => k(C), [k, C]), ue(() => {
    if (M === at.Hidden && C.current) {
      if (R && x !== "visible") {
        S("visible");
        return;
      }
      return Ae(x, { hidden: () => F(C), visible: () => k(C) });
    }
  }, [x, C, k, F, R, M]);
  let U = yn();
  ue(() => {
    if (E && U && x === "visible" && C.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [C, x, U, E]);
  let Z = y && !v, B = v && R && y, z = D(!1), O = Es(() => {
    z.current || (S("hidden"), F(C));
  }, T), N = j((ie) => {
    z.current = !0;
    let q = ie ? "enter" : "leave";
    O.onStart(C, q, (ee) => {
      ee === "enter" ? i == null || i() : ee === "leave" && (s == null || s());
    });
  }), A = j((ie) => {
    let q = ie ? "enter" : "leave";
    z.current = !1, O.onStop(C, q, (ee) => {
      ee === "enter" ? l == null || l() : ee === "leave" && (a == null || a());
    }), q === "leave" && !Jn(O) && (S("hidden"), F(C));
  });
  re(() => {
    E && o || (N(R), A(R));
  }, [R, E, o]);
  let V = !(!o || !E || !U || Z), [, $] = ql(V, b, R, { start: N, end: A }), le = st({ ref: I, className: ((r = Pr(w.className, B && u, B && c, $.enter && u, $.enter && $.closed && c, $.enter && !$.closed && p, $.leave && d, $.leave && !$.closed && m, $.leave && $.closed && h, !$.transition && R && g)) == null ? void 0 : r.trim()) || void 0, ...Ul($) }), te = 0;
  x === "visible" && (te |= Me.Open), x === "hidden" && (te |= Me.Closed), $.enter && (te |= Me.Opening), $.leave && (te |= Me.Closing);
  let ae = Ce();
  return L.createElement(Qn.Provider, { value: O }, L.createElement(cs, { value: te }, ae({ ourProps: le, theirProps: w, defaultTag: Rs, features: $s, visible: x === "visible", name: "Transition.Child" })));
}
function Nf(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = D(null), s = Ss(e), a = Pe(...s ? [l, t] : t === null ? [] : [t]);
  yn();
  let u = wn();
  if (n === void 0 && u !== null && (n = (u & Me.Open) === Me.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, p] = W(n ? "visible" : "hidden"), g = Es(() => {
    n || p("hidden");
  }), [d, m] = W(!0), h = D([n]);
  ue(() => {
    d !== !1 && h.current[h.current.length - 1] !== n && (h.current.push(n), m(!1));
  }, [h, n]);
  let w = G(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  ue(() => {
    n ? p("visible") : !Jn(g) && l.current !== null && p("hidden");
  }, [n, g]);
  let b = { unmount: o }, _ = j(() => {
    var I;
    d && m(!1), (I = e.beforeEnter) == null || I.call(e);
  }), C = j(() => {
    var I;
    d && m(!1), (I = e.beforeLeave) == null || I.call(e);
  }), E = Ce();
  return L.createElement(Qn.Provider, { value: g }, L.createElement(Zn.Provider, { value: w }, E({ ourProps: { ...b, as: we, children: L.createElement(Ts, { ref: a, ...b, ...i, beforeEnter: _, beforeLeave: C }) }, theirProps: {}, defaultTag: we, features: $s, visible: c === "visible", name: "Transition" })));
}
function Af(e, t) {
  let n = se(Zn) !== null, r = wn() !== null;
  return L.createElement(L.Fragment, null, !n && r ? L.createElement(jr, { ref: t, ...e }) : L.createElement(Ts, { ref: t, ...e }));
}
let jr = xe(Nf), Ts = xe(Pf), Co = xe(Af), kf = Object.assign(jr, { Child: Co, Root: jr });
var Df = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Df || {}), Lf = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Lf || {});
let Vf = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, So = fe(null);
So.displayName = "DialogContext";
function er(e) {
  let t = se(So);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, er), n;
  }
  return t;
}
function Hf(e, t) {
  return Ae(t.type, Vf, e, t);
}
let $i = xe(function(e, t) {
  let n = Oe(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: l, role: s = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: c = !1, ...p } = e, g = D(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (g.current || (g.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = wn();
  o === void 0 && d !== null && (o = (d & Me.Open) === Me.Open);
  let m = D(null), h = Pe(m, t), w = It(m), b = o ? 0 : 1, [_, C] = ot(Hf, { titleId: null, descriptionId: null, panelRef: Hn() }), E = j(() => i(!1)), I = j((A) => C({ type: 0, id: A })), M = yn() ? b === 0 : !1, [R, v] = Kd(), y = { get current() {
    var A;
    return (A = _.panelRef.current) != null ? A : m.current;
  } }, x = xs(), { resolveContainers: S } = bf({ mainTreeNode: x, portals: R, defaultContainers: [y] }), T = d !== null ? (d & Me.Closing) === Me.Closing : !1;
  kl(u || T ? !1 : M, { allowed: j(() => {
    var A, V;
    return [(V = (A = m.current) == null ? void 0 : A.closest("[data-headlessui-portal]")) != null ? V : null];
  }), disallowed: j(() => {
    var A;
    return [(A = x == null ? void 0 : x.closest("body > *:not(#headlessui-portal-root)")) != null ? A : null];
  }) }), jl(M, S, (A) => {
    A.preventDefault(), E();
  }), wf(M, w == null ? void 0 : w.defaultView, (A) => {
    A.preventDefault(), A.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), E();
  }), Gl(u || T ? !1 : M, w, S), Dl(M, m, E);
  let [k, F] = Tu(), U = G(() => [{ dialogState: b, close: E, setTitleId: I, unmount: c }, _], [b, _, E, I, c]), Z = G(() => ({ open: b === 0 }), [b]), B = { ref: h, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : b === 0 ? !0 : void 0, "aria-labelledby": _.titleId, "aria-describedby": k, unmount: c }, z = !yf(), O = wt.None;
  M && !u && (O |= wt.RestoreFocus, O |= wt.TabLock, a && (O |= wt.AutoFocus), z && (O |= wt.InitialFocus));
  let N = Ce();
  return L.createElement(Ld, null, L.createElement(Ei, { force: !0 }, L.createElement(hs, null, L.createElement(So.Provider, { value: U }, L.createElement(gs, { target: m }, L.createElement(Ei, { force: !1 }, L.createElement(F, { slot: Z }, L.createElement(v, null, L.createElement(Ef, { initialFocus: l, initialFocusFallback: m, containers: S, features: O }, L.createElement(Vu, { value: E }, N({ ourProps: B, theirProps: p, slot: Z, defaultTag: zf, features: Bf, visible: b === 0, name: "Dialog" })))))))))));
}), zf = "div", Bf = Vt.RenderStrategy | Vt.Static;
function jf(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = wn(), l = e.hasOwnProperty("open") || i !== null, s = e.hasOwnProperty("onClose");
  if (!l && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!l) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? L.createElement(Ri, null, L.createElement(kf, { show: r, transition: n, unmount: o.unmount }, L.createElement($i, { ref: t, ...o }))) : L.createElement(Ri, null, L.createElement($i, { ref: t, open: r, ...o }));
}
let Wf = "div";
function Gf(e, t) {
  let n = Oe(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: l, unmount: s }, a] = er("Dialog.Panel"), u = Pe(t, a.panelRef), c = G(() => ({ open: l === 0 }), [l]), p = j((w) => {
    w.stopPropagation();
  }), g = { ref: u, id: r, onClick: p }, d = o ? Co : we, m = o ? { unmount: s } : {}, h = Ce();
  return L.createElement(d, { ...m }, h({ ourProps: g, theirProps: i, slot: c, defaultTag: Wf, name: "Dialog.Panel" }));
}
let Uf = "div";
function qf(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = er("Dialog.Backdrop"), l = G(() => ({ open: o === 0 }), [o]), s = { ref: t, "aria-hidden": !0 }, a = n ? Co : we, u = n ? { unmount: i } : {}, c = Ce();
  return L.createElement(a, { ...u }, c({ ourProps: s, theirProps: r, slot: l, defaultTag: Uf, name: "Dialog.Backdrop" }));
}
let Kf = "h2";
function Yf(e, t) {
  let n = Oe(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: l }] = er("Dialog.Title"), s = Pe(t);
  re(() => (l(r), () => l(null)), [r, l]);
  let a = G(() => ({ open: i === 0 }), [i]), u = { ref: s, id: r };
  return Ce()({ ourProps: u, theirProps: o, slot: a, defaultTag: Kf, name: "Dialog.Title" });
}
let Xf = xe(jf), Is = xe(Gf), Zf = xe(qf), Os = xe(Yf), Qf = Object.assign(Xf, { Panel: Is, Title: Os, Description: Mu });
function Jf({
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
const ep = /* @__PURE__ */ ce(Jf);
function tp({
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
const np = /* @__PURE__ */ ce(tp);
function rp({
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
const op = /* @__PURE__ */ ce(rp);
function ip({
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
const lp = /* @__PURE__ */ ce(ip);
function sp({
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
const ap = /* @__PURE__ */ ce(sp);
function up({
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
const cp = /* @__PURE__ */ ce(up);
function dp({
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
const fp = /* @__PURE__ */ ce(dp);
function pp({
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
const mp = /* @__PURE__ */ ce(pp);
function gp({
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
const hp = /* @__PURE__ */ ce(gp);
function vp({
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
const wp = /* @__PURE__ */ ce(vp);
function yp({
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
const bp = /* @__PURE__ */ ce(yp);
function xp({
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
const _p = /* @__PURE__ */ ce(xp);
function Cp({
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
const Fs = /* @__PURE__ */ ce(Cp), Sp = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear" }, input: { clear: "Clear" } }, Ep = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, Rp = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, $p = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, Tp = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, Ip = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, Op = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, Fp = {
  components: Sp,
  importer: Ep,
  uploader: Rp,
  mapper: $p,
  sheet: Tp,
  validators: Ip,
  importStatus: Op
}, Mp = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer" }, input: { clear: "Effacer" } }, Pp = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, Np = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, Ap = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, kp = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Dp = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, Lp = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, Vp = {
  components: Mp,
  importer: Pp,
  uploader: Np,
  mapper: Ap,
  sheet: kp,
  validators: Dp,
  importStatus: Lp
}, Hp = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar" }, input: { clear: "Limpar" } }, zp = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Bp = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente" }, jp = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Wp = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Gp = { includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único" }, Up = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, qp = {
  components: Hp,
  importer: zp,
  uploader: Bp,
  mapper: jp,
  sheet: Wp,
  validators: Gp,
  importStatus: Up
}, Ms = fe(
  {}
);
function Kp({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ f(Ms.Provider, { value: e, children: t });
}
function it() {
  return se(Ms);
}
const Yp = {
  en: Fp,
  fr: Vp,
  "pt-BR": qp
}, Xp = "en";
function Ti(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? Yp[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function Zp(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Qp(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ f("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    if (o) {
      const i = o[1];
      return t[i] ?? `{${i}}`;
    }
    return r;
  }) });
}
const Ps = fe(
  {}
);
function Jp({ children: e }) {
  const { translationResources: t, locale: n } = it(), r = n ?? Xp;
  function o(l, s = {}) {
    const a = Ti(r, l, t);
    return Zp(a, s);
  }
  function i(l, s = {}) {
    const a = Ti(r, l, t);
    return Qp(a, s);
  }
  return /* @__PURE__ */ f(Ps.Provider, { value: { t: o, tHtml: i }, children: e });
}
function ye() {
  return se(Ps);
}
function Wr({
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
      icon: /* @__PURE__ */ f(
        cp,
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
  }, { icon: c, btnVariant: p, bgColor: g } = u[s];
  return /* @__PURE__ */ f(Qf, { open: e, onClose: t, className: "relative z-10", children: [
    /* @__PURE__ */ f(
      Zf,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ f("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ f("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ f(
      Is,
      {
        transition: !0,
        className: "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ f("div", { className: "sm:flex sm:items-start", children: [
            c && /* @__PURE__ */ f(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${g} sm:mx-0 sm:size-10`,
                children: c
              }
            ),
            /* @__PURE__ */ f("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ f(
                Os,
                {
                  as: "h3",
                  className: "text-base font-semibold text-gray-900",
                  children: n
                }
              ),
              r && /* @__PURE__ */ f("div", { className: "mt-2", children: /* @__PURE__ */ f("p", { className: "text-sm text-gray-500", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ f("div", { className: "sm:ml-3 sm:w-auto", children: /* @__PURE__ */ f(
              He,
              {
                variant: p,
                onClick: () => {
                  l(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ f("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ f(
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
const em = 100, Ns = 5, tm = [
  "text/csv",
  "text/tab-separated-values"
], Ii = ",", nm = 500, rm = "headlessui-portal-root", Gr = "hello-csv", om = 52.62, Ur = "checkbox-column-id", im = 110, lm = 50, sm = 500, am = 150, um = ce(function({ children: t, withFullHeight: n }, r) {
  return re(() => {
    const o = new MutationObserver((i) => {
      for (const l of i)
        l.addedNodes.forEach((s) => {
          s.nodeType === Node.ELEMENT_NODE && s.id === rm && s.classList.add(Gr);
        });
    });
    return o.observe(document.body, { childList: !0, subtree: !1 }), () => o.disconnect();
  }, []), /* @__PURE__ */ f(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Gr}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ f(
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
function cm({
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
const dm = /* @__PURE__ */ ce(cm);
function fm({
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
const pm = /* @__PURE__ */ ce(fm);
function mm({
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
const gm = /* @__PURE__ */ ce(mm);
function hm({
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
const vm = /* @__PURE__ */ ce(hm);
function wm({
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
const As = /* @__PURE__ */ ce(wm), ks = ce(
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
    const { t: c } = ye(), [p, g] = W(e);
    re(() => {
      g(e);
    }, [e]);
    const d = l && e != null && e !== "";
    function m(h) {
      const w = h.target, b = s === "number" ? w == null ? void 0 : w.valueAsNumber : w == null ? void 0 : w.value;
      return (typeof b == "number" && isNaN(b) ? "" : b) ?? "";
    }
    return /* @__PURE__ */ f("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ f(
        "input",
        {
          "aria-label": a["aria-label"],
          ref: u,
          type: s,
          inputMode: s === "number" ? "numeric" : "text",
          placeholder: r,
          value: p,
          onChange: (h) => (n == null ? void 0 : n(m(h))) ?? g(m(h)),
          className: `${i} ${o != null ? "pl-10" : ""} ${l ? "pr-10" : ""} focus:outline-hello-csv-primary col-start-1 row-start-1 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`,
          onBlur: (h) => t == null ? void 0 : t(m(h))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
      }),
      d && /* @__PURE__ */ f(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": c("components.input.clear"),
          onClick: (h) => {
            h.stopPropagation(), n == null || n("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ f(
            As,
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
function fn({
  value: e,
  options: t,
  onChange: n,
  multiple: r = !1,
  compareFunction: o = (p, g) => p === g,
  clearable: i = !1,
  searchable: l = !1,
  placeholder: s,
  classes: a,
  displayPlaceholderWhenSelected: u = !1,
  ...c
}) {
  const { t: p } = ye(), [g, d] = W(""), m = (x) => r && Array.isArray(e) ? e.some((S) => o(S, x)) : o(e, x), h = (x) => {
    if (d(""), r) {
      const S = Array.isArray(x) ? x : [x];
      n(S);
    } else
      n(x);
  }, w = () => {
    d(""), n(r ? [] : null);
  }, b = t.filter((x) => m(x.value)), _ = b.map((x) => x.label).join(", "), C = g && l ? t.filter(
    (x) => String(x.label).toLowerCase().includes(g.toLowerCase())
  ) : t, E = s ?? p("components.select.optionPlaceholder"), I = () => l ? _ : b.length > 0 ? u ? `${E}: ${_}` : _ : "", R = C.some((x) => x.group) ? Object.entries(
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
  })) : [{ label: null, items: C }], v = R.every(({ items: x }) => x.length === 0), y = i && b.length > 0;
  return /* @__PURE__ */ f(vf, { value: e, onChange: h, multiple: r, children: /* @__PURE__ */ f("div", { className: "relative", children: [
    /* @__PURE__ */ f(
      zr,
      {
        className: "w-full",
        "aria-label": c["aria-label"] ?? s,
        children: /* @__PURE__ */ f(
          ws,
          {
            className: `${a} focus:outline-hello-csv-primary block w-full cursor-pointer truncate rounded-md bg-white py-1.5 focus:cursor-text ${y ? "pr-12" : "pr-2"} pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm`,
            displayValue: I,
            onChange: (x) => l && d(x.target.value),
            placeholder: E,
            readOnly: !l
          }
        )
      }
    ),
    y && /* @__PURE__ */ f(
      "span",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": p("components.select.clear"),
        onClick: (x) => {
          x.stopPropagation(), w();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ f(
          As,
          {
            className: "h-5 w-5 text-gray-500 hover:text-gray-700",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ f(zr, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ f(
      gm,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      }
    ) }),
    /* @__PURE__ */ f(
      ys,
      {
        anchor: "bottom",
        transition: !0,
        className: "absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm",
        children: [
          v && /* @__PURE__ */ f(
            Br,
            {
              disabled: !0,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-2 pr-9 pl-3 text-gray-400 select-none",
              children: /* @__PURE__ */ f("span", { className: "block truncate font-normal", children: p("components.select.noOptions") })
            },
            "no-options"
          ),
          R.map(({ label: x, items: S }) => /* @__PURE__ */ f("div", { children: [
            x && /* @__PURE__ */ f("div", { className: "py-2 pr-9 pl-3 text-gray-400 uppercase", children: x }),
            S.map((T) => /* @__PURE__ */ f(
              Br,
              {
                value: T.value,
                className: "group data-focus:bg-hello-csv-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden",
                children: [
                  T.icon,
                  /* @__PURE__ */ f("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: T.label }),
                  m(T.value) && /* @__PURE__ */ f("span", { className: "text-hello-csv-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white", children: /* @__PURE__ */ f(dm, { "aria-hidden": "true", className: "h-5 w-5" }) })
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
function ym({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ f(
      fn,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "hidden sm:block", children: /* @__PURE__ */ f("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ f(
      "nav",
      {
        "aria-label": "Tabs",
        className: "-mb-px flex space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ f(
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
const bm = $t(
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
), xm = $t("group relative h-full w-full", {
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
function _m({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = bm({ variant: e }), o = xm({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ f("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ f("span", { className: r, children: n })
  ] });
}
const Cm = $t(
  "relative inline-flex cursor-pointer items-center px-3 py-2 text-sm font-semibold ring-gray-300 ring-1 ring-inset focus:z-10",
  {
    variants: {
      active: {
        true: "",
        false: "bg-white hover:bg-gray-50"
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
function Sm({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ f("span", { className: "isolate inline-flex rounded-md shadow-xs", children: t.map((n, r) => /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: Cm({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const Em = $t(
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
function At({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = W(!1), [l, s] = W({ top: 0, left: 0 }), a = D(null), u = D(null), [c, p] = W(null);
  re(() => {
    const h = document.createElement("div");
    return h.classList.add(Gr), document.body.appendChild(h), p(h), () => {
      document.body.removeChild(h);
    };
  }, []);
  const g = () => {
    if (!a.current) return;
    const h = a.current.getBoundingClientRect();
    s({
      top: h.bottom + window.scrollY + 8,
      left: h.left + h.width / 2 + window.scrollX
    }), i(!0);
  }, d = () => i(!1), m = Oe();
  return /* @__PURE__ */ f(
    "div",
    {
      ref: a,
      tabIndex: 0,
      className: `${n} relative inline-block`,
      onMouseEnter: g,
      onMouseLeave: d,
      onFocus: g,
      onBlur: d,
      "aria-describedby": m,
      children: [
        t,
        c && pn(
          /* @__PURE__ */ f(
            "div",
            {
              id: m,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: u,
              className: Em({ visible: o, hidden: r }),
              style: {
                top: `${l.top}px`,
                left: `${l.left}px`,
                transform: "translateX(-50%)"
              },
              children: [
                e,
                /* @__PURE__ */ f("div", { className: "absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900" })
              ]
            }
          ),
          c
        )
      ]
    }
  );
}
const Rm = $t("inline-flex items-center rounded-md px-1.5 py-0.5", {
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
function Eo({ children: e, variant: t }) {
  const n = Rm({ variant: t });
  return /* @__PURE__ */ f("div", { className: n, children: e });
}
function $m({
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
const Ds = /* @__PURE__ */ ce($m);
function Tm({
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
const Im = /* @__PURE__ */ ce(Tm);
function Om({
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
const qr = /* @__PURE__ */ ce(Om);
function Fm({
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
const Mm = /* @__PURE__ */ ce(Fm), Pm = {
  info: {
    icon: /* @__PURE__ */ f(
      Mm,
      {
        className: "text-hello-csv-primary-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-primary-extra-light text-hello-csv-primary rounded-md p-4"
  },
  success: {
    icon: /* @__PURE__ */ f(
      Ds,
      {
        className: "text-hello-csv-success-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-success-extra-light text-hello-csv-success rounded-md p-4"
  },
  error: {
    icon: /* @__PURE__ */ f(
      qr,
      {
        className: "text-hello-csv-danger-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-danger-extra-light text-hello-csv-danger rounded-md p-4"
  },
  warning: {
    icon: /* @__PURE__ */ f(
      qr,
      {
        className: "text-hello-csv-warning-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-warning-extra-light text-hello-csv-warning rounded-md p-4"
  }
};
function Ro({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = Pm[e];
  return /* @__PURE__ */ f("div", { className: o, children: /* @__PURE__ */ f("div", { className: "flex", children: [
    /* @__PURE__ */ f("div", { className: "mt-1 shrink-0", children: r }),
    /* @__PURE__ */ f("div", { className: "ml-3", children: [
      t && /* @__PURE__ */ f("div", { className: "text-md", children: t }),
      /* @__PURE__ */ f("div", { className: "text-sm", children: n })
    ] })
  ] }) });
}
function Nm({ children: e }) {
  return /* @__PURE__ */ f("div", { className: "flex", children: [
    /* @__PURE__ */ f("div", { className: "shrink-0", children: /* @__PURE__ */ f(
      _p,
      {
        "aria-hidden": "true",
        className: "text-hello-csv-danger size-5"
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ f("p", { className: "text-hello-csv-danger text-sm", children: e }) })
  ] });
}
function Ls(e, t) {
  return e.indexOf(t) !== -1;
}
function Vs(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function Hs(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
class Ot {
  constructor(t) {
    ke(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class Am extends Ot {
  constructor(n) {
    super(n);
    ke(this, "key");
    ke(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
function km(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class tr extends Ot {
  constructor(n) {
    super(n);
    ke(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(km(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class Dm extends tr {
  constructor() {
    super({
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      validate: "email"
    });
  }
}
class Lm extends Ot {
  constructor(n) {
    super(n);
    ke(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class Vm extends Ot {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class Hm extends Ot {
  constructor(n) {
    super(n);
    ke(this, "delimiter");
    ke(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    var o;
    if ((((o = n == null ? void 0 : n.toString()) == null ? void 0 : o.split(this.delimiter)) ?? []).some((i) => !this.values.includes(i.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class zm extends tr {
  constructor() {
    super({
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      validate: "phone_number"
    });
  }
}
class Bm extends tr {
  constructor() {
    super({
      regex: /^\d{5}(-\d{4})?$/,
      validate: "postal_code"
    });
  }
}
const jm = (e) => e == null, Wm = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function $o(e) {
  return jm(e) || e === "";
}
const Oi = (e) => [...new Set(e)];
function Ln(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function Fi(e) {
  if (e == null)
    return "";
  let t = String(e);
  return t = t.replace(/"/g, '""'), /[",\n\r]/.test(t) && (t = `"${t}"`), t;
}
function zs(e, t, n, r) {
  const o = e.columns.map(
    (s) => Fi(r === "label" ? s.label : s.id)
  ).join(Ii), i = t.map(
    (s) => e.columns.map((a) => {
      const u = s[a.id];
      let c;
      return r === "value" || u == null ? c = u : a.type === "enum" ? c = Vn(
        n[e.id][a.id],
        u
      ) : a.type === "reference" ? c = Vn(
        To(a, n),
        u
      ) : c = u, Fi(c);
    }).join(Ii)
  ), l = [o, ...i].join(`
`);
  return new Blob([l], { type: "text/csv" });
}
function Bs(e, t, n, r) {
  const o = zs(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), l = document.createElement("a");
  l.href = i, l.download = `${e.label}.csv`, l.click(), URL.revokeObjectURL(i);
}
function To(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function Vn(e, t) {
  return typeof t != "string" ? t : e[t] ?? t;
}
class Gm extends Ot {
  isValid(t) {
    if ($o(t))
      return this.definition.error || "validators.required";
  }
}
class Um extends Ot {
  constructor(n) {
    super(n);
    ke(this, "seen");
    this.seen = /* @__PURE__ */ new Set();
  }
  isValid(n) {
    if (this.seen.has(n))
      return this.definition.error || "validators.unique";
    this.seen.add(n);
  }
}
function qm(e) {
  const t = {
    regex_matches: tr,
    required: Gm,
    unique: Um,
    includes: Lm,
    multi_includes: Hm,
    is_integer: Vm,
    postal_code: Bm,
    phone_number: zm,
    email: Dm,
    custom: Am
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function js(e, t) {
  var o, i, l;
  const n = e.typeArguments, r = t.find(
    (s) => s.sheetId === n.sheetId
  );
  return ((l = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((s) => s[n.sheetColumnId])) == null ? void 0 : i.filter((s) => !$o(s))) == null ? void 0 : l.filter((s, a, u) => u.indexOf(s) === a)) ?? [];
}
function Ws(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function Km(e, t, n, r, o, i, l) {
  return G(() => {
    let a = e.rows;
    switch (n) {
      case "errors":
        a = e.rows.filter(
          (u, c) => r.some((p) => p.rowIndex === c)
        );
        break;
      case "valid":
        a = e.rows.filter(
          (u, c) => !r.some((p) => p.rowIndex === c)
        );
        break;
      case "all":
      default:
        a = e.rows;
    }
    return o != null && (a = a.filter((u) => {
      const c = Ws(t, i.id, u);
      return r.find(
        (g) => g.rowIndex === c && g.columnId === o
      ) != null;
    })), l.trim() !== "" && (a = a.filter(
      (u) => Object.values(u).some(
        (c) => {
          var p;
          return (p = Ln(c)) == null ? void 0 : p.includes(Ln(l));
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
function Gs(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function Ym(e) {
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
function Xm(e, t, n) {
  var i;
  const r = e.type === "enum" ? ((i = e.typeArguments.values.find((l) => l.value === t)) == null ? void 0 : i.label) ?? t : e.type === "reference" && t != null ? Vn(
    To(e, n),
    t
  ) : t, o = r == null || typeof r == "string" && r.trim() === "";
  return { displayValue: o ? " " : r, valueEmpty: o };
}
function xn(e) {
  return e.validators && e.validators.length > 0 ? !!e.validators.find(
    (n) => n.validate === "required"
  ) : !1;
}
function Zm(e, t) {
  const n = [];
  if (e.type === "enum" && n.push({
    values: e.typeArguments.values.map((r) => r.value),
    validate: "includes"
  }), e.type === "reference") {
    const r = js(
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
function Qm(e, t, n) {
  const r = [], o = Vs(e.columns, (i, l) => {
    l[i.id] = [], [
      ...i.validators ?? [],
      ...Zm(i, n)
    ].forEach((a) => {
      l[i.id].push(
        qm(a)
      );
    });
  });
  return e.columns.forEach((i) => {
    t.rows.forEach((l, s) => {
      if (!Hs(l) || !(i.id in l) && !xn(i))
        return;
      const a = l[i.id];
      o[i.id].forEach((c) => {
        const p = c.isValid(a, l);
        p != null && r.push({
          sheetId: e.id,
          columnId: i.id,
          rowIndex: s,
          message: p
        });
      });
    });
  }), r;
}
function vr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = Qm(r, o, t);
      n.push(...i);
    }
  }), n;
}
const Jm = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Us = Math.pow(2, 53), eg = -Us;
function qs(e, t, n) {
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
function tg(e, t) {
  return qs(
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
function ng(e, t) {
  return qs(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function rg(e) {
  if (Jm.test(e)) {
    const t = parseFloat(e);
    if (t > eg && t < Us)
      return !0;
  }
  return !1;
}
function og(e, t) {
  return t.type === "number" && rg(e) ? parseFloat(e) : e;
}
function ig(e, t) {
  if (t.type === "enum") {
    const n = t.typeArguments.values.find(
      (r) => r.label === e
    );
    if (n != null)
      return n.value;
  }
  return og(e, t);
}
function lg(e, t, n) {
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
        u != null && (s[u.sheetColumnId] = ig(
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
function sg(e, t, n) {
  const r = n.data, o = lg(e, t, r), i = ng(
    e,
    o
  );
  return tg(e, i);
}
function nr(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function ag(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function ug(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!nr(i))
        return !1;
      const l = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Ln(a)), s = Ln(r);
      return l.includes(s);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const cg = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = ug(r, t);
    n.push(...o);
  }), ag(n);
};
function dg(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function fg(e, t) {
  const n = pg(e, t), r = mg(n);
  return gg(r);
}
function pg(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, Ns);
}
function mg(e) {
  return [
    ...e,
    ...Array(Ns - e.length).fill("")
  ];
}
function gg(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > nm && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function hg(e, t) {
  const { t: n } = ye();
  return e.flatMap(
    (o) => o.columns.filter((i) => nr(i)).map((i) => ({
      label: `${i.label}${xn(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (l) => l.sheetId === o.id && l.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => vg(o, i, n("mapper.unused")));
}
function vg(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function wg(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (xn(r) && nr(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function yg({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = ye();
  return t && /* @__PURE__ */ f("div", { className: "m-4 rounded-sm border border-gray-300 bg-white px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ f("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ f("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ f("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ f("table", { className: "min-w-full divide-y divide-gray-300", children: [
    /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ f(Eo, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ f("tbody", { className: "divide-y divide-gray-300", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { className: "h-12 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: o || i === 0 && /* @__PURE__ */ f("span", { className: "text-gray-500 italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function bg({
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
  return /* @__PURE__ */ f(
    "div",
    {
      className: "hover:bg-hello-csv-muted rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ f("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ f("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(Eo, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ f("div", { className: "mx-5", children: /* @__PURE__ */ f(np, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ f("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ f(
          fn,
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
class _n {
  constructor(t) {
    ke(this, "definition");
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
class xg extends _n {
  constructor(n) {
    super(n);
    ke(this, "key");
    ke(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class _g extends _n {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class Cg extends _n {
  parse(t) {
    if (typeof t == "string" && Ls(t, "-"))
      return t.split("-")[0];
  }
}
const Mi = [
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
class Sg extends _n {
  parse(t) {
    const n = Mi.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Ls(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return Mi[r][1];
    }
  }
}
class Eg extends _n {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function Rg(e) {
  const t = {
    phone_number: _g,
    postal_code: Cg,
    state_code: Sg,
    strip: Eg,
    custom: xg
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function $g(e, t) {
  const n = Vs(
    e.columns,
    (r, o) => {
      o[r.id] = new Tg(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          Rg(i)
        );
      });
    }
  );
  return e.columns.forEach((r) => {
    const o = r.id, i = n[o];
    t.rows.forEach((l) => {
      if (!Hs(l))
        return;
      const s = l[o];
      $o(s) || (l[o] = i.transform(s));
    });
  }), t.rows;
}
function Kr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = $g(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class Tg {
  // Series of transformations
  constructor(t = []) {
    ke(this, "steps");
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
const Ks = "HelloCSV", Ys = 1, tt = "state";
async function Ig(e, t) {
  return new Promise((n, r) => {
    const o = Zs(e, t), i = indexedDB.open(Ks, Ys);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const u = i.result.transaction(tt, "readonly").objectStore(tt).get(o);
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
      s.objectStoreNames.contains(tt) && s.deleteObjectStore(tt), s.createObjectStore(tt);
    };
  });
}
async function Xs(e, t) {
  return new Promise((n, r) => {
    const o = Zs(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const l = indexedDB.open(Ks, Ys);
    l.onerror = () => r(l.error), l.onsuccess = () => {
      const c = l.result.transaction(tt, "readwrite").objectStore(tt).put(i, o);
      c.onerror = () => r(c.error), c.onsuccess = () => n();
    }, l.onupgradeneeded = (s) => {
      const a = s.target.result;
      a.objectStoreNames.contains(tt) || a.createObjectStore(tt);
    };
  });
}
function Zs(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${Og(r)}`;
}
function Og(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function Fg(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
function rr(e) {
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
async function Mg(e, t) {
  const n = rr(e);
  try {
    return t.enabled ? await Pg(e, t) : n;
  } catch {
    return n;
  }
}
async function Pg(e, t) {
  const n = await Ig(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = rr(e);
  return Xs(r, t.customKey), r;
}
const Ng = (e, t) => {
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
        sheetData: Kr(
          e.sheetDefinitions,
          t.payload.mappedData
        ),
        mode: "preview",
        validationErrors: vr(
          e.sheetDefinitions,
          t.payload.mappedData
        )
      };
    case "CELL_CHANGED": {
      const r = e.sheetData.map((o) => {
        if (o.sheetId === t.payload.sheetId) {
          const i = [...o.rows];
          return i[t.payload.rowIndex] = Fg(
            t.payload.value,
            t.payload,
            e
          ), { ...o, rows: i };
        } else
          return o;
      });
      return {
        ...e,
        sheetData: Kr(e.sheetDefinitions, r),
        validationErrors: vr(e.sheetDefinitions, r)
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
        validationErrors: vr(e.sheetDefinitions, n)
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
      return rr(e.sheetDefinitions);
    case "SET_STATE":
      return t.payload.state;
    default:
      return e;
  }
}, Ag = (e, t) => {
  const [n, r] = ot(Ng, rr(e));
  return re(() => {
    (async () => {
      const i = await Mg(e, t);
      r({ type: "SET_STATE", payload: { state: i } });
    })();
  }, []), re(() => {
    t.enabled && Xs(n, t.customKey);
  }, [n, t]), [n, r];
}, Qs = fe({}), Js = fe(
  {}
);
function kg({
  sheets: e,
  persistenceConfig: t,
  children: n
}) {
  const [r, o] = Ag(e, t);
  return /* @__PURE__ */ f(Qs.Provider, { value: r, children: /* @__PURE__ */ f(Js.Provider, { value: o, children: n }) });
}
function vt() {
  return se(Qs);
}
function Dg() {
  return se(Js);
}
function Lg({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = vt(), { sheets: i } = it(), { t: l } = ye(), [s, a] = W(null), u = r ?? [], c = o, p = c.data, g = c.meta.fields, d = hg(
    i,
    u
  ), m = wg(
    i,
    u
  ), h = G(() => s ? fg(p, s) : [], [s, p]);
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f("div", { className: "flex-none text-2xl", children: l("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ f("div", { className: "min-h-0 flex-auto", children: /* @__PURE__ */ f("div", { className: "flex h-full justify-between space-x-5", children: [
      /* @__PURE__ */ f("div", { className: "flex flex-2 flex-col", children: [
        /* @__PURE__ */ f("div", { className: "my-5 flex text-sm font-light uppercase", children: [
          /* @__PURE__ */ f("div", { className: "flex-1", children: l("mapper.importedColumn") }),
          /* @__PURE__ */ f("div", { className: "flex-1", children: l("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex-1 overflow-y-auto", children: g.map((w, b) => {
          const _ = u.find(
            (C) => C.csvColumnName === w
          ) ?? null;
          return /* @__PURE__ */ f(
            bg,
            {
              csvHeader: w,
              currentMapping: _,
              setMapping: (C) => {
                const E = dg(
                  u,
                  w,
                  C
                );
                e(E);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(w);
              }
            },
            b
          );
        }) })
      ] }),
      /* @__PURE__ */ f("div", { className: "bg-hello-csv-muted hidden flex-1 overflow-y-auto sm:block", children: /* @__PURE__ */ f(
        yg,
        {
          examples: h,
          csvHeader: s ?? ""
        }
      ) })
    ] }) }),
    !m && /* @__PURE__ */ f("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ f(Nm, { children: l("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ f("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ f("div", { className: "mt-5 flex justify-between", children: [
      /* @__PURE__ */ f(He, { variant: "secondary", outline: !0, onClick: n, children: l("mapper.back") }),
      /* @__PURE__ */ f(He, { onClick: t, disabled: !m, children: l("mapper.confirm") })
    ] }) })
  ] });
}
var Vg = { NODE_ENV: "production" };
function ut(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: ut(n, r[e])
    }));
  };
}
function or(e) {
  return e instanceof Function;
}
function Hg(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function zg(e, t) {
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
    if (!(s.length !== r.length || s.some((c, p) => r[p] !== c)))
      return o;
    r = s;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const c = Math.round((Date.now() - l) * 100) / 100, p = Math.round((Date.now() - u) * 100) / 100, g = p / 16, d = (m, h) => {
        for (m = String(m); m.length < h; )
          m = " " + m;
        return m;
      };
      console.info(`%c⏱ ${d(p, 5)} /${d(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
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
    key: Vg.NODE_ENV === "development",
    onChange: r
  };
}
function Bg(e, t, n, r) {
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
function jg(e, t, n, r) {
  var o, i;
  const s = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = s.accessorKey;
  let u = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, c;
  if (s.accessorFn ? c = s.accessorFn : a && (a.includes(".") ? c = (g) => {
    let d = g;
    for (const h of a.split(".")) {
      var m;
      d = (m = d) == null ? void 0 : m[h];
    }
    return d;
  } : c = (g) => g[s.accessorKey]), !u)
    throw new Error();
  let p = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: Y(() => [!0], () => {
      var g;
      return [p, ...(g = p.columns) == null ? void 0 : g.flatMap((d) => d.getFlatColumns())];
    }, X(e.options, "debugColumns")),
    getLeafColumns: Y(() => [e._getOrderColumnsFn()], (g) => {
      var d;
      if ((d = p.columns) != null && d.length) {
        let m = p.columns.flatMap((h) => h.getLeafColumns());
        return g(m);
      }
      return [p];
    }, X(e.options, "debugColumns"))
  };
  for (const g of e._features)
    g.createColumn == null || g.createColumn(p, e);
  return p;
}
const $e = "debugHeaders";
function Pi(e, t, n) {
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
const Wg = {
  createTable: (e) => {
    e.getHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, l;
      const s = (i = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? l : [], u = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return En(t, [...s, ...u, ...a], e);
    }, X(e.options, $e)), e.getCenterHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), En(t, n, e, "center")), X(e.options, $e)), e.getLeftHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return En(t, i, e, "left");
    }, X(e.options, $e)), e.getRightHeaderGroups = Y(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
      return En(t, i, e, "right");
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
function En(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(g, d) {
    d === void 0 && (d = 1), l = Math.max(l, d), g.filter((m) => m.getIsVisible()).forEach((m) => {
      var h;
      (h = m.columns) != null && h.length && s(m.columns, d + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const u = (g, d) => {
    const m = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    g.forEach((w) => {
      const b = [...h].reverse()[0], _ = w.column.depth === m.depth;
      let C, E = !1;
      if (_ && w.column.parent ? C = w.column.parent : (C = w.column, E = !0), b && (b == null ? void 0 : b.column) === C)
        b.subHeaders.push(w);
      else {
        const I = Pi(n, C, {
          id: [r, d, C.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: E,
          placeholderId: E ? `${h.filter((M) => M.column === C).length}` : void 0,
          depth: d,
          index: h.length
        });
        I.subHeaders.push(w), h.push(I);
      }
      m.headers.push(w), w.headerGroup = m;
    }), a.push(m), d > 0 && u(h, d - 1);
  }, c = t.map((g, d) => Pi(n, g, {
    depth: l,
    index: d
  }));
  u(c, l - 1), a.reverse();
  const p = (g) => g.filter((m) => m.column.getIsVisible()).map((m) => {
    let h = 0, w = 0, b = [0];
    m.subHeaders && m.subHeaders.length ? (b = [], p(m.subHeaders).forEach((C) => {
      let {
        colSpan: E,
        rowSpan: I
      } = C;
      h += E, b.push(I);
    })) : h = 1;
    const _ = Math.min(...b);
    return w = w + _, m.colSpan = h, m.rowSpan = w, {
      colSpan: h,
      rowSpan: w
    };
  });
  return p((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const Gg = (e, t, n, r, o, i, l) => {
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
    getLeafRows: () => zg(s.subRows, (a) => a.subRows),
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
    getAllCells: Y(() => [e.getAllLeafColumns()], (a) => a.map((u) => Bg(e, s, u, u.id)), X(e.options, "debugRows")),
    _getAllCellsByColumnId: Y(() => [s.getAllCells()], (a) => a.reduce((u, c) => (u[c.column.id] = c, u), {}), X(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, Ug = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ea = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
ea.autoRemove = (e) => ze(e);
const ta = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
ta.autoRemove = (e) => ze(e);
const na = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
na.autoRemove = (e) => ze(e);
const ra = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
ra.autoRemove = (e) => ze(e);
const oa = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
oa.autoRemove = (e) => ze(e) || !(e != null && e.length);
const ia = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
ia.autoRemove = (e) => ze(e) || !(e != null && e.length);
const la = (e, t, n) => e.getValue(t) === n;
la.autoRemove = (e) => ze(e);
const sa = (e, t, n) => e.getValue(t) == n;
sa.autoRemove = (e) => ze(e);
const Io = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Io.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
Io.autoRemove = (e) => ze(e) || ze(e[0]) && ze(e[1]);
const Je = {
  includesString: ea,
  includesStringSensitive: ta,
  equalsString: na,
  arrIncludes: ra,
  arrIncludesAll: oa,
  arrIncludesSome: ia,
  equals: la,
  weakEquals: sa,
  inNumberRange: Io
};
function ze(e) {
  return e == null || e === "";
}
const qg = {
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
      return typeof r == "string" ? Je.includesString : typeof r == "number" ? Je.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Je.equals : Array.isArray(r) ? Je.arrIncludes : Je.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return or(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Je[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((c) => c.id === e.id), l = ut(n, i ? i.value : void 0);
        if (Ni(o, l, e)) {
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
        return (i = ut(t, o)) == null ? void 0 : i.filter((l) => {
          const s = n.find((a) => a.id === l.id);
          if (s) {
            const a = s.getFilterFn();
            if (Ni(a, l.value, s))
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
function Ni(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Kg = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Yg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Xg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Zg = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, Qg = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Jg = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Hg(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, eh = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), th = (e, t) => new Set(t.map((n) => n.getValue(e))).size, nh = (e, t) => t.length, wr = {
  sum: Kg,
  min: Yg,
  max: Xg,
  extent: Zg,
  mean: Qg,
  median: Jg,
  unique: eh,
  uniqueCount: th,
  count: nh
}, rh = {
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
        return wr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return wr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return or(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : wr[e.columnDef.aggregationFn];
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
function oh(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const ih = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ve("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = Y((n) => [on(t, n)], (n) => n.findIndex((r) => r.id === e.id), X(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = on(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = on(t, n);
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
      return oh(i, n, r);
    }, X(e.options, "debugTable"));
  }
}, yr = () => ({
  left: [],
  right: []
}), lh = {
  getInitialState: (e) => ({
    columnPinning: yr(),
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
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((p) => !(r != null && r.includes(p))), ...r]
          };
        }
        if (n === "left") {
          var u, c;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((c = o == null ? void 0 : o.right) != null ? c : []).filter((p) => !(r != null && r.includes(p)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((p) => !(r != null && r.includes(p))),
          right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((p) => !(r != null && r.includes(p)))
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
      return e.setColumnPinning(t ? yr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : yr());
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
}, Rn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, br = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), sh = {
  getDefaultColumnDef: () => Rn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: br(),
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Rn.minSize, (r = i ?? e.columnDef.size) != null ? r : Rn.size), (o = e.columnDef.maxSize) != null ? o : Rn.maxSize);
    }, e.getStart = Y((n) => [n, on(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.getAfter = Y((n) => [n, on(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), X(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), xr(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], a = xr(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (b, _) => {
          typeof _ == "number" && (t.setColumnSizingInfo((C) => {
            var E, I;
            const M = t.options.columnResizeDirection === "rtl" ? -1 : 1, R = (_ - ((E = C == null ? void 0 : C.startOffset) != null ? E : 0)) * M, v = Math.max(R / ((I = C == null ? void 0 : C.startSize) != null ? I : 0), -0.999999);
            return C.columnSizingStart.forEach((y) => {
              let [x, S] = y;
              u[x] = Math.round(Math.max(S + S * v, 0) * 100) / 100;
            }), {
              ...C,
              deltaOffset: R,
              deltaPercentage: v
            };
          }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((C) => ({
            ...C,
            ...u
          })));
        }, p = (b) => c("move", b), g = (b) => {
          c("end", b), t.setColumnSizingInfo((_) => ({
            ..._,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, d = n || typeof document < "u" ? document : null, m = {
          moveHandler: (b) => p(b.clientX),
          upHandler: (b) => {
            d == null || d.removeEventListener("mousemove", m.moveHandler), d == null || d.removeEventListener("mouseup", m.upHandler), g(b.clientX);
          }
        }, h = {
          moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), p(b.touches[0].clientX), !1),
          upHandler: (b) => {
            var _;
            d == null || d.removeEventListener("touchmove", h.moveHandler), d == null || d.removeEventListener("touchend", h.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), g((_ = b.touches[0]) == null ? void 0 : _.clientX);
          }
        }, w = ah() ? {
          passive: !1
        } : !1;
        xr(i) ? (d == null || d.addEventListener("touchmove", h.moveHandler, w), d == null || d.addEventListener("touchend", h.upHandler, w)) : (d == null || d.addEventListener("mousemove", m.moveHandler, w), d == null || d.addEventListener("mouseup", m.upHandler, w)), t.setColumnSizingInfo((b) => ({
          ...b,
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
      e.setColumnSizingInfo(t ? br() : (n = e.initialState.columnSizingInfo) != null ? n : br());
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
let $n = null;
function ah() {
  if (typeof $n == "boolean") return $n;
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
  return $n = e, $n;
}
function xr(e) {
  return e.type === "touchstart";
}
const uh = {
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
function on(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const ch = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, dh = {
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
    e.getGlobalAutoFilterFn = () => Je.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return or(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Je[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, fh = {
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
}, Yr = 0, Xr = 10, _r = () => ({
  pageIndex: Yr,
  pageSize: Xr
}), ph = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ..._r(),
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
      const o = (i) => ut(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? _r() : (o = e.initialState.pagination) != null ? o : _r());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = ut(r, o.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Yr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Yr);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? Xr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Xr);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, ut(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
        return {
          ...o,
          pageIndex: s,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let l = ut(r, (i = e.options.pageCount) != null ? i : -1);
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
}, Cr = () => ({
  top: [],
  bottom: []
}), mh = {
  getInitialState: (e) => ({
    rowPinning: Cr(),
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
          var p, g;
          return {
            top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((h) => !(s != null && s.has(h))),
            bottom: [...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)]
          };
        }
        if (n === "top") {
          var d, m;
          return {
            top: [...((d = a == null ? void 0 : a.top) != null ? d : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)],
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
      return e.setRowPinning(t ? Cr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Cr());
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
}, gh = {
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
        Zr(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Y(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Sr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getFilteredSelectedRowModel = Y(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Sr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, X(e.options, "debugTable")), e.getGroupedSelectedRowModel = Y(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Sr(e, n) : {
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
        return Zr(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Oo(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Qr(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Qr(e, n) === "all";
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
}, Zr = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, !0);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => Zr(e, s.id, n, r, o));
};
function Sr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var u;
      const c = Oo(a, n);
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
function Oo(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Qr(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (Oo(l, t) ? i = !0 : o = !1), l.subRows && l.subRows.length)) {
      const s = Qr(l, t);
      s === "all" ? i = !0 : (s === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Jr = /([0-9]+)/gm, hh = (e, t, n) => aa(mt(e.getValue(n)).toLowerCase(), mt(t.getValue(n)).toLowerCase()), vh = (e, t, n) => aa(mt(e.getValue(n)), mt(t.getValue(n))), wh = (e, t, n) => Fo(mt(e.getValue(n)).toLowerCase(), mt(t.getValue(n)).toLowerCase()), yh = (e, t, n) => Fo(mt(e.getValue(n)), mt(t.getValue(n))), bh = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, xh = (e, t, n) => Fo(e.getValue(n), t.getValue(n));
function Fo(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function mt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function aa(e, t) {
  const n = e.split(Jr).filter(Boolean), r = t.split(Jr).filter(Boolean);
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
const Qt = {
  alphanumeric: hh,
  alphanumericCaseSensitive: vh,
  text: wh,
  textCaseSensitive: yh,
  datetime: bh,
  basic: xh
}, _h = {
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
          return Qt.datetime;
        if (typeof i == "string" && (r = !0, i.split(Jr).length > 1))
          return Qt.alphanumeric;
      }
      return r ? Qt.text : Qt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return or(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Qt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((l) => {
        const s = l == null ? void 0 : l.find((d) => d.id === e.id), a = l == null ? void 0 : l.findIndex((d) => d.id === e.id);
        let u = [], c, p = i ? n : o === "desc";
        if (l != null && l.length && e.getCanMultiSort() && r ? s ? c = "toggle" : c = "add" : l != null && l.length && a !== l.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (i || o || (c = "remove")), c === "add") {
          var g;
          u = [...l, {
            id: e.id,
            desc: p
          }], u.splice(0, u.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = l.map((d) => d.id === e.id ? {
          ...d,
          desc: p
        } : d) : c === "remove" ? u = l.filter((d) => d.id !== e.id) : u = [{
          id: e.id,
          desc: p
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
}, Ch = [
  Wg,
  uh,
  ih,
  lh,
  Ug,
  qg,
  ch,
  //depends on ColumnFaceting
  dh,
  //depends on ColumnFiltering
  _h,
  rh,
  //depends on RowSorting
  fh,
  ph,
  mh,
  gh,
  sh
];
function Sh(e) {
  var t, n;
  const r = [...Ch, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((g, d) => Object.assign(g, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(o)), {}), l = (g) => o.options.mergeOptions ? o.options.mergeOptions(i, g) : {
    ...i,
    ...g
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((g) => {
    var d;
    a = (d = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? d : a;
  });
  const u = [];
  let c = !1;
  const p = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: a,
    _queue: (g) => {
      u.push(g), c || (c = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        c = !1;
      }).catch((d) => setTimeout(() => {
        throw d;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (g) => {
      const d = ut(g, o.options);
      o.options = l(d);
    },
    getState: () => o.options.state,
    setState: (g) => {
      o.options.onStateChange == null || o.options.onStateChange(g);
    },
    _getRowId: (g, d, m) => {
      var h;
      return (h = o.options.getRowId == null ? void 0 : o.options.getRowId(g, d, m)) != null ? h : `${m ? [m.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (g, d) => {
      let m = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
      if (!m && (m = o.getCoreRowModel().rowsById[g], !m))
        throw new Error();
      return m;
    },
    _getDefaultColumnDef: Y(() => [o.options.defaultColumn], (g) => {
      var d;
      return g = (d = g) != null ? d : {}, {
        header: (m) => {
          const h = m.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var h, w;
          return (h = (w = m.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? h : null;
        },
        ...o._features.reduce((m, h) => Object.assign(m, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...g
      };
    }, X(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: Y(() => [o._getColumnDefs()], (g) => {
      const d = function(m, h, w) {
        return w === void 0 && (w = 0), m.map((b) => {
          const _ = jg(o, b, w, h), C = b;
          return _.columns = C.columns ? d(C.columns, _, w + 1) : [], _;
        });
      };
      return d(g);
    }, X(e, "debugColumns")),
    getAllFlatColumns: Y(() => [o.getAllColumns()], (g) => g.flatMap((d) => d.getFlatColumns()), X(e, "debugColumns")),
    _getAllFlatColumnsById: Y(() => [o.getAllFlatColumns()], (g) => g.reduce((d, m) => (d[m.id] = m, d), {}), X(e, "debugColumns")),
    getAllLeafColumns: Y(() => [o.getAllColumns(), o._getOrderColumnsFn()], (g, d) => {
      let m = g.flatMap((h) => h.getLeafColumns());
      return d(m);
    }, X(e, "debugColumns")),
    getColumn: (g) => o._getAllFlatColumnsById()[g]
  };
  Object.assign(o, p);
  for (let g = 0; g < o._features.length; g++) {
    const d = o._features[g];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function Eh() {
  return (e) => Y(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let u = 0; u < o.length; u++) {
        const c = Gg(e, e._getRowId(o[u], u, l), o[u], u, i, void 0, l == null ? void 0 : l.id);
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
function Rh() {
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
      return u.sort((c, p) => {
        for (let d = 0; d < i.length; d += 1) {
          var g;
          const m = i[d], h = l[m.id], w = h.sortUndefined, b = (g = m == null ? void 0 : m.desc) != null ? g : !1;
          let _ = 0;
          if (w) {
            const C = c.getValue(m.id), E = p.getValue(m.id), I = C === void 0, M = E === void 0;
            if (I || M) {
              if (w === "first") return I ? -1 : 1;
              if (w === "last") return I ? 1 : -1;
              _ = I && M ? 0 : I ? w : -w;
            }
          }
          if (_ === 0 && (_ = h.sortingFn(c, p, m.id)), _ !== 0)
            return b && (_ *= -1), h.invertSorting && (_ *= -1), _;
        }
        return c.index - p.index;
      }), u.forEach((c) => {
        var p;
        o.push(c), (p = c.subRows) != null && p.length && (c.subRows = s(c.subRows));
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
function Ai(e, t) {
  return e ? $h(e) ? /* @__PURE__ */ P(e, t) : e : null;
}
function $h(e) {
  return Th(e) || typeof e == "function" || Ih(e);
}
function Th(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Ih(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Oh(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = W(() => ({
    current: Sh(t)
  })), [r, o] = W(() => n.current.initialState);
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
const Fh = 500, ki = 10;
function Mh(e, { disabled: t = !1 } = {}) {
  const n = D(null), r = D(0), o = D(0), i = D(!1), l = oe(
    (u) => {
      if (t) return;
      const c = u.touches[0];
      r.current = c.clientX, o.current = c.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, Fh);
    },
    [e, t]
  ), s = oe(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = oe(
    (u) => {
      const c = u.touches[0], p = Math.abs(c.clientX - r.current), g = Math.abs(c.clientY - o.current);
      (p > ki || g > ki) && (i.current = !0, s());
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
function Ph({
  rowId: e,
  columnDefinition: t,
  value: n,
  onUpdated: r,
  allData: o,
  clearRowsSelection: i,
  errorsText: l,
  enumLabelDict: s
}) {
  const { t: a } = ye(), [u, c] = W(!1), p = D(null);
  re(() => {
    u && (i(), p.current && p.current.focus());
  }, [u]);
  const { displayValue: g, valueEmpty: d } = Xm(
    t,
    n,
    s
  ), m = Gs(t), h = Mh(
    () => {
      m || c(!0);
    },
    { disabled: m }
  ), w = l ? "bg-hello-csv-danger-extra-light" : m ? "bg-hello-csv-muted" : "";
  if (!u)
    return /* @__PURE__ */ f(
      _m,
      {
        variant: l ? "error" : "info",
        tooltipText: l || (m ? a("sheet.readOnly") : ""),
        children: /* @__PURE__ */ f(
          "div",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": `row ${Number(e) + 1} ${t.label} ${g}`,
            ...h,
            onClick: (_) => !m && _.detail > 1 && c(!0),
            className: `h-full w-full py-4 pr-3 pl-4 ${w} touch-manipulation truncate overflow-hidden whitespace-nowrap`,
            title: d ? void 0 : `${g}`,
            children: t.customRender ? t.customRender(n, g) : g
          }
        )
      }
    );
  function b(_) {
    c(!1), t.type === "number" && _ !== "" && !isNaN(Number(_)) ? r(Number(_)) : r(_ ?? "");
  }
  if (t.type === "reference") {
    const _ = js(
      t,
      o
    ), C = To(t, s), E = _.map((I) => ({
      label: String(Vn(C, I)),
      value: I
    }));
    return /* @__PURE__ */ f(
      fn,
      {
        searchable: !0,
        options: E,
        value: n,
        onChange: (I) => b(I ?? "")
      }
    );
  }
  if (t.type === "enum") {
    const C = t.typeArguments.values;
    return /* @__PURE__ */ f(
      fn,
      {
        searchable: !0,
        options: C,
        value: n,
        onChange: (E) => b(E ?? "")
      }
    );
  }
  return /* @__PURE__ */ f(
    ks,
    {
      "aria-label": `edit row ${Number(e) + 1}'s ${t.label}`,
      type: t.type === "number" ? "number" : "text",
      classes: "block w-full",
      value: n,
      onBlur: b,
      ref: p
    }
  );
}
function Nh({
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
  function u(_, C) {
    return r.filter(
      (E) => E.columnId === _ && E.rowIndex === C
    );
  }
  const c = "bg-hello-csv-muted py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 whitespace-nowrap border-y border-gray-300", p = "text-sm font-medium whitespace-nowrap text-gray-900 border-b border-gray-300", g = e.getRowModel().rows, d = Pl({
    count: g.length,
    getScrollElement: () => l.current,
    estimateSize: () => om,
    measureElement: (_) => _ == null ? void 0 : _.getBoundingClientRect().height,
    overscan: 20
  }), m = d.getVirtualItems().map((_) => ({
    row: g[_.index],
    index: _.index,
    start: _.start,
    end: _.end
  })), [h, w] = m.length > 0 ? [
    Math.max(
      0,
      m[0].start - d.options.scrollMargin
    ),
    Math.max(
      0,
      d.getTotalSize() - m[m.length - 1].end
    )
  ] : [0, 0], b = oe(
    (_) => {
      _ && d.measureElement(_);
    },
    [d]
  );
  return /* @__PURE__ */ f(
    "table",
    {
      className: "w-full table-fixed border-separate border-spacing-0",
      "aria-label": a("sheet.sheetTitle"),
      children: [
        /* @__PURE__ */ f("thead", { className: "bg-hello-csv-muted sticky top-0 z-10", children: e.getHeaderGroups().map((_) => /* @__PURE__ */ f("tr", { children: _.headers.map((C) => /* @__PURE__ */ f(
          "th",
          {
            className: C.column.id === Ur ? `${c} sticky left-0 z-20` : `relative z-10 ${c}`,
            colSpan: C.colSpan,
            style: { width: C.getSize() },
            children: /* @__PURE__ */ f(
              "div",
              {
                className: `flex w-full ${C.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
                onClick: C.column.getToggleSortingHandler(),
                children: [
                  C.isPlaceholder ? null : /* @__PURE__ */ f("div", { children: Ai(
                    C.column.columnDef.header,
                    C.getContext()
                  ) }, `header-${_.id}-${C.id}`),
                  /* @__PURE__ */ f(
                    "span",
                    {
                      className: "ml-2 flex-none rounded-sm bg-gray-500 text-gray-200",
                      children: {
                        asc: /* @__PURE__ */ f(vm, { "aria-hidden": "true", className: "size-5" }),
                        desc: /* @__PURE__ */ f(
                          pm,
                          {
                            "aria-hidden": "true",
                            className: "size-5"
                          }
                        )
                      }[C.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${_.id}-${C.id}`
                  ),
                  C.column.getCanResize() && /* @__PURE__ */ f(
                    "div",
                    {
                      onMouseDown: C.getResizeHandler(),
                      onTouchStart: C.getResizeHandler(),
                      className: "absolute top-0 right-0 h-full w-0.5 cursor-col-resize touch-none bg-gray-200 select-none"
                    },
                    `resize-icon-${_.id}-${C.id}`
                  )
                ]
              }
            )
          },
          C.id
        )) }, _.id)) }),
        /* @__PURE__ */ f(
          "tbody",
          {
            className: "divide-y divide-gray-200",
            style: {
              height: `${d.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { style: { height: h } }) }),
              m.map(({ row: _, index: C }) => /* @__PURE__ */ f("tr", { "data-index": C, ref: b, children: _.getVisibleCells().map((E, I) => {
                if (E.column.id === Ur)
                  return /* @__PURE__ */ f(
                    "td",
                    {
                      "aria-label": `Select row ${Number(_.id) + 1}`,
                      className: `bg-hello-csv-muted ${p} sticky left-0 z-6 pr-3 pl-4`,
                      style: { width: E.column.getSize() },
                      children: Ai(E.column.columnDef.cell, E.getContext())
                    },
                    E.id
                  );
                const M = t.columns[I - 1].id, R = Ws(
                  n,
                  t.id,
                  _.original
                ), v = u(M, R).map((y) => a(y.message)).join(", ");
                return /* @__PURE__ */ f(
                  "td",
                  {
                    className: p,
                    style: { width: E.column.getSize() },
                    children: /* @__PURE__ */ f(
                      Ph,
                      {
                        rowId: _.id,
                        columnDefinition: t.columns.find((y) => y.id === M),
                        allData: n,
                        value: E.getValue(),
                        onUpdated: (y) => o(R, M, y),
                        clearRowsSelection: () => i([]),
                        errorsText: v,
                        enumLabelDict: s
                      }
                    )
                  },
                  E.id
                );
              }) }, _.id)),
              /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { style: { height: w } }) })
            ]
          }
        )
      ]
    }
  );
}
function Ah({ column: e }) {
  const { t } = ye(), n = Gs(e);
  return /* @__PURE__ */ f(
    "div",
    {
      className: "flex items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ f("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ f(Fs, { className: "absolute top-0 left-0 h-5 w-5 text-gray-400" }),
          /* @__PURE__ */ f(hp, { className: "absolute top-0 left-0 h-5 w-5 text-gray-500" })
        ] }),
        e.label,
        " ",
        xn(e) && "*"
      ]
    }
  );
}
function kh({
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
  addEmptyRow: p,
  sheetValidationErrors: g,
  rowValidationSummary: d,
  resetState: m,
  enumLabelDict: h
}) {
  const { csvDownloadMode: w } = it(), { t: b } = ye(), [_, C] = W(!1), [E, I] = W(!1), M = "pointer-events-none cursor-not-allowed opacity-50";
  function R(S) {
    const T = e.columns.find(
      (F) => F.id === S
    ), k = Oi(
      g.filter((F) => F.columnId === S).map((F) => F.rowIndex)
    ).length;
    return {
      label: `${(T == null ? void 0 : T.label) || S} (${k})`,
      value: S
    };
  }
  const v = Oi(
    g.map((S) => S.columnId)
  ).map((S) => R(S));
  a != null && v.find((S) => S.value === a) == null && v.push(R(a));
  const y = [
    {
      value: "all",
      label: b("sheet.all") + ` (${d.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: b("sheet.valid") + ` (${d.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: b("sheet.invalid") + ` (${d.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function x() {
    c({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ f("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ f("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(Sm, { activeButton: o, buttons: y }) }),
      /* @__PURE__ */ f(
        ks,
        {
          clearable: !0,
          value: l,
          onChange: (S) => s(S),
          placeholder: b("sheet.search"),
          iconBuilder: (S) => /* @__PURE__ */ f(mp, { ...S })
        }
      ),
      /* @__PURE__ */ f(
        At,
        {
          tooltipText: b(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ f(
            bp,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": b(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : M}`,
              onClick: () => C(!0)
            }
          )
        }
      ),
      /* @__PURE__ */ f(At, { tooltipText: b("sheet.addRowsTooltip"), children: /* @__PURE__ */ f(wp, { className: "h-6 w-6 cursor-pointer", onClick: p }) }),
      /* @__PURE__ */ f(At, { tooltipText: b("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ f(
        ep,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : M}`,
          onClick: () => Bs(
            e,
            t,
            h,
            w
          )
        }
      ) }),
      /* @__PURE__ */ f(
        fn,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: b("sheet.filterByError"),
          classes: "min-w-48",
          options: v,
          value: a,
          onChange: (S) => u(S)
        }
      ),
      /* @__PURE__ */ f(
        Wr,
        {
          open: _,
          setOpen: C,
          onConfirm: x,
          title: b("sheet.removeConfirmationModalTitle"),
          confirmationText: b("sheet.removeConfirmationModalConfirmationText"),
          subTitle: b("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ f(At, { className: "ml-5", tooltipText: b("sheet.resetTooltip"), children: /* @__PURE__ */ f(
      Fs,
      {
        className: "h-6 w-6 cursor-pointer",
        onClick: () => I(!0)
      }
    ) }),
    /* @__PURE__ */ f(
      Wr,
      {
        open: E,
        setOpen: I,
        onConfirm: m,
        title: b("sheet.resetConfirmationModalTitle"),
        confirmationText: b("sheet.resetConfirmationModalConfirmationText"),
        subTitle: b("sheet.resetConfirmationModalSubTitle"),
        variant: "danger"
      }
    )
  ] });
}
function Dh({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ f(ul, { checked: r, setChecked: o });
}
function Lh({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((l) => l !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ f(
    ul,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
function Vh({
  sheetDefinition: e,
  data: t,
  sheetValidationErrors: n,
  setRowData: r,
  removeRows: o,
  addEmptyRow: i,
  resetState: l,
  enumLabelDict: s
}) {
  const { sheetData: a } = vt(), [u, c] = W([]), [p, g] = W("all"), [d, m] = W(""), [h, w] = W(
    null
  );
  re(() => {
    c([]), g("all");
  }, [e]);
  const b = Km(
    t,
    a,
    p,
    n,
    h,
    e,
    d
  ), _ = G(() => {
    const R = t.rows, v = R.filter(
      (x, S) => !n.some((T) => T.rowIndex === S)
    ), y = R.filter(
      (x, S) => n.some((T) => T.rowIndex === S)
    );
    return {
      all: R.length,
      valid: v.length,
      errors: y.length
    };
  }, [t, n]), C = G(
    () => [
      {
        id: Ur,
        header: () => /* @__PURE__ */ f(
          Dh,
          {
            visibleData: b,
            selectedRows: u,
            setSelectedRows: c
          }
        ),
        cell: ({ row: R }) => /* @__PURE__ */ f(
          Lh,
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
        size: im
      },
      ...e.columns.map(
        (R) => ({
          id: R.id,
          accessorFn: (v) => v[R.id],
          header: () => /* @__PURE__ */ f(Ah, { column: R }),
          sortUndefined: "last",
          sortingFn: "auto",
          meta: { columnLabel: R.label },
          enableResizing: !0
        })
      )
    ],
    [e, u, b]
  ), E = Oh({
    data: b,
    columns: C,
    getCoreRowModel: Eh(),
    getSortedRowModel: Rh(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: lm,
      maxSize: sm,
      size: am
    }
  });
  function I(R, v, y) {
    const x = { ...t.rows[R] };
    x[v] = y, r({
      sheetId: e.id,
      value: x,
      rowIndex: R
    });
  }
  const M = D(null);
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f("div", { className: "flex-none", children: /* @__PURE__ */ f(
      kh,
      {
        sheetDefinition: e,
        rowData: b,
        selectedRows: u,
        setSelectedRows: c,
        viewMode: p,
        setViewMode: g,
        searchPhrase: d,
        setSearchPhrase: m,
        errorColumnFilter: h,
        setErrorColumnFilter: w,
        removeRows: o,
        addEmptyRow: i,
        sheetValidationErrors: n,
        rowValidationSummary: _,
        resetState: l,
        enumLabelDict: s
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "min-h-0 flex-1 overflow-auto", ref: M, children: /* @__PURE__ */ f(
      Nh,
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
function ua(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function Hh(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (l) => l.id === o.sheetId
    );
    i && Bs(
      i,
      o.rows,
      n,
      r
    );
  });
}
const Di = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const l = t.find(
    (s) => s.id === i.sheetId
  );
  return l ? o + zs(
    l,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function zh(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => nr(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      xn(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const On = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, Bh = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), jh = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await Bh(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), l = new Blob([i], { type: "text/csv" });
    return new File([l], o, {
      type: "text/csv"
    });
  }
  return e;
};
function Wh({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: l
  } = vt(), { csvDownloadMode: s } = it(), { t: a } = ye(), u = ua(o);
  return /* @__PURE__ */ f("div", { className: "flex flex-row px-4 pt-3 pb-2", children: /* @__PURE__ */ f("div", { className: "flex-1 space-y-4", children: [
    /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ f("div", { className: "my-2 mr-5 text-center", children: /* @__PURE__ */ f(ap, { className: "text-hello-csv-primary h-8 w-8" }) }),
      /* @__PURE__ */ f("div", { className: "flex-1", children: [
        /* @__PURE__ */ f("div", { className: "my-2 text-sm font-light uppercase", children: a("importStatus.fileInformation") }),
        /* @__PURE__ */ f("div", { className: "text-md my-2 font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ f("div", { className: "my-2 text-sm text-gray-500", children: n ? `${a("importStatus.original")}: ${On((n == null ? void 0 : n.size) || 0)} · ${a("importStatus.processed")}: ${On(Di(o, l, t, s))}` : `${a("importStatus.processed")}: ${On(Di(o, l, t, s))}` }),
        /* @__PURE__ */ f("div", { className: "mt-5", children: /* @__PURE__ */ f(
          He,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => Hh(
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
    /* @__PURE__ */ f("div", { className: "border-b border-gray-200 pb-2" }),
    /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ f("div", { className: "my-2 mr-5 text-center", children: r === "failed" ? /* @__PURE__ */ f(qr, { className: "text-hello-csv-danger-light h-8 w-8" }) : e ? /* @__PURE__ */ f(Im, { className: "text-hello-csv-warning-light h-8 w-8" }) : /* @__PURE__ */ f(Ds, { className: "text-hello-csv-success-light h-8 w-8" }) }),
      /* @__PURE__ */ f("div", { className: "flex-1", children: [
        /* @__PURE__ */ f("div", { className: "my-2 text-sm font-light uppercase", children: a("importStatus.importResults") }),
        /* @__PURE__ */ f("div", { className: "text-md my-2 font-medium", children: a("importStatus.totalRows", { totalRows: u }) }),
        i && /* @__PURE__ */ f("div", { className: "my-2 text-sm text-gray-500", children: [
          i.skipped >= 0 && /* @__PURE__ */ f("span", { children: [
            a("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ f("span", { children: [
            a("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ f("span", { children: a("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ f("div", { className: "my-2 text-sm text-gray-500", children: [
          a("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ f(Eo, { variant: "error", children: a("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function ca({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = ye();
  return /* @__PURE__ */ f(al, { withPadding: !1, className: "h-full", children: /* @__PURE__ */ f("div", { className: "flex flex-col py-5", children: [
    /* @__PURE__ */ f("div", { className: "px-4 pb-2 text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ f("div", { className: "px-4 pb-2 text-sm text-gray-500", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ f("div", { className: "border-b border-gray-200 pb-2" }),
    /* @__PURE__ */ f(
      Wh,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function Gh({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = vt(), { onSummaryFinished: o } = it(), { t: i } = ye(), l = ua(n), s = (r == null ? void 0 : r.imported) ?? 0, a = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ f("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ f("div", { className: "text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
      Ro,
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
    /* @__PURE__ */ f("div", { className: "mt-6", children: [
      /* @__PURE__ */ f(
        ca,
        {
          completedWithErrors: a,
          enumLabelDict: t
        }
      ),
      /* @__PURE__ */ f("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ f("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ f(He, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
    ] })
  ] });
}
function Uh({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = ye();
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: /* @__PURE__ */ f("div", { className: "flex h-full w-full flex-col", children: [
    /* @__PURE__ */ f("div", { className: "text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "mt-4", children: /* @__PURE__ */ f(
      Ro,
      {
        variant: "error",
        header: r("importStatus.importFailed"),
        description: r("importStatus.failedDescription")
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "mt-6", children: /* @__PURE__ */ f(ca, { completedWithErrors: !1, enumLabelDict: n }) }),
    /* @__PURE__ */ f("div", { className: "mt-6 flex justify-between", children: [
      /* @__PURE__ */ f(He, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ f(He, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] }) });
}
function qh({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, l] = W(!1);
  return re(() => {
    if (e === 0) {
      const s = setTimeout(() => {
        l(!0);
      }, 3e3);
      return () => clearTimeout(s);
    }
  }, [e]), i ? /* @__PURE__ */ f("div", { className: "flex justify-center", children: /* @__PURE__ */ f(
    "div",
    {
      className: `border-hello-csv-success-light h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ f("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ f(
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
    /* @__PURE__ */ f(
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
function Kh() {
  return /* @__PURE__ */ f(op, { className: "text-hello-csv-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Yh({ resetState: e }) {
  const { importProgress: t, mode: n } = vt(), r = n === "submit", { t: o } = ye();
  return /* @__PURE__ */ f("div", { className: "flex h-full p-10", children: /* @__PURE__ */ f("div", { className: "flex h-full w-full flex-col", children: /* @__PURE__ */ f("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ f("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ f(qh, { progress: t, pending: r }),
      r && /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f("b", { className: "text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ f("h2", { className: "text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ f(Kh, {})
    ] }),
    !r && /* @__PURE__ */ f("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ f("h2", { className: "text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ f("div", { className: "h-5" }),
      /* @__PURE__ */ f(He, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function Xh({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = vt();
  return /* @__PURE__ */ f("div", { className: "h-full", children: [
    o === "submit" && /* @__PURE__ */ f(Yh, { resetState: n }),
    o === "failed" && /* @__PURE__ */ f(
      Uh,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ f(Gh, { resetState: n, enumLabelDict: r })
  ] });
}
async function Li(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
const Zh = ({ children: e }) => {
  const { theme: t } = it();
  return re(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ f(we, { children: e });
};
function Qh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Jh = Fn.exports, Vi;
function ev() {
  return Vi || (Vi = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Jh, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, l = r.IS_PAPA_WORKER || !1, s = {}, a = 0, u = {};
      function c(v) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(y) {
          var x = I(y);
          x.chunkSize = parseInt(x.chunkSize), y.step || y.chunk || (x.chunkSize = null), this._handle = new h(x), (this._handle.streamer = this)._config = x;
        }).call(this, v), this.parseChunk = function(y, x) {
          var S = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < S) {
            let k = this._config.newline;
            k || (T = this._config.quoteChar || '"', k = this._handle.guessLineEndings(y, T)), y = [...y.split(k).slice(S)].join(k);
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
      function p(v) {
        var y;
        (v = v || {}).chunkSize || (v.chunkSize = u.RemoteChunkSize), c.call(this, v), this._nextChunk = i ? function() {
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
            } catch (k) {
              this._chunkError(k.message);
            }
            i && y.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          y.readyState === 4 && (y.status < 200 || 400 <= y.status ? this._chunkError() : (this._start += this._config.chunkSize || y.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((x) => (x = x.getResponseHeader("Content-Range")) !== null ? parseInt(x.substring(x.lastIndexOf("/") + 1)) : -1)(y), this.parseChunk(y.responseText)));
        }, this._chunkError = function(x) {
          x = y.statusText || x, this._sendError(new Error(x));
        };
      }
      function g(v) {
        (v = v || {}).chunkSize || (v.chunkSize = u.LocalChunkSize), c.call(this, v);
        var y, x, S = typeof FileReader < "u";
        this.stream = function(T) {
          this._input = T, x = T.slice || T.webkitSlice || T.mozSlice, S ? ((y = new FileReader()).onload = M(this._chunkLoaded, this), y.onerror = M(this._chunkError, this)) : y = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var T = this._input, k = (this._config.chunkSize && (k = Math.min(this._start + this._config.chunkSize, this._input.size), T = x.call(T, this._start, k)), y.readAsText(T, this._config.encoding));
          S || this._chunkLoaded({ target: { result: k } });
        }, this._chunkLoaded = function(T) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(T.target.result);
        }, this._chunkError = function() {
          this._sendError(y.error);
        };
      }
      function d(v) {
        var y;
        c.call(this, v = v || {}), this.stream = function(x) {
          return y = x, this._nextChunk();
        }, this._nextChunk = function() {
          var x, S;
          if (!this._finished) return x = this._config.chunkSize, y = x ? (S = y.substring(0, x), y.substring(x)) : (S = y, ""), this._finished = !y, this.parseChunk(S);
        };
      }
      function m(v) {
        c.call(this, v = v || {});
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
          } catch (k) {
            this._streamError(k);
          }
        }, this), this._streamError = M(function(T) {
          this._streamCleanUp(), this._sendError(T);
        }, this), this._streamEnd = M(function() {
          this._streamCleanUp(), S = !0, this._streamData("");
        }, this), this._streamCleanUp = M(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function h(v) {
        var y, x, S, T, k = Math.pow(2, 53), F = -k, U = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Z = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, B = this, z = 0, O = 0, N = !1, A = !1, V = [], $ = { data: [], errors: [], meta: {} };
        function le(q) {
          return v.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0;
        }
        function te() {
          if ($ && S && (ie("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), S = !1), v.skipEmptyLines && ($.data = $.data.filter(function(Q) {
            return !le(Q);
          })), ae()) {
            let Q = function(me, ve) {
              R(v.transformHeader) && (me = v.transformHeader(me, ve)), V.push(me);
            };
            if ($) if (Array.isArray($.data[0])) {
              for (var q = 0; ae() && q < $.data.length; q++) $.data[q].forEach(Q);
              $.data.splice(0, 1);
            } else $.data.forEach(Q);
          }
          function ee(Q, me) {
            for (var ve = v.header ? {} : [], H = 0; H < Q.length; H++) {
              var K = H, J = Q[H], J = ((Ee, ne) => ((ge) => (v.dynamicTypingFunction && v.dynamicTyping[ge] === void 0 && (v.dynamicTyping[ge] = v.dynamicTypingFunction(ge)), (v.dynamicTyping[ge] || v.dynamicTyping) === !0))(Ee) ? ne === "true" || ne === "TRUE" || ne !== "false" && ne !== "FALSE" && (((ge) => {
                if (U.test(ge) && (ge = parseFloat(ge), F < ge && ge < k))
                  return 1;
              })(ne) ? parseFloat(ne) : Z.test(ne) ? new Date(ne) : ne === "" ? null : ne) : ne)(K = v.header ? H >= V.length ? "__parsed_extra" : V[H] : K, J = v.transform ? v.transform(J, K) : J);
              K === "__parsed_extra" ? (ve[K] = ve[K] || [], ve[K].push(J)) : ve[K] = J;
            }
            return v.header && (H > V.length ? ie("FieldMismatch", "TooManyFields", "Too many fields: expected " + V.length + " fields but parsed " + H, O + me) : H < V.length && ie("FieldMismatch", "TooFewFields", "Too few fields: expected " + V.length + " fields but parsed " + H, O + me)), ve;
          }
          var pe;
          $ && (v.header || v.dynamicTyping || v.transform) && (pe = 1, !$.data.length || Array.isArray($.data[0]) ? ($.data = $.data.map(ee), pe = $.data.length) : $.data = ee($.data, 0), v.header && $.meta && ($.meta.fields = V), O += pe);
        }
        function ae() {
          return v.header && V.length === 0;
        }
        function ie(q, ee, pe, Q) {
          q = { type: q, code: ee, message: pe }, Q !== void 0 && (q.row = Q), $.errors.push(q);
        }
        R(v.step) && (T = v.step, v.step = function(q) {
          $ = q, ae() ? te() : (te(), $.data.length !== 0 && (z += q.data.length, v.preview && z > v.preview ? x.abort() : ($.data = $.data[0], T($, B))));
        }), this.parse = function(q, ee, pe) {
          var Q = v.quoteChar || '"', Q = (v.newline || (v.newline = this.guessLineEndings(q, Q)), S = !1, v.delimiter ? R(v.delimiter) && (v.delimiter = v.delimiter(q), $.meta.delimiter = v.delimiter) : ((Q = ((me, ve, H, K, J) => {
            var Ee, ne, ge, lt;
            J = J || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Ft = 0; Ft < J.length; Ft++) {
              for (var je, Kt = J[Ft], Re = 0, We = 0, _e = 0, Ne = (ge = void 0, new b({ comments: K, delimiter: Kt, newline: ve, preview: 10 }).parse(me)), Qe = 0; Qe < Ne.data.length; Qe++) H && le(Ne.data[Qe]) ? _e++ : (je = Ne.data[Qe].length, We += je, ge === void 0 ? ge = je : 0 < je && (Re += Math.abs(je - ge), ge = je));
              0 < Ne.data.length && (We /= Ne.data.length - _e), (ne === void 0 || Re <= ne) && (lt === void 0 || lt < We) && 1.99 < We && (ne = Re, Ee = Kt, lt = We);
            }
            return { successful: !!(v.delimiter = Ee), bestDelimiter: Ee };
          })(q, v.newline, v.skipEmptyLines, v.comments, v.delimitersToGuess)).successful ? v.delimiter = Q.bestDelimiter : (S = !0, v.delimiter = u.DefaultDelimiter), $.meta.delimiter = v.delimiter), I(v));
          return v.preview && v.header && Q.preview++, y = q, x = new b(Q), $ = x.parse(y, ee, pe), te(), N ? { meta: { paused: !0 } } : $ || { meta: { paused: !1 } };
        }, this.paused = function() {
          return N;
        }, this.pause = function() {
          N = !0, x.abort(), y = R(v.chunk) ? "" : y.substring(x.getCharIndex());
        }, this.resume = function() {
          B.streamer._halted ? (N = !1, B.streamer.parseChunk(y, !0)) : setTimeout(B.resume, 3);
        }, this.aborted = function() {
          return A;
        }, this.abort = function() {
          A = !0, x.abort(), $.meta.aborted = !0, R(v.complete) && v.complete($), y = "";
        }, this.guessLineEndings = function(me, Q) {
          me = me.substring(0, 1048576);
          var Q = new RegExp(w(Q) + "([^]*?)" + w(Q), "gm"), pe = (me = me.replace(Q, "")).split("\r"), Q = me.split(`
`), me = 1 < Q.length && Q[0].length < pe[0].length;
          if (pe.length === 1 || me) return `
`;
          for (var ve = 0, H = 0; H < pe.length; H++) pe[H][0] === `
` && ve++;
          return ve >= pe.length / 2 ? `\r
` : "\r";
        };
      }
      function w(v) {
        return v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function b(v) {
        var y = (v = v || {}).delimiter, x = v.newline, S = v.comments, T = v.step, k = v.preview, F = v.fastMode, U = null, Z = !1, B = v.quoteChar == null ? '"' : v.quoteChar, z = B;
        if (v.escapeChar !== void 0 && (z = v.escapeChar), (typeof y != "string" || -1 < u.BAD_DELIMITERS.indexOf(y)) && (y = ","), S === y) throw new Error("Comment character same as delimiter");
        S === !0 ? S = "#" : (typeof S != "string" || -1 < u.BAD_DELIMITERS.indexOf(S)) && (S = !1), x !== `
` && x !== "\r" && x !== `\r
` && (x = `
`);
        var O = 0, N = !1;
        this.parse = function(A, V, $) {
          if (typeof A != "string") throw new Error("Input must be a string");
          var le = A.length, te = y.length, ae = x.length, ie = S.length, q = R(T), ee = [], pe = [], Q = [], me = O = 0;
          if (!A) return Re();
          if (F || F !== !1 && A.indexOf(B) === -1) {
            for (var ve = A.split(x), H = 0; H < ve.length; H++) {
              if (Q = ve[H], O += Q.length, H !== ve.length - 1) O += x.length;
              else if ($) return Re();
              if (!S || Q.substring(0, ie) !== S) {
                if (q) {
                  if (ee = [], lt(Q.split(y)), We(), N) return Re();
                } else lt(Q.split(y));
                if (k && k <= H) return ee = ee.slice(0, k), Re(!0);
              }
            }
            return Re();
          }
          for (var K = A.indexOf(y, O), J = A.indexOf(x, O), Ee = new RegExp(w(z) + w(B), "g"), ne = A.indexOf(B, O); ; ) if (A[O] === B) for (ne = O, O++; ; ) {
            if ((ne = A.indexOf(B, ne + 1)) === -1) return $ || pe.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ee.length, index: O }), je();
            if (ne === le - 1) return je(A.substring(O, ne).replace(Ee, B));
            if (B === z && A[ne + 1] === z) ne++;
            else if (B === z || ne === 0 || A[ne - 1] !== z) {
              K !== -1 && K < ne + 1 && (K = A.indexOf(y, ne + 1));
              var ge = Ft((J = J !== -1 && J < ne + 1 ? A.indexOf(x, ne + 1) : J) === -1 ? K : Math.min(K, J));
              if (A.substr(ne + 1 + ge, te) === y) {
                Q.push(A.substring(O, ne).replace(Ee, B)), A[O = ne + 1 + ge + te] !== B && (ne = A.indexOf(B, O)), K = A.indexOf(y, O), J = A.indexOf(x, O);
                break;
              }
              if (ge = Ft(J), A.substring(ne + 1 + ge, ne + 1 + ge + ae) === x) {
                if (Q.push(A.substring(O, ne).replace(Ee, B)), Kt(ne + 1 + ge + ae), K = A.indexOf(y, O), ne = A.indexOf(B, O), q && (We(), N)) return Re();
                if (k && ee.length >= k) return Re(!0);
                break;
              }
              pe.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ee.length, index: O }), ne++;
            }
          }
          else if (S && Q.length === 0 && A.substring(O, O + ie) === S) {
            if (J === -1) return Re();
            O = J + ae, J = A.indexOf(x, O), K = A.indexOf(y, O);
          } else if (K !== -1 && (K < J || J === -1)) Q.push(A.substring(O, K)), O = K + te, K = A.indexOf(y, O);
          else {
            if (J === -1) break;
            if (Q.push(A.substring(O, J)), Kt(J + ae), q && (We(), N)) return Re();
            if (k && ee.length >= k) return Re(!0);
          }
          return je();
          function lt(_e) {
            ee.push(_e), me = O;
          }
          function Ft(_e) {
            var Ne = 0;
            return Ne = _e !== -1 && (_e = A.substring(ne + 1, _e)) && _e.trim() === "" ? _e.length : Ne;
          }
          function je(_e) {
            return $ || (_e === void 0 && (_e = A.substring(O)), Q.push(_e), O = le, lt(Q), q && We()), Re();
          }
          function Kt(_e) {
            O = _e, lt(Q), Q = [], J = A.indexOf(x, O);
          }
          function Re(_e) {
            if (v.header && !V && ee.length && !Z) {
              var Ne = ee[0], Qe = {}, ir = new Set(Ne);
              let Mo = !1;
              for (let Mt = 0; Mt < Ne.length; Mt++) {
                let Ge = Ne[Mt];
                if (Qe[Ge = R(v.transformHeader) ? v.transformHeader(Ge, Mt) : Ge]) {
                  let Yt, Po = Qe[Ge];
                  for (; Yt = Ge + "_" + Po, Po++, ir.has(Yt); ) ;
                  ir.add(Yt), Ne[Mt] = Yt, Qe[Ge]++, Mo = !0, (U = U === null ? {} : U)[Yt] = Ge;
                } else Qe[Ge] = 1, Ne[Mt] = Ge;
                ir.add(Ge);
              }
              Mo && console.warn("Duplicate headers found and renamed."), Z = !0;
            }
            return { data: ee, errors: pe, meta: { delimiter: y, linebreak: x, aborted: N, truncated: !!_e, cursor: me + (V || 0), renamedHeaders: U } };
          }
          function We() {
            T(Re()), ee = [], pe = [];
          }
        }, this.abort = function() {
          N = !0;
        }, this.getCharIndex = function() {
          return O;
        };
      }
      function _(v) {
        var y = v.data, x = s[y.workerId], S = !1;
        if (y.error) x.userError(y.error, y.file);
        else if (y.results && y.results.data) {
          var T = { abort: function() {
            S = !0, C(y.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: E, resume: E };
          if (R(x.userStep)) {
            for (var k = 0; k < y.results.data.length && (x.userStep({ data: y.results.data[k], errors: y.results.errors, meta: y.results.meta }, T), !S); k++) ;
            delete y.results;
          } else R(x.userChunk) && (x.userChunk(y.results, T, y.file), delete y.results);
        }
        y.finished && !S && C(y.workerId, y.results);
      }
      function C(v, y) {
        var x = s[v];
        R(x.userComplete) && x.userComplete(y), x.terminate(), delete s[v];
      }
      function E() {
        throw new Error("Not implemented.");
      }
      function I(v) {
        if (typeof v != "object" || v === null) return v;
        var y, x = Array.isArray(v) ? [] : {};
        for (y in v) x[y] = I(v[y]);
        return x;
      }
      function M(v, y) {
        return function() {
          v.apply(y, arguments);
        };
      }
      function R(v) {
        return typeof v == "function";
      }
      return u.parse = function(v, y) {
        var x = (y = y || {}).dynamicTyping || !1;
        if (R(x) && (y.dynamicTypingFunction = x, x = {}), y.dynamicTyping = x, y.transform = !!R(y.transform) && y.transform, !y.worker || !u.WORKERS_SUPPORTED) return x = null, u.NODE_STREAM_INPUT, typeof v == "string" ? (v = ((S) => S.charCodeAt(0) !== 65279 ? S : S.slice(1))(v), x = new (y.download ? p : d)(y)) : v.readable === !0 && R(v.read) && R(v.on) ? x = new m(y) : (r.File && v instanceof File || v instanceof Object) && (x = new g(y)), x.stream(v);
        (x = (() => {
          var S;
          return !!u.WORKERS_SUPPORTED && (S = (() => {
            var T = r.URL || r.webkitURL || null, k = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", k, ")();"], { type: "text/javascript" })));
          })(), (S = new r.Worker(S)).onmessage = _, S.id = a++, s[S.id] = S);
        })()).userStep = y.step, x.userChunk = y.chunk, x.userComplete = y.complete, x.userError = y.error, y.step = R(y.step), y.chunk = R(y.chunk), y.complete = R(y.complete), y.error = R(y.error), delete y.worker, x.postMessage({ input: v, config: y, workerId: x.id });
      }, u.unparse = function(v, y) {
        var x = !1, S = !0, T = ",", k = `\r
`, F = '"', U = F + F, Z = !1, B = null, z = !1, O = ((() => {
          if (typeof y == "object") {
            if (typeof y.delimiter != "string" || u.BAD_DELIMITERS.filter(function(V) {
              return y.delimiter.indexOf(V) !== -1;
            }).length || (T = y.delimiter), typeof y.quotes != "boolean" && typeof y.quotes != "function" && !Array.isArray(y.quotes) || (x = y.quotes), typeof y.skipEmptyLines != "boolean" && typeof y.skipEmptyLines != "string" || (Z = y.skipEmptyLines), typeof y.newline == "string" && (k = y.newline), typeof y.quoteChar == "string" && (F = y.quoteChar), typeof y.header == "boolean" && (S = y.header), Array.isArray(y.columns)) {
              if (y.columns.length === 0) throw new Error("Option columns is empty");
              B = y.columns;
            }
            y.escapeChar !== void 0 && (U = y.escapeChar + F), y.escapeFormulae instanceof RegExp ? z = y.escapeFormulae : typeof y.escapeFormulae == "boolean" && y.escapeFormulae && (z = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(w(F), "g"));
        if (typeof v == "string" && (v = JSON.parse(v)), Array.isArray(v)) {
          if (!v.length || Array.isArray(v[0])) return N(null, v, Z);
          if (typeof v[0] == "object") return N(B || Object.keys(v[0]), v, Z);
        } else if (typeof v == "object") return typeof v.data == "string" && (v.data = JSON.parse(v.data)), Array.isArray(v.data) && (v.fields || (v.fields = v.meta && v.meta.fields || B), v.fields || (v.fields = Array.isArray(v.data[0]) ? v.fields : typeof v.data[0] == "object" ? Object.keys(v.data[0]) : []), Array.isArray(v.data[0]) || typeof v.data[0] == "object" || (v.data = [v.data])), N(v.fields || [], v.data || [], Z);
        throw new Error("Unable to serialize unrecognized input");
        function N(V, $, le) {
          var te = "", ae = (typeof V == "string" && (V = JSON.parse(V)), typeof $ == "string" && ($ = JSON.parse($)), Array.isArray(V) && 0 < V.length), ie = !Array.isArray($[0]);
          if (ae && S) {
            for (var q = 0; q < V.length; q++) 0 < q && (te += T), te += A(V[q], q);
            0 < $.length && (te += k);
          }
          for (var ee = 0; ee < $.length; ee++) {
            var pe = (ae ? V : $[ee]).length, Q = !1, me = ae ? Object.keys($[ee]).length === 0 : $[ee].length === 0;
            if (le && !ae && (Q = le === "greedy" ? $[ee].join("").trim() === "" : $[ee].length === 1 && $[ee][0].length === 0), le === "greedy" && ae) {
              for (var ve = [], H = 0; H < pe; H++) {
                var K = ie ? V[H] : H;
                ve.push($[ee][K]);
              }
              Q = ve.join("").trim() === "";
            }
            if (!Q) {
              for (var J = 0; J < pe; J++) {
                0 < J && !me && (te += T);
                var Ee = ae && ie ? V[J] : J;
                te += A($[ee][Ee], J);
              }
              ee < $.length - 1 && (!le || 0 < pe && !me) && (te += k);
            }
          }
          return te;
        }
        function A(V, $) {
          var le, te;
          return V == null ? "" : V.constructor === Date ? JSON.stringify(V).slice(1, 25) : (te = !1, z && typeof V == "string" && z.test(V) && (V = "'" + V, te = !0), le = V.toString().replace(O, U), (te = te || x === !0 || typeof x == "function" && x(V, $) || Array.isArray(x) && x[$] || ((ae, ie) => {
            for (var q = 0; q < ie.length; q++) if (-1 < ae.indexOf(ie[q])) return !0;
            return !1;
          })(le, u.BAD_DELIMITERS) || -1 < le.indexOf(T) || le.charAt(0) === " " || le.charAt(le.length - 1) === " ") ? F + le + F : le);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = b, u.ParserHandle = h, u.NetworkStreamer = p, u.FileStreamer = g, u.StringStreamer = d, u.ReadableStreamStreamer = m, r.jQuery && ((o = r.jQuery).fn.parse = function(v) {
        var y = v.config || {}, x = [];
        return this.each(function(k) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var F = 0; F < this.files.length; F++) x.push({ file: this.files[F], inputElem: this, instanceConfig: o.extend({}, y) });
        }), S(), this;
        function S() {
          if (x.length === 0) R(v.complete) && v.complete();
          else {
            var k, F, U, Z, B = x[0];
            if (R(v.before)) {
              var z = v.before(B.file, B.inputElem);
              if (typeof z == "object") {
                if (z.action === "abort") return k = "AbortError", F = B.file, U = B.inputElem, Z = z.reason, void (R(v.error) && v.error({ name: k }, F, U, Z));
                if (z.action === "skip") return void T();
                typeof z.config == "object" && (B.instanceConfig = o.extend(B.instanceConfig, z.config));
              } else if (z === "skip") return void T();
            }
            var O = B.instanceConfig.complete;
            B.instanceConfig.complete = function(N) {
              R(O) && O(N, B.file, B.inputElem), T();
            }, u.parse(B.file, B.instanceConfig);
          }
        }
        function T() {
          x.splice(0, 1), S();
        }
      }), l && (r.onmessage = function(v) {
        v = v.data, u.WORKER_ID === void 0 && v && (u.WORKER_ID = v.workerId), typeof v.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(v.input, v.config), finished: !0 }) : (r.File && v.input instanceof File || v.input instanceof Object) && (v = u.parse(v.input, v.config)) && r.postMessage({ workerId: u.WORKER_ID, results: v, finished: !0 });
      }), (p.prototype = Object.create(c.prototype)).constructor = p, (g.prototype = Object.create(c.prototype)).constructor = g, (d.prototype = Object.create(d.prototype)).constructor = d, (m.prototype = Object.create(c.prototype)).constructor = m, u;
    });
  }(Fn)), Fn.exports;
}
var tv = ev();
const nv = /* @__PURE__ */ Qh(tv);
function rv({
  file: e,
  onCompleted: t
}) {
  nv.parse(e, {
    skipEmptyLines: !0,
    header: !0,
    complete: t
  });
}
function ov({
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
const iv = /* @__PURE__ */ ce(ov);
function lv({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = vt(), { sheets: i } = it();
  return /* @__PURE__ */ f(
    ym,
    {
      tabs: i.map((l) => ({
        label: l.label + ` (${t[l.id]})`,
        value: l.id,
        icon: o.some((s) => s.sheetId === l.id) ? /* @__PURE__ */ f(iv, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function sv({ onBackToMapping: e }) {
  const { t } = ye(), [n, r] = W(!1);
  return /* @__PURE__ */ f(we, { children: [
    /* @__PURE__ */ f(
      He,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ f(
      Wr,
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
function av({ importerRequirements: e }) {
  const { t } = ye();
  return /* @__PURE__ */ f("div", { className: "h-full w-full space-y-5 overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ f("div", { className: "me-3", children: [
      /* @__PURE__ */ f("div", { className: "my-3 border-b border-gray-200 pb-4 text-sm font-light uppercase", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ f("div", { className: "mt-4", children: r.map((i) => /* @__PURE__ */ f(
        "div",
        {
          className: "my-3 flex justify-between",
          children: [
            /* @__PURE__ */ f("div", { className: "text-xs", children: i.columnLabel }),
            /* @__PURE__ */ f("div", { className: "text-xs font-light", children: /* @__PURE__ */ f(
              At,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ f(fp, { className: "size-5 text-gray-500" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function uv({ importerRequirements: e }) {
  const { t } = ye();
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col space-y-5", children: [
    /* @__PURE__ */ f("div", { className: "me-3", children: /* @__PURE__ */ f(Ro, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ f("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ f(av, { importerRequirements: e }) })
  ] });
}
function cv({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = it(), { t: i, tHtml: l } = ye(), s = D(null), [a, u] = W(!1), c = tm.concat(
    (r == null ? void 0 : r.map((m) => m.mimeType)) ?? []
  ), p = (m, h) => {
    c.includes(m.type) && m.size <= h && e(m);
  }, g = (m) => {
    var w;
    const h = m.target;
    (w = h.files) != null && w.length && p(h.files[0], n);
  }, d = (m) => {
    var h;
    m.preventDefault(), u(!1), (h = m.dataTransfer) != null && h.files.length && p(m.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ f(al, { variant: "muted", withPadding: !1, className: "h-full", children: /* @__PURE__ */ f(
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
      onDrop: (m) => d(m),
      children: [
        /* @__PURE__ */ f("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
          /* @__PURE__ */ f(lp, { className: "text-hello-csv-primary h-12 w-12" }),
          /* @__PURE__ */ f("p", { className: "mt-3 text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ f("div", { className: "mt-3 text-sm text-gray-500", children: [
            l("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ f("b", { children: On(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((m) => m.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ f("div", { className: "mt-3", children: /* @__PURE__ */ f(He, { children: i("uploader.browseFiles") }) }),
          o && /* @__PURE__ */ f("div", { className: "mt-3 text-sm", children: /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: s,
            type: "file",
            accept: c.join(","),
            className: "sr-only",
            onChange: (m) => g(m)
          }
        )
      ]
    }
  ) });
}
function dv({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = it(), r = zh(n), { t: o } = ye();
  return /* @__PURE__ */ f("div", { className: "flex h-full flex-col space-y-4", children: [
    /* @__PURE__ */ f("div", { className: "flex-none text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ f("div", { className: "flex-auto md:min-h-0", children: /* @__PURE__ */ f("div", { className: "flex h-full flex-col-reverse gap-5 md:flex-row", children: [
      /* @__PURE__ */ f("div", { className: "h-full flex-1 lg:flex-1", children: /* @__PURE__ */ f(uv, { importerRequirements: r }) }),
      /* @__PURE__ */ f("div", { className: "flex-1 lg:flex-2", children: /* @__PURE__ */ f(
        cv,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
function fv({
  onComplete: e,
  sheets: t,
  customFileLoaders: n,
  onDataColumnsMapped: r,
  preventUploadOnValidationErrors: o,
  customSuggestedMapper: i
}) {
  const { t: l } = ye(), s = D(!0), a = D(null), u = vt(), c = Dg(), p = Oe(), {
    mode: g,
    currentSheetId: d,
    sheetData: m,
    columnMappings: h,
    parsedFile: w,
    validationErrors: b
  } = u;
  re(() => {
    var N;
    if (s.current) {
      s.current = !1;
      return;
    }
    (N = a.current) == null || N.scrollIntoView({ behavior: "smooth" });
  }, [g]);
  const _ = m.find(
    (N) => N.sheetId === d
  ), C = G(() => Object.fromEntries(
    m.map((N) => [N.sheetId, N.rows.length])
  ), [m]), E = t.find(
    (N) => N.id === d
  ), I = Ym(t), R = (typeof o == "function" ? (o == null ? void 0 : o(b)) ?? !1 : o ?? !1) && b.length > 0;
  function v(N) {
    jh(N, n).then((A) => {
      rv({
        file: A,
        onCompleted: async (V) => {
          const $ = V.meta.fields, le = i != null ? await i(t, $) : cg(t, $);
          c({
            type: "FILE_PARSED",
            payload: { parsed: V, rowFile: N }
          }), c({
            type: "COLUMN_MAPPING_CHANGED",
            payload: {
              mappings: le
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
        amountOfEmptyRowsToAdd: em
      }
    });
  }
  function x(N) {
    c({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: N }
    });
  }
  async function S() {
    const N = sg(t, h ?? [], w), A = r != null ? await r(N) : N;
    c({ type: "DATA_MAPPED", payload: { mappedData: A } });
  }
  function T(N) {
    c({ type: "CELL_CHANGED", payload: N });
  }
  function k(N) {
    c({ type: "REMOVE_ROWS", payload: N });
  }
  function F() {
    c({ type: "ADD_EMPTY_ROW" });
  }
  function U() {
    c({ type: "RESET" });
  }
  async function Z() {
    c({ type: "PROGRESS", payload: { progress: 0 } }), c({ type: "SUBMIT" });
    try {
      const N = Kr(
        t,
        m.map((V) => ({ ...V, rows: Wm(V) }))
      ), A = await e(
        { ...u, sheetData: N },
        (V) => {
          c({ type: "PROGRESS", payload: { progress: V } });
        }
      );
      await Li(400), c({ type: "PROGRESS", payload: { progress: 100 } }), await Li(200), c({
        type: "COMPLETED",
        payload: { importStatistics: A ?? void 0 }
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
  return /* @__PURE__ */ f(Zh, { children: /* @__PURE__ */ f(
    um,
    {
      ref: a,
      withFullHeight: g === "submit" || g === "failed" || g === "completed",
      children: [
        g === "upload" && /* @__PURE__ */ f(
          dv,
          {
            onFileUploaded: v,
            onEnterDataManually: y
          }
        ),
        g === "mapping" && /* @__PURE__ */ f(
          Lg,
          {
            onMappingsChanged: x,
            onMappingsSet: S,
            onBack: z
          }
        ),
        g === "preview" && // TODO: Move these to separate component in future PR
        /* @__PURE__ */ f("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ f("div", { className: "flex-none", children: /* @__PURE__ */ f(
            lv,
            {
              idPrefix: p,
              sheetCountDict: C,
              onSheetChange: (N) => c({ type: "SHEET_CHANGED", payload: { sheetId: N } })
            }
          ) }),
          /* @__PURE__ */ f(
            "div",
            {
              className: "flex-1 overflow-auto",
              role: "tabpanel",
              id: `${p}-tabpanel-${d}`,
              "aria-labelledby": `${p}-tab-${d}`,
              tabIndex: 0,
              children: /* @__PURE__ */ f(
                Vh,
                {
                  data: _,
                  sheetDefinition: E,
                  sheetValidationErrors: b.filter(
                    (N) => N.sheetId === (E == null ? void 0 : E.id)
                  ),
                  setRowData: T,
                  removeRows: k,
                  addEmptyRow: F,
                  resetState: U,
                  enumLabelDict: I
                }
              )
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex-none", children: _.rows.length > 0 && /* @__PURE__ */ f("div", { className: "mt-5 flex justify-between", children: [
            /* @__PURE__ */ f("div", { children: h != null && /* @__PURE__ */ f(sv, { onBackToMapping: O }) }),
            /* @__PURE__ */ f(
              At,
              {
                tooltipText: l("importer.uploadBlocked"),
                hidden: !R,
                children: /* @__PURE__ */ f(He, { onClick: Z, disabled: R, children: l("importer.upload") })
              }
            )
          ] }) })
        ] }),
        (g === "submit" || g === "failed" || g === "completed") && /* @__PURE__ */ f(
          Xh,
          {
            onRetry: Z,
            onBackToPreview: B,
            resetState: U,
            enumLabelDict: I
          }
        )
      ]
    }
  ) });
}
function pv(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1
  };
  return /* @__PURE__ */ f(Kp, { importerDefintion: t, children: /* @__PURE__ */ f(
    kg,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      children: /* @__PURE__ */ f(Jp, { children: /* @__PURE__ */ f(fv, { ...t }) })
    }
  ) });
}
function wv(e, t) {
  ln(ga(pv, t), e);
}
export {
  pv as default,
  wv as renderImporter
};
