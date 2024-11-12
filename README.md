# REPO01
 
Perguntas para Entrevista
Como você configuraria um projeto para utilizar TypeScript no Node.js?

O que é Prisma e como ele interage com o banco de dados SQLite?

R: Prisma é um ORM (Object-Relational Mapping) que facilita o acesso ao banco de dados. Ele se conecta ao SQLite (ou outros bancos) para mapear dados entre o código e o banco, permitindo consultas e atualizações com facilidade.

No modelo Prisma, qual a função do campo @updatedAt?

R: Atualiza automaticamente com a data/hora atual cada vez que o registro é modificado, útil para controle de versões ou auditoria.

Qual a diferença entre as funções req.on('data') e req.on('end') no código do servidor HTTP?

R: req.on('data') captura os dados em partes conforme chegam, enquanto req.on('end') é acionado após todos os dados serem recebidos, sinalizando o fim da transferência.

Por que usamos o JSON.stringify na resposta da API?

R: Converte dados JavaScript para uma string JSON, permitindo que o cliente interprete a resposta corretamente como JSON.

Quais seriam as vantagens de utilizar Express nesse projeto, se decidíssemos por adicioná-lo?

R: Facilita a criação de rotas, middleware, e tratamento de requisições/respostas, tornando o código mais modular e legível.

Como você executaria migrações no Prisma?

R: Com o comando npx prisma migrate dev, que aplica e controla alterações no banco de dados conforme o esquema.

Se você precisasse adicionar validações nos dados do usuário, onde isso seria feito no código?

R: Seriam feitas antes de salvar os dados no banco, podendo ser implementadas diretamente no código do servidor ou com bibliotecas como express-validator.

Como você trataria erros no código atual para melhorar a robustez da API?

R: Usaria try-catch e mensagens de erro específicas, além de status HTTP adequados para feedback claro ao usuário e logs para depuração.

Como você expandiria essa API para incluir autenticação de usuários?

R:Adicionaria middleware para autenticação (JWT ou sessions) e rotas protegidas para acessar dados, mantendo assim a segurança.

Essas perguntas servem para avaliar o entendimento técnico do candidato sobre os conceitos abordados no artigo, bem como sua capacidade de expandir e melhorar o projeto.
