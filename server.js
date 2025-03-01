const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração CORS mais segura
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? [process.env.API_URL, 'https://plano-nutricional.vercel.app']
        : '*',
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Configuração de cache para arquivos estáticos
const cacheControl = {
    maxAge: '1h',
    setHeaders: (res, filePath) => {
        // Cache mais longo para imagens
        if (filePath.match(/\.(jpg|jpeg|png|gif|webp|ico)$/)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        // Configuração de tipo de conteúdo
        if (filePath.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
        if (filePath.match(/\.(jpg|jpeg)$/)) {
            res.setHeader('Content-Type', 'image/jpeg');
        }
        if (filePath.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
        }
        if (filePath.endsWith('.webp')) {
            res.setHeader('Content-Type', 'image/webp');
        }
    }
};

// Servir arquivos estáticos com cache-control
app.use('/assets', express.static(path.join(__dirname, 'assets'), cacheControl));
app.use(express.static(path.join(__dirname), cacheControl));

// Rotas específicas para arquivos estáticos
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'), {
        headers: {
            'Content-Type': 'text/css'
        }
    });
});

// Rotas de exemplo
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API está funcionando!' });
});

// Rota para servir o config.js de forma dinâmica
app.get('/quiz/config.js', (req, res) => {
    const configScript = `
        window.config = {
            pixelId: '${process.env.FACEBOOK_PIXEL_ID}',
            apiUrl: '${process.env.API_URL}'
        };
        // Dispara evento quando o config for carregado
        window.dispatchEvent(new Event('config:loaded'));
    `;
    res.type('application/javascript');
    res.send(configScript);
});

// Exemplo de rota para salvar respostas do quiz
app.post('/api/quiz/respostas', (req, res) => {
    const respostas = req.body;
    console.log('Respostas recebidas:', respostas);
    res.json({ 
        success: true, 
        message: 'Respostas salvas com sucesso!'
    });
});

// Rota para arquivos do quiz
app.get('/quiz/*', (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

// Rota padrão para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para qualquer outro arquivo
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, req.path), (err) => {
        if (err) {
            res.status(404).send('Arquivo não encontrado');
        }
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 