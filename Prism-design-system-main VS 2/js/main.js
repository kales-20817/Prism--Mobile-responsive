// ===== nav-scroll (shared by 88 pages) =====
(function(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const toggle = () => {
    if (window.scrollY > 10) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
})();

// ===== move theme toggle out of .nav-links into .nav directly (so mobile cluster always shows it) =====
(function(){
  const nav = document.querySelector('.nav');
  const toggle = document.getElementById('themeToggle');
  if (nav && toggle && toggle.parentElement && toggle.parentElement.classList.contains('nav-links')) {
    nav.appendChild(toggle);
  }
})();

// ===== mobile-drawer (shared by 87 pages) =====
(function(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  // Pages with their own .mobile-drawer (e.g. index) wire the hamburger inline.
  if (document.querySelector('.mobile-drawer')) return;

  let hamburger = nav.querySelector('.nav-hamburger');
  if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.className = 'nav-hamburger';
    hamburger.type = 'button';
    hamburger.setAttribute('aria-label', 'Open sidebar');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>';
    nav.insertBefore(hamburger, nav.firstChild);
  }

  let backdrop = document.querySelector('.sidebar-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    nav.parentNode.insertBefore(backdrop, nav.nextSibling);
  }

  let sidebar = document.querySelector('.sidebar');
  if (!sidebar) {
    sidebar = document.createElement('aside');
    sidebar.className = 'sidebar mobile-nav-drawer';
    sidebar.setAttribute('aria-label', 'Mobile navigation');
    document.body.appendChild(sidebar);
  }

  const navLinks = document.querySelector('.nav-links');

  // Build a mobile-only nav section at the top of the sidebar by cloning the nav links
  if (navLinks && !sidebar.querySelector('.sidebar-mobile-nav')) {
    const mobileNav = document.createElement('div');
    mobileNav.className = 'sidebar-mobile-nav';
    const heading = document.createElement('h4');
    heading.textContent = 'Navigate';
    mobileNav.appendChild(heading);
    const ul = document.createElement('ul');
    const addItem = (a) => {
      const li = document.createElement('li');
      const clone = a.cloneNode(true);
      clone.querySelectorAll('svg').forEach(svg => svg.remove());
      li.appendChild(clone);
      ul.appendChild(li);
    };
    navLinks.querySelectorAll(':scope > a').forEach(addItem);
    navLinks.querySelectorAll(':scope > .nav-dropdown > .nav-dropdown-menu > a').forEach(addItem);
    mobileNav.appendChild(ul);
    sidebar.insertBefore(mobileNav, sidebar.firstChild);
  }

  const open = () => {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('sidebar-locked');
    hamburger.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('sidebar-locked');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  if (!sidebar.querySelector('.sidebar-close')) {
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'sidebar-close';
    closeBtn.setAttribute('aria-label', 'Close navigation');
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    closeBtn.addEventListener('click', close);
    sidebar.insertBefore(closeBtn, sidebar.firstChild);
  }

  hamburger.addEventListener('click', () => sidebar.classList.contains('open') ? close() : open());
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && sidebar.classList.contains('open')) close(); });
  sidebar.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
})();