import LinkedList from "./LinkedList";

export default class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = 0.8;
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
    const bucketId = this.hash(key);
  }
}
