import { inject as v, openBlock as o, createElementBlock as c, normalizeClass as y, normalizeStyle as p, createElementVNode as b, createBlock as d, resolveDynamicComponent as u, createCommentVNode as l, toDisplayString as m, mergeProps as f, withCtx as g, renderSlot as x, createTextVNode as S } from "vue";
function n(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const P = {
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
      registryInstance: v(t.registry || "indicators")
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
        width: n(this.width),
        maxWidth: n(this.maxWidth),
        minWidth: n(this.minWidth),
        height: n(this.height),
        maxHeight: n(this.maxHeight),
        minHeight: n(this.minHeight)
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
}, $ = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, s] of e)
    i[a] = s;
  return i;
}, z = {
  class: "activity-indicator-content"
}, B = {
  key: 1,
  class: "activity-indicator-label"
};
function C(t, e, i, a, s, r) {
  return o(), c("div", {
    class: y(["activity-indicator", r.classes]),
    style: p(r.style)
  }, [b("div", z, [t.is ? (o(), d(u(t.is()), {
    key: 0,
    class: "mx-auto"
  })) : l("", !0), i.label ? (o(), c("div", B, m(i.label), 1)) : l("", !0)])], 6);
}
const w = /* @__PURE__ */ $(P, [["render", C]]), A = {
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
}, _ = {
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
}, k = {
  name: "Btn",
  mixins: [A, _],
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
      return ["btn", this.variantClass, this.sizeableClass, this.active && "active", this.block && "btn-block", this.disabled && "disabled"];
    },
    component() {
      return this.tag ? this.tag : this.$attrs.href ? "a" : "button";
    },
    variantClassPrefix() {
      return (this.variantPrefix || this.componentPrefix) + (this.outline ? "-outline" : "");
    }
  }
}, N = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, s] of e)
    i[a] = s;
  return i;
};
function H(t, e, i, a, s, r) {
  return o(), d(u(r.component), f(t.$attrs, {
    disabled: i.disabled,
    class: r.classes,
    role: "button"
  }), {
    default: g(() => [x(t.$slots, "default", {}, () => [S(m(i.label), 1)])]),
    _: 3
  }, 16, ["disabled", "class"]);
}
const W = /* @__PURE__ */ N(k, [["render", H]]), D = function(t) {
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
}, h = function(t, e) {
  const i = (t.ownerDocument || document).defaultView;
  setTimeout(
    e,
    D(i == null ? void 0 : i.getComputedStyle(t).animationDuration)
  );
}, L = {
  name: "BtnActivity",
  components: {
    ActivityIndicator: w,
    Btn: W
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
      this.$el.classList.add("btn-hide-activity"), h(this.$el, () => {
        this.enable(), this.currentActivity = !1, this.$el.classList.remove("btn-activity", "btn-hide-activity"), this.$emit("hide-activity");
      });
    },
    showActivity() {
      this.currentActivity = !0, this.disable(), h(this.$el, () => {
        this.$el.classList.add("btn-activity"), this.$emit("show-activity");
      });
    },
    toggle() {
      this.currentActivity ? this.hideActivity() : this.showActivity();
    }
  }
};
export {
  L as BtnActivity
};
