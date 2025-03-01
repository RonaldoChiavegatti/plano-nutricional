// Remove a importação do env.js já que estamos usando window.FB_PIXEL_ID
// import env from './env.js';

// Variável para controlar o estado do pixel
const pixelState = {
    initialized: false
};

// Função para obter parâmetros UTM
function getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_term: urlParams.get('utm_term') || ''
    };

    // Salva os parâmetros UTM no localStorage para uso posterior
    if (utmParams.utm_source) {
        localStorage.setItem('utm_params', JSON.stringify(utmParams));
    }

    // Retorna os parâmetros salvos se não houver novos
    return utmParams.utm_source ? 
           utmParams : 
           JSON.parse(localStorage.getItem('utm_params') || '{}');
}

// Função base para rastreamento de eventos
function trackEvent(eventName, params = {}) {
    if (!window.fbq) {
        console.error('Pixel do Facebook não está carregado');
        return;
    }

    try {
        const utmParams = getUTMParameters();
        fbq('track', eventName, { ...params, ...utmParams });
        console.log(`Evento ${eventName} rastreado:`, { ...params, ...utmParams });
    } catch (error) {
        console.error(`Erro ao rastrear evento ${eventName}:`, error);
    }
}

// Inicialização do pixel
export function initializePixel() {
    if (pixelState.initialized || !window.env?.FACEBOOK_PIXEL_ID) {
        return;
    }

    try {
        fbq('init', window.env.FACEBOOK_PIXEL_ID);
        fbq('track', 'PageView');
        pixelState.initialized = true;
        console.log('Pixel inicializado com sucesso:', window.env.FACEBOOK_PIXEL_ID);
        
        // Rastreia eventos específicos baseados na página atual
        const currentPage = window.location.pathname;
        if (currentPage.includes('play.html')) {
            trackQuizStart();
        } else if (currentPage.includes('Checkout.html')) {
            trackCheckout();
        }
    } catch (error) {
        console.error('Erro ao inicializar o pixel:', error);
    }
}

// Eventos do Quiz
export function trackQuizStart() {
    trackEvent('StartQuiz');
}

export function trackQuizComplete(quizData) {
    trackEvent('CompleteQuiz', quizData);
}

export function trackQuizProgress(step, totalSteps) {
    trackEvent('QuizProgress', {
        step: step,
        total_steps: totalSteps,
        progress_percentage: Math.round((step/totalSteps) * 100)
    });
}

// Eventos de Checkout e Compra
export function trackCheckout() {
    trackEvent('InitiateCheckout');
}

export function trackPurchase(value, planType) {
    trackEvent('Purchase', {
        currency: 'BRL',
        value: parseFloat(value),
        content_type: 'product',
        content_name: planType,
        num_items: 1
    });
}

export function trackAddToCart(value, planType) {
    trackEvent('AddToCart', {
        currency: 'BRL',
        value: parseFloat(value),
        content_type: 'product',
        content_name: planType
    });
}

// Eventos de Visualização e Interação
export function trackViewContent(contentName, contentType = 'product', value = null) {
    const params = {
        content_name: contentName,
        content_type: contentType
    };
    
    if (value) {
        params.value = parseFloat(value);
        params.currency = 'BRL';
    }
    
    trackEvent('ViewContent', params);
}

export function trackPlanView(planType, planPrice) {
    trackEvent('PlanView', {
        plan_type: planType,
        price: parseFloat(planPrice),
        currency: 'BRL'
    });
}

export function trackSubscribe(subscriptionType = 'newsletter') {
    trackEvent('Subscribe', {
        subscription_type: subscriptionType
    });
}

// Função para preservar UTMs entre páginas
export function preserveUTMParameters(targetUrl) {
    const currentUtmParams = new URLSearchParams(window.location.search);
    const hasUtmParams = Array.from(currentUtmParams.keys()).some(key => key.startsWith('utm_'));
    
    if (!hasUtmParams) {
        const savedUtmParams = localStorage.getItem('utm_params');
        if (savedUtmParams) {
            const params = JSON.parse(savedUtmParams);
            Object.entries(params).forEach(([key, value]) => {
                if (value) currentUtmParams.set(key, value);
            });
        }
    }

    const utmString = currentUtmParams.toString();
    return utmString ? `${targetUrl}${targetUrl.includes('?') ? '&' : '?'}${utmString}` : targetUrl;
}

// Função para teste dos eventos
export function testPixelEvents() {
    console.log('Iniciando testes do pixel...');
    
    // Testa eventos básicos
    trackEvent('PageView');
    trackViewContent('Página Inicial');
    trackQuizStart();
    trackQuizProgress(1, 10);
    trackQuizComplete({ score: 80 });
    trackPlanView('Mensal', 99.90);
    trackAddToCart(99.90, 'Plano Mensal');
    trackCheckout();
    trackPurchase(99.90, 'Plano Mensal');
    
    console.log('Testes do pixel concluídos. Verifique o Facebook Pixel Helper.');
}

// Exporta a função de inicialização como loadFacebookPixel para compatibilidade
export { initializePixel as loadFacebookPixel }; 