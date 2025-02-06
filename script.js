const translations = {
    en: {
        home: {
            title: "Revolutionizing the Future of Work",
            description: "Welcome to our platform, where innovation meets efficiency. Our cutting-edge solutions empower businesses to streamline operations, enhance productivity, and foster collaboration. Whether you're a startup or an enterprise, we provide the tools you need to succeed in the digital age. Join us and redefine the way you work!"
        }
    },
    de: {
        home: {
            title: "Die Zukunft der Arbeit neu definieren",
            description: "Willkommen auf unserer Plattform, wo Innovation auf Effizienz trifft. Unsere hochmodernen Lösungen helfen Unternehmen, Abläufe zu optimieren, die Produktivität zu steigern und die Zusammenarbeit zu fördern. Egal, ob Startup oder großes Unternehmen – wir bieten die Werkzeuge, die Sie für den Erfolg im digitalen Zeitalter benötigen. Werden Sie Teil unserer Community und gestalten Sie die Zukunft der Arbeit neu!"
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const langSwitcher = document.getElementById("languageSwitcher");
    const title = document.getElementById("title");
    const description = document.getElementById("description");

    function loadLanguage(lang) {
        title.textContent = translations[lang].home.title;
        description.textContent = translations[lang].home.description;
    }

    // Load default language (English)
    loadLanguage("en");

    langSwitcher.addEventListener("change", function () {
        loadLanguage(langSwitcher.value);
    });
});

