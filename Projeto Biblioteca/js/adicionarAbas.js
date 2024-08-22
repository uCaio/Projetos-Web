let adicionaAbas = (opt) => {
    let container = document.getElementById("container");

    if (opt == 1) {
        container.innerHTML = `
        <h1 class="header">Cadastro de Livros</h1>
        <div class="container-form">
            <form class="form">
                <div class="form-group">
                    <label for="nome">Nome do Livro:</label>
                    <input type="text" class="form-control" id="nome" aria-describedby="emailHelp" placeholder="Digite o nome do livro">
                    <small id="emailHelp" class="form-text text-muted">O melhor portal de livros existente.</small>
                </div>
                <div class="form-group">
                    <label for="autor">Autor do Livro:</label>
                    <input type="text" class="form-control" id="autor" placeholder="Digite o nome do autor do livro:">
                </div>
                <div class="form-group">
                    <label for="anoLancamento">Ano de Publicação do Livro:</label>
                    <input type="text" class="form-control" id="anoLancamento" placeholder="Digite o ano da publicação do livro:">
                </div>
                
                <button type="button" class="btn btn-primary" id="cadastrar">Cadastrar</button>
            </form>
        </div>
        `;
        evtCadastro()
    }

    if (opt == 2) {
        let string = `<h2 class="title">Lista de Livros Cadastrados</h2>`;

        try {
            let livros = lerLivros();

            console.log(livros);

            livros.forEach((livro) => {
                string += `
                <p>
                    <b>${livro.nome}</b> - ${livro.autor} - ${livro.anoLancamento} - ${livro.verificarDisponivel()}
                    <button class="btn btn-secondary btn-Atualiza" data-nome="${livro.nome}">Alugar/Devolver</button>
                    <button class="btn btn-secondary btn-Deleta" data-nome="${livro.nome}">Deletar Livro</button>
                </p>
                `;
            });
        } catch (err) {
            console.log(err);
        }

        container.innerHTML = string;
        evtAtualiza()
        evtDeletar();
    }
};