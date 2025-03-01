// Configurações do ambiente
const env = {
    FACEBOOK_PIXEL_ID: '1980192355803079', // Seu ID real do Facebook Pixel
    API_URL: 'http://localhost:3000' // URL do servidor local
};

// Define globalmente
window.env = env;
window.FB_PIXEL_ID = env.FACEBOOK_PIXEL_ID;

// Suporte a módulos ES6
if (typeof exports !== 'undefined') {
    exports.default = env;
} 