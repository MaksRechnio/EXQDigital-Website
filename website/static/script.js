// Toggles the mobile menu when the hamburger menu is clicked
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const nichesCornerPaths = document.querySelectorAll('.niches-corner-path');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nichesCornerPaths.forEach(path => {
                    path.style.animationPlayState = 'running';
                });
            }
        });
    }, { threshold: 0.5 });

    const svgContainer = document.querySelector('.niches-corner-element-container');
    observer.observe(svgContainer);
});

//This is the function that allows me to show items to user only as they have it in their sight, so i can have cool pop-in animations throughout my page

document.addEventListener('DOMContentLoaded', () => {
    // Select elements for both pop-in and draw animations
    const elementsToAnimate = document.querySelectorAll('.pop-in-effect, .draw-in-effect');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('pop-in-effect')) {
                    entry.target.classList.add('pop-in'); // Add pop-in animation
                }
                if (entry.target.classList.contains('draw-in-effect')) {
                    entry.target.style.animationPlayState = 'running'; // Trigger draw-out animation
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    elementsToAnimate.forEach(element => observer.observe(element));
});