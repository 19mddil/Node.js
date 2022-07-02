const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event1', (e) => {
    console.log(e);
})

emitter.on('event2', (e) => {
    console.log(e)
})

emitter.emit('event1', { name: "Md.Dilshadul Islam", id: 1 });
emitter.emit('event2', { name: "Zara Lerson", id: 2 });