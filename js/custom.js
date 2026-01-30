
  /* ===== Sample product data (use your images under images/) ===== */
 const PRODUCTS = [
  { id: 'p1', title: 'Hero Shirt', price: 29.99, img: 'images/hero-shirt.jpg', category: 'men' },
  { id: 'p2', title: "Men's Casual Cap", price: 19.99, img: 'images/mens-casual-cap.jpg', category: 'men' },
  { id: 'p3', title: "Men's Leather Belt", price: 24.99, img: 'images/mens-leather-belt.jpg', category: 'men' },
  { id: 'p4', title: "Men's Leather Jacket", price: 79.99, img: 'images/mens-leather-jacket.jpg', category: 'men' },
  { id: 'p5', title: "Men's Pant", price: 34.99, img: 'images/mens-pant.jpg', category: 'men' },
  { id: 'p6', title: "Men's Shoes", price: 49.99, img: 'images/mens-shoes.jpg', category: 'men' },
  { id: 'p7', title: "Men's Sports Joggers", price: 39.99, img: 'images/mens-sports-joggers.jpg', category: 'men' },
  { id: 'p8', title: "Men's Stylish Sunglass", price: 14.99, img: 'images/mens-stylish-sunglass.jpg', category: 'men' },
  { id: 'p9', title: "Men's Traditional Panjabi", price: 44.99, img: 'images/mens-traditional-panjabi.jpg', category: 'men' },
  { id: 'p10', title: "Men's Watch", price: 59.99, img: 'images/mens-watch.jpg', category: 'men' },
  { id: 'p11', title: "Men's Winter Hoodie", price: 49.99, img: 'images/mens-winter-hoodie.jpg', category: 'men' },
  { id: 'p12', title: "Men's Graphic Printed Tee", price: 22.99, img: 'images/mens-graphic-tee.jpg', category: 'men' },

  { id: 'p13', title: 'Women Beauty Clutch Bag', price: 29.99, img: 'images/women-beauty-clutch-bag.jpg', category: 'women' },
  { id: 'p14', title: 'Women Burka', price: 34.99, img: 'images/women-burka.jpg', category: 'women' },
  { id: 'p15', title: 'Women Cotton Kurti', price: 27.99, img: 'images/women-cotton-kurti.jpg', category: 'women' },
  { id: 'p16', title: 'Women Floral Long Dress', price: 49.99, img: 'images/women-floral-long-dress.jpg', category: 'women' },
  { id: 'p17', title: 'Women Ladies Sandal', price: 19.99, img: 'images/women-ladies-sandal.jpg', category: 'women' },
  { id: 'p18', title: 'Women Maxi Dress', price: 44.99, img: 'images/women-maxi-dress.jpg', category: 'women' },
  { id: 'p19', title: 'Women Silk Saree', price: 89.99, img: 'images/women-silk-saree.jpg', category: 'women' },
  { id: 'p20', title: 'Women Scarf', price: 12.99, img: 'images/women-scarf.jpg', category: 'women' },
  { id: 'p21', title: 'Women Stylish Tops', price: 24.99, img: 'images/women-stylish-tops.jpg', category: 'women' },
  { id: 'p22', title: 'Women Watches', price: 69.99, img: 'images/women-watches.jpg', category: 'women' },
  { id: 'p23', title: 'Women Bag', price: 39.99, img: 'images/women-bag.jpg', category: 'women' },
  { id: 'p24', title: 'Women Dress', price: 34.99, img: 'images/women-dress.jpg', category: 'women' }
];


  /* ===== State & storage ===== */
  const CART_KEY = 'alina_cart_v_final';
  const ORDERS_KEY = 'alina_orders_v1';
  let state = { products: PRODUCTS.slice(), query:'', sort:'featured', cart:{} };

  function loadCart(){ try{ const raw = localStorage.getItem(CART_KEY); if(raw) state.cart = JSON.parse(raw); } catch(e){ console.warn(e) } }
  function saveCart(){ try{ localStorage.setItem(CART_KEY, JSON.stringify(state.cart)); } catch(e){ console.warn(e) } }
  function saveOrder(order){ try{ const raw = localStorage.getItem(ORDERS_KEY); const arr = raw ? JSON.parse(raw) : []; arr.push(order); localStorage.setItem(ORDERS_KEY, JSON.stringify(arr)); } catch(e){ console.warn(e) } }

  /* ===== DOM refs ===== */
  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const sortSelect = document.getElementById('sortSelect');
  const headerSearch = document.getElementById('headerSearch');
  const headerSearchBtn = document.getElementById('headerSearchBtn');
  const mobileSearch = document.getElementById('mobileSearch');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const cartCountEl = document.getElementById('cartCount');
  const overlay = document.getElementById('overlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartEmptyEl = document.getElementById('cartEmpty');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const toast = document.getElementById('toast');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const modalAddToCart = document.getElementById('modalAddToCart');
  const modalQty = document.getElementById('modalQty');
  const modalQtyInc = document.getElementById('modalQtyInc');
  const modalQtyDec = document.getElementById('modalQtyDec');
  const modalOverlayDiv = document.getElementById('modalOverlay');
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const closeMobileNav = document.getElementById('closeMobileNav');
  const yearEl = document.getElementById('year');

  const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
  const checkoutSummary = document.getElementById('checkoutSummary');
  const confirmOrderBtn = document.getElementById('confirmOrderBtn');
  const cancelOrderBtn = document.getElementById('cancelOrderBtn');
  const closeCheckoutModal = document.getElementById('closeCheckoutModal');

  // customer form
  const checkoutForm = document.getElementById('checkoutForm');
  const customerName = document.getElementById('customerName');
  const customerPhone = document.getElementById('customerPhone');
  const customerEmail = document.getElementById('customerEmail');
  const customerAddress = document.getElementById('customerAddress');

  /* ===== utilities ===== */
  const formatPrice = v => '$' + v.toFixed(2);
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function toastMsg(msg,ms=2200){ toast.textContent = msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),ms); }
  function generateOrderNumber(){ const t = Date.now().toString(36).toUpperCase(); const r = Math.random().toString(36).slice(2,6).toUpperCase(); return `AL-${t}-${r}`; }
  function debounce(fn,wait=250){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),wait); }; }

  /* ===== observers for reveal + lazy load ===== */
  const ioOptions={root:null,rootMargin:'0px 0px 120px 0px',threshold:0.05};
  const revealObserver = new IntersectionObserver((entries,obs)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('revealed'); obs.unobserve(e.target); } }); }, ioOptions);
  const imgObserver = new IntersectionObserver((entries,obs)=>{ entries.forEach(ent=>{ if(ent.isIntersecting){ const img=ent.target; const src=img.dataset.src; if(src) img.src=src; img.removeAttribute('data-src'); obs.unobserve(img); } }); }, ioOptions);

  /* ===== render products ===== */
  function applyFiltersAndSort(){
    let list = PRODUCTS.slice();
    const q = state.query.trim().toLowerCase();
    if(q) list = list.filter(p => (p.title + ' ' + p.category).toLowerCase().includes(q));
    const s = state.sort;
    if(s==='price-asc') list.sort((a,b)=>a.price-b.price);
    else if(s==='price-desc') list.sort((a,b)=>b.price-a.price);
    else if(s==='alpha') list.sort((a,b)=>a.title.localeCompare(b.title));
    state.products = list;
  }

  function makeProductCard(p){
    const el = document.createElement('article');
    el.className='product';
    el.innerHTML = `
      <button class="quick-view" data-quick="${p.id}" aria-label="Quick view ${escapeHtml(p.title)}">👁</button>
      <img data-src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy" />
      <h3>${escapeHtml(p.title)}</h3>
      <div class="meta">${escapeHtml(p.category)}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px">
        <div class="price">${formatPrice(p.price)}</div>
        <div class="actions">
          <button class="btn small" data-action="add" data-id="${p.id}">Add</button>
          <button class="btn small secondary" data-action="view" data-id="${p.id}">View</button>
        </div>
      </div>
    `;
    const img = el.querySelector('img');
    // for demo: use data-src lazy load; if src missing the image will be empty
    img.dataset.src = p.img;
    imgObserver.observe(img);
    revealObserver.observe(el);
    return el;
  }

  function renderProducts(){
    applyFiltersAndSort();
    productGrid.innerHTML = '';
    if(state.products.length===0){ productGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--muted);padding:28px">No products found.</div>`; return; }
    const frag = document.createDocumentFragment();
    state.products.forEach(p => frag.appendChild(makeProductCard(p)));
    productGrid.appendChild(frag);
  }

  /* ===== cart logic ===== */
  function cartTotals(){ let total=0,items=0; Object.values(state.cart).forEach(it=>{ total += it.price*it.qty; items += it.qty; }); return { total, items }; }
  function updateCartUI(){ const { total, items } = cartTotals(); cartCountEl.textContent = items; cartTotalEl.textContent = formatPrice(total);
    cartItemsEl.innerHTML = '';
    if(items===0){ cartEmptyEl.style.display='block'; } else {
      cartEmptyEl.style.display='none';
      Object.values(state.cart).forEach(it=>{
        const row=document.createElement('div'); row.className='cart-item';
        row.innerHTML = `
          <img src="${it.img}" alt="${escapeHtml(it.title)}" loading="lazy">
          <div class="cinfo"><h5>${escapeHtml(it.title)}</h5><div style="font-size:13px;color:var(--muted)">${formatPrice(it.price)}</div></div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
            <div class="qty-input" data-id="${it.id}">
              <button data-action="dec" data-id="${it.id}" aria-label="Decrease">−</button>
              <div style="padding:6px 10px;border-radius:8px;border:1px solid #eee;background:#fff">${it.qty}</div>
              <button data-action="inc" data-id="${it.id}" aria-label="Increase">＋</button>
            </div>
            <button data-action="remove" data-id="${it.id}" class="btn secondary small">Remove</button>
          </div>`;
        cartItemsEl.appendChild(row);
      });
    }
  }

  function addToCart(id,qty=1){ const p = PRODUCTS.find(x=>x.id===id); if(!p) return; if(!state.cart[id]) state.cart[id] = { id:p.id,title:p.title,price:p.price,img:p.img,qty:0 }; state.cart[id].qty += qty; saveCart(); updateCartUI(); openCart(); toastMsg(`${p.title} added to cart`); announce(`${p.title} added to cart`); }
  function changeQty(id,delta){ if(!state.cart[id]) return; state.cart[id].qty += delta; if(state.cart[id].qty<=0) delete state.cart[id]; saveCart(); updateCartUI(); }
  function removeFromCart(id){ if(!state.cart[id]) return; const name = state.cart[id].title; delete state.cart[id]; saveCart(); updateCartUI(); toastMsg(`${name} removed`); announce(`${name} removed from cart`); }
  function clearCart(){ state.cart = {}; saveCart(); updateCartUI(); toastMsg('Cart cleared'); announce('Cart cleared'); }

  function openCart(){ cartDrawer.classList.add('open'); overlay.classList.add('open'); cartDrawer.setAttribute('aria-hidden','false'); overlay.setAttribute('aria-hidden','false'); openCartBtn.setAttribute('aria-expanded','true'); }
  function closeCart(){ cartDrawer.classList.remove('open'); overlay.classList.remove('open'); cartDrawer.setAttribute('aria-hidden','true'); overlay.setAttribute('aria-hidden','true'); openCartBtn.setAttribute('aria-expanded','false'); }

  /* ===== modal (quick view) ===== */
  let activeModalProduct = null, lastFocusedElement = null;
  function openModal(product){ activeModalProduct = product; modalImg.src = product.img; modalTitle.textContent = product.title; modalDesc.textContent = product.category; modalPrice.textContent = formatPrice(product.price); modalQty.value = 1; modalOverlay.classList.add('open'); modalOverlay.style.display='flex'; modalOverlay.setAttribute('aria-hidden','false'); lastFocusedElement = document.activeElement; setTimeout(()=>modalAddToCart.focus(),40); }
  function closeModal(){ modalOverlay.classList.remove('open'); modalOverlay.style.display='none'; modalOverlay.setAttribute('aria-hidden','true'); activeModalProduct = null; if(lastFocusedElement) lastFocusedElement.focus(); }

  /* ===== announcer (a11y) ===== */
  const announcer = document.createElement('div'); announcer.setAttribute('aria-live','polite'); announcer.className='visually-hidden'; document.body.appendChild(announcer);
  function announce(msg){ announcer.textContent = msg; }

  /* ===== init & events ===== */
  (function init(){ loadCart(); renderProducts(); updateCartUI(); yearEl.textContent = new Date().getFullYear(); announce(`${PRODUCTS.length} products loaded`); })();

  // product actions (delegation)
  productGrid.addEventListener('click', e => {
    const addBtn = e.target.closest('button[data-action="add"]'); if(addBtn){ addToCart(addBtn.dataset.id,1); return; }
    const viewBtn = e.target.closest('button[data-action="view"]'); if(viewBtn){ const p=PRODUCTS.find(x=>x.id===viewBtn.dataset.id); if(p) openModal(p); return; }
    const quick = e.target.closest('button[data-quick]'); if(quick){ const p=PRODUCTS.find(x=>x.id===quick.dataset.quick); if(p) openModal(p); return; }
  });

  // cart handlers
  openCartBtn.addEventListener('click', () => openCart());
  closeCartBtn.addEventListener('click', () => closeCart());
  clearCartBtn.addEventListener('click', () => clearCart());
  overlay.addEventListener('click', () => { closeCart(); closeModal(); closeCheckoutModalFn(); });

  // qty & remove
  cartItemsEl.addEventListener('click', e => {
    const btn = e.target.closest('button'); if(!btn) return;
    const action = btn.dataset.action; const id = btn.dataset.id;
    if(action==='inc') changeQty(id,1); if(action==='dec') changeQty(id,-1); if(action==='remove') removeFromCart(id);
  });

  // checkout open
  checkoutBtn.addEventListener('click', function(){
    const { items } = cartTotals();
    if(items===0){ toastMsg('Your cart is empty — add items first 😊'); return; }
    openCheckoutModal();
  });

  // checkout summary builder
  function buildCheckoutSummaryHtml(){
    const items = Object.values(state.cart || {});
    if(!items.length) return `<div style="text-align:center;color:var(--muted)">Your cart is empty.</div>`;
    let html = '<div style="display:flex;flex-direction:column;gap:8px">';
    items.forEach(it => { html += `<div style="display:flex;justify-content:space-between;font-size:14px"><div>${escapeHtml(it.title)} × ${it.qty}</div><div style="font-weight:700">${formatPrice(it.price * it.qty)}</div></div>`; });
    const total = Object.values(state.cart).reduce((s,i)=>s + i.price*i.qty,0);
    html += `<hr style="border:none;border-top:1px solid #eee;margin:8px 0">`;
    html += `<div style="display:flex;justify-content:space-between;font-weight:800"><div>Order total</div><div>${formatPrice(total)}</div></div>`;
    html += `</div>`;
    return html;
  }

  function openCheckoutModal(){ checkoutSummary.innerHTML = buildCheckoutSummaryHtml(); checkoutModalOverlay.style.display='flex'; checkoutModalOverlay.setAttribute('aria-hidden','false'); overlay.classList.add('open'); }
  function closeCheckoutModalFn(){ checkoutModalOverlay.style.display='none'; checkoutModalOverlay.setAttribute('aria-hidden','true'); overlay.classList.remove('open'); }

  // simple validation
  function validateCustomerForm(){
    const phone = (customerPhone.value || '').trim();
    const email = (customerEmail.value || '').trim();
    const address = (customerAddress.value || '').trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /^\+?\d{7,15}$/;
    if(!phone){ toastMsg('Phone number is required'); customerPhone.focus(); return false; }
    if(!phoneRe.test(phone)){ toastMsg('Invalid phone format — example: +8801XXXXXXXXX'); customerPhone.focus(); return false; }
    if(!email){ toastMsg('Email is required'); customerEmail.focus(); return false; }
    if(!emailRe.test(email)){ toastMsg('Invalid email address'); customerEmail.focus(); return false; }
    if(!address || address.length < 6){ toastMsg('Please provide a valid shipping address (at least 6 characters)'); customerAddress.focus(); return false; }
    return true;
  }

  // confirm order
  confirmOrderBtn.addEventListener('click', function(){
    const { items, total } = cartTotals();
    if(items === 0){ toastMsg('Your cart is empty — add items first'); return; }
    if(!validateCustomerForm()) return;

    const orderNumber = generateOrderNumber();
    const order = {
      id: orderNumber,
      createdAt: new Date().toISOString(),
      customer: {
        name: (customerName.value || '').trim(),
        phone: (customerPhone.value || '').trim(),
        email: (customerEmail.value || '').trim(),
        address: (customerAddress.value || '').trim()
      },
      items: Object.values(state.cart).map(it => ({ id: it.id, title: it.title, qty: it.qty, price: it.price })),
      total: total
    };

    saveOrder(order);
    closeCheckoutModalFn();
    state.cart = {}; saveCart(); updateCartUI();
    toastMsg(`Thanks! Your order has been placed — ${orderNumber}`);
    announce(`Order ${orderNumber} placed. Total ${formatPrice(total)}.`);

    // show summary alert (demo). Replace with a styled modal as needed.
    const c = order.customer;
    setTimeout(()=>{ alert([
      'Thank you! Your order has been placed.',
      `Order number: ${orderNumber}`,
      `Total: ${formatPrice(total)}`,
      '',
      'Customer info:',
      `Name: ${c.name || '-'}`,
      `Phone: ${c.phone}`,
      `Email: ${c.email}`,
      `Address: ${c.address}`,
      '',
      'You will receive a confirmation email soon.',
      'Contact: support@alinafashion.example'
    ].join('\\n')); }, 250);

    checkoutForm.reset();
  });

  cancelOrderBtn.addEventListener('click', closeCheckoutModalFn);
  closeCheckoutModal.addEventListener('click', closeCheckoutModalFn);

  // modal controls
  modalAddToCart.addEventListener('click', ()=>{ if(!activeModalProduct) return; const qty = Math.max(1, parseInt(modalQty.value) || 1); addToCart(activeModalProduct.id, qty); closeModal(); });
  modalQtyInc.addEventListener('click', ()=> modalQty.value = parseInt(modalQty.value || '1') + 1);
  modalQtyDec.addEventListener('click', ()=> modalQty.value = Math.max(1, parseInt(modalQty.value || '1') - 1));
  document.getElementById('closeModal').addEventListener('click', ()=> closeModal());

  document.addEventListener('keydown', e => { if(e.key === 'Escape'){ closeModal(); closeCart(); closeCheckoutModalFn(); closeMobile(); } });

  // search & sort (debounced)
  const onSearch = debounce(val => { state.query = val; renderProducts(); }, 250);
  searchInput.addEventListener('input', e => onSearch(e.target.value));
  clearSearch.addEventListener('click', ()=>{ searchInput.value=''; state.query=''; renderProducts(); });
  sortSelect.addEventListener('change', e=>{ state.sort = e.target.value; renderProducts(); });

  headerSearch && headerSearch.addEventListener('input', e => { searchInput.value = e.target.value; onSearch(e.target.value); });
  headerSearchBtn && headerSearchBtn.addEventListener('click', ()=> onSearch(headerSearch.value));
  mobileSearch && mobileSearch.addEventListener('input', e => { searchInput.value = e.target.value; onSearch(e.target.value); });
  mobileSearchBtn && mobileSearchBtn.addEventListener('click', ()=> onSearch(mobileSearch.value));

  // mobile nav toggle
  navToggle.addEventListener('click', ()=>{ openMobile(); });
  closeMobileNav && closeMobileNav.addEventListener('click', ()=>{ closeMobile(); });

  function openMobile(){ mobileNav.classList.add('open'); mobileNav.setAttribute('aria-hidden','false'); overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); navToggle.setAttribute('aria-expanded','true'); }
  function closeMobile(){ mobileNav.classList.remove('open'); mobileNav.setAttribute('aria-hidden','true'); overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); navToggle.setAttribute('aria-expanded','false'); }

  // category links (both header and mobile)
  document.querySelectorAll('[data-cat]').forEach(a => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const cat = a.dataset.cat;
      if(cat === 'all'){ state.query = ''; searchInput.value=''; headerSearch && (headerSearch.value=''); mobileSearch && (mobileSearch.value=''); }
      else { state.query = cat; searchInput.value = cat; headerSearch && (headerSearch.value = cat); mobileSearch && (mobileSearch.value = cat); }
      renderProducts();
      closeMobile();
    });
  });

  // cart item actions delegated (inc/dec/remove)
  cartItemsEl.addEventListener('click', e => {
    const btn = e.target.closest('button'); if(!btn) return;
    const action = btn.dataset.action; const id = btn.dataset.id;
    if(action === 'inc' || action === 'dec' || action === 'remove'){ if(action==='inc') changeQty(id,1); if(action==='dec') changeQty(id,-1); if(action==='remove') removeFromCart(id); }
  });

  // overlay closes everything
  overlay.addEventListener('click', ()=>{ closeCart(); closeModal(); closeCheckoutModalFn(); closeMobile(); });

  // storage sync
  window.addEventListener('storage', e => { if(e.key === CART_KEY){ loadCart(); updateCartUI(); } });

  // header scroll and cart pulse animation
  (function headerInteractions(){
    const header = document.querySelector('.site-header');
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset;
          if (y > 12) header.classList.add('scrolled'); else header.classList.remove('scrolled');
          ticking = false;
        });
        ticking = true;
      }
    });

    const cartBtn = document.getElementById('openCartBtn');
    const observer = new MutationObserver(() => {
      if (!cartBtn) return;
      cartBtn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }], { duration: 280, easing: 'ease-out' });
    });
    const cartCount = document.getElementById('cartCount');
    if (cartCount) observer.observe(cartCount, { childList: true, characterData: true, subtree: true });
  })();

  // accessibility helper: close mobile nav via ESC
  function closeMobileOnEsc(e){ if(e.key==='Escape') closeMobile(); }
  document.addEventListener('keydown', closeMobileOnEsc);

