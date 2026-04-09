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

function closeAllSubmenus(exceptSubmenu) {
    document.querySelectorAll('.sub-menu').forEach(submenu => {
        if (submenu !== exceptSubmenu) {
            submenu.style.display = 'none';
        }
    });
}

function bindMenuLinks() {
    document.querySelectorAll('.main-menu a[href^="#"]').forEach(link => {
        const sectionId = link.getAttribute('href').slice(1);
        if (!sectionId) return;

        link.addEventListener('click', e => {
            e.preventDefault();
            
            // Close any submenu that doesn't contain this link
            document.querySelectorAll('.sub-menu').forEach(submenu => {
                if (!submenu.contains(link)) {
                    submenu.style.display = 'none';
                }
            });

            showSection(sectionId);
        });
    });

    // Set up toggle for each submenu parent link
    const submenuToggles = [
        { linkId: 'about-the-day-link', submenuId: 'about-submenu' },
        { linkId: 'sightseeing-link', submenuId: 'sightseeing-submenu' }
    ];

    submenuToggles.forEach(({ linkId, submenuId }) => {
        const link = document.getElementById(linkId);
        const submenu = document.getElementById(submenuId);
        if (link && submenu) {
            link.addEventListener('click', e => {
                e.preventDefault();
                const isOpen = submenu.style.display === 'block';
                closeAllSubmenus();
                if (!isOpen) {
                    submenu.style.display = 'block';
                }
            });
        }
    });

    const homeStamp = document.querySelector('.hero-svg-container');
    if (homeStamp) {
        homeStamp.addEventListener('click', () => {
            closeAllSubmenus();
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
