
let set = new Set([]);

set.add('1');
set.add('Kalai');
set.add('Ruth');
set.add('Sara');
// set.add('Kalai');
// set.add('Imman');
//set.delete('1');
//console.log(set);

//  const setsize = set.size;
//  console.log(setsize);

 console.log(set.has('Imman'));


//set.keys()
// const iterator1 = set.values();
// console.log(iterator1.next().value);

// set.entries() -the entries() method returns a new Iterator object that contains
// an array of [value, value] for each element in the Set object, in insertion order. 
 const iterator2 = set.entries();

for (const entry of iterator2) {
  console.log(entry);
}
console.log(set.clear());







