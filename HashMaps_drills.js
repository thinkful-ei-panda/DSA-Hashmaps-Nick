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
}

main();