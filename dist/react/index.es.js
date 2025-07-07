var ol = Object.defineProperty;
var il = (e, t, n) => t in e ? ol(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Me = (e, t, n) => il(e, typeof t != "symbol" ? t + "" : t, n);
import * as E from "react";
import k, { forwardRef as En, useId as Ae, useRef as B, useCallback as ae, useEffect as ie, useState as ee, useMemo as ne, useLayoutEffect as Ar, useContext as ue, createContext as pe, Fragment as Fe, isValidElement as sl, cloneElement as ll, createElement as al, useReducer as Rn, useSyncExternalStore as ul, createRef as Qo, render as cl, h as dl } from "react";
import * as hn from "react-dom";
import { createPortal as jr, flushSync as ct } from "react-dom";
function fl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gn = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function pl() {
  if (so) return kt;
  so = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return kt.Fragment = t, kt.jsx = n, kt.jsxs = n, kt;
}
var lo;
function ml() {
  return lo || (lo = 1, Gn.exports = pl()), Gn.exports;
}
var f = ml();
function ei(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ei(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function gl() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ei(e)) && (r && (r += " "), r += t);
  return r;
}
const ao = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, uo = gl, vt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return uo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((u) => {
    const c = n == null ? void 0 : n[u], p = i == null ? void 0 : i[u];
    if (c === null) return null;
    const g = ao(c) || ao(p);
    return o[u][g];
  }), l = n && Object.entries(n).reduce((u, c) => {
    let [p, g] = c;
    return g === void 0 || (u[p] = g), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: p, className: g, ...d } = c;
    return Object.entries(d).every((m) => {
      let [h, x] = m;
      return Array.isArray(x) ? x.includes({
        ...i,
        ...l
      }[h]) : {
        ...i,
        ...l
      }[h] === x;
    }) ? [
      ...u,
      p,
      g
    ] : u;
  }, []);
  return uo(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, hl = vt(
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
function je({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  withFullWidth: o
}) {
  const i = hl({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ f.jsx(
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
const vl = vt("overflow-hidden rounded-md border border-gray-200", {
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
}), ti = En(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = vl({ variant: n, withPadding: r });
    return /* @__PURE__ */ f.jsx("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function ni({ checked: e, setChecked: t, label: n }) {
  const r = Ae();
  return /* @__PURE__ */ f.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ f.jsx("div", { className: "flex h-6 shrink-0 items-center", children: /* @__PURE__ */ f.jsxs("div", { className: "group grid size-4 grid-cols-1", children: [
      /* @__PURE__ */ f.jsx(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "checked:border-hello-csv-primary checked:bg-hello-csv-primary indeterminate:border-hello-csv-primary indeterminate:bg-hello-csv-primary focus-visible:outline-hello-csv-hello-csv-primary col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-background focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25",
          children: [
            /* @__PURE__ */ f.jsx(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "opacity-0 group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ f.jsx(
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
    n && /* @__PURE__ */ f.jsx("div", { className: "text-sm/6", children: /* @__PURE__ */ f.jsx("label", { htmlFor: r, className: "font-medium text-gray-900", children: n }) })
  ] });
}
let xl = !1;
function Nr() {
  return xl;
}
const ri = typeof document < "u" ? k.useLayoutEffect : () => {
};
function wl(e) {
  const t = B(null);
  return ri(() => {
    t.current = e;
  }, [
    e
  ]), ae((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const st = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, dt = (e) => e && "window" in e && e.window === e ? e : st(e).defaultView || window;
function bl(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function yl(e) {
  return bl(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function oi(e, t) {
  if (!Nr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : yl(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const ar = (e = document) => {
  var t;
  if (!Nr()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function ii(e) {
  return Nr() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Sl(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Cl(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function si(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const El = si(function() {
  return Cl(/^Mac/i);
}), Rl = si(function() {
  return Sl(/Android/i);
});
function li() {
  let e = B(/* @__PURE__ */ new Map()), t = ae((o, i, s, l) => {
    let a = l != null && l.once ? (...u) => {
      e.current.delete(s), s(...u);
    } : s;
    e.current.set(s, {
      type: i,
      eventTarget: o,
      fn: a,
      options: l
    }), o.addEventListener(i, a, l);
  }, []), n = ae((o, i, s, l) => {
    var a;
    let u = ((a = e.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
    o.removeEventListener(i, u, l), e.current.delete(s);
  }, []), r = ae(() => {
    e.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return ie(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function $l(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Rl() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ai(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function _l(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function ui(e) {
  let t = B({
    isFocused: !1,
    observer: null
  });
  ri(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = wl((r) => {
    e == null || e(r);
  });
  return ae((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = ai(s);
          n(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var s;
          (s = t.current.observer) === null || s === void 0 || s.disconnect();
          let l = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
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
let Tl = !1, Jt = null, ur = /* @__PURE__ */ new Set(), zt = /* @__PURE__ */ new Map(), mt = !1, cr = !1;
const Il = {
  Tab: !0,
  Escape: !0
};
function kr(e, t) {
  for (let n of ur) n(e, t);
}
function Ml(e) {
  return !(e.metaKey || !El() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function vn(e) {
  mt = !0, Ml(e) && (Jt = "keyboard", kr("keyboard", e));
}
function Rt(e) {
  Jt = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (mt = !0, kr("pointer", e));
}
function ci(e) {
  $l(e) && (mt = !0, Jt = "virtual");
}
function di(e) {
  e.target === window || e.target === document || Tl || !e.isTrusted || (!mt && !cr && (Jt = "virtual", kr("virtual", e)), mt = !1, cr = !1);
}
function fi() {
  mt = !1, cr = !0;
}
function dr(e) {
  if (typeof window > "u" || zt.get(dt(e))) return;
  const t = dt(e), n = st(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    mt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", vn, !0), n.addEventListener("keyup", vn, !0), n.addEventListener("click", ci, !0), t.addEventListener("focus", di, !0), t.addEventListener("blur", fi, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Rt, !0), n.addEventListener("pointermove", Rt, !0), n.addEventListener("pointerup", Rt, !0)), t.addEventListener("beforeunload", () => {
    pi(e);
  }, {
    once: !0
  }), zt.set(t, {
    focus: r
  });
}
const pi = (e, t) => {
  const n = dt(e), r = st(e);
  t && r.removeEventListener("DOMContentLoaded", t), zt.has(n) && (n.HTMLElement.prototype.focus = zt.get(n).focus, r.removeEventListener("keydown", vn, !0), r.removeEventListener("keyup", vn, !0), r.removeEventListener("click", ci, !0), n.removeEventListener("focus", di, !0), n.removeEventListener("blur", fi, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Rt, !0), r.removeEventListener("pointermove", Rt, !0), r.removeEventListener("pointerup", Rt, !0)), zt.delete(n));
};
function Fl(e) {
  const t = st(e);
  let n;
  return t.readyState !== "loading" ? dr(e) : (n = () => {
    dr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => pi(e, n);
}
typeof document < "u" && Fl();
function mi() {
  return Jt !== "pointer";
}
const Ol = /* @__PURE__ */ new Set([
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
function Pl(e, t, n) {
  let r = st(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? dt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? dt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? dt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? dt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Ol.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof s && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !Il[n.key]);
}
function Al(e, t, n) {
  dr(), ie(() => {
    let r = (o, i) => {
      Pl(!!(n != null && n.isTextInput), o, i) && e(mi());
    };
    return ur.add(r), () => {
      ur.delete(r);
    };
  }, t);
}
function jl(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = ae((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), s = ui(i), l = ae((a) => {
    const u = st(a.target), c = u ? ar(u) : ar();
    a.target === a.currentTarget && c === ii(a.nativeEvent) && (n && n(a), o && o(!0), s(a));
  }, [
    o,
    n,
    s
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? l : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
function Nl(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = B({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = li(), a = ae((p) => {
    p.currentTarget.contains(p.target) && i.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (i.current.isFocusWithin = !1, l(), n && n(p), o && o(!1));
  }, [
    n,
    o,
    i,
    l
  ]), u = ui(a), c = ae((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const g = st(p.target), d = ar(g);
    if (!i.current.isFocusWithin && d === ii(p.nativeEvent)) {
      r && r(p), o && o(!0), i.current.isFocusWithin = !0, u(p);
      let m = p.currentTarget;
      s(g, "focus", (h) => {
        if (i.current.isFocusWithin && !oi(m, h.target)) {
          let x = new g.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          _l(x, m);
          let b = ai(x);
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
    s,
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
let fr = !1, Wn = 0;
function kl() {
  fr = !0, setTimeout(() => {
    fr = !1;
  }, 50);
}
function co(e) {
  e.pointerType === "touch" && kl();
}
function Dl() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", co), Wn++, () => {
      Wn--, !(Wn > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", co);
    };
}
function gi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, s] = ee(!1), l = B({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ie(Dl, []);
  let { addGlobalListener: a, removeAllGlobalListeners: u } = li(), { hoverProps: c, triggerHoverEnd: p } = ne(() => {
    let g = (h, x) => {
      if (l.pointerType = x, o || x === "touch" || l.isHovered || !h.currentTarget.contains(h.target)) return;
      l.isHovered = !0;
      let b = h.currentTarget;
      l.target = b, a(st(h.target), "pointerover", (S) => {
        l.isHovered && l.target && !oi(l.target, S.target) && d(S, S.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: b,
        pointerType: x
      }), n && n(!0), s(!0);
    }, d = (h, x) => {
      let b = l.target;
      l.pointerType = "", l.target = null, !(x === "touch" || !l.isHovered || !b) && (l.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: b,
        pointerType: x
      }), n && n(!1), s(!1));
    }, m = {};
    return typeof PointerEvent < "u" && (m.onPointerEnter = (h) => {
      fr && h.pointerType === "mouse" || g(h, h.pointerType);
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
    l,
    a,
    u
  ]);
  return ie(() => {
    o && p({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function hi(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = B({
    isFocused: !1,
    isFocusVisible: t || mi()
  }), [i, s] = ee(!1), [l, a] = ee(() => o.current.isFocused && o.current.isFocusVisible), u = ae(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = ae((d) => {
    o.current.isFocused = d, s(d), u();
  }, [
    u
  ]);
  Al((d) => {
    o.current.isFocusVisible = d, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = jl({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: g } = Nl({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: r ? g : p
  };
}
var Ll = Object.defineProperty, Vl = (e, t, n) => t in e ? Ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qn = (e, t, n) => (Vl(e, typeof t != "symbol" ? t + "" : t, n), n);
let Hl = class {
  constructor() {
    qn(this, "current", this.detect()), qn(this, "handoffState", "pending"), qn(this, "currentId", 0);
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
}, pt = new Hl();
function Mt(e) {
  return pt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function $n(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Be() {
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
    return $n(() => {
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
    let r = Be();
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
function xt() {
  let [e] = ee(Be);
  return ie(() => () => e.dispose(), [e]), e;
}
let le = (e, t) => {
  pt.isServer ? ie(e, t) : Ar(e, t);
};
function lt(e) {
  let t = B(e);
  return le(() => {
    t.current = e;
  }, [e]), t;
}
let z = function(e) {
  let t = lt(e);
  return k.useCallback((...n) => t.current(...n), [t]);
};
function zl(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Bl(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function Gl({ disabled: e = !1 } = {}) {
  let t = B(null), [n, r] = ee(!1), o = xt(), i = z(() => {
    t.current = null, r(!1), o.dispose();
  }), s = z((l) => {
    if (o.dispose(), t.current === null) {
      t.current = l.currentTarget, r(!0);
      {
        let a = Mt(l.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (u) => {
          if (t.current) {
            let c = zl(u);
            r(Bl(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: i, onClick: i } };
}
let Wl = pe(void 0);
function Dr() {
  return ue(Wl);
}
function pr(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ie(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ie), r;
}
var _t = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_t || {}), et = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(et || {});
function we() {
  let e = Ul();
  return ae((t) => ql({ mergeRefs: e, ...t }), [e]);
}
function ql({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: s, mergeRefs: l }) {
  l = l ?? Kl;
  let a = vi(t, e);
  if (i) return an(a, n, r, s, l);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...p } = a;
    if (c) return an(p, n, r, s, l);
  }
  if (u & 1) {
    let { unmount: c = !0, ...p } = a;
    return Ie(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return an({ ...p, hidden: !0, style: { display: "none" } }, n, r, s, l);
    } });
  }
  return an(a, n, r, s, l);
}
function an(e, t = {}, n, r, o) {
  let { as: i = n, children: s, refName: l = "ref", ...a } = Un(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [l]: e.ref } : {}, c = typeof s == "function" ? s(t) : s;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let p = {};
  if (t) {
    let g = !1, d = [];
    for (let [m, h] of Object.entries(t)) typeof h == "boolean" && (g = !0), h === !0 && d.push(m.replace(/([A-Z])/g, (x) => `-${x.toLowerCase()}`));
    if (g) {
      p["data-headlessui-state"] = d.join(" ");
      for (let m of d) p[`data-${m}`] = "";
    }
  }
  if (i === Fe && (Object.keys(Qe(a)).length > 0 || Object.keys(Qe(p)).length > 0)) if (!sl(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(Qe(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Qe(a)).concat(Object.keys(Qe(p))).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
  } else {
    let g = c.props, d = g == null ? void 0 : g.className, m = typeof d == "function" ? (...b) => pr(d(...b), a.className) : pr(d, a.className), h = m ? { className: m } : {}, x = vi(c.props, Qe(Un(a, ["ref"])));
    for (let b in p) b in x && delete p[b];
    return ll(c, Object.assign({}, x, p, u, { ref: o(Yl(c), u.ref) }, h));
  }
  return al(i, Object.assign({}, Un(a, ["ref"]), i !== Fe && u, i !== Fe && p), c);
}
function Ul() {
  let e = B([]), t = ae((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function Kl(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function vi(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let s = n[r];
    for (let l of s) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      l(o, ...i);
    }
  } });
  return t;
}
function Lr(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let s of i) s == null || s(...o);
  } });
  return t;
}
function ve(e) {
  var t;
  return Object.assign(En(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Qe(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Un(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Yl(e) {
  return k.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Xl(e, t, n) {
  let [r, o] = ee(n), i = e !== void 0, s = B(i), l = B(!1), a = B(!1);
  return i && !s.current && !l.current ? (l.current = !0, s.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && s.current && !a.current && (a.current = !0, s.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, z((u) => (i || o(u), t == null ? void 0 : t(u)))];
}
function Zl(e) {
  let [t] = ee(e);
  return t;
}
function xi(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) bi(n, wi(t, r), o);
  return n;
}
function wi(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function bi(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) bi(e, wi(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : xi(n, t, e);
}
let Jl = "span";
var Tt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Tt || {});
function Ql(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return we()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Jl, name: "Hidden" });
}
let qt = ve(Ql), ea = pe(null);
function ta({ children: e }) {
  let t = ue(ea);
  if (!t) return k.createElement(k.Fragment, null, e);
  let { target: n } = t;
  return n ? jr(k.createElement(k.Fragment, null, e), n) : null;
}
function na({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, s] = ee(null), l = xt();
  return ie(() => {
    if (r && i) return l.addEventListener(i, "reset", r);
  }, [i, t, r]), k.createElement(ta, null, k.createElement(ra, { setForm: s, formId: t }), xi(e).map(([a, u]) => k.createElement(qt, { features: Tt.Hidden, ...Qe({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: u, ...o }) })));
}
function ra({ setForm: e, formId: t }) {
  return ie(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : k.createElement(qt, { features: Tt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let oa = pe(void 0);
function yi() {
  return ue(oa);
}
function ia(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && sa(n) ? !1 : r;
}
function sa(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Si = Symbol();
function la(e, t = !0) {
  return Object.assign(e, { [Si]: t });
}
function _e(...e) {
  let t = B(e);
  ie(() => {
    t.current = e;
  }, [e]);
  let n = z((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Si])) ? void 0 : n;
}
let _n = pe(null);
_n.displayName = "DescriptionContext";
function Ci() {
  let e = ue(_n);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ci), t;
  }
  return e;
}
function aa() {
  var e, t;
  return (t = (e = ue(_n)) == null ? void 0 : e.value) != null ? t : void 0;
}
function ua() {
  let [e, t] = ee([]);
  return [e.length > 0 ? e.join(" ") : void 0, ne(() => function(n) {
    let r = z((i) => (t((s) => [...s, i]), () => t((s) => {
      let l = s.slice(), a = l.indexOf(i);
      return a !== -1 && l.splice(a, 1), l;
    }))), o = ne(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return k.createElement(_n.Provider, { value: o }, n.children);
  }, [t])];
}
let ca = "p";
function da(e, t) {
  let n = Ae(), r = Dr(), { id: o = `headlessui-description-${n}`, ...i } = e, s = Ci(), l = _e(t);
  le(() => s.register(o), [o, s.register]);
  let a = r || !1, u = ne(() => ({ ...s.slot, disabled: a }), [s.slot, a]), c = { ref: l, ...s.props, id: o };
  return we()({ ourProps: c, theirProps: i, slot: u, defaultTag: ca, name: s.name || "Description" });
}
let fa = ve(da), pa = Object.assign(fa, {});
var Ce = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ce || {});
let Tn = pe(null);
Tn.displayName = "LabelContext";
function Ei() {
  let e = ue(Tn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ei), t;
  }
  return e;
}
function In(e) {
  var t, n, r;
  let o = (n = (t = ue(Tn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function ma({ inherit: e = !1 } = {}) {
  let t = In(), [n, r] = ee([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, ne(() => function(i) {
    let s = z((a) => (r((u) => [...u, a]), () => r((u) => {
      let c = u.slice(), p = c.indexOf(a);
      return p !== -1 && c.splice(p, 1), c;
    }))), l = ne(() => ({ register: s, slot: i.slot, name: i.name, props: i.props, value: i.value }), [s, i.slot, i.name, i.props, i.value]);
    return k.createElement(Tn.Provider, { value: l }, i.children);
  }, [r])];
}
let ga = "label";
function ha(e, t) {
  var n;
  let r = Ae(), o = Ei(), i = yi(), s = Dr(), { id: l = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: u = !1, ...c } = e, p = _e(t);
  le(() => o.register(l), [l, o.register]);
  let g = z((x) => {
    let b = x.currentTarget;
    if (b instanceof HTMLLabelElement && x.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(x), b instanceof HTMLLabelElement) {
      let S = document.getElementById(b.htmlFor);
      if (S) {
        let C = S.getAttribute("disabled");
        if (C === "true" || C === "") return;
        let $ = S.getAttribute("aria-disabled");
        if ($ === "true" || $ === "") return;
        (S instanceof HTMLInputElement && (S.type === "radio" || S.type === "checkbox") || S.role === "radio" || S.role === "checkbox" || S.role === "switch") && S.click(), S.focus({ preventScroll: !0 });
      }
    }
  }), d = s || !1, m = ne(() => ({ ...o.slot, disabled: d }), [o.slot, d]), h = { ref: p, ...o.props, id: l, htmlFor: a, onClick: g };
  return u && ("onClick" in h && (delete h.htmlFor, delete h.onClick), "onClick" in c && delete c.onClick), we()({ ourProps: h, theirProps: c, slot: m, defaultTag: a ? ga : "div", name: o.name || "Label" });
}
let va = ve(ha), xa = Object.assign(va, {}), wa = pe(() => {
});
function ba({ value: e, children: t }) {
  return k.createElement(wa.Provider, { value: e }, t);
}
function Ct(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var s, l, a, u;
    let c;
    n.key && ((s = n.debug) != null && s.call(n)) && (c = Date.now());
    const p = e();
    if (!(p.length !== r.length || p.some((m, h) => r[h] !== m)))
      return o;
    r = p;
    let d;
    if (n.key && ((l = n.debug) != null && l.call(n)) && (d = Date.now()), o = t(...p), n.key && ((a = n.debug) != null && a.call(n))) {
      const m = Math.round((Date.now() - c) * 100) / 100, h = Math.round((Date.now() - d) * 100) / 100, x = h / 16, b = (S, C) => {
        for (S = String(S); S.length < C; )
          S = " " + S;
        return S;
      };
      console.info(
        `%c⏱ ${b(h, 5)} /${b(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * x, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (u = n == null ? void 0 : n.onChange) == null || u.call(n, o), o;
  }
  return i.updateDeps = (s) => {
    r = s;
  }, i;
}
function fo(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const ya = (e, t) => Math.abs(e - t) <= 1, Sa = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var Dt = { NODE_ENV: "production" };
const po = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Ca = (e) => e, Ea = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Ra = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const o = (s) => {
    const { width: l, height: a } = s;
    t({ width: Math.round(l), height: Math.round(a) });
  };
  if (o(po(n)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((s) => {
    const l = () => {
      const a = s[0];
      if (a != null && a.borderBoxSize) {
        const u = a.borderBoxSize[0];
        if (u) {
          o({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      o(po(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, mo = {
  passive: !0
}, go = typeof window > "u" ? !0 : "onscrollend" in window, $a = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && go ? () => {
  } : Sa(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), s = (c) => () => {
    const { horizontal: p, isRtl: g } = e.options;
    o = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(o, c);
  }, l = s(!0), a = s(!1);
  a(), n.addEventListener("scroll", l, mo);
  const u = e.options.useScrollendEvent && go;
  return u && n.addEventListener("scrollend", a, mo), () => {
    n.removeEventListener("scroll", l), u && n.removeEventListener("scrollend", a);
  };
}, _a = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ta = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var o, i;
  const s = e + t;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, {
    [r.options.horizontal ? "left" : "top"]: s,
    behavior: n
  });
};
class Ia {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((i) => {
          const s = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
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
        getItemKey: Ca,
        rangeExtractor: Ea,
        onChange: () => {
        },
        measureElement: _a,
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
    }, this.maybeNotify = Ct(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: Dt.NODE_ENV !== "production",
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
      for (let s = r - 1; s >= 0; s--) {
        const l = n[s];
        if (o.has(l.lane))
          continue;
        const a = i.get(
          l.lane
        );
        if (a == null || l.end > a.end ? i.set(l.lane, l) : l.end < a.end && o.set(l.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((s, l) => s.end === l.end ? s.index - l.index : s.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = Ct(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, o, i, s) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: i,
        enabled: s
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ct(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: s }, l) => {
        if (!s)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const a = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, a);
        for (let c = a; c < n; c++) {
          const p = i(c), g = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), d = g ? g.end + this.options.gap : r + o, m = l.get(p), h = typeof m == "number" ? m : this.options.estimateSize(c), x = d + h, b = g ? g.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: d,
            size: h,
            end: x,
            key: p,
            lane: b
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: Dt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ct(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Ma({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: Dt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ct(
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
      (n, r, o, i, s) => i === null || s === null ? [] : n({
        startIndex: i,
        endIndex: s,
        overscan: r,
        count: o
      }),
      {
        key: Dt.NODE_ENV !== "production",
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
      const s = i.key, l = this.elementsCache.get(s);
      l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(s, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, s = r - i;
      s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, s, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += s,
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
    }, this.getVirtualItems = Ct(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let i = 0, s = n.length; i < s; i++) {
          const l = n[i], a = r[l];
          o.push(a);
        }
        return o;
      },
      {
        key: Dt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return fo(
          r[Ri(
            0,
            r.length - 1,
            (o) => fo(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r, o = 0) => {
      const i = this.getSize(), s = this.getScrollOffset();
      r === "auto" && (r = n >= s + i ? "end" : "start"), r === "center" ? n += (o - i) / 2 : r === "end" && (n -= i);
      const l = this.getTotalSize() - i;
      return Math.max(Math.min(l, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.getSize(), s = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= s + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= s + this.options.scrollPaddingStart)
          r = "start";
        else
          return [s, r];
      const l = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, r, o.size),
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
      const [s, l] = i;
      this._scrollToOffset(s, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(n)
        )) {
          const u = this.getOffsetForIndex(n, l);
          if (!u) return;
          const [c] = u, p = this.getScrollOffset();
          ya(c, p) || this.scrollToIndex(n, { align: l, behavior: o });
        } else
          this.scrollToIndex(n, { align: l, behavior: o });
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
        let s = r.length - 1;
        for (; s >= 0 && i.some((l) => l === null); ) {
          const l = r[s];
          i[l.lane] === null && (i[l.lane] = l.end), s--;
        }
        o = Math.max(...i.filter((l) => l !== null));
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
const Ri = (e, t, n, r) => {
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
function Ma({
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
  let s = Ri(
    0,
    o,
    i,
    n
  ), l = s;
  if (r === 1)
    for (; l < o && e[l].end < n + t; )
      l++;
  else if (r > 1) {
    const a = Array(r).fill(0);
    for (; l < o && a.some((c) => c < n + t); ) {
      const c = e[l];
      a[c.lane] = c.end, l++;
    }
    const u = Array(r).fill(n + t);
    for (; s >= 0 && u.some((c) => c >= n); ) {
      const c = e[s];
      u[c.lane] = c.start, s--;
    }
    s = Math.max(0, s - s % r), l = Math.min(o, l + (r - 1 - l % r));
  }
  return { startIndex: s, endIndex: l };
}
const ho = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
function Fa(e) {
  const t = E.useReducer(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var s;
      i ? ct(t) : t(), (s = e.onChange) == null || s.call(e, o, i);
    }
  }, [r] = E.useState(
    () => new Ia(n)
  );
  return r.setOptions(n), ho(() => r._didMount(), []), ho(() => r._willUpdate()), r;
}
function $i(e) {
  return Fa({
    observeElementRect: Ra,
    observeElementOffset: $a,
    scrollToFn: Ta,
    ...e
  });
}
function Oa(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Pa(e = Oa) {
  return ae((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Aa(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function vo(e, t = !1) {
  let [n, r] = Rn(() => ({}), {}), o = ne(() => Aa(e), [e, n]);
  return le(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let ja = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function _i(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let s = t[o].call(n, ...i);
    s && (n = s, r.forEach((l) => l()));
  } };
}
function Ti(e) {
  return ul(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Na = new ja(() => _i(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Ft(e, t) {
  let n = Na.get(t), r = Ae(), o = Ti(n);
  if (le(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), s = o.length;
  return i === -1 && (i = s, s += 1), i === s - 1;
}
let mr = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map();
function xo(e) {
  var t;
  let n = (t = Bt.get(e)) != null ? t : 0;
  return Bt.set(e, n + 1), n !== 0 ? () => wo(e) : (mr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => wo(e));
}
function wo(e) {
  var t;
  let n = (t = Bt.get(e)) != null ? t : 1;
  if (n === 1 ? Bt.delete(e) : Bt.set(e, n - 1), n !== 1) return;
  let r = mr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, mr.delete(e));
}
function Ii(e, { allowed: t, disallowed: n } = {}) {
  let r = Ft(e, "inert-others");
  le(() => {
    var o, i;
    if (!r) return;
    let s = Be();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && s.add(xo(a));
    let l = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of l) {
      if (!a) continue;
      let u = Mt(a);
      if (!u) continue;
      let c = a.parentElement;
      for (; c && c !== u.body; ) {
        for (let p of c.children) l.some((g) => p.contains(g)) || s.add(xo(p));
        c = c.parentElement;
      }
    }
    return s.dispose;
  }, [r, t, n]);
}
function Mi(e, t, n) {
  let r = lt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  ie(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Be();
    if (typeof ResizeObserver < "u") {
      let s = new ResizeObserver(() => r.current(o));
      s.observe(o), i.add(() => s.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let s = new IntersectionObserver(() => r.current(o));
      s.observe(o), i.add(() => s.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let xn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), ka = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ke = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Ke || {}), gr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(gr || {}), Da = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Da || {});
function La(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(xn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Va(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ka)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Fi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Fi || {});
function Ha(e, t = 0) {
  var n;
  return e === ((n = Mt(e)) == null ? void 0 : n.body) ? !1 : Ie(t, { 0() {
    return e.matches(xn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(xn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var za = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(za || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Xe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ba = ["textarea", "input"].join(",");
function Ga(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ba)) != null ? n : !1;
}
function Oi(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Gt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? Oi(e) : e : t & 64 ? Va(e) : La(e);
  o.length > 0 && s.length > 1 && (s = s.filter((d) => !o.some((m) => m != null && "current" in m ? (m == null ? void 0 : m.current) === d : m === d))), r = r ?? i.activeElement;
  let l = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, p = s.length, g;
  do {
    if (c >= p || c + p <= 0) return 0;
    let d = a + c;
    if (t & 16) d = (d + p) % p;
    else {
      if (d < 0) return 3;
      if (d >= p) return 1;
    }
    g = s[d], g == null || g.focus(u), c += l;
  } while (g !== i.activeElement);
  return t & 6 && Ga(g) && g.select(), 2;
}
function Pi() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Wa() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ai() {
  return Pi() || Wa();
}
function Lt(e, t, n, r) {
  let o = lt(n);
  ie(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ji(e, t, n, r) {
  let o = lt(n);
  ie(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const bo = 30;
function Ni(e, t, n) {
  let r = Ft(e, "outside-click"), o = lt(n), i = ae(function(a, u) {
    if (a.defaultPrevented) return;
    let c = u(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let p = function g(d) {
      return typeof d == "function" ? g(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let g of p) if (g !== null && (g.contains(c) || a.composed && a.composedPath().includes(g))) return;
    return !Ha(c, Fi.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), s = B(null);
  Lt(r, "pointerdown", (a) => {
    var u, c;
    s.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Lt(r, "mousedown", (a) => {
    var u, c;
    s.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), Lt(r, "click", (a) => {
    Ai() || s.current && (i(a, () => s.current), s.current = null);
  }, !0);
  let l = B({ x: 0, y: 0 });
  Lt(r, "touchstart", (a) => {
    l.current.x = a.touches[0].clientX, l.current.y = a.touches[0].clientY;
  }, !0), Lt(r, "touchend", (a) => {
    let u = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(u.x - l.current.x) >= bo || Math.abs(u.y - l.current.y) >= bo)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), ji(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function wt(...e) {
  return ne(() => Mt(...e), [...e]);
}
function Vr(e, t, n, r) {
  let o = lt(n);
  ie(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ki(e) {
  let t = B({ value: "", selectionStart: null, selectionEnd: null });
  return Vr(e, "blur", (n) => {
    let r = n.target;
    r instanceof HTMLInputElement && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), z(() => {
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
function qa(e, t) {
  return ne(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function Ua() {
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
function Ka() {
  return Pi() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let l = Be();
        l.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => l.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, s = null;
      t.addEventListener(e, "click", (l) => {
        if (l.target instanceof HTMLElement) try {
          let a = l.target.closest("a");
          if (!a) return;
          let { hash: u } = new URL(a.href), c = e.querySelector(u);
          c && !r(c) && (s = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (l) => {
        if (l.target instanceof HTMLElement) if (r(l.target)) {
          let a = l.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(l.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (l) => {
        if (l.target instanceof HTMLElement) {
          if (l.target.tagName === "INPUT") return;
          if (r(l.target)) {
            let a = l.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && l.preventDefault();
          } else l.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var l;
        let a = (l = window.scrollY) != null ? l : window.pageYOffset;
        i !== a && window.scrollTo(0, i), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function Ya() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Xa(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let ft = _i(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Be(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Xa(n) }, o = [Ka(), Ua(), Ya()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ft.subscribe(() => {
  let e = ft.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && ft.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ft.dispatch("TEARDOWN", n);
  }
});
function Za(e, t, n = () => ({ containers: [] })) {
  let r = Ti(ft), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return le(() => {
    if (!(!t || !e)) return ft.dispatch("PUSH", t, n), () => ft.dispatch("POP", t, n);
  }, [e, t]), i;
}
function Di(e, t, n = () => [document.body]) {
  let r = Ft(e, "scroll-lock");
  Za(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function yo(e) {
  return [e.screenX, e.screenY];
}
function Ja() {
  let e = B([-1, -1]);
  return { wasMoved(t) {
    let n = yo(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = yo(t);
  } };
}
function Qa(e = 0) {
  let [t, n] = ee(e), r = ae((a) => n(a), [t]), o = ae((a) => n((u) => u | a), [t]), i = ae((a) => (t & a) === a, [t]), s = ae((a) => n((u) => u & ~a), [n]), l = ae((a) => n((u) => u ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: s, toggleFlag: l };
}
var eu = { NODE_ENV: "production" }, So, Co;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((So = process == null ? void 0 : eu) == null ? void 0 : So.NODE_ENV) === "test" && typeof ((Co = Element == null ? void 0 : Element.prototype) == null ? void 0 : Co.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var tu = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(tu || {});
function Li(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function Vi(e, t, n, r) {
  let [o, i] = ee(n), { hasFlag: s, addFlag: l, removeFlag: a } = Qa(e && o ? 3 : 0), u = B(!1), c = B(!1), p = xt();
  return le(() => {
    var g;
    if (e) {
      if (n && i(!0), !t) {
        n && l(3);
        return;
      }
      return (g = r == null ? void 0 : r.start) == null || g.call(r, n), nu(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (l(3), a(4)) : (l(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), l(4)) : (a(4), l(3)) : n ? a(1) : l(1);
      }, done() {
        var d;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, a(7), n || i(!1), (d = r == null ? void 0 : r.end) == null || d.call(r, n));
      } });
    }
  }, [e, n, t, p]), e ? [o, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function nu(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Be();
  return ou(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(ru(e, r));
    });
  }), i.dispose;
}
function ru(e, t) {
  var n, r;
  let o = Be();
  if (!e) return o.dispose;
  let i = !1;
  o.add(() => {
    i = !0;
  });
  let s = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((l) => l instanceof CSSTransition)) != null ? r : [];
  return s.length === 0 ? (t(), o.dispose) : (Promise.allSettled(s.map((l) => l.finished)).then(() => {
    i || t();
  }), o.dispose);
}
function ou(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function iu(e, { container: t, accept: n, walk: r }) {
  let o = B(n), i = B(r);
  ie(() => {
    o.current = n, i.current = r;
  }, [n, r]), le(() => {
    if (!t || !e) return;
    let s = Mt(t);
    if (!s) return;
    let l = o.current, a = i.current, u = Object.assign((p) => l(p), { acceptNode: l }), c = s.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, i]);
}
function Ut(e, t) {
  let n = B([]), r = z(e);
  ie(() => {
    let o = [...n.current];
    for (let [i, s] of t.entries()) if (n.current[i] !== s) {
      let l = r(t, o);
      return n.current = t, l;
    }
  }, [r, ...t]);
}
function Mn() {
  return typeof window < "u";
}
function Ot(e) {
  return Hi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Oe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function We(e) {
  var t;
  return (t = (Hi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hi(e) {
  return Mn() ? e instanceof Node || e instanceof Oe(e).Node : !1;
}
function Re(e) {
  return Mn() ? e instanceof Element || e instanceof Oe(e).Element : !1;
}
function Ge(e) {
  return Mn() ? e instanceof HTMLElement || e instanceof Oe(e).HTMLElement : !1;
}
function Eo(e) {
  return !Mn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Oe(e).ShadowRoot;
}
function Qt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ke(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function su(e) {
  return ["table", "td", "th"].includes(Ot(e));
}
function Fn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Hr(e) {
  const t = zr(), n = Re(e) ? ke(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function lu(e) {
  let t = rt(e);
  for (; Ge(t) && !It(t); ) {
    if (Hr(t))
      return t;
    if (Fn(t))
      return null;
    t = rt(t);
  }
  return null;
}
function zr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function It(e) {
  return ["html", "body", "#document"].includes(Ot(e));
}
function ke(e) {
  return Oe(e).getComputedStyle(e);
}
function On(e) {
  return Re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function rt(e) {
  if (Ot(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Eo(e) && e.host || // Fallback.
    We(e)
  );
  return Eo(t) ? t.host : t;
}
function zi(e) {
  const t = rt(e);
  return It(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ge(t) && Qt(t) ? t : zi(t);
}
function Kt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = zi(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Oe(o);
  if (i) {
    const l = hr(s);
    return t.concat(s, s.visualViewport || [], Qt(o) ? o : [], l && n ? Kt(l) : []);
  }
  return t.concat(o, Kt(o, [], n));
}
function hr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function au() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const gt = Math.min, Ee = Math.max, Yt = Math.round, un = Math.floor, ze = (e) => ({
  x: e,
  y: e
}), uu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cu = {
  start: "end",
  end: "start"
};
function Ro(e, t, n) {
  return Ee(e, gt(t, n));
}
function Pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ot(e) {
  return e.split("-")[0];
}
function en(e) {
  return e.split("-")[1];
}
function Bi(e) {
  return e === "x" ? "y" : "x";
}
function Gi(e) {
  return e === "y" ? "height" : "width";
}
function nt(e) {
  return ["top", "bottom"].includes(ot(e)) ? "y" : "x";
}
function Wi(e) {
  return Bi(nt(e));
}
function du(e, t, n) {
  n === void 0 && (n = !1);
  const r = en(e), o = Wi(e), i = Gi(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = wn(s)), [s, wn(s)];
}
function fu(e) {
  const t = wn(e);
  return [vr(e), t, vr(t)];
}
function vr(e) {
  return e.replace(/start|end/g, (t) => cu[t]);
}
function pu(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function mu(e, t, n, r) {
  const o = en(e);
  let i = pu(ot(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(vr)))), i;
}
function wn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uu[t]);
}
function gu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hu(e) {
  return typeof e != "number" ? gu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bn(e) {
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
function $o(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = nt(t), s = Wi(t), l = Gi(s), a = ot(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, g = r[l] / 2 - o[l] / 2;
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
  switch (en(t)) {
    case "start":
      d[s] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      d[s] += g * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const vu = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: p
  } = $o(u, r, a), g = r, d = {}, m = 0;
  for (let h = 0; h < l.length; h++) {
    const {
      name: x,
      fn: b
    } = l[h], {
      x: S,
      y: C,
      data: $,
      reset: M
    } = await b({
      x: c,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = S ?? c, p = C ?? p, d = {
      ...d,
      [x]: {
        ...d[x],
        ...$
      }
    }, M && m <= 50 && (m++, typeof M == "object" && (M.placement && (g = M.placement), M.rects && (u = M.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : M.rects), {
      x: c,
      y: p
    } = $o(u, g, a)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: d
  };
};
async function Pn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: l,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: d = 0
  } = Pt(t, e), m = hu(d), x = l[g ? p === "floating" ? "reference" : "floating" : p], b = bn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), S = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = bn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: S,
    offsetParent: C,
    strategy: a
  }) : S);
  return {
    top: (b.top - M.top + m.top) / $.y,
    bottom: (M.bottom - b.bottom + m.bottom) / $.y,
    left: (b.left - M.left + m.left) / $.x,
    right: (M.right - b.right + m.right) / $.x
  };
}
const xu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...x
      } = Pt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = ot(o), S = nt(l), C = ot(l) === l, $ = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), M = g || (C || !h ? [wn(l)] : fu(l)), P = m !== "none";
      !g && P && M.push(...mu(l, h, m, $));
      const _ = [l, ...M], v = await Pn(t, x), w = [];
      let y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && w.push(v[b]), p) {
        const G = du(o, s, $);
        w.push(v[G[0]], v[G[1]]);
      }
      if (y = [...y, {
        placement: o,
        overflows: w
      }], !w.every((G) => G <= 0)) {
        var R, I;
        const G = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, Y = _[G];
        if (Y) {
          var N;
          const V = p === "alignment" ? S !== nt(Y) : !1, F = ((N = y[0]) == null ? void 0 : N.overflows[0]) > 0;
          if (!V || F)
            return {
              data: {
                index: G,
                overflows: y
              },
              reset: {
                placement: Y
              }
            };
        }
        let H = (I = y.filter((V) => V.overflows[0] <= 0).sort((V, F) => V.overflows[1] - F.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!H)
          switch (d) {
            case "bestFit": {
              var O;
              const V = (O = y.filter((F) => {
                if (P) {
                  const A = nt(F.placement);
                  return A === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((A) => A > 0).reduce((A, j) => A + j, 0)]).sort((F, A) => F[1] - A[1])[0]) == null ? void 0 : O[0];
              V && (H = V);
              break;
            }
            case "initialPlacement":
              H = l;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
async function wu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ot(n), l = en(n), a = nt(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && a ? -1 : 1, p = Pt(t, e);
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
  return l && typeof m == "number" && (d = l === "end" ? m * -1 : m), a ? {
    x: d * c,
    y: g * u
  } : {
    x: g * u,
    y: d * c
  };
}
const bu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: l
      } = t, a = await wu(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, yu = function(e) {
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
        crossAxis: s = !1,
        limiter: l = {
          fn: (x) => {
            let {
              x: b,
              y: S
            } = x;
            return {
              x: b,
              y: S
            };
          }
        },
        ...a
      } = Pt(e, t), u = {
        x: n,
        y: r
      }, c = await Pn(t, a), p = nt(ot(o)), g = Bi(p);
      let d = u[g], m = u[p];
      if (i) {
        const x = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", S = d + c[x], C = d - c[b];
        d = Ro(S, d, C);
      }
      if (s) {
        const x = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", S = m + c[x], C = m - c[b];
        m = Ro(S, m, C);
      }
      const h = l.fn({
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
            [p]: s
          }
        }
      };
    }
  };
}, Su = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: l
      } = t, {
        apply: a = () => {
        },
        ...u
      } = Pt(e, t), c = await Pn(t, u), p = ot(o), g = en(o), d = nt(o) === "y", {
        width: m,
        height: h
      } = i.floating;
      let x, b;
      p === "top" || p === "bottom" ? (x = p, b = g === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = p, x = g === "end" ? "top" : "bottom");
      const S = h - c.top - c.bottom, C = m - c.left - c.right, $ = gt(h - c[x], S), M = gt(m - c[b], C), P = !t.middlewareData.shift;
      let _ = $, v = M;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (v = C), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = S), P && !g) {
        const y = Ee(c.left, 0), R = Ee(c.right, 0), I = Ee(c.top, 0), N = Ee(c.bottom, 0);
        d ? v = m - 2 * (y !== 0 || R !== 0 ? y + R : Ee(c.left, c.right)) : _ = h - 2 * (I !== 0 || N !== 0 ? I + N : Ee(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: v,
        availableHeight: _
      });
      const w = await s.getDimensions(l.floating);
      return m !== w.width || h !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function qi(e) {
  const t = ke(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ge(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Yt(n) !== i || Yt(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function Br(e) {
  return Re(e) ? e : e.contextElement;
}
function $t(e) {
  const t = Br(e);
  if (!Ge(t))
    return ze(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = qi(t);
  let s = (i ? Yt(n.width) : n.width) / r, l = (i ? Yt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Cu = /* @__PURE__ */ ze(0);
function Ui(e) {
  const t = Oe(e);
  return !zr() || !t.visualViewport ? Cu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Eu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Oe(e) ? !1 : t;
}
function ht(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Br(e);
  let s = ze(1);
  t && (r ? Re(r) && (s = $t(r)) : s = $t(e));
  const l = Eu(i, n, r) ? Ui(i) : ze(0);
  let a = (o.left + l.x) / s.x, u = (o.top + l.y) / s.y, c = o.width / s.x, p = o.height / s.y;
  if (i) {
    const g = Oe(i), d = r && Re(r) ? Oe(r) : r;
    let m = g, h = hr(m);
    for (; h && r && d !== m; ) {
      const x = $t(h), b = h.getBoundingClientRect(), S = ke(h), C = b.left + (h.clientLeft + parseFloat(S.paddingLeft)) * x.x, $ = b.top + (h.clientTop + parseFloat(S.paddingTop)) * x.y;
      a *= x.x, u *= x.y, c *= x.x, p *= x.y, a += C, u += $, m = Oe(h), h = hr(m);
    }
  }
  return bn({
    width: c,
    height: p,
    x: a,
    y: u
  });
}
function Gr(e, t) {
  const n = On(e).scrollLeft;
  return t ? t.left + n : ht(We(e)).left + n;
}
function Ki(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Gr(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Ru(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = We(r), l = t ? Fn(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ze(1);
  const c = ze(0), p = Ge(r);
  if ((p || !p && !i) && ((Ot(r) !== "body" || Qt(s)) && (a = On(r)), Ge(r))) {
    const d = ht(r);
    u = $t(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  const g = s && !p && !i ? Ki(s, a, !0) : ze(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + g.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + g.y
  };
}
function $u(e) {
  return Array.from(e.getClientRects());
}
function _u(e) {
  const t = We(e), n = On(e), r = e.ownerDocument.body, o = Ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Gr(e);
  const l = -n.scrollTop;
  return ke(r).direction === "rtl" && (s += Ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function Tu(e, t) {
  const n = Oe(e), r = We(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = zr();
    (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Iu(e, t) {
  const n = ht(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ge(e) ? $t(e) : ze(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: u
  };
}
function _o(e, t, n) {
  let r;
  if (t === "viewport")
    r = Tu(e, n);
  else if (t === "document")
    r = _u(We(e));
  else if (Re(t))
    r = Iu(t, n);
  else {
    const o = Ui(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return bn(r);
}
function Yi(e, t) {
  const n = rt(e);
  return n === t || !Re(n) || It(n) ? !1 : ke(n).position === "fixed" || Yi(n, t);
}
function Mu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Kt(e, [], !1).filter((l) => Re(l) && Ot(l) !== "body"), o = null;
  const i = ke(e).position === "fixed";
  let s = i ? rt(e) : e;
  for (; Re(s) && !It(s); ) {
    const l = ke(s), a = Hr(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Qt(s) && !a && Yi(e, s)) ? r = r.filter((c) => c !== s) : o = l, s = rt(s);
  }
  return t.set(e, r), r;
}
function Fu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Fn(t) ? [] : Mu(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((u, c) => {
    const p = _o(t, c, o);
    return u.top = Ee(p.top, u.top), u.right = gt(p.right, u.right), u.bottom = gt(p.bottom, u.bottom), u.left = Ee(p.left, u.left), u;
  }, _o(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Ou(e) {
  const {
    width: t,
    height: n
  } = qi(e);
  return {
    width: t,
    height: n
  };
}
function Pu(e, t, n) {
  const r = Ge(t), o = We(t), i = n === "fixed", s = ht(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = ze(0);
  function u() {
    a.x = Gr(o);
  }
  if (r || !r && !i)
    if ((Ot(t) !== "body" || Qt(o)) && (l = On(t)), r) {
      const d = ht(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Ki(o, l) : ze(0), p = s.left + l.scrollLeft - a.x - c.x, g = s.top + l.scrollTop - a.y - c.y;
  return {
    x: p,
    y: g,
    width: s.width,
    height: s.height
  };
}
function Kn(e) {
  return ke(e).position === "static";
}
function To(e, t) {
  if (!Ge(e) || ke(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return We(e) === n && (n = n.ownerDocument.body), n;
}
function Xi(e, t) {
  const n = Oe(e);
  if (Fn(e))
    return n;
  if (!Ge(e)) {
    let o = rt(e);
    for (; o && !It(o); ) {
      if (Re(o) && !Kn(o))
        return o;
      o = rt(o);
    }
    return n;
  }
  let r = To(e, t);
  for (; r && su(r) && Kn(r); )
    r = To(r, t);
  return r && It(r) && Kn(r) && !Hr(r) ? n : r || lu(e) || n;
}
const Au = async function(e) {
  const t = this.getOffsetParent || Xi, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Pu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ju(e) {
  return ke(e).direction === "rtl";
}
const Nu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ru,
  getDocumentElement: We,
  getClippingRect: Fu,
  getOffsetParent: Xi,
  getElementRects: Au,
  getClientRects: $u,
  getDimensions: Ou,
  getScale: $t,
  isElement: Re,
  isRTL: ju
};
function Zi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ku(e, t) {
  let n = null, r;
  const o = We(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: g,
      height: d
    } = u;
    if (l || t(), !g || !d)
      return;
    const m = un(p), h = un(o.clientWidth - (c + g)), x = un(o.clientHeight - (p + d)), b = un(c), C = {
      rootMargin: -m + "px " + -h + "px " + -x + "px " + -b + "px",
      threshold: Ee(0, gt(1, a)) || 1
    };
    let $ = !0;
    function M(P) {
      const _ = P[0].intersectionRatio;
      if (_ !== a) {
        if (!$)
          return s();
        _ ? s(!1, _) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Zi(u, e.getBoundingClientRect()) && s(), $ = !1;
    }
    try {
      n = new IntersectionObserver(M, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(M, C);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Du(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = Br(e), c = o || i ? [...u ? Kt(u) : [], ...Kt(t)] : [];
  c.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const p = u && l ? ku(u, n) : null;
  let g = -1, d = null;
  s && (d = new ResizeObserver((b) => {
    let [S] = b;
    S && S.target === u && d && (d.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var C;
      (C = d) == null || C.observe(t);
    })), n();
  }), u && !a && d.observe(u), d.observe(t));
  let m, h = a ? ht(e) : null;
  a && x();
  function x() {
    const b = ht(e);
    h && !Zi(h, b) && n(), h = b, m = requestAnimationFrame(x);
  }
  return n(), () => {
    var b;
    c.forEach((S) => {
      o && S.removeEventListener("scroll", n), i && S.removeEventListener("resize", n);
    }), p == null || p(), (b = d) == null || b.disconnect(), d = null, a && cancelAnimationFrame(m);
  };
}
const Yn = Pn, Lu = bu, Vu = yu, Hu = xu, zu = Su, Bu = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Nu,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return vu(e, t, {
    ...o,
    platform: i
  });
};
var pn = typeof document < "u" ? Ar : ie;
function yn(e, t) {
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
        if (!yn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !yn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ji(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Io(e, t) {
  const n = Ji(e);
  return Math.round(t * n) / n;
}
function Xn(e) {
  const t = E.useRef(e);
  return pn(() => {
    t.current = e;
  }), t;
}
function Gu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: a,
    open: u
  } = e, [c, p] = E.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, d] = E.useState(r);
  yn(g, r) || d(r);
  const [m, h] = E.useState(null), [x, b] = E.useState(null), S = E.useCallback((V) => {
    V !== P.current && (P.current = V, h(V));
  }, []), C = E.useCallback((V) => {
    V !== _.current && (_.current = V, b(V));
  }, []), $ = i || m, M = s || x, P = E.useRef(null), _ = E.useRef(null), v = E.useRef(c), w = a != null, y = Xn(a), R = Xn(o), I = Xn(u), N = E.useCallback(() => {
    if (!P.current || !_.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: g
    };
    R.current && (V.platform = R.current), Bu(P.current, _.current, V).then((F) => {
      const A = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      O.current && !yn(v.current, A) && (v.current = A, hn.flushSync(() => {
        p(A);
      }));
    });
  }, [g, t, n, R, I]);
  pn(() => {
    u === !1 && v.current.isPositioned && (v.current.isPositioned = !1, p((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [u]);
  const O = E.useRef(!1);
  pn(() => (O.current = !0, () => {
    O.current = !1;
  }), []), pn(() => {
    if ($ && (P.current = $), M && (_.current = M), $ && M) {
      if (y.current)
        return y.current($, M, N);
      N();
    }
  }, [$, M, N, y, w]);
  const G = E.useMemo(() => ({
    reference: P,
    floating: _,
    setReference: S,
    setFloating: C
  }), [S, C]), Y = E.useMemo(() => ({
    reference: $,
    floating: M
  }), [$, M]), H = E.useMemo(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return V;
    const F = Io(Y.floating, c.x), A = Io(Y.floating, c.y);
    return l ? {
      ...V,
      transform: "translate(" + F + "px, " + A + "px)",
      ...Ji(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: A
    };
  }, [n, l, Y.floating, c.x, c.y]);
  return E.useMemo(() => ({
    ...c,
    update: N,
    refs: G,
    elements: Y,
    floatingStyles: H
  }), [c, N, G, Y, H]);
}
const Qi = (e, t) => ({
  ...Lu(e),
  options: [e, t]
}), Wu = (e, t) => ({
  ...Vu(e),
  options: [e, t]
}), qu = (e, t) => ({
  ...Hu(e),
  options: [e, t]
}), Uu = (e, t) => ({
  ...zu(e),
  options: [e, t]
}), es = {
  ...E
}, Ku = es.useInsertionEffect, Yu = Ku || ((e) => e());
function ts(e) {
  const t = E.useRef(() => {
  });
  return Yu(() => {
    t.current = e;
  }), E.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var xr = typeof document < "u" ? Ar : ie;
let Mo = !1, Xu = 0;
const Fo = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Xu++
);
function Zu() {
  const [e, t] = E.useState(() => Mo ? Fo() : void 0);
  return xr(() => {
    e == null && t(Fo());
  }, []), E.useEffect(() => {
    Mo = !0;
  }, []), e;
}
const Ju = es.useId, Qu = Ju || Zu;
function ec() {
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
const tc = /* @__PURE__ */ E.createContext(null), nc = /* @__PURE__ */ E.createContext(null), rc = () => {
  var e;
  return ((e = E.useContext(tc)) == null ? void 0 : e.id) || null;
}, oc = () => E.useContext(nc), ic = "data-floating-ui-focusable";
function sc(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Qu(), i = E.useRef({}), [s] = E.useState(() => ec()), l = rc() != null, [a, u] = E.useState(r.reference), c = ts((d, m, h) => {
    i.current.openEvent = d ? m : void 0, s.emit("openchange", {
      open: d,
      event: m,
      reason: h,
      nested: l
    }), n == null || n(d, m, h);
  }), p = E.useMemo(() => ({
    setPositionReference: u
  }), []), g = E.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return E.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: g,
    events: s,
    floatingId: o,
    refs: p
  }), [t, c, g, s, o, p]);
}
function lc(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = sc({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = E.useState(null), [l, a] = E.useState(null), c = (o == null ? void 0 : o.domReference) || i, p = E.useRef(null), g = oc();
  xr(() => {
    c && (p.current = c);
  }, [c]);
  const d = Gu({
    ...e,
    elements: {
      ...o,
      ...l && {
        reference: l
      }
    }
  }), m = E.useCallback((C) => {
    const $ = Re(C) ? {
      getBoundingClientRect: () => C.getBoundingClientRect(),
      contextElement: C
    } : C;
    a($), d.refs.setReference($);
  }, [d.refs]), h = E.useCallback((C) => {
    (Re(C) || C === null) && (p.current = C, s(C)), (Re(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    C !== null && !Re(C)) && d.refs.setReference(C);
  }, [d.refs]), x = E.useMemo(() => ({
    ...d.refs,
    setReference: h,
    setPositionReference: m,
    domReference: p
  }), [d.refs, h, m]), b = E.useMemo(() => ({
    ...d.elements,
    domReference: c
  }), [d.elements, c]), S = E.useMemo(() => ({
    ...d,
    ...r,
    refs: x,
    elements: b,
    nodeId: t
  }), [d, x, b, t, r]);
  return xr(() => {
    r.dataRef.current.floatingContext = S;
    const C = g == null ? void 0 : g.nodesRef.current.find(($) => $.id === t);
    C && (C.context = S);
  }), E.useMemo(() => ({
    ...d,
    context: S,
    refs: x,
    elements: b
  }), [d, x, b, S]);
}
const Oo = "active", Po = "selected";
function Zn(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Oo]: s,
      [Po]: l,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [ic]: ""
    },
    ...i,
    ...t.map((s) => {
      const l = s ? s[n] : null;
      return typeof l == "function" ? e ? l(e) : null : l;
    }).concat(e).reduce((s, l) => (l && Object.entries(l).forEach((a) => {
      let [u, c] = a;
      if (!(o && [Oo, Po].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var p;
            (p = r.get(u)) == null || p.push(c), s[u] = function() {
              for (var g, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
                m[h] = arguments[h];
              return (g = r.get(u)) == null ? void 0 : g.map((x) => x(...m)).find((x) => x !== void 0);
            };
          }
        } else
          s[u] = c;
    }), s), {})
  };
}
function ac(e) {
  e === void 0 && (e = []);
  const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), o = E.useCallback(
    (l) => Zn(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = E.useCallback(
    (l) => Zn(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = E.useCallback(
    (l) => Zn(l, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return E.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
function Ao(e, t) {
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
const uc = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: s = 0,
      minItemsVisible: l = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: u,
      ...c
    } = Pt(e, t), {
      rects: p,
      elements: {
        floating: g
      }
    } = t, d = n.current[s], m = (u == null ? void 0 : u.current) || g, h = g.clientTop || m.clientTop, x = g.clientTop !== 0, b = m.clientTop !== 0, S = g === m;
    if (!d)
      return {};
    const C = {
      ...t,
      ...await Qi(-d.offsetTop - g.clientTop - p.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, $ = await Yn(Ao(C, m.scrollHeight + h + g.clientTop), c), M = await Yn(C, {
      ...c,
      elementContext: "reference"
    }), P = Ee(0, $.top), _ = C.y + P, y = (m.scrollHeight > m.clientHeight ? (R) => R : Yt)(Ee(0, m.scrollHeight + (x && S || b ? h * 2 : 0) - P - Ee(0, $.bottom)));
    if (m.style.maxHeight = y + "px", m.scrollTop = P, o) {
      const R = m.offsetHeight < d.offsetHeight * gt(l, n.current.length) - 1 || M.top >= -a || M.bottom >= -a;
      hn.flushSync(() => o(R));
    }
    return r && (r.current = await Yn(Ao({
      ...C,
      y: _
    }, m.offsetHeight + h + g.clientTop), c)), {
      y: _
    };
  }
});
function cc(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: s,
    onChange: l
  } = t, a = ts(l), u = E.useRef(!1), c = E.useRef(null), p = E.useRef(null);
  E.useEffect(() => {
    if (!o) return;
    function d(h) {
      if (h.ctrlKey || !m || i.current == null)
        return;
      const x = h.deltaY, b = i.current.top >= -0.5, S = i.current.bottom >= -0.5, C = m.scrollHeight - m.clientHeight, $ = x < 0 ? -1 : 1, M = x < 0 ? "max" : "min";
      m.scrollHeight <= m.clientHeight || (!b && x > 0 || !S && x < 0 ? (h.preventDefault(), hn.flushSync(() => {
        a((P) => P + Math[M](x, C * $));
      })) : /firefox/i.test(au()) && (m.scrollTop += x));
    }
    const m = (s == null ? void 0 : s.current) || r.floating;
    if (n && m)
      return m.addEventListener("wheel", d), requestAnimationFrame(() => {
        c.current = m.scrollTop, i.current != null && (p.current = {
          ...i.current
        });
      }), () => {
        c.current = null, p.current = null, m.removeEventListener("wheel", d);
      };
  }, [o, n, r.floating, i, s, a]);
  const g = E.useMemo(() => ({
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
      const d = (s == null ? void 0 : s.current) || r.floating;
      if (!(!i.current || !d || !u.current)) {
        if (c.current !== null) {
          const m = d.scrollTop - c.current;
          (i.current.bottom < -0.5 && m < -1 || i.current.top < -0.5 && m > 1) && hn.flushSync(() => a((h) => h + m));
        }
        requestAnimationFrame(() => {
          c.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, s]);
  return E.useMemo(() => o ? {
    floating: g
  } : {}, [o, g]);
}
let tn = pe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
tn.displayName = "FloatingContext";
let Wr = pe(null);
Wr.displayName = "PlacementContext";
function dc(e) {
  return ne(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function fc() {
  return ue(tn).setReference;
}
function pc() {
  let { getFloatingProps: e, slot: t } = ue(tn);
  return ae((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function mc(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = ue(Wr), n = ne(() => e, [JSON.stringify(e, (o, i) => {
    var s;
    return (s = i == null ? void 0 : i.outerHTML) != null ? s : i;
  })]);
  le(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = ue(tn);
  return ne(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let jo = 4;
function gc({ children: e, enabled: t = !0 }) {
  let [n, r] = ee(null), [o, i] = ee(0), s = B(null), [l, a] = ee(null);
  hc(l);
  let u = t && n !== null && l !== null, { to: c = "bottom", gap: p = 0, offset: g = 0, padding: d = 0, inner: m } = vc(n, l), [h, x = "center"] = c.split(" ");
  le(() => {
    u && i(0);
  }, [u]);
  let { refs: b, floatingStyles: S, context: C } = lc({ open: u, placement: h === "selection" ? x === "center" ? "bottom" : `bottom-${x}` : x === "center" ? `${h}` : `${h}-${x}`, strategy: "absolute", transform: !1, middleware: [Qi({ mainAxis: h === "selection" ? 0 : p, crossAxis: g }), Wu({ padding: d }), h !== "selection" && qu({ padding: d }), h === "selection" && m ? uc({ ...m, padding: d, overflowRef: s, offset: o, minItemsVisible: jo, referenceOverflowThreshold: d, onFallbackChange(R) {
    var I, N;
    if (!R) return;
    let O = C.elements.floating;
    if (!O) return;
    let G = parseFloat(getComputedStyle(O).scrollPaddingBottom) || 0, Y = Math.min(jo, O.childElementCount), H = 0, V = 0;
    for (let F of (N = (I = C.elements.floating) == null ? void 0 : I.childNodes) != null ? N : []) if (F instanceof HTMLElement) {
      let A = F.offsetTop, j = A + F.clientHeight + G, D = O.scrollTop, T = D + O.clientHeight;
      if (A >= D && j <= T) Y--;
      else {
        V = Math.max(0, Math.min(j, T) - Math.max(A, D)), H = F.clientHeight;
        break;
      }
    }
    Y >= 1 && i((F) => {
      let A = H * Y - V + G;
      return F >= A ? F : A;
    });
  } }) : null, Uu({ padding: d, apply({ availableWidth: R, availableHeight: I, elements: N }) {
    Object.assign(N.floating.style, { overflow: "auto", maxWidth: `${R}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${I}px)` });
  } })].filter(Boolean), whileElementsMounted: Du }), [$ = h, M = x] = C.placement.split("-");
  h === "selection" && ($ = "selection");
  let P = ne(() => ({ anchor: [$, M].filter(Boolean).join(" ") }), [$, M]), _ = cc(C, { overflowRef: s, onChange: i }), { getReferenceProps: v, getFloatingProps: w } = ac([_]), y = z((R) => {
    a(R), b.setFloating(R);
  });
  return E.createElement(Wr.Provider, { value: r }, E.createElement(tn.Provider, { value: { setFloating: y, setReference: b.setReference, styles: S, getReferenceProps: v, getFloatingProps: w, slot: P } }, e));
}
function hc(e) {
  le(() => {
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
function vc(e, t) {
  var n, r, o;
  let i = Jn((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = Jn((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), l = Jn((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: s, padding: l };
}
function Jn(e, t, n = void 0) {
  let r = xt(), o = z((a, u) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!u) return [n, null];
      let c = No(a, u);
      return [c, (p) => {
        let g = ns(a);
        {
          let d = g.map((m) => window.getComputedStyle(u).getPropertyValue(m));
          r.requestAnimationFrame(function m() {
            r.nextFrame(m);
            let h = !1;
            for (let [b, S] of g.entries()) {
              let C = window.getComputedStyle(u).getPropertyValue(S);
              if (d[b] !== C) {
                d[b] = C, h = !0;
                break;
              }
            }
            if (!h) return;
            let x = No(a, u);
            c !== x && (p(x), c = x);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = ne(() => o(e, t)[0], [e, t]), [s = i, l] = ee();
  return le(() => {
    let [a, u] = o(e, t);
    if (l(a), !!u) return u(l);
  }, [e, t]), s;
}
function ns(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...ns(o)] : [r];
  }
  return [];
}
function No(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function xc({ children: e, freeze: t }) {
  let n = wr(t, e);
  return k.createElement(k.Fragment, null, n);
}
function wr(e, t) {
  let [n, r] = ee(t);
  return !e && n !== t && r(t), e ? n : t;
}
let An = pe(null);
An.displayName = "OpenClosedContext";
var $e = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))($e || {});
function nn() {
  return ue(An);
}
function rs({ value: e, children: t }) {
  return k.createElement(An.Provider, { value: e }, t);
}
function wc({ children: e }) {
  return k.createElement(An.Provider, { value: null }, e);
}
function bc(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let He = [];
bc(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || He[0] === t.target) return;
    let n = t.target;
    n = n.closest(xn), He.unshift(n ?? t.target), He = He.filter((r) => r != null && r.isConnected), He.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function yc(e) {
  throw new Error("Unexpected object: " + e);
}
var he = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(he || {});
function ko(e, t) {
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
      yc(e);
  }
}
var qr = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(qr || {});
function os(e) {
  let t = z(e), n = B(!1);
  ie(() => (n.current = !1, () => {
    n.current = !0, $n(() => {
      n.current && t();
    });
  }), [t]);
}
function Sc() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in E ? ((t) => t.useSyncExternalStore)(E)(() => () => {
  }, () => !1, () => !e) : !1;
}
function rn() {
  let e = Sc(), [t, n] = E.useState(pt.isHandoffComplete);
  return t && pt.isHandoffComplete === !1 && n(!1), E.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), E.useEffect(() => pt.handoff(), []), e ? !1 : t;
}
let is = pe(!1);
function Cc() {
  return ue(is);
}
function Do(e) {
  return k.createElement(is.Provider, { value: e.force }, e.children);
}
function Ec(e) {
  let t = Cc(), n = ue(ls), r = wt(e), [o, i] = ee(() => {
    var s;
    if (!t && n !== null) return (s = n.current) != null ? s : null;
    if (pt.isServer) return null;
    let l = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (l) return l;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return ie(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), ie(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let ss = Fe, Rc = ve(function(e, t) {
  let n = e, r = B(null), o = _e(la((p) => {
    r.current = p;
  }), t), i = wt(r), s = Ec(r), [l] = ee(() => {
    var p;
    return pt.isServer ? null : (p = i == null ? void 0 : i.createElement("div")) != null ? p : null;
  }), a = ue(br), u = rn();
  le(() => {
    !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l));
  }, [s, l]), le(() => {
    if (l && a) return a.register(l);
  }, [a, l]), os(() => {
    var p;
    !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((p = s.parentElement) == null || p.removeChild(s)));
  });
  let c = we();
  return u ? !s || !l ? null : jr(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: ss, name: "Portal" }), l) : null;
});
function $c(e, t) {
  let n = _e(t), { enabled: r = !0, ...o } = e, i = we();
  return r ? k.createElement(Rc, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: ss, name: "Portal" });
}
let _c = Fe, ls = pe(null);
function Tc(e, t) {
  let { target: n, ...r } = e, o = { ref: _e(t) }, i = we();
  return k.createElement(ls.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: _c, name: "Popover.Group" }));
}
let br = pe(null);
function Ic() {
  let e = ue(br), t = B([]), n = z((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = z((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = ne(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, ne(() => function({ children: i }) {
    return k.createElement(br.Provider, { value: o }, i);
  }, [o])];
}
let Mc = ve($c), as = ve(Tc), us = Object.assign(Mc, { Group: as });
var Fc = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Fc || {}), Oc = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Oc || {}), Pc = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Pc || {}), Ac = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(Ac || {});
function Qn(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((s, l) => s.dataRef.current.order - l.dataRef.current.order) : Oi(r, (s) => s.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let jc = { 1(e) {
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
    let { options: u, disabled: c } = e.virtual, p = t.focus === he.Specific ? t.idx : ko(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var d, m;
      return (m = (d = e.activeOptionIndex) != null ? d : u.findIndex((h) => !c(h))) != null ? m : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), g = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === p && e.activationTrigger === g ? e : { ...e, activeOptionIndex: p, activationTrigger: g, isTyping: !1, __demoMode: !1 };
  }
  let s = Qn(e);
  if (s.activeOptionIndex === null) {
    let u = s.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (s.activeOptionIndex = u);
  }
  let l = t.focus === he.Specific ? t.idx : ko(t, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === l && e.activationTrigger === a ? e : { ...e, ...s, isTyping: !1, activeOptionIndex: l, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, s = Qn(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(i));
  let l = { ...e, ...s, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = Qn(e, (o) => {
    let i = o.findIndex((s) => s.id === t.id);
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, Ur = pe(null);
Ur.displayName = "ComboboxActionsContext";
function on(e) {
  let t = ue(Ur);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, on), n;
  }
  return t;
}
let cs = pe(null);
function Nc(e) {
  let t = At("VirtualProvider"), { options: n } = t.virtual, [r, o] = ne(() => {
    let u = t.optionsElement;
    if (!u) return [0, 0];
    let c = window.getComputedStyle(u);
    return [parseFloat(c.paddingBlockStart || c.paddingTop), parseFloat(c.paddingBlockEnd || c.paddingBottom)];
  }, [t.optionsElement]), i = $i({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [s, l] = ee(0);
  le(() => {
    l((u) => u + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : k.createElement(cs.Provider, { value: i }, k.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (u) => {
    u && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((u) => {
    var c;
    return k.createElement(Fe, { key: u.key }, k.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }), { key: `${s}-${u.key}`, "data-index": u.index, "aria-setsize": n.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let Xt = pe(null);
Xt.displayName = "ComboboxDataContext";
function At(e) {
  let t = ue(Xt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, At), n;
  }
  return t;
}
function kc(e, t) {
  return Ie(t.type, jc, e, t);
}
let Dc = Fe;
function Lc(e, t) {
  var n, r;
  let o = Dr(), { value: i, defaultValue: s, onChange: l, form: a, name: u, by: c, disabled: p = o || !1, onClose: g, __demoMode: d = !1, multiple: m = !1, immediate: h = !1, virtual: x = null, nullable: b, ...S } = e, C = Zl(s), [$ = m ? [] : void 0, M] = Xl(i, l, C), [P, _] = Rn(kc, { dataRef: Qo(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: x ? { options: x.options, disabled: (n = x.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), v = B(!1), w = B({ static: !1, hold: !1 }), y = Pa(c), R = z((L) => x ? c === null ? x.options.indexOf(L) : x.options.findIndex((q) => y(q, L)) : P.options.findIndex((q) => y(q.dataRef.current.value, L))), I = ae((L) => Ie(O.mode, { 1: () => $.some((q) => y(q, L)), 0: () => y($, L) }), [$]), N = z((L) => P.activeOptionIndex === R(L)), O = ne(() => ({ ...P, immediate: h, optionsPropsRef: w, value: $, defaultValue: C, disabled: p, mode: m ? 1 : 0, virtual: x ? P.virtual : null, get activeOptionIndex() {
    if (v.current && P.activeOptionIndex === null && (x ? x.options.length > 0 : P.options.length > 0)) {
      if (x) {
        let q = x.options.findIndex((Z) => {
          var be, te;
          return !((te = (be = x.disabled) == null ? void 0 : be.call(x, Z)) != null && te);
        });
        if (q !== -1) return q;
      }
      let L = P.options.findIndex((q) => !q.dataRef.current.disabled);
      if (L !== -1) return L;
    }
    return P.activeOptionIndex;
  }, calculateIndex: R, compare: y, isSelected: I, isActive: N }), [$, C, p, m, d, P, x]);
  le(() => {
    var L;
    x && _({ type: 7, options: x.options, disabled: (L = x.disabled) != null ? L : null });
  }, [x, x == null ? void 0 : x.options, x == null ? void 0 : x.disabled]), le(() => {
    P.dataRef.current = O;
  }, [O]);
  let G = O.comboboxState === 0;
  Ni(G, [O.buttonElement, O.inputElement, O.optionsElement], () => W.closeCombobox());
  let Y = ne(() => {
    var L, q, Z;
    return { open: O.comboboxState === 0, disabled: p, activeIndex: O.activeOptionIndex, activeOption: O.activeOptionIndex === null ? null : O.virtual ? O.virtual.options[(L = O.activeOptionIndex) != null ? L : 0] : (Z = (q = O.options[O.activeOptionIndex]) == null ? void 0 : q.dataRef.current.value) != null ? Z : null, value: $ };
  }, [O, p, $]), H = z(() => {
    if (O.activeOptionIndex !== null) {
      if (W.setIsTyping(!1), O.virtual) T(O.virtual.options[O.activeOptionIndex]);
      else {
        let { dataRef: L } = O.options[O.activeOptionIndex];
        T(L.current.value);
      }
      W.goToOption(he.Specific, O.activeOptionIndex);
    }
  }), V = z(() => {
    _({ type: 0 }), v.current = !0;
  }), F = z(() => {
    _({ type: 1 }), v.current = !1, g == null || g();
  }), A = z((L) => {
    _({ type: 3, isTyping: L });
  }), j = z((L, q, Z) => (v.current = !1, L === he.Specific ? _({ type: 2, focus: he.Specific, idx: q, trigger: Z }) : _({ type: 2, focus: L, trigger: Z }))), D = z((L, q) => (_({ type: 4, payload: { id: L, dataRef: q } }), () => {
    O.isActive(q.current.value) && (v.current = !0), _({ type: 5, id: L });
  })), T = z((L) => Ie(O.mode, { 0() {
    return M == null ? void 0 : M(L);
  }, 1() {
    let q = O.value.slice(), Z = q.findIndex((be) => y(be, L));
    return Z === -1 ? q.push(L) : q.splice(Z, 1), M == null ? void 0 : M(q);
  } })), oe = z((L) => {
    _({ type: 6, trigger: L });
  }), Q = z((L) => {
    _({ type: 8, element: L });
  }), se = z((L) => {
    _({ type: 9, element: L });
  }), re = z((L) => {
    _({ type: 10, element: L });
  }), W = ne(() => ({ onChange: T, registerOption: D, goToOption: j, setIsTyping: A, closeCombobox: F, openCombobox: V, setActivationTrigger: oe, selectActiveOption: H, setInputElement: Q, setButtonElement: se, setOptionsElement: re }), []), [J, ce] = ma(), X = t === null ? {} : { ref: t }, de = ae(() => {
    if (C !== void 0) return M == null ? void 0 : M(C);
  }, [M, C]), me = we();
  return k.createElement(ce, { value: J, props: { htmlFor: (r = O.inputElement) == null ? void 0 : r.id }, slot: { open: O.comboboxState === 0, disabled: p } }, k.createElement(gc, null, k.createElement(Ur.Provider, { value: W }, k.createElement(Xt.Provider, { value: O }, k.createElement(rs, { value: Ie(O.comboboxState, { 0: $e.Open, 1: $e.Closed }) }, u != null && k.createElement(na, { disabled: p, data: $ != null ? { [u]: $ } : {}, form: a, onReset: de }), me({ ourProps: X, theirProps: S, slot: Y, defaultTag: Dc, name: "Combobox" }))))));
}
let Vc = "input";
function Hc(e, t) {
  var n, r, o, i, s;
  let l = At("Combobox.Input"), a = on("Combobox.Input"), u = Ae(), c = yi(), { id: p = c || `headlessui-combobox-input-${u}`, onChange: g, displayValue: d, disabled: m = l.disabled || !1, autoFocus: h = !1, type: x = "text", ...b } = e, S = B(null), C = _e(S, t, fc(), a.setInputElement), $ = wt(l.inputElement), M = xt(), P = z(() => {
    a.onChange(null), l.optionsElement && (l.optionsElement.scrollTop = 0), a.goToOption(he.Nothing);
  }), _ = ne(() => {
    var T;
    return typeof d == "function" && l.value !== void 0 ? (T = d(l.value)) != null ? T : "" : typeof l.value == "string" ? l.value : "";
  }, [l.value, d]);
  Ut(([T, oe], [Q, se]) => {
    if (l.isTyping) return;
    let re = S.current;
    re && ((se === 0 && oe === 1 || T !== Q) && (re.value = T), requestAnimationFrame(() => {
      if (l.isTyping || !re || ($ == null ? void 0 : $.activeElement) !== re) return;
      let { selectionStart: W, selectionEnd: J } = re;
      Math.abs((J ?? 0) - (W ?? 0)) === 0 && W === 0 && re.setSelectionRange(re.value.length, re.value.length);
    }));
  }, [_, l.comboboxState, $, l.isTyping]), Ut(([T], [oe]) => {
    if (T === 0 && oe === 1) {
      if (l.isTyping) return;
      let Q = S.current;
      if (!Q) return;
      let se = Q.value, { selectionStart: re, selectionEnd: W, selectionDirection: J } = Q;
      Q.value = "", Q.value = se, J !== null ? Q.setSelectionRange(re, W, J) : Q.setSelectionRange(re, W);
    }
  }, [l.comboboxState]);
  let v = B(!1), w = z(() => {
    v.current = !0;
  }), y = z(() => {
    M.nextFrame(() => {
      v.current = !1;
    });
  }), R = z((T) => {
    switch (a.setIsTyping(!0), T.key) {
      case Ce.Enter:
        if (l.comboboxState !== 0 || v.current) return;
        if (T.preventDefault(), T.stopPropagation(), l.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), l.mode === 0 && a.closeCombobox();
        break;
      case Ce.ArrowDown:
        return T.preventDefault(), T.stopPropagation(), Ie(l.comboboxState, { 0: () => a.goToOption(he.Next), 1: () => a.openCombobox() });
      case Ce.ArrowUp:
        return T.preventDefault(), T.stopPropagation(), Ie(l.comboboxState, { 0: () => a.goToOption(he.Previous), 1: () => {
          ct(() => a.openCombobox()), l.value || a.goToOption(he.Last);
        } });
      case Ce.Home:
        if (T.shiftKey) break;
        return T.preventDefault(), T.stopPropagation(), a.goToOption(he.First);
      case Ce.PageUp:
        return T.preventDefault(), T.stopPropagation(), a.goToOption(he.First);
      case Ce.End:
        if (T.shiftKey) break;
        return T.preventDefault(), T.stopPropagation(), a.goToOption(he.Last);
      case Ce.PageDown:
        return T.preventDefault(), T.stopPropagation(), a.goToOption(he.Last);
      case Ce.Escape:
        return l.comboboxState !== 0 ? void 0 : (T.preventDefault(), l.optionsElement && !l.optionsPropsRef.current.static && T.stopPropagation(), l.mode === 0 && l.value === null && P(), a.closeCombobox());
      case Ce.Tab:
        if (l.comboboxState !== 0) return;
        l.mode === 0 && l.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), I = z((T) => {
    g == null || g(T), l.mode === 0 && T.target.value === "" && P(), a.openCombobox();
  }), N = z((T) => {
    var oe, Q, se;
    let re = (oe = T.relatedTarget) != null ? oe : He.find((W) => W !== T.currentTarget);
    if (!((Q = l.optionsElement) != null && Q.contains(re)) && !((se = l.buttonElement) != null && se.contains(re)) && l.comboboxState === 0) return T.preventDefault(), l.mode === 0 && l.value === null && P(), a.closeCombobox();
  }), O = z((T) => {
    var oe, Q, se;
    let re = (oe = T.relatedTarget) != null ? oe : He.find((W) => W !== T.currentTarget);
    (Q = l.buttonElement) != null && Q.contains(re) || (se = l.optionsElement) != null && se.contains(re) || l.disabled || l.immediate && l.comboboxState !== 0 && M.microTask(() => {
      ct(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), G = In(), Y = aa(), { isFocused: H, focusProps: V } = hi({ autoFocus: h }), { isHovered: F, hoverProps: A } = gi({ isDisabled: m }), j = ne(() => ({ open: l.comboboxState === 0, disabled: m, hover: F, focus: H, autofocus: h }), [l, F, H, h, m]), D = Lr({ ref: C, id: p, role: "combobox", type: x, "aria-controls": (n = l.optionsElement) == null ? void 0 : n.id, "aria-expanded": l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null ? void 0 : l.virtual ? (r = l.options.find((T) => !T.dataRef.current.disabled && l.compare(T.dataRef.current.value, l.virtual.options[l.activeOptionIndex]))) == null ? void 0 : r.id : (o = l.options[l.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": G, "aria-describedby": Y, "aria-autocomplete": "list", defaultValue: (s = (i = e.defaultValue) != null ? i : l.defaultValue !== void 0 ? d == null ? void 0 : d(l.defaultValue) : null) != null ? s : l.defaultValue, disabled: m || void 0, autoFocus: h, onCompositionStart: w, onCompositionEnd: y, onKeyDown: R, onChange: I, onFocus: O, onBlur: N }, V, A);
  return we()({ ourProps: D, theirProps: b, slot: j, defaultTag: Vc, name: "Combobox.Input" });
}
let zc = "button";
function Bc(e, t) {
  var n;
  let r = At("Combobox.Button"), o = on("Combobox.Button"), i = _e(t, o.setButtonElement), s = Ae(), { id: l = `headlessui-combobox-button-${s}`, disabled: a = r.disabled || !1, autoFocus: u = !1, ...c } = e, p = ki(r.inputElement), g = z((_) => {
    switch (_.key) {
      case Ce.Space:
      case Ce.Enter:
        _.preventDefault(), _.stopPropagation(), r.comboboxState === 1 && ct(() => o.openCombobox()), p();
        return;
      case Ce.ArrowDown:
        _.preventDefault(), _.stopPropagation(), r.comboboxState === 1 && (ct(() => o.openCombobox()), r.value || o.goToOption(he.First)), p();
        return;
      case Ce.ArrowUp:
        _.preventDefault(), _.stopPropagation(), r.comboboxState === 1 && (ct(() => o.openCombobox()), r.value || o.goToOption(he.Last)), p();
        return;
      case Ce.Escape:
        if (r.comboboxState !== 0) return;
        _.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && _.stopPropagation(), ct(() => o.closeCombobox()), p();
        return;
      default:
        return;
    }
  }), d = z((_) => {
    _.preventDefault(), !ia(_.currentTarget) && (_.button === qr.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), p());
  }), m = In([l]), { isFocusVisible: h, focusProps: x } = hi({ autoFocus: u }), { isHovered: b, hoverProps: S } = gi({ isDisabled: a }), { pressed: C, pressProps: $ } = Gl({ disabled: a }), M = ne(() => ({ open: r.comboboxState === 0, active: C || r.comboboxState === 0, disabled: a, value: r.value, hover: b, focus: h }), [r, b, h, C, a]), P = Lr({ ref: i, id: l, type: qa(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": m, disabled: a || void 0, autoFocus: u, onMouseDown: d, onKeyDown: g }, x, S, $);
  return we()({ ourProps: P, theirProps: c, slot: M, defaultTag: zc, name: "Combobox.Button" });
}
let Gc = "div", Wc = _t.RenderStrategy | _t.Static;
function qc(e, t) {
  var n, r, o;
  let i = Ae(), { id: s = `headlessui-combobox-options-${i}`, hold: l = !1, anchor: a, portal: u = !1, modal: c = !0, transition: p = !1, ...g } = e, d = At("Combobox.Options"), m = on("Combobox.Options"), h = dc(a);
  h && (u = !0);
  let [x, b] = mc(h), [S, C] = ee(null), $ = pc(), M = _e(t, h ? x : null, m.setOptionsElement, C), P = wt(d.optionsElement), _ = nn(), [v, w] = Vi(p, S, _ !== null ? (_ & $e.Open) === $e.Open : d.comboboxState === 0);
  Mi(v, d.inputElement, m.closeCombobox);
  let y = d.__demoMode ? !1 : c && d.comboboxState === 0;
  Di(y, P);
  let R = d.__demoMode ? !1 : c && d.comboboxState === 0;
  Ii(R, { allowed: ae(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), le(() => {
    var D;
    d.optionsPropsRef.current.static = (D = e.static) != null ? D : !1;
  }, [d.optionsPropsRef, e.static]), le(() => {
    d.optionsPropsRef.current.hold = l;
  }, [d.optionsPropsRef, l]), iu(d.comboboxState === 0, { container: d.optionsElement, accept(D) {
    return D.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : D.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(D) {
    D.setAttribute("role", "none");
  } });
  let I = In([(n = d.buttonElement) == null ? void 0 : n.id]), N = ne(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), O = z(() => {
    m.setActivationTrigger(0);
  }), G = z((D) => {
    D.preventDefault(), m.setActivationTrigger(0);
  }), Y = Lr(h ? $() : {}, { "aria-labelledby": I, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: s, ref: M, style: { ...g.style, ...b, "--input-width": vo(d.inputElement, !0).width, "--button-width": vo(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : O, onMouseDown: G, ...Li(w) }), H = v && d.comboboxState === 1, V = wr(H, (r = d.virtual) == null ? void 0 : r.options), F = wr(H, d.value), A = z((D) => d.compare(F, D));
  if (d.virtual) {
    if (V === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(g, { children: k.createElement(Xt.Provider, { value: V !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: V } } : d }, k.createElement(Nc, { slot: N }, g.children)) });
  }
  let j = we();
  return k.createElement(us, { enabled: u ? e.static || v : !1 }, k.createElement(Xt.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: A } }, j({ ourProps: Y, theirProps: { ...g, children: k.createElement(xc, { freeze: H }, typeof g.children == "function" ? (o = g.children) == null ? void 0 : o.call(g, N) : g.children) }, slot: N, defaultTag: Gc, features: Wc, visible: v, name: "Combobox.Options" })));
}
let Uc = "div";
function Kc(e, t) {
  var n, r, o, i;
  let s = At("Combobox.Option"), l = on("Combobox.Option"), a = Ae(), { id: u = `headlessui-combobox-option-${a}`, value: c, disabled: p = (o = (r = (n = s.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null ? o : !1, order: g = null, ...d } = e, m = ki(s.inputElement), h = s.virtual ? s.activeOptionIndex === s.calculateIndex(c) : s.activeOptionIndex === null ? !1 : ((i = s.options[s.activeOptionIndex]) == null ? void 0 : i.id) === u, x = s.isSelected(c), b = B(null), S = lt({ disabled: p, value: c, domRef: b, order: g }), C = ue(cs), $ = _e(t, b, C ? C.measureElement : null), M = z(() => {
    l.setIsTyping(!1), l.onChange(c);
  });
  le(() => l.registerOption(u, S), [S, u]);
  let P = B(!(s.virtual || s.__demoMode));
  le(() => {
    if (!s.virtual && !s.__demoMode) return Be().requestAnimationFrame(() => {
      P.current = !0;
    });
  }, [s.virtual, s.__demoMode]), le(() => {
    if (P.current && s.comboboxState === 0 && h && s.activationTrigger !== 0) return Be().requestAnimationFrame(() => {
      var G, Y;
      (Y = (G = b.current) == null ? void 0 : G.scrollIntoView) == null || Y.call(G, { block: "nearest" });
    });
  }, [b, h, s.comboboxState, s.activationTrigger, s.activeOptionIndex]);
  let _ = z((G) => {
    G.preventDefault(), G.button === qr.Left && (p || (M(), Ai() || requestAnimationFrame(() => m()), s.mode === 0 && l.closeCombobox()));
  }), v = z(() => {
    if (p) return l.goToOption(he.Nothing);
    let G = s.calculateIndex(c);
    l.goToOption(he.Specific, G);
  }), w = Ja(), y = z((G) => w.update(G)), R = z((G) => {
    if (!w.wasMoved(G) || p || h) return;
    let Y = s.calculateIndex(c);
    l.goToOption(he.Specific, Y, 0);
  }), I = z((G) => {
    w.wasMoved(G) && (p || h && (s.optionsPropsRef.current.hold || l.goToOption(he.Nothing)));
  }), N = ne(() => ({ active: h, focus: h, selected: x, disabled: p }), [h, x, p]), O = { id: u, ref: $, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": x, disabled: void 0, onMouseDown: _, onFocus: v, onPointerEnter: y, onMouseEnter: y, onPointerMove: R, onMouseMove: R, onPointerLeave: I, onMouseLeave: I };
  return we()({ ourProps: O, theirProps: d, slot: N, defaultTag: Uc, name: "Combobox.Option" });
}
let Yc = ve(Lc), yr = ve(Bc), ds = ve(Hc), Xc = xa, fs = ve(qc), Sr = ve(Kc), Zc = Object.assign(Yc, { Input: ds, Button: yr, Label: Xc, Options: fs, Option: Sr });
function Jc(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Ft(e, "escape");
  Vr(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Ce.Escape && n(o));
  });
}
function Qc() {
  var e;
  let [t] = ee(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = ee((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return le(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function ed({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = wt(n), o = z(() => {
    var i, s;
    let l = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? l.push(a) : "current" in a && a.current instanceof HTMLElement && l.push(a.current));
    if (t != null && t.current) for (let a of t.current) l.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || l.some((u) => a.contains(u)) || l.push(a));
    return l;
  });
  return { resolveContainers: o, contains: z((i) => o().some((s) => s.contains(i))) };
}
let ps = pe(null);
function Lo({ children: e, node: t }) {
  let [n, r] = ee(null), o = ms(t ?? n);
  return k.createElement(ps.Provider, { value: o }, e, o === null && k.createElement(qt, { features: Tt.Hidden, ref: (i) => {
    var s, l;
    if (i) {
      for (let a of (l = (s = Mt(i)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? l : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function ms(e = null) {
  var t;
  return (t = ue(ps)) != null ? t : e;
}
function Kr() {
  let e = B(!1);
  return le(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Ht = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ht || {});
function td() {
  let e = B(0);
  return ji(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function gs(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let nd = "div";
var ut = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(ut || {});
function rd(e, t) {
  let n = B(null), r = _e(n, t), { initialFocus: o, initialFocusFallback: i, containers: s, features: l = 15, ...a } = e;
  rn() || (l = 0);
  let u = wt(n);
  ld(l, { ownerDocument: u });
  let c = ad(l, { ownerDocument: u, container: n, initialFocus: o, initialFocusFallback: i });
  ud(l, { ownerDocument: u, container: n, containers: s, previousActiveElement: c });
  let p = td(), g = z((S) => {
    let C = n.current;
    C && (($) => $())(() => {
      Ie(p.current, { [Ht.Forwards]: () => {
        Gt(C, Ke.First, { skipElements: [S.relatedTarget, i] });
      }, [Ht.Backwards]: () => {
        Gt(C, Ke.Last, { skipElements: [S.relatedTarget, i] });
      } });
    });
  }), d = Ft(!!(l & 2), "focus-trap#tab-lock"), m = xt(), h = B(!1), x = { ref: r, onKeyDown(S) {
    S.key == "Tab" && (h.current = !0, m.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(S) {
    if (!(l & 4)) return;
    let C = gs(s);
    n.current instanceof HTMLElement && C.add(n.current);
    let $ = S.relatedTarget;
    $ instanceof HTMLElement && $.dataset.headlessuiFocusGuard !== "true" && (hs(C, $) || (h.current ? Gt(n.current, Ie(p.current, { [Ht.Forwards]: () => Ke.Next, [Ht.Backwards]: () => Ke.Previous }) | Ke.WrapAround, { relativeTo: S.target }) : S.target instanceof HTMLElement && Xe(S.target)));
  } }, b = we();
  return k.createElement(k.Fragment, null, d && k.createElement(qt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: g, features: Tt.Focusable }), b({ ourProps: x, theirProps: a, defaultTag: nd, name: "FocusTrap" }), d && k.createElement(qt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: g, features: Tt.Focusable }));
}
let od = ve(rd), id = Object.assign(od, { features: ut });
function sd(e = !0) {
  let t = B(He.slice());
  return Ut(([n], [r]) => {
    r === !0 && n === !1 && $n(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = He.slice());
  }, [e, He, t]), z(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function ld(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = sd(n);
  Ut(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && Xe(r());
  }, [n]), os(() => {
    n && Xe(r());
  });
}
function ad(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = B(null), s = Ft(!!(e & 1), "focus-trap#initial-focus"), l = Kr();
  return Ut(() => {
    if (e === 0) return;
    if (!s) {
      o != null && o.current && Xe(o.current);
      return;
    }
    let a = n.current;
    a && $n(() => {
      if (!l.current) return;
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
      if (r != null && r.current) Xe(r.current);
      else {
        if (e & 16) {
          if (Gt(a, Ke.First | Ke.AutoFocus) !== gr.Error) return;
        } else if (Gt(a, Ke.First) !== gr.Error) return;
        if (o != null && o.current && (Xe(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, s, e]), i;
}
function ud(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = Kr(), s = !!(e & 4);
  Vr(t == null ? void 0 : t.defaultView, "focus", (l) => {
    if (!s || !i.current) return;
    let a = gs(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let u = o.current;
    if (!u) return;
    let c = l.target;
    c && c instanceof HTMLElement ? hs(a, c) ? (o.current = c, Xe(c)) : (l.preventDefault(), l.stopPropagation(), Xe(u)) : Xe(o.current);
  }, !0);
}
function hs(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function vs(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : ws) !== Fe || k.Children.count(e.children) === 1;
}
let jn = pe(null);
jn.displayName = "TransitionContext";
var cd = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(cd || {});
function dd() {
  let e = ue(jn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function fd() {
  let e = ue(Nn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Nn = pe(null);
Nn.displayName = "NestingContext";
function kn(e) {
  return "children" in e ? kn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function xs(e, t) {
  let n = lt(e), r = B([]), o = Kr(), i = xt(), s = z((d, m = et.Hidden) => {
    let h = r.current.findIndex(({ el: x }) => x === d);
    h !== -1 && (Ie(m, { [et.Unmount]() {
      r.current.splice(h, 1);
    }, [et.Hidden]() {
      r.current[h].state = "hidden";
    } }), i.microTask(() => {
      var x;
      !kn(r) && o.current && ((x = n.current) == null || x.call(n));
    }));
  }), l = z((d) => {
    let m = r.current.find(({ el: h }) => h === d);
    return m ? m.state !== "visible" && (m.state = "visible") : r.current.push({ el: d, state: "visible" }), () => s(d, et.Unmount);
  }), a = B([]), u = B(Promise.resolve()), c = B({ enter: [], leave: [] }), p = z((d, m, h) => {
    a.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([x]) => x !== d)), t == null || t.chains.current[m].push([d, new Promise((x) => {
      a.current.push(x);
    })]), t == null || t.chains.current[m].push([d, new Promise((x) => {
      Promise.all(c.current[m].map(([b, S]) => S)).then(() => x());
    })]), m === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => h(m)) : h(m);
  }), g = z((d, m, h) => {
    Promise.all(c.current[m].splice(0).map(([x, b]) => b)).then(() => {
      var x;
      (x = a.current.shift()) == null || x();
    }).then(() => h(m));
  });
  return ne(() => ({ children: r, register: l, unregister: s, onStart: p, onStop: g, wait: u, chains: c }), [l, s, r, p, g, c, u]);
}
let ws = Fe, bs = _t.RenderStrategy;
function pd(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: s, beforeLeave: l, afterLeave: a, enter: u, enterFrom: c, enterTo: p, entered: g, leave: d, leaveFrom: m, leaveTo: h, ...x } = e, [b, S] = ee(null), C = B(null), $ = vs(e), M = _e(...$ ? [C, t, S] : t === null ? [] : [t]), P = (n = x.unmount) == null || n ? et.Unmount : et.Hidden, { show: _, appear: v, initial: w } = dd(), [y, R] = ee(_ ? "visible" : "hidden"), I = fd(), { register: N, unregister: O } = I;
  le(() => N(C), [N, C]), le(() => {
    if (P === et.Hidden && C.current) {
      if (_ && y !== "visible") {
        R("visible");
        return;
      }
      return Ie(y, { hidden: () => O(C), visible: () => N(C) });
    }
  }, [y, C, N, O, _, P]);
  let G = rn();
  le(() => {
    if ($ && G && y === "visible" && C.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [C, y, G, $]);
  let Y = w && !v, H = v && _ && w, V = B(!1), F = xs(() => {
    V.current || (R("hidden"), O(C));
  }, I), A = z((re) => {
    V.current = !0;
    let W = re ? "enter" : "leave";
    F.onStart(C, W, (J) => {
      J === "enter" ? i == null || i() : J === "leave" && (l == null || l());
    });
  }), j = z((re) => {
    let W = re ? "enter" : "leave";
    V.current = !1, F.onStop(C, W, (J) => {
      J === "enter" ? s == null || s() : J === "leave" && (a == null || a());
    }), W === "leave" && !kn(F) && (R("hidden"), O(C));
  });
  ie(() => {
    $ && o || (A(_), j(_));
  }, [_, $, o]);
  let D = !(!o || !$ || !G || Y), [, T] = Vi(D, b, _, { start: A, end: j }), oe = Qe({ ref: M, className: ((r = pr(x.className, H && u, H && c, T.enter && u, T.enter && T.closed && c, T.enter && !T.closed && p, T.leave && d, T.leave && !T.closed && m, T.leave && T.closed && h, !T.transition && _ && g)) == null ? void 0 : r.trim()) || void 0, ...Li(T) }), Q = 0;
  y === "visible" && (Q |= $e.Open), y === "hidden" && (Q |= $e.Closed), T.enter && (Q |= $e.Opening), T.leave && (Q |= $e.Closing);
  let se = we();
  return k.createElement(Nn.Provider, { value: F }, k.createElement(rs, { value: Q }, se({ ourProps: oe, theirProps: x, defaultTag: ws, features: bs, visible: y === "visible", name: "Transition.Child" })));
}
function md(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, s = B(null), l = vs(e), a = _e(...l ? [s, t] : t === null ? [] : [t]);
  rn();
  let u = nn();
  if (n === void 0 && u !== null && (n = (u & $e.Open) === $e.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, p] = ee(n ? "visible" : "hidden"), g = xs(() => {
    n || p("hidden");
  }), [d, m] = ee(!0), h = B([n]);
  le(() => {
    d !== !1 && h.current[h.current.length - 1] !== n && (h.current.push(n), m(!1));
  }, [h, n]);
  let x = ne(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  le(() => {
    n ? p("visible") : !kn(g) && s.current !== null && p("hidden");
  }, [n, g]);
  let b = { unmount: o }, S = z(() => {
    var M;
    d && m(!1), (M = e.beforeEnter) == null || M.call(e);
  }), C = z(() => {
    var M;
    d && m(!1), (M = e.beforeLeave) == null || M.call(e);
  }), $ = we();
  return k.createElement(Nn.Provider, { value: g }, k.createElement(jn.Provider, { value: x }, $({ ourProps: { ...b, as: Fe, children: k.createElement(ys, { ref: a, ...b, ...i, beforeEnter: S, beforeLeave: C }) }, theirProps: {}, defaultTag: Fe, features: bs, visible: c === "visible", name: "Transition" })));
}
function gd(e, t) {
  let n = ue(jn) !== null, r = nn() !== null;
  return k.createElement(k.Fragment, null, !n && r ? k.createElement(Cr, { ref: t, ...e }) : k.createElement(ys, { ref: t, ...e }));
}
let Cr = ve(md), ys = ve(pd), Yr = ve(gd), hd = Object.assign(Cr, { Child: Yr, Root: Cr });
var vd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vd || {}), xd = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(xd || {});
let wd = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Xr = pe(null);
Xr.displayName = "DialogContext";
function Dn(e) {
  let t = ue(Xr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Dn), n;
  }
  return t;
}
function bd(e, t) {
  return Ie(t.type, wd, e, t);
}
let Vo = ve(function(e, t) {
  let n = Ae(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: s, role: l = "dialog", autoFocus: a = !0, __demoMode: u = !1, unmount: c = !1, ...p } = e, g = B(!1);
  l = function() {
    return l === "dialog" || l === "alertdialog" ? l : (g.current || (g.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = nn();
  o === void 0 && d !== null && (o = (d & $e.Open) === $e.Open);
  let m = B(null), h = _e(m, t), x = wt(m), b = o ? 0 : 1, [S, C] = Rn(bd, { titleId: null, descriptionId: null, panelRef: Qo() }), $ = z(() => i(!1)), M = z((j) => C({ type: 0, id: j })), P = rn() ? b === 0 : !1, [_, v] = Ic(), w = { get current() {
    var j;
    return (j = S.panelRef.current) != null ? j : m.current;
  } }, y = ms(), { resolveContainers: R } = ed({ mainTreeNode: y, portals: _, defaultContainers: [w] }), I = d !== null ? (d & $e.Closing) === $e.Closing : !1;
  Ii(u || I ? !1 : P, { allowed: z(() => {
    var j, D;
    return [(D = (j = m.current) == null ? void 0 : j.closest("[data-headlessui-portal]")) != null ? D : null];
  }), disallowed: z(() => {
    var j;
    return [(j = y == null ? void 0 : y.closest("body > *:not(#headlessui-portal-root)")) != null ? j : null];
  }) }), Ni(P, R, (j) => {
    j.preventDefault(), $();
  }), Jc(P, x == null ? void 0 : x.defaultView, (j) => {
    j.preventDefault(), j.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), $();
  }), Di(u || I ? !1 : P, x, R), Mi(P, m, $);
  let [N, O] = ua(), G = ne(() => [{ dialogState: b, close: $, setTitleId: M, unmount: c }, S], [b, S, $, M, c]), Y = ne(() => ({ open: b === 0 }), [b]), H = { ref: h, id: r, role: l, tabIndex: -1, "aria-modal": u ? void 0 : b === 0 ? !0 : void 0, "aria-labelledby": S.titleId, "aria-describedby": N, unmount: c }, V = !Qc(), F = ut.None;
  P && !u && (F |= ut.RestoreFocus, F |= ut.TabLock, a && (F |= ut.AutoFocus), V && (F |= ut.InitialFocus));
  let A = we();
  return k.createElement(wc, null, k.createElement(Do, { force: !0 }, k.createElement(us, null, k.createElement(Xr.Provider, { value: G }, k.createElement(as, { target: m }, k.createElement(Do, { force: !1 }, k.createElement(O, { slot: Y }, k.createElement(v, null, k.createElement(id, { initialFocus: s, initialFocusFallback: m, containers: R, features: F }, k.createElement(ba, { value: $ }, A({ ourProps: H, theirProps: p, slot: Y, defaultTag: yd, features: Sd, visible: b === 0, name: "Dialog" })))))))))));
}), yd = "div", Sd = _t.RenderStrategy | _t.Static;
function Cd(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = nn(), s = e.hasOwnProperty("open") || i !== null, l = e.hasOwnProperty("onClose");
  if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? k.createElement(Lo, null, k.createElement(hd, { show: r, transition: n, unmount: o.unmount }, k.createElement(Vo, { ref: t, ...o }))) : k.createElement(Lo, null, k.createElement(Vo, { ref: t, open: r, ...o }));
}
let Ed = "div";
function Rd(e, t) {
  let n = Ae(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: s, unmount: l }, a] = Dn("Dialog.Panel"), u = _e(t, a.panelRef), c = ne(() => ({ open: s === 0 }), [s]), p = z((x) => {
    x.stopPropagation();
  }), g = { ref: u, id: r, onClick: p }, d = o ? Yr : Fe, m = o ? { unmount: l } : {}, h = we();
  return k.createElement(d, { ...m }, h({ ourProps: g, theirProps: i, slot: c, defaultTag: Ed, name: "Dialog.Panel" }));
}
let $d = "div";
function _d(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = Dn("Dialog.Backdrop"), s = ne(() => ({ open: o === 0 }), [o]), l = { ref: t, "aria-hidden": !0 }, a = n ? Yr : Fe, u = n ? { unmount: i } : {}, c = we();
  return k.createElement(a, { ...u }, c({ ourProps: l, theirProps: r, slot: s, defaultTag: $d, name: "Dialog.Backdrop" }));
}
let Td = "h2";
function Id(e, t) {
  let n = Ae(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: s }] = Dn("Dialog.Title"), l = _e(t);
  ie(() => (s(r), () => s(null)), [r, s]);
  let a = ne(() => ({ open: i === 0 }), [i]), u = { ref: l, id: r };
  return we()({ ourProps: u, theirProps: o, slot: a, defaultTag: Td, name: "Dialog.Title" });
}
let Md = ve(Cd), Ss = ve(Rd), Fd = ve(_d), Cs = ve(Id), Od = Object.assign(Md, { Panel: Ss, Title: Cs, Description: pa });
function Pd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const Ad = /* @__PURE__ */ E.forwardRef(Pd);
function jd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Nd = /* @__PURE__ */ E.forwardRef(jd);
function kd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Dd = /* @__PURE__ */ E.forwardRef(kd);
function Ld({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const Vd = /* @__PURE__ */ E.forwardRef(Ld);
function Hd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const zd = /* @__PURE__ */ E.forwardRef(Hd);
function Bd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Gd = /* @__PURE__ */ E.forwardRef(Bd);
function Wd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const qd = /* @__PURE__ */ E.forwardRef(Wd);
function Ud({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const Kd = /* @__PURE__ */ E.forwardRef(Ud);
function Yd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const Xd = /* @__PURE__ */ E.forwardRef(Yd);
function Zd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const Jd = /* @__PURE__ */ E.forwardRef(Zd);
function Qd({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const ef = /* @__PURE__ */ E.forwardRef(Qd);
function tf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const nf = /* @__PURE__ */ E.forwardRef(tf);
function rf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const Es = /* @__PURE__ */ E.forwardRef(rf), of = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear" }, input: { clear: "Clear" } }, sf = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, lf = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data" }, af = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, uf = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, cf = { includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique" }, df = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, ff = {
  components: of,
  importer: sf,
  uploader: lf,
  mapper: af,
  sheet: uf,
  validators: cf,
  importStatus: df
}, pf = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer" }, input: { clear: "Effacer" } }, mf = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, gf = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement" }, hf = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, vf = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, xf = { includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique" }, wf = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, bf = {
  components: pf,
  importer: mf,
  uploader: gf,
  mapper: hf,
  sheet: vf,
  validators: xf,
  importStatus: wf
}, yf = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar" }, input: { clear: "Limpar" } }, Sf = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Cf = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente" }, Ef = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Rf = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, $f = { includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único" }, _f = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, Tf = {
  components: yf,
  importer: Sf,
  uploader: Cf,
  mapper: Ef,
  sheet: Rf,
  validators: $f,
  importStatus: _f
}, Rs = pe(
  {}
);
function If({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ f.jsx(Rs.Provider, { value: e, children: t });
}
function Ze() {
  return ue(Rs);
}
const Mf = {
  en: ff,
  fr: bf,
  "pt-BR": Tf
}, Ff = "en";
function Ho(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? Mf[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function Of(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Pf(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ f.jsx("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    if (o) {
      const i = o[1];
      return t[i] ?? `{${i}}`;
    }
    return r;
  }) });
}
const $s = pe(
  {}
);
function Af({ children: e }) {
  const { translationResources: t, locale: n } = Ze(), r = n ?? Ff;
  function o(s, l = {}) {
    const a = Ho(r, s, t);
    return Of(a, l);
  }
  function i(s, l = {}) {
    const a = Ho(r, s, t);
    return Pf(a, l);
  }
  return /* @__PURE__ */ f.jsx($s.Provider, { value: { t: o, tHtml: i }, children: e });
}
function ge() {
  return ue($s);
}
function Er({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: s,
  variant: l = "default"
}) {
  const { t: a } = ge(), u = {
    danger: {
      icon: /* @__PURE__ */ f.jsx(
        Gd,
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
  }, { icon: c, btnVariant: p, bgColor: g } = u[l];
  return /* @__PURE__ */ f.jsxs(Od, { open: e, onClose: t, className: "relative z-10", children: [
    /* @__PURE__ */ f.jsx(
      Fd,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ f.jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ f.jsxs(
      Ss,
      {
        transition: !0,
        className: "relative transform overflow-hidden rounded-lg bg-background px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: "sm:flex sm:items-start", children: [
            c && /* @__PURE__ */ f.jsx(
              "div",
              {
                className: `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${g} sm:mx-0 sm:size-10`,
                children: c
              }
            ),
            /* @__PURE__ */ f.jsxs("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
              /* @__PURE__ */ f.jsx(
                Cs,
                {
                  as: "h3",
                  className: "text-base font-semibold text-gray-900",
                  children: n
                }
              ),
              r && /* @__PURE__ */ f.jsx("div", { className: "mt-2", children: /* @__PURE__ */ f.jsx("p", { className: "text-sm text-gray-500", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ f.jsx("div", { className: "sm:ml-3 sm:w-auto", children: /* @__PURE__ */ f.jsx(
              je,
              {
                variant: p,
                onClick: () => {
                  s(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ f.jsx("div", { className: "mt-3 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ f.jsx(
              je,
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
const jf = 100, _s = 5, Nf = [
  "text/csv",
  "text/tab-separated-values"
], zo = ",", kf = 500, Df = "headlessui-portal-root", Rr = "hello-csv", Lf = 52.62, $r = "checkbox-column-id", Vf = 110, Hf = 50, zf = 500, Bf = 150, Gf = En(function({ children: t, withFullHeight: n }, r) {
  return ie(() => {
    const o = new MutationObserver((i) => {
      for (const s of i)
        s.addedNodes.forEach((l) => {
          l.nodeType === Node.ELEMENT_NODE && l.id === Df && l.classList.add(Rr);
        });
    });
    return o.observe(document.body, { childList: !0, subtree: !1 }), () => o.disconnect();
  }, []), /* @__PURE__ */ f.jsx(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Rr}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ f.jsx(
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
function Wf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const qf = /* @__PURE__ */ E.forwardRef(Wf);
function Uf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const Kf = /* @__PURE__ */ E.forwardRef(Uf);
function Yf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const Xf = /* @__PURE__ */ E.forwardRef(Yf);
function Zf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const Jf = /* @__PURE__ */ E.forwardRef(Zf);
function Qf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const Ts = /* @__PURE__ */ E.forwardRef(Qf), Is = En(
  ({
    value: e,
    onBlur: t,
    onChange: n,
    placeholder: r,
    iconBuilder: o,
    classes: i,
    clearable: s,
    type: l = "text",
    ...a
  }, u) => {
    const { t: c } = ge(), [p, g] = ee(e);
    ie(() => {
      g(e);
    }, [e]);
    const d = s && e != null && e !== "";
    function m(h) {
      const x = h.target, b = l === "number" ? x == null ? void 0 : x.valueAsNumber : x == null ? void 0 : x.value;
      return (typeof b == "number" && isNaN(b) ? "" : b) ?? "";
    }
    return /* @__PURE__ */ f.jsxs("div", { className: "grid grid-cols-1", children: [
      /* @__PURE__ */ f.jsx(
        "input",
        {
          "aria-label": a["aria-label"],
          ref: u,
          type: l,
          inputMode: l === "number" ? "numeric" : "text",
          placeholder: r,
          value: p,
          onChange: (h) => (n == null ? void 0 : n(m(h))) ?? g(m(h)),
          className: `${i} ${o != null ? "pl-10" : ""} ${s ? "pr-10" : ""} focus:outline-hello-csv-primary col-start-1 row-start-1 block rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`,
          onBlur: (h) => t == null ? void 0 : t(m(h))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
      }),
      d && /* @__PURE__ */ f.jsx(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": c("components.input.clear"),
          onClick: (h) => {
            h.stopPropagation(), n == null || n("");
          },
          className: "col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2",
          children: /* @__PURE__ */ f.jsx(
            Ts,
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
function Zt({
  value: e,
  options: t,
  onChange: n,
  multiple: r = !1,
  compareFunction: o = (p, g) => p === g,
  clearable: i = !1,
  searchable: s = !1,
  placeholder: l,
  classes: a,
  displayPlaceholderWhenSelected: u = !1,
  ...c
}) {
  const { t: p } = ge(), [g, d] = ee(""), m = (y) => r && Array.isArray(e) ? e.some((R) => o(R, y)) : o(e, y), h = (y) => {
    if (d(""), r) {
      const R = Array.isArray(y) ? y : [y];
      n(R);
    } else
      n(y);
  }, x = () => {
    d(""), n(r ? [] : null);
  }, b = t.filter((y) => m(y.value)), S = b.map((y) => y.label).join(", "), C = g && s ? t.filter(
    (y) => String(y.label).toLowerCase().includes(g.toLowerCase())
  ) : t, $ = l ?? p("components.select.optionPlaceholder"), M = () => s ? S : b.length > 0 ? u ? `${$}: ${S}` : S : "", _ = C.some((y) => y.group) ? Object.entries(
    C.reduce(
      (y, R) => {
        const I = R.group || "ungrouped";
        return y[I] = y[I] || [], y[I].push(R), y;
      },
      {}
    )
  ).map(([y, R]) => ({
    label: y,
    items: R
  })) : [{ label: null, items: C }], v = _.every(({ items: y }) => y.length === 0), w = i && b.length > 0;
  return /* @__PURE__ */ f.jsx(Zc, { value: e, onChange: h, multiple: r, children: /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ f.jsx(
      yr,
      {
        className: "w-full",
        "aria-label": c["aria-label"] ?? l,
        children: /* @__PURE__ */ f.jsx(
          ds,
          {
            className: `${a} focus:outline-hello-csv-primary block w-full cursor-pointer truncate rounded-md bg-background py-1.5 focus:cursor-text ${w ? "pr-12" : "pr-2"} pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm`,
            displayValue: M,
            onChange: (y) => s && d(y.target.value),
            placeholder: $,
            readOnly: !s
          }
        )
      }
    ),
    w && /* @__PURE__ */ f.jsx(
      "span",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": p("components.select.clear"),
        onClick: (y) => {
          y.stopPropagation(), x();
        },
        className: "absolute inset-y-0 right-6 flex cursor-pointer items-center text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ f.jsx(
          Ts,
          {
            className: "h-5 w-5 text-gray-500 hover:text-gray-700",
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ f.jsx(yr, { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2", children: /* @__PURE__ */ f.jsx(
      Xf,
      {
        "aria-hidden": "true",
        className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      }
    ) }),
    /* @__PURE__ */ f.jsxs(
      fs,
      {
        anchor: "bottom",
        transition: !0,
        className: "absolute z-99 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-background py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm",
        children: [
          v && /* @__PURE__ */ f.jsx(
            Sr,
            {
              disabled: !0,
              value: null,
              className: "pointer-events-none relative flex items-center justify-center py-2 pr-9 pl-3 text-gray-400 select-none",
              children: /* @__PURE__ */ f.jsx("span", { className: "block truncate font-normal", children: p("components.select.noOptions") })
            },
            "no-options"
          ),
          _.map(({ label: y, items: R }) => /* @__PURE__ */ f.jsxs("div", { children: [
            y && /* @__PURE__ */ f.jsx("div", { className: "py-2 pr-9 pl-3 text-gray-400 uppercase", children: y }),
            R.map((I) => /* @__PURE__ */ f.jsxs(
              Sr,
              {
                value: I.value,
                className: "group data-focus:bg-hello-csv-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden",
                children: [
                  I.icon,
                  /* @__PURE__ */ f.jsx("span", { className: "block truncate font-normal group-data-selected:font-semibold", children: I.label }),
                  m(I.value) && /* @__PURE__ */ f.jsx("span", { className: "text-hello-csv-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white", children: /* @__PURE__ */ f.jsx(qf, { "aria-hidden": "true", className: "h-5 w-5" }) })
                ]
              },
              I.value
            ))
          ] }, y || "all"))
        ]
      }
    )
  ] }) });
}
function ep({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx("div", { className: "grid grid-cols-1 sm:hidden", children: /* @__PURE__ */ f.jsx(
      Zt,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ f.jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ f.jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ f.jsx(
      "nav",
      {
        "aria-label": "Tabs",
        className: "-mb-px flex space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ f.jsxs(
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
const tp = vt(
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
), np = vt("group relative h-full w-full", {
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
function rp({
  variant: e,
  children: t,
  tooltipText: n
}) {
  const r = tp({ variant: e }), o = np({
    variant: e,
    withOutline: !!n
  });
  return /* @__PURE__ */ f.jsxs("div", { className: o, tabIndex: 0, children: [
    t,
    n && /* @__PURE__ */ f.jsx("span", { className: r, children: n })
  ] });
}
const op = vt(
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
function ip({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ f.jsx("span", { className: "isolate inline-flex rounded-md shadow-xs", children: t.map((n, r) => /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: op({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const sp = vt(
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
function Et({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = ee(!1), [s, l] = ee({ top: 0, left: 0 }), a = B(null), u = B(null), [c, p] = ee(null);
  ie(() => {
    const h = document.createElement("div");
    return h.classList.add(Rr), document.body.appendChild(h), p(h), () => {
      document.body.removeChild(h);
    };
  }, []);
  const g = () => {
    if (!a.current) return;
    const h = a.current.getBoundingClientRect();
    l({
      top: h.bottom + window.scrollY + 8,
      left: h.left + h.width / 2 + window.scrollX
    }), i(!0);
  }, d = () => i(!1), m = Ae();
  return /* @__PURE__ */ f.jsxs(
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
        c && jr(
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              id: m,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: u,
              className: sp({ visible: o, hidden: r }),
              style: {
                top: `${s.top}px`,
                left: `${s.left}px`,
                transform: "translateX(-50%)"
              },
              children: [
                e,
                /* @__PURE__ */ f.jsx("div", { className: "absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900" })
              ]
            }
          ),
          c
        )
      ]
    }
  );
}
const lp = vt("inline-flex items-center rounded-md px-1.5 py-0.5", {
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
function Zr({ children: e, variant: t }) {
  const n = lp({ variant: t });
  return /* @__PURE__ */ f.jsx("div", { className: n, children: e });
}
function ap({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Ms = /* @__PURE__ */ E.forwardRef(ap);
function up({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const cp = /* @__PURE__ */ E.forwardRef(up);
function dp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const _r = /* @__PURE__ */ E.forwardRef(dp);
function fp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const pp = /* @__PURE__ */ E.forwardRef(fp), mp = {
  info: {
    icon: /* @__PURE__ */ f.jsx(
      pp,
      {
        className: "text-hello-csv-primary-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-primary-extra-light text-hello-csv-primary rounded-md p-4"
  },
  success: {
    icon: /* @__PURE__ */ f.jsx(
      Ms,
      {
        className: "text-hello-csv-success-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-success-extra-light text-hello-csv-success rounded-md p-4"
  },
  error: {
    icon: /* @__PURE__ */ f.jsx(
      _r,
      {
        className: "text-hello-csv-danger-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-danger-extra-light text-hello-csv-danger rounded-md p-4"
  },
  warning: {
    icon: /* @__PURE__ */ f.jsx(
      _r,
      {
        className: "text-hello-csv-warning-light size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "bg-hello-csv-warning-extra-light text-hello-csv-warning rounded-md p-4"
  }
};
function Jr({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = mp[e];
  return /* @__PURE__ */ f.jsx("div", { className: o, children: /* @__PURE__ */ f.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ f.jsx("div", { className: "mt-1 shrink-0", children: r }),
    /* @__PURE__ */ f.jsxs("div", { className: "ml-3", children: [
      t && /* @__PURE__ */ f.jsx("div", { className: "text-md", children: t }),
      /* @__PURE__ */ f.jsx("div", { className: "text-sm", children: n })
    ] })
  ] }) });
}
function gp({ children: e }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ f.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ f.jsx(
      nf,
      {
        "aria-hidden": "true",
        className: "text-hello-csv-danger size-5"
      }
    ) }),
    /* @__PURE__ */ f.jsx("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ f.jsx("p", { className: "text-hello-csv-danger text-sm", children: e }) })
  ] });
}
function Fs(e, t) {
  return e.indexOf(t) !== -1;
}
function Os(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function Ps(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
class bt {
  constructor(t) {
    Me(this, "definition");
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class hp extends bt {
  constructor(n) {
    super(n);
    Me(this, "key");
    Me(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
function vp(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class Ln extends bt {
  constructor(n) {
    super(n);
    Me(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(vp(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class xp extends Ln {
  constructor() {
    super({
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      validate: "email"
    });
  }
}
class wp extends bt {
  constructor(n) {
    super(n);
    Me(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class bp extends bt {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class yp extends bt {
  constructor(n) {
    super(n);
    Me(this, "delimiter");
    Me(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    var o;
    if ((((o = n == null ? void 0 : n.toString()) == null ? void 0 : o.split(this.delimiter)) ?? []).some((i) => !this.values.includes(i.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class Sp extends Ln {
  constructor() {
    super({
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      validate: "phone_number"
    });
  }
}
class Cp extends Ln {
  constructor() {
    super({
      regex: /^\d{5}(-\d{4})?$/,
      validate: "postal_code"
    });
  }
}
const Ep = (e) => e == null, Rp = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function Qr(e) {
  return Ep(e) || e === "";
}
const Bo = (e) => [...new Set(e)];
function Sn(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function Go(e) {
  if (e == null)
    return "";
  let t = String(e);
  return t = t.replace(/"/g, '""'), /[",\n\r]/.test(t) && (t = `"${t}"`), t;
}
function As(e, t, n, r) {
  const o = e.columns.map(
    (l) => Go(r === "label" ? l.label : l.id)
  ).join(zo), i = t.map(
    (l) => e.columns.map((a) => {
      const u = l[a.id];
      let c;
      return r === "value" || u == null ? c = u : a.type === "enum" ? c = Cn(
        n[e.id][a.id],
        u
      ) : a.type === "reference" ? c = Cn(
        eo(a, n),
        u
      ) : c = u, Go(c);
    }).join(zo)
  ), s = [o, ...i].join(`
`);
  return new Blob([s], { type: "text/csv" });
}
function js(e, t, n, r) {
  const o = As(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), s = document.createElement("a");
  s.href = i, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(i);
}
function eo(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function Cn(e, t) {
  return typeof t != "string" ? t : e[t] ?? t;
}
class $p extends bt {
  isValid(t) {
    if (Qr(t))
      return this.definition.error || "validators.required";
  }
}
class _p extends bt {
  constructor(n) {
    super(n);
    Me(this, "seen");
    this.seen = /* @__PURE__ */ new Set();
  }
  isValid(n) {
    if (this.seen.has(n))
      return this.definition.error || "validators.unique";
    this.seen.add(n);
  }
}
function Tp(e) {
  const t = {
    regex_matches: Ln,
    required: $p,
    unique: _p,
    includes: wp,
    multi_includes: yp,
    is_integer: bp,
    postal_code: Cp,
    phone_number: Sp,
    email: xp,
    custom: hp
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function Ns(e, t) {
  var o, i, s;
  const n = e.typeArguments, r = t.find(
    (l) => l.sheetId === n.sheetId
  );
  return ((s = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((l) => l[n.sheetColumnId])) == null ? void 0 : i.filter((l) => !Qr(l))) == null ? void 0 : s.filter((l, a, u) => u.indexOf(l) === a)) ?? [];
}
function ks(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function Ip(e, t, n, r, o, i, s) {
  return ne(() => {
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
      const c = ks(t, i.id, u);
      return r.find(
        (g) => g.rowIndex === c && g.columnId === o
      ) != null;
    })), s.trim() !== "" && (a = a.filter(
      (u) => Object.values(u).some(
        (c) => {
          var p;
          return (p = Sn(c)) == null ? void 0 : p.includes(Sn(s));
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
    s
  ]);
}
function Ds(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function Mp(e) {
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
function Fp(e, t, n) {
  var i;
  const r = e.type === "enum" ? ((i = e.typeArguments.values.find((s) => s.value === t)) == null ? void 0 : i.label) ?? t : e.type === "reference" && t != null ? Cn(
    eo(e, n),
    t
  ) : t, o = r == null || typeof r == "string" && r.trim() === "";
  return { displayValue: o ? " " : r, valueEmpty: o };
}
function sn(e) {
  return e.validators && e.validators.length > 0 ? !!e.validators.find(
    (n) => n.validate === "required"
  ) : !1;
}
function Op(e, t) {
  const n = [];
  if (e.type === "enum" && n.push({
    values: e.typeArguments.values.map((r) => r.value),
    validate: "includes"
  }), e.type === "reference") {
    const r = Ns(
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
function Pp(e, t, n) {
  const r = [], o = Os(e.columns, (i, s) => {
    s[i.id] = [], [
      ...i.validators ?? [],
      ...Op(i, n)
    ].forEach((a) => {
      s[i.id].push(
        Tp(a)
      );
    });
  });
  return e.columns.forEach((i) => {
    t.rows.forEach((s, l) => {
      if (!Ps(s) || !(i.id in s) && !sn(i))
        return;
      const a = s[i.id];
      o[i.id].forEach((c) => {
        const p = c.isValid(a, s);
        p != null && r.push({
          sheetId: e.id,
          columnId: i.id,
          rowIndex: l,
          message: p
        });
      });
    });
  }), r;
}
function er(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = Pp(r, o, t);
      n.push(...i);
    }
  }), n;
}
const Ap = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Ls = Math.pow(2, 53), jp = -Ls;
function Vs(e, t, n) {
  return t.map((r) => {
    const o = e.find(
      (s) => s.id === r.sheetId
    );
    if (o == null)
      return r;
    const i = r.rows.map((s, l) => {
      const a = { ...s };
      return n(o.columns, a, s, l), a;
    });
    return {
      ...r,
      rows: i
    };
  });
}
function Np(e, t) {
  return Vs(
    e,
    t,
    (n, r, o, i) => {
      n.filter((s) => s.type === "reference").forEach((s) => {
        const l = t.find(
          (a) => a.sheetId === s.typeArguments.sheetId
        );
        if (l != null) {
          const u = l.rows.map(
            (c) => c[s.typeArguments.sheetColumnId]
          )[i];
          r[s.id] = u;
        }
      });
    }
  );
}
function kp(e, t) {
  return Vs(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function Dp(e) {
  if (Ap.test(e)) {
    const t = parseFloat(e);
    if (t > jp && t < Ls)
      return !0;
  }
  return !1;
}
function Lp(e, t) {
  return t.type === "number" && Dp(e) ? parseFloat(e) : e;
}
function Vp(e, t) {
  if (t.type === "enum") {
    const n = t.typeArguments.values.find(
      (r) => r.label === e
    );
    if (n != null)
      return n.value;
  }
  return Lp(e, t);
}
function Hp(e, t, n) {
  return e.map((r) => {
    const o = [], i = t.filter(
      (s) => s.sheetId === r.id
    );
    return n.map((s) => {
      const l = {};
      r.columns.forEach((a) => {
        const u = i.find(
          (c) => c.sheetColumnId === a.id
        );
        u != null && (l[u.sheetColumnId] = Vp(
          s[u.csvColumnName],
          a
        ));
      }), o.push(l);
    }), {
      sheetId: r.id,
      rows: o
    };
  });
}
function zp(e, t, n) {
  const r = n.data, o = Hp(e, t, r), i = kp(
    e,
    o
  );
  return Np(e, i);
}
function Vn(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function Bp(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function Gp(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!Vn(i))
        return !1;
      const s = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Sn(a)), l = Sn(r);
      return s.includes(l);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const Wp = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = Gp(r, t);
    n.push(...o);
  }), Bp(n);
};
function qp(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Up(e, t) {
  const n = Kp(e, t), r = Yp(n);
  return Xp(r);
}
function Kp(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, _s);
}
function Yp(e) {
  return [
    ...e,
    ...Array(_s - e.length).fill("")
  ];
}
function Xp(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > kf && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function Zp(e, t) {
  const { t: n } = ge();
  return e.flatMap(
    (o) => o.columns.filter((i) => Vn(i)).map((i) => ({
      label: `${i.label}${sn(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (s) => s.sheetId === o.id && s.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => Jp(o, i, n("mapper.unused")));
}
function Jp(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function Qp(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (sn(r) && Vn(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function em({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = ge();
  return t && /* @__PURE__ */ f.jsx("div", { className: "m-4 rounded-sm border border-gray-300 bg-background px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ f.jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ f.jsx("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ f.jsx("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ f.jsxs("table", { className: "min-w-full divide-y divide-gray-300", children: [
    /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx(
      "th",
      {
        scope: "col",
        className: "py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ f.jsx(Zr, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ f.jsx("tbody", { className: "divide-y divide-gray-300", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { className: "h-12 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: o || i === 0 && /* @__PURE__ */ f.jsx("span", { className: "text-gray-500 italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function tm({
  csvHeader: e,
  setMapping: t,
  currentMapping: n,
  mappingSelectionOptions: r,
  onMouseEnter: o
}) {
  var s;
  const i = n == null ? null : ((s = r.find(
    (l) => l.value.sheetId === n.sheetId && l.value.sheetColumnId === n.sheetColumnId
  )) == null ? void 0 : s.value) ?? null;
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "hover:bg-hello-csv-muted rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center py-2.5", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "mx-2.5 flex flex-1 justify-between", children: [
          /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(Zr, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ f.jsx("div", { className: "mx-5", children: /* @__PURE__ */ f.jsx(Nd, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "mx-2.5 flex-1", children: /* @__PURE__ */ f.jsx(
          Zt,
          {
            "aria-label": `column mapping for ${e}`,
            searchable: !0,
            clearable: !0,
            compareFunction: (l, a) => l == null || a == null ? !1 : l.sheetColumnId === a.sheetColumnId && l.sheetId === a.sheetId,
            value: i,
            options: r,
            onChange: (l) => t(l)
          }
        ) })
      ] })
    }
  );
}
class ln {
  constructor(t) {
    Me(this, "definition");
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
class nm extends ln {
  constructor(n) {
    super(n);
    Me(this, "key");
    Me(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class rm extends ln {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class om extends ln {
  parse(t) {
    if (typeof t == "string" && Fs(t, "-"))
      return t.split("-")[0];
  }
}
const Wo = [
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
class im extends ln {
  parse(t) {
    const n = Wo.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Fs(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return Wo[r][1];
    }
  }
}
class sm extends ln {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function lm(e) {
  const t = {
    phone_number: rm,
    postal_code: om,
    state_code: im,
    strip: sm,
    custom: nm
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
function am(e, t) {
  const n = Os(
    e.columns,
    (r, o) => {
      o[r.id] = new um(), r.transformers && r.transformers.forEach((i) => {
        o[r.id].push(
          lm(i)
        );
      });
    }
  );
  return e.columns.forEach((r) => {
    const o = r.id, i = n[o];
    t.rows.forEach((s) => {
      if (!Ps(s))
        return;
      const l = s[o];
      Qr(l) || (s[o] = i.transform(l));
    });
  }), t.rows;
}
function Tr(e, t) {
  const n = [];
  return e.forEach((r) => {
    const o = t.find(
      (i) => i.sheetId === r.id
    );
    if (o) {
      const i = am(r, o);
      n.push({ sheetId: r.id, rows: i });
    }
  }), n;
}
class um {
  // Series of transformations
  constructor(t = []) {
    Me(this, "steps");
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
const Hs = "HelloCSV", zs = 1, Ye = "state";
async function cm(e, t) {
  return new Promise((n, r) => {
    const o = Gs(e, t), i = indexedDB.open(Hs, zs);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const u = i.result.transaction(Ye, "readonly").objectStore(Ye).get(o);
      u.onerror = () => n(null), u.onsuccess = () => {
        try {
          const c = u.result;
          c.sheetDefinitions = e, n(c);
        } catch {
          n(null);
        }
      };
    }, i.onupgradeneeded = (s) => {
      const l = s.target.result;
      l.objectStoreNames.contains(Ye) && l.deleteObjectStore(Ye), l.createObjectStore(Ye);
    };
  });
}
async function Bs(e, t) {
  return new Promise((n, r) => {
    const o = Gs(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const s = indexedDB.open(Hs, zs);
    s.onerror = () => r(s.error), s.onsuccess = () => {
      const c = s.result.transaction(Ye, "readwrite").objectStore(Ye).put(i, o);
      c.onerror = () => r(c.error), c.onsuccess = () => n();
    }, s.onupgradeneeded = (l) => {
      const a = l.target.result;
      a.objectStoreNames.contains(Ye) || a.createObjectStore(Ye);
    };
  });
}
function Gs(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${dm(r)}`;
}
function dm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function fm(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
function Hn(e) {
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
async function pm(e, t) {
  const n = Hn(e);
  try {
    return t.enabled ? await mm(e, t) : n;
  } catch {
    return n;
  }
}
async function mm(e, t) {
  const n = await cm(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = Hn(e);
  return Bs(r, t.customKey), r;
}
const gm = (e, t) => {
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
        sheetData: Tr(
          e.sheetDefinitions,
          t.payload.mappedData
        ),
        mode: "preview",
        validationErrors: er(
          e.sheetDefinitions,
          t.payload.mappedData
        )
      };
    case "CELL_CHANGED": {
      const r = e.sheetData.map((o) => {
        if (o.sheetId === t.payload.sheetId) {
          const i = [...o.rows];
          return i[t.payload.rowIndex] = fm(
            t.payload.value,
            t.payload,
            e
          ), { ...o, rows: i };
        } else
          return o;
      });
      return {
        ...e,
        sheetData: Tr(e.sheetDefinitions, r),
        validationErrors: er(e.sheetDefinitions, r)
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
        validationErrors: er(e.sheetDefinitions, n)
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
      return Hn(e.sheetDefinitions);
    case "SET_STATE":
      return t.payload.state;
    default:
      return e;
  }
}, hm = (e, t) => {
  const [n, r] = Rn(gm, Hn(e));
  return ie(() => {
    (async () => {
      const i = await pm(e, t);
      r({ type: "SET_STATE", payload: { state: i } });
    })();
  }, []), ie(() => {
    t.enabled && Bs(n, t.customKey);
  }, [n, t]), [n, r];
}, Ws = pe({}), qs = pe(
  {}
);
function vm({
  sheets: e,
  persistenceConfig: t,
  children: n
}) {
  const [r, o] = hm(e, t);
  return /* @__PURE__ */ f.jsx(Ws.Provider, { value: r, children: /* @__PURE__ */ f.jsx(qs.Provider, { value: o, children: n }) });
}
function at() {
  return ue(Ws);
}
function xm() {
  return ue(qs);
}
function wm({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = at(), { sheets: i } = Ze(), { t: s } = ge(), [l, a] = ee(null), u = r ?? [], c = o, p = c.data, g = c.meta.fields, d = Zp(
    i,
    u
  ), m = Qp(
    i,
    u
  ), h = ne(() => l ? Up(p, l) : [], [l, p]);
  return /* @__PURE__ */ f.jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f.jsx("div", { className: "flex-none text-2xl", children: s("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ f.jsx("div", { className: "min-h-0 flex-auto", children: /* @__PURE__ */ f.jsxs("div", { className: "flex h-full justify-between space-x-5", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-2 flex-col", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "my-5 flex text-sm font-light uppercase", children: [
          /* @__PURE__ */ f.jsx("div", { className: "flex-1", children: s("mapper.importedColumn") }),
          /* @__PURE__ */ f.jsx("div", { className: "flex-1", children: s("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "flex-1 overflow-y-auto", children: g.map((x, b) => {
          const S = u.find(
            (C) => C.csvColumnName === x
          ) ?? null;
          return /* @__PURE__ */ f.jsx(
            tm,
            {
              csvHeader: x,
              currentMapping: S,
              setMapping: (C) => {
                const $ = qp(
                  u,
                  x,
                  C
                );
                e($);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(x);
              }
            },
            b
          );
        }) })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "bg-hello-csv-muted hidden flex-1 overflow-y-auto sm:block", children: /* @__PURE__ */ f.jsx(
        em,
        {
          examples: h,
          csvHeader: l ?? ""
        }
      ) })
    ] }) }),
    !m && /* @__PURE__ */ f.jsx("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ f.jsx(gp, { children: s("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ f.jsx("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ f.jsxs("div", { className: "mt-5 flex justify-between", children: [
      /* @__PURE__ */ f.jsx(je, { variant: "secondary", outline: !0, onClick: n, children: s("mapper.back") }),
      /* @__PURE__ */ f.jsx(je, { onClick: t, disabled: !m, children: s("mapper.confirm") })
    ] }) })
  ] });
}
var bm = { NODE_ENV: "production" };
function tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: tt(n, r[e])
    }));
  };
}
function zn(e) {
  return e instanceof Function;
}
function ym(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Sm(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function U(e, t, n) {
  let r = [], o;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const l = e(i);
    if (!(l.length !== r.length || l.some((c, p) => r[p] !== c)))
      return o;
    r = l;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const c = Math.round((Date.now() - s) * 100) / 100, p = Math.round((Date.now() - u) * 100) / 100, g = p / 16, d = (m, h) => {
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
function K(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: bm.NODE_ENV === "development",
    onChange: r
  };
}
function Cm(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: U(() => [e, n, t, i], (s, l, a, u) => ({
      table: s,
      column: l,
      row: a,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), K(e.options, "debugCells"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function Em(e, t, n, r) {
  var o, i;
  const l = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = l.accessorKey;
  let u = (o = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, c;
  if (l.accessorFn ? c = l.accessorFn : a && (a.includes(".") ? c = (g) => {
    let d = g;
    for (const h of a.split(".")) {
      var m;
      d = (m = d) == null ? void 0 : m[h];
    }
    return d;
  } : c = (g) => g[l.accessorKey]), !u)
    throw new Error();
  let p = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: U(() => [!0], () => {
      var g;
      return [p, ...(g = p.columns) == null ? void 0 : g.flatMap((d) => d.getFlatColumns())];
    }, K(e.options, "debugColumns")),
    getLeafColumns: U(() => [e._getOrderColumnsFn()], (g) => {
      var d;
      if ((d = p.columns) != null && d.length) {
        let m = p.columns.flatMap((h) => h.getLeafColumns());
        return g(m);
      }
      return [p];
    }, K(e.options, "debugColumns"))
  };
  for (const g of e._features)
    g.createColumn == null || g.createColumn(p, e);
  return p;
}
const Se = "debugHeaders";
function qo(e, t, n) {
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
      const s = [], l = (a) => {
        a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), s.push(a);
      };
      return l(i), s;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(i, e);
  }), i;
}
const Rm = {
  createTable: (e) => {
    e.getHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const l = (i = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], a = (s = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? s : [], u = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return cn(t, [...l, ...u, ...a], e);
    }, K(e.options, Se)), e.getCenterHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), cn(t, n, e, "center")), K(e.options, Se)), e.getLeftHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return cn(t, i, e, "left");
    }, K(e.options, Se)), e.getRightHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return cn(t, i, e, "right");
    }, K(e.options, Se)), e.getFooterGroups = U(() => [e.getHeaderGroups()], (t) => [...t].reverse(), K(e.options, Se)), e.getLeftFooterGroups = U(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), K(e.options, Se)), e.getCenterFooterGroups = U(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), K(e.options, Se)), e.getRightFooterGroups = U(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), K(e.options, Se)), e.getFlatHeaders = U(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), K(e.options, Se)), e.getLeftFlatHeaders = U(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), K(e.options, Se)), e.getCenterFlatHeaders = U(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), K(e.options, Se)), e.getRightFlatHeaders = U(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), K(e.options, Se)), e.getCenterLeafHeaders = U(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), K(e.options, Se)), e.getLeftLeafHeaders = U(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), K(e.options, Se)), e.getRightLeafHeaders = U(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), K(e.options, Se)), e.getLeafHeaders = U(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, l, a, u;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : [], ...(a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []].map((c) => c.getLeafHeaders()).flat();
    }, K(e.options, Se));
  }
};
function cn(e, t, n, r) {
  var o, i;
  let s = 0;
  const l = function(g, d) {
    d === void 0 && (d = 1), s = Math.max(s, d), g.filter((m) => m.getIsVisible()).forEach((m) => {
      var h;
      (h = m.columns) != null && h.length && l(m.columns, d + 1);
    }, 0);
  };
  l(e);
  let a = [];
  const u = (g, d) => {
    const m = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    g.forEach((x) => {
      const b = [...h].reverse()[0], S = x.column.depth === m.depth;
      let C, $ = !1;
      if (S && x.column.parent ? C = x.column.parent : (C = x.column, $ = !0), b && (b == null ? void 0 : b.column) === C)
        b.subHeaders.push(x);
      else {
        const M = qo(n, C, {
          id: [r, d, C.id, x == null ? void 0 : x.id].filter(Boolean).join("_"),
          isPlaceholder: $,
          placeholderId: $ ? `${h.filter((P) => P.column === C).length}` : void 0,
          depth: d,
          index: h.length
        });
        M.subHeaders.push(x), h.push(M);
      }
      m.headers.push(x), x.headerGroup = m;
    }), a.push(m), d > 0 && u(h, d - 1);
  }, c = t.map((g, d) => qo(n, g, {
    depth: s,
    index: d
  }));
  u(c, s - 1), a.reverse();
  const p = (g) => g.filter((m) => m.column.getIsVisible()).map((m) => {
    let h = 0, x = 0, b = [0];
    m.subHeaders && m.subHeaders.length ? (b = [], p(m.subHeaders).forEach((C) => {
      let {
        colSpan: $,
        rowSpan: M
      } = C;
      h += $, b.push(M);
    })) : h = 1;
    const S = Math.min(...b);
    return x = x + S, m.colSpan = h, m.rowSpan = x, {
      colSpan: h,
      rowSpan: x
    };
  });
  return p((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const $m = (e, t, n, r, o, i, s) => {
  let l = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (a) => {
      if (l._valuesCache.hasOwnProperty(a))
        return l._valuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return l._valuesCache[a] = u.accessorFn(l.original, r), l._valuesCache[a];
    },
    getUniqueValues: (a) => {
      if (l._uniqueValuesCache.hasOwnProperty(a))
        return l._uniqueValuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = u.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [l.getValue(a)], l._uniqueValuesCache[a]);
    },
    renderValue: (a) => {
      var u;
      return (u = l.getValue(a)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Sm(l.subRows, (a) => a.subRows),
    getParentRow: () => l.parentId ? e.getRow(l.parentId, !0) : void 0,
    getParentRows: () => {
      let a = [], u = l;
      for (; ; ) {
        const c = u.getParentRow();
        if (!c) break;
        a.push(c), u = c;
      }
      return a.reverse();
    },
    getAllCells: U(() => [e.getAllLeafColumns()], (a) => a.map((u) => Cm(e, l, u, u.id)), K(e.options, "debugRows")),
    _getAllCellsByColumnId: U(() => [l.getAllCells()], (a) => a.reduce((u, c) => (u[c.column.id] = c, u), {}), K(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(l, e);
  }
  return l;
}, _m = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Us = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Us.autoRemove = (e) => Ne(e);
const Ks = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Ks.autoRemove = (e) => Ne(e);
const Ys = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Ys.autoRemove = (e) => Ne(e);
const Xs = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Xs.autoRemove = (e) => Ne(e);
const Zs = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Zs.autoRemove = (e) => Ne(e) || !(e != null && e.length);
const Js = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Js.autoRemove = (e) => Ne(e) || !(e != null && e.length);
const Qs = (e, t, n) => e.getValue(t) === n;
Qs.autoRemove = (e) => Ne(e);
const el = (e, t, n) => e.getValue(t) == n;
el.autoRemove = (e) => Ne(e);
const to = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
to.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const l = i;
    i = s, s = l;
  }
  return [i, s];
};
to.autoRemove = (e) => Ne(e) || Ne(e[0]) && Ne(e[1]);
const Ue = {
  includesString: Us,
  includesStringSensitive: Ks,
  equalsString: Ys,
  arrIncludes: Xs,
  arrIncludesAll: Zs,
  arrIncludesSome: Js,
  equals: Qs,
  weakEquals: el,
  inNumberRange: to
};
function Ne(e) {
  return e == null || e === "";
}
const Tm = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Pe("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? Ue.includesString : typeof r == "number" ? Ue.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Ue.equals : Array.isArray(r) ? Ue.arrIncludes : Ue.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return zn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Ue[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((c) => c.id === e.id), s = tt(n, i ? i.value : void 0);
        if (Uo(o, s, e)) {
          var l;
          return (l = r == null ? void 0 : r.filter((c) => c.id !== e.id)) != null ? l : [];
        }
        const a = {
          id: e.id,
          value: s
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
        return (i = tt(t, o)) == null ? void 0 : i.filter((s) => {
          const l = n.find((a) => a.id === s.id);
          if (l) {
            const a = l.getFilterFn();
            if (Uo(a, s.value, l))
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
function Uo(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Im = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Mm = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Fm = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Om = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Pm = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Am = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!ym(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, jm = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Nm = (e, t) => new Set(t.map((n) => n.getValue(e))).size, km = (e, t) => t.length, tr = {
  sum: Im,
  min: Mm,
  max: Fm,
  extent: Om,
  mean: Pm,
  median: Am,
  unique: jm,
  uniqueCount: Nm,
  count: km
}, Dm = {
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
    onGroupingChange: Pe("grouping", e),
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
        return tr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return tr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return zn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : tr[e.columnDef.aggregationFn];
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
function Lm(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const Vm = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Pe("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = U((n) => [Wt(t, n)], (n) => n.findIndex((r) => r.id === e.id), K(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = Wt(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = Wt(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = U(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const s = [...t], l = [...o];
        for (; l.length && s.length; ) {
          const a = s.shift(), u = l.findIndex((c) => c.id === a);
          u > -1 && i.push(l.splice(u, 1)[0]);
        }
        i = [...i, ...l];
      }
      return Lm(i, n, r);
    }, K(e.options, "debugTable"));
  }
}, nr = () => ({
  left: [],
  right: []
}), Hm = {
  getInitialState: (e) => ({
    columnPinning: nr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Pe("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, s;
        if (n === "right") {
          var l, a;
          return {
            left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((p) => !(r != null && r.includes(p))),
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
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((p) => !(r != null && r.includes(p)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, s;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((l) => l.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, i = n.some((l) => r == null ? void 0 : r.includes(l)), s = n.some((l) => o == null ? void 0 : o.includes(l));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = U(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, K(t.options, "debugRows")), e.getLeftVisibleCells = U(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), K(t.options, "debugRows")), e.getRightVisibleCells = U(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), K(t.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? nr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : nr());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), K(e.options, "debugColumns")), e.getRightLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), K(e.options, "debugColumns")), e.getCenterLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, K(e.options, "debugColumns"));
  }
}, dn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, rr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), zm = {
  getDefaultColumnDef: () => dn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: rr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Pe("columnSizing", e),
    onColumnSizingInfoChange: Pe("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : dn.minSize, (r = i ?? e.columnDef.size) != null ? r : dn.size), (o = e.columnDef.maxSize) != null ? o : dn.maxSize);
    }, e.getStart = U((n) => [n, Wt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), K(t.options, "debugColumns")), e.getAfter = U((n) => [n, Wt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), K(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), or(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), l = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], a = or(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (b, S) => {
          typeof S == "number" && (t.setColumnSizingInfo((C) => {
            var $, M;
            const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, _ = (S - (($ = C == null ? void 0 : C.startOffset) != null ? $ : 0)) * P, v = Math.max(_ / ((M = C == null ? void 0 : C.startSize) != null ? M : 0), -0.999999);
            return C.columnSizingStart.forEach((w) => {
              let [y, R] = w;
              u[y] = Math.round(Math.max(R + R * v, 0) * 100) / 100;
            }), {
              ...C,
              deltaOffset: _,
              deltaPercentage: v
            };
          }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((C) => ({
            ...C,
            ...u
          })));
        }, p = (b) => c("move", b), g = (b) => {
          c("end", b), t.setColumnSizingInfo((S) => ({
            ...S,
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
            var S;
            d == null || d.removeEventListener("touchmove", h.moveHandler), d == null || d.removeEventListener("touchend", h.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), g((S = b.touches[0]) == null ? void 0 : S.clientX);
          }
        }, x = Bm() ? {
          passive: !1
        } : !1;
        or(i) ? (d == null || d.addEventListener("touchmove", h.moveHandler, x), d == null || d.addEventListener("touchend", h.upHandler, x)) : (d == null || d.addEventListener("mousemove", m.moveHandler, x), d == null || d.addEventListener("mouseup", m.upHandler, x)), t.setColumnSizingInfo((b) => ({
          ...b,
          startOffset: a,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: l,
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
      e.setColumnSizingInfo(t ? rr() : (n = e.initialState.columnSizingInfo) != null ? n : rr());
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
let fn = null;
function Bm() {
  if (typeof fn == "boolean") return fn;
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
  return fn = e, fn;
}
function or(e) {
  return e.type === "touchstart";
}
const Gm = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Pe("columnVisibility", e)
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
    e._getAllVisibleCells = U(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), K(t.options, "debugRows")), e.getVisibleCells = U(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], K(t.options, "debugRows"));
  },
  createTable: (e) => {
    const t = (n, r) => U(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), K(e.options, "debugColumns"));
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
function Wt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Wm = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, qm = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Pe("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => Ue.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return zn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Ue[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Um = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Pe("expanded", e),
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
        const s = i.split(".");
        r = Math.max(r, s.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let s = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
          s[l] = !0;
        }) : s = r, n = (o = n) != null ? o : !i, !i && n)
          return {
            ...s,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: l,
            ...a
          } = s;
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
}, Ir = 0, Mr = 10, ir = () => ({
  pageIndex: Ir,
  pageSize: Mr
}), Km = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...ir(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Pe("pagination", e)
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
      const o = (i) => tt(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? ir() : (o = e.initialState.pagination) != null ? o : ir());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = tt(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Ir : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Ir);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? Mr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Mr);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, tt(r, o.pageSize)), s = o.pageSize * o.pageIndex, l = Math.floor(s / i);
        return {
          ...o,
          pageIndex: l,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = tt(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = U(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, K(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, sr = () => ({
  top: [],
  bottom: []
}), Ym = {
  getInitialState: (e) => ({
    rowPinning: sr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Pe("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], s = o ? e.getParentRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], l = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((a) => {
        var u, c;
        if (n === "bottom") {
          var p, g;
          return {
            top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((h) => !(l != null && l.has(h))),
            bottom: [...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((h) => !(l != null && l.has(h))), ...Array.from(l)]
          };
        }
        if (n === "top") {
          var d, m;
          return {
            top: [...((d = a == null ? void 0 : a.top) != null ? d : []).filter((h) => !(l != null && l.has(h))), ...Array.from(l)],
            bottom: ((m = a == null ? void 0 : a.bottom) != null ? m : []).filter((h) => !(l != null && l.has(h)))
          };
        }
        return {
          top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter((h) => !(l != null && l.has(h))),
          bottom: ((c = a == null ? void 0 : a.bottom) != null ? c : []).filter((h) => !(l != null && l.has(h)))
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
      } = t.getState().rowPinning, i = n.some((l) => r == null ? void 0 : r.includes(l)), s = n.some((l) => o == null ? void 0 : o.includes(l));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: l
        } = s;
        return l;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? sr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : sr());
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
        (n ?? []).map((s) => {
          const l = e.getRow(s, !0);
          return l.getIsAllParentsExpanded() ? l : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((s) => t.find((l) => l.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: r
      }));
    }, e.getTopRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), K(e.options, "debugRows")), e.getBottomRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), K(e.options, "debugRows")), e.getCenterRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, K(e.options, "debugRows"));
  }
}, Xm = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Pe("rowSelection", e),
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
        Fr(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = U(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? lr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, K(e.options, "debugTable")), e.getFilteredSelectedRowModel = U(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? lr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, K(e.options, "debugTable")), e.getGroupedSelectedRowModel = U(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? lr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, K(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
        var s;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return i;
        const l = {
          ...i
        };
        return Fr(l, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return no(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Or(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Or(e, n) === "all";
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
}, Fr = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => Fr(e, l.id, n, r, o));
};
function lr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, l) {
    return s.map((a) => {
      var u;
      const c = no(a, n);
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
function no(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Or(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (no(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const l = Or(s, t);
      l === "all" ? i = !0 : (l === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Pr = /([0-9]+)/gm, Zm = (e, t, n) => tl(it(e.getValue(n)).toLowerCase(), it(t.getValue(n)).toLowerCase()), Jm = (e, t, n) => tl(it(e.getValue(n)), it(t.getValue(n))), Qm = (e, t, n) => ro(it(e.getValue(n)).toLowerCase(), it(t.getValue(n)).toLowerCase()), eg = (e, t, n) => ro(it(e.getValue(n)), it(t.getValue(n))), tg = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, ng = (e, t, n) => ro(e.getValue(n), t.getValue(n));
function ro(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function it(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function tl(e, t) {
  const n = e.split(Pr).filter(Boolean), r = t.split(Pr).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), s = parseInt(o, 10), l = parseInt(i, 10), a = [s, l].sort();
    if (isNaN(a[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(a[1]))
      return isNaN(s) ? -1 : 1;
    if (s > l)
      return 1;
    if (l > s)
      return -1;
  }
  return n.length - r.length;
}
const Vt = {
  alphanumeric: Zm,
  alphanumericCaseSensitive: Jm,
  text: Qm,
  textCaseSensitive: eg,
  datetime: tg,
  basic: ng
}, rg = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Pe("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Vt.datetime;
        if (typeof i == "string" && (r = !0, i.split(Pr).length > 1))
          return Vt.alphanumeric;
      }
      return r ? Vt.text : Vt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return zn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Vt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const l = s == null ? void 0 : s.find((d) => d.id === e.id), a = s == null ? void 0 : s.findIndex((d) => d.id === e.id);
        let u = [], c, p = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? l ? c = "toggle" : c = "add" : s != null && s.length && a !== s.length - 1 ? c = "replace" : l ? c = "toggle" : c = "replace", c === "toggle" && (i || o || (c = "remove")), c === "add") {
          var g;
          u = [...s, {
            id: e.id,
            desc: p
          }], u.splice(0, u.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = s.map((d) => d.id === e.id ? {
          ...d,
          desc: p
        } : d) : c === "remove" ? u = s.filter((d) => d.id !== e.id) : u = [{
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
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : s === "desc" ? "asc" : "desc" : i;
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
}, og = [
  Rm,
  Gm,
  Vm,
  Hm,
  _m,
  Tm,
  Wm,
  //depends on ColumnFaceting
  qm,
  //depends on ColumnFiltering
  rg,
  Dm,
  //depends on RowSorting
  Um,
  Km,
  Ym,
  Xm,
  zm
];
function ig(e) {
  var t, n;
  const r = [...og, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((g, d) => Object.assign(g, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(o)), {}), s = (g) => o.options.mergeOptions ? o.options.mergeOptions(i, g) : {
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
      const d = tt(g, o.options);
      o.options = s(d);
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
    _getDefaultColumnDef: U(() => [o.options.defaultColumn], (g) => {
      var d;
      return g = (d = g) != null ? d : {}, {
        header: (m) => {
          const h = m.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var h, x;
          return (h = (x = m.renderValue()) == null || x.toString == null ? void 0 : x.toString()) != null ? h : null;
        },
        ...o._features.reduce((m, h) => Object.assign(m, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...g
      };
    }, K(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: U(() => [o._getColumnDefs()], (g) => {
      const d = function(m, h, x) {
        return x === void 0 && (x = 0), m.map((b) => {
          const S = Em(o, b, x, h), C = b;
          return S.columns = C.columns ? d(C.columns, S, x + 1) : [], S;
        });
      };
      return d(g);
    }, K(e, "debugColumns")),
    getAllFlatColumns: U(() => [o.getAllColumns()], (g) => g.flatMap((d) => d.getFlatColumns()), K(e, "debugColumns")),
    _getAllFlatColumnsById: U(() => [o.getAllFlatColumns()], (g) => g.reduce((d, m) => (d[m.id] = m, d), {}), K(e, "debugColumns")),
    getAllLeafColumns: U(() => [o.getAllColumns(), o._getOrderColumnsFn()], (g, d) => {
      let m = g.flatMap((h) => h.getLeafColumns());
      return d(m);
    }, K(e, "debugColumns")),
    getColumn: (g) => o._getAllFlatColumnsById()[g]
  };
  Object.assign(o, p);
  for (let g = 0; g < o._features.length; g++) {
    const d = o._features[g];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function sg() {
  return (e) => U(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const l = [];
      for (let u = 0; u < o.length; u++) {
        const c = $m(e, e._getRowId(o[u], u, s), o[u], u, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(c), n.rowsById[c.id] = c, l.push(c), e.options.getSubRows) {
          var a;
          c.originalSubRows = e.options.getSubRows(o[u], u), (a = c.originalSubRows) != null && a.length && (c.subRows = r(c.originalSubRows, i + 1, c));
        }
      }
      return l;
    };
    return n.rows = r(t), n;
  }, K(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function lg() {
  return (e) => U(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], i = r.filter((a) => {
      var u;
      return (u = e.getColumn(a.id)) == null ? void 0 : u.getCanSort();
    }), s = {};
    i.forEach((a) => {
      const u = e.getColumn(a.id);
      u && (s[a.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const l = (a) => {
      const u = a.map((c) => ({
        ...c
      }));
      return u.sort((c, p) => {
        for (let d = 0; d < i.length; d += 1) {
          var g;
          const m = i[d], h = s[m.id], x = h.sortUndefined, b = (g = m == null ? void 0 : m.desc) != null ? g : !1;
          let S = 0;
          if (x) {
            const C = c.getValue(m.id), $ = p.getValue(m.id), M = C === void 0, P = $ === void 0;
            if (M || P) {
              if (x === "first") return M ? -1 : 1;
              if (x === "last") return M ? 1 : -1;
              S = M && P ? 0 : M ? x : -x;
            }
          }
          if (S === 0 && (S = h.sortingFn(c, p, m.id)), S !== 0)
            return b && (S *= -1), h.invertSorting && (S *= -1), S;
        }
        return c.index - p.index;
      }), u.forEach((c) => {
        var p;
        o.push(c), (p = c.subRows) != null && p.length && (c.subRows = l(c.subRows));
      }), u;
    };
    return {
      rows: l(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, K(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function Ko(e, t) {
  return e ? ag(e) ? /* @__PURE__ */ E.createElement(e, t) : e : null;
}
function ag(e) {
  return ug(e) || typeof e == "function" || cg(e);
}
function ug(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function cg(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function dg(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = E.useState(() => ({
    current: ig(t)
  })), [r, o] = E.useState(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      o(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), n.current;
}
const fg = 500, Yo = 10;
function pg(e, { disabled: t = !1 } = {}) {
  const n = B(null), r = B(0), o = B(0), i = B(!1), s = ae(
    (u) => {
      if (t) return;
      const c = u.touches[0];
      r.current = c.clientX, o.current = c.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, fg);
    },
    [e, t]
  ), l = ae(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = ae(
    (u) => {
      const c = u.touches[0], p = Math.abs(c.clientX - r.current), g = Math.abs(c.clientY - o.current);
      (p > Yo || g > Yo) && (i.current = !0, l());
    },
    [l]
  );
  return {
    onTouchStart: s,
    onTouchMove: a,
    onTouchEnd: l,
    onTouchCancel: l,
    onMouseLeave: l
  };
}
function mg({
  rowId: e,
  columnDefinition: t,
  value: n,
  onUpdated: r,
  allData: o,
  clearRowsSelection: i,
  errorsText: s,
  enumLabelDict: l
}) {
  const { t: a } = ge(), [u, c] = ee(!1), p = B(null);
  ie(() => {
    u && (i(), p.current && p.current.focus());
  }, [u]);
  const { displayValue: g, valueEmpty: d } = Fp(
    t,
    n,
    l
  ), m = Ds(t), h = pg(
    () => {
      m || c(!0);
    },
    { disabled: m }
  ), x = s ? "bg-hello-csv-danger-extra-light" : m ? "bg-hello-csv-muted" : "";
  if (!u)
    return /* @__PURE__ */ f.jsx(
      rp,
      {
        variant: s ? "error" : "info",
        tooltipText: s || (m ? a("sheet.readOnly") : ""),
        children: /* @__PURE__ */ f.jsx(
          "div",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": `row ${Number(e) + 1} ${t.label} ${g}`,
            ...h,
            onClick: (S) => !m && S.detail > 1 && c(!0),
            className: `h-full w-full py-4 pr-3 pl-4 ${x} touch-manipulation truncate overflow-hidden whitespace-nowrap`,
            title: d ? void 0 : `${g}`,
            children: t.customRender ? t.customRender(n, g) : g
          }
        )
      }
    );
  function b(S) {
    c(!1), t.type === "number" && S !== "" && !isNaN(Number(S)) ? r(Number(S)) : r(S ?? "");
  }
  if (t.type === "reference") {
    const S = Ns(
      t,
      o
    ), C = eo(t, l), $ = S.map((M) => ({
      label: String(Cn(C, M)),
      value: M
    }));
    return /* @__PURE__ */ f.jsx(
      Zt,
      {
        searchable: !0,
        options: $,
        value: n,
        onChange: (M) => b(M ?? "")
      }
    );
  }
  if (t.type === "enum") {
    const C = t.typeArguments.values;
    return /* @__PURE__ */ f.jsx(
      Zt,
      {
        searchable: !0,
        options: C,
        value: n,
        onChange: ($) => b($ ?? "")
      }
    );
  }
  return /* @__PURE__ */ f.jsx(
    Is,
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
function gg({
  table: e,
  sheetDefinition: t,
  allData: n,
  sheetValidationErrors: r,
  onCellValueChanged: o,
  setSelectedRows: i,
  tableContainerRef: s,
  enumLabelDict: l
}) {
  const { t: a } = ge();
  function u(S, C) {
    return r.filter(
      ($) => $.columnId === S && $.rowIndex === C
    );
  }
  const c = "bg-hello-csv-muted py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 whitespace-nowrap border-y border-gray-300", p = "text-sm font-medium whitespace-nowrap text-gray-900 border-b border-gray-300", g = e.getRowModel().rows, d = $i({
    count: g.length,
    getScrollElement: () => s.current,
    estimateSize: () => Lf,
    measureElement: (S) => S == null ? void 0 : S.getBoundingClientRect().height,
    overscan: 20
  }), m = d.getVirtualItems().map((S) => ({
    row: g[S.index],
    index: S.index,
    start: S.start,
    end: S.end
  })), [h, x] = m.length > 0 ? [
    Math.max(
      0,
      m[0].start - d.options.scrollMargin
    ),
    Math.max(
      0,
      d.getTotalSize() - m[m.length - 1].end
    )
  ] : [0, 0], b = ae(
    (S) => {
      S && d.measureElement(S);
    },
    [d]
  );
  return /* @__PURE__ */ f.jsxs(
    "table",
    {
      className: "w-full table-fixed border-separate border-spacing-0",
      "aria-label": a("sheet.sheetTitle"),
      children: [
        /* @__PURE__ */ f.jsx("thead", { className: "bg-hello-csv-muted sticky top-0 z-10", children: e.getHeaderGroups().map((S) => /* @__PURE__ */ f.jsx("tr", { children: S.headers.map((C) => /* @__PURE__ */ f.jsx(
          "th",
          {
            className: C.column.id === $r ? `${c} sticky left-0 z-20` : `relative z-10 ${c}`,
            colSpan: C.colSpan,
            style: { width: C.getSize() },
            children: /* @__PURE__ */ f.jsxs(
              "div",
              {
                className: `flex w-full ${C.column.getCanSort() ? "cursor-pointer select-none" : ""}`,
                onClick: C.column.getToggleSortingHandler(),
                children: [
                  C.isPlaceholder ? null : /* @__PURE__ */ f.jsx("div", { children: Ko(
                    C.column.columnDef.header,
                    C.getContext()
                  ) }, `header-${S.id}-${C.id}`),
                  /* @__PURE__ */ f.jsx(
                    "span",
                    {
                      className: "ml-2 flex-none rounded-sm bg-gray-500 text-gray-200",
                      children: {
                        asc: /* @__PURE__ */ f.jsx(Jf, { "aria-hidden": "true", className: "size-5" }),
                        desc: /* @__PURE__ */ f.jsx(
                          Kf,
                          {
                            "aria-hidden": "true",
                            className: "size-5"
                          }
                        )
                      }[C.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${S.id}-${C.id}`
                  ),
                  C.column.getCanResize() && /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      onMouseDown: C.getResizeHandler(),
                      onTouchStart: C.getResizeHandler(),
                      className: "absolute top-0 right-0 h-full w-0.5 cursor-col-resize touch-none bg-gray-200 select-none"
                    },
                    `resize-icon-${S.id}-${C.id}`
                  )
                ]
              }
            )
          },
          C.id
        )) }, S.id)) }),
        /* @__PURE__ */ f.jsxs(
          "tbody",
          {
            className: "divide-y divide-gray-200",
            style: {
              height: `${d.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { style: { height: h } }) }),
              m.map(({ row: S, index: C }) => /* @__PURE__ */ f.jsx("tr", { "data-index": C, ref: b, children: S.getVisibleCells().map(($, M) => {
                if ($.column.id === $r)
                  return /* @__PURE__ */ f.jsx(
                    "td",
                    {
                      "aria-label": `Select row ${Number(S.id) + 1}`,
                      className: `bg-hello-csv-muted ${p} sticky left-0 z-6 pr-3 pl-4`,
                      style: { width: $.column.getSize() },
                      children: Ko($.column.columnDef.cell, $.getContext())
                    },
                    $.id
                  );
                const P = t.columns[M - 1].id, _ = ks(
                  n,
                  t.id,
                  S.original
                ), v = u(P, _).map((w) => a(w.message)).join(", ");
                return /* @__PURE__ */ f.jsx(
                  "td",
                  {
                    className: p,
                    style: { width: $.column.getSize() },
                    children: /* @__PURE__ */ f.jsx(
                      mg,
                      {
                        rowId: S.id,
                        columnDefinition: t.columns.find((w) => w.id === P),
                        allData: n,
                        value: $.getValue(),
                        onUpdated: (w) => o(_, P, w),
                        clearRowsSelection: () => i([]),
                        errorsText: v,
                        enumLabelDict: l
                      }
                    )
                  },
                  $.id
                );
              }) }, S.id)),
              /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { style: { height: x } }) })
            ]
          }
        )
      ]
    }
  );
}
function hg({ column: e }) {
  const { t } = ge(), n = Ds(e);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "flex items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ f.jsxs("div", { className: "relative mr-3 h-5 w-5", children: [
          /* @__PURE__ */ f.jsx(Es, { className: "absolute top-0 left-0 h-5 w-5 text-gray-400" }),
          /* @__PURE__ */ f.jsx(Xd, { className: "absolute top-0 left-0 h-5 w-5 text-gray-500" })
        ] }),
        e.label,
        " ",
        sn(e) && "*"
      ]
    }
  );
}
function vg({
  sheetDefinition: e,
  rowData: t,
  selectedRows: n,
  setSelectedRows: r,
  viewMode: o,
  setViewMode: i,
  searchPhrase: s,
  setSearchPhrase: l,
  errorColumnFilter: a,
  setErrorColumnFilter: u,
  removeRows: c,
  addEmptyRow: p,
  sheetValidationErrors: g,
  rowValidationSummary: d,
  resetState: m,
  enumLabelDict: h
}) {
  const { csvDownloadMode: x } = Ze(), { t: b } = ge(), [S, C] = ee(!1), [$, M] = ee(!1), P = "pointer-events-none cursor-not-allowed opacity-50";
  function _(R) {
    const I = e.columns.find(
      (O) => O.id === R
    ), N = Bo(
      g.filter((O) => O.columnId === R).map((O) => O.rowIndex)
    ).length;
    return {
      label: `${(I == null ? void 0 : I.label) || R} (${N})`,
      value: R
    };
  }
  const v = Bo(
    g.map((R) => R.columnId)
  ).map((R) => _(R));
  a != null && v.find((R) => R.value === a) == null && v.push(_(a));
  const w = [
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
  function y() {
    c({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ f.jsxs("div", { className: "my-5 flex items-center", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex grow flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(ip, { activeButton: o, buttons: w }) }),
      /* @__PURE__ */ f.jsx(
        Is,
        {
          clearable: !0,
          value: s,
          onChange: (R) => l(R),
          placeholder: b("sheet.search"),
          iconBuilder: (R) => /* @__PURE__ */ f.jsx(Kd, { ...R })
        }
      ),
      /* @__PURE__ */ f.jsx(
        Et,
        {
          tooltipText: b(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ f.jsx(
            ef,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": b(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `h-6 w-6 ${n.length > 0 ? "cursor-pointer" : P}`,
              onClick: () => C(!0)
            }
          )
        }
      ),
      /* @__PURE__ */ f.jsx(Et, { tooltipText: b("sheet.addRowsTooltip"), children: /* @__PURE__ */ f.jsx(Jd, { className: "h-6 w-6 cursor-pointer", onClick: p }) }),
      /* @__PURE__ */ f.jsx(Et, { tooltipText: b("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ f.jsx(
        Ad,
        {
          className: `h-6 w-6 ${t.length > 0 ? "cursor-pointer" : P}`,
          onClick: () => js(
            e,
            t,
            h,
            x
          )
        }
      ) }),
      /* @__PURE__ */ f.jsx(
        Zt,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: b("sheet.filterByError"),
          classes: "min-w-48",
          options: v,
          value: a,
          onChange: (R) => u(R)
        }
      ),
      /* @__PURE__ */ f.jsx(
        Er,
        {
          open: S,
          setOpen: C,
          onConfirm: y,
          title: b("sheet.removeConfirmationModalTitle"),
          confirmationText: b("sheet.removeConfirmationModalConfirmationText"),
          subTitle: b("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(Et, { className: "ml-5", tooltipText: b("sheet.resetTooltip"), children: /* @__PURE__ */ f.jsx(
      Es,
      {
        className: "h-6 w-6 cursor-pointer",
        onClick: () => M(!0)
      }
    ) }),
    /* @__PURE__ */ f.jsx(
      Er,
      {
        open: $,
        setOpen: M,
        onConfirm: m,
        title: b("sheet.resetConfirmationModalTitle"),
        confirmationText: b("sheet.resetConfirmationModalConfirmationText"),
        subTitle: b("sheet.resetConfirmationModalSubTitle"),
        variant: "danger"
      }
    )
  ] });
}
function xg({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ f.jsx(ni, { checked: r, setChecked: o });
}
function wg({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((s) => s !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ f.jsx(
    ni,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
function bg({
  sheetDefinition: e,
  data: t,
  sheetValidationErrors: n,
  setRowData: r,
  removeRows: o,
  addEmptyRow: i,
  resetState: s,
  enumLabelDict: l
}) {
  const { sheetData: a } = at(), [u, c] = ee([]), [p, g] = ee("all"), [d, m] = ee(""), [h, x] = ee(
    null
  );
  ie(() => {
    c([]), g("all");
  }, [e]);
  const b = Ip(
    t,
    a,
    p,
    n,
    h,
    e,
    d
  ), S = ne(() => {
    const _ = t.rows, v = _.filter(
      (y, R) => !n.some((I) => I.rowIndex === R)
    ), w = _.filter(
      (y, R) => n.some((I) => I.rowIndex === R)
    );
    return {
      all: _.length,
      valid: v.length,
      errors: w.length
    };
  }, [t, n]), C = ne(
    () => [
      {
        id: $r,
        header: () => /* @__PURE__ */ f.jsx(
          xg,
          {
            visibleData: b,
            selectedRows: u,
            setSelectedRows: c
          }
        ),
        cell: ({ row: _ }) => /* @__PURE__ */ f.jsx(
          wg,
          {
            row: _,
            selectedRows: u,
            setSelectedRows: c
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: Vf
      },
      ...e.columns.map(
        (_) => ({
          id: _.id,
          accessorFn: (v) => v[_.id],
          header: () => /* @__PURE__ */ f.jsx(hg, { column: _ }),
          sortUndefined: "last",
          sortingFn: "auto",
          meta: { columnLabel: _.label },
          enableResizing: !0
        })
      )
    ],
    [e, u, b]
  ), $ = dg({
    data: b,
    columns: C,
    getCoreRowModel: sg(),
    getSortedRowModel: lg(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: Hf,
      maxSize: zf,
      size: Bf
    }
  });
  function M(_, v, w) {
    const y = { ...t.rows[_] };
    y[v] = w, r({
      sheetId: e.id,
      value: y,
      rowIndex: _
    });
  }
  const P = B(null);
  return /* @__PURE__ */ f.jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ f.jsx("div", { className: "flex-none", children: /* @__PURE__ */ f.jsx(
      vg,
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
        setErrorColumnFilter: x,
        removeRows: o,
        addEmptyRow: i,
        sheetValidationErrors: n,
        rowValidationSummary: S,
        resetState: s,
        enumLabelDict: l
      }
    ) }),
    /* @__PURE__ */ f.jsx("div", { className: "min-h-0 flex-1 overflow-auto", ref: P, children: /* @__PURE__ */ f.jsx(
      gg,
      {
        tableContainerRef: P,
        table: $,
        sheetDefinition: e,
        allData: a,
        sheetValidationErrors: n,
        onCellValueChanged: M,
        setSelectedRows: c,
        enumLabelDict: l
      }
    ) })
  ] });
}
function nl(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function yg(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (s) => s.id === o.sheetId
    );
    i && js(
      i,
      o.rows,
      n,
      r
    );
  });
}
const Xo = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const s = t.find(
    (l) => l.id === i.sheetId
  );
  return s ? o + As(
    s,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function Sg(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => Vn(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      sn(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const mn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, Cg = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), Eg = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await Cg(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), s = new Blob([i], { type: "text/csv" });
    return new File([s], o, {
      type: "text/csv"
    });
  }
  return e;
};
function Rg({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: s
  } = at(), { csvDownloadMode: l } = Ze(), { t: a } = ge(), u = nl(o);
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row px-4 pt-3 pb-2", children: /* @__PURE__ */ f.jsxs("div", { className: "flex-1 space-y-4", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ f.jsx("div", { className: "my-2 mr-5 text-center", children: /* @__PURE__ */ f.jsx(zd, { className: "text-hello-csv-primary h-8 w-8" }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ f.jsx("div", { className: "my-2 text-sm font-light uppercase", children: a("importStatus.fileInformation") }),
        /* @__PURE__ */ f.jsx("div", { className: "text-md my-2 font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ f.jsx("div", { className: "my-2 text-sm text-gray-500", children: n ? `${a("importStatus.original")}: ${mn((n == null ? void 0 : n.size) || 0)} · ${a("importStatus.processed")}: ${mn(Xo(o, s, t, l))}` : `${a("importStatus.processed")}: ${mn(Xo(o, s, t, l))}` }),
        /* @__PURE__ */ f.jsx("div", { className: "mt-5", children: /* @__PURE__ */ f.jsx(
          je,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => yg(
              o,
              s,
              t,
              l
            ),
            children: a("importStatus.downloadProcessedData")
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.jsx("div", { className: "border-b border-gray-200 pb-2" }),
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ f.jsx("div", { className: "my-2 mr-5 text-center", children: r === "failed" ? /* @__PURE__ */ f.jsx(_r, { className: "text-hello-csv-danger-light h-8 w-8" }) : e ? /* @__PURE__ */ f.jsx(cp, { className: "text-hello-csv-warning-light h-8 w-8" }) : /* @__PURE__ */ f.jsx(Ms, { className: "text-hello-csv-success-light h-8 w-8" }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ f.jsx("div", { className: "my-2 text-sm font-light uppercase", children: a("importStatus.importResults") }),
        /* @__PURE__ */ f.jsx("div", { className: "text-md my-2 font-medium", children: a("importStatus.totalRows", { totalRows: u }) }),
        i && /* @__PURE__ */ f.jsxs("div", { className: "my-2 text-sm text-gray-500", children: [
          i.skipped >= 0 && /* @__PURE__ */ f.jsxs("span", { children: [
            a("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ f.jsxs("span", { children: [
            a("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ f.jsx("span", { children: a("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ f.jsxs("div", { className: "my-2 text-sm text-gray-500", children: [
          a("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ f.jsx(Zr, { variant: "error", children: a("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function rl({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = ge();
  return /* @__PURE__ */ f.jsx(ti, { withPadding: !1, className: "h-full", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col py-5", children: [
    /* @__PURE__ */ f.jsx("div", { className: "px-4 pb-2 text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ f.jsx("div", { className: "px-4 pb-2 text-sm text-gray-500", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ f.jsx("div", { className: "border-b border-gray-200 pb-2" }),
    /* @__PURE__ */ f.jsx(
      Rg,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function $g({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = at(), { onSummaryFinished: o } = Ze(), { t: i } = ge(), s = nl(n), l = (r == null ? void 0 : r.imported) ?? 0, a = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ f.jsx("div", { className: "text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ f.jsx("div", { className: "mt-4", children: /* @__PURE__ */ f.jsx(
      Jr,
      {
        variant: a ? "warning" : "success",
        header: i(
          `importStatus.${a ? "importSuccessfulWithErrors" : "importSuccessful"}`
        ),
        description: i(
          `importStatus.successDescription${r ? "WithStats" : ""}`,
          {
            totalRecords: s,
            recordsImported: l
          }
        )
      }
    ) }),
    /* @__PURE__ */ f.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ f.jsx(
        rl,
        {
          completedWithErrors: a,
          enumLabelDict: t
        }
      ),
      /* @__PURE__ */ f.jsx("div", { className: "mt-auto flex-none", children: /* @__PURE__ */ f.jsx("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ f.jsx(je, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
    ] })
  ] });
}
function _g({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = ge();
  return /* @__PURE__ */ f.jsx("div", { className: "flex h-full flex-col", children: /* @__PURE__ */ f.jsxs("div", { className: "flex h-full w-full flex-col", children: [
    /* @__PURE__ */ f.jsx("div", { className: "text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ f.jsx("div", { className: "mt-4", children: /* @__PURE__ */ f.jsx(
      Jr,
      {
        variant: "error",
        header: r("importStatus.importFailed"),
        description: r("importStatus.failedDescription")
      }
    ) }),
    /* @__PURE__ */ f.jsx("div", { className: "mt-6", children: /* @__PURE__ */ f.jsx(rl, { completedWithErrors: !1, enumLabelDict: n }) }),
    /* @__PURE__ */ f.jsxs("div", { className: "mt-6 flex justify-between", children: [
      /* @__PURE__ */ f.jsx(je, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ f.jsx(je, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] }) });
}
function Tg({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, s] = ee(!1);
  return ie(() => {
    if (e === 0) {
      const l = setTimeout(() => {
        s(!0);
      }, 3e3);
      return () => clearTimeout(l);
    }
  }, [e]), i ? /* @__PURE__ */ f.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `border-hello-csv-success-light h-22 w-22 rounded-full border-10 ${t && "animate-spin border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ f.jsxs("svg", { className: "mx-auto h-24 w-24 rotate-[-90deg]", width: "100", height: "100", children: [
    /* @__PURE__ */ f.jsx(
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
    /* @__PURE__ */ f.jsx(
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
function Ig() {
  return /* @__PURE__ */ f.jsx(Dd, { className: "text-hello-csv-success absolute inset-0 m-auto h-12 w-12 stroke-4" });
}
function Mg({ resetState: e }) {
  const { importProgress: t, mode: n } = at(), r = n === "submit", { t: o } = ge();
  return /* @__PURE__ */ f.jsx("div", { className: "flex h-full p-10", children: /* @__PURE__ */ f.jsx("div", { className: "flex h-full w-full flex-col", children: /* @__PURE__ */ f.jsxs("div", { className: "my-16 text-center", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "relative mx-auto h-24 w-24", children: [
      /* @__PURE__ */ f.jsx(Tg, { progress: t, pending: r }),
      r && /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f.jsxs("b", { className: "text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ f.jsx("h2", { className: "text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ f.jsx(Ig, {})
    ] }),
    !r && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ f.jsx("h2", { className: "text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ f.jsx("div", { className: "h-5" }),
      /* @__PURE__ */ f.jsx(je, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function Fg({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = at();
  return /* @__PURE__ */ f.jsxs("div", { className: "h-full", children: [
    o === "submit" && /* @__PURE__ */ f.jsx(Mg, { resetState: n }),
    o === "failed" && /* @__PURE__ */ f.jsx(
      _g,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ f.jsx($g, { resetState: n, enumLabelDict: r })
  ] });
}
async function Zo(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
const Og = ({ children: e }) => {
  const { theme: t } = Ze();
  return ie(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ f.jsx(f.Fragment, { children: e });
};
var gn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Pg = gn.exports, Jo;
function Ag() {
  return Jo || (Jo = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Pg, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, s = r.IS_PAPA_WORKER || !1, l = {}, a = 0, u = {};
      function c(v) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(w) {
          var y = M(w);
          y.chunkSize = parseInt(y.chunkSize), w.step || w.chunk || (y.chunkSize = null), this._handle = new h(y), (this._handle.streamer = this)._config = y;
        }).call(this, v), this.parseChunk = function(w, y) {
          var R = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < R) {
            let N = this._config.newline;
            N || (I = this._config.quoteChar || '"', N = this._handle.guessLineEndings(w, I)), w = [...w.split(N).slice(R)].join(N);
          }
          this.isFirstChunk && _(this._config.beforeFirstChunk) && (I = this._config.beforeFirstChunk(w)) !== void 0 && (w = I), this.isFirstChunk = !1, this._halted = !1;
          var R = this._partialLine + w, I = (this._partialLine = "", this._handle.parse(R, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (w = I.meta.cursor, R = (this._finished || (this._partialLine = R.substring(w - this._baseIndex), this._baseIndex = w), I && I.data && (this._rowCount += I.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) r.postMessage({ results: I, workerId: u.WORKER_ID, finished: R });
            else if (_(this._config.chunk) && !y) {
              if (this._config.chunk(I, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = I = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(I.data), this._completeResults.errors = this._completeResults.errors.concat(I.errors), this._completeResults.meta = I.meta), this._completed || !R || !_(this._config.complete) || I && I.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), R || I && I.meta.paused || this._nextChunk(), I;
          }
          this._halted = !0;
        }, this._sendError = function(w) {
          _(this._config.error) ? this._config.error(w) : s && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: w, finished: !1 });
        };
      }
      function p(v) {
        var w;
        (v = v || {}).chunkSize || (v.chunkSize = u.RemoteChunkSize), c.call(this, v), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(y) {
          this._input = y, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (w = new XMLHttpRequest(), this._config.withCredentials && (w.withCredentials = this._config.withCredentials), i || (w.onload = P(this._chunkLoaded, this), w.onerror = P(this._chunkError, this)), w.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var y, R = this._config.downloadRequestHeaders;
              for (y in R) w.setRequestHeader(y, R[y]);
            }
            var I;
            this._config.chunkSize && (I = this._start + this._config.chunkSize - 1, w.setRequestHeader("Range", "bytes=" + this._start + "-" + I));
            try {
              w.send(this._config.downloadRequestBody);
            } catch (N) {
              this._chunkError(N.message);
            }
            i && w.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          w.readyState === 4 && (w.status < 200 || 400 <= w.status ? this._chunkError() : (this._start += this._config.chunkSize || w.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((y) => (y = y.getResponseHeader("Content-Range")) !== null ? parseInt(y.substring(y.lastIndexOf("/") + 1)) : -1)(w), this.parseChunk(w.responseText)));
        }, this._chunkError = function(y) {
          y = w.statusText || y, this._sendError(new Error(y));
        };
      }
      function g(v) {
        (v = v || {}).chunkSize || (v.chunkSize = u.LocalChunkSize), c.call(this, v);
        var w, y, R = typeof FileReader < "u";
        this.stream = function(I) {
          this._input = I, y = I.slice || I.webkitSlice || I.mozSlice, R ? ((w = new FileReader()).onload = P(this._chunkLoaded, this), w.onerror = P(this._chunkError, this)) : w = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var I = this._input, N = (this._config.chunkSize && (N = Math.min(this._start + this._config.chunkSize, this._input.size), I = y.call(I, this._start, N)), w.readAsText(I, this._config.encoding));
          R || this._chunkLoaded({ target: { result: N } });
        }, this._chunkLoaded = function(I) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(I.target.result);
        }, this._chunkError = function() {
          this._sendError(w.error);
        };
      }
      function d(v) {
        var w;
        c.call(this, v = v || {}), this.stream = function(y) {
          return w = y, this._nextChunk();
        }, this._nextChunk = function() {
          var y, R;
          if (!this._finished) return y = this._config.chunkSize, w = y ? (R = w.substring(0, y), w.substring(y)) : (R = w, ""), this._finished = !w, this.parseChunk(R);
        };
      }
      function m(v) {
        c.call(this, v = v || {});
        var w = [], y = !0, R = !1;
        this.pause = function() {
          c.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          c.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(I) {
          this._input = I, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          R && w.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), w.length ? this.parseChunk(w.shift()) : y = !0;
        }, this._streamData = P(function(I) {
          try {
            w.push(typeof I == "string" ? I : I.toString(this._config.encoding)), y && (y = !1, this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (N) {
            this._streamError(N);
          }
        }, this), this._streamError = P(function(I) {
          this._streamCleanUp(), this._sendError(I);
        }, this), this._streamEnd = P(function() {
          this._streamCleanUp(), R = !0, this._streamData("");
        }, this), this._streamCleanUp = P(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function h(v) {
        var w, y, R, I, N = Math.pow(2, 53), O = -N, G = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Y = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, H = this, V = 0, F = 0, A = !1, j = !1, D = [], T = { data: [], errors: [], meta: {} };
        function oe(W) {
          return v.skipEmptyLines === "greedy" ? W.join("").trim() === "" : W.length === 1 && W[0].length === 0;
        }
        function Q() {
          if (T && R && (re("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), R = !1), v.skipEmptyLines && (T.data = T.data.filter(function(X) {
            return !oe(X);
          })), se()) {
            let X = function(de, me) {
              _(v.transformHeader) && (de = v.transformHeader(de, me)), D.push(de);
            };
            if (T) if (Array.isArray(T.data[0])) {
              for (var W = 0; se() && W < T.data.length; W++) T.data[W].forEach(X);
              T.data.splice(0, 1);
            } else T.data.forEach(X);
          }
          function J(X, de) {
            for (var me = v.header ? {} : [], L = 0; L < X.length; L++) {
              var q = L, Z = X[L], Z = ((be, te) => ((fe) => (v.dynamicTypingFunction && v.dynamicTyping[fe] === void 0 && (v.dynamicTyping[fe] = v.dynamicTypingFunction(fe)), (v.dynamicTyping[fe] || v.dynamicTyping) === !0))(be) ? te === "true" || te === "TRUE" || te !== "false" && te !== "FALSE" && (((fe) => {
                if (G.test(fe) && (fe = parseFloat(fe), O < fe && fe < N))
                  return 1;
              })(te) ? parseFloat(te) : Y.test(te) ? new Date(te) : te === "" ? null : te) : te)(q = v.header ? L >= D.length ? "__parsed_extra" : D[L] : q, Z = v.transform ? v.transform(Z, q) : Z);
              q === "__parsed_extra" ? (me[q] = me[q] || [], me[q].push(Z)) : me[q] = Z;
            }
            return v.header && (L > D.length ? re("FieldMismatch", "TooManyFields", "Too many fields: expected " + D.length + " fields but parsed " + L, F + de) : L < D.length && re("FieldMismatch", "TooFewFields", "Too few fields: expected " + D.length + " fields but parsed " + L, F + de)), me;
          }
          var ce;
          T && (v.header || v.dynamicTyping || v.transform) && (ce = 1, !T.data.length || Array.isArray(T.data[0]) ? (T.data = T.data.map(J), ce = T.data.length) : T.data = J(T.data, 0), v.header && T.meta && (T.meta.fields = D), F += ce);
        }
        function se() {
          return v.header && D.length === 0;
        }
        function re(W, J, ce, X) {
          W = { type: W, code: J, message: ce }, X !== void 0 && (W.row = X), T.errors.push(W);
        }
        _(v.step) && (I = v.step, v.step = function(W) {
          T = W, se() ? Q() : (Q(), T.data.length !== 0 && (V += W.data.length, v.preview && V > v.preview ? y.abort() : (T.data = T.data[0], I(T, H))));
        }), this.parse = function(W, J, ce) {
          var X = v.quoteChar || '"', X = (v.newline || (v.newline = this.guessLineEndings(W, X)), R = !1, v.delimiter ? _(v.delimiter) && (v.delimiter = v.delimiter(W), T.meta.delimiter = v.delimiter) : ((X = ((de, me, L, q, Z) => {
            var be, te, fe, Je;
            Z = Z || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var yt = 0; yt < Z.length; yt++) {
              for (var De, jt = Z[yt], ye = 0, Le = 0, xe = 0, Te = (fe = void 0, new b({ comments: q, delimiter: jt, newline: me, preview: 10 }).parse(de)), qe = 0; qe < Te.data.length; qe++) L && oe(Te.data[qe]) ? xe++ : (De = Te.data[qe].length, Le += De, fe === void 0 ? fe = De : 0 < De && (ye += Math.abs(De - fe), fe = De));
              0 < Te.data.length && (Le /= Te.data.length - xe), (te === void 0 || ye <= te) && (Je === void 0 || Je < Le) && 1.99 < Le && (te = ye, be = jt, Je = Le);
            }
            return { successful: !!(v.delimiter = be), bestDelimiter: be };
          })(W, v.newline, v.skipEmptyLines, v.comments, v.delimitersToGuess)).successful ? v.delimiter = X.bestDelimiter : (R = !0, v.delimiter = u.DefaultDelimiter), T.meta.delimiter = v.delimiter), M(v));
          return v.preview && v.header && X.preview++, w = W, y = new b(X), T = y.parse(w, J, ce), Q(), A ? { meta: { paused: !0 } } : T || { meta: { paused: !1 } };
        }, this.paused = function() {
          return A;
        }, this.pause = function() {
          A = !0, y.abort(), w = _(v.chunk) ? "" : w.substring(y.getCharIndex());
        }, this.resume = function() {
          H.streamer._halted ? (A = !1, H.streamer.parseChunk(w, !0)) : setTimeout(H.resume, 3);
        }, this.aborted = function() {
          return j;
        }, this.abort = function() {
          j = !0, y.abort(), T.meta.aborted = !0, _(v.complete) && v.complete(T), w = "";
        }, this.guessLineEndings = function(de, X) {
          de = de.substring(0, 1048576);
          var X = new RegExp(x(X) + "([^]*?)" + x(X), "gm"), ce = (de = de.replace(X, "")).split("\r"), X = de.split(`
`), de = 1 < X.length && X[0].length < ce[0].length;
          if (ce.length === 1 || de) return `
`;
          for (var me = 0, L = 0; L < ce.length; L++) ce[L][0] === `
` && me++;
          return me >= ce.length / 2 ? `\r
` : "\r";
        };
      }
      function x(v) {
        return v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function b(v) {
        var w = (v = v || {}).delimiter, y = v.newline, R = v.comments, I = v.step, N = v.preview, O = v.fastMode, G = null, Y = !1, H = v.quoteChar == null ? '"' : v.quoteChar, V = H;
        if (v.escapeChar !== void 0 && (V = v.escapeChar), (typeof w != "string" || -1 < u.BAD_DELIMITERS.indexOf(w)) && (w = ","), R === w) throw new Error("Comment character same as delimiter");
        R === !0 ? R = "#" : (typeof R != "string" || -1 < u.BAD_DELIMITERS.indexOf(R)) && (R = !1), y !== `
` && y !== "\r" && y !== `\r
` && (y = `
`);
        var F = 0, A = !1;
        this.parse = function(j, D, T) {
          if (typeof j != "string") throw new Error("Input must be a string");
          var oe = j.length, Q = w.length, se = y.length, re = R.length, W = _(I), J = [], ce = [], X = [], de = F = 0;
          if (!j) return ye();
          if (O || O !== !1 && j.indexOf(H) === -1) {
            for (var me = j.split(y), L = 0; L < me.length; L++) {
              if (X = me[L], F += X.length, L !== me.length - 1) F += y.length;
              else if (T) return ye();
              if (!R || X.substring(0, re) !== R) {
                if (W) {
                  if (J = [], Je(X.split(w)), Le(), A) return ye();
                } else Je(X.split(w));
                if (N && N <= L) return J = J.slice(0, N), ye(!0);
              }
            }
            return ye();
          }
          for (var q = j.indexOf(w, F), Z = j.indexOf(y, F), be = new RegExp(x(V) + x(H), "g"), te = j.indexOf(H, F); ; ) if (j[F] === H) for (te = F, F++; ; ) {
            if ((te = j.indexOf(H, te + 1)) === -1) return T || ce.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: J.length, index: F }), De();
            if (te === oe - 1) return De(j.substring(F, te).replace(be, H));
            if (H === V && j[te + 1] === V) te++;
            else if (H === V || te === 0 || j[te - 1] !== V) {
              q !== -1 && q < te + 1 && (q = j.indexOf(w, te + 1));
              var fe = yt((Z = Z !== -1 && Z < te + 1 ? j.indexOf(y, te + 1) : Z) === -1 ? q : Math.min(q, Z));
              if (j.substr(te + 1 + fe, Q) === w) {
                X.push(j.substring(F, te).replace(be, H)), j[F = te + 1 + fe + Q] !== H && (te = j.indexOf(H, F)), q = j.indexOf(w, F), Z = j.indexOf(y, F);
                break;
              }
              if (fe = yt(Z), j.substring(te + 1 + fe, te + 1 + fe + se) === y) {
                if (X.push(j.substring(F, te).replace(be, H)), jt(te + 1 + fe + se), q = j.indexOf(w, F), te = j.indexOf(H, F), W && (Le(), A)) return ye();
                if (N && J.length >= N) return ye(!0);
                break;
              }
              ce.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: J.length, index: F }), te++;
            }
          }
          else if (R && X.length === 0 && j.substring(F, F + re) === R) {
            if (Z === -1) return ye();
            F = Z + se, Z = j.indexOf(y, F), q = j.indexOf(w, F);
          } else if (q !== -1 && (q < Z || Z === -1)) X.push(j.substring(F, q)), F = q + Q, q = j.indexOf(w, F);
          else {
            if (Z === -1) break;
            if (X.push(j.substring(F, Z)), jt(Z + se), W && (Le(), A)) return ye();
            if (N && J.length >= N) return ye(!0);
          }
          return De();
          function Je(xe) {
            J.push(xe), de = F;
          }
          function yt(xe) {
            var Te = 0;
            return Te = xe !== -1 && (xe = j.substring(te + 1, xe)) && xe.trim() === "" ? xe.length : Te;
          }
          function De(xe) {
            return T || (xe === void 0 && (xe = j.substring(F)), X.push(xe), F = oe, Je(X), W && Le()), ye();
          }
          function jt(xe) {
            F = xe, Je(X), X = [], Z = j.indexOf(y, F);
          }
          function ye(xe) {
            if (v.header && !D && J.length && !Y) {
              var Te = J[0], qe = {}, Bn = new Set(Te);
              let oo = !1;
              for (let St = 0; St < Te.length; St++) {
                let Ve = Te[St];
                if (qe[Ve = _(v.transformHeader) ? v.transformHeader(Ve, St) : Ve]) {
                  let Nt, io = qe[Ve];
                  for (; Nt = Ve + "_" + io, io++, Bn.has(Nt); ) ;
                  Bn.add(Nt), Te[St] = Nt, qe[Ve]++, oo = !0, (G = G === null ? {} : G)[Nt] = Ve;
                } else qe[Ve] = 1, Te[St] = Ve;
                Bn.add(Ve);
              }
              oo && console.warn("Duplicate headers found and renamed."), Y = !0;
            }
            return { data: J, errors: ce, meta: { delimiter: w, linebreak: y, aborted: A, truncated: !!xe, cursor: de + (D || 0), renamedHeaders: G } };
          }
          function Le() {
            I(ye()), J = [], ce = [];
          }
        }, this.abort = function() {
          A = !0;
        }, this.getCharIndex = function() {
          return F;
        };
      }
      function S(v) {
        var w = v.data, y = l[w.workerId], R = !1;
        if (w.error) y.userError(w.error, w.file);
        else if (w.results && w.results.data) {
          var I = { abort: function() {
            R = !0, C(w.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: $, resume: $ };
          if (_(y.userStep)) {
            for (var N = 0; N < w.results.data.length && (y.userStep({ data: w.results.data[N], errors: w.results.errors, meta: w.results.meta }, I), !R); N++) ;
            delete w.results;
          } else _(y.userChunk) && (y.userChunk(w.results, I, w.file), delete w.results);
        }
        w.finished && !R && C(w.workerId, w.results);
      }
      function C(v, w) {
        var y = l[v];
        _(y.userComplete) && y.userComplete(w), y.terminate(), delete l[v];
      }
      function $() {
        throw new Error("Not implemented.");
      }
      function M(v) {
        if (typeof v != "object" || v === null) return v;
        var w, y = Array.isArray(v) ? [] : {};
        for (w in v) y[w] = M(v[w]);
        return y;
      }
      function P(v, w) {
        return function() {
          v.apply(w, arguments);
        };
      }
      function _(v) {
        return typeof v == "function";
      }
      return u.parse = function(v, w) {
        var y = (w = w || {}).dynamicTyping || !1;
        if (_(y) && (w.dynamicTypingFunction = y, y = {}), w.dynamicTyping = y, w.transform = !!_(w.transform) && w.transform, !w.worker || !u.WORKERS_SUPPORTED) return y = null, u.NODE_STREAM_INPUT, typeof v == "string" ? (v = ((R) => R.charCodeAt(0) !== 65279 ? R : R.slice(1))(v), y = new (w.download ? p : d)(w)) : v.readable === !0 && _(v.read) && _(v.on) ? y = new m(w) : (r.File && v instanceof File || v instanceof Object) && (y = new g(w)), y.stream(v);
        (y = (() => {
          var R;
          return !!u.WORKERS_SUPPORTED && (R = (() => {
            var I = r.URL || r.webkitURL || null, N = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = I.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", N, ")();"], { type: "text/javascript" })));
          })(), (R = new r.Worker(R)).onmessage = S, R.id = a++, l[R.id] = R);
        })()).userStep = w.step, y.userChunk = w.chunk, y.userComplete = w.complete, y.userError = w.error, w.step = _(w.step), w.chunk = _(w.chunk), w.complete = _(w.complete), w.error = _(w.error), delete w.worker, y.postMessage({ input: v, config: w, workerId: y.id });
      }, u.unparse = function(v, w) {
        var y = !1, R = !0, I = ",", N = `\r
`, O = '"', G = O + O, Y = !1, H = null, V = !1, F = ((() => {
          if (typeof w == "object") {
            if (typeof w.delimiter != "string" || u.BAD_DELIMITERS.filter(function(D) {
              return w.delimiter.indexOf(D) !== -1;
            }).length || (I = w.delimiter), typeof w.quotes != "boolean" && typeof w.quotes != "function" && !Array.isArray(w.quotes) || (y = w.quotes), typeof w.skipEmptyLines != "boolean" && typeof w.skipEmptyLines != "string" || (Y = w.skipEmptyLines), typeof w.newline == "string" && (N = w.newline), typeof w.quoteChar == "string" && (O = w.quoteChar), typeof w.header == "boolean" && (R = w.header), Array.isArray(w.columns)) {
              if (w.columns.length === 0) throw new Error("Option columns is empty");
              H = w.columns;
            }
            w.escapeChar !== void 0 && (G = w.escapeChar + O), w.escapeFormulae instanceof RegExp ? V = w.escapeFormulae : typeof w.escapeFormulae == "boolean" && w.escapeFormulae && (V = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(x(O), "g"));
        if (typeof v == "string" && (v = JSON.parse(v)), Array.isArray(v)) {
          if (!v.length || Array.isArray(v[0])) return A(null, v, Y);
          if (typeof v[0] == "object") return A(H || Object.keys(v[0]), v, Y);
        } else if (typeof v == "object") return typeof v.data == "string" && (v.data = JSON.parse(v.data)), Array.isArray(v.data) && (v.fields || (v.fields = v.meta && v.meta.fields || H), v.fields || (v.fields = Array.isArray(v.data[0]) ? v.fields : typeof v.data[0] == "object" ? Object.keys(v.data[0]) : []), Array.isArray(v.data[0]) || typeof v.data[0] == "object" || (v.data = [v.data])), A(v.fields || [], v.data || [], Y);
        throw new Error("Unable to serialize unrecognized input");
        function A(D, T, oe) {
          var Q = "", se = (typeof D == "string" && (D = JSON.parse(D)), typeof T == "string" && (T = JSON.parse(T)), Array.isArray(D) && 0 < D.length), re = !Array.isArray(T[0]);
          if (se && R) {
            for (var W = 0; W < D.length; W++) 0 < W && (Q += I), Q += j(D[W], W);
            0 < T.length && (Q += N);
          }
          for (var J = 0; J < T.length; J++) {
            var ce = (se ? D : T[J]).length, X = !1, de = se ? Object.keys(T[J]).length === 0 : T[J].length === 0;
            if (oe && !se && (X = oe === "greedy" ? T[J].join("").trim() === "" : T[J].length === 1 && T[J][0].length === 0), oe === "greedy" && se) {
              for (var me = [], L = 0; L < ce; L++) {
                var q = re ? D[L] : L;
                me.push(T[J][q]);
              }
              X = me.join("").trim() === "";
            }
            if (!X) {
              for (var Z = 0; Z < ce; Z++) {
                0 < Z && !de && (Q += I);
                var be = se && re ? D[Z] : Z;
                Q += j(T[J][be], Z);
              }
              J < T.length - 1 && (!oe || 0 < ce && !de) && (Q += N);
            }
          }
          return Q;
        }
        function j(D, T) {
          var oe, Q;
          return D == null ? "" : D.constructor === Date ? JSON.stringify(D).slice(1, 25) : (Q = !1, V && typeof D == "string" && V.test(D) && (D = "'" + D, Q = !0), oe = D.toString().replace(F, G), (Q = Q || y === !0 || typeof y == "function" && y(D, T) || Array.isArray(y) && y[T] || ((se, re) => {
            for (var W = 0; W < re.length; W++) if (-1 < se.indexOf(re[W])) return !0;
            return !1;
          })(oe, u.BAD_DELIMITERS) || -1 < oe.indexOf(I) || oe.charAt(0) === " " || oe.charAt(oe.length - 1) === " ") ? O + oe + O : oe);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = b, u.ParserHandle = h, u.NetworkStreamer = p, u.FileStreamer = g, u.StringStreamer = d, u.ReadableStreamStreamer = m, r.jQuery && ((o = r.jQuery).fn.parse = function(v) {
        var w = v.config || {}, y = [];
        return this.each(function(N) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var O = 0; O < this.files.length; O++) y.push({ file: this.files[O], inputElem: this, instanceConfig: o.extend({}, w) });
        }), R(), this;
        function R() {
          if (y.length === 0) _(v.complete) && v.complete();
          else {
            var N, O, G, Y, H = y[0];
            if (_(v.before)) {
              var V = v.before(H.file, H.inputElem);
              if (typeof V == "object") {
                if (V.action === "abort") return N = "AbortError", O = H.file, G = H.inputElem, Y = V.reason, void (_(v.error) && v.error({ name: N }, O, G, Y));
                if (V.action === "skip") return void I();
                typeof V.config == "object" && (H.instanceConfig = o.extend(H.instanceConfig, V.config));
              } else if (V === "skip") return void I();
            }
            var F = H.instanceConfig.complete;
            H.instanceConfig.complete = function(A) {
              _(F) && F(A, H.file, H.inputElem), I();
            }, u.parse(H.file, H.instanceConfig);
          }
        }
        function I() {
          y.splice(0, 1), R();
        }
      }), s && (r.onmessage = function(v) {
        v = v.data, u.WORKER_ID === void 0 && v && (u.WORKER_ID = v.workerId), typeof v.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(v.input, v.config), finished: !0 }) : (r.File && v.input instanceof File || v.input instanceof Object) && (v = u.parse(v.input, v.config)) && r.postMessage({ workerId: u.WORKER_ID, results: v, finished: !0 });
      }), (p.prototype = Object.create(c.prototype)).constructor = p, (g.prototype = Object.create(c.prototype)).constructor = g, (d.prototype = Object.create(d.prototype)).constructor = d, (m.prototype = Object.create(c.prototype)).constructor = m, u;
    });
  }(gn)), gn.exports;
}
var jg = Ag();
const Ng = /* @__PURE__ */ fl(jg);
function kg({
  file: e,
  onCompleted: t
}) {
  Ng.parse(e, {
    skipEmptyLines: !0,
    header: !0,
    complete: t
  });
}
function Dg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ E.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ E.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ E.createElement("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Lg = /* @__PURE__ */ E.forwardRef(Dg);
function Vg({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = at(), { sheets: i } = Ze();
  return /* @__PURE__ */ f.jsx(
    ep,
    {
      tabs: i.map((s) => ({
        label: s.label + ` (${t[s.id]})`,
        value: s.id,
        icon: o.some((l) => l.sheetId === s.id) ? /* @__PURE__ */ f.jsx(Lg, { className: "mr-3 h-4 w-4" }) : void 0
      })),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function Hg({ onBackToMapping: e }) {
  const { t } = ge(), [n, r] = ee(!1);
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      je,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ f.jsx(
      Er,
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
function zg({ importerRequirements: e }) {
  const { t } = ge();
  return /* @__PURE__ */ f.jsx("div", { className: "h-full w-full space-y-5 overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ f.jsxs("div", { className: "me-3", children: [
      /* @__PURE__ */ f.jsx("div", { className: "my-3 border-b border-gray-200 pb-4 text-sm font-light uppercase", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ f.jsx("div", { className: "mt-4", children: r.map((i) => /* @__PURE__ */ f.jsxs(
        "div",
        {
          className: "my-3 flex justify-between",
          children: [
            /* @__PURE__ */ f.jsx("div", { className: "text-xs", children: i.columnLabel }),
            /* @__PURE__ */ f.jsx("div", { className: "text-xs font-light", children: /* @__PURE__ */ f.jsx(
              Et,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ f.jsx(qd, { className: "size-5 text-gray-500" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function Bg({ importerRequirements: e }) {
  const { t } = ge();
  return /* @__PURE__ */ f.jsxs("div", { className: "flex h-full flex-col space-y-5", children: [
    /* @__PURE__ */ f.jsx("div", { className: "me-3", children: /* @__PURE__ */ f.jsx(Jr, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ f.jsx("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ f.jsx(zg, { importerRequirements: e }) })
  ] });
}
function Gg({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = Ze(), { t: i, tHtml: s } = ge(), l = B(null), [a, u] = ee(!1), c = Nf.concat(
    (r == null ? void 0 : r.map((m) => m.mimeType)) ?? []
  ), p = (m, h) => {
    c.includes(m.type) && m.size <= h && e(m);
  }, g = (m) => {
    var x;
    const h = m.target;
    (x = h.files) != null && x.length && p(h.files[0], n);
  }, d = (m) => {
    var h;
    m.preventDefault(), u(!1), (h = m.dataTransfer) != null && h.files.length && p(m.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ f.jsx(ti, { variant: "muted", withPadding: !1, className: "h-full", children: /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `flex h-full flex-col p-5 transition-colors ${a ? "bg-hello-csv-muted-light" : "bg-hello-csv-muted"}`,
      onClick: () => {
        var m;
        return (m = l.current) == null ? void 0 : m.click();
      },
      onDragOver: (m) => {
        m.preventDefault(), u(!0);
      },
      onDragEnter: () => u(!0),
      onDragLeave: () => u(!1),
      onDrop: (m) => d(m),
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
          /* @__PURE__ */ f.jsx(Vd, { className: "text-hello-csv-primary h-12 w-12" }),
          /* @__PURE__ */ f.jsx("p", { className: "mt-3 text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ f.jsxs("div", { className: "mt-3 text-sm text-gray-500", children: [
            s("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ f.jsx("b", { children: mn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((m) => m.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: "mt-3", children: /* @__PURE__ */ f.jsx(je, { children: i("uploader.browseFiles") }) }),
          o && /* @__PURE__ */ f.jsx("div", { className: "mt-3 text-sm", children: /* @__PURE__ */ f.jsx(
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
        /* @__PURE__ */ f.jsx(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: l,
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
function Wg({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = Ze(), r = Sg(n), { t: o } = ge();
  return /* @__PURE__ */ f.jsxs("div", { className: "flex h-full flex-col space-y-4", children: [
    /* @__PURE__ */ f.jsx("div", { className: "flex-none text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ f.jsx("div", { className: "flex-auto md:min-h-0", children: /* @__PURE__ */ f.jsxs("div", { className: "flex h-full flex-col-reverse gap-5 md:flex-row", children: [
      /* @__PURE__ */ f.jsx("div", { className: "h-full flex-1 lg:flex-1", children: /* @__PURE__ */ f.jsx(Bg, { importerRequirements: r }) }),
      /* @__PURE__ */ f.jsx("div", { className: "flex-1 lg:flex-2", children: /* @__PURE__ */ f.jsx(
        Gg,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
function qg({
  onComplete: e,
  sheets: t,
  customFileLoaders: n,
  onDataColumnsMapped: r,
  preventUploadOnValidationErrors: o,
  customSuggestedMapper: i
}) {
  const { t: s } = ge(), l = B(!0), a = B(null), u = at(), c = xm(), p = Ae(), {
    mode: g,
    currentSheetId: d,
    sheetData: m,
    columnMappings: h,
    parsedFile: x,
    validationErrors: b
  } = u;
  ie(() => {
    var A;
    if (l.current) {
      l.current = !1;
      return;
    }
    (A = a.current) == null || A.scrollIntoView({ behavior: "smooth" });
  }, [g]);
  const S = m.find(
    (A) => A.sheetId === d
  ), C = ne(() => Object.fromEntries(
    m.map((A) => [A.sheetId, A.rows.length])
  ), [m]), $ = t.find(
    (A) => A.id === d
  ), M = Mp(t), _ = (typeof o == "function" ? (o == null ? void 0 : o(b)) ?? !1 : o ?? !1) && b.length > 0;
  function v(A) {
    Eg(A, n).then((j) => {
      kg({
        file: j,
        onCompleted: async (D) => {
          const T = D.meta.fields, oe = i != null ? await i(t, T) : Wp(t, T);
          c({
            type: "FILE_PARSED",
            payload: { parsed: D, rowFile: A }
          }), c({
            type: "COLUMN_MAPPING_CHANGED",
            payload: {
              mappings: oe
            }
          });
        }
      });
    });
  }
  function w() {
    c({
      type: "ENTER_DATA_MANUALLY",
      payload: {
        amountOfEmptyRowsToAdd: jf
      }
    });
  }
  function y(A) {
    c({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: A }
    });
  }
  async function R() {
    const A = zp(t, h ?? [], x), j = r != null ? await r(A) : A;
    c({ type: "DATA_MAPPED", payload: { mappedData: j } });
  }
  function I(A) {
    c({ type: "CELL_CHANGED", payload: A });
  }
  function N(A) {
    c({ type: "REMOVE_ROWS", payload: A });
  }
  function O() {
    c({ type: "ADD_EMPTY_ROW" });
  }
  function G() {
    c({ type: "RESET" });
  }
  async function Y() {
    c({ type: "PROGRESS", payload: { progress: 0 } }), c({ type: "SUBMIT" });
    try {
      const A = Tr(
        t,
        m.map((D) => ({ ...D, rows: Rp(D) }))
      ), j = await e(
        { ...u, sheetData: A },
        (D) => {
          c({ type: "PROGRESS", payload: { progress: D } });
        }
      );
      await Zo(400), c({ type: "PROGRESS", payload: { progress: 100 } }), await Zo(200), c({
        type: "COMPLETED",
        payload: { importStatistics: j ?? void 0 }
      });
    } catch {
      c({ type: "FAILED" });
    }
  }
  function H() {
    c({ type: "PREVIEW" });
  }
  function V() {
    c({ type: "UPLOAD" });
  }
  function F() {
    c({ type: "MAPPING" });
  }
  return /* @__PURE__ */ f.jsx(Og, { children: /* @__PURE__ */ f.jsxs(
    Gf,
    {
      ref: a,
      withFullHeight: g === "submit" || g === "failed" || g === "completed",
      children: [
        g === "upload" && /* @__PURE__ */ f.jsx(
          Wg,
          {
            onFileUploaded: v,
            onEnterDataManually: w
          }
        ),
        g === "mapping" && /* @__PURE__ */ f.jsx(
          wm,
          {
            onMappingsChanged: y,
            onMappingsSet: R,
            onBack: V
          }
        ),
        g === "preview" && // TODO: Move these to separate component in future PR
        /* @__PURE__ */ f.jsxs("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ f.jsx("div", { className: "flex-none", children: /* @__PURE__ */ f.jsx(
            Vg,
            {
              idPrefix: p,
              sheetCountDict: C,
              onSheetChange: (A) => c({ type: "SHEET_CHANGED", payload: { sheetId: A } })
            }
          ) }),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              className: "flex-1 overflow-auto",
              role: "tabpanel",
              id: `${p}-tabpanel-${d}`,
              "aria-labelledby": `${p}-tab-${d}`,
              tabIndex: 0,
              children: /* @__PURE__ */ f.jsx(
                bg,
                {
                  data: S,
                  sheetDefinition: $,
                  sheetValidationErrors: b.filter(
                    (A) => A.sheetId === ($ == null ? void 0 : $.id)
                  ),
                  setRowData: I,
                  removeRows: N,
                  addEmptyRow: O,
                  resetState: G,
                  enumLabelDict: M
                }
              )
            }
          ),
          /* @__PURE__ */ f.jsx("div", { className: "flex-none", children: S.rows.length > 0 && /* @__PURE__ */ f.jsxs("div", { className: "mt-5 flex justify-between", children: [
            /* @__PURE__ */ f.jsx("div", { children: h != null && /* @__PURE__ */ f.jsx(Hg, { onBackToMapping: F }) }),
            /* @__PURE__ */ f.jsx(
              Et,
              {
                tooltipText: s("importer.uploadBlocked"),
                hidden: !_,
                children: /* @__PURE__ */ f.jsx(je, { onClick: Y, disabled: _, children: s("importer.upload") })
              }
            )
          ] }) })
        ] }),
        (g === "submit" || g === "failed" || g === "completed") && /* @__PURE__ */ f.jsx(
          Fg,
          {
            onRetry: Y,
            onBackToPreview: H,
            resetState: G,
            enumLabelDict: M
          }
        )
      ]
    }
  ) });
}
function Ug(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1
  };
  return /* @__PURE__ */ f.jsx(If, { importerDefintion: t, children: /* @__PURE__ */ f.jsx(
    vm,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      children: /* @__PURE__ */ f.jsx(Af, { children: /* @__PURE__ */ f.jsx(qg, { ...t }) })
    }
  ) });
}
function Qg(e, t) {
  cl(dl(Ug, t), e);
}
export {
  Ug as default,
  Qg as renderImporter
};
