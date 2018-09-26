import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name: faker.company.companyName,
    cost: faker.random.number,
    // description: new Array(50).fill(null).map(e => faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")),
});
