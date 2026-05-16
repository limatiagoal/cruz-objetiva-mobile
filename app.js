const LINK_APPS_SCRIPT = "chrome-extension://noogafoofpebimajpfpamcfhoaifemoa/suspended.html#ttl=script.google.com%2Fmacros%2Fs%2FAKfycbxD1AvwAMmBxOX3lTsTlY78MBtqsOMw6_xjmTemQHE%2Fdev&pos=0&uri=https://script.google.com/macros/s/AKfycbxD1AvwAMmBxOX3lTsTlY78MBtqsOMw6_xjmTemQHE/dev";

function ehCelular() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent)
    || window.innerWidth <= 768;
}

function alternarSenha() {
  const campo = document.getElementById("senha");
  const botao = document.querySelector(".btn-senha");

  if (campo.type === "password") {
    campo.type = "text";
    botao.innerText = "👁️";
  } else {
    campo.type = "password";
    botao.innerText = "🙈";
  }
}

function entrar() {
  const login = document.getElementById("login").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const msg = document.getElementById("mensagem");
  const btn = document.getElementById("btnEntrar");

  msg.innerText = "";

  if (!login || !senha) {
    msg.innerText = "Digite login e senha.";
    return;
  }

  btn.disabled = true;
  btn.innerText = "Verificando...";

  setTimeout(() => {
    if (ehCelular()) {
      mostrarMobileDev();
      return;
    }

    window.location.href = LINK_APPS_SCRIPT;
  }, 500);
}

function mostrarMobileDev() {
  document.getElementById("telaLogin").classList.remove("ativa");
  document.getElementById("telaMobileDev").classList.add("ativa");
}

function voltarLogin() {
  document.getElementById("telaMobileDev").classList.remove("ativa");
  document.getElementById("telaLogin").classList.add("ativa");

  const btn = document.getElementById("btnEntrar");
  btn.disabled = false;
  btn.innerText = "🛡️ Entrar";
}
