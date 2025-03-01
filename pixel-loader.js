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
        const eventParams = { ...params, ...utmParams };
        
        // Adiciona informações da página atual
        eventParams.page_title = document.title;
        eventParams.page_url = window.location.href;
        eventParams.page_path = window.location.pathname;

        fbq('track', eventName, eventParams);
        console.log(`Evento ${eventName} rastreado:`, eventParams);
    } catch (error) {
        console.error(`Erro ao rastrear evento ${eventName}:`, error);
    }
}

// Inicialização do pixel
export function initializePixel() {
    if (pixelState.initialized) {
        return;
    }

    try {
        // Aguarda o carregamento do config.js
        if (window.config && window.config.pixelId) {
            fbq('init', window.config.pixelId);
            fbq('track', 'PageView');
            pixelState.initialized = true;
            console.log('Pixel inicializado com sucesso:', window.config.pixelId);
            
            // Configura rastreamento automático
            setupAutoTracking();
        } else {
            // Se config não estiver disponível, aguarda o evento
            window.addEventListener('config:loaded', () => {
                if (window.config && window.config.pixelId) {
                    fbq('init', window.config.pixelId);
                    fbq('track', 'PageView');
                    pixelState.initialized = true;
                    console.log('Pixel inicializado com sucesso:', window.config.pixelId);
                    
                    // Configura rastreamento automático
                    setupAutoTracking();
                }
            });
        }
    } catch (error) {
        console.error('Erro ao inicializar o pixel:', error);
    }
}

// Configuração de rastreamento automático
function setupAutoTracking() {
    // Rastreia cliques em botões
    document.addEventListener('click', (e) => {
        const button = e.target.closest('button, .button, [role="button"]');
        if (button) {
            trackEvent('ButtonClick', {
                button_text: button.textContent.trim(),
                button_type: button.type || 'button',
                button_id: button.id || ''
            });
        }
    });

    // Rastreia envios de formulário
    document.addEventListener('submit', (e) => {
        if (e.target.tagName === 'FORM') {
            trackEvent('FormSubmit', {
                form_id: e.target.id || '',
                form_action: e.target.action || ''
            });
        }
    });

    // Rastreia tempo na página
    let timeOnPage = 0;
    const timeInterval = setInterval(() => {
        timeOnPage += 30;
        if (timeOnPage <= 180) { // Rastreia até 3 minutos
            trackEvent('TimeOnPage', {
                seconds: timeOnPage
            });
        } else {
            clearInterval(timeInterval);
        }
    }, 30000); // A cada 30 segundos

    // Rastreia rolagem da página
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercentage = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
        if (scrollPercentage > maxScroll) {
            maxScroll = scrollPercentage;
            if (maxScroll >= 25 && maxScroll % 25 === 0) { // 25%, 50%, 75%, 100%
                trackEvent('ScrollDepth', {
                    scroll_percentage: maxScroll
                });
            }
        }
    });
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

// Exporta as funções necessárias
export {
    trackEvent,
    trackQuizStart,
    trackQuizComplete,
    trackQuizProgress,
    trackCheckout,
    trackPurchase,
    trackAddToCart,
    trackViewContent,
    trackPlanView,
    trackSubscribe,
    preserveUTMParameters
}; 