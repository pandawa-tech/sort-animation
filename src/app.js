const { getBubbleSortAnimations, getHeapSortAnimations, getInsertionSortAnimations, getIntroSortAnimations, getMergeSortAnimations, getQuickSortAnimations } = require("./index");

const boring = Array.from({length: 100}, () => Math.floor(Math.random() * 100));;
const fun = getInsertionSortAnimations(boring)

fun