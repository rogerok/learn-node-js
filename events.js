const Emitter = require('events');
const cowsay = require('cowsay')
require('dotenv').config()

const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
    console.log('first argument', data);
    console.log('second argument', second);
})


const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE)
} else {
    emitter.emit('message', MESSAGE, 'empty messaage')
}

console.log(process.env.MESSAGE);

emitter.removeAllListeners();