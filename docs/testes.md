# Testes do gerador de loterias

## Objetivo

Verificar se o sistema gera números válidos, sem repetição e em ordem crescente.

## Mega-Sena

Critérios verificados:

- gera 6 números;
- utiliza valores entre 1 e 60;
- não repete números;
- apresenta os números em ordem crescente.

Resultado: aprovado.

## Quina

Critérios verificados:

- gera 5 números;
- utiliza valores entre 1 e 80;
- não repete números;
- apresenta os números em ordem crescente.

Resultado: aprovado.

## Lotofácil

Critérios verificados:

- gera 15 números;
- utiliza valores entre 1 e 25;
- não repete números;
- apresenta os números em ordem crescente.

Resultado: aprovado.

## Validações adicionais

- quantidade igual ou menor que zero gera erro;
- limites não inteiros geram erro;
- número mínimo maior que o máximo gera erro;
- quantidade maior que o intervalo disponível gera erro;
- modalidade inexistente gera erro.