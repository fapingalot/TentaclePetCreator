import Component from '@ember/component';
import {htmlSafe} from '@ember/template';
import {computed} from '@ember/object';

export default Component.extend({
    tagName : "div",
    classNames: ["tentacle-card", "mdc-card"],
    classNameBindings: ["isSelected:selected"],

    title: "Monster",
    image: "tentacle_pictures/default.png",
    description: ["some text"],
    cost: 0,

    isSelected: false,

    click() {
        this.set("isSelected", !this.isSelected);
    },

    imageStyle: computed('image', function(){
        return htmlSafe("background-image: url('"+this.image+"');");
    }),
    descriptionAttr: computed('description', function(){
        let desc = "";
        for (let i = 0; i < this.description.length; i++) {
            desc+= htmlSafe(this.description[i]) + "\n";
        }
        return desc;
    }),
});
