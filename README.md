# **elo-emailage-demo**

## O que é esse projeto?

## Este projeto servirá como um exemplo de como consumir e utilizar a API "Elo Emailage - Verificação de risco de e-mail".

## Ambiente / Tecnologias

O projeto foi criado utilizando [`React`](https://pt-br.reactjs.org/) juntamente com [TypeScript](https://www.typescriptlang.org/), uma linguagem que engloba as versões mais atuais do JavaScript/ES6+ e adiciona uma camada de tipagem que o JavaScript não possui por si só.

> **Atenção:** Esta demo foi criado com a ferramenta [Create React App](https://create-react-app.dev/) para ajudar na criação do projeto. Ela fornece uma base de código em `React` evitando _boilerplate code_. Portanto o código conta com algumas partes que foram geradas, packages instalados mas não utilizados, e algumas features dentro do projeto que podem não ser totalmente utilizadas.

## Como rodar o app

Requisitos:

- node.js 8 ou versão superior
- yarn (opcional, mas recomendado)

Após clonar o projeto, dentro da pasta do mesmo, execute:

```shell
yarn install
yarn start
```

---

## Processos de execução

Todas as configurações de chamadas para a API Elo podem ser encontradas no arquivo [`api.ts`](./src/configs/api.ts).

### **Configuração inicial**

Altere os campos de _client_id_, _secret_ e, se disponível, o id da sua aplicação Google disponível.

> Obs: caso não tiver um id na plataforma Google Cloud, siga os passos presentes na documentação de [login social](./src/docs/Social.md)

Realize login na página [login](./src/pages/Home/index.tsx) com seu usuário Elo ou Google, caso haja algum erro, a aplicação devolverá com a descrição do erro. Os dados do login, como o _access token_, serão salvos localmente no seu navegador para facilitar integrações.

### **Elo Emailage - Obtenha um score, avaliação de risco de um determinado e-mail.**

Após realizar login, selecione o tipo de consulta desejada e insira o e-mail que deseja realizar a verificação e, se desejar, demais informações complementares (opcionais).

> A documentação dessa API está disponível no Portal Elo, em [Elo Emailage - Verificação do risco de e-mai](https://hml-dev.elo.com.br/documentacao/avaliacao-de-risco-por-email?lng=pt)
