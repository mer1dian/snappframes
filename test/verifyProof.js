const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
var ethers = require('ethers');

let testnet = 'rinkeby'
// let testnet = 'ropsten'
// let testnet = 'kovan'
let selectedHost = 'https://' + testnet + '.infura.io/v3/ce26c7d418db4e4695aaa359a1013ab2';
web3 = new Web3(new Web3.providers.HttpProvider(selectedHost));

//ropsten
// const contractAddr = '0x47c7827142764c08118f8215F3097Ff11e36427E'; 
// const contractAddr = '0x7FD45bd930C63093c9d5770Cbc8D3aEada15CcA1'; //Jordi's G2 points

//rinkeby
const contractAddr = '0xDcDCDd25f10ad1A26090010a89994Eb644f88427'
// const contractAddr = '0xEd3564b7377b90fad536e428e54d856E6928b4dA' //Jordi's G2 points

const pubAddr = '0xcE152b33c48be6e0c5876b057334eA01c8deC0e5';
const privKey = Buffer.from('0a90e10ddcef51b9ad063518f90e2f4e6b8bf12c2b6b4359bf2310aa597898fc', 'hex');
var provider = new ethers.providers.InfuraProvider(network = testnet, apiAccessToken = '9744d40b99e34a57850802d4c6433ab8')
var wallet = new ethers.Wallet(privKey, provider);

let interface = [{"constant":true,"inputs":[{"name":"a","type":"uint256[2]"},{"name":"a_p","type":"uint256[2]"},{"name":"b","type":"uint256[2][2]"},{"name":"b_p","type":"uint256[2]"},{"name":"c","type":"uint256[2]"},{"name":"c_p","type":"uint256[2]"},{"name":"h","type":"uint256[2]"},{"name":"k","type":"uint256[2]"},{"name":"input","type":"uint256[39]"}],"name":"verifyProof","outputs":[{"name":"r","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
// let input = ["0x2f94c5edccce6e5b2831850ddbd0befd61d48dba6576fed79dfa78294bc45ff7", "0x281ea61d45cda57229f74d164f91d133ae0c1bf2401526d5dad8c062194cc1c5"],["0x07e03ab4eef61b0d1bd05e83e67c6fe6b950b21ad73fe8fcae1da5a1f3b02179", "0x1f47ffb76dbb8cbee8675f47be52a179fdcea596ae1871148d0f82ad1d8b6065"],[["0x02dc0f0e5f1d1dc3017e6e768224f2d082a9d78823c397768db5983064883596", "0x2f400e05fec8e8d94f331ac4e2971efd82815a5545c2fe09d73f4793a8729842"],["0x25364deb4542135ebb7590512628c73751e2d3841f21cabf13bd51fdebcaca6b", "0x04b08b933febbd9891b6eb6be7c1e3168952037f7b49e982982cc761f841dec3"]],["0x004ca79e059185bdb70751d854695dba002d667e07c0fbf3abbe37ce2cdeadaa", "0x1451aec1b027b346c47f3b263129d4e15d0ba499d4babc10c2745650fc728c69"],["0x19a808d64ff78808b346b65528b5fecbe27596413fdf06162e5db3675bfd6013", "0x1bb05622f33b989e43ebcbb9c49de500b0e1a3514d44a8bb4474e90c91e264fd"],["0x04e855484cac57629e95935624b2dd61d2b2f607d996bf5f0e8ba9da3739fb35", "0x01b12302cbd2701c385624243fcd3d4f66adcc773818b43274dad7392414139b"],["0x2933a23e1624af8146643dc52234ed87efa622121cf2c10de66bda6bc4d2defd", "0x2ac1d261a95a602af8063a937d0c9abf76d83f69d222a3bb7828345bb6381a7b"],["0x2f384d3d59bd197ad2bed582b2efb5bad5bd00a9bf2043856424c2bdf852b6d1", "0x28efa6c5488f7d5a03653fde7a44bd5d5cb266db95fe965fbfb4119d22162889"],["0x123ddb90fa4129a8e9484c20a2b71490782e553c18eef9be56cd79238ab27922","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0f00432761922b6f67c83735254212171b240d794e92224cd5d01c10947c123a","0x123ddb90fa4129a8e9484c20a2b71490782e553c18eef9be56cd79238ab27922","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000007","0x0b7889bd56a53ed1b25493b10f2ab4e611381275d63c866d2a9cb887e371cd72","0x1c0d745ed0a5b96e23e9ccf2fb886c762fff1b77b647c31eac5e34f31680477c","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000002","0x0000000000000000000000000000000000000000000000000000000000000003","0x0000000000000000000000000000000000000000000000000000000000000004","0x0000000000000000000000000000000000000000000000000000000000000005","0x0000000000000000000000000000000000000000000000000000000000000006","0x0000000000000000000000000000000000000000000000000000000000000007","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x1feb458e1898cde32e1bee93db5a7793d6bf935a75f96fbfefff5ba484481a54","0x2eb382b96fa5594124b1d678c7df9e26aabdda55290fe2e12c9106b7d047a2f8","0x02ba7bde66f6cd27cf831ec2c4855adfe814b5f939a494a82ab71cda77e5ef72"]

async function instantiate(_addr, _abi, _wallet){
    var contractInstance = await new ethers.Contract(_addr, _abi, _wallet);
    var contract = new Promise(resolve => {resolve(contractInstance);});
    return contract;
}


async function verifyProofCall(_contractInstance){

    // original inputs
    var result = await _contractInstance.verifyProof(["0x2f94c5edccce6e5b2831850ddbd0befd61d48dba6576fed79dfa78294bc45ff7", "0x281ea61d45cda57229f74d164f91d133ae0c1bf2401526d5dad8c062194cc1c5"],["0x07e03ab4eef61b0d1bd05e83e67c6fe6b950b21ad73fe8fcae1da5a1f3b02179", "0x1f47ffb76dbb8cbee8675f47be52a179fdcea596ae1871148d0f82ad1d8b6065"],[["0x02dc0f0e5f1d1dc3017e6e768224f2d082a9d78823c397768db5983064883596", "0x2f400e05fec8e8d94f331ac4e2971efd82815a5545c2fe09d73f4793a8729842"],["0x25364deb4542135ebb7590512628c73751e2d3841f21cabf13bd51fdebcaca6b", "0x04b08b933febbd9891b6eb6be7c1e3168952037f7b49e982982cc761f841dec3"]],["0x004ca79e059185bdb70751d854695dba002d667e07c0fbf3abbe37ce2cdeadaa", "0x1451aec1b027b346c47f3b263129d4e15d0ba499d4babc10c2745650fc728c69"],["0x19a808d64ff78808b346b65528b5fecbe27596413fdf06162e5db3675bfd6013", "0x1bb05622f33b989e43ebcbb9c49de500b0e1a3514d44a8bb4474e90c91e264fd"],["0x04e855484cac57629e95935624b2dd61d2b2f607d996bf5f0e8ba9da3739fb35", "0x01b12302cbd2701c385624243fcd3d4f66adcc773818b43274dad7392414139b"],["0x2933a23e1624af8146643dc52234ed87efa622121cf2c10de66bda6bc4d2defd", "0x2ac1d261a95a602af8063a937d0c9abf76d83f69d222a3bb7828345bb6381a7b"],["0x2f384d3d59bd197ad2bed582b2efb5bad5bd00a9bf2043856424c2bdf852b6d1", "0x28efa6c5488f7d5a03653fde7a44bd5d5cb266db95fe965fbfb4119d22162889"],["0x123ddb90fa4129a8e9484c20a2b71490782e553c18eef9be56cd79238ab27922","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0f00432761922b6f67c83735254212171b240d794e92224cd5d01c10947c123a","0x123ddb90fa4129a8e9484c20a2b71490782e553c18eef9be56cd79238ab27922","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000007","0x0b7889bd56a53ed1b25493b10f2ab4e611381275d63c866d2a9cb887e371cd72","0x1c0d745ed0a5b96e23e9ccf2fb886c762fff1b77b647c31eac5e34f31680477c","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000002","0x0000000000000000000000000000000000000000000000000000000000000003","0x0000000000000000000000000000000000000000000000000000000000000004","0x0000000000000000000000000000000000000000000000000000000000000005","0x0000000000000000000000000000000000000000000000000000000000000006","0x0000000000000000000000000000000000000000000000000000000000000007","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x1feb458e1898cde32e1bee93db5a7793d6bf935a75f96fbfefff5ba484481a54","0x2eb382b96fa5594124b1d678c7df9e26aabdda55290fe2e12c9106b7d047a2f8","0x02ba7bde66f6cd27cf831ec2c4855adfe814b5f939a494a82ab71cda77e5ef72"]
).catch(error => {console.log(error)});
    console.log(result);

    // flipped inputs               
    var result = await _contractInstance.verifyProof(["0x2f94c5edccce6e5b2831850ddbd0befd61d48dba6576fed79dfa78294bc45ff7","0x281ea61d45cda57229f74d164f91d133ae0c1bf2401526d5dad8c062194cc1c5"],["0x07e03ab4eef61b0d1bd05e83e67c6fe6b950b21ad73fe8fcae1da5a1f3b02179","0x1f47ffb76dbb8cbee8675f47be52a179fdcea596ae1871148d0f82ad1d8b6065"],[["0x02dc0f0e5f1d1dc3017e6e768224f2d082a9d78823c397768db5983064883596","0x2f400e05fec8e8d94f331ac4e2971efd82815a5545c2fe09d73f4793a8729842"],["0x25364deb4542135ebb7590512628c73751e2d3841f21cabf13bd51fdebcaca6b","0x04b08b933febbd9891b6eb6be7c1e3168952037f7b49e982982cc761f841dec3"]],["0x004ca79e059185bdb70751d854695dba002d667e07c0fbf3abbe37ce2cdeadaa","0x1451aec1b027b346c47f3b263129d4e15d0ba499d4babc10c2745650fc728c69"],["0x19a808d64ff78808b346b65528b5fecbe27596413fdf06162e5db3675bfd6013","0x1bb05622f33b989e43ebcbb9c49de500b0e1a3514d44a8bb4474e90c91e264fd"],["0x04e855484cac57629e95935624b2dd61d2b2f607d996bf5f0e8ba9da3739fb35","0x01b12302cbd2701c385624243fcd3d4f66adcc773818b43274dad7392414139b"],["0x2933a23e1624af8146643dc52234ed87efa622121cf2c10de66bda6bc4d2defd","0x2ac1d261a95a602af8063a937d0c9abf76d83f69d222a3bb7828345bb6381a7b"],["0x2f384d3d59bd197ad2bed582b2efb5bad5bd00a9bf2043856424c2bdf852b6d1","0x28efa6c5488f7d5a03653fde7a44bd5d5cb266db95fe965fbfb4119d22162889"],["0x123ddb90fa4129a8e9484c20a2b71490782e553c18eef9be56cd79238ab27922","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0f00432761922b6f67c83735254212171b240d794e92224cd5d01c10947c123a","0x123ddb90fa4129a8e9484c20a2b71490782e553c18eef9be56cd79238ab27922","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000007","0x0b7889bd56a53ed1b25493b10f2ab4e611381275d63c866d2a9cb887e371cd72","0x1c0d745ed0a5b96e23e9ccf2fb886c762fff1b77b647c31eac5e34f31680477c","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000002","0x0000000000000000000000000000000000000000000000000000000000000003","0x0000000000000000000000000000000000000000000000000000000000000004","0x0000000000000000000000000000000000000000000000000000000000000005","0x0000000000000000000000000000000000000000000000000000000000000006","0x0000000000000000000000000000000000000000000000000000000000000007","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0c92859506d52a579ab5073c239985d70a7eec5664d0f2bab72ab62133d1405c","0x2da8e567f1f42da127151b8857e2c3bca230b4efa89889e437133a3a82548753","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x1feb458e1898cde32e1bee93db5a7793d6bf935a75f96fbfefff5ba484481a54","0x2eb382b96fa5594124b1d678c7df9e26aabdda55290fe2e12c9106b7d047a2f8","0x02ba7bde66f6cd27cf831ec2c4855adfe814b5f939a494a82ab71cda77e5ef72"]
).catch(error => {console.log(error)});
    console.log(result);
}


async function verify(){

    var contract = await instantiate(contractAddr, interface, wallet)
    console.log(contract)
    // let verifier;
    setTimeout(async function() {
        var result = await verifyProofCall(contract)
    }, 3000)

}

verify()