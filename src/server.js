import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
    const {method, url} = request

    if(method === 'GET' && url === '/users'){

        // Early Return
        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users'){

        users.push({
            id: '1',
            name: 'John Doe',
            email: 'email@example.com',
        })

        return response.end('Criação de Usuários')
    }

  return response.end('Hello World')
})

server.listen(3333)