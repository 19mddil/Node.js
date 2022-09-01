const EventEmitter = require('events');
const emmiter = new EventEmitter();

emmiter.on('event1', () => {
    console.log("event1 called");
})
emmiter.on('event2', (obj) => {
    console.log("event2 : ", obj);
})
emmiter.emit('event1');
emmiter.emit('event2', { name: "Kurt", band: "Nirvana" });