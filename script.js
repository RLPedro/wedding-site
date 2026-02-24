const translations = {
    pt: {
        addressLabel: 'Onde:',
        menuHowTo: 'Como chegar',
        menuSchedule: 'Horário',
        menuDressCode: 'Roupa',
        menuGifts: 'Presentes',
        weddingDate: '19 SETEMBRO 2026'
    },
    en: {
        addressLabel: 'Where:',
        menuHowTo: 'Arriving',
        menuSchedule: 'Schedule',
        menuDressCode: 'Dress code',
        menuGifts: 'Gifts',
        weddingDate: '19 SEPTEMBER 2026'
    },
    se: {
        addressLabel: 'Var:',
        menuHowTo: 'Hitta hit',
        menuSchedule: 'Schema',
        menuDressCode: 'Klädkod',
        menuGifts: 'Gåvor',
        weddingDate: '19 SEPTEMBER 2026'
    }
};

function setLanguage(lang) {
    // Hide all language content sections
    document.querySelectorAll('.lang-content').forEach(el => {
        el.style.display = 'none';
    });

    // Show selected language content
    const contentEl = document.getElementById(`content-${lang}`);
    if (contentEl) contentEl.style.display = 'block';

    // Update active button state
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update simple text elements via data-i18n
    const texts = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.textContent = texts[key];
        }
    });

    // Save preference
    localStorage.setItem('wedding-lang', lang);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('wedding-lang') || 'en';
    setLanguage(savedLang);
});
