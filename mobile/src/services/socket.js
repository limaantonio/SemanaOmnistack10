import socketio from '_socket.io-client';

const socket = axios.create('http://10.0.0.6:3333', {
    autoConnect: false,
});

function connect(){
    socket.connect();
}

function disconnect(){
    if(socket.connect){
        socket.disconnect();
    }
}


export {
    connect,
    disconnect,
};
