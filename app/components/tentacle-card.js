import Component from '@ember/component';
import { A } from '@ember/array';
import { computed, /*get*/ } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { inject as service } from '@ember/service';

export default Component.extend({
    imageService: service('responsive-image'),
    tagName : "div",
    classNames: ["tentacle-card", "mdc-card"],

    title: "Monster",
    image: "/tentacle_pictures/default.png",
    description: A(["No this is bla bla bla"]),
    cost: 0,
    canChange: false,

    isSelected: false,
    isExpanded: false,

    didInsertElement(){
        this.$(".tentacle-description").slideUp();
    },
    actions: {
        toggleSelected(){
            if(this.canChange) {
                this.set("isSelected", !this.isSelected);
            }
        },
        toogleExpanded() {
            if(this.isExpanded){
                this.$(".tentacle-description").slideUp(500);
            }else {
                this.$(".tentacle-description").slideDown();
            }

            this.set("isExpanded", !this.isExpanded);
        }
    },

    imageStyle: computed('image', function() {
        let spl = this.image.split("/");
        return htmlSafe(`background-image: url('${this.imageService.getImageBySize(spl[spl.length -1], 300)}');`);
    }),
});