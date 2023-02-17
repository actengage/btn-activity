import { defineComponent as p, inject as B, toRaw as O, openBlock as a, createElementBlock as g, normalizeClass as j, normalizeStyle as N, createElementVNode as R, createBlock as b, resolveDynamicComponent as z, toDisplayString as f, createCommentVNode as E, mergeProps as x, withCtx as w, renderSlot as A, createTextVNode as C, resolveComponent as $, createVNode as H, normalizeProps as V, guardReactiveProps as W } from "vue";
var D = Object.defineProperty, L = (t, i, e) => i in t ? D(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e, Z = (t, i, e) => (L(t, typeof i != "symbol" ? i + "" : i, e), e), u = function() {
  return u = Object.assign || function(t) {
    for (var i, e = 1, n = arguments.length; e < n; e++) {
      i = arguments[e];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, u.apply(this, arguments);
};
function _(t) {
  return t.toLowerCase();
}
var F = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], T = /[^A-Z0-9]+/gi;
function I(t, i) {
  i === void 0 && (i = {});
  for (var e = i.splitRegexp, n = e === void 0 ? F : e, s = i.stripRegexp, o = s === void 0 ? T : s, c = i.transform, v = c === void 0 ? _ : c, l = i.delimiter, k = l === void 0 ? " " : l, d = P(P(t, n, "$1\0$2"), o, "\0"), m = 0, y = d.length; d.charAt(m) === "\0"; )
    m++;
  for (; d.charAt(y - 1) === "\0"; )
    y--;
  return d.slice(m, y).split("\0").map(v).join(k);
}
function P(t, i, e) {
  return i instanceof RegExp ? t.replace(i, e) : i.reduce(function(n, s) {
    return n.replace(s, e);
  }, t);
}
function M(t, i) {
  return i === void 0 && (i = {}), I(t, u({ delimiter: "." }, i));
}
function h(t, i) {
  return i === void 0 && (i = {}), M(t, u({ delimiter: "-" }, i));
}
class q {
  constructor(i = {}) {
    Z(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(i).forEach(([e, n]) => {
      this.register(e, n);
    });
  }
  get(i) {
    const e = this.components.get(
      i = h(i)
    );
    if (e)
      return e;
    throw new Error(`"${i}" has not been registered yet!`);
  }
  register(i, e) {
    return typeof i == "object" ? (Object.entries(i).forEach(([n, s]) => {
      this.register(h(n), s);
    }), this) : (this.components.set(h(i), e), this);
  }
  remove(i) {
    return this.components.delete(h(i)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function G(t = {}) {
  return new q(t);
}
const J = G();
function r(t, i = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${i}` : t;
}
const K = p({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: [Object, String],
      required: !0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    minHeight: {
      type: [String, Number],
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    maxWidth: {
      type: [String, Number],
      default: void 0
    },
    minWidth: {
      type: [String, Number],
      default: void 0
    }
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
  // async mounted() {
  //     const component = await this.component();
  //     this.is = () => component;
  // },
  methods: {
    componentFromRegistry(t) {
      var i;
      try {
        return (i = B(this.registry || "indicators", J)) == null ? void 0 : i.get(t);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : O(this.type);
    }
  }
}), Q = (t, i) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of i)
    e[n] = s;
  return e;
}, U = { class: "activity-indicator-content" }, X = {
  key: 0,
  class: "activity-indicator-label"
};
function Y(t, i, e, n, s, o) {
  return a(), g("div", {
    class: j(["activity-indicator", t.classes]),
    style: N(t.style)
  }, [
    R("div", U, [
      (a(), b(z(t.component()), { class: "mx-auto" })),
      t.label ? (a(), g("div", X, f(t.label), 1)) : E("", !0)
    ])
  ], 6);
}
const tt = /* @__PURE__ */ Q(K, [["render", Y]]), it = p({
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
      return this.size === void 0 ? !1 : !!this.size.match(
        new RegExp(`^${this.sizeableClassPrefix}`)
      );
    },
    sizeableClass() {
      return this.size ? !this.sizeableClassPrefix || this.hasSizeablePrefix ? this.size : `${this.sizeableClassPrefix}-${this.size}` : "";
    }
  }
}), et = {
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
      return this.variant === void 0 ? !1 : !!this.variant.match(
        new RegExp(`^${this.variantClassPrefix}`)
      );
    },
    variantClass() {
      return this.variant ? !this.variantClassPrefix || this.hasVariantPrefix ? this.variant : `${this.variantClassPrefix}-${this.variant}` : "";
    }
  }
}, st = p({
  mixins: [
    it,
    et
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
}), nt = (t, i) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of i)
    e[n] = s;
  return e;
};
function rt(t, i, e, n, s, o) {
  return a(), b(z(t.component), x(t.$attrs, {
    disabled: t.disabled,
    class: t.classes,
    role: "button"
  }), {
    default: w(() => [
      A(t.$slots, "default", {}, () => [
        C(f(t.label), 1)
      ])
    ]),
    _: 3
  }, 16, ["disabled", "class"]);
}
const at = /* @__PURE__ */ nt(st, [["render", rt]]), ot = function(t) {
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
}, S = function(t, i) {
  const e = (t.ownerDocument || document).defaultView;
  setTimeout(
    i,
    ot(
      e == null ? void 0 : e.getComputedStyle(t).animationDuration
    )
  );
}, ct = p({
  components: {
    ActivityIndicator: tt,
    Btn: at
  },
  inheritAttrs: !1,
  props: {
    /**
    * Make the button appear with the active state.
    */
    active: Boolean,
    /**
    * Show the activity indicator inside the button.
    */
    activity: Boolean,
    /**
    * Display the button as block width.
    */
    block: Boolean,
    /**
    * Disable the button.
    */
    disabled: Boolean,
    /**
    * The type of activity indicator inside the button.
    */
    indicator: {
      type: [Object, String],
      default: "spinner"
    },
    /**
    * The button label.
    */
    label: {
      type: String,
      default: void 0
    },
    /**
    * The orientation of the activity button inside the button.
    */
    orientation: {
      type: String,
      default: "right"
    },
    /**
    * The size of the button.
    */
    size: {
      type: String,
      default: "md"
    },
    /**
    * The HTML tag.
    */
    tag: {
      type: String,
      default: void 0
    },
    /**
    * The variant of the button.
    */
    variant: {
      type: String,
      default: "primary"
    }
  },
  emits: ["click", "hide-activity", "show-activity"],
  data() {
    return {
      currentActivity: this.activity
    };
  },
  computed: {
    /**
    * An object of classes to append to the button.
    */
    classes() {
      return {
        disabled: this.disabled,
        active: this.active,
        "btn-activity": this.activity,
        [`btn-activity-${this.orientation.replace("btn-activity-", "")}`]: !!this.orientation,
        [`btn-activity-indicator-${this.indicatorProps.type.replace("btn-activity-indicator-", "")}`]: !!this.indicatorProps.type
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
    /**
    * Disable the button.
    */
    disable() {
      this.$el.disabled = !0, this.$el.classList.add("disabled");
    },
    /**
    * Enable the button.
    */
    enable() {
      this.$el.disabled = !1, this.$el.classList.remove("disabled");
    },
    /**
    * Hide the activity indicator inside the button.
    */
    hideActivity() {
      this.$el.classList.add("btn-hide-activity"), S(this.$el, () => {
        this.disabled || this.enable(), this.currentActivity = !1, this.$el.classList.remove("btn-activity", "btn-hide-activity"), this.$emit("hide-activity");
      });
    },
    /**
    * Show the activity indicator inside the button.
    */
    showActivity() {
      this.currentActivity = !0, this.disable(), S(this.$el, () => {
        this.$el.classList.add("btn-activity"), this.$emit("show-activity");
      });
    },
    /**
    * Show the activity indicator inside the button.
    */
    toggle() {
      this.currentActivity ? this.hideActivity() : this.showActivity();
    }
  }
});
const lt = (t, i) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of i)
    e[n] = s;
  return e;
};
function dt(t, i, e, n, s, o) {
  const c = $("activity-indicator"), v = $("btn");
  return a(), b(v, x({
    active: t.active,
    block: t.block,
    disabled: t.disabled,
    size: t.size,
    tag: t.tag,
    variant: t.variant,
    class: t.classes
  }, Object.assign({}, t.$attrs, { onClick: void 0 }), {
    onClick: i[0] || (i[0] = (l) => !t.disabled && t.$emit("click", l, {
      disable: t.disable,
      enable: t.enable,
      toggle: t.toggle,
      showActivity: t.showActivity,
      hideActivity: t.hideActivity
    }))
  }), {
    default: w(() => [
      A(t.$slots, "default", {}, () => [
        C(f(t.label), 1)
      ]),
      H(c, V(W(t.indicatorProps)), null, 16)
    ]),
    _: 3
  }, 16, ["active", "block", "disabled", "size", "tag", "variant", "class"]);
}
const ut = /* @__PURE__ */ lt(ct, [["render", dt]]);
export {
  ut as BtnActivity
};
