//question 8
const events = require('events')

const emitter = new events.EventEmitter();

//question 10
emitter.setMaxListeners(5);
console.log(emitter.getMaxListeners()) // output is 5

emitter.on("subscribe", (subscribe)=>{
  console.log(` ${subscribe} has subscribed`)
})

const user1 = "john brandy";
const user2 = "balaji yatheysh"

emitter.emit('subscribe', user1)
emitter.emit('subscribe', user2)

//question 9
/*
we observed that there was no error thrown or anything , bascically nothing happened
*/