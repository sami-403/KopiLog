import { dataAtualFormatada } from "./Data.js";

export function calcularDesconto(clienteAtual, percentual=false) {
  const descontoFidelidade = 0.05;
  const descontoAniversario = 0.1;
  let descontoTotal = 0;

  if (clienteAtual.nascimento === dataAtualFormatada()) {
    descontoTotal += descontoAniversario;
  };

  if (clienteAtual.qntVisitou >= 5) {
    descontoTotal += descontoFidelidade;
  }

  if (percentual) {
    return formatarPercentual(descontoTotal);
  }

  return descontoTotal;
}

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

// Função para formatar o desconto como percentual
export function formatarPercentual(valor) {
  return Math.round(valor * 100);
}
