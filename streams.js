const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'geeks', 'text.txt'), {encoding: 'utf8'}, (err, data) => {
    // console.log(data)
});

// const stats = fs.statSync(path.resolve(__dirname, 'geeks', 'text.txt'));

const stream = fs.createReadStream(path.resolve(__dirname, 'geeks', 'text.txt'));
const writableStream = fs.createWriteStream(path.resolve(__dirname, 'geeks', 'text.txt'));
writableStream.write('ASASASASASASASASA');

stream.on('data', (chunk) => {
    console.log(chunk);
})