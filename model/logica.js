import Cliente from "../model/Cliente.js";

// gerador de Id para ser a chave dos clientes.
export function gerarId() {
  return Math.random().toString(36).slice(2, 9);
}

// O banco em memoria para registrar os clientes.
export const clientesCache = new Map();

//Cria um id para o cliente e adiciona ele no map e depois retorna o objeto
export function criarCliente({ nome, nascimento }) {
  const id = gerarId();
  const novoCliente = new Cliente({ nome, nascimento });
  clientesCache.set(id, novoCliente);
  return { id: id, cliente: novoCliente };
}

export function buscarCliente(id) {
  return clientesCache.get(id) ?? null;
}

//retorna os clientes em um array para depois percorrer na main
export function pegarClientes() {
  return Array.from(clientesCache.entries()).map(([id, cliente]) => ({
    id,
    cliente,
  }));
}

export function registrarCompra(id, item, valor) {
  const cliente = clientesCache.get(id);
  if (!cliente) {
    return null;
  }

  cliente.registrarVisita();
  cliente.registrarCompra(item, valor);
  return cliente;
}

export function removerCliente(id) {
  return clientesCache.delete(id);
}
