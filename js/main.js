// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const footer = document.getElementById('footer-section');
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling of background
    if (footer) {
        footer.style.display = "none"; // Hide footer when modal is open
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const footer = document.getElementById('footer-section');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
    if (footer) {
        footer.style.display = "block"; // Show footer when modal is closed
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const footer = document.getElementById('footer-section');
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
        if (footer) {
            footer.style.display = "block"; // Show footer when modal is closed
        }
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.getElementsByClassName('modal');
        const footer = document.getElementById('footer-section');
        for (let modal of modals) {
            if (modal.style.display === "block") {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                if (footer) {
                    footer.style.display = "block"; // Show footer when modal is closed
                }
            }
        }
    }
}); 