// js/verbs.js

document.addEventListener('DOMContentLoaded', () => {
    const verbsSection = document.getElementById('verbs');
    if (!verbsSection) return;

    const submenuWrapper = verbsSection.querySelector('.submenu-wrapper');
    const wordsWrapper = verbsSection.querySelector('.words-wrapper');
    const displayContainer = verbsSection.querySelector('.words-display');
    const btnBackToMenu = verbsSection.querySelector('.btn-back-to-menu');

    // 1. CAPTURAR CLICS EN EL MENÚ DE SUB-CATEGORÍAS (REGULAR / IRREGULAR)
    verbsSection.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-verb-type]');

        if (button) {
            const verbType = button.getAttribute('data-verb-type'); // 'regular' o 'irregular'
            renderVerbs(verbType);

            // Guardamos en memoria el tipo de verbo abierto para persistencia al recargar
            localStorage.setItem('currentSection', verbType);

            submenuWrapper.classList.add('hidden');
            wordsWrapper.classList.remove('hidden');
        }
    });

    // 2. VOLVER AL MENÚ DE SUB-CATEGORÍAS DE VERBOS
    btnBackToMenu.addEventListener('click', () => {
        wordsWrapper.classList.add('hidden');
        submenuWrapper.classList.remove('hidden');
        displayContainer.innerHTML = '';

        // Limpiamos la sección activa de la memoria
        localStorage.removeItem('currentSection');
    });

    // 3. ESCUCHADOR DE EVENTO PERSONALIZADO PARA RESTAURAR LA VENTANA AL RECARGAR PWA
    verbsSection.addEventListener('restoreSection', (event) => {
        const verbType = event.detail.section;
        if (verbType === 'regular' || verbType === 'irregular') {
            renderVerbs(verbType);
            submenuWrapper.classList.add('hidden');
            wordsWrapper.classList.remove('hidden');
        }
    });

    // 4. INTERACTIVIDAD TÁCTIL INTERNA (ABRIR TARJETAS Y REPRODUCIR SONIDO)
    displayContainer.addEventListener('click', (event) => {
        // Caso A: Tocar un tiempo verbal para escuchar la pronunciación
        const clickableWord = event.target.closest('.verb-clickable');
        if (clickableWord) {
            event.stopPropagation(); // Evitamos que el clic cierre la tarjeta
            const textToSpeak = clickableWord.textContent.trim().replace('»', '').trim();

            // Llamamos a la función global de síntesis de voz que ya tienes en main.js
            if (typeof speakWord === 'function') {
                speakWord(textToSpeak);
            } else if (window.speechSynthesis) {
                // Respaldo directo en caso de que la función no esté expuesta globalmente
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'en-US';
                utterance.rate = 0.78;
                window.speechSynthesis.speak(utterance);
            }
            return;
        }

        // Caso B: Tocar cualquier otra parte de la tarjeta para expandirla/colapsarla
        const card = event.target.closest('.word-card');
        if (card) {
            // EFECTO ACORDEÓN: Cierra las demás tarjetas abiertas si el usuario expande una nueva
            const isAlreadyExpanded = card.classList.contains('expanded');
            document.querySelectorAll('.word-card.expanded').forEach(openCard => {
                openCard.classList.remove('expanded');
            });

            // Si no estaba expandida, la expandimos ahora
            if (!isAlreadyExpanded) {
                card.classList.add('expanded');
            }
        }
    });

    // 5. FUNCIÓN DE RENDERIZADO DE LAS TARJETAS EXPANSIBLES
    function renderVerbs(type) {
        displayContainer.innerHTML = '';

        // Vinculamos la lista correcta declarada en js/verbs_db.js
        let filteredVerbs = [];
        if (type === 'regular' && typeof rverbs !== 'undefined') {
            filteredVerbs = rverbs;
        } else if (type === 'irregular' && typeof iverbs !== 'undefined') {
            filteredVerbs = iverbs;
        }

        if (filteredVerbs.length === 0) {
            displayContainer.innerHTML = `<p class="no-words">Próximamente más verbos para esta sección...</p>`;
            return;
        }

        // Inyectamos las tarjetas usando tu marcado semántico estilizado
        filteredVerbs.forEach(verb => {
            const card = document.createElement('div');
            card.className = 'word-card';

            card.innerHTML = `
                <div class="word-header">
                <span class="word-en verb-clickable">${verb.base_form}</span>
                <span class="word-type">${type === 'regular' ? 'REGULAR' : 'IRREGULAR'}</span>
                </div>
                <div class="word-body">
                <p class="word-es"><span>(${verb.spanish})</span></p>
                
                <!-- Pie de tarjeta indicando expansibilidad -->
                <div class="verb-footer-toggle">Tiempos verbales</div>
                
                <!-- Bloque desplegable de tiempos oculto inicialmente por CSS -->
                <div class="verb-details">
                    <div class="verb-row">
                    <span class="verb-label">Past Simple</span>
                    <span class="verb-tense verb-clickable">${verb.past_simple}</span>
                    </div>
                    <div class="verb-row">
                    <span class="verb-label">Past Participle</span>
                    <span class="verb-tense verb-clickable">${verb.past_participle}</span>
                    </div>
                    <div class="verb-row">
                    <span class="verb-label">Ing-Form (Gerund)</span>
                    <span class="verb-tense verb-clickable">${verb.ing_form}</span>
                    </div>
                </div>
                
                </div>
            `;

            displayContainer.appendChild(card);
        });
    }
});
