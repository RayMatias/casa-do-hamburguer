🍔 Burger House — Sistema Completo de Gestão e Delivery

🎯 O Problema que este Projeto Resolve
No setor de fast-food e restauração, pequenos e médios estabelecimentos enfrentam frequentemente desafios operacionais significativos:

Falta de autonomia digital: Muitos negócios dependem de plataformas de entrega terceirizadas que cobram taxas abusivas por cada pedido.

Experiência fragmentada: A ausência de um sistema centralizado dificulta o controlo de stock, o registo de utilizadores e o acompanhamento em tempo real dos pedidos efetuados.

Responsividade deficiente: Plataformas web lentas ou mal adaptadas frustram utilizadores que navegam tanto pelo computador quanto por dispositivos móveis.

O Burger House surge como uma solução robusta, moderna e de código aberto (Open Source) para o ecossistema de delivery de hambúrgueres. A aplicação oferece um fluxo completo de ponta a ponta: desde a autenticação segura de clientes, navegação interativa pelo cardápio, gestão de carrinho dinâmica com estado persistente, até ao checkout integrado com submissão de pedidos e painel de acompanhamento de status em tempo real — tudo isto com uma interface totalmente responsiva (Mobile First) e otimizada.

🚀 Como Executar o Projeto
Para executar este projeto na tua máquina, vais precisar de ter o Docker e o Docker Compose devidamente instalados, além de configurar as variáveis de ambiente.

1. Pré-requisitos
Docker & Docker Compose instalados e a funcionar.

2. Passo a Passo
Clona este repositório para a tua máquina:git clone https://github.com/teu-utilizador/burger-house.git
cd burger-house

**Configura o ficheiro de variáveis de ambiente (.env). Na raiz do projeto, cria um ficheiro chamado .env baseado no modelo abaixo:
DATABASE_URL="postgresql://admin:adm123@localhost:5432/hamburgueria_db?schema=public"
AUTH_SECRET="tua_chave_secreta_aqui"
AUTH_GOOGLE_ID="teu_google_client_id"
AUTH_GOOGLE_SECRET="teu_google_client_secret"
UPLOADTHING_TOKEN="teu_uploadthing_token"

**Sobe os contentores utilizando o Docker Compose (isto irá iniciar a aplicação e a base de dados em simultâneo):docker compose up --build

**Acede à aplicação e explora o site através da página de autenticação em: http://localhost:3000/login

🛠 Tecnologias Utilizadas
*O projeto foi desenvolvido com uma stack moderna de desenvolvimento web focada em performance, escalabilidade e produtividade:

*Frontend & Framework: Next.js (App Router) & React

*Linguagem: TypeScript para maior segurança e tipagem estática.

*Estilização: Tailwind CSS para um design moderno, limpo e adaptável (Dark Mode).

*Autenticação: NextAuth.js para controlo de sessões de utilizador.

*Gestão de Estado Global: Zustand para o carrinho de compras.

*Base de Dados & ORM: Prisma ORM com PostgreSQL.

*Upload de Ficheiros: Uploadthing para gestão de imagens dos produtos.

*Containerização: Docker & Docker Compose para automatizar o ambiente de desenvolvimento e base de dados.

*Ícones: Lucide React

Demonstração do Sistema (GIFs)
Abaixo podes conferir o funcionamento das principais telas do sistema, tanto na versão Desktop quanto na versão Mobile:
1. Autenticação (Login)
2. Registo de Utilizador
3. Gestão e Criação de Produtos
4. Fluxo de Pedidos (Cardápio e Carrinho)
5. Listagem e Gestão de Pedidos
6. Perfil do Utilizador

### 1. Autenticação (Login)
<div align="center">
  <img src="./public/GIF/logindesktop-ezgif.com-video-to-gif-converter.gif" width="45%" alt="Login Desktop" />
  <img src="./public/GIF/loginmobile-ezgif.com-video-to-gif-converter.gif" width="25%" alt="Login Mobile" />
</div>

### 2. Registo de Utilizador (Cadastro)
<div align="center">
  <img src="./public/GIF/cadastroDescktop-ezgif.com-video-to-gif-converter.gif" width="45%" alt="Cadastro Desktop" />
  <img src="./public/GIF/cadastromobile-ezgif.com-video-to-gif-converter.gif" width="25%" alt="Cadastro Mobile" />
</div>

### 3. Gestão e Criação de Produtos (Cadastro de Produtos)
<div align="center">
  <img src="./public/GIF/cadastroProdutoDesktop-ezgif.com-video-to-gif-converter.gif" width="45%" alt="Cadastro de Produto Desktop" />
  <img src="./public/GIF/CadastrarProdutoMobile-ezgif.com-video-to-gif-converter.gif" width="25%" alt="Cadastro de Produto Mobile" />
</div>

### 4. Fluxo de Pedidos (Cardápio e Carrinho)
<div align="center">
  <img src="./public/GIF/fazendoPedidoDesktop-ezgif.com-video-to-gif-converter.gif" width="45%" alt="Fazendo Pedido Desktop" />
  <img src="./public/GIF/PedidosMobile-ezgif.com-video-to-gif-converter.gif" width="25%" alt="Pedidos Mobile" />
</div>

### 5. Listagem e Gestão de Pedidos (Painel de Administração e Lista)
<div align="center">
  <img src="./public/GIF/TabelasPedidosADM-ezgif.com-video-to-gif-converter.gif" width="45%" alt="Tabela de Pedidos ADM" />
  <img src="./public/GIF/ListaPedidosMobile-ezgif.com-video-to-gif-converter.gif" width="25%" alt="Lista de Pedidos Mobile" />
</div>

### 6. Perfil do Utilizador
<div align="center">
  <img src="./public/GIF/PerfilDescktop-ezgif.com-video-to-gif-converter.gif" width="45%" alt="Perfil Desktop" />
  <img src="./public/GIF/PerfilMobile-ezgif.com-video-to-gif-converter.gif" width="25%" alt="Perfil Mobile" />
</div>


👨‍💻 Autora
Desenvolvido por Rayla Matias 🚀

Se gostaste do projeto, deixa uma ⭐ no repositório!

