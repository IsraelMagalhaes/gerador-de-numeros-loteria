/**
 * Retorna um número inteiro aleatório dentro do intervalo informado.
 *
 * @param {number} minimo Primeiro número possível.
 * @param {number} maximo Último número possível.
 * @returns {number}
 */
function gerarNumeroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

/**
 * Gera números aleatórios sem repetição e em ordem crescente.
 *
 * @param {number} quantidade Quantidade de números desejada.
 * @param {number} minimo Menor número permitido.
 * @param {number} maximo Maior número permitido.
 * @returns {number[]}
 */
function gerarNumerosUnicos(quantidade, minimo, maximo) {
  const totalDisponivel = maximo - minimo + 1;

  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    throw new Error("A quantidade deve ser um número inteiro maior que zero.");
  }

  if (!Number.isInteger(minimo) || !Number.isInteger(maximo)) {
    throw new Error("Os limites devem ser números inteiros.");
  }

  if (minimo > maximo) {
    throw new Error("O número mínimo não pode ser maior que o máximo.");
  }

  if (quantidade > totalDisponivel) {
    throw new Error(
      "A quantidade solicitada é maior que o total de números disponíveis."
    );
  }

  const numeros = new Set();

  while (numeros.size < quantidade) {
    numeros.add(gerarNumeroAleatorio(minimo, maximo));
  }

  return Array.from(numeros).sort((numeroA, numeroB) => numeroA - numeroB);
}

/**
 * Gera um jogo de acordo com a modalidade informada.
 *
 * @param {string} modalidade Identificador da modalidade.
 * @returns {{ nome: string, numeros: number[] }}
 */
function gerarJogo(modalidade) {
  const configuracao = LOTERIAS[modalidade];

  if (!configuracao) {
    throw new Error("Modalidade de loteria inválida.");
  }

  const numeros = gerarNumerosUnicos(
    configuracao.quantidade,
    configuracao.numeroMinimo,
    configuracao.numeroMaximo
  );

  return {
    nome: configuracao.nome,
    numeros,
  };
}
