// Utiliza una importación dinámica para cargar el módulo ESM
import('php-server').then(({ default: PhpServer }) => {
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
}).catch(err => {
    console.error('Error al importar el módulo php-server:', err);
    process.exit(1);
});