import HashMap from './HashMap.js';

export default function anagramGrouping(words) {
  const hMap = new HashMap();
  const result = [];

  for (const i in words) {
    const word = words[i];
    const sortedWord = sortWord(word);
    if (hMap.get(sortedWord) === undefined) {
      hMap.set(sortedWord, [word]);
    }
    else {
      hMap.get(sortedWord).push(word);
    }
  }

  for (const i in hMap._hashTable) {
    result.push(hMap._hashTable[i].value);
  }

  return result;
}

function sortWord(text) {
  return text.split('').sort().join('');
}