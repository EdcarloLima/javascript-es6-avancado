// parte de uma variável para outra variável
let arr = ['Maçã', 'Banana', 'Laranja',['Manga']];
let maca = arr[0];
let banana = arr[1];
let laranja = arr[2];
let manga = arr[3][0];

// Destructuring assignment
let [maca2, banana2, laranja2, [manga2]] = ['Maçã 2', 'Banana 2', 'Laranja 2', ['Manga 2']];
console.log(maca, maca2, manga2);

let obj = {
    name: 'Edcarlo'
};
let {name} = obj;
let {name: name2} = obj;
console.log(name+' - '+name2);

// functions
function sum([a, b] = [0, 0]) {
    return a + b;
}
console.log(sum([5,5]));