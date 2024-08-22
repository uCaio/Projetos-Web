let evtCadastro = () => {
    let btn = document.querySelector('#cadastrar');
    let livro = null;
    btn.addEventListener('click', (e) => {
        let inpNome = document.querySelector('#nome');
        let inpAutor = document.querySelector('#autor');
        let inpAno = document.querySelector('#anoLancamento');
        let nome = inpNome.value;
        let autor = inpAutor.value;
        let anoLancamento = inpAno.value;
        livro = new Livro(nome, autor, anoLancamento);
        inserirLivro(livro)
    })
}