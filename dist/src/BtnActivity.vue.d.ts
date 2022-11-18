declare const _sfc_main: {
    name: string;
    components: {
        ActivityIndicator: {
            props: {
                absolute: BooleanConstructor;
                center: BooleanConstructor;
                label: StringConstructor;
                size: {
                    type: StringConstructor;
                    default: string;
                };
                registry: {
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: StringConstructor;
                    required: boolean;
                };
                height: (StringConstructor | NumberConstructor)[];
                maxHeight: (StringConstructor | NumberConstructor)[];
                minHeight: (StringConstructor | NumberConstructor)[];
                width: (StringConstructor | NumberConstructor)[];
                maxWidth: (StringConstructor | NumberConstructor)[];
                minWidth: (StringConstructor | NumberConstructor)[];
            };
            data: () => {
                is: null;
            };
            setup(props: any): {
                registryInstance: unknown;
            };
            computed: {
                classes(): {
                    [x: number]: boolean;
                    'activity-indicator-center': any;
                    'activity-indicator-absolute': any;
                };
                style(): {
                    width: string | undefined;
                    maxWidth: string | undefined;
                    minWidth: string | undefined;
                    height: string | undefined;
                    maxHeight: string | undefined;
                    minHeight: string | undefined;
                };
            };
            mounted(): Promise<void>;
            methods: {
                component(): Promise<any>;
            };
        };
        Btn: {
            name: string;
            mixins: ({
                props: {
                    componentPrefix: StringConstructor;
                    size: StringConstructor;
                    sizePrefix: StringConstructor;
                };
                computed: {
                    sizeableClassPrefix(): string | undefined;
                    hasSizeablePrefix(): boolean;
                    sizeableClass(): string;
                };
            } | {
                props: {
                    componentPrefix: StringConstructor;
                    variant: StringConstructor;
                    variantPrefix: StringConstructor;
                };
                computed: {
                    variantClassPrefix(): string | undefined;
                    hasVariantPrefix(): boolean;
                    variantClass(): string;
                };
            })[];
            props: {
                active: BooleanConstructor; /**
                 * Make the button appear with the active state.
                 *
                 * @property {Boolean}
                 */
                block: BooleanConstructor;
                componentPrefix: {
                    type: StringConstructor;
                    default: string;
                };
                disabled: BooleanConstructor;
                label: StringConstructor;
                outline: BooleanConstructor;
                tag: StringConstructor;
                variant: {
                    type: StringConstructor;
                    default: string;
                };
            };
            computed: {
                classes(): string[];
                component(): string;
                variantClassPrefix(): string;
            };
        };
    };
    props: {
        /**
         * Make the button appear with the active state.
         *
         * @property {Boolean}
         */
        active: BooleanConstructor;
        /**
         * Show the activity indicator inside the button.
         *
         * @property {Boolean}
         */
        activity: BooleanConstructor;
        /**
         * Display the button as block width.
         *
         * @property {Boolean}
         */
        block: BooleanConstructor;
        /**
         * Disable the button.
         *
         * @property {Boolean}
         */
        disabled: BooleanConstructor;
        /**
         * The type of activity indicator inside the button.
         *
         * @property {String}
         */
        indicator: {
            type: (ObjectConstructor | StringConstructor)[];
            default: string;
        };
        /**
         * The button label.
         *
         * @property {String}
         */
        label: StringConstructor;
        /**
         * The orientation of the activity button inside the button.
         *
         * @property {String}
         */
        orientation: {
            type: StringConstructor;
            default: string;
        };
        /**
         * The size of the button.
         *
         * @property {String}
         */
        size: {
            type: StringConstructor;
            default: string;
        };
        /**
         * The HTML tag.
         *
         * @property {String}
         */
        tag: StringConstructor;
        /**
         * The variant of the button.
         *
         * @property {String}
         */
        variant: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): {
        currentActivity: any;
    };
    computed: {
        /**
         * An object of classes to append to the button.
         *
         * @return void
         */
        classes(): {
            [x: string]: any;
            disabled: any;
            active: any;
            "btn-activity": any;
        };
        indicatorProps(): any;
    };
    watch: {
        activity(value: boolean): void;
    };
    mounted(): void;
    methods: {
        /**
         * Disable the button.
         *
         * @return void
         */
        disable(): void;
        /**
         * Enable the button.
         *
         * @return void
         */
        enable(): void;
        /**
         * Hide the activity indicator inside the button.
         *
         * @return void
         */
        hideActivity(): void;
        /**
         * Show the activity indicator inside the button.
         *
         * @return void
         */
        showActivity(): void;
        /**
         * Show the activity indicator inside the button.
         *
         * @return void
         */
        toggle(): void;
    };
};
export default _sfc_main;
