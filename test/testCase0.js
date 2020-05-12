const assert = require('assert');
const { performance } = require('perf_hooks');
const { commonChild } = require('../src/index');
let sumTime = 0;
// noinspection ES6ModulesDependencies
describe('Test case 0 | Basic', function() {

  it('1) common characters "HARRY", "SALLY" 2', function() {
    let start = performance.now()
    const result = commonChild("HARRY", "SALLY");
    let end = performance.now()
    sumTime += end - start
    assert.strictEqual(result, 2);
  });

  it('2) common characters "AA", "BB" 0', function() {
    let start = performance.now()
    const result = commonChild("AA", "BB")
    let end = performance.now()
    sumTime += end - start;
    assert.strictEqual(result, 0);
  });
  //
  it('3) common characters "SHINCHAN", "NOHARAAA" 3', function() {
    let start = performance.now()
    const result = commonChild("SHINCHAN", "NOHARAAA")
    let end = performance.now()
    sumTime += end - start;
    assert.strictEqual(result, 3);
  });

  it('4) common characters "ABCDEF", "FBDAMN" 0', function() {
    let start = performance.now()
    const result = commonChild("ABCDEF", "FBDAMN")
    let end = performance.now()
    sumTime += end - start;
    assert.strictEqual(result, 2);
  });

  after(function() {
    console.log('Test case 0 | Basic = ' + sumTime)
  });
});

