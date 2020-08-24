import HashMap from './HashMap.js';

export default function removeDuplicates(string) {
  const hMap = new HashMap();
  hMap.MAX_LOAD_RATIO = 0.5;
  hMap.SIZE_RATIO = 3;

  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (hMap.get(string[i]) === undefined) {
      hMap.set(string[i], i);
      result += string[i];
    }
  }
  return result;
}

// function removeDuplicates(str) {
//   let map = new Map();
//   let nonDupe = '';
//   for (let i = 0; i < str.length; i++) {
//     if (!map.has(str[i].toLowerCase())) {
//       map.set(str[i]);
//       nonDupe += str[i];
//     }
//   }
//   return nonDupe;
// }
// console.log(removeDuplicates('google all that you think can think of'));
