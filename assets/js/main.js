function analizarProblema() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");
    let respuesta = "Disculpa, no entendí bien. Mejor llámanos al 55 2410 1010 para atención inmediata.";

    // Lógica básica (aquí después conectaremos la IA de verdad)
    if (input.includes("moto")) {
        respuesta = "Para tu moto, te recomiendo nuestro servicio especializado de grúas para motos.";
    } else if (input.includes("llanta") || input.includes("gasolina")) {
        respuesta = "Necesitas nuestra Asistencia Vial.";
    } else if (input.includes("choque") || input.includes("falla")) {
        respuesta = "Lo ideal es una grúa de plataforma para mayor seguridad.";
    }

    chatBox.innerHTML += `<p><strong>Tú:</strong> ${input}</p>`;
    chatBox.innerHTML += `<p><strong>Asistente:</strong> ${respuesta}</p>`;
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
