/* fetch - api de busca
Para usar no Node.js precisa instalar e importar
instalação npm install node-fetch
importação import fetch from "node-fetch";
 */
fetch('/dados.json').then(responseStream => {
    //console.log(responseStream);
    //return responseStream.json();
    responseStream.json().then(data => {
        console.log(data);
    })
});

fetch('/dados.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    }).catch(erro => {
        console.log('erro de rede: '.erro);
    });

// ES7 Async await
const simpleFunc = async () => {
    return 1234567;
};
console.log(simpleFunc());// promise já resolvida
simpleFunc().then(data => {
    console.log(data);
});

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data');
    }, 1000);
});
const simpleFunc2 = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('/dados.json').then(resStream =>
        resStream.json()
    );
    return dataJSON;
};
simpleFunc2().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});