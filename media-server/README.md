* Projeto responsável por entregar o stream das mídias solicitadas pelos usuários
* Será apenas um servidor Node.js (Não terá interface React.js)

Estrutura do servidor (layers):

4 - Layer Files - (Acessa os arquivos solicitados e retorna o bytes[] do arquivo ) [/reader]

3 - Layer Resolve - (Descobre qual arquivo precisa ser acessado. Acessa DB) [/routes]

2 - Layer Auth - (Autenticação das requisições) [/authentication]

1 - Layer - Connection (Recebe as requisições) [/connection]
            ^   ^   ^
            |   |   |
            |   |   |