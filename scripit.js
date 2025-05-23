document.getElementById("registroForm").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = new FormData(this);
    fetch("TU_WEB_APP_URL", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Formulario enviado correctamente");
        this.reset();
    })
    .catch(error => console.error("Error:", error));
});
