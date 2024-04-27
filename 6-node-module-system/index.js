// const nama = 'Yudi Mulya';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));//nama (variabel)
//atau
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;//nama(argumen)
// console.log(cetakNama('Yudi Mulya'));
// console.log(window);


//const fs = require('fs'); // core module
//const cetakNama = require('./coba'); // local modeule
//const moment = require('moment'); // third party module / npm module / node_modules

//console.log('Hello WPU');

//const cetakNama = require('./coba');
//untuk memanggil file lain
//const PI = require('./coba');
const coba = require('./coba');
//console.log(coba);


console.log(coba.cetakNama('Yudi Mulya'),
coba.PI,
coba.mahasiswa.cetakMhs(),
new coba.Orang()
);
//{} arti kurawal isikan dan jalankan