import Route from '@ember/routing/route';

import { /*computed,*/ /*get*/ } from '@ember/object';
import { A } from '@ember/array';



export default Route.extend({
    init(){
        this._super(...arguments);
        this.set("selected", A([true, true, true, true]));
    },



    model(params) {
        alert(params.id);
        return {
            "name": "Intelligence",
            "description": [
                "How smart is your pet? Choose one option."
            ],
    
            "selections": 1,
            "default": [2],
    
            "values": [
                {
                    id: 0,
                    "title": "Tentacle Monster",
                    "image": "/tentacle_pictures/tentacle_monster.png",
                    "cost": -8,
                    "description": [
                        "Some pets retain the title of monster, and refuse any order.",
                        "This pet will relentlessly fuck anyone it can grab.",
                        "After 5 hours of sex, built in tranquilizers will knock it out for the remainder of the day."
                    ],
                    "defaultSelected": false,
                    "canChange": true
                },
                {
                    id: 1,
                    "title": "Instinctive",
                    "image": "/tentacle_pictures/instinctive.png",
                    "cost": -4,
                    "description": [
                        "This pet is driven by instinct. It'll initiate sex whenever it gets hungry, regardless of consent. It can understand the most basic orders, such as 'follow’ or 'fuck’.",
                        "While having sex, it'll do whatever it wants with whatever perks you have enabled."
                    ],
                    "defaultSelected": false,
                    "canChange": true
                },
                {
                    id: 2,
                    "title": "Standard",
                    "image": "/tentacle_pictures/standard.png",
                    "cost": 0,
                    "description": [
                        "The standard intelligence for our pets. Your pet will only have sex with consenting partners.",
                        "Standard pets can understand basic orders and will do what you tell them to during sex."
                    ],
                    "defaultSelected": true,
                    "canChange": true
                },
                {
                    id: 3,
                    "title": "Smart",
                    "image": "/tentacle_pictures/smart.png",
                    "cost": 4,
                    "description": [
                        "Smart pets are capable of understanding and performing complicated orders.",
                        "At this stage they can do menial chores and learn new things easily. They can even read."
                    ],
                    "defaultSelected": false,
                    "canChange": true
                },
                {
                    id: 4,
                    "title": "Sapient",
                    "image": "/tentacle_pictures/sapient.png",
                    "cost": 8,
                    "description": [
                        "A pet that can truly think for itself. It's still biologically programmed to serve you without fail.",
                        "Its mental capabilities are similar to a humans. You can decide how far along its mental development is. "
                    ],
                    "defaultSelected": false,
                    "canChange": true
                }
            ]
        };
    }
});