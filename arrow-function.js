// Arrow functions - sempre terão a fecha => e pode omitir o nome function e o return implícito (para execução direta)

// Arrow function anônima soma
var sum = (a,b) => a + b;
console.log(sum(50,50));

// Para definições de variáveis e condicionais é obrigatório as {}
var maiorIdade = (i) => {
    let idadeLimite = 18;
    
    if (i >= idadeLimite)
        return true;
    else
        return false;    
} 
console.log(maiorIdade(17));

// Se tiver somente um argumento por omitir os ()
var soma = a => a + 7;
console.log(soma(7));

// Retornando objeto literal
var createObj = () => ({atributo: 77});
console.log(createObj());

// Criar objeto com função construtora
function Car() {
    this.pneus = 'Pirelli';
    this.aro = 17; 
}
console.log(new Car());

// Função construtora com arrow function não é permitido
var carro = () => {
    this.pneus = 'Pirelli';
    this.aro = 17;
}
//console.log(new carro()); // TypeError: carro is not a constructor

// Arrow function não permite hoisting (chamar function antes da declaração)
/*log('hoisting'); // TypeError: log is not a function
var log = value => {
    console.log(value);
} */

// Contexto léxico é a chamada de referência ao escopo encapsulado da function () {}
var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms');
        },1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();