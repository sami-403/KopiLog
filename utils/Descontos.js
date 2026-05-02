import { dataAtualFormatada } from "./Data.js";

export function aplicarDesconto(valor, clienteAtual) {
  const descontoFidelidade = 0.05;
  const descontoAniversario = 0.1;
  let descontoTotal = 0;

  if (clienteAtual.nascimento === dataAtualFormatada()) {
    descontoTotal += descontoAniversario;
  }

  if (clienteAtual.qntVisitou >= 5) {
    descontoTotal += descontoFidelidade;
  }

  // Retorna o valor com o desconto aplicado
  return valor * (1 - descontoTotal);
}
