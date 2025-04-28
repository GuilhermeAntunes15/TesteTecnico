
User CRUD - Fullstack Application (Node.js + React + PostgreSQL + TailwindCSS)

Este projeto é um sistema completo de cadastro de usuários (CRUD) utilizando:

- Backend: Node.js + Express + Sequelize (ORM) + PostgreSQL
- Frontend: React + Axios + TailwindCSS
- ORM/Migrations: Sequelize CLI

---

✨ Tecnologias e bibliotecas utilizadas

Backend
- Node.js
- Express
- Sequelize
- PostgreSQL
- dotenv
- cors
- sequelize-cli

Frontend
- React
- Axios
- React Router DOM
- TailwindCSS

---

📁 Estrutura do Projeto

```bash
TesteTecnico/
├── README.md
├── .gitignore
├── backend/
│   ├── config/
│   ├── migrations/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── pages/
    │   ├── services/
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
```

---

⚙️ Como rodar o projeto

Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando
- Git instalado

---

🔥 Passo a passo

1. Clone o projeto

git clone https://github.com/GuilhermeAntunes15/TesteTecnico.git
cd TesteTecnico

---

2. Configurar o backend

cd backend

Instale as dependências:

npm install

Crie um arquivo .env com o conteúdo:

PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASS=yourpassword
DB_NAME=teste_tecnico
DB_PORT=5432

Crie o banco de dados no PostgreSQL:

npx sequelize-cli db:create

Rode as migrations:

npx sequelize-cli db:migrate

Inicie o servidor backend:

npm run dev

O backend estará rodando em: http://localhost:3000

---

3. Configurar o frontend

cd ../frontend

Instale as dependências:

npm install

Inicie o servidor frontend:

npm start

O frontend estará rodando em: http://localhost:3001 (ou 3000, dependendo da sua máquina).

---

🎯 Funcionalidades

- Criar novos usuários
- Listar todos os usuários
- Atualizar informações de usuários
- Deletar usuários
- Buscar usuários por nome ou email
- Interface estilizada com TailwindCSS

---

🧹 Comandos úteis

| Ação                       | Comando                          |
| --------------------------- | -------------------------------- |
| Instalar dependências       | npm install                     |
| Rodar servidor backend      | npm run dev                     |
| Rodar servidor frontend     | npm start                       |
| Criar banco de dados        | npx sequelize-cli db:create     |
| Executar migrations         | npx sequelize-cli db:migrate    |

---

📜 Observações finais

- O sistema foi desenvolvido com o objetivo de ser simples, funcional e limpo.
- O frontend consome a API REST do backend utilizando Axios.
- As validações básicas estão implementadas tanto no frontend quanto no backend.
- O projeto é totalmente responsivo e preparado para futuras melhorias.

---

