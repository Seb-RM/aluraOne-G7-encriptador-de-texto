// Función que maneja los mensajes de alerta
function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertText = document.getElementById("alertText");
  alertText.textContent = message;
  alertBox.style.display = "block";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
}

//Función que encripta el texto ingresado por el usuario
function encriptar() {
  const inputText = document.getElementById("inputText").value.trim();

  if (inputText === "") {
        showNoTextMessage();
        return;
    }
  if (!/^[a-z\s]+$/.test(inputText)) {
      showAlert("Por favor, ingresa solo letras minúsculas y sin acentos.");
      return;
  }

  const outputText = inputText
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

  document.getElementById("resultingText").innerHTML = outputText;
  showOutputText();
}

//Función que  desencripta el texto ingresado por el usuario
function desencriptar() {
  const inputText = document.getElementById("inputText").value.trim();
  if (inputText === "") {
    showNoTextMessage();
    return;
  }

  const outputText = inputText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  document.getElementById("resultingText").innerHTML = outputText;
  showOutputText();
}

// Muestra un mensaje de que no hay texto para encriptar
function showNoTextMessage() {
  document.getElementById("noTextMessage").style.display = "flex";
  document.getElementById("outputText").style.display = "none";
}

// Muestra el resultado del texto encriptado
function showOutputText() {
  document.getElementById("noTextMessage").style.display = "none";
  document.getElementById("outputText").style.display = "flex";
}

// Función que copia el texto del resultado al portapapeles
function copiarTexto() {
    const outputText = document.getElementById("resultingText").innerHTML;
    navigator.clipboard.writeText(outputText).then(() => {
        showAlert("Texto copiado al portapapeles.");
    });
}
