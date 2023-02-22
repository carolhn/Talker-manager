## Projeto Talker Manager!

## Contexto do projeto:
  Foi construido uma aplicação de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações.
- Desenvolver uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
- Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

## Instalação Local:
Para rodar a aplicação em sua maquina.

1. Clone o repositorio. Use o comando:</br>
  <code>git clone git@github.com:carolhn/Talker-manager.git</code></br>
  
2. Entre na pasta do repositório que você acabou de clonar:</br>
<code>cd Talker-manager</code>

3. Instale as dependências</br>
<code>npm install</code>

4. Comando para executar o app</br>
<code>npm start</code>

## Instalação com Docker:
 
1. Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

2. Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

3. Instale as dependências [**Caso existam**] com `npm install`

4. Execute a aplicação com `npm start` ou `npm run dev`

  
