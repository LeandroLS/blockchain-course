const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
bitcoin.createNewBlock(2112, 'dasd23', 'dasdasd');
bitcoin.createNewTransaction(10, 'LEANDRODSASADDDAS', 'CAMILA2132MASMASD');
bitcoin.createNewBlock(21322, 'dasdsasdadd23', 'adsadds');
console.log(bitcoin.chain[1]);