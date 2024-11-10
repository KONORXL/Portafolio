function changeActionButton(id) {
    var header_elements = document.querySelectorAll('.button-header');
    header_elements.forEach((elem) => {
        if(elem.id !== id && elem.classList.contains('active')) {
            elem.classList.remove('active');
        }
    });

    var element = document.getElementById(id);
    element.classList.add("active");

    scrollToSection(id + '-section');

}

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('customCursor');

    document.addEventListener('mousemove', (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    // Opcional: Agrega interacciones personalizadas para ciertos elementos
    document.querySelectorAll('a, button').forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
});


document.addEventListener('mouseup', () => {
    if (window.getSelection().toString().length > 0) {
        const colors = ['selection-red', 'selection-green', 'selection-purple'];
        const randomColorClass = colors[Math.floor(Math.random() * colors.length)];

        // Elimina cualquier clase de selección existente
        document.body.classList.remove('selection-red', 'selection-green', 'selection-purple');

        // Añade una clase de color aleatoria al `body`
        document.body.classList.add(randomColorClass);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('.header'); // Asegúrate de que esta clase coincida con tu HTML

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Desplazamiento hacia abajo: Oculta el header
                header.style.transform = 'translateY(-200%)';
            } else {
                // Desplazamiento hacia arriba: Muestra el header
                header.style.transform = 'translateY(0)';
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
        });
    } else {
        console.error("El elemento con la clase 'header' no se encontró.");
    }
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave
            block: 'start' // Alinea el inicio del elemento con la parte superior de la ventana
        });
    }
}