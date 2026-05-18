document.addEventListener('DOMContentLoaded', function () {

    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
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

    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
        btn.classList.toggle('active');
        menu.classList.toggle('active');
    });

   // Close when a nav link is tapped
    menu.querySelectorAll('.link').forEach(function (link) {
        link.addEventListener('click', function () {
            btn.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Close when tapping outside the navbar
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            btn.classList.remove('active');
            menu.classList.remove('active');
        }
    });
});