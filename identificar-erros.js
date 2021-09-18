/*console.log(nome);
// ReferenceError - erro de referência, chamada a uma variável que ainda não foi inicializada.
const nome = 'Edcarlo Lima';
console.log('Continue..'); */

/*try {
    console.log(nome2);
    const nome2 = 'Edcarlo Lima';
} catch (erro) {
    console.log('Tratar Erro: ',erro);
}

console.log('A execução continua ...');*/

/*try {
    console.log(nome2);
    const nome2 = 'Edcarlo Lima';
} catch (erro) {
    console.log('Tratar Erro: ',erro);
} finally {
    console.log('Executa o código mesmo que acontença erros ...');
}*/

/*
try {
    console.log(variavel);
    const variavel = 'Edcarlo Lima';
    const dispareErro = new Error('Instanciando error');
    throw dispareErro;
} catch (erro) {
    console.log('Tratar Erro: ',erro);
} finally {
    console.log('Executa o código mesmo que acontença erros ...');
}*/

class ClasseErro extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const variavel = 'Edcarlo Lima';
    const dispareErro = new ClasseErro({
        message: 'Mensagem customizada',
        data: {
            type: 'Server error'
        }
    });
    throw dispareErro;
} catch (erro) {
    console.log(erro);
    if (erro.data.type === 'Server error') {
        alert('Contate a equipe DEV.');
    } else {
        console.log(erro.data);
    }

} finally {
    console.log('Executa o código ...');
}