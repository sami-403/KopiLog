// Modulo responsavel por formatar datas.

// Formata data recebida no front
export function dataInputFormatada(dataDoInput) {
  if (dataDoInput) {
    const [ano, mes, dia] = dataDoInput.split("-");

    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = String(mes).padStart(2, "0");
    const dataFormatada = `${diaFormatado}/${mesFormatado}`;
    return dataFormatada;
  }
  return null;
}

// Formata a data atual para comparações
export function dataAtualFormatada() {
  const hoje = new Date();

  // famoso colocar um 0 a esquerda;
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");

  return `${dia}/${mes}`;
}
