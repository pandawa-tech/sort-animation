const { heapSort } = require("./heapSort");
const { insertionSort } = require("./insertionSort");
const { partition } = require("./quickSort");

function getIntroSortAnimations(array) {
  const animations = [];
  if (array.length <= 0) return array;
  introSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function introSortHelper(items, left, right, animations) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right, animations);
    let leftArr = items.slice(0,index)
    let rightArr = items.slice(index)
    let extraIndex = 0;
    if (left < index - 1) {
      if (leftArr.length <= 10) {
        insertionSort(leftArr, extraIndex, animations)
      } else {
        heapSort(leftArr, extraIndex, animations)
      }
    }
    if (index < right) {
      if (rightArr.length <= 10) {
        insertionSort(rightArr, extraIndex+=index, animations)
      } else {
        heapSort(rightArr, extraIndex+=index, animations)
      }
    }
  }
  return items;
}

module.exports = {
  getIntroSortAnimations
};