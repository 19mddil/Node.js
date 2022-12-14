const EventClass = require('events');

class MyEvent extends EventClass {
    constructor(text) {
        super(text);
        this.eventName = text;
    }
    function1 = () => {
        this.emit(this.eventName);
    }
}

module.exports = MyEvent;