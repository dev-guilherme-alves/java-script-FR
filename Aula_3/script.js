const names = ["Pedro", "Marcos", "Tulho", 2, false]

const Marcos = names[1];

names.push("Roger")
names.unshift("Felipe");

names.pop();
names.pop();
names.pop();

names[3] = "Joger";

const indexOfTulho = names.indexOf("Tulho");

const sortedNames = names.sort();

const namesIsArray = Array.isArray(indexOfTulho)

console.log(names);
console.log(sortedNames);
console.log(namesIsArray);