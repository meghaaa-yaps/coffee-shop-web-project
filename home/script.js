const services = document.querySelectorAll('.service');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

services.forEach((service) => {
    observer.observe(service);
});