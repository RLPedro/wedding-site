let currentLang = 'en';
let currentSectionId = null;

function showLandingPage() {
    currentSectionId = null;
    const main = document.getElementById('main-content');
    const texts = translations[currentLang];
    main.innerHTML = `
        <div class="landing-content">
            <h1 class="landing-title">${texts.landingTitle}</h1>
        </div>
    `;
}

function showSection(sectionId) {
    currentSectionId = sectionId;
    const main = document.getElementById('main-content');
    const section = translations[currentLang].sections.find(s => s.id === sectionId);
    if (!section) return;

    main.innerHTML = `
        <section id="${section.id}">
            <h2 class="section-title">${section.title}</h2>
            ${section.blocks.map(block => `
                <div class="content-block">
                    ${block.subtitle ? `<h3 class="section-subtitle">${block.subtitle}</h3>` : ''}
                    ${block.text.map(p => `<p class="section-body">${p}</p>`).join('')}
                </div>
            `).join('')}
        </section>
    `;
}

function bindMenuLinks() {
    document.querySelectorAll('.main-menu a[href^="#"]').forEach(link => {
        const sectionId = link.getAttribute('href').slice(1);
        if (!sectionId) return;

        link.addEventListener('click', e => {
            e.preventDefault();
            
            // Close the submenu when clicking any link
            const aboutSubmenu = document.getElementById('about-submenu');
            if (aboutSubmenu) {
                aboutSubmenu.style.display = 'none';
            }

            showSection(sectionId);
        });
    });

    const aboutLink = document.getElementById('about-the-day-link');
    const aboutSubmenu = document.getElementById('about-submenu');
    if (aboutLink && aboutSubmenu) {
        aboutLink.addEventListener('click', e => {
            e.preventDefault();
            aboutSubmenu.style.display = aboutSubmenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    const homeStamp = document.querySelector('.hero-svg-container');
    if (homeStamp) {
        homeStamp.addEventListener('click', () => {
            const aboutSubmenu = document.getElementById('about-submenu');
            if (aboutSubmenu) {
                aboutSubmenu.style.display = 'none';
            }
            showLandingPage();
        });
    }
}

function setLanguage(lang) {
    currentLang = lang;
    const texts = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.textContent = texts[key];
        }
    });

    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');

    if (currentSectionId) {
        showSection(currentSectionId);
    } else {
        showLandingPage();
    }

    localStorage.setItem('wedding-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('wedding-lang') || 'en';
    setLanguage(savedLang);
    bindMenuLinks();
});
