const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log("new event is created");
})

eventEmitter.emit('tutorial');

class Person extends EventEmitter {

    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name; 
    }
}

let praneeth = new Person("praneeth");

praneeth.on('name',(sentence)=>{
    console.log("hi praneeth, congrats! "+sentence);
})

praneeth.emit('name', "you are great!");