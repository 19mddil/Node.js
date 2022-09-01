const MyEvent = require('./myEvent');
const myevent = new MyEvent();

myevent.on('event1', () => {
    console.log("hi from event1");
})
myevent.on('event2', (obj) => {
    console.log("hi from event2");
    console.log(obj);
})
myevent.emmitterFunction('event1', null);
myevent.emmitterFunction('event2', { name: "Kurt", band: "Nirvana" });