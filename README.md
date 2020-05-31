![https://i.imgur.com/2uCy3e8.png](https://i.imgur.com/2uCy3e8.png)

### API do Tinder para estudantes do ITB

![GitHub](https://img.shields.io/github/license/Cauaspinheiro/tinder-itb-backend?style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Cauaspinheiro/tinder-itb-backend?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Cauaspinheiro/tinder-itb-backend?style=for-the-badge)

# Sobre o projeto

Baseada nos princípios REST, essa API fornece todos os recursos do backend do Tinder ITB, seja o cadastro do usuário, iniciar sessão, mostrar pretendentes, etc.

A API foi construída usando o framework [Express](https://github.com/expressjs/express)

O ITB é uma insituição de ensino público de ensino médio técnico situado no estado de São Paulo, Brasil. Ele conta com mais de 3.000 alunos, por isso, existe a dificuldade de encontrar uma pessoa ideal para conversar e ser amigo, com tanta gente por perto.

O projeto foi criado com a intenção de melhorar o conhecimento dos desenvolvedores, sem fins lucrativos ou comerciais.

# Guia de instalação

## GIT

- Instale o git em sua máquina: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Com o git instalado na sua máquina, execute o seguinte comando para criar um clone do repositório na sua maquina local:
  `git clone https://github.com/Cauaspinheiro/tinder-itb-backend.git`
  ***
- Abra a pasta do repositório em um editor de texto (recomendação: [Visual Studio Code](https://code.visualstudio.com/))
- Com a pasta aberta, crie um arquivo chamado .env (fora de qualquer pasta dentro do repositório)

  ![arquivo.env](https://i.imgur.com/Ou8eXGt.png)

  Esse arquivo vai nos possibilitar criar variaveis de ambiente para a API

  **Importante!** a forma que as variaveis do arquivo .env estão digitadas devem estar exatamente da forma que estão nesse guia de instalação.

## MongoDB

- Siga os seguintes passos para criar uma key de acesso ao seu Cluster do MongoDB
  <https://codeforgeek.com/mongodb-atlas-node-js/>
- Com a key criada, coloque o seguinte codigo no seu arquivo .env, trocando o que for pedido, sem as tags <>:
  `MONGO_KEY=<COLOQUE-SUA-KEY-AQUI>`

**Importante!** lembre-se de trocar o `<password>` na sua key do mongoDB pela sua senha

## JSON Web Token

- Entre no site <https://www.md5online.org/>
- Crie um hash para a sua API, podendo ser qualquer cojunto de letras
- Com o hash criado, coloque o seguinte codigo no seu arquivo .env, trocando o que for pedido, sem as tags <>:
  `JWT_SECRET=<COLOQUE-SEU-HASH-AQUI>`
  `JWT_EXPIRES=30d`

![Conteudo do arquivo .env](https://i.imgur.com/AM3z7UX.png)

## Firebase

- Crie um projeto no firebase: <https://firebase.google.com/?hl=pt-BR>
- Dentro do projeto, clique na engrenagem do lado de "Project overview" > configurações do projeto > Contas de serviço > SDK admin do firebase > node.js > gerar nova chave privada > gerar chave

  ![Firebase](https://i.imgur.com/9V8UIZP.png)

- Depois, crie um arquivo chamado serviceAccount.json na pasta do repositório

  ![Arquivo json](https://i.imgur.com/1fpYVkU.png)

- Cole todo o conteudo neste arquivo

- No arquivo .env, cria as seguintes variáveis pegando as informações que estão em serviceAccount.json:

  ![.env variaveis de serviço](https://i.imgur.com/LgLVUgN.png)

- Entre em "Storage" e copie o link do seu bucket, sem o "gs://"

  ![Storage Bucket Firebase](https://i.imgur.com/SCeTMWW.png)

- Nesse caso, ficaria apenas `tinder-itb.appspot.com`
- No seu arquivo .env, coloque o seguinte código, trocando o que for pedido, sem as tags <>:
  `FIREBASE_BUCKET=<SEU-STORAGE-BUCKET>`

## NodeJS

- Baixe a versão LTS do node em <https://nodejs.org/en/>
- Para testar se o node está instalado na sua maquina, rode o seguinte comando `node -v`. Deverá aparecer a versão do NodeJS

## Yarn (Opcional) (Recomendado)

- Baixe a versão mais nova do yarn em <https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable>
- Para testar se o yarn está instalado na sua maquina, rode o seguinte comando `yarn -v`. Deverá aparecer a versão do Yarn

## Instalação dos pacotes

- Dentro na pasta do projeto, rode o seguinte comando: - Se você estiver usando o yarn: `yarn`
- Se você estiver usando o npm: `npm install`

**Pronto!** você já pode começar a testar o aplicativo, vá para a aba Scripts para ver quais scripts estão disponiveis para uso

# Scripts

- Rodar a api com reload automático utilizando o [nodemon](https://github.com/remy/nodemon):

  - Se você estiver usando o yarn: `yarn dev`
  - Se você estiver usando o npm: `npm dev`

- Rodar a api sem reload automático:
  - Se você estiver usando o yarn: `yarn start`
  - Se você estiver usando o npm: `npm start`

# Formas de acesso a API

## Servidor oficial da API

![GitHub deployments](https://img.shields.io/github/deployments/cauaspinheiro/tinder-itb-backend/tinder-itb-backend?style=for-the-badge)

- Acesse a url [http://tinder-itb-backend.herokuapp.com](http://tinder-itb-backend.herokuapp.com/schools)

- Para entender os endpoints e as suas funcionalidades veja a **documentação da API**

## Aplicativo React Native

- Utilize o projeto [https://github.com/AdamAugustinsky/tinder_itb-mobile](https://github.com/AdamAugustinsky/tinder_itb-mobile)

## Localmente

- Rode o projeto na sua máquina utilizando um dos scripts

- Acesse a porta 3001 em [http://localhost:3001](http://localhost:3001/), caso você queira mudar a porta de acesso local, modifique o número da seguinte função em src > server.js

      ![https://i.imgur.com/6SFfPGl.png](https://i.imgur.com/6SFfPGl.png)

- Para entender os endpoints e as suas funcionalidades veja a **documentação da API**

## Insomnia

O insomnia serve para você entender as funcionalidades da API e usá-las de forma mais correta e simples, para rodar o projeto no insomnia faça os seguintes passos:

- Baixe o insomnia em <https://insomnia.rest/download/>
- Importe o projeto clicando nesse botão [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=tinder-itb-backend-v0.3.0&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCauaspinheiro%2Finsomnia%2Fmaster%2Ftinder-itb-backend%2Ftinder-itb-insomnia-v0.3.0.json%3Ftoken%3DANNCZHPSRG4IA5AQZCLS2PK6MLQOM)

# Licença

![GitHub](https://img.shields.io/github/license/Cauaspinheiro/tinder-itb-backend?style=for-the-badge)

> Você pode ler toda a licença do projeto [aqui](https://github.com/Cauaspinheiro/tinder-itb-backend/blob/master/LICENSE)

Esse projeto é licenciado sobre os termos de uso da licença **MIT**

# Linguagem de programação utilizada

![https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F1200px-Unofficial_JavaScript_logo_2.svg.png&f=1&nofb=1](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F1200px-Unofficial_JavaScript_logo_2.svg.png&f=1&nofb=1)

**[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**

# Ferramentas utilizadas

## [Bcrypt](https://github.com/dcodeIO/bcrypt.js)

bcrypt é um método de criptografia do tipo hash para senhas baseado no Blowfish. (Fonte: Wikipédia)

## [Celebrate](https://github.com/arb/celebrate)

Um middleware de validação do [joi](https://github.com/hapijs/joi) para o Express.

## [Commitizen](https://github.com/commitizen/cz-cli)

Forma mais simples de fazer commits usando CLI

## [Commitlint](https://commitlint.js.org/#/)

Verifica se os commits do Github seguem uma regrão padrão (Regra utilizada: Airbnb)

## [Cors](https://github.com/expressjs/cors)

Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. (Fonte: MDN web docs)

## [Cross-env](https://github.com/kentcdodds/cross-env)

Use variáveis ambientes através de scripts do package.json

## [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

CLI para fazer commits mais simples e rápidos. Parte do [Commitizen](https://github.com/commitizen/cz-cli)

## [Dotenv](https://github.com/motdotla/dotenv)

Usado para carregar variáveis ambientes do arquivo .env em process.env

## [ESLint](https://eslint.org/)

Procura e conserta problema no seu código JS

## [Express](https://expressjs.com/pt-br/)

Framework web rápido, flexível e minimalista para Node.js

## [Firebase Storage](https://firebase.google.com/products/storage)

Armazene e compartilhe conteúdo gerado pelo usuário, como imagens, áudio e vídeo, com armazenamento de objetos eficiente, simples e econômico desenvolvido para o escalonamento do Google. (Fonte: Firebase)

## [Husky](https://github.com/typicode/husky)

Para rodar scripts JS em hooks do git

## [JWT](https://github.com/auth0/node-jsonwebtoken)

O JSON Web Token é um padrão da Internet para a criação de dados com assinatura opcional e/ou criptografia cuja sua payload contém o JSON que afirma algum número de declarações. Os tokens são assinados usando um segredo privado ou uma chave pública/privada. (Fonte: Wikipédia)

## [Lint-Staged](https://github.com/okonet/lint-staged)

Roda linters (ESLint) em arquivos que foram commitados no git.

## [MongoDB](https://pt.wikipedia.org/wiki/MongoDB)

MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas. (Fonte: Wikipédia)

## [Mongoose](https://mongoosejs.com/)

O Mongoose fornece uma solução direta e baseada em esquema para modelar os dados do banco de dados MongoDB.

Observação: Link em inglês

## [Multer](https://github.com/expressjs/multer)

Um middleware express para lidar com diversos tipos de dados. Usado nesse projeto somente para lidar com arquivos de imagens.

## [Node.js](https://pt.wikipedia.org/wiki/Node.js)

Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente (frontend) para os servidores, criando aplicações de alta escalabilidade (como um servidor web), manipulando milhares de conexões/eventos simultâneas em tempo real numa única máquina física. (Fonte: Wikipédia)

## [Nodemon](https://nodemon.io/)

Monitora qualquer mudança no seu código e automaticamente restarta o seu server. Perfeito para desenvolvimento

## [Sentry](https://sentry.io/welcome/)

O Sentry fornece monitoramento de erros auto-hospedado e baseado na nuvem. (Fonte: Sentry)

## [Sucrase](https://github.com/alangpierce/sucrase)

Usado para melhorar a build do JS moderno (ES6+)

## [Visual Studio Code](https://code.visualstudio.com/)

O Visual Studio Code é um editor de código redefinido e otimizado para criar e depurar aplicativos modernos da Web e nuvem. O Visual Studio Code é gratuito e está disponível na sua plataforma favorita - Linux, macOS e Windows. (Fonte: Visual Studio Code)

Agradeçemos a todas essas ferramentas por nos ajudar a construir esse projeto ❤

# Documentação da API

Você pode ver toda a documentação das funcionalidades e recursos que a API pode oferecer clicando [aqui](https://www.notion.so/Documenta-o-da-API-1205de0571684a9b8fb2f4bb1f4de55f).
