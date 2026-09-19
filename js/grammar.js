// js/grammar.js

document.addEventListener('DOMContentLoaded', () => {
  const grammarSection = document.getElementById('grammar');
  if (!grammarSection) return;

  const submenuWrapper = grammarSection.querySelector('.submenu-wrapper');
  const wordsWrapper = grammarSection.querySelector('.words-wrapper');
  const displayContainer = grammarSection.querySelector('.words-display');
  const btnBackToMenu = grammarSection.querySelector('.btn-back-to-menu');

  // 1. CAPTURAR CLICS EN EL MENÚ DE TEMAS GRAMATICALES
  grammarSection.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-grammar-topic]');

    if (button) {
      const topicName = button.getAttribute('data-grammar-topic'); // 'present-simple' o 'present-continuous'
      renderGrammar(topicName);

      // Guardamos en memoria el tema abierto para persistencia al recargar
      localStorage.setItem('currentSection', topicName);

      submenuWrapper.classList.add('hidden');
      wordsWrapper.classList.remove('hidden');
    }
  });

  // 2. VOLVER AL MENÚ DE TEMAS DE GRAMÁTICA
  btnBackToMenu.addEventListener('click', () => {
    wordsWrapper.classList.add('hidden');
    submenuWrapper.classList.remove('hidden');
    displayContainer.innerHTML = '';

    // Limpiamos la sección activa de la memoria
    localStorage.removeItem('currentSection');
  });

  // 3. ESCUCHADOR DE EVENTO PERSONALIZADO PARA RESTAURAR LA VENTANA AL RECARGAR PWA
  grammarSection.addEventListener('restoreSection', (event) => {
    const topicName = event.detail.section;

    // Lista con todos los temas gramaticales agregados
    const validTopics = ['present-simple', 'present-continuous', 'past-simple'];

    if (validTopics.includes(topicName)) {
      renderGrammar(topicName);
      submenuWrapper.classList.add('hidden');
      wordsWrapper.classList.remove('hidden');
    }
  });

  // 4. FUNCIÓN DE RENDERIZADO DINÁMICO DE TUS APUNTES HTML
  function renderGrammar(topic) {
    displayContainer.innerHTML = '';

    // Validamos que exista el contenido en tu js/grammar_db.js
    if (typeof grammarDB !== 'undefined' && grammarDB[topic]) {
      // Inyectamos el bloque completo de HTML puro guardado en el Template Literal
      displayContainer.innerHTML = grammarDB[topic];
      
      // Forzamos el scroll al inicio de la pantalla por comodidad en celulares
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      displayContainer.innerHTML = `<p class="no-words">Sin datos...</p>`;
    }
  }
});
