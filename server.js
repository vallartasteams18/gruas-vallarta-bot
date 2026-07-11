const http = require('http');
const handler = require('./api/chat.js').default; // Importamos tu lógica

const server = http.createServer(async (req, res) => {
    // Esto conecta tu función con el servidor
    await handler(req, res);
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Servidor arriba!");
});
