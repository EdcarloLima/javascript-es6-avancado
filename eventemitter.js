// exclusivo para node.js
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', {user: 'Edcarlo Lima'});

class User extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new User();

users.on('User logged', data => {
    console.log(data);
});
User.userLogged({user:'Edcarlo Desenvolvedor Web'});