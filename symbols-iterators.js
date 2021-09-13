// Symbols - forma de criar um identificador único. Invoca semelhanta a uma função
const uniqueId = Symbol();
const uniqueId2 = Symbol();
console.log(uniqueId === uniqueId2);

// Propriedade em objeto
const obj = {
    [uniqueId]: 'propriedade'
};
console.log(obj);// Para acessar usa o Object.getOwnPropertySymbols(obj)

// Well known symbols
Symbol.iterator 
Symbol.split 
Symbol.toStringTag 

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
console.log(it.next());

for (let value of arr) {
    console.log(value);
}

// Adicionando iterator no objeto
const obj2 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it2 = obj2[Symbol.iterator]();
console.log(it2.next());

for (let value of obj2) {
    console.log(value);
}

// Generators
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    console.log(value);
}
const it3 = hello();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next('End'));

// Generator em objetos para criar interadores
const obj3 = {
    values: [5, 6, 7, 8],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};
for (let value of obj3) {
    console.log(value);
}