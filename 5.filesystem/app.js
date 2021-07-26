// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');

//Asynchronous
const bacaFile = (error, data) => {
    if(error){
        console.log('Gagal');
        return;
    }
    console.log(data);
}

const data = fs.readFileSync('notes.txt', 'UTF-8', bacaFile);


// Synchronous
// const data = fs.readFileSync('notes.txt', 'UTF-8');


console.log(data);