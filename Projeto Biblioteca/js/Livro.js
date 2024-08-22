class Livro {
    #nome;
    #autor;
    #anoLancamento;
    #disponivel;

    constructor(nome, autor, anoLancamento, disponivel = true) {
        this.#nome = nome;
        this.#autor = autor;
        this.#anoLancamento = anoLancamento;
        this.#disponivel = disponivel;
    }

    get nome() {
        return this.#nome;
    }

    get autor() {
        return this.#autor;
    }

    get anoLancamento() {
        return this.#anoLancamento;
    }

    get disponivel() {
        return this.#disponivel;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set autor(novoAutor) {
        this.#autor = novoAutor;
    }

    set anoLancamento(novoAno) {
        this.#anoLancamento = novoAno;
    }

    set disponivel(status) {
        this.#disponivel = status;
    }

    mudarDisponivel() {
        this.#disponivel = !this.#disponivel;
    }

    toObject() {
        return {
            nome: this.#nome,
            autor: this.#autor,
            anoLancamento: this.#anoLancamento,
            disponivel: this.#disponivel
        };
    }

    verificarDisponivel(){
        if (this.#disponivel) {return "Disponivel"}
        else {return "Indisponivel"}
    }
}
