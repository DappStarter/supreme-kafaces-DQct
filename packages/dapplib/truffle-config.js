require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note pulse coast gesture brass fresh ghost'; 
let testAccounts = [
"0x3ea4e6ba0a766021580a16fbfb4f737452044d7343198e9bed00688c8ab80a01",
"0x6cdb43b7452ac9ff4d1155a10795571df48925401ef5fd856edc148d0401a072",
"0x536d45762ac816984043af5ba5d1267154b62248669babf1e25b16be6ef52b09",
"0xacc78c5aae5f5443060914dd622ed80cf45787e8648427bae6a6a5bae1194740",
"0x5585902ebbe581ee48fc541f90dd3cd7af17dc95a5b8dc28575ce4837d9ffe63",
"0xb7502a80e163da691fb38d9bf98c7caa0dc7c7351c11b5da48a327ebcb6c7778",
"0xf1d4548d86519f40886574e2685427aba2621c6b7cddf8b4f3d3aa7cae3a77cb",
"0x2da626e5a4f4ab8fd46720b052d4f9947bfda123344d8162126e8539ef6b9f95",
"0x47d7e4604b2be19dec313cbbef9d5661c5c99d1689614c09a52d5efcdb5fa811",
"0xbb257ed85e856cf7c6ee4874ec857052ef095f4da164a1c873209728b59190e2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

