import HashMap from "./HashMap.js";

const hashMap = new HashMap();

// console.log(hashMap.buckets);
// hashMap.set("Turkey", "Dinner");
// console.log(hashMap.buckets);
// hashMap.set("Turkey", "Bacon");
// console.log(hashMap.buckets);

hashMap.set("name", "Alice");
hashMap.set("city", "New York");
hashMap.set("country", "USA");
hashMap.set("language", "English");
hashMap.set("hobby", "Painting");
hashMap.set("job", "Engineer");
hashMap.set("favoriteColor", "Blue");
hashMap.set("pet", "Dog");
hashMap.set("car", "Toyota");
hashMap.set("movie", "Inception");

hashMap.set("book", "1984");
hashMap.set("author", "George Orwell");
hashMap.set("phone", "iPhone");
hashMap.set("email", "alice@example.com");
hashMap.set("password", "secure123");
hashMap.set("username", "alice123");
hashMap.set("website", "example.com");
hashMap.set("address", "123 Main St");
hashMap.set("school", "Central High");
hashMap.set("degree", "Computer Science");

hashMap.set("coffee", "Latte");
hashMap.set("tea", "Green");
hashMap.set("fruit", "Apple");
hashMap.set("vegetable", "Carrot");
hashMap.set("animal", "Elephant");
hashMap.set("planet", "Earth");
hashMap.set("language2", "Spanish");
hashMap.set("game", "Chess");
hashMap.set("music", "Rock");
hashMap.set("band", "Coldplay");

hashMap.set("season", "Winter");
hashMap.set("month", "December");
hashMap.set("day", "Monday");
hashMap.set("time", "10:30 AM");
hashMap.set("weather", "Sunny");
hashMap.set("temperature", "72°F");
hashMap.set("holiday", "Christmas");
hashMap.set("festival", "Diwali");
hashMap.set("currency", "Dollar");
hashMap.set("sport", "Soccer");

hashMap.set("bike", "Yamaha");
hashMap.set("laptop", "Dell");
hashMap.set("brand", "Nike");
hashMap.set("store", "Walmart");
hashMap.set("drink", "Water");
hashMap.set("dessert", "Cake");
hashMap.set("flower", "Rose");
hashMap.set("tree", "Oak");
hashMap.set("river", "Nile");
hashMap.set("continent", "Asia");

console.log(hashMap.buckets);

console.log(hashMap.get("river"));
console.log(hashMap.has("river"));
console.log(hashMap.remove("river"));
console.log(hashMap.buckets);

console.log(hashMap.length());
// hashMap.clear();
// console.log(hashMap.length());

console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
