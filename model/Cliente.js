export default class Cliente {
  #visitasIndividuais = 0;
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
}
