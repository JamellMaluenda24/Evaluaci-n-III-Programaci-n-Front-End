document.getElementById('formCalorias').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const minutos = parseFloat(document.getElementById('minutos').value);
    const actividad = parseFloat(document.querySelector('input[name="actividad"]:checked').value);

    if (peso < 1 || peso > 120) {
        mostrarAlerta('Peso debe estar entre 1 y 120 kg.', 'danger');
        return;
    }
    if (minutos < 5 || minutos > 150) {
        mostrarAlerta('Minutos a ejercitar deben estar entre 5 y 150.', 'danger');
        return;
    }

    const calorias = actividad * 3.5 * peso * (minutos / 200);
    mostrarAlerta(`Calorías quemadas: ${calorias.toFixed(2)}`, 'info');
});
