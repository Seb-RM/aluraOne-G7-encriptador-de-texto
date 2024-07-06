function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertText = document.getElementById("alertText");
    alertText.textContent = message;
    alertBox.style.display = "block";
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
    let outputText = document.getElementById("outputText");

  // Selecciona el texto dentro del textarea
outputText.select();
  outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto al portapapeles
    document.execCommand("copy");

  // Muestra una alerta personalizada para indicar que el texto fue copiado
    showAlert("Texto copiado al portapapeles.");
}