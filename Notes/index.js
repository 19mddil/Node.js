const MyEvent = require('./MyEvent');

const event = new MyEvent('click');

event.on('click', () => {
    console.log('click');
})

event.function1();

