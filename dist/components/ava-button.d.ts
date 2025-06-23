import type { Components, JSX } from "../types/components";

interface AvaButton extends Components.AvaButton, HTMLElement {}
export const AvaButton: {
    prototype: AvaButton;
    new (): AvaButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
