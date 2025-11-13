// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica de Filtrado de Proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    const applyFilter = (filter) => {
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Actualizar clase 'active'
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            applyFilter(filter);
        });
    });

    // Ejecutar filtro 'Todos' al cargar
    document.querySelector('.filter-btn[data-filter="all"]').click();


    // 2. Toggle del Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('main-menu');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
    
    // Ocultar menú si se hace clic en un enlace (solo en móvil)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
             if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
});


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();

} 
