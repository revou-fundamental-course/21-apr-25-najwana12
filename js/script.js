// Penanda mode konversi: true = dari Celsius ke Fahrenheit
let isCelsiusToFahrenheit = true;

// Fungsi utama konversi suhu
function convert() {
  const input = document.getElementById("inputSuhu");
  const output = document.getElementById("outputSuhu");
  const formulaBox = document.getElementById("formula");
  const icon = document.getElementById("iconCuaca");
  const warning = document.getElementById("peringatan");

  // Ambil dan bersihkan input 
  const raw = input.value.trim().replace(",", ".");
  
  // Cek apakah input kosong
  if (raw === "") {
    warning.textContent = "⚠️ Harap masukkan nilai suhu!";
    output.value = "";
    formulaBox.value = "";
    icon.textContent = "⛅";
    return;
  }

  const value = parseFloat(raw);

  // Cek apakah input bukan angka
  if (isNaN(value)) {
    warning.textContent = "⚠️ Input tidak valid. Harap masukkan angka.";
    output.value = "";
    formulaBox.value = "";
    icon.textContent = "⛅";
    return;
  }

  // Hilangkan pesan peringatan 
  warning.textContent = "";

  // Konversi suhu berdasarkan mode
  if (isCelsiusToFahrenheit) {
    const fahrenheit = (value * 9 / 5 + 32).toFixed(2);
    output.value = fahrenheit.replace(".", ",");
    formulaBox.value = `${value}°C × 9/5 + 32 = ${fahrenheit}°F`;
    tampilkanIconCuaca(value); // karena input awal Celsius
  } else {
    const celsius = ((value - 32) * 5 / 9).toFixed(2);
    output.value = celsius.replace(".", ",");
    formulaBox.value = `(${value}°F - 32) × 5/9 = ${celsius}°C`;
    tampilkanIconCuaca(parseFloat(celsius)); // pakai hasil konversi
  }
}

// Fungsi untuk reset semua field
function resetFields() {
  document.getElementById("inputSuhu").value = "";
  document.getElementById("outputSuhu").value = "";
  document.getElementById("formula").value = "";
  document.getElementById("iconCuaca").textContent = "⛅";
  document.getElementById("peringatan").textContent = "";
}

// Fungsi untuk menukar arah konversi
function reverse() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

  const inputLabel = document.getElementById("inputLabel");
  const outputLabel = document.getElementById("outputLabel");
  const inputField = document.getElementById("inputSuhu");
  const outputField = document.getElementById("outputSuhu");

  // Ganti label dan placeholder sesuai mode
  if (isCelsiusToFahrenheit) {
    inputLabel.textContent = "Celsius (°C)";
    outputLabel.textContent = "Fahrenheit (°F)";
    inputField.placeholder = "Masukkan suhu Celsius";
    outputField.placeholder = "Hasil dalam Fahrenheit";
  } else {
    inputLabel.textContent = "Fahrenheit (°F)";
    outputLabel.textContent = "Celsius (°C)";
    inputField.placeholder = "Masukkan suhu Fahrenheit";
    outputField.placeholder = "Hasil dalam Celsius";
  }

  // Tukar nilai input dan output biar nyaman saat bolak-balik
  const temp = inputField.value;
  inputField.value = outputField.value;
  outputField.value = temp;

  // Konversi ulang dengan nilai yang udah ditukar
  convert();
}

// untuk menampilkan ikon cuaca berdasarkan suhu Celsius
function tampilkanIconCuaca(celsius) {
  const icon = document.getElementById("iconCuaca");

  if (isNaN(celsius)) {
    icon.textContent = "⛅";
    return;
  }

  //  suhu dan ikon 
  if (celsius < 0) {
    icon.textContent = "❄️";  // sangat dingin
  } else if (celsius <= 10) {
    icon.textContent = "🧊";  // dingin
  } else if (celsius <= 17) {
    icon.textContent = "🌫️"; // sejuk
  } else if (celsius <= 26) {
    icon.textContent = "⛅";  // normal
  } else if (celsius <= 32) {
    icon.textContent = "🌤️"; // hangat
  } else if (celsius <= 38) {
    icon.textContent = "🔥";  // panas
  } else {
    icon.textContent = "🌞";  // sangat panas
  }
}

// Jalankan event saat halaman siap
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("convertBtn").addEventListener("click", convert);
  document.getElementById("resetBtn").addEventListener("click", resetFields);
  document.getElementById("reverseBtn").addEventListener("click", reverse);
});
