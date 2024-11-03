//Konversi Bilangan
function convert() {
    const inputValue = document.getElementById('numberInput').value;
    const fromBase = parseInt(document.getElementById('fromBase').value);

    // Konversi ke desimal
    const decimalValue = parseInt(inputValue, fromBase);
    if (isNaN(decimalValue)) {
        document.getElementById('result').innerText = 'Input tidak valid!';
        return;
    }

    // Konversi ke berbagai basis
    const binaryValue = decimalValue.toString(2);
    const octalValue = decimalValue.toString(8);
    const hexadecimalValue = decimalValue.toString(16).toUpperCase();

    // Menampilkan hasil
    document.getElementById('result').innerHTML = `
        Biner: ${binaryValue} <br>
        Oktal: ${octalValue} <br>
        Desimal: ${decimalValue} <br>
        Heksadesimal: ${hexadecimalValue}
    `;
}

//kalkulator Sederhana
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}