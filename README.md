## TypeScript e Arquitetura Limpa

### Descrição 

- Projeto desenvolvido intuito de estudar typescript e [arquitetura limpa](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

- Está sendo utilizado o docker para desenvolvimento e build para produção, porém é possível rodar a aplicação utilizando o npm. 
  
- Para testes unitários está sendo utilizado o jest, e o eslint com a configuração do [google](https://github.com/google/eslint-config-google)
  

### Arquitetura

Como foi descrito anteriormente sua arquitetura foi baseada utilizando os conceitos da Arquitetura Limpa. Abaixo descrevo a estrutura da aplicação. 

- entity: Está contido todas as regras cruciais de negócios ou seja ela contém os dados cruciais de negócios. Porém suas classes tem que ser "pura", não posso adicionar nenhuma dependência externa. Como dito pelo próprio Uncle Bob "A entidade é puro negócio e nada mais". 
  
- useCases: Está contido todos os casos de uso utilizado na aplicação, ou seja o caso de uso é uma descrição da maneira como um sistema automatizado é usado. 
  
  Por exemplo, vamos pensar em um cadastro de usuário que contém os seguintes campos: nome, e-mail, telefone e descrição. O campo descrição deve conter pelo menos 300 caracteres. Portanto esse caso de uso estaria representado dessa maneira:


  - 1- Validar se os campos nome, e-mail, telefone e descrição não estão vazios.

  - 2- Validar se o campo descrição contém 300 caracteres

  - 3- Se contém mais de 300 caracteres, deve salvar o usuário no banco de dados.

  - 4- Porém se conter menos que 300 caracteres, deverá exibir uma mensagem para o usuário. 

  Portanto os casos de uso contêm as regras que especificam como e quando as regras de negócio que estão localizadas dentro das entities serão invocadas. 

- adapters: adaptadores(adapters), apresentadores(Presenters), controladores(controllers) pertencem a esta camada. 
  
  Dentro da pasta gateway ficam as interfaces quem contém os métodos de salvar, criar, editar e visualizar. Nós podemos implementá-la dentro da camada de banco de dados(external), e usar seus métodos nos casos de uso. 
  
-  external: Essa camada é composta por frameworks, ORM'S, bibliotecas externas, etc.
  
- shared: Estão as classes que são usadas por toda a aplicação.
  
- main: É o ponto de entrada inicial da aplicação. Dentro está implementado todos os adaptadores de rotas(RouterAdapter). Optei por criar esses adaptadores, porque estou incluindo a biblioteca express como dependência.


### Como executar 

Existem duas maneiras de executar a aplicação, mas antes siga os passos abaixo para criar a autenticação. 

1- Criando autenticação com OAuth2

- 1- Gere as credencias para que seja possível a aplicação se comunicar com o google sheets. Veja como fazer seguindo o tutorial dos links abaixo:
  
  Passo 1: [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/create-credentials#configure_the_oauth_consent_screen)

  Passo 2: [Create a OAuth client ID credential](https://developers.google.com/workspace/guides/create-credentials#create_a_oauth_client_id_credential)

  Passo 3: [Create Chrome application credentials](https://developers.google.com/workspace/guides/create-credentials#chrome)
  
- 2- Após baixar suas credenciais adicione o arquivo na raiz do projeto, e renomeie para `credentials.json`
  
- 3- Em seguida execute [esse código](https://developers.google.com/sheets/api/quickstart/nodejs), após executar o código siga o passo a passo que será solicitado. 

- 4- Se tudo ocorrer bem, na raíz do projeto deverá ter um arquivo chamado `token.json` copie suas credenciais e adicione dentro do seu arquivo `.env`(dentro da raíz do projeto existe um arquivo chamado `.env.example`, que serve como auxílio, para o usuário saber quais informações deverá conter dentro do `.env`).


#### Executando com docker

- 1- execute o seguinte comando, para criação da imagem: `docker build -f ./docker/build/Dockerfile -t SUBSTITUA_AQUI/dialogflow-sheets:1.0 .`

- 2- execute esse comando para subir o servidor `docker-compose up`. 
  Obs: Não se esqueça de copiar o nome da imagem feito no comando acima, para dentro do seu docker-compose.yml


#### Executando com npm

- 1- Instale todas as dependências do projeto `npm install`

- 2- Para subir o servidor use: `npm run dev`

#### Testes unitários

-  `npm test` ou `npm run test`

### Referências: 

Livro Arquitetura limpa, escrito por Robert C. Martin
  - entity e regras de negócio: 
    - Capítulo 20, página 190
  - casos de uso: 
    - Capítulo 16, página 147
    - Capítulo 20, página 191
  - adapters: 
    - Capítulo 22, página 205
    - Capítulo 23, página 213
  - external(Frameworks e Drivers)
    - Capítulo 22, página 205
  - main
    - Capítulo 26, página 231
  
Projeto que utiliza arquitetura limpa, que usei para me auxiliar durante o desenvolvimento:

  - [thewisedev-mailing](https://github.com/otaviolemos/thewisedev-mailing)