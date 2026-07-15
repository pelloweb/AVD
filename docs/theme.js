let currentLang = "ES";

function toggleLanguage() {
    const langBtn = document.getElementById("lang-toggle-btn");

    if (currentLang === "ES") {
        currentLang = "EN";
        langBtn.textContent = "Language: EN 🇬🇧";

        // Títulos principales
        document.getElementById("header-title").textContent = "AVD — Adaptive Vision Dynamics";
        document.getElementById("section-text").textContent =
            "Welcome to the official documentation of the AVD project, a concept focused on visual accessibility, adaptive readability, and content optimization on display screens.";

        // Menú
        document.getElementById("nav-doc").textContent = "Documentation";
        document.getElementById("nav-tech").textContent = "Technical";
        document.getElementById("nav-struct").textContent = "Structure";
        document.getElementById("nav-legal").textContent = "Legal";
        document.getElementById("nav-status").textContent = "Status";

        // Secciones
        document.getElementById("doc-title").textContent = "📘 Main Documentation";
        document.getElementById("tech-title").textContent = "📂 Technical Documents";
        document.getElementById("struct-title").textContent = "🧭 Repository Structure";
        document.getElementById("struct-text").textContent = "The complete structure updates automatically:";
        document.getElementById("legal-title").textContent = "📜 Licenses and Legal";
        document.getElementById("status-title").textContent = "🚀 Project Status";
        document.getElementById("status-text").textContent = "AVD is an evolving concept focused on:";
        document.getElementById("status-docs").textContent = "Relevant documents:";
        document.getElementById("web-title").textContent = "🌐 Project Website";
        document.getElementById("web-text").textContent =
            "This site updates automatically with each commit in the main branch.";

        // Acordeones
        document.getElementById("sum-what").textContent = "What is AVD?";
        document.getElementById("sum-what-text").textContent =
            "AVD is a concept focused on visual accessibility, adaptive readability, and content optimization on display screens.";

        document.getElementById("sum-goals").textContent = "Project Goals";
        document.getElementById("sum-goals-list").innerHTML = `
            <li>Improve readability</li>
            <li>Adapt content to large and small screens</li>
            <li>Reduce visual fatigue</li>
            <li>Optimize user experience</li>
        `;

        // Footer
        document.getElementById("footer-text").textContent = "© 2026 AVD Project";

    } else {
        currentLang = "ES";
        langBtn.textContent = "Idioma: ES 🇪🇸";

        // Títulos principales
        document.getElementById("header-title").textContent = "AVD — Adaptive Vision Dynamics";
        document.getElementById("section-text").textContent =
            "Bienvenido a la documentación oficial del proyecto AVD, un concepto orientado a la accesibilidad visual, la legibilidad adaptativa y la optimización de contenidos en pantallas de visualización.";

        // Menú
        document.getElementById("nav-doc").textContent = "Documentación";
        document.getElementById("nav-tech").textContent = "Técnica";
        document.getElementById("nav-struct").textContent = "Estructura";
        document.getElementById("nav-legal").textContent = "Legal";
        document.getElementById("nav-status").textContent = "Estado";

        // Secciones
        document.getElementById("doc-title").textContent = "📘 Documentación principal";
        document.getElementById("tech-title").textContent = "📂 Documentos técnicos";
        document.getElementById("struct-title").textContent = "🧭 Estructura del repositorio";
        document.getElementById("struct-text").textContent = "La estructura completa se actualiza automáticamente:";
        document.getElementById("legal-title").textContent = "📜 Licencias y legal";
        document.getElementById("status-title").textContent = "🚀 Estado del proyecto";
        document.getElementById("status-text").textContent = "AVD es un concepto en evolución centrado en:";
        document.getElementById("status-docs").textContent = "Documentos relevantes:";
        document.getElementById("web-title").textContent = "🌐 Sitio web del proyecto";
        document.getElementById("web-text").textContent =
            "Este sitio se actualiza automáticamente con cada commit en la rama main.";

        // Acordeones
        document.getElementById("sum-what").textContent = "¿Qué es AVD?";
        document.getElementById("sum-what-text").textContent =
            "AVD es un concepto orientado a la accesibilidad visual, la legibilidad adaptativa y la optimización de contenidos en pantallas de visualización.";

        document.getElementById("sum-goals").textContent = "Objetivos del proyecto";
        document.getElementById("sum-goals-list").innerHTML = `
            <li>Mejorar la legibilidad</li>
            <li>Adaptar contenidos a pantallas grandes y pequeñas</li>
            <li>Reducir la fatiga visual</li>
            <li>Optimizar la experiencia del usuario</li>
        `;

        // Footer
        document.getElementById("footer-text").textContent = "© 2026 AVD Project";
    }
}
