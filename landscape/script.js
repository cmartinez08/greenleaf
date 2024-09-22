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