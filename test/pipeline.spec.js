const expect = require('chai').expect;
const pipeline = require('../src/pipeline').pipeline;

describe('describe pipeline', () => {
    it('pipeline exists', () => {
        expect(pipeline).to.be.ok;
    })
});