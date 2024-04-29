const botaoMostrar = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projetos .projeto:not(ativos)');

botaoMostrar.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativos');
    });
};

function esconderBotao() {
    botaoMostrar.classList.add('remover');
};