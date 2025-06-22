// Banco de respostas da Lua para cada identidade
const luaResponses = {
  excel: {
    message:
      "Ah, o mestre das planilhas! ✨ Lembre-se: até o Excel tem a função 'Desfazer'. Que tal usar isso na vida hoje? Vamos transformar células em células criativas!",
    avatar: "📊",
  },
  artist: {
    message:
      "Artista bloqueado? Tudo bem! 🎨 Até o universo teve seu tempo de escuridão antes de criar as estrelas. Que tal rabiscar um monstro cósmico no meio da reunião?",
    avatar: "🖌️",
  },
  philosopher: {
    message:
      "Filósofo de busão, hein? 🚌 A jornada é longa, mas as melhores ideias surgem quando perdemos o ponto. Qual sua pergunta existencial para essa viagem?",
    avatar: "🧠",
  },
};

// Elementos DOM
const identityScreen = document.getElementById("identity-screen");
const messageScreen = document.getElementById("message-screen");
const luaMessage = document.getElementById("lua-message");
const activeLuaAvatar = document.getElementById("active-lua-avatar");
const continueBtn = document.getElementById("continue-btn");
const identityButtons = document.querySelectorAll(".identity-btn");

// Ouvintes de evento para os botões de identidade
identityButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const identity = this.dataset.identity;
    showLuaMessage(identity);
  });
});

// Ouvinte para o botão Continuar
continueBtn.addEventListener("click", function () {
  // Aqui você redirecionaria para a próxima tela
  alert("Próxima etapa: Dashboard do ExistentialOS!");
  // window.location.href = "dashboard.html";
});

// Mostrar mensagem da Lua
function showLuaMessage(identity) {
  const response = luaResponses[identity];

  // Atualizar elementos
  luaMessage.textContent = response.message;
  activeLuaAvatar.textContent = response.avatar;

  // Alternar telas
  identityScreen.classList.remove("active");
  messageScreen.classList.add("active");

  // Animação especial
  animateLuaAvatar();
}

// Animação da Lua
function animateLuaAvatar() {
  activeLuaAvatar.style.animation = "none";
  setTimeout(() => {
    activeLuaAvatar.style.animation = "float 4s ease-in-out infinite";
  }, 10);
}
