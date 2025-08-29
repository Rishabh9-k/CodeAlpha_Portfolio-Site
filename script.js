document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });

   
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.slider-nav .prev');
    const nextButton = document.querySelector('.slider-nav .next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials[currentTestimonial].classList.remove('active');
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }

    prevButton.addEventListener('click', () => {
        let index = currentTestimonial - 1;
        if (index < 0) index = testimonials.length - 1;
        showTestimonial(index);
    });

    nextButton.addEventListener('click', () => {
        let index = currentTestimonial + 1;
        if (index >= testimonials.length) index = 0;
        showTestimonial(index);
    });

    // Animate skill bars on scroll
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                bar.style.width = bar.dataset.width;
            }
        });
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Initial check

    // Form validation
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        if (name.value.trim() === '') {
            isValid = false;
            name.style.borderColor = 'red';
        } else {
            name.style.borderColor = '';
        }

        if (email.value.trim() === '' || !email.value.includes('@')) {
            isValid = false;
            email.style.borderColor = 'red';
        } else {
            email.style.borderColor = '';
        }

        if (message.value.trim() === '') {
            isValid = false;
            message.style.borderColor = 'red';
        } else {
            message.style.borderColor = '';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});