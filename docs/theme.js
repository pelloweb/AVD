/* -----------------------------------------
   AVD – Adaptive Vision Dynamics
   Modo oscuro + Idiomas ES/EN
----------------------------------------- */

// Diccionario de textos
const AVD_TEXTS = {
    es: {
        title: "AVD – Adaptive Vision Dynamics",
        sectionTitle: "Bienvenido",
        sectionText: "AVD es un concepto experimental para interfaces adaptativas basadas en visión dinámica.",
        footer: "© 2026 AVD Project",
        themeLight: "Modo claro ☀️",
        themeDark: "Modo oscuro 🌙",
        langButton: "EN / ES"
    },
    en: {
        title: "AVD – Adaptive Vision Dynamics",
        sectionTitle: "Welcome",
        sectionText: "AVD is an experimental concept for adaptive interfaces based on dynamic vision.",
        footer: "© 2026 AVD Project",
        themeLight: "Light mode ☀️",
        themeDark: "Dark mode 🌙",
        langButton: "ES / EN"
    }
};

// Aplicar tema guardado
(function () {
    const savedTheme = localStorage.getItem("avd-theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
})();

// Alternar tema claro/oscuro
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("avd-theme", "dark");
    } else {
        localStorage.setItem("avd-theme", "light");
    }

    updateThemeButton();
}

// Actualizar texto del botón de tema
function updateThemeButton() {
    const btn = document.getElementById("theme-toggle-btn");
    const lang = localStorage.getItem("avd-lang") || "es";

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = AVD_TEXTS[lang].themeLight;
    } else {
        btn.textContent = AVD_TEXTS[lang].themeDark;
    }
}

// Aplicar idioma guardado
function applyLanguage() {
    const lang = localStorage.getItem("avd-lang") || "es";

    document.getElementById("title").textContent = AVD_TEXTS[lang].title;
    document.getElementById("section-title").textContent = AVD_TEXTS[lang].sectionTitle;
    document.getElementById("section-text").textContent = AVD_TEXTS[lang].sectionText;
    document.getElementById("footer-text").textContent = AVD_TEXTS[lang].footer;

    document.getElementById("lang-toggle-btn").textContent = AVD_TEXTS[lang].langButton;

    updateThemeButton();
}

// Alternar idioma ES/EN
function toggleLanguage() {
    const current = localStorage.getItem("avd-lang") || "es";
    const next = current === "es" ? "en" : "es";

    localStorage.setItem("avd-lang", next);
    applyLanguage();
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage();
    updateThemeButton();
});
