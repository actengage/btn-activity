<template>
    <button :type="type" class="btn" :class="classes" @click="onClick">
        <i v-if="icon" :class="icon" /> {{ label }}
        <slot />
        <activity-indicator v-bind="indicatorProps" />
    </button>
</template>

<script>
import { isString } from '@vue-interface/utils';
import { ActivityIndicator, register } from '@vue-interface/activity-indicator';
import Dots from '@vue-interface/activity-indicator/src/types/Dots';
import Spinner from '@vue-interface/activity-indicator/src/types/Spinner';

register({
    dots: Dots,
    spinner: Spinner
});

const convertAnimationDelayToInt = function(delay) {
    const num = parseFloat(delay, 10);
    const matches = delay.match(/m?s/);
    const unit = matches ? matches[0] : false;

    let milliseconds;

    switch (unit) {
    case 's': // seconds
        milliseconds = num * 1000;
        break;
    case 'ms':
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

export default {

    name: 'BtnActivity',

    components: {
        ActivityIndicator
    },

    props: {

        /**
         * Make the button appear with the active state.
         *
         * @property {Boolean}
         */
        active: Boolean,

        /**
         * Show the activity indicator inside the button.
         *
         * @property {Boolean}
         */
        activity: Boolean,

        /**
         * Display the button as block width.
         *
         * @property {Boolean}
         */
        block: Boolean,

        /**
         * Make the button appear with the disabled state.
         *
         * @property {Boolean}
         */
        disabled: Boolean,

        /**
         * The button label. If not passed as a property, label must be passed
         * inside the element's html.
         *
         * @property {String}
         */
        label: String,

        /**
         * The button icon
         *
         * @property {String}
         */
        icon: String,

        /**
         * The `type` attribute for the button element.
         *
         * @property {String}
         */
        type: String,

        /**
         * The size of the button.
         *
         * @property {String}
         */
        size: {
            type: String,
            default: 'md'
        },

        /**
         * The variant of the button.
         *
         * @property {String}
         */
        variant: {
            type: String,
            default: 'primary'
        },

        /**
         * The type of activity indicator inside the button.
         *
         * @property {String}
         */
        indicator: {
            type: [Object, String],
            default: 'spinner'
        },

        /**
         * The orientation of the activity button inside the button.
         *
         * @property {String}
         */
        orientation: {
            type: String,
            default: 'right'
        }
    },

    computed: {

        /**
         * An object of classes to append to the button.
         *
         * @return void
         */
        classes() {
            const classes = {
                'disabled': this.disabled,
                'active': this.active,
                'btn-block': this.block,
                'btn-activity': this.activity
            };

            classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
            classes['btn-' + this.variant.replace('btn-', '')] = !!this.variant;
            classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
            classes['btn-activity-indicator-' + this.indicatorProps.type.replace('btn-activity-indicator-', '')] = !!this.indicatorProps.type;

            return classes;
        },

        indicatorProps() {
            return Object.assign({
                type: 'spinner'
            }, (isString(this.indicator) ? {
                type: this.indicator
            } : this.indicator) || {});
        }

    },

    watch: {

        activity(value) {
            if(value) {
                this.showActivity();
            }
            else {
                this.hideActivity();
            }
        }

    },

    methods: {

        /**
         * Disable the button.
         *
         * @return void
         */
        disable() {
            this.$el.disabled = true;
        },

        /**
         * Enable the button.
         *
         * @return void
         */
        enable() {
            this.$el.disabled = false;
        },

        /**
         * Show the activity indicator inside the button.
         *
         * @return void
         */
        showActivity() {
            this.disable();

            animated(this.$el, () => {
                this.$el.classList.add('btn-activity');
                this.$emit('show-activity');
            });
        },

        /**
         * Hide the activity indicator inside the button.
         *
         * @return void
         */
        hideActivity() {
            this.$el.classList.add('btn-hide-activity');

            animated(this.$el, () => {
                this.enable();
                this.$el.classList.remove('btn-activity', 'btn-hide-activity');
                this.$emit('hide-activity');
            });
        },

        /**
         * The click callback function
         *
         * @return void
         */
        onClick(event) {
            if(!this.disabled) {
                this.$emit('click', event);
            }
            else {
                event.preventDefault();
            }
        }

    }

};
</script>

<style>
@keyframes btn-activity-in {
    0%, 100% {
        transform: scale(1);
    } 30% {
        transform: scale(.98);
    }
}

@keyframes btn-activity-out {
    0%, 100% {
        transform: scale(1);
    } 70% {
        transform: scale(.98);
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
    font-size: .55em;
}
</style>
