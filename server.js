// Importar el módulo php-server
const PhpServer = require('php-server');

// Resto del código sigue igual
const path = require('path');

// Directorio raíz de tu proyecto PHP
const root = path.resolve(__dirname);

// Configuración del servidor
const config = {
    port: process.env.PORT || 3000, // Puerto en el que se ejecutará el servidor
    directory: root, // Directorio raíz
};

// Inicializar el servidor
const server = new PhpServer(config);

// Iniciar el servidor
server.run();