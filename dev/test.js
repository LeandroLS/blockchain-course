const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
bitcoin.createNewBlock(2, '2313dsada', '2322sdsd');
bitcoin.createNewBlock(23, 'sdad223', '2322adsgsdsdsd');
bitcoin.createNewBlock(243, '2331232', 'fasddas232');

console.log(bitcoin);