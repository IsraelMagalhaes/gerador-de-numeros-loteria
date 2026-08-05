# Gerador de Números para Loteria

Aplicação web desenvolvida para gerar números aleatórios de diferentes modalidades de loteria. O sistema funciona diretamente no navegador, sem backend, banco de dados ou instalação de dependências.

## Objetivo

O projeto tem como objetivo exercitar o desenvolvimento colaborativo utilizando Git e GitHub, com organização por branches, commits padronizados, Pull Requests, versionamento semântico e Releases.

## Funcionalidades

- Seleção da modalidade da loteria;
- Geração de números aleatórios;
- Geração sem números repetidos;
- Organização dos números em ordem crescente;
- Funcionamento diretamente pelo arquivo `index.html`;
- Registro dos testes realizados.

## Modalidades disponíveis

- Mega-Sena: 6 números entre 1 e 60;
- Quina: 5 números entre 1 e 80;
- Lotofácil: 15 números entre 1 e 25.

## Tecnologias utilizadas

- HTML;
- CSS;
- JavaScript;
- Git;
- GitHub;
- GitHub Codespaces.

## Como executar

1. Clique no botão **Code** na página do repositório.
2. Selecione **Download ZIP**.
3. Extraia os arquivos em uma pasta.
4. Abra o arquivo `index.html` em um navegador.
5. Escolha uma modalidade.
6. Clique no botão para gerar os números.

Nenhuma instalação adicional é necessária.

## Organização do desenvolvimento

O projeto utiliza as seguintes branches:

- `develop`: utilizada para o desenvolvimento colaborativo;
- `main`: utilizada somente para as versões oficialmente lançadas.

As alterações são desenvolvidas na branch `develop` e enviadas para a `main` por meio de Pull Requests com **Squash and merge**.

As mensagens dos commits seguem os padrões **Conventional Commits** e **Gitmoji**.

## Integrantes

- Israel Magalhães — GitHub: `@IsraelMagalhaes`;
- Giovanni — GitHub: `Giovansz`;
- Elenilson — GitHub: `dosSant05`.

## Versões planejadas

### Versão 1.0.0

Primeira versão funcional, com foco na geração correta dos números e interface simples.

### Versão 1.1.0

Versão com melhorias visuais, responsividade, organização dos elementos e melhor experiência de uso.

## Estrutura do projeto

```text
gerador-de-numeros-loteria/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── games.js
└── docs/
    ├── testes.md
    └── imagens/