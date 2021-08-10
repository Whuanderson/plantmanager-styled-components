<h1 align="center">
  <img alt="plant manager" title="Plant Manager" src=".github/logo.png" />
</h1>

<div align="center">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Whuanderson/plantmanager-styled-components">
    <a href="https://www.linkedin.com/in/whuanderson-de-sousa-porto-marinho-a07204216//" target="_blank" rel="Whuanderson">
      <img alt="Made by" src="https://img.shields.io/badge/Made%20by-Whuanderson-green">
    </a>
    <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
  </div>
  
  ![cover](.github/capa.png?style=flat)
   

 <p align="center">
  :rocket: Aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de plantinha. Feito com a @Rocketseat, atualizado e utilizando styled components
 </p>
 
 <div align="center">
  <sub>O Projeto. Feito por:
    <a href="https://github.com/Whuanderson">Whuanderson Marinho</a>
  </sub>
</div>

# :hammer_and_wrench: Características 

-   [ ] Salva a identificação do usuário no próprio dispositivo o usuário;
-   [ ] Consome de API os dados e características de cada planta;
-   [ ] Salva localmente a planta que o usuário possue;
-   [ ] Lembra o usuário quando regar e cuidar da plantinha de acordo com a frequência ideial das plantas que o usuário possui;

# 🚀 Tecnologias

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo
-   [ ] Expo Local Notifications
-   [ ] Async Storage
-   [ ] Vector Icons
-   [ ] Axios
-   [ ] Date Fns
-   [ ] Lottie
-   [ ] Expo Google Fonts
-   [ ] React Navigation Stack e Bottom Tabs
-   [ ] React Native Gesture Handler
-   [ ] Json Server
-   [ ] Styled Components

# 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

# Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as depedências do projeto.
Em seguida, inicie o projeto e a API fake com o Json Server.

```cl
expo start
json-server ./src/services/server.json --host SEU IP --port 3333 --delay 700
```

 Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.
 
 
 ```ts
 import axios from 'axios';

const api = axios.create({
    baseURL: 'http://SEU_IP',
});

export default api;
```

# :closed_book: Licença

Lançado em 2021 :closed_book: Licença

Feito por [Whuanderson Marinho](https://github.com/Whuanderson) 🚀.
Esse projeto está sobre [MIT license](./LICENSE).

