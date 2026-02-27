// Captura os elementos do formulário
const btnSubscribe = document.getElementById('btnSubscribe');
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const audio = document.getElementById('music');
const tape = document.getElementById('tape-player');

// Função para atualizar o estado visual da fita
function updateTapeVisuals() {
  if (audio.paused) {
    tape.classList.remove('playing');
  } else {
    tape.classList.add('playing');
  }
}

window.switchTheme = function() {
  const body = document.body;
  
  // 1. Alternar a classe no body
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');

  const isDark = body.classList.contains('dark-theme');
  
  // 2. Trocar a fonte da música sem interromper se já estiver tocando
  const wasPlaying = !audio.paused;
  audio.src = isDark 
    ? 'assets/musics/inverted-world.mpeg' 
    : 'assets/musics/normal-world.mpeg';
  
  // 3. Atualizar acessibilidade
  body.setAttribute('aria-label', isDark 
    ? 'O site está utilizando o tema dark (Mundo Invertido)' 
    : 'O site está utilizando o tema light');

  // 4. Se a música estava tocando antes da troca, continua tocando a nova
  if (wasPlaying) {
    audio.play();
    updateTapeVisuals();
  }
}

// Ouvinte único para a fita cassete
tape.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updateTapeVisuals();
});

btnSubscribe.addEventListener('click', () => {
    // Criamos um objeto com os dados da inscrição
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    };

    // Validação simples: verifica se o nome foi preenchido
    if (subscription.name && subscription.email) {
        // Feedback temático para o usuário
        alert(`Prepare seu D20, ${subscription.name}! Sua inscrição para jogar com o personagem "${subscription.character}" foi enviada para o Hellfire Club.`);
        
        // Limpa o formulário após o envio
        txtName.value = '';
        txtEmail.value = '';
        txtLevel.value = '';
        txtCharacter.value = '';
        
        console.log("Inscrição salva com sucesso:", subscription);
    } else {
        alert("Por favor, preencha pelo menos seu nome e e-mail para entrar no clube!");
    }
});