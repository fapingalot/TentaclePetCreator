import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    name: attr('string'),
    cost: attr('number'),

    // elements: DS.hasMany('tentacle-element'),
});
