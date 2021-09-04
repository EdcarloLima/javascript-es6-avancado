function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));

function multiplyReference(a, b = a) {
    return a * b;
}
console.log(multiplyReference(5));

// Lazy Evaluation
function randomNumber() {
    return Math.random() * 10;
}
function mult(a, b = randomNumber()) {
    return a * b;
}
console.log(mult(7));