let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active'); // Remove the active class from all testimonials
    });
    
        testimonials[index].classList.add('active'); // Show the selected testimonial
        }

// Function to show the previous testimonial
function prevTestimonial() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalTestimonials - 1;
    showTestimonial(currentIndex);
}

// Function to show the next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex < totalTestimonials - 1) ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
}

// Function to handle opening the form in a new window
function openForm(serviceName) {
    window.open(`form.html?service=${encodeURIComponent(serviceName)}`, '_blank', 'width=600,height=400');
}

// Function to handle setting the service name in the form
function setupForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('service');
    const serviceTitle = document.getElementById('serviceTitle');

    if (serviceTitle) {
        serviceTitle.textContent = serviceName || 'Service Form';
    }

    const form = document.getElementById('serviceForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the form from refreshing the page

            // Collect the form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const details = document.getElementById('details').value;

            // Log the data to verify it's collected correctly
            console.log('Form Data:', {name, email, details});

            // Store the data in LocalStorage
            const formData = {
                serviceName: serviceName,
                name: name,
                email: email,
                details: details
            };
            localStorage.setItem('serviceFormData', JSON.stringify(formData));

            alert('Form submitted! Data saved to LocalStorage.');
        });
    }
}

// Detect the current page and initialize the appropriate function
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('serviceTitle')) {
        setupForm();  // We're on the form page
    }
});



// After saving the data
localStorage.setItem('serviceFormData', JSON.stringify(formData));

// Log the stored data immediately after saving
getStoredFormData();




