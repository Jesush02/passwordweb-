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
const security_tips = [
  "🔐 Activa la verificación en dos pasos siempre que puedas.",
  "🔒 Usa contraseñas distintas para cada cuenta.",
  "⚠️ Nunca hagas clic en enlaces sospechosos.",
  "🛡️ Mantén tu sistema y apps actualizadas.",
  "📵 Evita usar Wi-Fi públicas sin una VPN.",
  "📁 No abras archivos adjuntos inesperados.",
  "🔑 Usa un administrador de contraseñas seguro.",
  "🖥️ Bloquea tu pantalla si dejas tu PC sin supervisión.",
  "🚫 No uses tu nombre o cumpleaños como contraseña.",
  "📲 Revisa y revoca permisos innecesarios de tus apps.",
  "🔧 Cambia las contraseñas por defecto de tus dispositivos.",
  "🕵️‍♂️ No muestres tus llaves en fotos o redes sociales.",
  "🎥 Instala sensores o cámaras si puedes.",
  "📦 Ten una copia física de tus documentos importantes.",
  "🌍 No publiques tu ubicación en tiempo real.",
  "📞 Agrega un contacto de emergencia en tu teléfono.",
  "📌 No pegues tus contraseñas en papel a la vista.",
  "🚪 Cierra sesión al usar computadoras públicas.",
  "🔐 Asegúrate de que las puertas realmente cierren con seguro.",
  "📲 Verifica llamadas de bancos antes de dar información."
];

function generar() {
  const length = parseInt(document.getElementById("length").value);
  const tag = document.getElementById("tag").value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|:;<>,.?/";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const tip = security_tips[Math.floor(Math.random() * security_tips.length)];

  const passwordEl = document.getElementById("password");
  const tipEl = document.getElementById("tip");

  passwordEl.textContent = `🔑 ${tag ? tag + ": " : ""}${password}`;
  // Animación suave
  passwordEl.classList.remove("fade");
  tipEl.classList.remove("fade");
  void passwordEl.offsetWidth;
  void tipEl.offsetWidth;
  passwordEl.classList.add("fade");
  tipEl.classList.add("fade");

  // Copiar al hacer clic
  passwordEl.style.cursor = "pointer";
  passwordEl.title = "Haz clic para copiar";

  passwordEl.onclick = () => {
    navigator.clipboard.writeText(password).then(() => {
      passwordEl.textContent = "📋 ¡Contraseña copiada!";
      setTimeout(() => {
        passwordEl.textContent = `🔑 ${tag ? tag + ": " : ""}${password}`;
      }, 1500);
    });
  };
}
