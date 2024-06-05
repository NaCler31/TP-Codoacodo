window.onload = function() {
    var index = 0; // Índice de la imagen actual

    // Obtener todas las imágenes y mostrar la primera
    var slides = document.querySelectorAll('.slider-container img');
    slides[index].style.display = 'block';

    // Función para cambiar a la siguiente imagen
    function nextSlide() {
        slides[index].style.display = 'none'; // Ocultar la imagen actual
        index = (index + 1) % slides.length; // Incrementar el índice, asegurándose de que esté dentro del rango de imágenes
        slides[index].style.display = 'block'; // Mostrar la siguiente imagen
    }

    // Configurar el intervalo para cambiar automáticamente las imágenes cada 3 segundos
    setInterval(nextSlide, 5000);
};
