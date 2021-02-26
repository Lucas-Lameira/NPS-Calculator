const express = require('express');
import {Request, Response} from 'express';
const app = express();
const PORT = 3333 || process.env.PORT;

app.get('/', (request: Request, response:Response) => {
  return response.send('hello')
})

app.post('/user', (request: Request, response:Response) => {
  return response.json({name: "Lucas lameira"});
})

app.listen(PORT, () => {console.log(`App running at ${PORT}`)});

