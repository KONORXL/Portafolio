// This function changes the active button in the header and scrolls to the corresponding section.
function changeActionButton(id) {
    // Select all header elements with the class 'button-header'.
    var header_elements = document.querySelectorAll('.button-header');
    
    // Iterate over each header element to remove the 'active' class if it's not the clicked one.
    header_elements.forEach((elem) => {
        if(elem.id !== id && elem.classList.contains('active')) {
            elem.classList.remove('active');
        }
    });

    // Add the 'active' class to the clicked button.
    var element = document.getElementById(id);
    element.classList.add("active");

    // Scroll to the section corresponding to the clicked button.
    scrollToSection(id + '-section');
}

// This event listener sets up the custom cursor behavior when the document is loaded.
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('customCursor');

    // Move the custom cursor based on mouse movement.
    document.addEventListener('mousemove', (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    // Add 'active' class to the cursor on mousedown event.
    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    // Remove 'active' class from the cursor on mouseup event.
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    // Add interactions for links and buttons to make the cursor active when hovering over them.
    document.querySelectorAll('a, button').forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
});

// This event listener changes the selection color when text is selected.
document.addEventListener('mouseup', () => {
    if (window.getSelection().toString().length > 0) {
        // Array of color classes to apply randomly.
        const colors = ['selection-red', 'selection-green', 'selection-purple'];
        const randomColorClass = colors[Math.floor(Math.random() * colors.length)];

        // Remove existing color classes from the body.
        document.body.classList.remove('selection-red', 'selection-green', 'selection-purple');

        // Add a random color class to the body.
        document.body.classList.add(randomColorClass);
    }
});

// This event listener toggles the header's visibility based on the scroll direction.
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('.header'); // Ensure this matches your HTML structure.

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scroll down: hide the header.
                header.style.transform = 'translateY(-200%)';
            } else {
                // Scroll up: show the header.
                header.style.transform = 'translateY(0)';
            }

            // Prevent negative scroll values.
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    } else {
        console.error("The element with class 'header' was not found.");
    }
});

// This function scrolls smoothly to the section with the given ID.
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling behavior.
            block: 'start' // Aligns the top of the section with the top of the viewport.
        });
    }
}

// This event listener highlights the corresponding header button when scrolling through sections.
document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        { id: 'info-section', buttonId: 'info' },
        { id: 'education-section', buttonId: 'education' },
        { id: 'skills-section', buttonId: 'skills' },
        { id: 'work-section', buttonId: 'work' },
        { id: 'project-section', buttonId: 'project' }
    ];

    const headerButtons = document.querySelectorAll('.button-header');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        // Determine the currently visible section.
        sections.forEach((section) => {
            const sectionElement = document.getElementById(section.id);
            const sectionTop = sectionElement.offsetTop;
            const sectionHeight = sectionElement.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSectionId = section.buttonId;
            }
        });

        // Highlight the corresponding button in the header.
        headerButtons.forEach((button) => {
            button.classList.remove('active');
            if (button.id === currentSectionId) {
                button.classList.add('active');
            }
        });
    });
});
