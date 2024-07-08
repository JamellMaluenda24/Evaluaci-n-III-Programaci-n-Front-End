function mostrarAlerta(mensaje, tipo) {
    const contenedorAlerta = document.getElementById('contenedorAlerta');
    contenedorAlerta.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}
