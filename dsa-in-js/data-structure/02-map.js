// unordered collection of key value pair.
// key and value can be of any data type.
// iterable - for of loop.
// to retrive value, use corresponding key.
// it does not contain any key by default.
// cannot add functionality; it's just for storing data.

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 4);
map.delete("a");
console.log("map size is", map.size);

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
