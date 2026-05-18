document.addEventListener('DOMContentLoaded', function () {

    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="mobile-brand">
                    <a href="../pages/index.html">
                        <img src="../images/MUN.png" alt="MUN Logo">
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="../pages/index.html" class="link">HOME</a></li>
                    <li><a href="../pages/about.html" class="link">MEET THE TEAM</a></li>
                    <li><a href="../pages/events.html" class="link">EVENTS</a></li>

                    <li class="logo-item">
                        <div class="image">
                            <a href="../pages/index.html">
                                <img src="../images/MUN.png" alt="MUN Logo">
                            </a>
                        </div>
                    </li>

                    <li><a href="../pages/resources.html" class="link">RESOURCES</a></li>
                    <li><a href="../pages/faqs.html" class="link">FAQS</a></li>
                    <li><a href="../pages/contact.html" class="link">CONTACT</a></li>
                </ul>

                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `;

    // Inject navbar
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;

    // ── Highlight active page ──
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.link').forEach(function (link) {
        if (link.getAttribute('href').endsWith(currentPage)) {
            link.classList.add('active');
        }
    });

    // ── Mobile toggle ──
    // Must run HERE, after the HTML has been injected above
    const btn  = document.getElementById('mobileMenuBtn');
    const menu = document.querySelector('.nav-links');
    const navRoot = document.querySelector('.navbar');

    if (!btn || !menu) return;

    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.setAttribute('aria-controls', 'primary-navigation');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('id', 'primary-navigation');
    menu.setAttribute('aria-hidden', 'true');

    function closeMenu() {
        btn.classList.remove('active');
        menu.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('active');
        btn.classList.toggle('active', isOpen);
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

   // Close when a nav link is tapped
    menu.querySelectorAll('.link').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // Close when tapping outside the navbar
    document.addEventListener('click', function (e) {
        if (navRoot && !navRoot.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});
