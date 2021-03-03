import 'reflect-metadata';
import createConnection from './database';
const express = require('express');
import { router } from './routes';

createConnection()
const app = express();
const PORT = 3333 || process.env.PORT;

app.use(express.json());
app.use(router)

export {app, PORT}