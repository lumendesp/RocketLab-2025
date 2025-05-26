# 🚀 RocketLib

RocketLib é uma loja online de livros desenvolvida com **React**, **Vite** e **TypeScript**, oferecendo uma interface rápida e moderna para os usuários navegarem por diversos títulos. Um dos diferenciais da aplicação é a **geração automática de reviews de livros** usando a **API da Groq**.

## 🌐 Acesse o projeto online

Você pode acessar a RocketLib diretamente pelo Vercel:

👉 [https://rocket-lab-2025.vercel.app/](https://rocket-lab-2025.vercel.app/)

---

## ⚙️ Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Groq API](https://groq.com/) – para geração automática de reviews
- [pnpm](https://pnpm.io/) – gerenciador de pacotes

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/lumendesp/RocketLab-2025.git
cd RocketLab-2025
```

### 2. Certifique-se de que você tem o pnpm instalado. Se não tiver, instale com:

```bash
npm install -g pnpm
```

### 3. Depois, instale os pacotes do projeto:

```bash
pnpm install
```

### 4. Configure a variável de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo (você pode copiar o .env.example):

VITE_GROQ_API_KEY=sua_chave_da_api_groq_aqui

🔐 A chave da API Groq é necessária para gerar as reviews automáticas ao acessar um livro. Para obter a sua chave, basta criar uma conta no Groq: https://console.groq.com/keys

### 5. Rode o projeto localmente:

```bash
pnpm dev
```

### Boa! Agora é só abrir no localhost e navegar pelo projeto 🚀
