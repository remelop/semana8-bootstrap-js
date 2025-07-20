// Alert personalizada al hacer clic
document.getElementById('alertButton').addEventListener('click', () => {
    alert('Esta es una alerta personalizada creada con JavaScript Seguro Deseas CERRAR ???.');
});

// Validación dinámica del formulario de contacto
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpia estados previos
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('is-invalid');
    });

    // Validación simple
    let valid = true;

    // Nombre
    const nombre = form.querySelector('#nombre');
    if (!nombre.value.trim()) {
        nombre.classList.add('is-invalid');
        valid = false;
    }

    // Email
    const email = form.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
    }

    // Mensaje
    const mensaje = form.querySelector('#mensaje');
    if (!mensaje.value.trim()) {
        mensaje.classList.add('is-invalid');
        valid = false;
    }

    if (valid) {
        alert('Formulario enviado con éxito. ¡Gracias por contactarnos!');
        form.reset();
    }
});
