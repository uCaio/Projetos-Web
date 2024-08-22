let evtAtualiza = () => {
    let btnsAtualiza = document.querySelectorAll('.btn-Atualiza');
    btnsAtualiza.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let nomeLivro = e.target.getAttribute('data-nome');
            updateEstadoLivro(nomeLivro);
            adicionaAbas(2);
        });
    });
}
