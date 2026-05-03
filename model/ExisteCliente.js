import { clientesCache } from "./logica.js";

// procura um cliente se tiver é true caso não false
export function isExiste(nome) {
  return Array.from(clientesCache.values()).some(
    (cliente) => cliente.nome === nome,
  );
}

// acha o id pelo nome
export function buscarIdPorNome(nomePesquisado) {
  for (let [id, cliente] of clientesCache.entries()) {
    if (cliente.nome === nomePesquisado) {
      return id;
    }
  }
  return null;
}
