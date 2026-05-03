import Cliente from "./Cliente.js";
import { dataInputFormatada } from "../utils/Data.js";

class ClienteModel {
  constructor() {
    if (ClienteModel.instance) {
      return ClienteModel.instance;
    }
    this.clientesCache = new Map();
    ClienteModel.instance = this;
  }

  gerarId() {
    return Math.random().toString(36).slice(2, 9);
  }

  criarCliente({ nome, nascimento }) {
    const id = this.gerarId();
    nascimento = dataInputFormatada(nascimento);
    const novoCliente = new Cliente({ nome, nascimento });
    this.clientesCache.set(id, novoCliente);
    return { id: id, cliente: novoCliente };
  }

  buscarCliente(id) {
    return this.clientesCache.get(id) ?? null;
  }

  pegarClientes() {
    return Array.from(this.clientesCache.entries()).map(([id, cliente]) => ({
      id,
      cliente,
    }));
  }

  registrarCompra(id, item, valor) {
    const cliente = this.clientesCache.get(id);
    if (!cliente) {
      return null;
    }

    cliente.registrarVisita();
    cliente.registrarCompra(item, valor);
    return cliente;
  }

  removerCliente(id) {
    return this.clientesCache.delete(id);
  }
}

// Exporta uma instância única (Singleton)
export default new ClienteModel();
