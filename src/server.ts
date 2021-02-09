import express from 'express';

const app = express();

app.get('/', function(request, response) {
  response.json({message: 'Inicio do projeto'});
});

app.listen(3000);
