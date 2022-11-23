declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * Make the button appear with the active state.
     */
    active: BooleanConstructor;
    /**
     * Show the activity indicator inside the button.
     */
    activity: BooleanConstructor;
    /**
     * Display the button as block width.
     */
    block: BooleanConstructor;
    /**
     * Disable the button.
     */
    disabled: BooleanConstructor;
    /**
     * The type of activity indicator inside the button.
     */
    indicator: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    /**
     * The button label.
     */
    label: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The orientation of the activity button inside the button.
     */
    orientation: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The size of the button.
     */
    size: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The HTML tag.
     */
    tag: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The variant of the button.
     */
    variant: {
        type: StringConstructor;
        default: string;
    };
}, unknown, {
    currentActivity: boolean;
}, {
    /**
     * An object of classes to append to the button.
     */
    classes(): {
        [x: string]: any;
        disabled: any;
        active: any;
        'btn-activity': any;
    };
    indicatorProps(): any;
}, {
    /**
     * Disable the button.
     */
    disable(): void;
    /**
     * Enable the button.
     */
    enable(): void;
    /**
     * Hide the activity indicator inside the button.
     */
    hideActivity(): void;
    /**
     * Show the activity indicator inside the button.
     */
    showActivity(): void;
    /**
     * Show the activity indicator inside the button.
     */
    toggle(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "hide-activity" | "show-activity")[], "click" | "hide-activity" | "show-activity", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Make the button appear with the active state.
     */
    active: BooleanConstructor;
    /**
     * Show the activity indicator inside the button.
     */
    activity: BooleanConstructor;
    /**
     * Display the button as block width.
     */
    block: BooleanConstructor;
    /**
     * Disable the button.
     */
    disabled: BooleanConstructor;
    /**
     * The type of activity indicator inside the button.
     */
    indicator: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    /**
     * The button label.
     */
    label: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The orientation of the activity button inside the button.
     */
    orientation: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The size of the button.
     */
    size: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The HTML tag.
     */
    tag: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The variant of the button.
     */
    variant: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onHide-activity"?: ((...args: any[]) => any) | undefined;
    "onShow-activity"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    size: string;
    active: boolean;
    block: boolean;
    disabled: boolean;
    tag: string;
    variant: string;
    activity: boolean;
    indicator: string | Record<string, any>;
    orientation: string;
}>;
export default _sfc_main;
