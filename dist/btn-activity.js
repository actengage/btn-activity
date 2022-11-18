import { defineComponent as b, inject as O, openBlock as a, createElementBlock as g, normalizeClass as j, normalizeStyle as N, createElementVNode as E, createBlock as f, resolveDynamicComponent as x, createCommentVNode as $, toDisplayString as y, mergeProps as w, withCtx as A, renderSlot as C, createTextVNode as k, resolveComponent as P, createVNode as _, normalizeProps as H, guardReactiveProps as R } from "vue";
function r(t, i = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${i}` : t;
}
const V = b({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
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
  setup(t) {
    return {
      registryInstance: O(t.registry || "indicators")
    };
  },
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
      let t = this.registryInstance.get(this.type);
      return t instanceof Promise ? t : (typeof t == "function" && (t = await t()), t.default ? t.default : t);
    }
  }
}), W = (t, i) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of i)
    e[n] = s;
  return e;
}, D = { class: "activity-indicator-content" }, L = {
  key: 1,
  class: "activity-indicator-label"
};
function I(t, i, e, n, s, o) {
  return a(), g("div", {
    class: j(["activity-indicator", t.classes]),
    style: N(t.style)
  }, [
    E("div", D, [
      t.is ? (a(), f(x(t.is()), {
        key: 0,
        class: "mx-auto"
      })) : $("", !0),
      t.label ? (a(), g("div", L, y(t.label), 1)) : $("", !0)
    ])
  ], 6);
}
const Z = /* @__PURE__ */ W(V, [["render", I]]);
var F = Object.defineProperty, M = (t, i, e) => i in t ? F(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e, T = (t, i, e) => (M(t, typeof i != "symbol" ? i + "" : i, e), e), u = function() {
  return u = Object.assign || function(t) {
    for (var i, e = 1, n = arguments.length; e < n; e++) {
      i = arguments[e];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, u.apply(this, arguments);
};
function q(t) {
  return t.toLowerCase();
}
var G = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], J = /[^A-Z0-9]+/gi;
function K(t, i) {
  i === void 0 && (i = {});
  for (var e = i.splitRegexp, n = e === void 0 ? G : e, s = i.stripRegexp, o = s === void 0 ? J : s, c = i.transform, p = c === void 0 ? q : c, l = i.delimiter, B = l === void 0 ? " " : l, h = S(S(t, n, "$1\0$2"), o, "\0"), v = 0, m = h.length; h.charAt(v) === "\0"; )
    v++;
  for (; h.charAt(m - 1) === "\0"; )
    m--;
  return h.slice(v, m).split("\0").map(p).join(B);
}
function S(t, i, e) {
  return i instanceof RegExp ? t.replace(i, e) : i.reduce(function(n, s) {
    return n.replace(s, e);
  }, t);
}
function Q(t, i) {
  return i === void 0 && (i = {}), K(t, u({ delimiter: "." }, i));
}
function d(t, i) {
  return i === void 0 && (i = {}), Q(t, u({ delimiter: "-" }, i));
}
class U {
  constructor(i = {}) {
    T(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(i).forEach(([e, n]) => {
      this.register(e, n);
    });
  }
  get(i) {
    const e = this.components.get(
      i = d(i)
    );
    if (e)
      return e;
    throw new Error(`"${i}" has not been registered yet!`);
  }
  register(i, e) {
    return typeof i == "object" ? (Object.entries(i).forEach(([n, s]) => {
      this.register(d(n), s);
    }), this) : (this.components.set(d(i), e), this);
  }
  remove(i) {
    return this.components.delete(d(i)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function X(t = {}) {
  return new U(t);
}
X();
const Y = {
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
      return this.size === void 0 ? !1 : !!this.size.match(new RegExp(`^${this.sizeableClassPrefix}`));
    },
    sizeableClass() {
      return this.size ? !this.sizeableClassPrefix || this.hasSizeablePrefix ? this.size : `${this.sizeableClassPrefix}-${this.size}` : "";
    }
  }
}, tt = {
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
      return this.variant === void 0 ? !1 : !!this.variant.match(new RegExp(`^${this.variantClassPrefix}`));
    },
    variantClass() {
      return this.variant ? !this.variantClassPrefix || this.hasVariantPrefix ? this.variant : `${this.variantClassPrefix}-${this.variant}` : "";
    }
  }
}, it = b({
  mixins: [
    Y,
    tt
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
}), et = (t, i) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of i)
    e[n] = s;
  return e;
};
function st(t, i, e, n, s, o) {
  return a(), f(x(t.component), w(t.$attrs, {
    disabled: t.disabled,
    class: t.classes,
    role: "button"
  }), {
    default: A(() => [
      C(t.$slots, "default", {}, () => [
        k(y(t.label), 1)
      ])
    ]),
    _: 3
  }, 16, ["disabled", "class"]);
}
const nt = /* @__PURE__ */ et(it, [["render", st]]), rt = function(t) {
  const i = parseFloat(t || 0), e = t && t.match(/m?s/), n = e ? e[0] : !1;
  let s;
  switch (n) {
    case "s":
      s = i * 1e3;
      break;
    case "ms":
    default:
      s = i;
      break;
  }
  return s || 0;
}, z = function(t, i) {
  const e = (t.ownerDocument || document).defaultView;
  setTimeout(
    i,
    rt(
      e == null ? void 0 : e.getComputedStyle(t).animationDuration
    )
  );
}, at = b({
  inheritAttrs: !1,
  components: {
    ActivityIndicator: Z,
    Btn: nt
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
      return {
        disabled: this.disabled,
        active: this.active,
        "btn-activity": this.activity,
        [`btn-activity-${this.orientation.replace("btn-activity-", "")}`]: !!this.orientation,
        [`'btn-activity-indicator-${this.indicatorProps.type.replace(
          "btn-activity-indicator-",
          ""
        )}`]: !!this.indicatorProps.type
      };
    },
    indicatorProps() {
      return Object.assign(
        {
          type: "spinner"
        },
        (typeof this.indicator == "string" ? {
          type: this.indicator
        } : this.indicator) || {}
      );
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
      this.$el.classList.add("btn-hide-activity"), z(this.$el, () => {
        this.enable(), this.currentActivity = !1, this.$el.classList.remove("btn-activity", "btn-hide-activity"), this.$emit("hide-activity");
      });
    },
    showActivity() {
      this.currentActivity = !0, this.disable(), z(this.$el, () => {
        this.$el.classList.add("btn-activity"), this.$emit("show-activity");
      });
    },
    toggle() {
      this.currentActivity ? this.hideActivity() : this.showActivity();
    }
  }
});
const ot = (t, i) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of i)
    e[n] = s;
  return e;
};
function ct(t, i, e, n, s, o) {
  const c = P("activity-indicator"), p = P("btn");
  return a(), f(p, w({
    active: t.active,
    block: t.block,
    disabled: t.disabled,
    size: t.size,
    tag: t.tag,
    variant: t.variant,
    class: t.classes,
    onClick: i[0] || (i[0] = (l) => !t.disabled && t.$emit("click", l, {
      disable: t.disable,
      enable: t.enable,
      toggle: t.toggle,
      showActivity: t.showActivity,
      hideActivity: t.hideActivity
    }))
  }, Object.assign({}, t.$attrs, { onClick: void 0 })), {
    default: A(() => [
      C(t.$slots, "default", {}, () => [
        k(y(t.label), 1)
      ]),
      _(c, H(R(t.indicatorProps)), null, 16)
    ]),
    _: 3
  }, 16, ["active", "block", "disabled", "size", "tag", "variant", "class"]);
}
const ht = /* @__PURE__ */ ot(at, [["render", ct]]);
export {
  ht as BtnActivity
};
