function generarFibonacci() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    let a = 0, b = 1, temp;

    if (numero < 1) {
        resultado.innerHTML = '<p>Por favor, ingresa un número mayor que 0.</p>';
        return;
    }

    for (let i = 0; i < numero; i++) {
        const p = document.createElement('p');
        p.textContent = a;
        resultado.appendChild(p);
        temp = a;
        a = b;
        b = temp + b;
    }
}

function limpiarCampos() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}
