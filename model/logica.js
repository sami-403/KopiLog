// gerador de Id para ser a chave dos clientes.
export function gerarId() {
  return Math.random().toString(36).slice(2, 9);
}
// O banco em memoria para registrar os clientes.
export const clientesCache = new Map();
