// Lógica principal da aplicação
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
 * Gera uma quantidade de números aleatórios sem repetição.
 *
 * @param {number} quantidade Quantidade de números desejada.
 * @param {number} minimo Menor número permitido.
 * @param {number} maximo Maior número permitido.
 * @returns {number[]}
 */
function gerarNumerosUnicos(quantidade, minimo, maximo) {
  const numeros = new Set();

  while (numeros.size < quantidade) {
    const numeroSorteado = gerarNumeroAleatorio(minimo, maximo);
    numeros.add(numeroSorteado);
  }

  return Array.from(numeros);
}