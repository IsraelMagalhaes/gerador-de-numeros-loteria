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

// Ligação dos elementos usando os IDs.
const btnGerar = document.getElementById('botao-gerar');
const selectModalidade = document.getElementById('modalidade');
const containerResultado = document.getElementById('resultado');

/**
 * Limpa o resultado anterior e exibe os novos números na página.
 * * @param {number[]} numeros Lista de números ordenados para exibir.
 */
function exibirResultadosNaTela(numeros) {
  // Limpa a mensagem padrão ("Os números gerados aparecerão aqui.") ou o resultado anterior
  containerResultado.innerHTML = ''; 

  // Cria e adiciona cada número de forma organizada
  numeros.forEach(numero => {
    const elementoNumero = document.createElement('span');
    // Formata o número para ter sempre 2 dígitos (ex: 03 em vez de 3)
    elementoNumero.textContent = String(numero).padStart(2, '0'); 
    elementoNumero.classList.add('numero-sorteado'); // Classe para usar no seu style.css
    
    containerResultado.appendChild(elementoNumero);
  });
}

// Conecta o clique do botão para gerar os números da modalidade escolhida
if (btnGerar && selectModalidade && containerResultado) {
  btnGerar.addEventListener('click', () => {
    const modalidadeSelecionada = selectModalidade.value;

    // Se o usuário não selecionar nenhuma modalidade, mostra um aviso
    if (!modalidadeSelecionada) {
      containerResultado.innerHTML = '<p style="color: red; font-weight: bold;">Por favor, selecione uma modalidade!</p>';
      return;
    }

    // Variáveis para guardar as regras do jogo selecionado
    let quantidade = 0;
    let minimo = 1;
    let maximo = 60;

    // Define as regras oficiais de cada jogo (Mega-Sena, Quina e Lotofácil)
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
      // Chama a função de geração de números únicos e ordenados
      const numerosSorteados = gerarNumerosUnicos(quantidade, minimo, maximo);
      
      // Exibe os números na tela
      exibirResultadosNaTela(numerosSorteados);
    } catch (error) {
      console.error("Erro na geração:", error);
      containerResultado.innerHTML = '<p style="color: red;">Ocorreu um erro ao gerar os números.</p>';
    }
  });
}