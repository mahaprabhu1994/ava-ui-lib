import { h } from "@stencil/core";
export class AvaButton {
    /** Button label text */
    label;
    render() {
        return (h("button", { key: 'ac5dbeb3da113453f8f86f2f409409742716e1a1', class: "ava-btn", type: "button" }, h("slot", { key: 'd4f3e1aa78e0585b1c5b4e8e481e870450abb12e', name: "icon" }), h("span", { key: '3276e10d6b14f3a8cee2731ef882b2fe12f72c23' }, this.label)));
    }
    static get is() { return "ava-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ava-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ava-button.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Button label text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ava-button.js.map
