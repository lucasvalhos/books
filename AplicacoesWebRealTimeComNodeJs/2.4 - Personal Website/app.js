var http = require('http');
var fs = require('fs');


var server = http.createServer(function(request, response){
  // A constante __dirname retorna o diretório raiz da aplicação
  function loadPage(page) {
    fs.readFile(__dirname + '/'+ page +'.html', function(err, html){
      response.writeHeader(200, {'Content-Type': 'text/html'});
      response.end(html);
    });
  }
 
  if(request.url == "" || request.url == "/") {
    loadPage('index');
  }else if(request.url == "/artigos") {
    loadPage('artigos');
  }else if(request.url == "/contato") {
    loadPage('contato');
  }else{
    loadPage('erro');
  }
  
});

server.listen(3000, function(){
  console.log('Executando Site Pessoal');
});
