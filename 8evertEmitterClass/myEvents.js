const EventEmitter = require('events');

class Myevent extends EventEmitter {
    function1(eventName) {
        this.emit(eventName);
    }
}

module.exports = Myevent;