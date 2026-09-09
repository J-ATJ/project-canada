// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app-container');
  const views = document.querySelectorAll('.view');
  const appTitle = document.querySelector('header nav h1');

  // ==========================================
  // LÓGICA DE MEMORIA AL RECARGAR
  // ==========================================
  const savedView = localStorage.getItem('currentView') || 'landing';
  const savedSection = localStorage.getItem('currentSection');

  switchView(savedView);

  if (savedSection && savedView !== 'landing') {
    setTimeout(() => {
      const targetViewEl = document.getElementById(savedView);
      if (targetViewEl) {
        const event = new CustomEvent('restoreSection', { detail: { section: savedSection } });
        targetViewEl.dispatchEvent(event);
      }
    }, 50);
  } else {
    resetInternalMenus();
  }

  // ==========================================
  // LÓGICA DE LA TARJETA DIARIA (DAILY CARD)
  // ==========================================
  function initDailyCard() {
    const dailyCardContainer = document.getElementById('daily-card');
    if (!dailyCardContainer) return;

    // Si tu base de datos db.js está vacía o no ha cargado, no hacemos nada
    if (typeof db === 'undefined' || db.length === 0) {
      dailyCardContainer.innerHTML = `<p class="no-words">Cargando palabra del día...</p>`;
      return;
    }

    const todayDate = new Date().toDateString(); // Genera un texto único por día, ej: "Thu Sep 03 2026"
    const savedDate = localStorage.getItem('dailyCardDate');
    let dailyWord;

    // Si la fecha guardada es igual a hoy, recuperar la palabra que ya tocó
    if (savedDate === todayDate) {
      dailyWord = JSON.parse(localStorage.getItem('dailyCardWord'));
    }

    // Si es un día nuevo o no hay palabra guardada, elegir una al azar
    if (!dailyWord) {
      const randomIndex = Math.floor(Math.random() * db.length);
      dailyWord = db[randomIndex];

      // Guardar la nueva palabra y la fecha de hoy en el navegador
      localStorage.setItem('dailyCardDate', todayDate);
      localStorage.setItem('dailyCardWord', JSON.stringify(dailyWord));
    }

    // Tarjeta diaria usando exactamente tu estructura de diseño
    dailyCardContainer.innerHTML = `
      <div class="word-card daily-highlight">
        <div class="word-header">
          <span class="word-en">${dailyWord.palabra}</span>
          <span class="word-type">Palabra del Día</span>
        </div>
        <div class="word-body">
          <p class="word-es"><span>${dailyWord.traduccion}</span></p>
          <div class="word-example-row">
            <div class="example-text-col">
              <p class="word-example-en"><strong>Ejemplo: </strong>${dailyWord.ejemplo_en}</p>
              <p class="word-example-es"><span><em>${dailyWord.ejemplo_es}</em></span></p>
            </div>
            <div class="example-audio-col">
              <button class="btn-audio-example" data-speak="${dailyWord.ejemplo_en}">🔊</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Ejecutar la tarjeta diaria al cargar la página
  initDailyCard();

  // 1. FUNCIÓN PRINCIPAL PARA CAMBIAR DE PANTALLA
  function switchView(targetId) {
    const targetView = document.getElementById(targetId);

    if (targetView) {
      views.forEach(view => view.classList.add('hidden'));
      targetView.classList.remove('hidden');
      localStorage.setItem('currentView', targetId);
    } else {
      console.warn(`La vista con id "${targetId}" no existe.`);
    }
  }

  // 2. FUNCIÓN DE REINICIO
  function resetInternalMenus() {
    document.querySelectorAll('.submenu-wrapper').forEach(el => {
      el.classList.remove('hidden');
    });
    document.querySelectorAll('.words-wrapper').forEach(el => {
      el.classList.add('hidden');
    });
    localStorage.removeItem('currentSection');
  }

  // 3. DETECTAR CLICS GLOBALES (Navegación y Sonidos)
  appContainer.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-target]');

    if (button) {
      const targetId = button.getAttribute('data-target');
      if (targetId === 'landing') {
        resetInternalMenus();
      }
      switchView(targetId);
      return;
    }

    const audioBtn = event.target.closest('.btn-audio-example');
    if (audioBtn) {
      event.stopPropagation();
      const textToSpeak = audioBtn.getAttribute('data-speak');
      if (textToSpeak) {
        speakWord(textToSpeak);
      }
    }
  });

  // 4. DETECTAR CLIC EN EL TÍTULO (H1) PARA REGRESAR AL INICIO
  if (appTitle) {
    appTitle.style.cursor = 'pointer';
    appTitle.addEventListener('click', () => {
      resetInternalMenus();
      switchView('landing');
    });
  }

  // 5. SONIDOS
  function speakWord(text) {
    window.speechSynthesis.cancel();
    const synth = window.speechSynthesis;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.78;
    utterance.pitch = 1;

    const voices = synth.getVoices();

    // 1. Buscamos primero voces específicas de Google locales (offline) de buena calidad
    // Google suele numerarlas (Voice I, Voice II) o añadirles "-local" al identificador.
    let mejorVoz = voices.find(v => v.lang === 'en-US' && (v.name.includes('local') || v.name.includes('Voice')));

    // 2. Si no encuentra las anteriores, busca si está activa la de Samsung nativa
    if (!mejorVoz) {
      mejorVoz = voices.find(v => v.lang === 'en-US' && v.name.toUpperCase().includes('SAMSUNG'));
    }

    // 3. Como última alternativa, toma cualquier voz en inglés americano que esté disponible
    if (!mejorVoz) {
      mejorVoz = voices.find(v => v.lang === 'en-US');
    }

    // Asignamos la voz encontrada
    if (mejorVoz) {
      utterance.voice = mejorVoz;
    }

    synth.speak(utterance);
  }


  // REGISTRO DEL SERVICE WORKER (PWA)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registrado con éxito', reg))
        .catch(err => console.warn('Error al registrar el Service Worker', err));
    });
  }


  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

});

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
