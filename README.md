
# Cypress Becomex

Esté repositório serve para armazenar um projeto de automação desenvolvido para um teste da empresa Becomex, ele tem como intituito:
1. Realizar testes front-end;
2. Realizar testse de API-REST.

# Configuração do ambiente

Para configurar o ambiente, afim de rodar a automação, é necessário instalar algumas dependências:

1. [VSCode](https://code.visualstudio.com/Download): IDE que será usada;
2. [Node](https://nodejs.org/en/download/package-manager): para instalar as dependencia do javascript do projeto.

Após instalar as ferramentas solicitadas, é necessário fazer o git clone do projeto em alguma pasta do sua escolha.

1. Criar uma pasta no caminho de sua escolha, exemplo: **C:\Documents\workspace\***
2. Abrir o CMD no caminho da pasta criada
3. Rodar o seguinte comando: **git clone https://github.com/AnaStadelhofer/A-BecomexCypress.git**
4. Acessar a pasta que foi criada com o projeto dando: **cd A-BecomexCypress**
5. Rodar o comando para abrir o Visual Code: **code .**

Agora, após ter feito o clone do projeto, basta instalar os pacotes necessários para rodar o projeto. Para isso, digite **npm install** no cmd do projeto.

# Executar o projeto

Após o projeto estar todo configurado, conforme descrito nos passos acima, basta apenas executar agora, para isso é preciso rodar o comando: **npx cypress open**.

Depois de rodar o comando, ele irá abrir uma tela para selecionar qual o navegador para executar os testes automatizados, de preferencia escolha o Chrome, pois foi desenvolvido nele.

# Separação do projeto

Foi feito no projeto automação front-end e de api, que estão separadas pelas seguintes pastas:
1. e2e: está os testes de front-end e, dentro dele também tem um caso de teste detalhando os cenários;
2. 

