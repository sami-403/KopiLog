export default class Cliente {
  #visitasIndividuais = 0;
  #historico = [];

  constructor({ nome, nascimento }) {
    this._nome = nome;
    this._nascimento = nascimento;
    this.#visitasIndividuais = 1;
  }

  registrarVisita() {
    this.#visitasIndividuais++;
  }

  get nome() {
    return this._nome;
  }

  get qntVisitou() {
    return this.#visitasIndividuais;
  }

  get nascimento() {
    return this._nascimento;
  }

  registrarCompra(item, valor) {
    this.#historico.push({
      item,
      valor,
      data: new Date().toLocaleDateString("pt-BR")
    });
  }

  get pedidoFavorito() {

    if (this.#historico.length === 0) {
      return null;
    }

    //uma contagem pra saber quantas vezes apareceu cada item
    const contagem = {};
    for (const compra of this.#historico) {
      contagem[compra.item] = (contagem[compra.item] || 0) + 1;
    }

    //Pega só nome da compra que mais apareceu
    return Object.entries(contagem).sort((a, b) => b[1] - a[1])[0][0];
  }

  get historico() { 
    return [...this.#historico]; 
  }

}
