// Variable para controlar si las habilidades ya se animaron
let habilidadesAnimadas = false;

// Función para mostrar/ocultar el menú responsive
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}

// Función para cerrar el menú al hacer click en una opción (útil en responsive)
function seleccionar() {
    // Oculta el menú
    document.getElementById("nav").classList.remove("responsive");
}

// Función para animar las barras de habilidades al hacer scroll
function efectoHabilidades() {
    if (habilidadesAnimadas) {
        return; // Detiene la función si ya se animaron
    }

    const skillsSection = document.getElementById("skills");
    // Obtiene la posición superior de la sección de habilidades en relación a la ventana
    const distancia_skills = skillsSection.getBoundingClientRect().top;

    // Define un punto de activación, por ejemplo, cuando la sección está a 300px del borde superior
    const puntoActivacion = window.innerHeight - 300; 

    if (distancia_skills <= puntoActivacion) {
        // La sección está en pantalla o cerca, se activa la animación
        habilidadesAnimadas = true; 
        
        // Selecciona todos los elementos con la clase .progreso
        const barras = document.querySelectorAll(".barra-skill .progreso");
        
        // Itera sobre cada barra y le añade la clase que define su ancho (e.g., 'javascript')
        barras.forEach(barra => {
            // La clase de ancho (e.g., 'javascript' o 'htmlcss') es la segunda en la lista
            const className = barra.classList[1]; 
            if (className) {
                barra.classList.add(className); 
            }
        });
    }
}

// Agregamos un listener al evento scroll para llamar a la función de animación
window.addEventListener("scroll", efectoHabilidades);

// Llamamos la función una vez al cargar por si la sección ya está visible
efectoHabilidades();
    efectoHabilidades();

} 


