# Inspetor Industrial - Landing Page

Este é o repositório da landing page para o **Inspetor Industrial**, um projeto desenvolvido para apresentar a empresa, seus serviços e facilitar o contato de novos clientes através de um formulário moderno e funcional.

O design foi construído com foco em **mobile-first**, garantindo uma experiência de usuário fluida e acessível em qualquer dispositivo.

![Preview da Página de Contato](/public/application-background.png)

## ✨ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **React 19**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build extremamente rápida para desenvolvimento web moderno.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS v4**: Framework CSS utility-first para estilização rápida e customizável.
- **Shadcn UI**: Coleção de componentes de UI reusáveis e acessíveis, construídos sobre Radix UI e Tailwind CSS.
- **React Hook Form** & **Zod**: Para gerenciamento e validação de formulários de forma robusta e segura.
- **Lucide React**: Biblioteca de ícones open-source.

## 📂 Estrutura do Projeto

A estrutura de arquivos foi organizada para manter o código modular e de fácil manutenção:

```
/src
├── /components         # Componentes reutilizáveis da aplicação
│   ├── /ui             # Componentes base da Shadcn UI (Button, Card, Input, etc.)
│   └── about.tsx
│   └── benefits.tsx
│   └── contact-section.tsx
│   └── ...
├── /pages              # Componentes de página completos
│   └── landing.tsx
├── /lib                # Funções utilitárias e configurações
│   └── utils.ts
├── app.tsx             # Componente raiz da aplicação
├── main.tsx            # Ponto de entrada da aplicação
├── global.css          # Estilos globais e configuração do Tailwind
└── router.tsx          # Configuração de rotas
```

## 🚀 Como Começar

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
- [pnpm](https://pnpm.io/installation) (gerenciador de pacotes)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/inspetor-industrial.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd inspetor-industrial
    ```
3.  Instale as dependências:
    ```bash
    pnpm install
    ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
pnpm dev
```

Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) no seu navegador para ver a aplicação.

## 🛠️ Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento com hot-reload.
- `pnpm build`: Compila e otimiza a aplicação para produção. Os arquivos finais estarão na pasta `/dist`.
- `pnpm lint`: Executa o linter (ESLint) para verificar a qualidade do código.
- `pnpm preview`: Inicia um servidor local para visualizar a versão de produção.

## 🎨 Customização

### Tailwind CSS

As configurações do Tailwind estão no arquivo `tailwind.config.js`. Você pode customizar o tema, adicionar novas cores, fontes e outras propriedades conforme a necessidade.

### Shadcn UI

Para adicionar novos componentes da Shadcn UI, utilize o comando:

```bash
pnpm dlx shadcn-ui@latest add [nome-do-componente]
```

Isso irá adicionar o código-fonte do componente diretamente na pasta `src/components/ui`, permitindo total controle sobre sua estilização e comportamento.
