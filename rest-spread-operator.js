function sum(a, b) {
    let value = 0;

    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
console.log(sum(3,7,12,24));

// rest operator ...  adiciona todos os argumentos em array
function sum2(...args) {
    return args.reduce((acc,value) => acc + value, 0);
}
console.log(sum2(3,7,12,24));

const sum3 = (a, b, ...rest) => {
    console.log(a,b,rest);
};
console.log(sum3(3,7,12,24));

// spread operator ...  adicionar o array como argumentos para uma função. Pode ser utilizado para strings, arrays e literal objects
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum4 = (...rest) => {
    return multiply(...rest);
}
console.log(sum4(3,7,12,24));

// spread operator ... strings
const str = 'Digital Innovation One';
function logArgs(...args) {
    console.log(args);
}
logArgs(...str);

// spread operator ... arrays
const arr = [1,2,3,4];
function logArgs2(a, b, c) {
    console.log(a,b,c);
}
logArgs2(...arr);
const arr2 = [...arr,5,6,7];
console.log(arr2);

// spread operator ... literal object
const obj = {
    propriedade: '007'
}
const obj2 = {
    ...obj,
    propriedade2: 'pantera negra' 
}
console.log(obj2);