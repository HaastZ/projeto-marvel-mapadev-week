/*
OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  = colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

  - retirar a classe selecionado do personagem que está selecionado


  OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande da esquerda

   - alterar imagem do personagem grande da esquerda
   -alterar o nome do personagem grande da esquerda
 */



const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        /*
           OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

            = colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

            - retirar a classe selecionado do personagem que está selecionado
        */
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')
        // OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande da esquerda

        // - alterar imagem do personagem grande da esquerda
        // -alterar o nome do personagem grande da esquerda

        const idSelecionado = personagem.attributes.id.value;
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1')
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    });
});






