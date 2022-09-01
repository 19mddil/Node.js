const EventEmitter = require('events');

class MyEvent extends EventEmitter {
    emmitterFunction(str, obj) {
        this.emit(str, obj);
    }
}
module.exports = MyEvent;