import HashMap from './HashMap.js';

export default function anyPalindrome(string) {
  const hMap = new HashMap();
  hMap.MAX_LOAD_RATIO = 0.5;
  hMap.SIZE_RATIO = 3;

  let dupes = 0;

  //fill the hashmap with the string
  for (let i = 0; i < string.length; i++) {
    if (hMap.get(string[i]) === undefined)
      hMap.set(string[i], i);
    else
      dupes++;
  }

  if (dupes === Math.floor(string.length / 2))
    return true;

  return false;
}