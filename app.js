/* ==========================================================================
   KORA WEAR - LÓGICA E INTERACTIVIDAD EN JAVASCRIPT (VERSION 3)
   ========================================================================== */

// 1. BASE DE DATOS LOCAL DE 50 PRODUCTOS
const CATALOGO_PRODUCTOS = [
  // ================= CATEGORÍA: MUJER =================
  { id: "m1", name: "Camisa Oversize Lino", price: 59, category: "mujer", subcategory: "camisas", image: "Images/Gemini_Generated_Image_rx5gpqrx5gpqrx5g.png", desc: "Camisa de lino italiano de silueta relajada." },
  { id: "m2", name: "Blusa Seda Minimalista", price: 79, category: "mujer", subcategory: "camisas", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500", desc: "Blusa de seda orgánica fluida." },
  { id: "m3", name: "Pantalón Sastre Pinzas", price: 89, category: "mujer", subcategory: "pantalones", image: "Images/Gemini_Generated_Image_wp29wrwp29wrwp29.png", desc: "Pantalón sastre tiro alto con pinzas marcadas." },
  { id: "m4", name: "Jeans Rectos Denim Crudo", price: 69, category: "mujer", subcategory: "pantalones", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", desc: "Vaqueros de corte recto en algodón rígido." },
  { id: "m5", name: "Leggings Técnicos Compresión", price: 49, category: "mujer", subcategory: "deporte", image: "Images/Gemini_Generated_Image_4jskf54jskf54jsk.png", desc: "Leggings de alta elasticidad y secado rápido." },
  { id: "m6", name: "Cortavientos Run Pro", price: 95, category: "mujer", subcategory: "deporte", image: "https://images.unsplash.com/photo-1502301197179-6522b1b8f51e?w=500", desc: "Chaqueta ultraligera repelente al agua." },
  { id: "m7", name: "Bralette Sin Costuras", price: 29, category: "mujer", subcategory: "interior", image: "Images/Gemini_Generated_Image_bvi1npbvi1npbvi1.png", desc: "Sujetador invisible de microfibra reciclada." },
  { id: "m8", name: "Pack Bragas Algodón Supima", price: 35, category: "mujer", subcategory: "interior", image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=500", desc: "Pack de tres piezas de tacto ultrasuave." },
  { id: "m9", name: "Bolso Tote Piel Vegana", price: 120, category: "mujer", subcategory: "accesorios", image: "Images/Gemini_Generated_Image_1s79mo1s79mo1s79.png", desc: "Bolso de hombro estructurado y espacioso." },
  { id: "m10", name: "Gafas de Sol Geométricas", price: 45, category: "mujer", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", desc: "Gafas de acetato negro con protección UV." },

  // ================= CATEGORÍA: HOMBRE =================
  { id: "h1", name: "Camisa Oxford Estructurada", price: 65, category: "hombre", subcategory: "camisas", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500", desc: "Camisa de corte slim en algodón Oxford grueso." },
  { id: "h2", name: "Camisa Bowling Rayas", price: 55, category: "hombre", subcategory: "camisas", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", desc: "Camisa fluida con cuello de solapa." },
  { id: "h3", name: "Pantalón Chino Regular", price: 75, category: "hombre", subcategory: "pantalones", image: "Images/Gemini_Generated_Image_dhy6ztdhy6ztdhy6.png", desc: "Pantalón chino elástico de algodón lavado." },
  { id: "h4", name: "Pantalón Cargo Técnico", price: 85, category: "hombre", subcategory: "pantalones", image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=500", desc: "Corte relajado con múltiples bolsillos funcionales." },
  { id: "h5", name: "Sudadera Capucha Active", price: 69, category: "hombre", subcategory: "deporte", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", desc: "Tejido térmico transpirable para entrenamiento." },
  { id: "h6", name: "Pantalón Jogger Track", price: 59, category: "hombre", subcategory: "deporte", image: "https://images.unsplash.com/photo-1483721074892-4a8b19c5fc25?w=500", desc: "Jogger ergonómico con cintura elástica regulable." },
  { id: "h7", name: "Boxer de Bambú Premium", price: 24, category: "hombre", subcategory: "interior", image: "Images/Gemini_Generated_Image_scl61qscl61qscl6.png", desc: "Fibra de bambú hipoalergénica y transpirable." },
  { id: "h8", name: "Camiseta Interior Invisible", price: 19, category: "hombre", subcategory: "interior", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500", desc: "Cuello de pico profundo en algodón elástico." },
  { id: "h9", name: "Mochila Enrollable Urbana", price: 110, category: "hombre", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", desc: "Mochila impermeable con compartimento de portátil." },
  { id: "h10", name: "Gorra Panel Minimal", price: 29, category: "hombre", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500", desc: "Gorra ajustable sin logos en sarga de algodón." },

  // ================= CATEGORÍA: NIÑOS =================
  { id: "n1", name: "Camisa Cuadros Sarga", price: 32, category: "ninos", subcategory: "camisas", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500", desc: "Camisa de sarga resistente y suave para juegos." },
  { id: "n2", name: "Camiseta Gráfica Orgánica", price: 19, category: "ninos", subcategory: "camisas", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500", desc: "Camiseta con ilustración moderna estampada con tintas al agua." },
  { id: "n3", name: "Pantalón Cordón Casual", price: 38, category: "ninos", subcategory: "pantalones", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500", desc: "Cintura elástica para facilitar el movimiento y el juego." },
  { id: "n4", name: "Petos Denim Flex", price: 42, category: "ninos", subcategory: "pantalones", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500", desc: "Petos vaqueros clásicos con tejido súper elástico." },
  { id: "n5", name: "Cortavientos Infantil Block", price: 48, category: "ninos", subcategory: "deporte", image: "Images/Gemini_Generated_Image_p3gputp3gputp3gp.png", desc: "Diseño con bloques de color llamativos y bandas reflectantes." },
  { id: "n6", name: "Pantalón Chándal Felpa", price: 28, category: "ninos", subcategory: "deporte", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500", desc: "Algodón perchado muy cálido de tacto mullido." },
  { id: "n7", name: "Pijama Dos Piezas Planetas", price: 29, category: "ninos", subcategory: "interior", image: "Images/Gemini_Generated_Image_pn49mjpn49mjpn49.png", desc: "Estampado moderno del espacio que brilla sutilmente en la oscuridad." },
  { id: "n8", name: "Pack Calcetines Antideslizantes", price: 14, category: "ninos", subcategory: "interior", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500", desc: "Pack de 5 pares con suela de silicona de seguridad." },
  { id: "n9", name: "Gorro Punto Pompón", price: 16, category: "ninos", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500", desc: "Gorro de lana merina suave para proteger del frío." },
  { id: "n10", name: "Mochila Escolar Koala", price: 35, category: "ninos", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500", desc: "Mochila ergonómica y ligera para el día a día." },

  // ================= CATEGORÍA: ANIMALES =================
  { id: "a1", name: "Camisa Camuflaje Dog", price: 25, category: "animales", subcategory: "camisas", image: "Images/Gemini_Generated_Image_n8oqxwn8oqxwn8oq.png", desc: "Camisa ligera de sarga para perritos urbanos." },
  { id: "a2", name: "Chaleco Acolchado Polar", price: 35, category: "animales", subcategory: "camisas", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", desc: "Abrigo térmico e impermeable de fácil abrochado." },
  { id: "a3", name: "Pantalones Protectores Lluvia", price: 22, category: "animales", subcategory: "pantalones", image: "Images/Gemini_Generated_Image_o2ke3o2ke3o2ke3o.png", desc: "Pantalón protector elástico para días de barro." },
  { id: "a4", name: "Botines de Neopreno (Set)", price: 28, category: "animales", subcategory: "pantalones", image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=500", desc: "Zapatitos con suela antideslizante para asfalto caliente o nieve." },
  { id: "a5", name: "Arnés de Trekking Adventure", price: 45, category: "animales", subcategory: "deporte", image: "Images/Gemini_Generated_Image_76ghmj76ghmj76gh.png", desc: "Arnés de soporte ergonómico para senderismo y paseos." },
  { id: "a6", name: "Chubasquero Run Reflectante", price: 32, category: "animales", subcategory: "deporte", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", desc: "Chubasquero ligero transpirable de alta visibilidad." },
  { id: "a7", name: "Pijama Algodón Soft-Touch", price: 24, category: "animales", subcategory: "interior", image: "Images/Gemini_Generated_Image_gxrfzhgxrfzhgxrf.png", desc: "Mono interior de algodón suave para mantener el calor nocturno." },
  { id: "a8", name: "Body Post-Operatorio Elástico", price: 19, category: "animales", subcategory: "interior", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", desc: "Alternativa cómoda al collar isabelino tradicional." },
  { id: "a9", name: "Collar Soga y Bronce", price: 29, category: "animales", subcategory: "accesorios", image: "Images/Gemini_Generated_Image_bx1mdjbx1mdjbx1m.png", desc: "Collar artesanal de alta resistencia con acabados metálicos." },
  { id: "a10", name: "Correa Multiposición Cuero", price: 49, category: "animales", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1541599540903-216a46ca1fc0?w=500", desc: "Correa ajustable de piel natural curtida al vegetal." },

  // ================= CATEGORÍA: HOGAR =================
  { id: "ho1", name: "Funda Cojín Lino Orgánico", price: 25, category: "hogar", subcategory: "camisas", image: "Images/Gemini_Generated_Image_d0xhvwd0xhvwd0xh.png", desc: "Funda textil texturizada de estilo minimalista." },
  { id: "ho2", name: "Mantelería Algodón Gofrado", price: 45, category: "hogar", subcategory: "camisas", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500", desc: "Mantel rústico con diseño contemporáneo desflecado." },
  { id: "ho3", name: "Camino de Mesa Macramé", price: 29, category: "hogar", subcategory: "pantalones", image: "Images/Gemini_Generated_Image_pm9t2bpm9t2bpm9t.png", desc: "Camino textil alargado con detalles tejidos a mano." },
  { id: "ho4", name: "Alfombra Pasillera Lana", price: 89, category: "hogar", subcategory: "pantalones", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500", desc: "Alfombra larga de lana hilada con patrón geométrico." },
  { id: "ho5", name: "Esterilla Yoga Corcho Premium", price: 65, category: "hogar", subcategory: "deporte", image: "Images/Gemini_Generated_Image_ihe3ffihe3ffihe3.png", desc: "Esterilla de corcho natural con guías de alineación grabadas." },
  { id: "ho6", name: "Bloques Soporte Madera (Par)", price: 29, category: "hogar", subcategory: "deporte", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500", desc: "Bloques de yoga en madera de abedul pulida." },
  { id: "ho7", name: "Funda Nórdica Satén Algodón", price: 110, category: "hogar", subcategory: "interior", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500", desc: "Ropa de cama suave con acabado ligeramente satinado y cierre oculto." },
  { id: "ho8", name: "Sábana Bajera Ajustable Seda", price: 79, category: "hogar", subcategory: "interior", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500", desc: "Sábana ajustable de seda de morera para máximo confort." },
  { id: "ho9", name: "Vela Cera Soja Concreta", price: 24, category: "hogar", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500", desc: "Vela artesanal perfumada en vaso arquitectónico de hormigón." },
  { id: "ho10", name: "Jarrón Cerámica Escultórico", price: 39, category: "hogar", subcategory: "accesorios", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500", desc: "Jarrón de arcilla blanca de silueta orgánica y contemporánea." }
];

// Enriquecer dinámicamente los productos para la lógica interna (tallas, colores, novedad)
const productos = CATALOGO_PRODUCTOS.map(p => {
  // Extraer la parte numérica del ID
  const numId = parseInt(p.id.replace(/\D/g, '')) || 1;
  const isOdd = numId % 2 !== 0;
  
  // Tallas según subcategoría o categoría
  let sizes = ["S", "M", "L", "XL"];
  if (p.subcategory === "accesorios") {
    sizes = ["Única"];
  } else if (p.category === "ninos") {
    sizes = ["2 años", "4 años", "6 años", "8 años"];
  } else if (p.category === "animales") {
    sizes = ["XS", "S", "M", "L"];
  } else if (p.category === "hogar") {
    if (p.subcategory === "interior") {
      sizes = ["150x200 cm", "220x240 cm"];
    } else if (p.subcategory === "camisas" || p.subcategory === "pantalones") {
      // Cojines y manteles
      sizes = ["50x50 cm", "140x200 cm", "Única"];
    } else {
      sizes = ["Única"];
    }
  }

  return {
    ...p,
    esNovedad: isOdd, // Impar = Novedad
    isColeccion2026: !isOdd, // Par = Colección 2026
    sizes: sizes,
    colors: [
      { name: "Crudo", hex: "#f5f2eb" },
      { name: "Negro Mate", hex: "#121212" }
    ]
  };
});

// 2. DIAPOSITIVAS DEL CAROUSEL DE NOVEDADES
const carouselSlidesData = [
  {
    id: "m1",
    title: "Camisa Oversize Lino",
    desc: "Silueta relajada en lino italiano, ideal para las tardes de verano.",
    precio: "59,00 €",
    image: "Images/Gemini_Generated_Image_rx5gpqrx5gpqrx5g.png"
  },
  {
    id: "h9",
    title: "Mochila Enrollable",
    desc: "Impermeabilidad y compartimentos técnicos para el ritmo urbano.",
    precio: "110,00 €",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
  },
  {
    id: "a5",
    title: "Arnés Trekking Adventure",
    desc: "Soporte ergonómico premium para rutas y paseos diarios.",
    precio: "45,00 €",
    image: "Images/Gemini_Generated_Image_76ghmj76ghmj76gh.png"
  }
];

// 3. ESTADO GLOBAL DE LA APLICACIÓN
const state = {
  cart: JSON.parse(localStorage.getItem('kora_cart_v3')) || [],
  favorites: JSON.parse(localStorage.getItem('kora_favorites_v3')) || [],
  
  // Jerarquía de navegación de 3 niveles
  collection: 'novedades',     // 'novedades' | 'coleccion2026' | 'favoritos'
  section: 'mujer',            // 'mujer' | 'hombre' | 'ninos' | 'animales' | 'hogar'
  subcategory: 'todos',        // 'todos' | 'camisas' | 'pantalones' | 'deporte' | 'interior' | 'accesorios'

  // Detalles en Modal
  selectedProduct: null,
  selectedSize: null,
  selectedColor: null
};

// 4. ELEMENTOS DEL DOM
const DOM = {
  // Navigation Containers
  level1Container: document.getElementById('level1-container'),
  level2Container: document.getElementById('level2-container'),
  level3Container: document.getElementById('level3-container'),
  
  // Headers & Badges
  wishlistBadge: document.getElementById('wishlist-badge-count'),
  cartBadge: document.getElementById('cart-badge-count'),
  wishlistToggle: document.getElementById('wishlist-btn'),
  cartToggle: document.getElementById('cart-toggle-btn'),
  hamburgerBtn: document.getElementById('hamburger-btn'),
  
  // Main Contents
  mainContent: document.querySelector('.main-content'),
  productGrid: document.getElementById('product-grid'),
  productCountLabel: document.getElementById('product-count-label'),
  catalogTitle: document.getElementById('catalog-title'),
  
  // Novelty Carousel Elements
  mainCarousel: document.getElementById('main-carousel'),
  carouselTrack: document.getElementById('carousel-track'),
  carouselDots: document.getElementById('carousel-dots'),
  carouselPrev: document.getElementById('carousel-prev'),
  carouselNext: document.getElementById('carousel-next'),
  
  // Hamburger Side Menu
  sideMenu: document.getElementById('side-menu'),
  menuOverlay: document.getElementById('menu-overlay'),
  menuCloseBtn: document.getElementById('menu-close-btn'),
  accordionTrigger: document.getElementById('accordion-trigger'),
  accordionContent: document.getElementById('accordion-content'),
  
  // Cart Sidebar
  cartSidebar: document.getElementById('cart-sidebar'),
  cartSidebarOverlay: document.getElementById('cart-sidebar-overlay'),
  cartClose: document.getElementById('cart-close-btn'),
  cartItemsList: document.getElementById('cart-items-list'),
  cartFooter: document.getElementById('cart-footer'),
  cartTotalPrice: document.getElementById('cart-total-price'),
  checkoutBtn: document.getElementById('checkout-btn'),
  cartEmptyContinueBtn: document.getElementById('cart-empty-continue-btn'),
  
  // Modal de Detalles
  productModal: document.getElementById('product-modal'),
  productModalOverlay: document.getElementById('product-modal-overlay'),
  modalClose: document.getElementById('modal-close-btn'),
  modalGalleryWrapper: document.getElementById('modal-gallery-wrapper'),
  modalGalleryDots: document.getElementById('modal-gallery-dots'),
  modalProductTitle: document.getElementById('modal-product-title'),
  modalProductPrice: document.getElementById('modal-product-price'),
  modalProductDesc: document.getElementById('modal-product-desc'),
  modalColorOptions: document.getElementById('modal-color-options'),
  modalSizeOptions: document.getElementById('modal-size-options'),
  selectedColorName: document.getElementById('selected-color-name'),
  selectedSizeName: document.getElementById('selected-size-name'),
  addToCartModalBtn: document.getElementById('add-to-cart-modal-btn'),
  modalBtnPrice: document.getElementById('modal-btn-price'),
  
  // Toast notifications
  toastContainer: document.getElementById('toast-container')
};

// 5. VARIABLES DE CONTROL DEL CAROUSEL HERO
let currentCarouselIdx = 0;
let carouselTimer = null;
let carouselInteractionTimer = null;

// 6. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  updateBadges();
  renderLevel3Subcategories();
  renderCarouselSlides();
  startCarouselAutoplay();
  filtrarProductos();
  renderCart();
});

// 7. CONFIGURACIÓN DE EVENT LISTENERS
function initEvents() {
  // --- Nivel 1: Colecciones ---
  DOM.level1Container.addEventListener('click', (e) => {
    const btn = e.target.closest('.level1-btn');
    if (!btn) return;
    
    document.querySelectorAll('.level1-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    state.collection = btn.dataset.collection;
    
    // Sincronizar clases activas en los enlaces del menú lateral también
    document.querySelectorAll('.side-menu-link').forEach(link => {
      link.classList.toggle('active', link.dataset.targetCollection === state.collection);
    });
    
    if (state.collection === 'novedades') {
      DOM.mainCarousel.classList.remove('hidden');
      startCarouselAutoplay();
    } else {
      DOM.mainCarousel.classList.add('hidden');
      stopCarouselAutoplay();
    }
    
    state.subcategory = 'todos';
    renderLevel3Subcategories();
    filtrarProductos();
  });

  // --- Nivel 2: Secciones principales ---
  DOM.level2Container.addEventListener('click', (e) => {
    const btn = e.target.closest('.level2-btn');
    if (!btn) return;
    
    document.querySelectorAll('.level2-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    state.section = btn.dataset.section;
    
    // Sincronizar clases activas en el menú lateral
    document.querySelectorAll('.accordion-link').forEach(link => {
      link.classList.toggle('active', link.dataset.targetSection === state.section);
    });
    
    if (state.collection === 'favoritos') {
      state.collection = 'novedades';
      document.getElementById('col-novedades').classList.add('active');
      DOM.mainCarousel.classList.remove('hidden');
      startCarouselAutoplay();
    }
    
    // Reiniciar subcategoría a "todos"
    state.subcategory = 'todos';
    
    renderLevel3Subcategories();
    filtrarProductos();
  });

  // --- Nivel 3: Subcategorías dinámicas ---
  DOM.level3Container.addEventListener('click', (e) => {
    const btn = e.target.closest('.level3-btn');
    if (!btn) return;
    
    document.querySelectorAll('.level3-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    state.subcategory = btn.dataset.subcategory;
    filtrarProductos();
  });

  // --- Menú Lateral Hamburguesa ---
  DOM.hamburgerBtn.addEventListener('click', openSideMenu);
  DOM.menuCloseBtn.addEventListener('click', closeSideMenu);
  DOM.menuOverlay.addEventListener('click', closeSideMenu);
  
  // Acordeón de Categorías
  DOM.accordionTrigger.addEventListener('click', () => {
    DOM.accordionTrigger.classList.toggle('active');
    DOM.accordionContent.classList.toggle('expanded');
  });

  // Navegación dentro del menú lateral (Colecciones)
  DOM.sideMenu.addEventListener('click', (e) => {
    const link = e.target.closest('[data-target-collection]');
    if (link) {
      e.preventDefault();
      closeSideMenu();
      
      const coll = link.dataset.targetCollection;
      const targetBtn = document.querySelector(`.level1-btn[data-collection="${coll}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    }
  });

  // Navegación dentro del menú lateral (Secciones / Acordeón)
  DOM.sideMenu.addEventListener('click', (e) => {
    const link = e.target.closest('[data-target-section]');
    if (link) {
      e.preventDefault();
      closeSideMenu();
      
      const sec = link.dataset.targetSection;
      const targetBtn = document.querySelector(`.level2-btn[data-section="${sec}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    }
  });
  
  // --- Carrito de Compras Lateral ---
  DOM.cartToggle.addEventListener('click', openCart);
  DOM.cartClose.addEventListener('click', closeCart);
  DOM.cartSidebarOverlay.addEventListener('click', closeCart);
  DOM.cartEmptyContinueBtn.addEventListener('click', closeCart);
  DOM.checkoutBtn.addEventListener('click', handleCheckout);
  
  // --- Detalle en Modal ---
  DOM.modalClose.addEventListener('click', closeModal);
  DOM.productModalOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.productModalOverlay) closeModal();
  });
  DOM.addToCartModalBtn.addEventListener('click', handleModalAddToCart);

  // --- Botón Wishlist en Cabecera ---
  DOM.wishlistToggle.addEventListener('click', () => {
    if (state.collection === 'favoritos') {
      document.getElementById('col-novedades').click();
    } else {
      document.querySelectorAll('.level1-btn').forEach(b => b.classList.remove('active'));
      state.collection = 'favoritos';
      DOM.mainCarousel.classList.add('hidden');
      stopCarouselAutoplay();
      state.subcategory = 'todos';
      renderLevel3Subcategories();
      filtrarProductos();
    }
  });

  // --- Controles del Carrusel Hero ---
  DOM.carouselPrev.addEventListener('click', () => {
    pauseCarouselTemporarily();
    navigateCarousel(-1);
  });
  
  DOM.carouselNext.addEventListener('click', () => {
    pauseCarouselTemporarily();
    navigateCarousel(1);
  });
  
  DOM.carouselDots.addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-dot');
    if (!dot) return;
    pauseCarouselTemporarily();
    const idx = parseInt(dot.dataset.idx);
    moveCarouselTo(idx);
  });

  // --- Eventos Delegados en el Catálogo (Cards) ---
  DOM.productGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const heartBtn = e.target.closest('.card-wishlist-btn');
    const quickAddBtn = e.target.closest('.card-quick-add-btn');
    
    if (heartBtn) {
      e.stopPropagation();
      const id = heartBtn.dataset.id;
      toggleFavorite(id, heartBtn);
      return;
    }
    
    if (quickAddBtn) {
      e.stopPropagation();
      const id = quickAddBtn.dataset.id;
      handleQuickAdd(id);
      return;
    }
    
    if (card) {
      const id = card.dataset.id;
      openProductModal(id);
    }
  });

  // --- Eventos Delegados para interactuar dentro del Carrito ---
  DOM.cartItemsList.addEventListener('click', (e) => {
    const plusBtn = e.target.closest('.qty-plus');
    const minusBtn = e.target.closest('.qty-minus');
    const deleteBtn = e.target.closest('.cart-item-delete-btn');
    const itemEl = e.target.closest('.cart-item');
    
    if (!itemEl) return;
    const key = itemEl.dataset.key;
    
    if (plusBtn) {
      modifyCartQuantity(key, 1);
    } else if (minusBtn) {
      modifyCartQuantity(key, -1);
    } else if (deleteBtn) {
      removeFromCart(key);
    }
  });
}

// 8. LÓGICA DE CAROUSEL AUTOMATIZADO Y PAUSABLE
function renderCarouselSlides() {
  DOM.carouselTrack.innerHTML = carouselSlidesData.map(slide => `
    <div class="carousel-slide" data-product-id="${slide.id}">
      <img src="${slide.image}" alt="${slide.title}" loading="lazy">
      <div class="carousel-info">
        <h3 class="carousel-title">${slide.title}</h3>
        <p class="carousel-desc">${slide.desc}</p>
        <span class="carousel-price">${slide.precio}</span>
      </div>
    </div>
  `).join('');
  
  DOM.carouselDots.innerHTML = carouselSlidesData.map((_, idx) => `
    <button class="carousel-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}" aria-label="Ver diapositiva ${idx + 1}"></button>
  `).join('');
}

function startCarouselAutoplay() {
  stopCarouselAutoplay();
  carouselTimer = setInterval(() => {
    navigateCarousel(1);
  }, 4000);
}

function stopCarouselAutoplay() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}

function pauseCarouselTemporarily() {
  stopCarouselAutoplay();
  if (carouselInteractionTimer) {
    clearTimeout(carouselInteractionTimer);
  }
  // Reanuda el autoplay tras 8 segundos de inactividad
  carouselInteractionTimer = setTimeout(() => {
    if (state.collection === 'novedades') {
      startCarouselAutoplay();
    }
  }, 8000);
}

function navigateCarousel(direction) {
  let nextIdx = currentCarouselIdx + direction;
  const totalSlides = carouselSlidesData.length;
  
  if (nextIdx >= totalSlides) {
    nextIdx = 0;
  } else if (nextIdx < 0) {
    nextIdx = totalSlides - 1;
  }
  
  moveCarouselTo(nextIdx);
}

function moveCarouselTo(index) {
  currentCarouselIdx = index;
  DOM.carouselTrack.style.transform = `translateX(-${index * 100}%)`;
  
  // Actualizar dots
  document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// 9. RENDERIZADO DINÁMICO DE SUBCATEGORÍAS (Nivel 3)
function renderLevel3Subcategories() {
  if (state.collection === 'favoritos') {
    DOM.level3Container.innerHTML = `
      <button class="level3-btn active" data-subcategory="todos">Tus Guardados</button>
    `;
    return;
  }

  const subcats = [
    { name: "Ver Todo", value: "todos" },
    { name: "Camisas", value: "camisas" },
    { name: "Pantalones", value: "pantalones" },
    { name: "Ropa de Deporte", value: "deporte" },
    { name: "Ropa Interior", value: "interior" },
    { name: "Accesorios", value: "accesorios" }
  ];

  // Filtrar subcategorías en base a los 50 productos
  const availableSubcats = subcats.filter(sc => {
    if (sc.value === "todos") return true;
    return productos.some(p => p.category === state.section && p.subcategory === sc.value);
  });

  DOM.level3Container.innerHTML = availableSubcats.map(sc => `
    <button class="level3-btn ${state.subcategory === sc.value ? 'active' : ''}" data-subcategory="${sc.value}">
      ${sc.name}
    </button>
  `).join('');
}

// 10. FUNCIÓN GLOBAL DE FILTRADO
function filtrarProductos() {
  let filtrados = productos;
  
  if (state.collection === 'favoritos') {
    DOM.catalogTitle.textContent = "Mis Favoritos";
    filtrados = productos.filter(p => state.favorites.includes(p.id));
  } else {
    DOM.catalogTitle.textContent = state.collection === 'novedades' ? "Novedades" : "Colección 2026";
    
    // 1. Filtrar por Colección (Nivel 1)
    if (state.collection === 'novedades') {
      filtrados = filtrados.filter(p => p.esNovedad);
    } else if (state.collection === 'coleccion2026') {
      filtrados = filtrados.filter(p => p.isColeccion2026);
    }
    
    // 2. Filtrar por Sección (Nivel 2)
    filtrados = filtrados.filter(p => p.category === state.section);
    
    // 3. Filtrar por Subcategoría (Nivel 3)
    if (state.subcategory !== 'todos') {
      filtrados = filtrados.filter(p => p.subcategory === state.subcategory);
    }
  }

  // Actualizar etiqueta de recuento
  DOM.productCountLabel.textContent = `${filtrados.length} artículo${filtrados.length !== 1 ? 's' : ''}`;
  
  // Transición de opacidad en el Grid
  DOM.productGrid.style.opacity = '0';
  DOM.productGrid.style.transition = 'opacity 0.2s ease';
  
  setTimeout(() => {
    renderProductCards(filtrados);
    DOM.productGrid.style.opacity = '1';
  }, 180);
}

function renderProductCards(items) {
  if (items.length === 0) {
    DOM.productGrid.innerHTML = `
      <div class="empty-catalog" style="grid-column: span 2; text-align: center; padding: 40px 16px; color: var(--text-muted);">
        <p style="font-size: 13px;">No hay productos que coincidan con esta selección.</p>
      </div>
    `;
    return;
  }
  
  DOM.productGrid.innerHTML = items.map((product, index) => {
    const isFav = state.favorites.includes(product.id);
    const badgeHTML = product.esNovedad ? `<span class="card-badge">Novedad</span>` : '';
    
    return `
      <article class="product-card fade-in" data-id="${product.id}" style="animation-delay: ${index * 0.02}s">
        <div class="product-card-img-container">
          ${badgeHTML}
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy">
          
          <button class="card-wishlist-btn ${isFav ? 'active' : ''}" data-id="${product.id}" aria-label="Favorito">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <button class="card-quick-add-btn" data-id="${product.id}" aria-label="Añadir rápido">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
        <div class="product-card-info">
          <span class="product-card-category">${product.subcategory}</span>
          <h3 class="product-card-title">${product.name}</h3>
          <span class="product-card-price">${product.price.toFixed(2).replace('.', ',')} €</span>
        </div>
      </article>
    `;
  }).join('');
}

// 11. GESTIÓN DE FAVORITOS (Wishlist)
function toggleFavorite(id, btnEl) {
  const idx = state.favorites.indexOf(id);
  let isAdded = false;
  
  if (idx === -1) {
    state.favorites.push(id);
    isAdded = true;
    showToast("Añadido a tus favoritos");
  } else {
    state.favorites.splice(idx, 1);
    showToast("Eliminado de tus favoritos");
  }
  
  // Guardar en LocalStorage
  localStorage.setItem('kora_favorites_v3', JSON.stringify(state.favorites));
  updateBadges();
  
  if (btnEl) {
    btnEl.classList.toggle('active', isAdded);
  }
  
  if (state.collection === 'favoritos' && !isAdded) {
    filtrarProductos();
  }
}

// 12. COMPRA RÁPIDA (Quick Add)
function handleQuickAdd(id) {
  const p = productos.find(prod => prod.id === id);
  if (!p) return;
  
  if (p.sizes.length === 1 && p.sizes[0] === "Única") {
    addItemToCart(p.id, "Única", p.colors[0].name, p.colors[0].hex, 1);
    showToast(`Bolsa: ${p.name}`, "Ver Bolsa", openCart);
  } else {
    openProductModal(id);
  }
}

// 13. DETALLE DE PRODUCTO EN MODAL
function openProductModal(id) {
  const p = productos.find(prod => prod.id === id);
  if (!p) return;
  
  state.selectedProduct = p;
  state.selectedSize = null;
  state.selectedColor = p.colors[0]; // Color predeterminado
  
  // Rellenar información básica
  DOM.modalProductTitle.textContent = p.name;
  DOM.modalProductPrice.textContent = `${p.price.toFixed(2).replace('.', ',')} €`;
  DOM.modalProductDesc.textContent = p.desc;
  DOM.modalBtnPrice.textContent = `${p.price.toFixed(2).replace('.', ',')} €`;
  
  // Cargar imagen única del modal
  DOM.modalGalleryWrapper.innerHTML = `
    <img src="${p.image}" alt="${p.name}" class="gallery-img" data-product-id="${p.id}">
  `;
  
  // Cargar puntos de paginación del modal (1 punto de imagen)
  DOM.modalGalleryDots.innerHTML = `
    <span class="gallery-dot active"></span>
  `;
  
  // Rellenar colores
  DOM.selectedColorName.textContent = p.colors[0].name;
  DOM.modalColorOptions.innerHTML = p.colors.map((color, idx) => `
    <div class="color-dot ${idx === 0 ? 'selected' : ''}" 
         style="background-color: ${color.hex}" 
         data-name="${color.name}" 
         data-hex="${color.hex}" 
         title="${color.name}">
    </div>
  `).join('');
  
  // Rellenar tallas
  DOM.selectedSizeName.textContent = "Elige una";
  DOM.modalSizeOptions.innerHTML = p.sizes.map(size => `
    <button class="size-option-btn" data-size="${size}">${size}</button>
  `).join('');
  
  setupModalSelectionEvents();
  
  // Mostrar modal
  DOM.productModalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function setupModalSelectionEvents() {
  DOM.modalColorOptions.onclick = (e) => {
    const dot = e.target.closest('.color-dot');
    if (!dot) return;
    
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
    dot.classList.add('selected');
    
    state.selectedColor = {
      name: dot.dataset.name,
      hex: dot.dataset.hex
    };
    DOM.selectedColorName.textContent = state.selectedColor.name;
  };
  
  DOM.modalSizeOptions.onclick = (e) => {
    const btn = e.target.closest('.size-option-btn');
    if (!btn) return;
    
    document.querySelectorAll('.size-option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    
    state.selectedSize = btn.dataset.size;
    DOM.selectedSizeName.textContent = state.selectedSize;
  };
}

function closeModal() {
  DOM.productModalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
  state.selectedProduct = null;
  state.selectedSize = null;
  state.selectedColor = null;
}

function handleModalAddToCart() {
  if (!state.selectedProduct) return;
  
  if (!state.selectedSize) {
    showToast("Por favor, selecciona una talla primero");
    DOM.modalSizeOptions.style.transform = 'scale(1.02)';
    setTimeout(() => DOM.modalSizeOptions.style.transform = 'scale(1)', 150);
    return;
  }
  
  addItemToCart(
    state.selectedProduct.id,
    state.selectedSize,
    state.selectedColor.name,
    state.selectedColor.hex,
    1
  );
  
  closeModal();
  showToast("Producto añadido al carrito", "Ver Bolsa", openCart);
}

// 14. COMPORTAMIENTO DEL CARRITO (Bolsa de compra)
function addItemToCart(id, size, colorName, colorHex, qty) {
  const p = productos.find(prod => prod.id === id);
  if (!p) return;
  
  const key = `${id}_${size}_${colorName}`;
  const existing = state.cart.find(item => item.key === key);
  
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      key: key,
      id: p.id,
      nombre: p.name,
      precio: p.price,
      image: p.image,
      size: size,
      color: { name: colorName, hex: colorHex },
      quantity: qty
    });
  }
  
  localStorage.setItem('kora_cart_v3', JSON.stringify(state.cart));
  updateBadges();
  renderCart();
  
  DOM.cartBadge.classList.add('bounce');
  DOM.cartBadge.addEventListener('animationend', () => {
    DOM.cartBadge.classList.remove('bounce');
  }, { once: true });
}

function modifyCartQuantity(key, change) {
  const item = state.cart.find(it => it.key === key);
  if (!item) return;
  
  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(key);
    return;
  }
  
  localStorage.setItem('kora_cart_v3', JSON.stringify(state.cart));
  updateBadges();
  renderCart();
}

function removeFromCart(key) {
  const idx = state.cart.findIndex(it => it.key === key);
  if (idx === -1) return;
  
  const name = state.cart[idx].nombre;
  state.cart.splice(idx, 1);
  
  localStorage.setItem('kora_cart_v3', JSON.stringify(state.cart));
  updateBadges();
  renderCart();
  showToast(`Eliminado: ${name}`);
}

function renderCart() {
  if (state.cart.length === 0) {
    DOM.cartItemsList.innerHTML = `
      <div class="cart-empty-message">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="empty-cart-icon">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Tu bolsa está vacía.</p>
        <button class="btn btn-outline" id="cart-empty-continue-btn-inner" style="font-size: 10px; padding: 8px 16px;">Seguir Comprando</button>
      </div>
    `;
    
    const innerBtn = document.getElementById('cart-empty-continue-btn-inner');
    if (innerBtn) {
      innerBtn.onclick = closeCart;
    }
    
    DOM.cartFooter.classList.add('hidden');
    return;
  }
  
  DOM.cartFooter.classList.remove('hidden');
  
  DOM.cartItemsList.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <img src="${item.image}" alt="${item.nombre}" class="cart-item-img">
      <div class="cart-item-details">
        <div>
          <h4 class="cart-item-name">${item.nombre}</h4>
          <p class="cart-item-meta">Talla: ${item.size} | Color: ${item.color.name}</p>
        </div>
        <div class="cart-item-bottom">
          <div class="quantity-selector">
            <button class="qty-btn qty-minus" aria-label="Menos cantidad">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:8px; height:8px;">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn qty-plus" aria-label="Más cantidad">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:8px; height:8px;">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <span class="cart-item-price">${(item.precio * item.quantity).toFixed(2).replace('.', ',')} €</span>
        </div>
      </div>
      <button class="cart-item-delete-btn" aria-label="Eliminar artículo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  `).join('');
  
  const total = state.cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
  DOM.cartTotalPrice.textContent = `${total.toFixed(2).replace('.', ',')} €`;
}

// 15. ACTUALIZAR BADGES Y CONTADORES
function updateBadges() {
  const favs = state.favorites.length;
  if (favs > 0) {
    DOM.wishlistBadge.textContent = favs;
    DOM.wishlistBadge.classList.remove('hidden');
  } else {
    DOM.wishlistBadge.classList.add('hidden');
  }
  
  const itemsCount = state.cart.reduce((sum, it) => sum + it.quantity, 0);
  if (itemsCount > 0) {
    DOM.cartBadge.textContent = itemsCount;
    DOM.cartBadge.classList.remove('hidden');
  } else {
    DOM.cartBadge.classList.add('hidden');
  }
}

// 16. TOAST NOTIFICATIONS
function showToast(msg, btnText = "", callback = null) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let actionHTML = "";
  if (btnText && callback) {
    actionHTML = `<button class="toast-action">${btnText}</button>`;
  }
  
  toast.innerHTML = `
    <span>${msg}</span>
    ${actionHTML}
  `;
  
  DOM.toastContainer.appendChild(toast);
  
  if (btnText && callback) {
    const actionBtn = toast.querySelector('.toast-action');
    actionBtn.onclick = () => {
      callback();
      toast.remove();
    };
  }
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 3000);
}

// 17. CONTROLES DEL MENÚ LATERAL ACCORDION
function openSideMenu() {
  DOM.sideMenu.classList.add('active');
  DOM.menuOverlay.classList.remove('hidden');
}

function closeSideMenu() {
  DOM.sideMenu.classList.remove('active');
  DOM.menuOverlay.classList.add('hidden');
}

function openCart() {
  DOM.cartSidebar.classList.add('open');
  DOM.cartSidebarOverlay.classList.remove('hidden');
}

function closeCart() {
  DOM.cartSidebar.classList.remove('open');
  DOM.cartSidebarOverlay.classList.add('hidden');
}

// 18. SIMULACIÓN DE COMPRA (Checkout)
function handleCheckout() {
  if (state.cart.length === 0) return;
  
  DOM.checkoutBtn.textContent = "Procesando pago...";
  DOM.checkoutBtn.disabled = true;
  
  setTimeout(() => {
    state.cart = [];
    localStorage.setItem('kora_cart_v3', JSON.stringify(state.cart));
    
    updateBadges();
    renderCart();
    closeCart();
    
    showToast("¡Pedido realizado con éxito! Gracias por tu compra.");
    
    DOM.checkoutBtn.textContent = "Proceder al Pago";
    DOM.checkoutBtn.disabled = false;
  }, 1500);
}
