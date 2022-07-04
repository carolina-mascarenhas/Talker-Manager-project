# Boas-vindas ao repositório do projeto Talker Manager!

<details>

  Você irá construir uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso você deverá:
  1. Desenvolver uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
  2. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

</details>

# Orientações

<details>
  <summary><strong>:whale: Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.

</details>

<details>

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-018-a-project-talker-manager.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-018-a-project-talker-manager`

  2. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-018-a-project-talker-manager`

</details>

<details>
  <summary><strong>🔁 Live reload</strong></summary><br />

  Usaremos o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

  Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

  Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.
</details>