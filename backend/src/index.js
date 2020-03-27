const express = require('express'); // importando o pacote express pro arquivo 
const cors = require('cors');
const routes = require('./routes'); // importando o arquivo de rotas (precisa do ./ para indiicar o caminho do arquivo, diferente da importação do express que é um pacote e apenas o nome é o suficiente)

const app = express(); // declarando o express numa variável

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HHTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Parms: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação)
   * Route Parms: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   */

   /**
    * Banco de dados
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */



app.listen(3333); // comunicação com o navegador através da porta 3333