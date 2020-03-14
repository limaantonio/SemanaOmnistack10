const socketio = require('socket.io');

exports.setupwebsocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket =>{
        console.log(socket.id);
    })
};