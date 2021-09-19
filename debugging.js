// console
console.log('console log');
console.warn('console warning');
console.error('console error');
console.trace('console trace');
console.group('Console group');
console.log('Info group');
console.log('Info plus group');
console.groupEnd();
console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);
console.table(['Edcarlo Lima', 'Digital Innovation One']);
console.assert(1 === 2, 'Assert condicional');
console.log('%c styled log','color: blue; font-size: 30px;');