// Procura o formulário. Nas outras páginas, este código não executa.
const formulario = document.getElementById("form-contato");

if (formulario) {
  const nome = formulario.elements.namedItem("nome");
  const email = formulario.elements.namedItem("email");
  const mensagem = formulario.elements.namedItem("mensagem");
  const retorno = document.getElementById("retorno-contato");

  // Mostra o erro e seleciona o campo que precisa ser corrigido.
  function mostrarErro(texto, campo) {
    retorno.textContent = texto;
    retorno.className = "retorno-contato erro";
    campo.focus();
  }

  formulario.addEventListener("submit", function (evento) {
    // Impede o envio real e o recarregamento da página.
    evento.preventDefault();

    // Verifica se o nome foi preenchido.
    if (nome.value.trim() === "") {
      mostrarErro("Por favor, preencha seu nome.", nome);
      return;
    }

    // Verifica se o e-mail foi preenchido.
    email.value = email.value.trim();

    if (email.value === "") {
      mostrarErro("Por favor, preencha seu e-mail.", email);
      return;
    }

    // Verifica o formato do e-mail.
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.validity.valid || !formatoEmail.test(email.value)) {
      mostrarErro("Digite um e-mail válido, como nome@exemplo.com.", email);
      return;
    }

    // Verifica se a mensagem foi preenchida.
    if (mensagem.value.trim() === "") {
      mostrarErro("Por favor, escreva sua mensagem.", mensagem);
      return;
    }

    // Simula o envio e limpa os campos.
    formulario.reset();

    retorno.className = "retorno-contato sucesso";
    retorno.textContent =
      "Simulação concluída com sucesso! Nenhum e-mail foi enviado de verdade.";
  });
}