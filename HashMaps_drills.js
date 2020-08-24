import HashMap from './HashMap.js';

function main() {
  let lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  const characters = [
    { 'Hobbit': 'Bilbo' }, { 'Hobbit': 'Frodo' },
    { 'Wizard': 'Gandalf' }, { 'Human': 'Aragorn' }, { 'Elf': 'Legolas' }, { 'Maiar': 'The Necromancer' },
    { 'Maiar': 'Sauron' }, { 'RingBearer': 'Gollum' }, { 'LadyOfLight': 'Galadriel' }, { 'HalfElven': 'Arwen' },
    { 'Ent': 'Treebeard' }
  ];

  for (const i in characters) {
    const key = Object.entries(characters[i])[0][0];
    const value = Object.entries(characters[i])[0][1];
    lotr.set(key, value);
  }

  console.log(lotr.get('Hobbit'));

  // There is a discrepency in getting both Maiar and Hobbit becuase there are 
  // two entries with the same key.

  // After entering 9 entries the capacity of the hashTable is 24 because
  // when we passed the MAX_LOAD_RATIO the capacity (8) was multiplied by
  // the SIZE_RATIO (3).

  WhatDoesThisDo();
}

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

main();