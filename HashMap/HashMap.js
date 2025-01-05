import LinkedList from "./LinkedList.js";

export default class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = 0.8;
    this._length = 0;
    this._createBuckets();
  }

  _createBuckets(capacity = this.capacity) {
    this.buckets = new Array(capacity).fill(null).map(() => new LinkedList());
  }

  _resize() {
    const entries = this.entries();
    this._createBuckets((this.capacity *= 2));
    this._length = 0;
    entries.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
  }

  _hash(key) {
    let hashCode = 0;

    const primeNumber = 37;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    if (this._length / this.capacity > this.loadFactor) {
      this._resize();
    }

    const bucket = this.buckets[this._hash(key)];
    if (bucket.size === 0) this._length++;

    const node = bucket.contains(key);
    if (node) {
      bucket.update(key, value);
    } else {
      bucket.add(key, value);
    }
  }

  get(key) {
    const bucket = this.buckets[this._hash(key)];
    return bucket.get(key);
  }

  has(key) {
    const bucket = this.buckets[this._hash(key)];
    return bucket.has(key);
  }

  remove(key) {
    const bucket = this.buckets[this._hash(key)];
    return bucket.remove(key);
  }

  length() {
    return this._length;
  }

  clear() {
    this.buckets = [];
    this._createBuckets(16);
    this._length = 0;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      keys.push(...this.buckets[i].getKeys());
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      values.push(...this.buckets[i].getValues());
    }
    return values;
  }

  entries() {
    const entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      entries.push(...this.buckets[i].getEntries());
    }
    return entries;
  }
}
