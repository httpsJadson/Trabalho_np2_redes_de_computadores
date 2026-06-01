const net = require('net');

const PORT = 3535;
const HOST = '127.0.0.1';

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');
  
    socket.on('data', (data) => {
        console.log(`Cliente disse: ${data.toString()}`);
    });

    socket.on('close', () => {
        console.log('Cliente desconectou.');
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor ouvindo na porta ${PORT}...`);
});