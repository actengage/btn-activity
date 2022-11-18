import { inject as P, openBlock as c, createElementBlock as h, normalizeClass as m, normalizeStyle as S, createElementVNode as z, createBlock as o, resolveDynamicComponent as y, createCommentVNode as d, toDisplayString as l, mergeProps as _, withCtx as b, renderSlot as f, createTextVNode as p, resolveComponent as u, createVNode as $, normalizeProps as C, guardReactiveProps as B } from "vue";
function r(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const w = {
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
      registryInstance: P(t.registry || "indicators")
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
}, A = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, s] of e)
    i[a] = s;
  return i;
}, k = { class: "activity-indicator-content" }, N = {
  key: 1,
  class: "activity-indicator-label"
};
function H(t, e, i, a, s, n) {
  return c(), h("div", {
    class: m(["activity-indicator", n.classes]),
    style: S(n.style)
  }, [
    z("div", k, [
      t.is ? (c(), o(y(t.is()), {
        key: 0,
        class: "mx-auto"
      })) : d("", !0),
      i.label ? (c(), h("div", N, l(i.label), 1)) : d("", !0)
    ])
  ], 6);
}
const O = /* @__PURE__ */ A(w, [["render", H]]), V = {
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
}, W = {
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
}, D = {
  name: "Btn",
  mixins: [
    V,
    W
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
}, E = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, s] of e)
    i[a] = s;
  return i;
};
function L(t, e, i, a, s, n) {
  return c(), o(y(n.component), _(t.$attrs, {
    disabled: i.disabled,
    class: n.classes,
    role: "button"
  }), {
    default: b(() => [
      f(t.$slots, "default", {}, () => [
        p(l(i.label), 1)
      ])
    ]),
    _: 3
  }, 16, ["disabled", "class"]);
}
const j = /* @__PURE__ */ E(D, [["render", L]]), I = function(t) {
  const e = parseFloat(t || 0), i = t && t.match(/m?s/), a = i ? i[0] : !1;
  let s;
  switch (a) {
    case "s":
      s = e * 1e3;
      break;
    case "ms":
    default:
      s = e;
      break;
  }
  return s || 0;
}, v = function(t, e) {
  const i = (t.ownerDocument || document).defaultView;
  setTimeout(
    e,
    I(i == null ? void 0 : i.getComputedStyle(t).animationDuration)
  );
}, R = {
  name: "BtnActivity",
  components: {
    ActivityIndicator: O,
    Btn: j
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
      this.$el.classList.add("btn-hide-activity"), v(this.$el, () => {
        this.enable(), this.currentActivity = !1, this.$el.classList.remove("btn-activity", "btn-hide-activity"), this.$emit("hide-activity");
      });
    },
    showActivity() {
      this.currentActivity = !0, this.disable(), v(this.$el, () => {
        this.$el.classList.add("btn-activity"), this.$emit("show-activity");
      });
    },
    toggle() {
      this.currentActivity ? this.hideActivity() : this.showActivity();
    }
  }
};
const T = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, s] of e)
    i[a] = s;
  return i;
};
function F(t, e, i, a, s, n) {
  const g = u("activity-indicator"), x = u("btn");
  return c(), o(x, {
    active: i.active,
    block: i.block,
    disabled: i.disabled,
    size: i.size,
    tag: i.tag,
    variant: i.variant,
    class: m(n.classes)
  }, {
    default: b(() => [
      f(t.$slots, "default", {}, () => [
        p(l(i.label), 1)
      ]),
      $(g, C(B(n.indicatorProps)), null, 16)
    ]),
    _: 3
  }, 8, ["active", "block", "disabled", "size", "tag", "variant", "class"]);
}
const G = /* @__PURE__ */ T(R, [["render", F]]);
export {
  G as BtnActivity
};
