function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign22(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function lowerCase$1(str) {
  return str.toLowerCase();
}
var DEFAULT_SPLIT_REGEXP$1 = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP$1 = /[^A-Z0-9]+/gi;
function noCase$1(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP$1 : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP$1 : _b, _c = options.transform, transform = _c === void 0 ? lowerCase$1 : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace$1(replace$1(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0") {
    start++;
  }
  while (result.charAt(end - 1) === "\0") {
    end--;
  }
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace$1(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}
function dotCase$1(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase$1(input, _assign({
    delimiter: "."
  }, options));
}
function paramCase$1(input, options) {
  if (options === void 0) {
    options = {};
  }
  return dotCase$1(input, _assign({
    delimiter: "-"
  }, options));
}
var ComponentRegistry = /* @__PURE__ */ function() {
  function ComponentRegistry2() {
    var _this = this;
    var components = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, ComponentRegistry2);
    this.components = {};
    Object.entries(components).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      _this.register(key, value);
    });
  }
  _createClass(ComponentRegistry2, [{
    key: "get",
    value: function get(name) {
      var match = this.components[name = paramCase$1(name)];
      if (match) {
        return match;
      }
      throw new Error('"'.concat(name, '" has not been registered yet!'));
    }
  }, {
    key: "register",
    value: function register(name, value) {
      var _this2 = this;
      if (_typeof(name) === "object") {
        Object.entries(name).forEach(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), name2 = _ref4[0], module = _ref4[1];
          _this2.register(paramCase$1(name2), module);
        });
        return this;
      }
      this.components[paramCase$1(name)] = value;
      return this;
    }
  }, {
    key: "remove",
    value: function remove(name) {
      delete this.components[paramCase$1(name)];
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.components = {};
      return this;
    }
  }]);
  return ComponentRegistry2;
}();
function factory() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return _construct(ComponentRegistry, args);
}
const registry = factory();
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "activity-indicator", class: _vm.classes, style: _vm.style }, [_c("div", { staticClass: "activity-indicator-content" }, [_c(_vm.component, { tag: "component", staticClass: "mx-auto" }), _vm.label ? _c("div", { staticClass: "activity-indicator-label" }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e()], 1)]);
};
var staticRenderFns$2 = [];
var ActivityIndicator_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
function unit(value, uom = "px") {
  return value !== null && value !== void 0 && value !== false && isFinite(value) ? `${value}${uom}` : value;
}
const __vue2_script$2 = {
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
      type: ComponentRegistry,
      default() {
        return registry;
      }
    },
    type: {
      type: String,
      required: true
    },
    height: [String, Number],
    maxHeight: [String, Number],
    minHeight: [String, Number],
    width: [String, Number],
    maxWidth: [String, Number],
    minWidth: [String, Number]
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
        width: unit(this.width),
        maxWidth: unit(this.maxWidth),
        minWidth: unit(this.minWidth),
        height: unit(this.height),
        maxHeight: unit(this.maxHeight),
        minHeight: unit(this.minHeight)
      };
    },
    component() {
      return () => {
        const component = registry.get(this.type);
        if (component instanceof Promise) {
          return component;
        }
        if (typeof component === "function") {
          return component();
        }
        return Promise.resolve(component);
      };
    }
  }
};
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$2, staticRenderFns$2, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var ActivityIndicator = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var Chase_vue_vue_type_style_index_0_lang = "";
var CircleFade_vue_vue_type_style_index_0_lang = "";
var CircleOrbit_vue_vue_type_style_index_0_lang = "";
var CircleTrail_vue_vue_type_style_index_0_lang = "";
var Dots_vue_vue_type_style_index_0_lang = "";
var DoublePulse_vue_vue_type_style_index_0_lang = "";
var Facebook_vue_vue_type_style_index_0_lang = "";
var Grid_vue_vue_type_style_index_0_lang = "";
var Pulse_vue_vue_type_style_index_0_lang = "";
var Spinner_vue_vue_type_style_index_0_lang = "";
var Spotify_vue_vue_type_style_index_0_lang = "";
var Square_vue_vue_type_style_index_0_lang = "";
var SquareFold_vue_vue_type_style_index_0_lang = "";
var SquareOrbit_vue_vue_type_style_index_0_lang = "";
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
var __assign2 = function() {
  __assign2 = Object.assign || function __assign22(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function lowerCase(str) {
  return str.toLowerCase();
}
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}
function dotCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign2({
    delimiter: "."
  }, options));
}
function paramCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return dotCase(input, __assign2({
    delimiter: "-"
  }, options));
}
var Sizeable = {
  props: {
    size: String,
    sizePrefix: {
      type: String,
      default() {
        return this.$options.name;
      }
    }
  },
  computed: {
    sizeableClassPrefix() {
      return this.sizePrefix && paramCase(this.sizePrefix);
    },
    sizeableClass() {
      if (!this.size || !this.sizeableClassPrefix) {
        return "";
      }
      return `${this.sizeableClassPrefix}-${this.size}`;
    }
  }
};
var Variant = {
  props: {
    variant: String,
    variantPrefix: {
      type: String,
      default() {
        return this.$options.name && this.$options.name.toLowerCase();
      }
    }
  },
  computed: {
    variantClassPrefix() {
      return this.variantPrefix;
    },
    variantClass() {
      if (!this.variant || !this.variantClassPrefix) {
        return "";
      }
      return `${this.variantClassPrefix}-${this.variant}`;
    }
  }
};
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.component, { tag: "component", class: _vm.classes, attrs: { "disabled": _vm.disabled, "role": "button" }, on: { "click": function($event) {
    !_vm.disabled && _vm.$emit("click", $event);
  } } }, [_vm._t("default", function() {
    return [_vm._v(_vm._s(_vm.label))];
  })], 2);
};
var staticRenderFns$1 = [];
const __vue2_script$1 = {
  name: "Btn",
  mixins: [
    Sizeable,
    Variant
  ],
  props: {
    active: Boolean,
    block: Boolean,
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
      if (this.tag) {
        return this.tag;
      }
      if (this.$attrs.to) {
        return "router-link";
      }
      if (this.$attrs.href) {
        return "a";
      }
      return "button";
    },
    variantClassPrefix() {
      return this.variantPrefix + (this.outline ? "-outline" : "");
    }
  }
};
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var Btn = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var render = function() {
  var this$1$1 = this;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("btn", { class: _vm.classes, attrs: { "active": _vm.active, "block": _vm.block, "disabled": _vm.disabled, "size": _vm.size, "tag": _vm.tag, "variant": _vm.variant }, on: { "click": function(e) {
    return !_vm.disabled && _vm.$emit("click", e, this$1$1);
  } } }, [_vm._t("default", function() {
    return [_vm._v(_vm._s(_vm.label))];
  }), _c("activity-indicator", _vm._b({}, "activity-indicator", _vm.indicatorProps, false))], 2);
};
var staticRenderFns = [];
var BtnActivity_vue_vue_type_style_index_0_lang = "";
const convertAnimationDelayToInt = function(delay) {
  const num = parseFloat(delay || 0, 10);
  const matches = delay && delay.match(/m?s/);
  const unit2 = matches ? matches[0] : false;
  let milliseconds;
  switch (unit2) {
    case "s":
      milliseconds = num * 1e3;
      break;
    case "ms":
    default:
      milliseconds = num;
      break;
  }
  return milliseconds || 0;
};
const animated = function(el, callback) {
  const defaultView = (el.ownerDocument || document).defaultView;
  setTimeout(() => {
    callback.apply();
  }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};
const __vue2_script = {
  name: "BtnActivity",
  components: {
    ActivityIndicator,
    Btn
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
      const classes = {
        "disabled": this.disabled,
        "active": this.active,
        "btn-activity": this.activity
      };
      classes["btn-activity-" + this.orientation.replace("btn-activity-", "")] = !!this.orientation;
      classes["btn-activity-indicator-" + this.indicatorProps.type.replace("btn-activity-indicator-", "")] = !!this.indicatorProps.type;
      return classes;
    },
    indicatorProps() {
      return Object.assign({
        type: "spinner"
      }, (typeof this.indicator === "string" ? {
        type: this.indicator
      } : this.indicator) || {});
    }
  },
  watch: {
    activity(value) {
      if (value) {
        this.showActivity();
      } else {
        this.hideActivity();
      }
    }
  },
  mounted() {
    if (this.activity) {
      this.showActivity();
    }
  },
  methods: {
    disable() {
      this.$el.disabled = true;
      this.$el.classList.add("disabled");
    },
    enable() {
      this.$el.disabled = false;
      this.$el.classList.remove("disabled");
    },
    hideActivity() {
      this.$el.classList.add("btn-hide-activity");
      animated(this.$el, () => {
        this.enable();
        this.currentActivity = false;
        this.$el.classList.remove("btn-activity", "btn-hide-activity");
        this.$emit("hide-activity");
      });
    },
    showActivity() {
      this.currentActivity = true;
      this.disable();
      animated(this.$el, () => {
        this.$el.classList.add("btn-activity");
        this.$emit("show-activity");
      });
    },
    toggle() {
      if (!this.currentActivity) {
        this.showActivity();
      } else {
        this.hideActivity();
      }
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var BtnActivity = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { BtnActivity };
