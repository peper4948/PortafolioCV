document.querySelector('.contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        titulo: document.getElementById('asunto').value,
        mensaje: document.getElementById('mensaje').value
    };

    Promise.all([
        emailjs.send("service_ezixmrm", "template_t3zi2an", datos),
        emailjs.send("service_ezixmrm", "template_n19ypng", datos) 
    ])
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Te responderé a la brevedad posible.',
            background: '#0f172a',
            color: '#e2e8f0',
            confirmButtonColor: '#22D3EE'
        });
        this.reset();
    })
    .catch(() => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo enviar el mensaje, intenta de nuevo.',
            background: '#0f172a',
            color: '#e2e8f0',
            confirmButtonColor: '#22D3EE'
        });
    });
});
