// ============================================
// MAIN JAVASCRIPT - Navigation and Portfolio Logic
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Load portfolio grid on the Work page
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (portfolioGrid) {
        loadPortfolioGrid();
    }

    // Handle navigation active state
    setActiveNavLink();
});

// ============================================
// PORTFOLIO GRID LOADING
// ============================================

function loadPortfolioGrid() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    portfolioProjects.forEach(project => {
        const card = createPortfolioCard(project);
        portfolioGrid.appendChild(card);
    });
}

function createPortfolioCard(project) {
    const card = document.createElement('a');
    card.href = project.projectPage;
    card.className = 'portfolio-card';
    
    const tagsHTML = project.tags
        .map(tag => `<span class="portfolio-tag">${tag}</span>`)
        .join('');
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="portfolio-card-image">
        <div class="portfolio-card-content">
            <h3 class="portfolio-card-title">${project.title}</h3>
            <p class="portfolio-card-description">${project.description}</p>
            <div class="portfolio-card-tags">
                ${tagsHTML}
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// NAVIGATION HANDLING
// ============================================

function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Determine which nav link matches the current page
        if (
            (currentPage === 'index' && link.getAttribute('href') === 'index.html') ||
            (currentPage === 'about' && link.getAttribute('href') === 'about.html') ||
            (currentPage === 'resume' && link.getAttribute('href') === 'resume.html') ||
            (currentPage === 'contact' && link.getAttribute('href') === 'contact.html')
        ) {
            link.classList.add('active');
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return page.replace('.html', '');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add to window for global use
window.scrollToTop = scrollToTop;
