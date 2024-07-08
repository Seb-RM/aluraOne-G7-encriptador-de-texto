function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertText = document.getElementById("alertText");
    alertText.textContent = message;
    alertBox.style.display = "block";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 3000);
}

function encriptar() {
    let inputText = document.getElementById("inputText").value;
    console.log(inputText);
    if (!/^[a-z\s]+$/.test(inputText)) {
        showAlert("Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
    }
    // Reemplazos según las reglas proporcionadas
    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = outputText;
}

function desencriptar() {
    let inputText = document.getElementById("inputText").value;

    // Reemplazos inversos según las reglas proporcionadas
    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = outputText;
}

function copiarTexto() {
  // Obtiene el textarea del output
  let outputText = document.getElementById("outputText").value;
  
  // Usa la API del Portapapeles para copiar el texto
  navigator.clipboard.writeText(outputText).then(function () {
    // Muestra una alerta personalizada para indicar que el texto fue copiado
    showAlert("Texto copiado al portapapeles.");
  });
}