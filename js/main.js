let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}; 

// Obtener el contenedor del menú desplegable y el menú desplegable mismo
const dropdownContainer = document.querySelector(".dropdown-container");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Función para mostrar el menú desplegable
function showMenu() {
    dropdownMenu.classList.add("active");
}

// Función para ocultar el menú desplegable
function hideMenu() {
    dropdownMenu.classList.remove("active");
}

// Añadir un evento de mouseenter al contenedor del menú desplegable
dropdownContainer.addEventListener("mouseenter", function() {
    // Asegurarse de que el menú desplegable esté visible
    showMenu();
});

// Añadir un evento de mouseleave al menú desplegable para mantenerlo visible mientras el cursor esté sobre él
dropdownMenu.addEventListener("mouseleave", function() {
    // Ocultar el menú desplegable solo si el cursor no está sobre él
    hideMenu();
});

// Añadir un evento de clic al enlace "Services" para mostrar/ocultar el menú desplegable en dispositivos táctiles
dropdownContainer.addEventListener("click", function(event) {
    // Evitar que el evento se propague al hacer clic en el enlace
    event.stopPropagation();
    // Alternar la visibilidad del menú desplegable
    dropdownMenu.classList.toggle("active");
});

// Añadir un evento de clic al documento para ocultar el menú desplegable cuando se hace clic fuera de él
document.addEventListener("click", function(event) {
    // Si el menú desplegable está abierto y se hace clic fuera de él, ocultarlo
    if (dropdownMenu.classList.contains("active") && event.target !== dropdownContainer) {
        hideMenu();
    }
});

// Añadir un evento de clic al menú desplegable para evitar que se cierre cuando se hace clic en él
dropdownMenu.addEventListener("click", function(event) {
    // Evitar que el evento se propague al hacer clic en el menú desplegable
    event.stopPropagation();
});


