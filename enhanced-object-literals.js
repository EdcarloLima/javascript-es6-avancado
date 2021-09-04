var curso = 'Curso JavaScript ES6 Avançado';
var obj = {
    dio: 'Digital Innovation One',
    curso: curso
};
console.log(obj);

// Se o nome da variável ou função for igual ao nome da propiedade pode omitir
var obj2 = {
    dio: 'DIO',
    curso
};
console.log(obj2);

function method1() {
    console.log('method called');
}
var obj3 = {
    dio: 'Innovation',
    method1
};
obj3.method1();

// Declarar método dentro do objeto
var obj4 = {
    sum: function sum(a, b) {
        return a + b;
    },
    mult: function(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    },
    //[proName + 'concat']: 'prop value'
};
console.log(obj4.sum(7,3));
console.log(obj4.mult(7,3));
console.log(obj4.div(21,3));
//console.log(obj4);