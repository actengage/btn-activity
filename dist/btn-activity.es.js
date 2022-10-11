import { openBlock as c, createElementBlock as p, normalizeClass as z, normalizeStyle as R, createElementVNode as N, createBlock as m, resolveDynamicComponent as w, createCommentVNode as b, toDisplayString as f, mergeProps as O, withCtx as $, renderSlot as A, createTextVNode as B, resolveComponent as x, createVNode as D, normalizeProps as L, guardReactiveProps as j } from "vue";
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
var h = function() {
  return h = Object.assign || function(e) {
    for (var i, n = 1, s = arguments.length; n < s; n++) {
      i = arguments[n];
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, h.apply(this, arguments);
};
function T(t) {
  return t.toLowerCase();
}
var V = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], F = /[^A-Z0-9]+/gi;
function H(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, n = i === void 0 ? V : i, s = e.stripRegexp, a = s === void 0 ? F : s, o = e.transform, _ = o === void 0 ? T : o, l = e.delimiter, E = l === void 0 ? " " : l, d = P(P(t, n, "$1\0$2"), a, "\0"), v = 0, y = d.length; d.charAt(v) === "\0"; )
    v++;
  for (; d.charAt(y - 1) === "\0"; )
    y--;
  return d.slice(v, y).split("\0").map(_).join(E);
}
function P(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(n, s) {
    return n.replace(s, i);
  }, t);
}
function I(t, e) {
  return e === void 0 && (e = {}), H(t, h({
    delimiter: "."
  }, e));
}
function u(t, e) {
  return e === void 0 && (e = {}), I(t, h({
    delimiter: "-"
  }, e));
}
class k {
  constructor(e = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([i, n]) => {
      this.register(i, n);
    });
  }
  get(e) {
    const i = this.components.get(e = u(e));
    if (i)
      return i;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, i) {
    return typeof e == "object" ? (Object.entries(e).forEach(([n, s]) => {
      this.register(u(n), s);
    }), this) : (this.components.set(u(e), i), this);
  }
  remove(e) {
    return this.components.delete(u(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function W(...t) {
  return new k(...t);
}
const S = W();
const g = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, s] of e)
    i[n] = s;
  return i;
};
function r(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const q = {
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
      type: k,
      default() {
        return S;
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
        width: r(this.width),
        maxWidth: r(this.maxWidth),
        minWidth: r(this.minWidth),
        height: r(this.height),
        maxHeight: r(this.maxHeight),
        minHeight: r(this.minHeight)
      };
    }
  },
  async mounted() {
    const t = await this.component();
    this.is = () => t;
  },
  methods: {
    async component() {
      let t = S.get(this.type);
      return t instanceof Promise ? t : (typeof t == "function" && (t = await t()), t.default ? t.default : t);
    }
  }
}, Z = { class: "activity-indicator-content" }, G = {
  key: 1,
  class: "activity-indicator-label"
};
function M(t, e, i, n, s, a) {
  return c(), p("div", {
    class: z(["activity-indicator", a.classes]),
    style: R(a.style)
  }, [
    N("div", Z, [
      t.is ? (c(), m(w(t.is()), {
        key: 0,
        class: "mx-auto"
      })) : b("", !0),
      i.label ? (c(), p("div", G, f(i.label), 1)) : b("", !0)
    ])
  ], 6);
}
const U = /* @__PURE__ */ g(q, [["render", M]]);
const X = {
  props: {
    componentPrefix: String,
    size: String,
    sizePrefix: String
  },
  computed: {
    sizeableClassPrefix() {
      return this.sizePrefix || this.componentPrefix;
    },
    hasSizeablePrefix() {
      return this.size && !!this.size.match(
        new RegExp(`^${this.sizeableClassPrefix}`)
      );
    },
    sizeableClass() {
      return this.size ? !this.sizeableClassPrefix || this.hasSizeablePrefix ? this.size : `${this.sizeableClassPrefix}-${this.size}` : "";
    }
  }
}, J = {
  props: {
    componentPrefix: String,
    variant: String,
    variantPrefix: String
  },
  computed: {
    variantClassPrefix() {
      return this.variantPrefix || this.componentPrefix;
    },
    hasVariantPrefix() {
      return this.variant && !!this.variant.match(
        new RegExp(`^${this.variantClassPrefix}`)
      );
    },
    variantClass() {
      return this.variant ? !this.variantClassPrefix || this.hasVariantPrefix ? this.variant : `${this.variantClassPrefix}-${this.variant}` : "";
    }
  }
}, K = {
  name: "Btn",
  mixins: [
    X,
    J
  ],
  props: {
    active: Boolean,
    block: Boolean,
    componentPrefix: {
      type: String,
      default: "btn"
    },
    disabled: Boolean,
    label: String,
    outline: Boolean,
    tag: String,
    variant: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    classes() {
      return [
        "btn",
        this.variantClass,
        this.sizeableClass,
        this.active && "active",
        this.block && "btn-block",
        this.disabled && "disabled"
      ];
    },
    component() {
      return this.tag ? this.tag : this.$attrs.href ? "a" : "button";
    },
    variantClassPrefix() {
      return (this.variantPrefix || this.componentPrefix) + (this.outline ? "-outline" : "");
    }
  }
};
function Q(t, e, i, n, s, a) {
  return c(), m(w(a.component), O(t.$attrs, {
    disabled: i.disabled,
    class: a.classes,
    role: "button"
  }), {
    default: $(() => [
      A(t.$slots, "default", {}, () => [
        B(f(i.label), 1)
      ])
    ]),
    _: 3
  }, 16, ["disabled", "class"]);
}
const Y = /* @__PURE__ */ g(K, [["render", Q]]);
const tt = function(t) {
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
}, C = function(t, e) {
  const i = (t.ownerDocument || document).defaultView;
  setTimeout(() => {
    e.apply();
  }, tt(i.getComputedStyle(t).animationDuration));
}, et = {
  name: "BtnActivity",
  components: {
    ActivityIndicator: U,
    Btn: Y
  },
  props: {
    active: Boolean,
    activity: Boolean,
    block: Boolean,
    disabled: Boolean,
    indicator: {
      type: [Object, String],
      default: "spinner"
    },
    label: String,
    orientation: {
      type: String,
      default: "right"
    },
    size: {
      type: String,
      default: "md"
    },
    tag: String,
    variant: {
      type: String,
      default: "primary"
    }
  },
  data() {
    return {
      currentActivity: this.activity
    };
  },
  computed: {
    classes() {
      const t = {
        disabled: this.disabled,
        active: this.active,
        "btn-activity": this.activity
      };
      return t["btn-activity-" + this.orientation.replace("btn-activity-", "")] = !!this.orientation, t["btn-activity-indicator-" + this.indicatorProps.type.replace("btn-activity-indicator-", "")] = !!this.indicatorProps.type, t;
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
  mounted() {
    this.activity && this.showActivity();
  },
  methods: {
    disable() {
      this.$el.disabled = !0, this.$el.classList.add("disabled");
    },
    enable() {
      this.$el.disabled = !1, this.$el.classList.remove("disabled");
    },
    hideActivity() {
      this.$el.classList.add("btn-hide-activity"), C(this.$el, () => {
        this.enable(), this.currentActivity = !1, this.$el.classList.remove("btn-activity", "btn-hide-activity"), this.$emit("hide-activity");
      });
    },
    showActivity() {
      this.currentActivity = !0, this.disable(), C(this.$el, () => {
        this.$el.classList.add("btn-activity"), this.$emit("show-activity");
      });
    },
    toggle() {
      this.currentActivity ? this.hideActivity() : this.showActivity();
    }
  }
};
function it(t, e, i, n, s, a) {
  const o = x("activity-indicator"), _ = x("btn");
  return c(), m(_, {
    active: i.active,
    block: i.block,
    disabled: i.disabled,
    size: i.size,
    tag: i.tag,
    variant: i.variant,
    class: z(a.classes),
    onClick: e[0] || (e[0] = (l) => !i.disabled && t.$emit("click", l, this))
  }, {
    default: $(() => [
      A(t.$slots, "default", {}, () => [
        B(f(i.label), 1)
      ]),
      D(o, L(j(a.indicatorProps)), null, 16)
    ]),
    _: 3
  }, 8, ["active", "block", "disabled", "size", "tag", "variant", "class"]);
}
const st = /* @__PURE__ */ g(et, [["render", it]]);
export {
  st as BtnActivity
};
