function inserirLivro(obj) {
    let objLiteral = obj.toObject();
    let objString = JSON.stringify(objLiteral);
    sessionStorage.setItem(obj.nome, objString);
    let listaLivros = JSON.parse(sessionStorage.getItem('livros') || '[]');
    if (!listaLivros.includes(obj.nome)) {
        listaLivros.push(obj.nome);
        sessionStorage.setItem('livros', JSON.stringify(listaLivros));
    }
}

function getLivro (chave) {
    let objString = sessionStorage.getItem(chave);
    if (objString) {
        let objLiteral = JSON.parse(objString);
        let obj = new Livro(objLiteral.nome, objLiteral.autor, objLiteral.anoLancamento, objLiteral.disponivel);
        return obj
    } else {
        alert('Livro não encontrado no Session Storage');
        return false
    }
}

let deletarLivro = (nome) => {
    let livros = JSON.parse(sessionStorage.getItem('livros') || '[]');
    livros = livros.filter(livroNome => livroNome !== nome);
    sessionStorage.setItem('livros', JSON.stringify(livros));
    sessionStorage.removeItem(nome);
    adicionaAbas(2);
};

function lerLivros() {
    try {
        let listaLivrosNomes = JSON.parse(sessionStorage.getItem('livros') || '[]');
        let listaLivros = [];
        for (let nome of listaLivrosNomes) {
            let livro = getLivro(nome)
            if (livro) {
                let obj = new Livro(livro.nome, livro.autor, livro.anoLancamento, livro.disponivel);
                listaLivros.push(obj);
            }
        }
        return listaLivros;
    } catch (err) {
        console.log(err);
        return [];
    }
}

function updateEstadoLivro (chave) {
    let obj = getLivro(chave)
    if (obj) {
        obj.mudarDisponivel();
        let objLiteral = obj.toObject();
        let objString = JSON.stringify(objLiteral)
        sessionStorage.setItem(obj.nome, objString);
    } else {
        alert('Livro não encontrado no Session Storage');
    }
}

function updateEstadoLivro(nome) {
    let livro = getLivro(nome);
    if (livro) {
        livro.mudarDisponivel();
        inserirLivro(livro)
    } else {
        alert('Livro não encontrado no Session Storage');
    }
}