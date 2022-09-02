const MyEventEmmiter = require('./myEvents')


let emitter = new MyEventEmmiter();

emitter.on('event1', () => {
    console.log('event1s been triggered');
});

emitter.function1('event1');    