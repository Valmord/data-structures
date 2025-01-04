import LinkedList from "./LinkedList.js";

export default class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = 0.8;
    this.createBuckets();
  }

  createBuckets() {
    this.buckets = [];
    for (let i = 0; i < this.capacity; i++) {
      const bucket = new LinkedList();
      this.buckets.push(bucket);
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 37;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    // TODO: Check if above capacity

    const bucket = this.buckets[this.hash(key)];
    const node = bucket.contains(key);
    if (node) {
      bucket.update(key, value);
    } else {
      bucket.add(key, value);
    }
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.get(key);
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.has(key);
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    return bucket.remove(key);
  }

  length() {
    let total = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      total += this.buckets[i].size;
    }
    return total;
  }

  clear() {
    this.buckets = [];
    this.createBuckets();
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
