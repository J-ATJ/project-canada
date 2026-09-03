// js/nivel3.js

document.addEventListener('DOMContentLoaded', () => {
  const nivel3 = document.getElementById('nivel-3');
  const submenuWrapper = nivel3.querySelector('.submenu-wrapper');
  const wordsWrapper = nivel3.querySelector('.words-wrapper');
  const displayContainer = nivel3.querySelector('.words-display');
  const btnBackToMenu = nivel3.querySelector('.btn-back-to-menu');

  // 1. Capturar clics en los botones del menú de subcategorías
  nivel3.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-section]');

    if (button) {
      const sectionName = button.getAttribute('data-section');
      renderWords(sectionName);

      // Guardamos en memoria el nombre de la sección abierta
      localStorage.setItem('currentSection', sectionName);

      submenuWrapper.classList.add('hidden');
      wordsWrapper.classList.remove('hidden');
    }
  });

  // 2. Volver al menú de subcategorías del Nivel 1
  btnBackToMenu.addEventListener('click', () => {
    wordsWrapper.classList.add('hidden');
    submenuWrapper.classList.remove('hidden');
    displayContainer.innerHTML = '';

    // Limpiamos la sección de la memoria
    localStorage.removeItem('currentSection');
  });

  // 3. Escuchador de evento personalizado para restaurar la ventana al recargar
  nivel3.addEventListener('restoreSection', (event) => {
    const sectionName = event.detail.section;
    renderWords(sectionName);
    submenuWrapper.classList.add('hidden');
    wordsWrapper.classList.remove('hidden');
  });

  // 4. Función de renderizado con tu diseño limpio de columnas 80/20
  function renderWords(category) {
    displayContainer.innerHTML = '';
    const filteredWords = db.filter(item => item.categoria === category);

    if (filteredWords.length === 0) {
      displayContainer.innerHTML = `<p class="no-words">Próximamente más palabras para esta sección...</p>`;
      return;
    }

    filteredWords.forEach(item => {
      const card = document.createElement('div');
      card.className = 'word-card';

      card.innerHTML = `
                <div class="word-header">
                    <span class="word-en">${item.palabra}</span>
                    <span class="word-type">${item.tipo}</span>
                </div>
                <div class="word-body">
                    <p class="word-es"><span>${item.traduccion}</span></p>
                    <div class="word-example-row">
                        <div class="example-text-col">
                            <p class="word-example-en"><strong>Ejemplo: </strong>${item.ejemplo_en}</p>
                            <p class="word-example-es"><span><em>${item.ejemplo_es}</em></span></p>
                        </div>
                        <div class="example-audio-col">
                            <button class="btn-audio-example" data-speak="${item.ejemplo_en}">🔊</button>
                        </div>
                    </div>
                </div>
            `;

      displayContainer.appendChild(card);
    });
  }
});
