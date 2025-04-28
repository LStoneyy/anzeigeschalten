document.addEventListener('DOMContentLoaded', function() {
    console.log("Loaded");
    showContactButtons();
    showTopButton();
    
    // Smooth scrolling for the scroll indicator
    const scrollIndicator = document.getElementById('scrollDown');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const infoSection = document.getElementById('infoSection');
            if (infoSection) {
                infoSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Form submit handler with animation
const stateForm = document.getElementById('stateForm');
if (stateForm) {
    stateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const bundesland = document.getElementById('bundesland').value;
        if (!bundesland) {
            // Highlight the select field if nothing is selected
            document.querySelector('.select-wrapper').classList.add('shake');
            setTimeout(() => {
                document.querySelector('.select-wrapper').classList.remove('shake');
            }, 500);
            return;
        }
        
        // Add loading animation to button
        const submitButton = this.querySelector('.submit-button');
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        // URL-Mapping für die Bundesländer
        const urlMapping = {
            "NRW": "https://formulare.polizei.nrw/anzeige",
            // Weitere Bundesländer hier hinzufügen
        };
        
        // Add loading animation and redirect
        setTimeout(() => {
            // Wenn eine URL für das Bundesland definiert ist, dorthin weiterleiten
            if (urlMapping[bundesland]) {
                window.location.href = urlMapping[bundesland];
            } else {
                // Fallback auf die ursprüngliche URL
                window.location.href = `/bundesland/${bundesland}`;
            }
        }, 500);
    });
}
});

// Existing functions
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("open");
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("open");
}

// Apple-like reveal animations on scroll
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

// Set up intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.info-content p');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
    
    // Add animation class to section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.style.opacity = '0';
        sectionTitle.style.transform = 'translateY(20px)';
        sectionTitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(sectionTitle);
    }
});

function showTopButton() {
    console.log("Loaded");

    const toTop = document.querySelector('.totop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active')
        }
    })
}

function showContactButtons() {
    console.log("Loaded");

    const mailbutton = document.querySelector('.mailbutton');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            mailbutton.classList.add('active')
        } else {
            mailbutton.classList.remove('active')
        }
    })
}