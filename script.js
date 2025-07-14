// === Texto rotativo del título ===
const frases = [
  "Generador de Contraseñas",
  "🔒 Seguridad en un clic",
  "🛡️ Protege tus cuentas",
  "✨ Passwords únicas"
];

let index = 0;
const rotatingText = document.getElementById("rotating-text");

rotatingText.textContent = frases[index];
rotatingText.classList.add("fade-in");

setInterval(() => {
  rotatingText.classList.remove("fade-in");
  rotatingText.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % frases.length;
    rotatingText.textContent = frases[index];
    rotatingText.classList.remove("fade-out");
    rotatingText.classList.add("fade-in");
  }, 500);
}, 3500);

// === Tips de seguridad y generador de contraseñas ===
const tips = [
  "Activa la verificación en dos pasos.",
  "No uses la misma contraseña en varios sitios.",
  "Evita fechas de nacimiento o nombres propios.",
  "Usa un gestor de contraseñas.",
  "Cambia tus contraseñas con regularidad.",
  "No compartas contraseñas por mensajes.",
  "Evita guardar contraseñas en navegadores.",
  "Utiliza mayúsculas, minúsculas, símbolos y números.",
  "No uses palabras reales como 'contraseña'.",
  "Actualiza tus contraseñas tras una filtración."
];

function generar() {
  const length = parseInt(document.getElementById("length").value);
  const tag = document.getElementById("tag").value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|:;<>,.?/";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const tip = tips[Math.floor(Math.random() * tips.length)];

  document.getElementById("password").textContent = `🔑 ${tag ? tag + ": " : ""}${password}`;
  document.getElementById("tip").textContent = `💡 Tip: ${tip}`;
}

