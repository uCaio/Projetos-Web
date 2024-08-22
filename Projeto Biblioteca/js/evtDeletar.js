let evtDeletar = () => {
    let btnsDeletar = document.querySelectorAll('.btn-Deleta');
    btnsDeletar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let nomeLivro = e.target.getAttribute('data-nome');
            deletarLivro(nomeLivro);
        });
    });
};