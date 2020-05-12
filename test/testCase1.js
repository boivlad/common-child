const assert = require('assert');
const  { performance } = require('perf_hooks');
const { commonChild } = require('../src/index');
let sumTime = 0;
// noinspection ES6ModulesDependencies
describe('Test case 1',function(){

  it('1) common characters "A", "B" 0', function () {
    let start = performance.now()
    const result = commonChild("A", "B")
    let end = performance.now()
    sumTime += end - start
    assert.strictEqual(result, 0);
  });

  it('2) common characters "AA", "BV" 0', function () {
    let start = performance.now()
    const result = commonChild("AA", "BB")
    let end = performance.now()
    sumTime += end - start;
    assert.strictEqual(result, 0);
  });
  //
  it('3) common characters "PPPPPPPPPP", "KKKKKKKKKK" 0', function () {
    let start = performance.now()
    const result = commonChild("PPPPPPPPPP", "KKKKKKKKKK")
    let end = performance.now()
    sumTime += end - start;
    assert.strictEqual(result, 0);
  });

  it('4) common characters "ABCDFI", "ZQWYTH" 0', function () {
    let start = performance.now()
    const result = commonChild("ABCDFI", "ZQWYTH")
    let end = performance.now()
    sumTime += end - start;
    assert.strictEqual(result, 0);
  });

  it('5) common characters "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR", "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV" 0', function () {
    let start = performance.now()
    const result = commonChild("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR", "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV")
    let end = performance.now()
    sumTime += end - start;
    assert.strictEqual(result, 0);
  });

  after(function() {
    console.log('Test case 1 = ' + sumTime)
  });
});




