const net = require('net');
const readline = require('readline');

const client = new net.Socket();

const PORT = 3535;
const HOST = '127.0.0.1';

client.connect(PORT, HOST, () => {
    console.log('Conectado ao servidor! Digite sua mensagem:');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (line) => {
        if (line.toLowerCase() === 'sair') {
            client.destroy();
            process.exit();
        }
        client.write(line);
    });
});