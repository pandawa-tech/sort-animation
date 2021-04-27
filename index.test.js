const {
    getBubbleSortAnimations,
    getHeapSortAnimations,
    getInsertionSortAnimations,
    getIntroSortAnimations,
    getMergeSortAnimations,
    getQuickSortAnimations
} = require("pandawa-sort-animation");
const assert = require('assert').strict;


describe("extreme test", function() {
    let data = [];
    let data2 = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
    
    afterEach(() => {
        data = [];
        data2 = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
    })

    it("[Bubble Sort]       should be able to return itself", function() {
        let res = getBubbleSortAnimations(data)
        assert.strictEqual(res.length, 0)
        let res2 = getBubbleSortAnimations(data2)
        assert.strictEqual(res2.length > 0, true)
    });
    it("[Heap Sort]         should be able to return itself", function() {
        let res = getHeapSortAnimations(data);
        assert.strictEqual(res.length, 0)
        let res2 = getHeapSortAnimations(data2);
        assert.strictEqual(res2.length > 0, true)
    });
    it("[Insertion Sort]    should be able to return itself", function() {
        let res = getInsertionSortAnimations(data);
        assert.strictEqual(res.length, 0)
        let res2 = getInsertionSortAnimations(data2);
        assert.strictEqual(res2.length > 0, true)
    });
    it("[Intro Sort]        should be able to return itself", function() {
        let res = getIntroSortAnimations(data);
        assert.strictEqual(res.length, 0)
        let res2 = getIntroSortAnimations(data2);
        assert.strictEqual(res2.length > 0, true)
        res = getIntroSortAnimations(Array.from({length: 11}, () => Math.floor(Math.random() * 11)));
        assert.strictEqual(res.length > 0, true)
    });
    it("[Merge Sort]        should be able to return itself", function() {
        let res = getMergeSortAnimations(data);
        assert.strictEqual(res.length, 0)
        let res2 = getMergeSortAnimations(data2);
        assert.strictEqual(res2.length > 0, true)
    });
    it("[Quick Sort]        should be able to return itself", function() {
        let res = getQuickSortAnimations(data);
        assert.strictEqual(res.length, 0)
        let res2 = getQuickSortAnimations(data2);
        assert.strictEqual(res2.length > 0, true)
    });
});