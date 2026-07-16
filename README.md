# Kora-Wear
Una experiencia de compra diseñada estrictamente para smartphones (Mobile-First).
# Kora Wear 🌿🐾

Kora Wear es una plataforma de e-commerce contemporánea y minimalista diseñada para ofrecer moda sostenible, accesorios premium para mascotas y artículos de decoración textil para el hogar. El proyecto nace con el objetivo de fusionar diseño de vanguardia, funcionalidad y un profundo respeto por los materiales orgánicos y reciclados.

Con una interfaz limpia, navegación intuitiva y una experiencia de usuario (UX) pulida, Kora Wear representa una solución moderna para el comercio digital enfocado en marcas de estilo de vida consciente.

---

## 🚀 Características Principales

*   **Catálogo Multicategoría Dinámico:** Organización fluida de productos divididos en colecciones principales (Mujer, Niños, Mascotas y Hogar).
*   **Filtros Avanzados e Interactivos:** Sistema de filtrado en tiempo real por categoría, subcategoría y rango de precios para una búsqueda rápida y eficiente.
*   **Diseño Visual Premium (Flat Lay & Editorial):** Fotografía de producto cuidada e integrada de manera limpia, imitando los estándares de las grandes marcas de diseño contemporáneo.
*   **Experiencia de Usuario (UX) Fluida:** Arquitectura de software diseñada para minimizar la fricción en el proceso de exploración de productos.
*   **Diseño 100% Responsivo:** Optimización completa para una visualización y navegación perfectas en dispositivos móviles, tablets y ordenadores de escritorio.

---

## 🛠️ Tecnologías Utilizadas

*   **Frontend:** HTML5, CSS3 (Metodología BEM, Flexbox, Grid) y JavaScript ES6+ para la manipulación dinámica del DOM y lógica de filtrado.
*   **Gestión de Datos:** Estructura modular en formato JSON/objetos JS (`app.js`) que simula una base de datos local para los productos del catálogo.
*   **Despliegue y Herramientas:** Control de versiones con **Git & GitHub** y despliegue rápido optimizado.

---

## 📦 Estructura del Catálogo de Productos

La base de datos local del proyecto está organizada bajo un esquema estructurado que permite una fácil escalabilidad de los productos. Cada artículo cuenta con el siguiente formato de datos:

```javascript
{
  id: "n7",
  name: "Pijama Dos Piezas Planetas",
  price: 29,
  category: "ninos",
  subcategory: "interior",
  image: "./assets/images/pijama-planetas.png",
  desc: "Estampado moderno del espacio que brilla sutilmente en la oscuridad."
}
