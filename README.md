Projeto feito em NestJS.

--> Requires:

```nodejs``` (com nest-cli instalado) ou ```nix``` usando ```nix flake develop``` no dir atual

--> Taks:

[] --> Conexão a uma API de valor atual da moeda;
[] --> Ferramentas comparativas
[] --> Receber um valor e sua moeda de origem 'aka: 300 reais, brl'
[] --> Converter esse valor para USD e EUR (Criar condição se o valor solicitado já for dolar/eur)
[] --> Expor operações CRUD para gerênciamento de conversões

--> Funcionalidades:

[] ---> Criar uma conversão de moeda
[] ---> Consultar conversões realizadas (uma moeda pode ter 3 conversões em um dia)
[] ---> Atualizar uma conversão existente
[] ---> Remover uma conversão
[] ---> Converter valores utilizando taxas de câmbio atualizadas ou simuladas
[] ---> Persistir histórico de conversões
[] ---> Tratamento de exceções


Tech obrigatorias:

[X] --->  NestJS
[] --->  TypeScript
[] --->  MongoDB/MySQL
