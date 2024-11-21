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


document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with draw-in-effect
    const elementsToAnimate = document.querySelectorAll('.draw-in-effect');

    // Observer setup
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the draw-out animation
                if (entry.target.classList.contains('draw-in-effect')) {
                    const path = entry.target.querySelector('.vertical-line-path');
                    path.style.animationPlayState = 'running'; // Start path animation
                }
                entry.target.style.opacity = 1; // Ensure visibility for draw-in-effect
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    // Observe all draw-in-effect elements
    elementsToAnimate.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    const bigVerticalLinePaths = document.querySelectorAll(
        ".big-vertical-line-path"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    bigVerticalLinePaths.forEach((path) => {
                        path.style.animationPlayState = "running"; // Start animation
                    });
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% in view
    );

    const svgContainer = document.querySelector(".big-vertical-line");
    observer.observe(svgContainer);
});


document.addEventListener("DOMContentLoaded", () => {
    const advertisingLowerSvgPaths = document.querySelectorAll(
        ".advertising-lower-svg-corner-path"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    advertisingLowerSvgPaths.forEach((path) => {
                        path.style.animationPlayState = "running"; // Start animation
                    });
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% in view
    );

    const svgContainer = document.querySelector(
        ".advertising-lower-svg-corner"
    );
    observer.observe(svgContainer);
});

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.pop-in-effect, .draw-in-effect');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('pop-in-effect')) {
                    entry.target.classList.add('pop-in'); // Add pop-in animation
                }
                if (entry.target.classList.contains('draw-in-effect')) {
                    entry.target.querySelectorAll('.contact-page-plus-element-path').forEach(path => {
                        path.style.animationPlayState = 'running'; // Trigger draw animation
                    });
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    elementsToAnimate.forEach(element => observer.observe(element));
});