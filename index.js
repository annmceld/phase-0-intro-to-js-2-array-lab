// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    console.log(cats.push(name));
}
function destructivelyPrependCat(name) {
    console.log(cats.unshift(name));
}
function destructivelyRemoveLastCat(name) {
    console.log(cats.pop(name));
}
function destructivelyRemoveFirstCat(name) {
    console.log(cats.shift(name));
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(name) {
    return cats.slice(0, 2);
}
function removeFirstCat(name) {
    return cats.slice(1);
}
