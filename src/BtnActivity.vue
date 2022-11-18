<template>
	<btn
		:active="active"
		:block="block"
		:disabled="disabled"
		:size="size"
		:tag="tag"
		:variant="variant"
		:class="classes"
		@click="!disabled && $emit('click', $event, {
			disable,
			enable,
			toggle,
			showActivity,
			hideActivity,
		})"
		v-bind="Object.assign({}, $attrs, { onClick: undefined })">
		<slot>{{ label }}</slot>
		<activity-indicator v-bind="indicatorProps" />
	</btn>
</template>

<script lang="ts">
import { ActivityIndicator } from "@vue-interface/activity-indicator";
import { Btn } from "@vue-interface/btn";
import { defineComponent } from "vue";

const convertAnimationDelayToInt = function (delay: any) {
	const num = parseFloat(delay || 0);
	const matches = delay && delay.match(/m?s/);
	const unit = matches ? matches[0] : false;

	let milliseconds;

	switch (unit) {
		case "s": // seconds
			milliseconds = num * 1000;
			break;
		case "ms":
		default:
			milliseconds = num;
			break;
	}

	return milliseconds || 0;
};

const animated = function (el: HTMLElement, callback: Function) {
	const defaultView = (el.ownerDocument || document).defaultView;

	setTimeout(
		callback,
		convertAnimationDelayToInt(
			defaultView?.getComputedStyle(el).animationDuration
		)
	);
};

export default defineComponent({
	inheritAttrs: false,

	components: {
		ActivityIndicator,
		Btn,
	},

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
			default: "spinner",
		},

		/**
		 * The button label.
		 */
		label: String,

		/**
		 * The orientation of the activity button inside the button.
		 */
		orientation: {
			type: String,
			default: "right",
		},

		/**
		 * The size of the button.
		 */
		size: {
			type: String,
			default: "md",
		},

		/**
		 * The HTML tag.
		 */
		tag: String,

		/**
		 * The variant of the button.
		 */
		variant: {
			type: String,
			default: "primary",
		},
	},

	data() {
		return {
			currentActivity: this.activity,
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
				[`btn-activity-${this.orientation.replace("btn-activity-", "")}`]:
					!!this.orientation,
				[`'btn-activity-indicator-${this.indicatorProps.type.replace(
					"btn-activity-indicator-",
					""
				)}`]: !!this.indicatorProps.type,
			};
		},

		indicatorProps() {
			return Object.assign(
				{
					type: "spinner",
				},
				(typeof this.indicator === "string"
					? {
						type: this.indicator,
					}
					: this.indicator) || {}
			);
		},
	},

	watch: {
		activity(value: boolean) {
			if (value) {
				this.showActivity();
			} else {
				this.hideActivity();
			}
		},
	},

	mounted() {
		if (this.activity) {
			this.showActivity();
		}
	},

	methods: {
		/**
		 * Disable the button.
		 */
		disable(): void {
			this.$el.disabled = true;
			this.$el.classList.add("disabled");
		},

		/**
		 * Enable the button.
		 */
		enable(): void {
			this.$el.disabled = false;
			this.$el.classList.remove("disabled");
		},

		/**
		 * Hide the activity indicator inside the button.
		 */
		hideActivity(): void {
			this.$el.classList.add("btn-hide-activity");

			animated(this.$el, () => {
				this.enable();
				this.currentActivity = false;
				this.$el.classList.remove("btn-activity", "btn-hide-activity");
				this.$emit("hide-activity");
			});
		},

		/**
		 * Show the activity indicator inside the button.
		 */
		showActivity(): void {
			this.currentActivity = true;
			this.disable();

			animated(this.$el, () => {
				this.$el.classList.add("btn-activity");
				this.$emit("show-activity");
			});
		},

		/**
		 * Show the activity indicator inside the button.
		 */
		toggle(): void {
			if (!this.currentActivity) {
				this.showActivity();
			} else {
				this.hideActivity();
			}
		},
	},
});
</script>

<style>
@keyframes btn-activity-in {

	0%,
	100% {
		transform: scale(1);
	}

	30% {
		transform: scale(0.98);
	}
}

@keyframes btn-activity-out {

	0%,
	100% {
		transform: scale(1);
	}

	70% {
		transform: scale(0.98);
	}
}

.btn-activity-top,
.btn.btn-activity-top,
.btn-activity-bottom,
.btn.btn-activity-bottom,
.btn-activity-left,
.btn.btn-activity-left,
.btn-activity-right,
.btn.btn-activity-right {
	display: inline-flex;
	position: relative;
	transition: all calc(333ms / 2) ease-in;
}

.btn-activity-top .activity-indicator,
.btn-activity-bottom .activity-indicator,
.btn-activity-left .activity-indicator,
.btn-activity-right .activity-indicator {
	opacity: 0;
	position: absolute;
	visibility: hidden;
	transition: opacity 333ms ease-in;
}

.btn-activity-top,
.btn-activity-bottom {
	flex-direction: column;
	align-items: center;
}

.btn-activity-top .activity-indicator,
.btn-activity-bottom .activity-indicator {
	margin-left: auto;
	margin-right: auto;
}

.btn-activity-top {
	flex-direction: column-reverse;
}

.btn-activity-top .activity-indicator {
	padding-bottom: 1em;
}

.btn-activity-bottom .activity-indicator {
	padding-top: 1em;
}

.btn-activity-left,
.btn-activity-right {
	align-items: center;
	justify-content: center;
}

.btn-activity-left {
	flex-direction: row-reverse;
}

.btn-activity-left .activity-indicator {
	padding-right: 1em;
}

.btn-activity-right .activity-indicator {
	padding-left: 1em;
}

.btn-activity:not(.btn-link) {
	animation: btn-activity-in 333ms;
}

.btn-hide-activity:not(.btn-link) {
	animation: btn-activity-out 333ms;
}

.btn-activity.btn-hide-activity .activity-indicator {
	opacity: 0;
}

.btn-activity .activity-indicator {
	opacity: 1;
	visibility: visible;
	position: relative;
	font-size: 0.55em;
}
</style>
