var name = "Алекс"
var age = 18;
var isStudent = true;
var emptyValue = null;
var unknownValue;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(emptyValue);
console.log(unknownValue);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof emptyValue);
console.log(typeof unknownValue);

var person = {
    name: name,
    age: age,
    isStudent: isStudent
};

console.log(`Меня зовут ${person.name},мне ${person.age} лет.`);

var favoriteGame = [
    "Minecraft",
    "WarThunder",
    "Days Gone",
    "Russian Fishing 4"
];

console.log(favoriteGame);