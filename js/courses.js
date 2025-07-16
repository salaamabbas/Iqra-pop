// Advanced Course Filtering Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Course elements
    const courseTabs = document.querySelectorAll('.course-tab');
    const levelTabs = document.querySelectorAll('.level-tab');
    const courseCards = document.querySelectorAll('.course-card');
    const searchInput = document.getElementById('course-search');
    const searchBtn = document.getElementById('search-btn');
    
    // Current filter state
    let currentPlatform = 'all';
    let currentLevel = 'all';
    let searchQuery = '';
    
    // Filter courses based on all criteria
    function filterCourses() {
        courseCards.forEach(card => {
            const platforms = card.getAttribute('data-platforms') || '';
            const level = card.getAttribute('data-level') || '';
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            const matchesPlatform = currentPlatform === 'all' || platforms.includes(currentPlatform);
            const matchesLevel = currentLevel === 'all' || level.includes(currentLevel);
            const matchesSearch = searchQuery === '' || 
                                 title.includes(searchQuery) || 
                                 description.includes(searchQuery);
            
            if (matchesPlatform && matchesLevel && matchesSearch) {
                card.style.display = 'flex';
                // Add a fade-in animation
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Platform tab filtering
    courseTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active state
            courseTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter state
            currentPlatform = this.getAttribute('data-platform');
            
            // Apply filters
            filterCourses();
        });
    });
    
    // Level tab filtering
    levelTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active state
            levelTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter state
            currentLevel = this.getAttribute('data-level');
            
            // Apply filters
            filterCourses();
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase().trim();
        filterCourses();
    });
    
    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchQuery = searchInput.value.toLowerCase().trim();
            filterCourses();
        });
    }
    
    // Donation amount selection
    const donationAmounts = document.querySelectorAll('.donation-amount');
    
    donationAmounts.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all donation buttons
            donationAmounts.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Handle custom amount
            if (this.classList.contains('custom')) {
                const amount = prompt('Enter custom donation amount:');
                if (amount && !isNaN(amount)) {
                    this.textContent = amount;
                } else {
                    this.classList.remove('active');
                }
            }
        });
    });
    
    // Donate button action
    const donateBtn = document.querySelector('.donate-btn');
    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            const activeAmount = document.querySelector('.donation-amount.active');
            
            if (activeAmount) {
                alert('Thank you for your donation of ' + activeAmount.textContent + '! We will contact you soon to complete the process.');
            } else {
                alert('Please select a donation amount first.');
            }
        });
    }
});
