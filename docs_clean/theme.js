  /* -----------------------------------------
   AVD – Adaptive Vision Dynamics
   Control de modo claro / oscuro
   ----------------------------------------- */

// Aplicar el tema guardado al cargar la página
(function() {
    const savedTheme = localStorage.getItem("avd-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
})();

// Alternar tema claro/oscuro
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    // Guardar preferencia del usuario
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("avd-theme", "dark");
    } else {
        localStorage.setItem("avd-theme", "light");
    }

    updateButtonText();
}

// Actualizar texto del botón según el tema
function updateButtonText() {
    const btn = document.getElementById("theme-toggle-btn");

    if (!btn) return;

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Modo claro ☀️";
    } else {
        btn.textContent = "Modo oscuro 🌙";
    }
}

// Actualizar el botón al cargar
document.addEventListener("DOMContentLoaded", updateButtonText);

