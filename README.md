# Site Teste Front-End Cyber Gênios

###### Tecnologias utilizadas

* React
* Tailwindcss
* TypeScript

## Organização das pastas

* Arquivos de imagem: dentro da pasta **`public`**
* Arquivos de componentes: dentro da pasta **`components`**
* Arquivo contendo a estrutura principal se encontra no **`APP.tsx`**
  
## Design System
Foi utilizado design system para padronizar os componentes utilizados no projeto, afim de organização e coerencia.

###### Componentes criados

* Button
* Card
* Heading
* Text
* TextInput
* Imagens Mustang
  
## Como eu faço para utilizar o GIT nesse projeto 

- Primeiramente acesse o site do GITHUB (é necessário criar uma conta), após isso entre no link: https://github.com/PauloHenriqueAS/CyberMustang

- Nessa página você irá ver um monte de abas:
    - Code: é onde está o que queremos, os arquivos do nosso site, nosso código.
    - Issues: quando você quer fazer um comentário, achou algum problema no código de alguém ou no seu mesmo, você abre uma **issue** para isso e quando resolver o problema, você a fecha.
    - Pull request: toda vez que você fizer uma alteração no código e quer colocá-la em outra branch é ideal que você faça um pull request, da sua branch para a branch que você quer, mas antes certifique-se de que está tudo correto.

- Agora vamos colocar o código que está no Github em sua máquina?
    - Na aba code, você vai ver um botão verdinho mais para o lado direito da página, nele está escrito **`Code`**, clique nele e copie o link HTTPS que foi dado;
    - Com o GIT instalado, abra o terminal (linux) ou CMD (windows) e digite o seguinte comando:
        ```
        git clone https://github.com/PauloHenriqueAS/CyberMustang.git
        ```
        Pronto você possui todas o conteúdo atual do site em sua máquina

## Como eu faço para rodar o site

- Primeiramente abra seu Visual Studio Code.
- Com o VSCode aberto vá no canto superior esquerdo e selecione **`file`** em seguida **`open file`** e selecione o arquivo clonado anteriormente.
- Com o arquivo aberto abra o terminal e digite o comando:
     ```
      npm run dev
     ```
- Em seguida abra o link que aparecerá no terminal. Exemplo: **`http://localhost:5173/`** 
