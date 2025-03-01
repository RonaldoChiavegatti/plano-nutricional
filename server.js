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

// Servir arquivos estáticos com cache-control
app.use(express.static(path.join(__dirname), {
    maxAge: '1h',
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

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