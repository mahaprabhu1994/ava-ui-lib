import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'ava-button',
    styleUrl: 'ava-button.css',
    shadow: true,
})
export class AvaButton {
    /** Button label text */
    @Prop() label: string;

    render() {
        return (
            <button class="ava-btn" type="button">
                <slot name="icon"></slot>
                <span>{this.label}</span>
            </button>
        );
    }
}
