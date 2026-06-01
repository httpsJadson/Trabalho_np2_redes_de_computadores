# Projeto de Comunicação via Sockets TCP

Este projeto foi desenvolvido como parte de uma atividade prática sobre redes de computadores, visando implementar a comunicação entre dois processos (Cliente e Servidor) utilizando o protocolo **TCP** na porta **3535**.

## 🚀 Proposta do Projeto
O objetivo desta atividade é demonstrar o funcionamento básico de um *socket* de rede. O sistema estabelece uma conexão persistente onde:
1. **O Servidor** atua como um ouvinte na porta `3535`, aguardando a conexão de um cliente.
2. **O Cliente** conecta-se ao servidor e permite que o utilizador envie mensagens de texto através do terminal, que são processadas em tempo real pelo servidor.

Este projeto ajuda a compreender o conceito de *fluxo de dados* (streams) e o comportamento *handshake* do protocolo TCP.

## 🛠️ Tecnologias Utilizadas
* **Linguagem:** Node.js
* **Protocolo:** TCP (módulo `net`)
* **Interface:** Linha de Comando (Terminal)

## 💻 Como Executar

### Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### Execução
1. **Iniciar o Servidor:**
   No diretório do projeto, abra o terminal e execute:
   ```bash
   node servidor.js
    ```
2. **Iniciar o Cliente:**
   Em outro terminal, execute:
   ```bash
   node cliente.js
   ```
3. **Interação:**
    - No terminal do cliente, digite a sua mensagem e pressione Enter. A mensagem será exibida instantaneamente no terminal do servidor. 
    - Para encerrar, digite sair.