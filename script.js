// Frases aleatórias (bio)
const frases = [
  "Apaixonado por tecnologia e inovação.",
  "Cada código é uma nova jornada.",
  "Criatividade é meu combustível.",
  "Viciado em café e programação.",
  "Construindo ideias com linhas de código.",
  "Digital é meu mundo, neon é meu brilho.",
  "Vivo entre bits, bugs e beats!",
  "Online, mas vivendo offline 🌌",
  "Carregando ideias... 95% ⏳",
  "Vivendo um capítulo de cada vez.",
  "Seja luz, mesmo nos dias nublados.",
  "Transformando dias comuns em histórias épicas.",
  "Crescendo em silêncio, brilhando no caos.",
  "Não desista do que faz seu coração vibrar.",
  "Fui dormir cedo… só que não.",
  "Aceito pix e elogios.",
  "Sou 80% memes e 20% café.",
  "Social, mas só no Wi-Fi.",
  "Meu talento? Fazer nada parecer arte.",
];

document.querySelector(".bio").innerText =
  frases[Math.floor(Math.random() * frases.length)];

// Data e Hora atual
function atualizarDataHora() {
  const agora = new Date();
  const dataHora =
    "Hoje é " +
    agora.toLocaleDateString() +
    " - Agora são " +
    agora.toLocaleTimeString();
  document.getElementById("dataHora").innerText = dataHora;
}
setInterval(atualizarDataHora, 1000);
atualizarDataHora();

// Contador de visitas diárias (armazenado no localStorage)
function atualizarContador() {
  const hoje = new Date().toLocaleDateString();
  const ultimaData = localStorage.getItem("ultimaData");

  if (ultimaData !== hoje) {
    localStorage.setItem("ultimaData", hoje);
    localStorage.setItem("visitasHoje", "1");
  } else {
    let visitas = parseInt(localStorage.getItem("visitasHoje") || "0");
    visitas++;
    localStorage.setItem("visitasHoje", visitas.toString());
  }

  const visitasHoje = localStorage.getItem("visitasHoje");
  document.getElementById("visitas").innerText =
    "👁️ Visitas hoje: " + visitasHoje;
}
atualizarContador();
