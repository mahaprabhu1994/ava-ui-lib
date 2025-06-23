'use strict';

var index = require('./index-Hcx1Vt7G.js');

const avaButtonCss = ":host{display:inline-block}button.ava-btn{display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:6px 18px;font-size:13px;min-width:150px;letter-spacing:1px;border-radius:10px;height:36px;border:1px solid rgb(207, 214, 221);background-color:#ffffff;color:rgba(0, 0, 0, 0.88);cursor:pointer;outline:none;transition:all 0.3s ease}button.ava-btn:hover{background-color:#3C9F93;color:#ffffff;border-color:#3C9F93}::slotted([slot=\"icon\"]){display:flex;align-items:center;justify-content:center}";

const AvaButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Button label text */
    label;
    render() {
        return (index.h("button", { key: 'ac5dbeb3da113453f8f86f2f409409742716e1a1', class: "ava-btn", type: "button" }, index.h("slot", { key: 'd4f3e1aa78e0585b1c5b4e8e481e870450abb12e', name: "icon" }), index.h("span", { key: '3276e10d6b14f3a8cee2731ef882b2fe12f72c23' }, this.label)));
    }
};
AvaButton.style = avaButtonCss;

exports.ava_button = AvaButton;
//# sourceMappingURL=ava-button.entry.cjs.js.map

//# sourceMappingURL=ava-button.cjs.entry.js.map