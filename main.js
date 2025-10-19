const hero = document.getElementById("hero");
const overlay = document.getElementById("overlay");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");

// Array con imágenes y textos asociados
const slides = [
    {
        imagen: "IMGs/imagen-1.jpg",
        titulo: "Aprovecha nuestras ofertas",
        texto: "Descuentos exclusivos en toda nuestra colección."
    },
    {
        imagen: "IMGs/imagen-2.jpg",
        titulo: "Nueva colección muy pronto",
        texto: "Estilos únicos que definen tu personalidad."
    }
];

let indice = 0;

function cambiarSlide() {
    const { imagen, titulo, texto } = slides[indice];
    
    // Oculta el texto actual
    overlay.classList.remove("show");
    
    setTimeout(() => {
        // Cambia la imagen y el texto
        hero.style.backgroundImage = `url(${imagen})`;
        heroTitle.textContent = titulo;
        heroText.textContent = texto;

        // Muestra con efecto fade
        overlay.classList.add("show");
    }, 600); // pequeño retraso para el efecto de desvanecimiento

    // Siguiente slide
    indice = (indice + 1) % slides.length;
}

// Inicia y repite
cambiarSlide();
setInterval(cambiarSlide, 8000);
