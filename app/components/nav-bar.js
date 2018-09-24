import Component from '@ember/component';

import {MDCTopAppBar} from '@material/top-app-bar';

export default Component.extend({
    tagName: "header",
    classNames: ["mdc-top-app-bar", "mdc-top-app-bar--fixed"],


    didRender(){
        this._super(...arguments);

        this.topAppBar = new MDCTopAppBar(this.element);
    }
});
