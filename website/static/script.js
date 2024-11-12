// Toggles the mobile menu when the hamburger menu is clicked
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Select elements for pop-in animations and draw-out animations
    const elementsToAnimate = document.querySelectorAll('.pop-in-effect, .draw-in-effect');
    const nichesCornerPaths = document.querySelectorAll('.niches-corner-path');
    const nichesCornerContainer = document.querySelector('.niches-corner-element-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Handle pop-in effect
                if (entry.target.classList.contains('pop-in-effect')) {
                    entry.target.classList.add('pop-in');
                }

                // Handle draw-out effect for general elements
                if (entry.target.classList.contains('draw-in-effect')) {
                    entry.target.style.animationPlayState = 'running';
                }

                // Handle nichesCornerPaths draw-out animation
                if (entry.target === nichesCornerContainer) {
                    nichesCornerPaths.forEach(path => {
                        path.style.animationPlayState = 'running';
                    });
                }

                // Stop observing the target after triggering animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Observe all elements for animations
    elementsToAnimate.forEach(element => observer.observe(element));

    // Specifically observe the niches corner container
    if (nichesCornerContainer) {
        observer.observe(nichesCornerContainer);
    }
});