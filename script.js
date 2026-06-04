/* ===================================================
   LUXE E-Commerce — script.js
   All functionality: products, cart, wishlist,
   filters, modals, toast, theme, localStorage
   =================================================== */

// ============================================================
// PRODUCT DATA — 6+ per category (30+ total)
// ============================================================
const PRODUCTS = [
  // ---- Electronics (8) ----
  {
    id: 1, name: "Sony WH-1000XM5 Headphones", category: "Electronics",
    price: 29990, oldPrice: 34990,
    rating: 4.9, reviews: 2840,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    badge: "sale", featured: true, bestSeller: true,
    desc: "Industry-leading noise cancellation with 30-hour battery life. Crystal-clear calls with Auto NC Optimizer."
  },
  {
    id: 2, name: "Apple MacBook Air M3", category: "Electronics",
    price: 114900, oldPrice: null,
    rating: 4.8, reviews: 1560,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    badge: "new", featured: true, bestSeller: false,
    desc: "Strikingly thin design, Apple M3 chip, up to 18 hours battery. The world's best consumer laptop."
  },
  {
    id: 3, name: "Samsung Galaxy S25 Ultra", category: "Electronics",
    price: 99999, oldPrice: 114999,
    rating: 4.7, reviews: 980,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "Titan Frame, 200MP camera, built-in S Pen. The ultimate Android flagship experience."
  },
  {
    id: 4, name: "iPad Pro 13-inch M4", category: "Electronics",
    price: 109900, oldPrice: null,
    rating: 4.8, reviews: 730,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "Ultra Retina XDR display, M4 chip, Apple Pencil Pro. Thinner than ever at just 5.1mm."
  },
  {
    id: 5, name: "Sony A7 IV Mirrorless Camera", category: "Electronics",
    price: 214990, oldPrice: 234990,
    rating: 4.9, reviews: 420,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
    badge: "trending", featured: true, bestSeller: false,
    desc: "33MP BSI CMOS sensor, 4K 60fps video, real-time tracking. Perfect for professionals."
  },
  {
    id: 6, name: "Bose QuietComfort Ultra Earbuds", category: "Electronics",
    price: 24900, oldPrice: 29900,
    rating: 4.7, reviews: 1230,
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "Bose Immersive Audio with world-class noise cancellation. 6-hour battery with charging case."
  },
  {
    id: 7, name: "Apple Watch Ultra 2", category: "Electronics",
    price: 89900, oldPrice: null,
    rating: 4.8, reviews: 610,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "Most rugged and capable Apple Watch. 60-hour battery, precision dual-frequency GPS, titanium case."
  },
  {
    id: 8, name: "LG OLED C4 65\" TV", category: "Electronics",
    price: 149990, oldPrice: 189990,
    rating: 4.9, reviews: 870,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "Self-lit OLED pixels, α9 AI Processor Gen7, 120Hz panel. Cinematic excellence at home."
  },

  // ---- Fashion (7) ----
  {
    id: 9, name: "Merino Wool Turtleneck", category: "Fashion",
    price: 3499, oldPrice: 4499,
    rating: 4.6, reviews: 340,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "Fine 100% merino wool, temperature-regulating and naturally odor-resistant. Slim modern fit."
  },
  {
    id: 10, name: "Premium Leather Chelsea Boots", category: "Fashion",
    price: 7999, oldPrice: null,
    rating: 4.8, reviews: 520,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80",
    badge: "trending", featured: true, bestSeller: true,
    desc: "Full-grain calfskin leather, elastic side panels, cuban heel. Handcrafted in Portugal."
  },
  {
    id: 11, name: "Tailored Wool Blazer", category: "Fashion",
    price: 8999, oldPrice: 11999,
    rating: 4.7, reviews: 210,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    badge: "sale", featured: true, bestSeller: false,
    desc: "Italian wool blend, slim-fit construction, notch lapels. Versatile for office to evening."
  },
  {
    id: 12, name: "Silk Satin Midi Dress", category: "Fashion",
    price: 5499, oldPrice: null,
    rating: 4.5, reviews: 185,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "100% pure silk satin, bias cut, adjustable spaghetti straps. Effortlessly elegant."
  },
  {
    id: 13, name: "Cashmere Scarf — Ivory", category: "Fashion",
    price: 2499, oldPrice: 3199,
    rating: 4.8, reviews: 670,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "Grade-A Mongolian cashmere, 200cm length, fringed edges. Incredibly soft and warm."
  },
  {
    id: 14, name: "Gold-Plated Minimalist Watch", category: "Fashion",
    price: 12999, oldPrice: null,
    rating: 4.7, reviews: 390,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    badge: "trending", featured: true, bestSeller: false,
    desc: "Swiss quartz movement, sapphire crystal glass, 18K gold-plated case and strap."
  },
  {
    id: 15, name: "Linen Relaxed Trousers", category: "Fashion",
    price: 2199, oldPrice: 2999,
    rating: 4.4, reviews: 155,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    badge: "sale", featured: false, bestSeller: false,
    desc: "100% Belgian linen, wide-leg cut, elastic waistband. Perfect for warm seasons."
  },

  // ---- Home & Living (7) ----
  {
    id: 16, name: "Japanese Ceramic Tea Set", category: "Home & Living",
    price: 1899, oldPrice: null,
    rating: 4.9, reviews: 820,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    badge: "trending", featured: true, bestSeller: true,
    desc: "Hand-thrown stoneware, 1 teapot + 4 cups set, matte glaze. Dishwasher safe."
  },
  {
    id: 17, name: "Linen Duvet Cover Set", category: "Home & Living",
    price: 3999, oldPrice: 5499,
    rating: 4.7, reviews: 430,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "Stonewashed French linen, breathable and temperature-regulating. Available in 8 colours."
  },
  {
    id: 18, name: "Solid Oak Serving Board", category: "Home & Living",
    price: 1499, oldPrice: null,
    rating: 4.6, reviews: 295,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "Premium solid oak, end-grain construction, food-safe oil finish. Perfect for entertaining."
  },
  {
    id: 19, name: "Concrete Planter Set of 3", category: "Home & Living",
    price: 1299, oldPrice: 1799,
    rating: 4.5, reviews: 180,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    badge: "sale", featured: false, bestSeller: false,
    desc: "Handmade lightweight concrete, drainage holes included. Sizes: small, medium, large."
  },
  {
    id: 20, name: "Brass Table Lamp with Shade", category: "Home & Living",
    price: 4999, oldPrice: null,
    rating: 4.8, reviews: 365,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    badge: "trending", featured: true, bestSeller: false,
    desc: "Solid brushed brass base, linen drum shade, E27 fitting. Warm ambient lighting."
  },
  {
    id: 21, name: "Scented Soy Candle — Hinoki", category: "Home & Living",
    price: 799, oldPrice: null,
    rating: 4.9, reviews: 1120,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80",
    badge: "best", featured: false, bestSeller: true,
    desc: "Natural soy wax, cotton wick, 50-hour burn time. Japanese hinoki cypress and cedar."
  },
  {
    id: 22, name: "Woven Cotton Throw Blanket", category: "Home & Living",
    price: 1799, oldPrice: 2399,
    rating: 4.7, reviews: 540,
    image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&q=80",
    badge: "sale", featured: false, bestSeller: false,
    desc: "100% recycled cotton, hand-woven, 130×170cm. Machine washable."
  },

  // ---- Beauty (7) ----
  {
    id: 23, name: "Vitamin C Brightening Serum", category: "Beauty",
    price: 1499, oldPrice: null,
    rating: 4.8, reviews: 1650,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    badge: "trending", featured: true, bestSeller: true,
    desc: "15% L-ascorbic acid, ferulic acid + vitamin E. Visibly reduces dark spots in 4 weeks."
  },
  {
    id: 24, name: "Gua Sha Rose Quartz Set", category: "Beauty",
    price: 699, oldPrice: null,
    rating: 4.7, reviews: 870,
    image: "https://images.unsplash.com/photo-1659030172620-98dca62b5c61?w=600&q=80",
    badge: "new", featured: false, bestSeller: true,
    desc: "100% natural rose quartz, double-sided curved design. Promotes lymphatic drainage and glow."
  },
  {
    id: 25, name: "Argan Oil Hair Mask", category: "Beauty",
    price: 599, oldPrice: 799,
    rating: 4.6, reviews: 490,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80",
    badge: "sale", featured: false, bestSeller: false,
    desc: "Deep conditioning mask with pure Moroccan argan oil. Repairs damage, adds intense shine."
  },
  {
    id: 26, name: "Retinol Night Cream 0.5%", category: "Beauty",
    price: 1999, oldPrice: null,
    rating: 4.9, reviews: 1040,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    badge: "trending", featured: true, bestSeller: false,
    desc: "Encapsulated retinol for slow release, hyaluronic acid complex, bakuchiol. Reduce fine lines."
  },
  {
    id: 27, name: "Pressed Mineral Powder Foundation", category: "Beauty",
    price: 1199, oldPrice: null,
    rating: 4.5, reviews: 320,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "SPF 25, lightweight coverage, 24 shades. Oil-controlling, buildable, dermatologist tested."
  },
  {
    id: 28, name: "Silk Pillowcase Set — Ivory", category: "Beauty",
    price: 2299, oldPrice: 2999,
    rating: 4.8, reviews: 760,
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "22 momme 100% mulberry silk, hidden zip, OEKO-TEX certified. Kind to hair and skin."
  },
  {
    id: 29, name: "Jade Roller Facial Massager", category: "Beauty",
    price: 499, oldPrice: null,
    rating: 4.6, reviews: 1200,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "Genuine green jade, dual-ended roller, naturally cool stone. Reduces puffiness and tension."
  },

  // ---- Sports & Fitness (7) ----
  {
    id: 30, name: "Lululemon Align Leggings", category: "Sports & Fitness",
    price: 9999, oldPrice: null,
    rating: 4.9, reviews: 3200,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    badge: "trending", featured: true, bestSeller: true,
    desc: "Buttery-soft Nulu fabric, 25\", second-skin fit. The #1 yoga legging for a reason."
  },
  {
    id: 31, name: "Adjustable Dumbbell Set 5–52.5lb", category: "Sports & Fitness",
    price: 24999, oldPrice: 29999,
    rating: 4.8, reviews: 910,
    image: "https://images.unsplash.com/photo-1638805981949-362a5e6be89b?w=600&q=80",
    badge: "sale", featured: false, bestSeller: true,
    desc: "SelectTech dial system, replaces 15 sets of weights. Ergonomic handle, compact storage."
  },
  {
    id: 32, name: "Premium Yoga Mat — 6mm", category: "Sports & Fitness",
    price: 2499, oldPrice: null,
    rating: 4.7, reviews: 640,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "Natural rubber base, polyurethane top layer, alignment lines. Exceptional grip and cushion."
  },
  {
    id: 33, name: "Hydro Flask 32oz Water Bottle", category: "Sports & Fitness",
    price: 3499, oldPrice: null,
    rating: 4.8, reviews: 2100,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    badge: "best", featured: false, bestSeller: true,
    desc: "TempShield double-wall vacuum insulation, keeps cold 24h, hot 12h. BPA-free stainless steel."
  },
  {
    id: 34, name: "Brooks Ghost 16 Running Shoes", category: "Sports & Fitness",
    price: 10999, oldPrice: 12999,
    rating: 4.7, reviews: 780,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    badge: "sale", featured: true, bestSeller: false,
    desc: "DNA Loft v3 cushioning, segmented crash pad, neutral support. Perfect everyday trainer."
  },
  {
    id: 35, name: "Theragun Elite Massager", category: "Sports & Fitness",
    price: 24999, oldPrice: 29999,
    rating: 4.8, reviews: 530,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    badge: "sale", featured: false, bestSeller: false,
    desc: "OLED screen, 5 built-in speeds, 120-minute battery. QuietForce Technology for silent power."
  },
  {
    id: 36, name: "Resistance Band Set — 5 Levels", category: "Sports & Fitness",
    price: 999, oldPrice: null,
    rating: 4.6, reviews: 1450,
    image: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&q=80",
    badge: "new", featured: false, bestSeller: false,
    desc: "Natural latex, 5 resistance levels (10–50lb), includes carrying bag and door anchor."
  }
];

// ============================================================
// CURRENCY HELPER — Indian Rupee formatting
// e.g. 114900 → "₹1,14,900"
// ============================================================
function inr(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// ============================================================
// CATEGORY CONFIG
// ============================================================
const CATEGORIES = [
  { name: "Electronics",      icon: "💻", color: "#4a90d9" },
  { name: "Fashion",          icon: "👗", color: "#d97ca0" },
  { name: "Home & Living",    icon: "🏡", color: "#7db87d" },
  { name: "Beauty",           icon: "✨", color: "#d9a84a" },
  { name: "Sports & Fitness", icon: "🏃", color: "#7ca0d9" }
];

// ============================================================
// STATE
// ============================================================
let cart     = JSON.parse(localStorage.getItem('luxe_cart'))     || [];
let wishlist = JSON.parse(localStorage.getItem('luxe_wishlist')) || [];
let currentSection = 'home';

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  // Loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);

  // Render home sections
  renderCategories();
  renderFeatured();
  renderBestSellers();
  renderNewArrivals();
  renderShopGrid(PRODUCTS);

  // Update counts
  updateCounts();

  // Navbar scroll
  window.addEventListener('scroll', handleScroll);

  // Back to top
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Apply saved theme
  const savedTheme = localStorage.getItem('luxe_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
});

// ============================================================
// SCROLL HANDLER
// ============================================================
function handleScroll() {
  const navbar   = document.getElementById('navbar');
  const backTop  = document.getElementById('back-to-top');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  if (window.scrollY > 400) {
    backTop.classList.add('visible');
  } else {
    backTop.classList.remove('visible');
  }
}

// ============================================================
// NAVIGATION
// ============================================================
function showSection(section) {
  // Hide all
  document.querySelectorAll('.section-page').forEach(el => el.classList.remove('active'));
  document.getElementById(`${section}-section`).classList.add('active');
  currentSection = section;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (section === 'cart')     renderCart();
  if (section === 'wishlist') renderWishlist();
  if (section === 'shop')     applyFilters();
}

function scrollToSection(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function filterByCategory(cat) {
  showSection('shop');
  document.getElementById('filter-category').value = cat;
  applyFilters();
}

function handleSearch(val) {
  // Mirror to shop search and go to shop
  showSection('shop');
  document.getElementById('shop-search').value = val;
  applyFilters();
}

function toggleMobileMenu() {
  const links  = document.getElementById('nav-links');
  const burger = document.getElementById('hamburger');
  links.classList.toggle('open');
  burger.classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ============================================================
// THEME
// ============================================================
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('luxe_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ============================================================
// RATINGS HELPER
// ============================================================
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ============================================================
// PRODUCT CARD HTML
// ============================================================
function productCardHTML(p) {
  const inWish = wishlist.includes(p.id);
  const badgeMap = { sale: 'badge-sale', new: 'badge-new', trending: 'badge-trending', best: 'badge-trending' };
  const badgeLabelMap = { sale: 'Sale', new: 'New', trending: 'Trending', best: 'Best' };
  const badgeEl = p.badge
    ? `<span class="badge-pill ${badgeMap[p.badge] || 'badge-new'}">${badgeLabelMap[p.badge] || p.badge}</span>`
    : '';
  const oldPriceEl = p.oldPrice
    ? `<span class="old-price">${inr(p.oldPrice)}</span>`
    : '';

  return `
    <div class="product-card" style="animation-delay:${Math.random()*0.3}s">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-badges">${badgeEl}</div>
        <div class="product-overlay">
          <button class="quick-view-btn" onclick="openQuickView(${p.id})">Quick View</button>
        </div>
        <button class="wishlist-btn-card ${inWish ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="Wishlist">
          <i class="fa${inWish ? 's' : 'r'} fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span class="rating-num">${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">${oldPriceEl}${inr(p.price)}</div>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>`;
}

// ============================================================
// RENDER HOME SECTIONS
// ============================================================
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = CATEGORIES.map(cat => {
    const count = PRODUCTS.filter(p => p.category === cat.name).length;
    return `
      <div class="category-card" onclick="filterByCategory('${cat.name}')">
        <div class="cat-icon">${cat.icon}</div>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-count">${count} products</div>
      </div>`;
  }).join('');
}

function renderFeatured() {
  const products = PRODUCTS.filter(p => p.featured).slice(0, 6);
  document.getElementById('featured-grid').innerHTML = products.map(productCardHTML).join('');
}

function renderBestSellers() {
  const products = PRODUCTS.filter(p => p.bestSeller).slice(0, 6);
  document.getElementById('bestsellers-grid').innerHTML = products.map(productCardHTML).join('');
}

function renderNewArrivals() {
  // Show products with "new" badge + last few by id
  const products = PRODUCTS.filter(p => p.badge === 'new').slice(0, 6);
  document.getElementById('arrivals-grid').innerHTML = products.map(productCardHTML).join('');
}

// ============================================================
// SHOP GRID & FILTERS
// ============================================================
function applyFilters() {
  const cat    = document.getElementById('filter-category').value;
  const sort   = document.getElementById('filter-sort').value;
  const search = document.getElementById('shop-search').value.toLowerCase().trim();
  const navSearch = document.getElementById('search-input').value.toLowerCase().trim();
  const query  = search || navSearch;

  let filtered = [...PRODUCTS];

  // Category filter
  if (cat && cat !== 'all') {
    filtered = filtered.filter(p => p.category === cat);
  }

  // Search filter
  if (query) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      (p.desc && p.desc.toLowerCase().includes(query))
    );
  }

  // Sort
  switch (sort) {
    case 'price-low':  filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating':     filtered.sort((a, b) => b.rating - a.rating); break;
    case 'name-az':    filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  renderShopGrid(filtered);

  // Update count label
  document.getElementById('product-count-label').textContent =
    `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`;
}

function renderShopGrid(products) {
  const grid = document.getElementById('shop-grid');
  if (products.length === 0) {
    grid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><p>No products found. Try a different search or filter.</p></div>`;
    return;
  }
  grid.innerHTML = products.map(productCardHTML).join('');
}

// ============================================================
// CART SYSTEM
// ============================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
    showToast(`<i class="fas fa-shopping-bag"></i> Updated quantity in cart`, 'success');
  } else {
    cart.push({ id: productId, qty: 1 });
    showToast(`<i class="fas fa-shopping-bag"></i> <strong>${product.name}</strong> added to cart!`, 'success');
  }

  saveCart();
  updateCounts();
}

function removeFromCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCounts();
  renderCart();
  if (product) showToast(`<i class="fas fa-trash"></i> <strong>${product.name}</strong> removed from cart`, 'error');
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCounts();
  renderCart();
}

function saveCart() {
  localStorage.setItem('luxe_cart', JSON.stringify(cart));
}

// ============================================================
// CART RENDER
// ============================================================
function renderCart() {
  const listEl    = document.getElementById('cart-items-list');
  const summaryEl = document.getElementById('cart-summary');
  const layoutEl  = document.getElementById('cart-layout');
  const emptyEl   = document.getElementById('cart-empty');

  if (cart.length === 0) {
    layoutEl.style.display = 'none';
    emptyEl.style.display  = 'flex';
    return;
  }

  layoutEl.style.display = 'grid';
  emptyEl.style.display  = 'none';

  // Items
  listEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="cart-item-info">
          <div class="cart-item-cat">${p.category}</div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${inr(p.price * item.qty)}</div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${p.id})">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      </div>`;
  }).join('');

  // Summary
  const subtotal  = cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
  const shipping  = subtotal > 10000 ? 0 : 99;
  const tax       = subtotal * 0.18;
  const total     = subtotal + shipping + tax;

  summaryEl.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row"><span>Subtotal (${cart.reduce((s,i)=>s+i.qty,0)} items)</span><span>${inr(subtotal)}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : inr(shipping)}</span></div>
    <div class="summary-row"><span>GST (18%)</span><span>${inr(Math.round(tax))}</span></div>
    <div class="summary-row total"><span>Total</span><span>${inr(Math.round(total))}</span></div>
    <button class="btn btn-primary checkout-btn" onclick="checkout()">
      <i class="fas fa-lock"></i> Checkout Securely
    </button>
    <button class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:12px" onclick="showSection('shop')">
      Continue Shopping
    </button>`;
}

// ============================================================
// WISHLIST SYSTEM
// ============================================================
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast(`<i class="far fa-heart"></i> Removed from wishlist`, 'error');
  } else {
    wishlist.push(productId);
    showToast(`<i class="fas fa-heart"></i> <strong>${product.name}</strong> saved to wishlist!`);
  }

  localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist));
  updateCounts();

  // Update all wishlist buttons on screen
  document.querySelectorAll(`.wishlist-btn-card`).forEach(btn => {
    const onclick = btn.getAttribute('onclick');
    if (onclick && onclick.includes(`(${productId})`)) {
      const isNowInWish = wishlist.includes(productId);
      btn.classList.toggle('active', isNowInWish);
      btn.innerHTML = `<i class="fa${isNowInWish ? 's' : 'r'} fa-heart"></i>`;
    }
  });

  // Re-render wishlist section if open
  if (currentSection === 'wishlist') renderWishlist();
}

function renderWishlist() {
  const grid    = document.getElementById('wishlist-grid');
  const emptyEl = document.getElementById('wishlist-empty');

  if (wishlist.length === 0) {
    grid.style.display    = 'none';
    emptyEl.style.display = 'flex';
    return;
  }

  grid.style.display    = 'grid';
  emptyEl.style.display = 'none';

  const wishProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
  grid.innerHTML = wishProducts.map(productCardHTML).join('');
}

// ============================================================
// COUNTS
// ============================================================
function updateCounts() {
  const cartCount    = cart.reduce((s, i) => s + i.qty, 0);
  const wishlistCount = wishlist.length;

  const cc = document.getElementById('cart-count');
  const wc = document.getElementById('wishlist-count');

  cc.textContent = cartCount;
  wc.textContent = wishlistCount;

  // Show/hide badge
  cc.style.display = cartCount > 0 ? 'flex' : 'none';
  wc.style.display = wishlistCount > 0 ? 'flex' : 'none';
}

// ============================================================
// QUICK VIEW MODAL
// ============================================================
function openQuickView(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const inWish = wishlist.includes(p.id);
  const oldPriceEl = p.oldPrice ? `<span style="font-size:1rem;color:var(--text-subtle);text-decoration:line-through;margin-right:8px">${inr(p.oldPrice)}</span>` : '';

  document.getElementById('quick-view-content').innerHTML = `
    <div class="qv-inner">
      <div class="qv-img">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="qv-info">
        <div class="qv-cat">${p.category}</div>
        <h2 class="qv-name">${p.name}</h2>
        <div class="qv-rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span class="rating-num">${p.rating} (${p.reviews.toLocaleString('en-IN')} reviews)</span>
        </div>
        <p class="qv-desc">${p.desc || 'Premium quality product. Crafted with care and precision.'}</p>
        <div class="qv-price">${oldPriceEl}${inr(p.price)}</div>
        <div class="qv-actions">
          <button class="add-cart-btn" onclick="addToCart(${p.id}); closeQuickViewBtn()">
            <i class="fas fa-shopping-bag"></i> Add to Cart
          </button>
          <button class="wishlist-btn-card ${inWish ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="Wishlist">
            <i class="fa${inWish ? 's' : 'r'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>`;

  const modal = document.getElementById('quick-view-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView(e) {
  if (e.target === document.getElementById('quick-view-modal')) {
    closeQuickViewBtn();
  }
}

function closeQuickViewBtn() {
  document.getElementById('quick-view-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// CHECKOUT
// ============================================================
function checkout() {
  if (cart.length === 0) {
    showToast('<i class="fas fa-info-circle"></i> Your cart is empty!', 'error');
    return;
  }

  const total = cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  const tax = total * 0.18;
  const shipping = total > 10000 ? 0 : 99;
  const grandTotal = total + tax + shipping;

  // Build order info
  const orderId   = 'LUXE-' + Math.random().toString(36).substr(2,8).toUpperCase();
  const orderDate = new Date().toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' });

  document.getElementById('order-info').innerHTML = `
    <div><span>Order ID:</span><strong>${orderId}</strong></div>
    <div><span>Date:</span><strong>${orderDate}</strong></div>
    <div><span>Items:</span><strong>${cart.reduce((s,i)=>s+i.qty,0)}</strong></div>
    <div><span>Total Paid:</span><strong style="color:var(--accent)">${inr(Math.round(grandTotal))}</strong></div>`;

  // Save order to localStorage
  const orders = JSON.parse(localStorage.getItem('luxe_orders')) || [];
  orders.push({ id: orderId, date: orderDate, items: [...cart], total: grandTotal });
  localStorage.setItem('luxe_orders', JSON.stringify(orders));

  // Clear cart
  cart = [];
  saveCart();
  updateCounts();

  // Show modal
  document.getElementById('checkout-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal(e) {
  if (!e || e.target === document.getElementById('checkout-modal')) {
    document.getElementById('checkout-modal').classList.remove('open');
    document.body.style.overflow = '';
    showSection('home');
  }
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(message, type = '') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type ? 'toast-' + type : ''}`;
  toast.innerHTML = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3200);
}

// ============================================================
// KEYBOARD SUPPORT
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeQuickViewBtn();
    document.getElementById('checkout-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ============================================================
// LAZY ANIMATION ON SCROLL (Intersection Observer)
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Observe product cards as they're added (MutationObserver)
const mutObs = new MutationObserver(() => {
  document.querySelectorAll('.product-card:not([data-observed])').forEach(card => {
    card.setAttribute('data-observed', '1');
    card.style.opacity   = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});
mutObs.observe(document.body, { childList: true, subtree: true });