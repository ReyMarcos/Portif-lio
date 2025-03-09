document.addEventListener('DOMContentLoaded', function() {
    // Handle subscription form submission
    const subscriptionForm = document.getElementById('subscriptionForm');
    
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simulate form submission
            console.log('Subscription email:', email);
            
            // Show success message (you can customize this)
            alert('Inscrição realizada com sucesso!');
            
            // Clear the form
            emailInput.value = '';
        });
    }

    // Initialize Bootstrap tooltips if needed
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Add active class to current tab
    const profileTabs = document.getElementById('profileTabs');
    if (profileTabs) {
        const navLinks = profileTabs.getElementsByClassName('nav-link');
        
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs
                for (let j = 0; j < navLinks.length; j++) {
                    navLinks[j].classList.remove('active');
                }
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show corresponding content
                const targetId = this.getAttribute('href').substring(1);
                const tabPanes = document.getElementsByClassName('tab-pane');
                
                for (let k = 0; k < tabPanes.length; k++) {
                    tabPanes[k].classList.remove('show', 'active');
                    if (tabPanes[k].id === targetId) {
                        tabPanes[k].classList.add('show', 'active');
                    }
                }
            });
        }
    }
});
