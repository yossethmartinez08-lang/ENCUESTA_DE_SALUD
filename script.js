const form = document.getElementById("formCP");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mensaje.textContent = "✅ Código Postal válido y enviado correctamente";
});
