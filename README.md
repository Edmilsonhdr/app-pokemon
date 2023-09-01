# PokeDex App - Gerador de Pokémons Aleatórios
PokeDex App, um projeto desenvolvido com React e Laravel que permite aos usuários explorar e interagir com o mundo Pokémon! Com este aplicativo, os usuários podem gerar pokémons aleatórios, salvar suas informações e editar seus nomes. Uma lista dos pokémons salvos é exibida ao lado, proporcionando uma visão geral dos pokémons que você já conheceu.

## Recursos Principais

- **Geração de Pokémons Aleatórios:** Com um simples clique no botão "Gerar Pokémon Aleatório", o usuário pode descobrir novos pokémons a cada vez, graças à integração com a API do PokeAPI.

- **Salvamento de Pokémons:** Quando um pokémon chamar sua atenção, você pode salvá-lo para acessá-lo posteriormente. 

- **Edição de Nomes:** Personalize os nomes dos pokémons salvos de acordo com sua preferência.

- **Lista de Pokémons Salvos:** Uma lista organizada exibe todos os pokémons que você salvou, junto com seus nomes personalizados. Dessa forma, você pode acompanhar todos os seus favoritos.

## Como Começar

1. Certifique-se de ter o ambiente de desenvolvimento adequado para React e Laravel configurado em sua máquina.

2. Clone este repositório para o seu computador cd teste_pokemon.

3. Instale as dependências do projeto executando os seguintes comandos:

```bash
# Instale as dependências do frontend (React)
cd frontend
npm install

# Instale as dependências do backend (Laravel)
cd backend
composer install

```

1. Configure as variáveis de ambiente necessárias no arquivo `.env`
   
```bash
   php artisan migrate.
``` 

2. Inicie o servidor de desenvolvimento tanto para o frontend quanto para o backend:

```bash
# No diretório "frontend" para iniciar o servidor React
npm run dev
`http://localhost:5173`
# No diretório "backend" para iniciar o servidor Laravel
php artisan serve
`http://localhost:8000`
```

6. Abra seu navegador e acesse o endereço `http://localhost:5173` para começar a explorar os pokémons!

#
#
