// Callback
function doSomething(callback) {
    setTimeout(function() {
        callback('Primeiro');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        callback('Segundo');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            let processedData = data.split('');

            doOtherThing(function(data2) {
                var processedData2 = data2.split('');

                setTimeout(function() {
                    console.log(processedData, processedData2);
                }, 1000);
            });
        });
    } catch(erro) {
        // tratar erro
    }
}

doAll();

// Promises (pending, fulfilled, rejected)
const doSomethingPromise = new Promise((resolve, reject) => {
    throw new Error('Aconteceu um erro.');
    setTimeout(function() {
        resolve('Primeiro resolve');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Segundo resolve');
    }, 1000);
});

console.log(doSomethingPromise);
doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error))
/*doSomethingPromise
.then(data => doOtherThingPromise)
.then(data2 => console.log(data2))
.catch();*/