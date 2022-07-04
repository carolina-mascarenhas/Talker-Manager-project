# Boas-vindas ao repositório do projeto Talker Manager!

Nesse projeto desenvolvi uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes, em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações.

# Orientações

<details>
  <summary><strong>:whale: Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`

  ---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.
</details>

<summary><strong>Instruções</strong></summary><br />

1. Clone o repositório

- `git clone git@github.com:carolina-mascarenhas/Talker-Manager-project.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd Talker-Manager-project.git`

2. Verifique que você está na branch `main`
  - Exemplo: `git branch`

<details>
  <summary><strong>🔁 Live reload</strong></summary><br />

  Usaremos o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

  Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

  Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.
</details>