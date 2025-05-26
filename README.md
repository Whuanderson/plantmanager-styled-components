# Plant Manager 🌱

<p align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/plantmanager-styled-components/refs/heads/main/.github/logo.png" alt="Plant Manager logo" height="120"/>
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Whuanderson/plantmanager-styled-components">
  <a href="https://www.linkedin.com/in/whuanderson-de-sousa-porto-marinho-a07204216/" target="_blank">
    <img alt="Made by Whuanderson" src="https://img.shields.io/badge/Made%20by-Whuanderson-green">
  </a>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

> Aplicativo mobile que lembra você de regar e cuidar das suas plantas de acordo com as necessidades de cada espécie. Desenvolvido durante as aulas da **Rocketseat** e re‑escrito usando **styled‑components**.

## 📸 Screenshot

<div align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/plantmanager-styled-components/refs/heads/main/.github/capa.png" alt="Capa do app"/>
</div>

## ✨ Funcionalidades

- Identifica e armazena o usuário localmente  
- Consome API com dados de plantas e suas características  
- Salva as plantas do usuário no dispositivo  
- Envia lembretes locais na frequência ideal de rega  

## 🚀 Tecnologias

- React Native + Expo  
- TypeScript  
- Styled Components  
- Expo Local Notifications  
- Async Storage  
- Axios  
- Date‑fns  
- Lottie  
- Vector Icons  
- React Navigation (Stack & Bottom Tabs)  
- Gesture Handler  
- JSON Server (fake API)  

## 🎨 Layout

O layout original está no Figma: [Plant Manager](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate).

## 💻 Executando o projeto

### Pré‑requisitos

- Node.js + Yarn ou npm  
- Expo CLI (`npm install -g expo-cli`)  
- JSON Server (`npm install -g json-server`)

### Passo a passo

```bash
# clone o repositório
git clone https://github.com/Whuanderson/plantmanager-styled-components
cd plantmanager-styled-components

# instale as dependências
yarn          # ou npm install
```

```bash
# inicie o aplicativo
expo start
```

```bash
# em outro terminal, suba a API fake
json-server src/services/server.json --host SEU_IP_LOCAL --port 3333 --delay 700
```

Altere o IP no arquivo `src/services/api.ts`:

```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_IP_LOCAL:3333',
});

export default api;
```

> Use o mesmo IP da máquina onde o JSON Server está rodando.

---

## 📄 Licença

Distribuído sob licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para detalhes.

<p align="center">
  Feito por <a href="https://github.com/Whuanderson">Whuanderson Marinho</a> — deixe uma ⭐️ se este projeto ajudou você!
</p>
