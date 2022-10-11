import { openBlock as c, createElementBlock as d, normalizeClass as m, normalizeStyle as $, createElementVNode as k, createBlock as P, resolveDynamicComponent as z, createCommentVNode as p, toDisplayString as S, resolveComponent as B, createTextVNode as E, renderSlot as D, createVNode as N, normalizeProps as O, guardReactiveProps as R } from "vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var u = function() {
  return u = Object.assign || function(e) {
    for (var i, n = 1, s = arguments.length; n < s; n++) {
      i = arguments[n];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, u.apply(this, arguments);
};
function j(t) {
  return t.toLowerCase();
}
var T = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], F = /[^A-Z0-9]+/gi;
function L(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, n = i === void 0 ? T : i, s = e.stripRegexp, r = s === void 0 ? F : s, o = e.transform, h = o === void 0 ? j : o, g = e.delimiter, C = g === void 0 ? " " : g, l = f(f(t, n, "$1\0$2"), r, "\0"), y = 0, v = l.length; l.charAt(y) === "\0"; )
    y++;
  for (; l.charAt(v - 1) === "\0"; )
    v--;
  return l.slice(y, v).split("\0").map(h).join(C);
}
function f(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(n, s) {
    return n.replace(s, i);
  }, t);
}
function H(t, e) {
  return e === void 0 && (e = {}), L(t, u({
    delimiter: "."
  }, e));
}
function _(t, e) {
  return e === void 0 && (e = {}), H(t, u({
    delimiter: "-"
  }, e));
}
class w {
  constructor(e = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([i, n]) => {
      this.register(i, n);
    });
  }
  get(e) {
    const i = this.components.get(e = _(e));
    if (i)
      return i;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, i) {
    return typeof e == "object" ? (Object.entries(e).forEach(([n, s]) => {
      this.register(_(n), s);
    }), this) : (this.components.set(_(e), i), this);
  }
  remove(e) {
    return this.components.delete(_(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function I(...t) {
  return new w(...t);
}
const b = I();
const A = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, s] of e)
    i[n] = s;
  return i;
};
function a(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const V = {
  name: "ActivityIndicator",
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: w,
      default() {
        return b;
      }
    },
    type: {
      type: String,
      required: !0
    },
    height: [String, Number],
    maxHeight: [String, Number],
    minHeight: [String, Number],
    width: [String, Number],
    maxWidth: [String, Number],
    minWidth: [String, Number]
  },
  data: () => ({
    is: null
  }),
  computed: {
    classes() {
      return {
        "activity-indicator-center": this.center,
        "activity-indicator-absolute": this.absolute,
        [this.size && `activity-indicator-${this.size}`]: !!this.size
      };
    },
    style() {
      return {
        width: a(this.width),
        maxWidth: a(this.maxWidth),
        minWidth: a(this.minWidth),
        height: a(this.height),
        maxHeight: a(this.maxHeight),
        minHeight: a(this.minHeight)
      };
    }
  },
  async mounted() {
    const t = await this.component();
    this.is = () => t;
  },
  methods: {
    async component() {
      let t = b.get(this.type);
      return t instanceof Promise ? t : (typeof t == "function" && (t = await t()), t.default ? t.default : t);
    }
  }
}, W = { class: "activity-indicator-content" }, q = {
  key: 1,
  class: "activity-indicator-label"
};
function Z(t, e, i, n, s, r) {
  return c(), d("div", {
    class: m(["activity-indicator", r.classes]),
    style: $(r.style)
  }, [
    k("div", W, [
      t.is ? (c(), P(z(t.is()), {
        key: 0,
        class: "mx-auto"
      })) : p("", !0),
      i.label ? (c(), d("div", q, S(i.label), 1)) : p("", !0)
    ])
  ], 6);
}
const G = /* @__PURE__ */ A(V, [["render", Z]]);
const M = function(t) {
  const e = parseFloat(t || 0, 10), i = t && t.match(/m?s/), n = i ? i[0] : !1;
  let s;
  switch (n) {
    case "s":
      s = e * 1e3;
      break;
    case "ms":
    default:
      s = e;
      break;
  }
  return s || 0;
}, x = function(t, e) {
  const i = (t.ownerDocument || document).defaultView;
  setTimeout(() => {
    e.apply();
  }, M(i.getComputedStyle(t).animationDuration));
}, U = {
  name: "BtnActivity",
  components: {
    ActivityIndicator: G
  },
  props: {
    active: Boolean,
    activity: Boolean,
    block: Boolean,
    disabled: Boolean,
    label: String,
    icon: String,
    type: String,
    size: {
      type: String,
      default: "md"
    },
    variant: {
      type: String,
      default: "primary"
    },
    indicator: {
      type: [Object, String],
      default: "spinner"
    },
    orientation: {
      type: String,
      default: "right"
    }
  },
  computed: {
    classes() {
      const t = {
        disabled: this.disabled,
        active: this.active,
        "btn-block": this.block,
        "btn-activity": this.activity
      };
      return t["btn-" + this.size.replace("btn-", "")] = !!this.size, t["btn-" + this.variant.replace("btn-", "")] = !!this.variant, t["btn-activity-" + this.orientation.replace("btn-activity-", "")] = !!this.orientation, t["btn-activity-indicator-" + this.indicatorProps.type.replace("btn-activity-indicator-", "")] = !!this.indicatorProps.type, t;
    },
    indicatorProps() {
      return Object.assign({
        type: "spinner"
      }, (typeof this.indicator == "string" ? {
        type: this.indicator
      } : this.indicator) || {});
    }
  },
  watch: {
    activity(t) {
      t ? this.showActivity() : this.hideActivity();
    }
  },
  methods: {
    disable() {
      this.$el.disabled = !0;
    },
    enable() {
      this.$el.disabled = !1;
    },
    showActivity() {
      this.disable(), x(this.$el, () => {
        this.$el.classList.add("btn-activity"), this.$emit("show-activity");
      });
    },
    hideActivity() {
      this.$el.classList.add("btn-hide-activity"), x(this.$el, () => {
        this.enable(), this.$el.classList.remove("btn-activity", "btn-hide-activity"), this.$emit("hide-activity");
      });
    },
    onClick(t) {
      this.disabled ? t.preventDefault() : this.$emit("click", t);
    }
  }
}, X = ["type"];
function J(t, e, i, n, s, r) {
  const o = B("activity-indicator");
  return c(), d("button", {
    type: i.type,
    class: m(["btn", r.classes]),
    onClick: e[0] || (e[0] = (...h) => r.onClick && r.onClick(...h))
  }, [
    i.icon ? (c(), d("i", {
      key: 0,
      class: m(i.icon)
    }, null, 2)) : p("", !0),
    E(" " + S(i.label) + " ", 1),
    D(t.$slots, "default"),
    N(o, O(R(r.indicatorProps)), null, 16)
  ], 10, X);
}
const Q = /* @__PURE__ */ A(U, [["render", J]]);
export {
  Q as BtnActivity
};
