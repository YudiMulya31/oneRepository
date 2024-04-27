//core module
// File System
const fs = require('fs');

//console.log(fs);

// menuliskan string ke file (synchronous)
//fs.writeFileSync('test.txt', 'Hello World secara synchronous!'); //membuatkan file baru di sidebar dengan format txt yang isinya hello world
// try {
// fs.writeFileSync('data/test.txt', 'Hello World dlam folder auto dibuatkan!'); //membuatkan file baru dalam folder data. tapi harus membuat folder data manual terlebih dahulu.
// } catch (err) {
//     console.log(err);
// }
// try {...} catch (err) {console.log(err);} untuk menangkap penjelasan error yg ada di term gitBashnya.


// menuliskan string ke file dengan ansynchronous
// fs.writeFile('data/test.txt', 'Hello secara ansynchoronous', (err) => {
//      console.log(err);
//  });


//membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');//utf-8 sebuah parameter endcoding
// console.log(data);


//membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//      if (err) throw err;
//      console.log(data)
// });


//Readline (rl) :(titik dua) artinya dari (17.00sd/yb)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,//apa yg dilakukan diterminalnya
    output: process.stdout,//apa yg kita kirimin nanti
});
rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no HP anda : ', (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);//mengubah string menjadi json (parse)

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); //mengubah json jadi string(stringify)
        //console.log(`Terima kasih ${nama}, sudah menginputkan ${noHP}`);
        console.log('Terimakasih sudah memasukkan data.');

        rl.close();
    });
});