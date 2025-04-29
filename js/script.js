function convert() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
      alert("Masukkan angka suhu yang valid.");
      return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
  }
  
  function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").value = "";
  }
  
  function reverse() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
      alert("Masukkan angka suhu Fahrenheit yang valid.");
      return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("result").value = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
  }
  