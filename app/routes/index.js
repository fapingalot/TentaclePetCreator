import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [
            {
                "name": "Default Perks",
                "description": [
                    "These are free perks that come standard with every Tentacle Pet."
                ],
        
        
                "selections": -1,
                "default": [0, 1, 2, 3, 4],
        
                "values": [
                    {
                        "title": "Self Cleaning",
                        "image": "/tentacle_pictures/self_cleaning.png",
                        "cost": 0,
                        "description": [
                            "A Tentacle Pet's slimy body will prevent it from gathering any germs or detritus from touching the ground.",
                            "Additionally, its cum will automatically evaporate aftera while. You can adjust how long it lingers."
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Loyal",
                        "image": "/tentacle_pictures/loyal.png",
                        "cost": 0,
                        "description": [
                            "Your pet will obey every order you give it, so long as it understands, and you keep it happy.",
                            "Your pet will never attempt to harm a living being.",
                            "Most pets will not rape anyone. Though if they're starving or unhappy they might do so."
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Sex Diet",
                        "image": "/tentacle_pictures/sex_diet.png",
                        "cost": 0,
                        "description": [
                            "Tentacle Pets feed off of a mixture of their own orgasms, and the orgasms of other beings.",
                            "To keep your pet healthy and happy the both of you should orgasm at least 3 times a day.",
                            "You can mod your pet to cum at the same time you do. "
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Tough & Strong",
                        "image": "/tentacle_pictures/tough_strong.png",
                        "cost": 0,
                        "description": [
                            "Tentacle monsters are notoriously difficult to kill, as they possess incredible durability and regenerative properties. They'll live forever if not killed.",
                            "They are also strong enough to lift and bind humans effortlessly for extremely long periods of time."
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Penis Head",
                        "image": "/tentacle_pictures/penis_head.png",
                        "cost": 0,
                        "description": [
                            "What kind of tentacle monster doesn't have a plethora of penises at its disposal? Dozens of dicks at the ready for penetration and ejaculation.",
                            "Your pet also has access to the PG-13 tapered tentacle. "
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    }
                ]
            },
            {
                "name": "Personal Modifications",
                "description": [
                    "Okay, so one slight problem is that your body is woefully inadequate to handle hot tentacle sex. So with your permission, we'll drug you, teleport you to our genetics lab, and modify your body to be far better than before. Which will provide you with these free perks."
                ],
        
                "selections": -1,
                "default": [0, 1, 2, 3, 4],
        
                "values": [
                    {
                        "title": "Youthful",
                        "image": "/tentacle_pictures/youthful.png",
                        "cost": 0,
                        "description": [
                            "Stage one of improving your body is fixing all of the inefficient crap. Your body now reconstructs cells perfectly.",
                            "Or in other words, eternal youth, pretty sweet huh?",
                            "On top of that, your body will now maintain its shape. So exercise is 100% unnecessary."
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Total Makeover",
                        "image": "/tentacle_pictures/total_makeover.png",
                        "cost": 0,
                        "description": [
                            "Don't have the ‘equipment’ you want? Easy fix. We can modify your gender however you wish. Male, female, both?",
                            "While we're at it, we can completely re-do your appearance however you want, even add on some wierd parts."
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Endurance",
                        "image": "/tentacle_pictures/endurance.png",
                        "cost": 0,
                        "description": [
                            "Your body is now much more durable. So you can enjoy hours upon hours of tentacle sex without injury or exhaustion.",
                            "Also removes refractory periods, and period periods. Because fuck those honestly.",
                            ""
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Stretchy ",
                        "image": "/tentacle_pictures/stretchy.png",
                        "cost": 0,
                        "description": [
                            "You aren't made of rubber, but you might as well be.",
                            "Your orifices can be painlessly stretched and inflated to insane degrees and will always return to optimal tightness.",
                            "We can also apply this to ‘unconventional’ orifices if you really want us to."
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    },
                    {
                        "title": "Wasteless ",
                        "image": "/tentacle_pictures/wasteless.png",
                        "cost": 0,
                        "description": [
                            "Your body is super efficient at digesting food, so you no longer produce any waste. These holes are solely for fucking!",
                            "Allows you to toggle your fertility if you ever fuck another person.",
                            "Yes I included having children in the 'waste’ category."
                        ],
                        "defaultSelected": true,
                        "canChange": false
                    }
                ]
            },
            {
                "name": "Intelligence",
                "description": [
                    "How smart is your pet? Choose one option."
                ],
        
                "selections": 1,
                "default": [2],
        
                "values": [
                    {
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
            }
        ];
    }
});
