<header>
  <h2>AVD — Adaptive Vision Dynamics</h2>
  <nav>
    <a href="#documentacion">Documentación</a> |
    <a href="#tecnica">Técnica</a> |
    <a href="#estructura">Estructura</a> |
    <a href="#legal">Legal</a> |
    <a href="#estado">Estado</a>
  </nav>
</header>


<button id="theme-toggle-btn" class="theme-toggle" onclick="toggleTheme()">Modo oscuro 🌙</button>
<button id="lang-toggle-btn" class="theme-toggle" onclick="toggleLanguage()">Idioma: ES 🇪🇸</button>

<link rel="stylesheet" href="style.css">



Bienvenido a la documentación oficial del proyecto **AVD**, un concepto orientado a la accesibilidad visual, la legibilidad adaptativa y la optimización de contenidos en pantallas de visualización.

---

## 📘 Documentación principal {#documentacion}


- [README (English)](https://github.com/pelloweb/AVD/blob/main/01.%20README.md)
- [LEEME (Español)](https://github.com/pelloweb/AVD/blob/main/02.%20LEEME.md)

---

## 📂 Documentos técnicos {#tecnica}


- [Ficha Técnica AVD (ES)](https://github.com/pelloweb/AVD/blob/main/04.%20Ficha_Tecnica_AVD.md)
- [AVD Technical Sheet (EN)](https://github.com/pelloweb/AVD/blob/main/03.%20AVD%20Technical%20Sheet%20-%20Full%20Technical%20Document.md)
- [Algoritmo AVD (ES)](https://github.com/pelloweb/AVD/blob/main/06.%20Algoritmo_AVD.md)
- [Algorithm AVD (EN)](https://github.com/pelloweb/AVD/blob/main/05.%20Algorithm_AVD.md)

---

## 🧭 Estructura del repositorio {#estructura}


La estructura completa se actualiza automáticamente:

- [DIRECTORY_TREE.md](https://github.com/pelloweb/AVD/blob/main/DIRECTORY_TREE.md)

---

## 📜 Licencias y legal {#legal}


- [LICENSE](https://github.com/pelloweb/AVD/blob/main/07.%20LICENSE)
- [Licencia en Español](https://github.com/pelloweb/AVD/blob/main/08.%20Licencia_Español.md)
- [Jurisdicción](https://github.com/pelloweb/AVD/blob/main/09.%20Jurisdiccion.md)

---

## 🚀 Estado del proyecto {#estado}


AVD es un concepto en evolución centrado en:

- accesibilidad visual  
- legibilidad adaptativa  
- ergonomía en pantallas grandes y pequeñas  
- optimización de contenidos  

Documentos relevantes:

- [Future Work AVD](https://github.com/pelloweb/AVD/blob/main/12.%20Future%20work%20AVD.md)
- [Continuidad AVD](https://github.com/pelloweb/AVD/blob/main/13.%20Continuidad_AVD.md)
- [Release Notes oficiales](https://github.com/pelloweb/AVD/blob/main/14.%20Release%20Notes%20oficiales%20de%20AVD)

---

## 🌐 Sitio web del proyecto

Este sitio se actualiza automáticamente con cada commit en la rama `main`.

<details>
  <summary>¿Qué es AVD?</summary>
  <p>AVD es un concepto orientado a la accesibilidad visual, la legibilidad adaptativa y la optimización de contenidos en pantallas de visualización.</p>
</details>

<details>
  <summary>Objetivos del proyecto</summary>
  <ul>
    <li>Mejorar la legibilidad</li>
    <li>Adaptar contenidos a pantallas grandes y pequeñas</li>
    <li>Reducir la fatiga visual</li>
    <li>Optimizar la experiencia del usuario</li>
  </ul>
</details>

<style>

/* ------------------------------
    }

    body {
        padding: 0 10px;
    }
}
/* ------------------------------
   Mejoras de contraste en modo oscuro
   ------------------------------ */

body.dark-mode a {
    color: #7ab8ff;
}

body.dark-mode header {
    border-bottom: 1px solid #55555555;
}

body.dark-mode nav a:hover {
    color: #ffffff;
}
/* ------------------------------
   Estilos para acordeones
   ------------------------------ */

details {
    background-color: var(--header-bg);
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 12px;
    cursor: pointer;
}

details summary {
    font-weight: 600;
    font-size: 1rem;
}

details[open] {
    background-color: var(--button-bg);
}

</style>

<script src="theme.js"></script>

