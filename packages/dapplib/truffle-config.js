require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss imitate problem swear season'; 
let testAccounts = [
"0x856f80410e0665fa0675cd23a05599020905e46ff4d235770bc3f958bc2faa9f",
"0xeb2b59e42b4ed0e15462ba957b709d06074206f6e0a283931e4ef5fbfb5fa50b",
"0xd04eb22fdeeec3355cd42d12d276ed14a286251c110e4f230a8704839ef4a4b1",
"0xb0b17906823db2499e1169ae3b085d1284a7cc02b889122df1a685c957be50ba",
"0xd4cfa54fe7b4a07a005855be7371118ca3714d1cc736de94fd720e2cfaf0e735",
"0x3fe119f25ad679e9c6b2e8eb3edc37a940f4f00773676d40a41a79cee3e0d12c",
"0xc10956809fc3c216ad1eaf6f154b5aba6e5455caffc31a7232bab047f60b799b",
"0x37a8dc09ead2564ab3569905be2759994b7aec2e113668a46380daa2c8dc5614",
"0xcd0d40625070b5f01c8750e8c15120e698e544204f9dabe2d22e35ddca4f9957",
"0xf2ff7956b05fb94b2bb31e1a1479e9414ce085e55c6bc194fd43a3d21aea00bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

