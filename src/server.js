// Métodos HTTP
// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => Buscando usuários no back-end | Exemplo: GET /users?id=123 --- GET /users?status=ativo
// POST /users => Criar um usuário no back-end

import http from 'node:http'

const server = http.createServer((request, response) => {
    const {method, url} = request

    if(method === 'GET' && url === '/users'){

        // Early Return
        return response.end('Listagem de Usuários')
    }

    if (method === 'POST' && url === '/users'){
        return response.end('Criação de Usuários')
    }

  return response.end('Hello World')
})

server.listen(3333)