let idx = 3;
let sample = [1, 2, 3, 4, 5];

// 1. Custom .at() implementation
const fetchByIndex = (list, pos) => {
  const size = list.length;
  let realPos = pos < 0 ? size + pos : pos;

  return realPos >= 0 && realPos < size ? list[realPos] : undefined;
};
// console.log(fetchByIndex(sample, idx));

// 2. Custom array length calculator
function countElements(arr) {
  let i = 0;
  while (arr[i] !== undefined) {
    i++;
  }
  return i;
}
// console.log(countElements(sample));

// 3. Simulate push (add at end)
const appendToArray = (data, val) => {
  let len = 0;
  while (data[len] !== undefined) len++;

  data[len] = val;
  return len + 1;
};
// console.log(appendToArray(sample, 99));

// 4. Custom pop (remove last)
function removeLast(arr) {
  if (arr.length === 0) return undefined;

  let end = 0;
  while (arr[end] !== undefined) end++;

  const out = arr[end - 1];
  delete arr[end - 1];
  return out;
}
// console.log(removeLast(sample));

// 5. Custom shift (remove first)
function removeFirst(arr) {
  if (arr.length === 0) return undefined;

  const removed = arr[0];
  for (let i = 1; arr[i] !== undefined; i++) {
    arr[i - 1] = arr[i];
  }
  delete arr[arr.length - 1];
  return removed;
}
// console.log(removeFirst(sample));

// 6. Custom unshift (add at beginning)
function insertFirst(arr, val) {
  let len = arr.length;
  for (let i = len; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}
// console.log(insertFirst(sample, 7));

// 7. Manual filter()
const filterArray = (list, cb) => {
  const output = [];
  let i = 0,
    j = 0;

  for (; list[i] !== undefined; i++) {
    if (cb(list[i], i, list)) {
      output[j++] = list[i];
    }
  }
  return output;
};
// console.log(filterArray(sample, val => val % 2 === 1));

// 8. Manual map()
function mapOverArray(arr, transformFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = transformFn(arr[i], i, arr);
  }
  return result;
}
// console.log(mapOverArray(sample, x => x * 10));

// 9. Manual find()
function findFirst(arr, checker) {
  for (let i = 0; i < arr.length; i++) {
    if (checker(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}
// console.log(findFirst(sample, val => val > 3));

// 10. Manual forEach()
function executeEach(arr, action) {
  for (let i = 0; arr[i] !== undefined; i++) {
    action(arr[i], i, arr);
  }
}
// executeEach(sample, item => console.log(item * item));
