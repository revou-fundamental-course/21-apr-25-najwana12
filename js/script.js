// Penanda mode konversi: true = dari Celsius ke Fahrenheit
let isCelsiusToFahrenheit = true;

// Fungsi utama konversi suhu
function convert() {
  const input = document.getElementById("inputSuhu");
  const output = document.getElementById("outputSuhu");
  const formulaBox = document.getElementById("formula");
  const icon = document.getElementById("iconCuaca");
  const warning = document.getElementById("peringatan");

  // Ambil input dan ganti koma ke titik
  const raw = input.value.trim().replace(",", ".");
  console.log("Raw input:", raw);
  
  // Cek input kosong
  if (raw === "") {
    warning.textContent = "⚠️ Harap masukkan nilai suhu!";
    output.value = "";
    formulaBox.value = "";
    icon.textContent = "⛅";
    return;
  }

  const value = parseFloat(raw);

  // Validasi angka
  if (isNaN(value)) {
    warning.textContent = "⚠️ Input tidak valid. Harap masukkan angka.";
    output.value = "";
    formulaBox.value = "";
    icon.textContent = "⛅";
    return;
  }

  warning.textContent = ""; // Hapus peringatan

  // Konversi suhu
  if (isCelsiusToFahrenheit) {
    const fahrenheit = (value * 9 / 5 + 32).toFixed(2);
    output.value = parseFloat(fahrenheit).toLocaleString("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    formulaBox.value = `${value}°C × 9/5 + 32= ${fahrenheit}°F`;
    tampilkanIconCuaca(value); // suhu awal dalam Celsius
  } else {
    const celsius = ((value - 32) * 5 / 9).toFixed(2);
    output.value = parseFloat(celsius).toLocaleString("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    formulaBox.value = `(${value}°F - 32) × 5/9= ${celsius}°C`;
    tampilkanIconCuaca(parseFloat(celsius)); // suhu hasil dalam Celsius
  }
}

// Fungsi untuk reset semua field
function resetFields() {
  document.getElementById("inputSuhu").value = "";
  document.getElementById("outputSuhu").value = "";
  document.getElementById("formula").value = "";
  document.getElementById("iconCuaca").textContent = "⛅";
  document.getElementById("peringatan").textContent = "";
  document.getElementById("inputSuhu").focus(); // UX: arahkan kembali ke input
}

// Fungsi untuk menukar arah konversi
function reverse() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

  const inputLabel = document.getElementById("inputLabel");
  const outputLabel = document.getElementById("outputLabel");
  const inputField = document.getElementById("inputSuhu");
  const outputField = document.getElementById("outputSuhu");

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

  // Tukar nilai input dan output
  const temp = inputField.value;
  inputField.value = outputField.value;
  outputField.value = temp;

  convert(); // langsung konversi ulang
}

// Tampilkan ikon cuaca berdasarkan suhu Celsius
function tampilkanIconCuaca(celsius) {
  const icon = document.getElementById("iconCuaca");

  if (isNaN(celsius)) {
    icon.textContent = "⛅";
    return;
  }

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

// Event listener saat halaman siap
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("convertBtn").addEventListener("click", convert);
  document.getElementById("resetBtn").addEventListener("click", resetFields);
  document.getElementById("reverseBtn").addEventListener("click", reverse);
});
