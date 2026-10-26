const http = require("node:http");

const porta = process.env.PORT || 3000;

const servidor = http.createServer((pedido, resposta) => {
  const rota = pedido.url;

  let conteudo;
  let status = 200;

  if (rota === "/") {
    conteudo = `
      <h1>Meu projeto de ADS</h1>
      <p>Aplicação de Thiago para a disciplina de Desenvolvimento de Software em Nuvem.</p>
    `;
  } else if (rota === "/sobre") {
    conteudo = `
      <h1>Sobre mim</h1>
      <p>Sou estudante de Análise e Desenvolvimento de Sistemas.</p>
      <p>Estou aprendendo a desenvolver aplicações para a nuvem.</p>
    `;
  } else if (rota === "/projeto") {
    conteudo = `
      <h1>Sobre o projeto</h1>
      <p>Trabalho da disciplina de Desenvolvimento de Software em Nuvem.</p>
      <p>Esta aplicação possui três rotas que retornam páginas HTML.</p>
    `;
  } else {
    status = 404;
    conteudo = `
      <h1>Página não encontrada</h1>
      <p>Use o menu para acessar uma página existente.</p>
    `;
  }

  resposta.writeHead(status, {
    "Content-Type": "text/html; charset=utf-8"
  });

  resposta.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <title>Meu projeto na nuvem</title>
      </head>
      <body>
        <nav>
          <a href="/">Início</a> |
          <a href="/sobre">Sobre mim</a> |
          <a href="/projeto">Projeto</a>
        </nav>
        <hr>
        ${conteudo}
      </body>
    </html>
  `);
});

servidor.listen(porta, "0.0.0.0", () => {
  console.log("Servidor funcionando na porta " + porta);
});