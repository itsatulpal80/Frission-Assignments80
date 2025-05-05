const msg = "Hello Friends";

// 1. sting length
const getStrLength = (text) => {
  let i = 0;
  while (text[i] !== undefined) {
    i++;
  }
  return i;
};
// console.log(getStrLength(msg));

// 2. iterate String.at()
const getAtIndex = (input, pos) => {
  const size = input.length;
  pos = pos < 0 ? size + pos : pos;

  return pos >= 0 && pos < size ? input[pos] : undefined;
};
// console.log(getAtIndex(msg, -4));

// 3. Simulate String.charAt() manually
function fetchCharAt(data, idx) {
  return idx >= 0 && idx < data.length ? data[idx] : "";
}
// console.log(fetchCharAt(msg, 2));

// 4. Manual concat simulation with rest
const mergeStrings = (base, ...more) => {
  let combined = base;
  for (let item of more) {
    combined += item;
  }
  return combined;
};
// console.log(mergeStrings(msg, " -", "Welcome", "!"));

// 5. Custom indexOf implementation
function locateSubstring(source, target, offset = 0) {
  const len = source.length,
    tLen = target.length;

  if (tLen === 0) return offset <= len ? offset : -1;

  for (let i = offset; i <= len - tLen; i++) {
    let same = true;

    for (let j = 0; j < tLen; j++) {
      if (source[i + j] !== target[j]) {
        same = false;
        break;
      }
    }
    if (same) return i;
  }
  return -1;
}
// console.log(locateSubstring(msg, "lo", 0));

// 6. Manual includes method
const searchIncludes = (text, sub, start = 0) => {
  if (start < 0) start = 0;

  for (let k = start; k <= text.length - sub.length; k++) {
    let matched = true;

    for (let l = 0; l < sub.length; l++) {
      if (text[k + l] !== sub[l]) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }
  return false;
};
// console.log(searchIncludes(msg, "lo"));

// 7. Convert string to lowercase manually
const convertToLower = (sentence) => {
  let res = "";
  for (let ch of sentence) {
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(code + 32);
    } else {
      res += ch;
    }
  }
  return res;
};
// console.log(convertToLower(msg));

// 8. Convert string to uppercase manually
const convertToUpper = (sentence) => {
  let result = "";
  for (let ch of sentence) {
    let ascii = ch.charCodeAt(0);
    if (ascii >= 97 && ascii <= 122) {
      result += String.fromCharCode(ascii - 32);
    } else {
      result += ch;
    }
  }
  return result;
};
// console.log(convertToUpper(msg));
