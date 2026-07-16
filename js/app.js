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

// Captura dos elementos.
const btnGerar = document.getElementById('botao-gerar');
const selectModalidade = document.getElementById('modalidade');
const containerResultado = document.getElementById('resultado');

// Trata os eventos da página.
function exibirResultadosNaTela(numeros) {
  // Limpa o resultado anterior
  containerResultado.innerHTML = ''; 

  // Cria um elemento para cada número e exibe na página
  numeros.forEach(numero => {
    const elementoNumero = document.createElement('span');
    elementoNumero.textContent = String(numero).padStart(2, '0'); 
    elementoNumero.classList.add('numero-sorteado');
    containerResultado.appendChild(elementoNumero);
  });
}

if (btnGerar && selectModalidade && containerResultado) {
  btnGerar.addEventListener('click', () => {
    // 1. Capturar a modalidade selecionada 
    const modalidadeSelecionada = selectModalidade.value;
    
    if (!modalidadeSelecionada) {
      alert('Por favor, selecione uma modalidade de loteria!');
      return;
    }

    // Configura as regras de quantidade e intervalo numérico de cada jogo.
    let quantidade = 0;
    let minimo = 1;
    let maximo = 60;

    if (modalidadeSelecionada === 'mega-sena') {
      quantidade = 6;
      minimo = 1;
      maximo = 60;
    } else if (modalidadeSelecionada === 'quina') {
      quantidade = 5;
      minimo = 1;
      maximo = 80;
    } else if (modalidadeSelecionada === 'lotofacil') {
      quantidade = 15;
      minimo = 1;
      maximo = 25;
    }

    try {
      // 2. Executar a função de geração.
      const numerosSorteados = gerarNumerosUnicos(quantidade, minimo, maximo);
      
      // Mostra os números gerados diretamente na página
      exibirResultadosNaTela(numerosSorteados);
    } catch (error) {
      console.error("Erro na execução da geração:", error);
    }
  });
}