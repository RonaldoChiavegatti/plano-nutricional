// Exemplo de configuração - NÃO inclua dados sensíveis aqui
const config = {
    apiKey: 'SUA_API_KEY_AQUI',
    apiUrl: 'https://api.exemplo.com',
    debug: false,
    analytics: {
        enabled: true,
        trackingId: 'SEU_ID_TRACKING'
    },
    security: {
        maxAttempts: 3,
        timeout: 30000
    },
    facebook: {
        pixelId: 'SEU_PIXEL_ID_AQUI',
        token: 'SEU_TOKEN_AQUI'
    }
};

export default config; 