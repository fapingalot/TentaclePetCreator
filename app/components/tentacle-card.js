import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
    tagName : "div",
    classNames: ["tentacle-card", "mdc-card", ""],
    classNameBindings: ["isSelected:selected", "canChange:togglable", "canChange:mdc-ripple-surface"],

    // Data
    title: "Monster",
    image: "tentacle_pictures/default.png",
    description: A([]),
    cost: 0,
    canChange: true,

    isSelected: false,
    isExpanded: false,
    
    actions: {
        toggleSelected(){
            if(this.canChange) {
                this.set("isSelected", !this.isSelected);
            }
        },
        toogleExpanded() {
            this.set("isExpanded", !this.isExpanded);
        }
    },
});