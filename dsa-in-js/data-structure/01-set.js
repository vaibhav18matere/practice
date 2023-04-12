const set = new Set([1, 2, 3]);

set.add(4);
set.delete(1);
console.log(set.has(2));
console.log("size is", set.size);

for (let item of set) {
  console.log(item);
}


// set of data structure that holds collection of values
// has unique values
// can store string, boolean, number, objects in same set
// dynamic sized
// does not maintain insertion order
// we can ierate it - for of loop
// searching deleting elm is faster than arrays