# Desafio 2 - Persistence Squad * TI_Rex

## 📌 Sobre
Este é um projeto para um site de e-commerce especializado na venda de móveis, com funcionalidades de um carrosel na Home, exibição de todos os produtos, uma páina com detalhes do produto, carrinho de compras, checkout, contato e login..
Este repositório contém a solução para o Desafio 3 do programa de bolsas Compass Uol. O objetivo do desafio é recriar as páginas, respeitando fielmente o design fornecido no [Figma](https://www.figma.com/design/E1F9AbyIRppkO2Ro1oP2tj/Desafio-3?node-id=0-1&p=f&t=MuelEovB8neuDa8H-0).

## 🚀 Tecnologias utilizadas

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON%20Server-323330?style=for-the-badge&logo=json&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-F7DF1E?style=for-the-badge&logo=clerk&logoColor=black)

 

### Sobre
Este projeto é um e-commerce de móveis, onde os usuários podem visualizar, adicionar ao carrinho, e comprar diversos tipos de móveis. A aplicação está dividida entre o front-end (com React) e o back-end (JsonServer), e as imagens dos produtos estão armazenadas no AWS S3.

#### Funcionalidades

O site é composto de:

**Header**
- Botões com direcionamento da páginas correspondentes;
- Icone de usuário direciona para a página do Login;
- Icone de carrinho abre um overlay com o resumo do carrinho;

**Home**
- Informações sobre a loja
- Uma seção com os produtos da loja, clicando no produto o usuário será encaminhado para a página detalhada do produto (SingleProduct) e passando o mouse sobre a imagem do produto encontra-se o botão para adicionar diretamente ao carrinho
- Um carrossel com mostruário dos produtos da Loja;

**Login**
- Formulário com todas as validações;  

**Shop**
- Botão de filtro com as categorias;
- Paginação mostrando a quantidade de produtos por página;
- Cards dos produtos funcionam da mesma maneira da home, abrindo um overlay com botão de adicionar ao carrinho ou clicando na imagem encaminha para a pagina detalhada do produto; 

**Single Product**
- Mostra o produto em detalhes, com informações e fotos;
- Botão para selecionar a quantidade de produtos;
- Botão para adicionar ao carrinho;

**Cart**
- Carrinho adiciona produtos com imagem, nome, preço, quantidade e subtotal
- Icone da lixeira exclui os produtos;
- Card com resumo da compra mostrando o produto adicionado pelo nome, o subtotal e total da compra;
- Botão de checkout encaminha para a finalização da compra (usuário precisa estar logado para ser encaminhado para a página de login)  

**Chekout**
- Formulário para o faturamento com as validações em todos os campos;
- Resumo da compra, mostrando produto, subtotal e total;

**Contact**
- Formulário para contactar a empresa, com as devidas validações 

#### **Páginas Adicionais**
- Página de erro 404 personalizada.  
- Página de acesso bloqueado para rotas protegidas.


## Estrutura do Repositório
```
/
|-- src/                   # Código fonte do projeto
|   |-- assets/            # Recursos estáticos
|       |-- icons/         # Ícones
|       |-- images/        # Imagens
|           |-- common/      # Images de página logo 
|           |-- error/       # Images de página erro
|           |-- home/        # Images da página home
|           |-- kanban/      # Imagens da página Kanban
|           |-- login/       # Imagens da página de login
|           |-- profile/     # Imagens da página do profile
|           |-- register/    # Imagens de registro
|       |-- style/         # Estilos CSS
|           |-- global.css   # Estilos globais 
|           |-- index.css    # Estilos da página inicial
|           |-- output.css   # Estilos de saída
|   |-- components/        # Componentes React
|           |-- AppRoutes.tsx                 # Rotas do aplicativo
|           |-- main.tsx                      # Arquivo principal do aplicativo
|                |-- common/       # Componentes comuns
|                    |-- Button.tsx            # Componente de botão
|                    |-- FeaturedCards.tsx     # Componente de cartões em destaque
|                    |-- Modal.tsx             # Componente de modal
|           |-- interfaces/        # Interfaces
|                    |-- Task.tsx              # Interface de tarefa
|                    |-- User.tsx              # Interface de usuário
|           |-- layout/            # Componentes de layout
|                    |-- auth/          # Componentes de autenticação
|                        |-- AuthSection.tsx       # Seção de autenticação
|                    |-- error/         # Componentes de Erro
|                        |-- blockedSection.tsx    # Seção bloqueada 
|                        |-- NotFoundSection.tsx   # Seção de página não encontrada 
|                    |-- footer/        # Componentes do Footer
|                        |-- Footer.tsx            # Rodapé 
|                    |-- header/        # Componentes do Header
|                        |-- Header.tsx            # Cabeçalho 
|                        |-- Navbar.tsx            # Barra de navegação  
|                    |-- home/          # Componentes do Header
|                        |-- FeaturedToolsSection.tsx # Seção de ferramentas em destaque 
|                        |-- MainSection.tsx          # Seção principal
|                        |-- ManagerSection.tsx       # Seção do gerenciamento
|                        |-- SubscribeSection.tsx     # Seção de inscrição
|                    |-- kanban/       # Componentes do Kanban
|                        |-- Board.tsx                # Componente de dashboard 
|                        |-- Card/         # Componentes de cartões
|                            |-- UserCard.tsx         # Componente de cartão do usuário
|                            |-- Card.tsx             # Componente de cartão
|                        |-- columns/       # Componentes de colunas
|                            |-- Column.tsx           # Componente de coluna
|                        |-- notification/  # Componentes de notificação
|                            |-- Notification.tsx     # Componente de Notificação
|                        |-- Projectinfo/   # Componentes de informações do projeto
|                            |-- ModalProject.tsx     # Componente de modal do projeto 
|                        |-- User/          # Componentes de usuário
|                            |-- USerList.tsx         # Componente de lista de usuários
|                        |-- profile/       # Componentes de perfil 
|                            |-- Latestactivity.tsx   # Atividade recente 
|                            |-- ProfileCard.tsx      # Cartão de perfil 
|                            |-- Weeklyreport.tsx     # Relatório
|           |-- pages/         # Componentes de páginas
|                   |-- BlockedPage.tsx        # Página bloqueada
|                   |-- HomePage.tsx           # Página inicial
|                   |-- KanbanPage.tsx         # Página do Kanban 
|                   |-- LoginPage.tsx          # Página de login
|                   |-- NotFoundPage.tsx       # Página de não encontrado 
|                   |-- ProfilePage.tsx        # Página de perfil
|                   |-- RegisterPage.tsx       # Página de registro    
|                   |-- SettingsPage.tsx       # Página de configurações 
```

## 🙋🏻‍♂️ Autores

 [<img src="https://avatars.githubusercontent.com/u/121143376?v=4" width=115><br><sub>Thais Silva</sub>](https://github.com/ThaisSil) |
 
 


## 🛠️ Como executar o projeto

Clone o repositório:

- Clone este repositório em sua máquina local usando o comando `git clone`.

  -git clone [Repo](https://github.com/ThaisSil/Desafio3-TI-Rex.git)


# Project Dependencies

This project uses the following dependencies:

- **Frontend Frameworks & Tools**:
  - `@clerk/clerk-react@5.21.0`: Authentication library for React applications.
  - `react@18.3.1`: JavaScript library for building user interfaces.
  - `react-dom@18.3.1`: Entry point for React to interact with the DOM.
  - `react-router-dom@7.1.1`: Declarative routing for React applications.

- **Build Tools**:
  - `vite@6.0.7`: Next-generation frontend tooling for development and build.
  - `@vitejs/plugin-react@4.3.4`: Plugin for Vite to support React fast refresh and JSX.

- **CSS Framework**:
  - `tailwindcss@3.4.17`: Utility-first CSS framework for styling.

- **Development Tools**:
  - `concurrently@9.1.2`: Run multiple commands concurrently.
  - `eslint@9.17.0`: JavaScript linter to enforce code quality and consistency.
  - `@eslint/js@9.17.0`: Core configuration for ESLint.
  - `eslint-plugin-react-hooks@5.1.0`: ESLint rules for React hooks.
  - `eslint-plugin-react-refresh@0.4.16`: Plugin for ensuring fast refresh compatibility in React.
  - `globals@15.14.0`: Global variables configuration for ESLint.

- **TypeScript Support**:
  - `typescript@5.6.3`: Language for type safety and development productivity.
  - `typescript-eslint@8.19.1`: Integration between TypeScript and ESLint.
  - `@types/react@18.3.18`: Type definitions for React.
  - `@types/react-dom@18.3.5`: Type definitions for React DOM.

- **Mock API**:
  - `json-server@1.0.0-beta.3`: Create a mock REST API using a JSON file as the database.

---

### Installing Dependencies
To install these dependencies, run:
```bash
npm install
```

### Running the Project
Use the following scripts defined in the `package.json`:
- **Development**: Starts the development server with Vite, Tailwind CSS, and JSON Server:
  ```bash
  npm run dev
  ```
- **Build**: Compiles the project for production:
  ```bash
  npm run build
  ```
- **Lint**: Runs ESLint to check for code issues:
  ```bash
  npm run lint
  ```
- **Preview**: Previews the production build:
  ```bash
  npm run preview
  ```