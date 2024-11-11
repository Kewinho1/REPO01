import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const requestHandler = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET' && req.url === '/users') {
    const users = await prisma.user.findMany();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(users));
  } 
  if (req.method === 'POST' && req.url === '/users') {
    let body = '';
     for await (const chunk of req) {
        body += chunk;
      }

      const { name, email } = JSON.parse(body);
      const newUser = await prisma.user.create({
        data: { name, email },
      });
      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(newUser));
  } 
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Rota não encontrada' }));
  }
;

const server = createServer(requestHandler);

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});