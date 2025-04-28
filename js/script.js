// Ambil elemen textarea
const inputCelsius = document.getElementById('konversi-input');

// Ambil semua tombol
const btnKonversi = document.querySelector('.bg-1');
const btnReset = document.querySelector('.bg-2');
const btnReverse = document.querySelector('.bg-3');

// Event untuk tombol Konversi
btnKonversi.addEventListener('click', function() {
    let celsius = parseFloat(inputCelsius.value);
    if (isNaN(celsius)) {
        alert('Masukkan angka yang valid untuk Celsius!');
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    inputCelsius.value = fahrenheit.toFixed(2) + " °F";
});

// Event untuk tombol Reset
btnReset.addEventListener('click', function() {
    inputCelsius.value = '';
});

// Event untuk tombol Reverse (balik dari Fahrenheit ke Celsius)
btnReverse.addEventListener('click', function() {
    // Ambil angka dari input, hapus " °F" jika ada
    let fahrenheitStr = inputCelsius.value.replace(" °F", "").trim();
    let fahrenheit = parseFloat(fahrenheitStr);

    if (isNaN(fahrenheit)) {
        alert('Masukkan angka Fahrenheit yang valid untuk Reverse!');
        return;
    }

    let celsius = (fahrenheit - 32) * 5/9;
    inputCelsius.value = celsius.toFixed(2) + " °C";
});
