const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage.set(index, value);
  }

  retrieve(key) {
    let result;
    const idx = simpleHash(key, this.limit);
    result = this.storage.get(idx);
    if (result) return result;
    return null;
  }

  remove(key) {
    const idx = simpleHash(key, this.limit);
    let result = false;
    this.storage.each((v, i, storage) => {
      if (i === idx && storage[i]) {
        storage.splice(idx, 1);
        result = true;
      }
    });
    return result;
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
