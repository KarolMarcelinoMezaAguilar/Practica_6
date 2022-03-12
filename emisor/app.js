//var Emitter = require('./emitter');
var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');
emtr.on('jump', () => {
    console.log('someone jumped!');
});