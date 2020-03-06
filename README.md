
# Tinder ITB - REST API

Como o Tinder, mas focado para alunos do ITB, nossa escola.

Uma rest API em Node.js, usando o framework [Express](https://github.com/expressjs/express)

# Guia de instalação

**GIT**

- Instale o git em sua máquina: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Com o git instalado na sua máquina, execute o seguinte comando para criar um clone do repositório na sua maquina local:
  `git clone https://github.com/Cauaspinheiro/tinder-itb-backend.git`
- Abra a pasta do repositório em um editor de texto (recomendação: [Visual Studio Code](https://code.visualstudio.com/))
- Com a pasta aberta, crie um arquivo chamado .env (fora de qualquer pasta dentro do repositório)

  ![arquivo.env](https://i.imgur.com/Ou8eXGt.png)

  Esse arquivo vai nos possibilitar criar variaveis de ambiente para a API

**MongoDB**

- Siga os seguintes passos para criar uma key de acesso ao seu Cluster do MongoDB
  https://codeforgeek.com/mongodb-atlas-node-js/
- Com a key criada, coloque o seguinte codigo no seu arquivo .env, trocando o que for pedido, sem as tags <>:
  `MONGO_KEY=<COLOQUE-SUA-KEY-AQUI>`

**Importante!** lembre-se de trocar o `<password>` na sua key do mongoDB pela sua senha

**JSON Web Token**

- Entre no site https://www.md5online.org/
- Crie um hash para a sua API, podendo ser qualquer cojunto de letras
- Com o hash criado, coloque o seguinte codigo no seu arquivo .env, trocando o que for pedido, sem as tags <>:
  `JWT_SECRET=<COLOQUE-SEU-HASH-AQUI>`
  `JWT_EXPIRES=30d`

**Importante!** a forma que as variaveis do arquivo .env estão digitadas devem estar exatamente da forma que estão nesse guia de instalação.

![Conteudo do arquivo .env](https://i.imgur.com/AM3z7UX.png)

**Firebase**

- Crie um projeto no firebase: https://firebase.google.com/?hl=pt-BR
- Dentro do projeto, clique na engrenagem do lado de "Project overview" > configurações do projeto > Contas de serviço > SDK admin do firebase > node.js > gerar nova chave privada > gerar chave
  
  ![Firebase](https://i.imgur.com/9V8UIZP.png)
- Depois, crie um arquivo chamado serviceAccount.json na pasta do repositório

   ![Arquivo json](https://i.imgur.com/1fpYVkU.png)

- Cole todo o conteudo neste arquivo
- Entre em "Storage" e copie o link do seu bucket, sem o "gs://"

	![Storage Bucket Firebase](https://i.imgur.com/SCeTMWW.png)

- Nesse caso, ficaria apenas `tinder-itb.appspot.com`
- No seu arquivo .env, coloque o seguinte código, trocando o que for pedido, sem as tags <>:
 `FIREBASE_BUCKET=<SEU-STORAGE-BUCKET>`

**NodeJS**

- Baixe a versão LTS do node em https://nodejs.org/en/
- Para testar se o node está instalado na sua maquina, rode o seguinte comando `node -v`. Deverá aparecer a versão do NodeJS

**Yarn** (Opcional) (Recomendado)

- Baixe a versão mais nova do yarn em https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable
- Para testar se o yarn está instalado na sua maquina, rode o seguinte comando `yarn -v`. Deverá aparecer a versão do Yarn

**Instalação dos pacotes**

- Dentro na pasta do projeto, rode o seguinte comando: - Se você estiver usando o yarn: `yarn` 
- Se você estiver usando o npm: `npm install`

**Pronto!** você já pode começar a testar o aplicativo, vá para a aba Scripts para ver quais scripts estão disponiveis para uso

## Scripts

- Rodar a api com reload automático utilizando o [nodemon](https://github.com/remy/nodemon):
  - Se você estiver usando o yarn: `yarn dev` 
  - Se você estiver usando o npm: `npm dev`
  
- Rodar a api sem reload automático:
  - Se você estiver usando o yarn: `yarn start`
  - Se você estiver usando o npm: `npm start`

## Formas de acesso a API

Estamos documentando a API, por isso é recomendado usar o aplicativo do React Native, publicaremos o quanto antes a documentação completa da API

**Aplicativo React Native**

- Utilize o projeto [https://github.com/AdamAugustinsky/tinder_itb-mobile](https://github.com/AdamAugustinsky/tinder_itb-mobile)

**Insomnia**

- Baixe o insomnia em https://insomnia.rest/download/
- Importe o projeto clicando nesse botão [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=tinder-itb-backend-v0.3.0&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCauaspinheiro%2Finsomnia%2Fmaster%2Ftinder-itb-backend%2Ftinder-itb-insomnia-v0.3.0.json%3Ftoken%3DANNCZHPSRG4IA5AQZCLS2PK6MLQOM)

## Notas

- Esse projeto ainda está em fase de desenvolvimento, por isso, erros ou falhas serão comuns, se acontecer qualquer erro enquanto você está mexendo nesse projeto, por favor crie uma [Issue](https://github.com/Cauaspinheiro/tinder-itb-backend/issues) no Github
